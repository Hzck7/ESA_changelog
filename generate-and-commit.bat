@echo off
setlocal

REM -----------------------------------------------------------------------
REM  generate-and-commit.bat
REM  Se positionne dans le dossier du projet, regenere data.json via
REM  generate-data.mjs, puis commit et push si data.json a change.
REM -----------------------------------------------------------------------

cd /d "E:\changeLog\ESA_changelog"
if errorlevel 1 (
    echo [ERREUR] Impossible d'acceder au dossier E:\changeLog\ESA_changelog
    exit /b 1
)

REM --- Cle API et projet Linear -------------------------------------------
REM Renseigne ici tes valeurs, ou laisse ces deux lignes en commentaire
REM si LINEAR_API_KEY / LINEAR_PROJECT_ID sont deja definies en variables
REM d'environnement systeme (recommande, evite d'avoir la cle en clair ici).
REM set LINEAR_API_KEY=lin_api_xxxxxxxx
REM set LINEAR_PROJECT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

echo Generation de data.json...
node generate-data.mjs
if errorlevel 1 (
    echo [ERREUR] Echec de generate-data.mjs - commit annule.
    exit /b 1
)

REM --- Commit / push seulement si data.json a reellement change ----------
git add data.json

git diff --cached --quiet
if errorlevel 1 (
    echo Changements detectes, commit en cours...
    git commit -m "Mise a jour automatique du changelog/backlog - %date% %time%"
    git push
    if errorlevel 1 (
        echo [ERREUR] Le push a echoue.
        exit /b 1
    )
    echo OK - commit et push effectues.
) else (
    echo Aucun changement a commiter.
)

endlocal
