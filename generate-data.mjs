#!/usr/bin/env node
// generate-data.mjs
// -----------------------------------------------------------------------
// Génère data.json (utilisé par backlog.html et changelog.html) à partir :
//  1. du fichier changelog.md que tu tiens déjà à jour
//  2. des tickets ouverts d'un projet Linear (via l'API GraphQL de Linear)
//
// Utilisation :
//   LINEAR_API_KEY=lin_api_xxx LINEAR_PROJECT_ID=xxxx node generate-data.mjs
//
// Variables d'environnement :
//   CHANGELOG_MD      chemin du changelog.md (défaut: ./changelog.md)
//   OUTPUT            chemin de sortie (défaut: ./data.json)
//   LINEAR_API_KEY    clé API Linear (Paramètres > API dans Linear)
//   LINEAR_PROJECT_ID id du projet Linear à utiliser comme backlog
//                     (visible dans l'URL du projet, ou récupérable via
//                     la requête `projects { nodes { id name } }`)
//
// Si LINEAR_API_KEY / LINEAR_PROJECT_ID ne sont pas fournis, le script
// conserve le backlog déjà présent dans data.json et ne met à jour que
// le changelog.
// -----------------------------------------------------------------------

import fs from 'fs';

const CHANGELOG_MD = 'E:\\Planning\\Planning\\changelog.md';
const OUTPUT = process.env.OUTPUT || './data.json';
const LINEAR_API_KEY = process.env.LINEAR_API_KEY;
const LINEAR_PROJECT_ID = process.env.LINEAR_PROJECT_ID;

// =========================================================================
// 1. PARSING DU CHANGELOG.MD
// =========================================================================

// Correspondance entre les titres de sections ### de ton changelog.md
// et les types reconnus par changelog.html (added / fixed / changed / security)
const TYPE_MAP = {
  'Ajouts': 'added', 'Ajout': 'added',
  'Améliorations': 'changed', 'Modifications': 'changed',
  'Corrections': 'fixed',
  'Sécurité': 'security',
  'Abandon': 'removed', // voir note en bas de fichier : type à ajouter dans changelog.html si utilisé
};

function normalizeDate(raw) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const m = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (m) return `${m[3]}-${m[2]}-${m[1]}`;
  return raw;
}

function parseChangelog(mdRaw) {
  const md = mdRaw.replace(/\r\n/g, '\n'); // normalise les fins de ligne CRLF
  const startIdx = md.indexOf('\n## [');
  const body = startIdx === -1 ? md : md.slice(startIdx + 1);
  const blocks = body.split(/\n(?=## \[)/).filter(b => b.trim().startsWith('## ['));

  const entries = blocks.map(block => {
    const lines = block.split('\n');
    const headerMatch = lines[0].match(/^## \[(.+?)\]\s*-\s*(.+)$/);
    if (!headerMatch) return null;

    const version = headerMatch[1].trim();
    const date = normalizeDate(headerMatch[2].trim());

    let title = null;
    const changes = [];
    let currentType = null;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const noteMatch = line.match(/^`Note de version`\s*:\s*(.+)$/);
      if (noteMatch) { title = noteMatch[1].trim(); continue; }

      if (line.startsWith('###')) {
        const key = Object.keys(TYPE_MAP).find(k => line.includes(k));
        currentType = key ? TYPE_MAP[key] : 'changed';
        continue;
      }

      if (!line.startsWith('-')) continue;
      const type = currentType || 'changed'; // puce sans section ### au-dessus

      const boldMatch = line.match(/^-\s*\*\*(.+?)\*\*\s*(?::\s*\*?(.+?)\*?)?$/);
      const ticketMatch = line.match(/^-\s*([A-Z]{2,10}-\d+)\s*\|\s*(.+)$/); // ex: "ESA-92 | ..."

      if (ticketMatch) {
        changes.push({ type, text: ticketMatch[2].trim(), linearId: ticketMatch[1] });
      } else if (boldMatch) {
        const itemTitle = boldMatch[1].trim();
        const desc = boldMatch[2] ? boldMatch[2].trim().replace(/\*+$/, '') : null;
        changes.push({ type, text: desc ? `${itemTitle} : ${desc}` : itemTitle });
      } else {
        changes.push({ type, text: line.replace(/^-\s*/, '').trim() });
      }
    }

    if (!title) {
      title = changes[0] ? changes[0].text.split(' : ')[0] : `Mise à jour ${version}`;
    }

    return {
      version: version.toLowerCase().startsWith('v') ? version : 'v' + version,
      date,
      title,
      changes,
    };
  }).filter(Boolean);

  // Le plus récent en premier (changelog.html suppose déjà cet ordre)
  entries.sort((a, b) => b.date.localeCompare(a.date));
  return entries;
}

// =========================================================================
// 2. RÉCUPÉRATION DU BACKLOG DEPUIS LINEAR
// =========================================================================

// Mappe la priorité Linear (0-4) vers les 3 niveaux utilisés par backlog.html
const LINEAR_PRIORITY_MAP = { 1: 'haute', 2: 'haute', 3: 'moyenne', 4: 'basse', 0: 'basse' };

// Mappe le "type" d'état Linear (backlog / unstarted / started / completed / canceled)
// vers les 3 colonnes de backlog.html. À ajuster si ton workflow Linear distingue
// autrement "idée" et "planifié".
const LINEAR_STATE_MAP = { started: 'encours', unstarted: 'planifie', backlog: 'idee' };

async function fetchLinearBacklog(apiKey, projectId) {
  const query = `
    query ProjectIssues($projectId: String!) {
      project(id: $projectId) {
        issues(first: 150) {
          nodes {
            identifier
            title
            description
            priority
            state { name type }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.linear.app/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': apiKey },
    body: JSON.stringify({ query, variables: { projectId } }),
  });

  if (!res.ok) {
    throw new Error(`Linear API a répondu ${res.status} : ${await res.text()}`);
  }
  const json = await res.json();
  if (json.errors) {
    throw new Error('Erreur GraphQL Linear : ' + JSON.stringify(json.errors));
  }

  const nodes = json.data.project.issues.nodes;

  return nodes
    .filter(issue => !['completed', 'canceled'].includes(issue.state.type))
    .map(issue => ({
      status: LINEAR_STATE_MAP[issue.state.type] || 'idee',
      priority: LINEAR_PRIORITY_MAP[issue.priority] ?? 'basse',
      title: issue.title,
      desc: (issue.description || '').split('\n')[0].slice(0, 220),
      targetVersion: null,
      linearId: issue.identifier, // ex: "ESA-104" — pratique pour recroiser avec le changelog
    }));
}

// =========================================================================
// 3. ORCHESTRATION
// =========================================================================

async function main() {
  const mdRaw = fs.readFileSync(CHANGELOG_MD, 'utf-8');
  const changelog = parseChangelog(mdRaw);

  let backlog;
  if (LINEAR_API_KEY && LINEAR_PROJECT_ID) {
    backlog = await fetchLinearBacklog(LINEAR_API_KEY, LINEAR_PROJECT_ID);
  } else {
    console.warn(
      'LINEAR_API_KEY / LINEAR_PROJECT_ID absents : le backlog existant est conservé tel quel.'
    );
    const existing = fs.existsSync(OUTPUT)
      ? JSON.parse(fs.readFileSync(OUTPUT, 'utf-8'))
      : { backlog: [] };
    backlog = existing.backlog || [];
  }

  fs.writeFileSync(OUTPUT, JSON.stringify({ changelog, backlog }, null, 2), 'utf-8');
  console.log(`✔ ${OUTPUT} généré : ${changelog.length} versions, ${backlog.length} éléments de backlog.`);
}

main().catch(err => {
  console.error('✘ Échec de la génération :', err.message);
  process.exit(1);
});
