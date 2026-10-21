# 🛠️ Journal des modifications

Tous les changements notables apportés à ce projet seront documentés dans ce dossier.
## [v1.68.9] - 16/10/2026
`Note de version` : Cette version améliore les listes déroulantes avec recherche : la liste ouverte s'ajuste à son contenu (jusqu'à 10 lignes, largeur du libellé le plus long). La croix qui vide le champ ne masque plus la fin des libellés longs, et le texte ne déborde plus autour de la zone de saisie pendant une recherche. Le commentaire ajouté à une matière depuis l'écran Stock s'affiche dès son enregistrement. L'écran Commandes affiche le ML à produire enregistré de chaque article au lieu de le recalculer, et la modification d'une fiche article met à jour le ML de toutes ses commandes en cours. Les commandes envoyées dans EBP sont datées de leur date de départ.
### 🔄 Améliorations
- **Taille des listes déroulantes avec recherche** : *La liste ouverte n'est pas plus haute que nécessaire et affiche au plus 10 lignes, avec une barre de défilement au-delà. Elle est assez large pour afficher en entier le libellé le plus long, même si elle déborde du champ, et garde cette largeur pendant la recherche. Elle s'ouvre sous le champ, ou au-dessus s'il y a plus de place au-dessus quand elle ne tient pas en dessous.*
### 🐛 Corrections
- **Texte des listes déroulantes avec recherche** : *Un libellé trop long pour tenir sur une ligne (ex. « Thermal Top FIT PH ») passe à la ligne avant la croix au lieu d'être en partie masqué par celle-ci. Pendant la saisie d'une recherche, seul le texte de la zone de saisie est affiché : les lignes du libellé précédent n'apparaissent plus au-dessus et en dessous.*
- **Commentaire du stock** : *Le commentaire saisi en double-cliquant sur une matière de l'écran Stock apparaît dans la liste dès la validation, sans attendre l'actualisation automatique ni cliquer sur « Rafraîchir ». Il est toujours écrit sur la matière modifiée, même lorsque la fenêtre Stock des commandes est aussi ouverte (il pouvait s'afficher sur la matière sélectionnée dans cette autre fenêtre).*
- **ML à produire des commandes** : *Dans l'écran Commandes, l'article sélectionné affiche le ML à produire enregistré sur la commande, et non plus une valeur recalculée à partir du format et des poses en laize actuels. Enregistrer l'article d'une commande ne remplace donc plus son ML sans qu'on l'ait demandé. Si le calcul actuel donne une autre valeur (format ou poses modifiés depuis), le ML s'affiche en orange et son infobulle indique le calcul actuel ; ressaisir la quantité recalcule le ML. Le m², le temps de production et la pastille de stock s'appuient sur le ML affiché.*
- **ML après modification d'un article** : *L'enregistrement d'une fiche article recalcule le ML à produire de toutes les commandes en cours de cet article, et non plus seulement celle affichée dans l'écran Commandes : le planning et le stock réservé en tiennent compte. Les commandes terminées gardent leur ML.*
- **Date des commandes envoyées dans EBP** : *La commande créée dans EBP porte la date de départ de la commande, et non plus la date du jour de l'envoi. Si la commande n'a pas de date de départ, la date du jour est envoyée ; la fenêtre d'envoi indique la date utilisée.*
## [v1.68.8] - 16/10/2026
`Note de version` : Cette version rend la fenêtre de gestion des cylindres (Z) par machine plus claire : on voit d'un coup d'œil ce qui est modifiable, comment ajouter ou supprimer un Z, et si les modifications sont enregistrées. Les modifications ne sont plus perdues en changeant de machine ou en fermant la fenêtre, et l'enregistrement ne réécrit plus les cylindres non modifiés. Les listes déroulantes avec recherche peuvent être vidées d'un clic, et la fenêtre de stock ouverte depuis les commandes affiche désormais un stock à jour.
### 🆕 Ajouts
- **Listes déroulantes avec recherche** : *Une croix apparaît à gauche de la flèche lorsque le champ contient une valeur ; un clic dessus vide le champ.*
### 🔄 Améliorations
- **Gestion des cylindres (Z) par machine** : *La fenêtre affiche un titre au-dessus de chaque liste (« 1. Machine », « 2. Cylindres de … (modifiables) ») et une aide sous la liste des cylindres. Seul le nombre de dents est modifiable, un simple clic suffit pour le saisir et le curseur de texte apparaît au survol ; les colonnes non modifiables (développé) sont grisées. La dernière ligne affiche « + Nouveau Z… » pour ajouter un cylindre. Le bouton « Supprimer la ligne » retire le cylindre sélectionné (la touche Suppr fonctionne toujours). Le bouton « Valider » devient « Enregistrer » et n'est actif que s'il y a des modifications : le message « Modifications non enregistrées » s'affiche à côté et la machine concernée est marquée d'un astérisque, puis « Modifications enregistrées » après l'enregistrement. Changer de machine ou fermer la fenêtre avec des modifications en cours demande s'il faut les enregistrer (Oui / Non / Annuler).*
### 🐛 Corrections
- **Saisie des cylindres** : *Un nombre de dents vide, non entier, négatif ou déjà présent pour la machine est refusé avec un message clair (Échap pour annuler la saisie), au lieu de l'erreur du tableau ou d'une erreur à l'enregistrement. Une ligne d'ajout laissée vide est ignorée.*
- **Enregistrement des cylindres** : *Seuls les cylindres ajoutés, modifiés ou supprimés sont écrits en base : les autres ne sont plus supprimés puis recréés à chaque enregistrement et gardent leurs informations (développé…).*
- **Liste outil** : *Les champs de saisie sont alignés sur la largeur des colonnes de la liste dès l'ouverture de l'écran, et non plus seulement après un redimensionnement.*
- **Stock depuis les commandes** : *La fenêtre Stock ouverte depuis l'écran des commandes relit le stock en base à chaque ouverture (les réservations des articles enregistrés juste avant pouvaient manquer) et est mise à jour par l'actualisation automatique.*
## [v1.68.7] - 14/10/2026
`Note de version` : Cette version conserve l'historique des fiches articles : chaque création ou modification d'un article indique qui l'a faite, quand, et quels champs ont changé. Une ancienne version peut être rechargée dans la fiche pour corriger une erreur. Elle corrige aussi trois pertes de données à l'enregistrement d'un article : le commentaire, l'initiale et le nombre de jours de production ne sont plus effacés, la grande palette n'est plus remplacée par la petite, et le PA HT/1000 garde ses centimes. Les devis conservent aussi l'historique de leurs versions : chaque enregistrement d'un devis modifié crée une nouvelle version (2026-012-V2…), et l'on peut consulter les versions précédentes et choisir celle à utiliser.
### 🆕 Ajouts
- **Historique des fiches articles** : *Chaque création d'article et chaque modification enregistrée depuis la fiche article est conservée : utilisateur connecté (et session Windows), date et heure, champs modifiés avec leur valeur avant et après, et une copie complète de l'article. Un enregistrement sans changement n'ajoute rien à l'historique. À la première modification d'un article déjà existant, son état d'avant est conservé (« État initial ») pour pouvoir y revenir. Dans la fiche d'un article existant, le bouton « Historique » (en bas à gauche) liste les enregistrements, du plus récent au plus ancien ; en sélectionner un affiche le détail des champs modifiés, avec les libellés de la fiche (format, matière, client… et non leur numéro). Le bouton « Charger cette version dans la fiche » remplit la fiche avec les valeurs de la version choisie : rien n'est enregistré tant que l'on n'a pas cliqué sur « Modifier l'article », et cet enregistrement apparaît dans l'historique comme une « Restauration ». Nécessite l'exécution du script scripts/article_historique.sql sur la base avant installation.*
- **Historique des versions de devis** : *L'enregistrement d'un devis existant dont le contenu a changé (client, contact, dimensions, matière, machine, couleurs, dorure, frais, propositions…) ne l'écrase plus : il crée une nouvelle version, numérotée dans l'application avec le suffixe -V2, -V3… (2026-012-V2), qui devient la version utilisée. La version précédente et ses propositions restent consultables. Un enregistrement sans changement, ou avec un simple changement de statut, ne crée pas de version. Dans la saisie du devis, la liste à côté du n° de devis affiche toutes les versions avec leur date (la version utilisée est marquée « active ») : choisir une version l'affiche, et le bouton « Utiliser cette version » en fait la version active, celle listée dans le suivi des devis, imprimée et envoyée par mail. Une ancienne version peut aussi être modifiée : son enregistrement crée une nouvelle version (ex. V4 à partir de la V2). Le n° de version n'apparaît que dans l'application : le document Word/PDF garde le n° de devis habituel (2026-012), daté du jour de la version, et chaque version a son propre fichier. Le suivi des devis n'affiche que la version active de chaque devis, avec le nombre de versions. Supprimer un devis depuis le suivi supprime toutes ses versions et leurs propositions. Nécessite l'exécution du script scripts/devis_versions.sql sur la base avant installation.*
### 🐛 Corrections
- **Enregistrement d'un article** : *La modification d'un article depuis la fiche article n'efface plus son commentaire, ses initiales et son nombre de jours de production, qui ne sont pas saisis dans la fiche. L'observation n'est plus réécrite lorsqu'elle n'a pas été modifiée (elle était convertie à chaque enregistrement, et apparaissait toujours comme modifiée dans l'historique).*
- **Grande palette des articles** : *La fiche article affiche les valeurs « PAL de » et « Carton de » de la grande palette, et non plus celles de la petite palette, qui remplaçaient celles de la grande à chaque enregistrement de l'article. L'écran Commandes et la saisie de commande affichent eux aussi la bonne palette. Les articles enregistrés avant cette version gardent la grande palette recopiée depuis la petite : à vérifier et corriger dans la fiche si besoin.*
- **PA HT/1000 des articles** : *Le PA HT/1000 est enregistré avec ses décimales à la création et à la modification d'un article (il était transmis comme un nombre entier).*
- **Enregistrement d'un nouveau devis** : *Un nouveau devis enregistré une seconde fois sans fermer la fenêtre n'est plus créé en double sous un autre numéro : le second enregistrement crée sa V2 s'il a été modifié. Le numéro d'un nouveau devis est le suivant du plus grand numéro de l'année (et non plus celui du dernier devis enregistré).*
- **Forme « Autre » des devis** : *À la réouverture d'un devis enregistré avec la forme « Autre », la case est de nouveau cochée (elle restait vide et l'enregistrement demandait de choisir une forme).*
## [v1.68.6] - 14/10/2026
`Note de version` : Cette version supprime l'effet de balayage du planning à la validation d'une commande : seules les journées modifiées sont réaffichées, d'un seul coup. Elle corrige aussi l'erreur « Object must be of type Decimal » qui pouvait apparaître dans la saisie des devis lors de l'ajout ou de la modification d'une quantité. L'écran Commandes affiche désormais le total des ML et des M² des commandes listées, et son filtre permet de choisir une période de date de départ.
### 🆕 Ajouts
- **Filtre de date de départ des commandes** : *La fenêtre de filtre de l'écran Commandes (bouton entonnoir) propose, à côté des états, un calendrier pour choisir un jour ou une période (en faisant glisser la souris sur les jours) : seules les commandes dont la date de départ est dans cette période sont listées. La liste se met à jour dès que la période est choisie, sans attendre la fermeture de la fenêtre. Le bouton « Sans date » retire le filtre de date ; à l'ouverture de l'application, aucune date n'est filtrée. La période choisie est rappelée au-dessus du calendrier et dans l'infobulle du bouton de filtre, qui compte un filtre de plus.*
- **Total des ML et M² des commandes** : *Dans l'écran Commandes, la barre du bas affiche, centré sous la liste des commandes, le total des ML à produire et des M² de tous les articles des commandes affichées. Il tient compte des filtres (client sélectionné, états, recherche) et se met à jour à chaque rechargement de la liste, y compris lors de l'actualisation automatique. Il n'apparaît que sur l'écran Commandes.*
### 🐛 Corrections
- **Quantités des devis** : *Après la modification d'un champ qui recalcule le tableau des quantités (matière, dorure, aplats, traits, changements de cliché ou de couleur, laize matière), l'ajout ou la modification d'une quantité ne provoque plus l'erreur « Object must be of type Decimal ». La quantité est bien ajoutée, les champs de saisie sont vidés et le tableau reste trié par quantité croissante.*
- **Rafraîchissement du planning à la validation d'une commande** : *Après la validation d'une commande (ou la suppression de sa planification), le planning ne se redessine plus carte par carte : seules les journées dont les commandes ont changé sont réaffichées, chacune en une seule fois, et les autres restent telles quelles. La commande sélectionnée et la position dans les listes sont conservées. Le changement de semaine, de filtre et l'actualisation automatique en profitent aussi.*
## [v1.68.5] - 13/10/2026
`Note de version` : Cette version corrige les adresses des commandes envoyées à EBP : l'adresse de facturation n'est plus remplacée par l'adresse de livraison. Les commandes envoyées à EBP ne contiennent plus que les informations propres à la commande, EBP reprenant le reste de la fiche client.
### 🐛 Corrections
- **Adresse de facturation des commandes envoyées à EBP** : *L'adresse de facturation d'une commande envoyée à EBP n'est plus remplacée par l'adresse de livraison du client. La commande n'envoie plus que le n° de document, la date, le client (code et nom), le code commercial du client, la référence, et pour chaque article son code et sa quantité. Les adresses de facturation et de livraison, les contacts, la TVA, le dépôt et les tarifs sont repris par EBP depuis la fiche client et les fiches articles. Le modèle d'import des commandes dans EBP doit reprendre ces colonnes, dans cet ordre.*
## [v1.68.4] - 09/10/2026
`Note de version` : Cette version accélère l'ouverture d'une commande depuis le planning et surtout sa validation : le planning ne relit plus que les semaines affichées et garde la commande sélectionnée. La sélection d'un article dans l'écran Commandes s'affiche d'un seul coup, sans clignotement, et la recherche ou le changement de client ne font plus clignoter l'écran. La modification d'un client depuis l'écran Commandes conserve désormais son option « Rouleaux complets ».
### 🔄 Améliorations
- **Ouverture d'une commande depuis le planning** : *La fenêtre de saisie se remplit plus vite (environ 1,4 s → 1 s) : le temps de production, le n° de lot et le commentaire client sont lus en beaucoup moins de requêtes. Le calcul du temps de production est aussi plus rapide partout où il est affiché (liste des commandes sans date, planning graphique, impressions).*
- **Validation d'une commande** : *Après validation ou suppression de la planification, seules les semaines affichées du planning sont relues au lieu de tout l'historique (environ 1,2 s → 0,55 s, et nettement plus à la première validation). La commande sélectionnée et la position dans les listes sont conservées.*
- **Sélection d'un article dans l'écran Commandes** : *Les champs de l'article s'affichent d'un seul coup, sans clignotement : ils ne sont plus vidés puis remplis à l'écran, et les listes déroulantes ne sont plus reconstruites à chaque clic (seulement quand leur contenu a changé). Pendant le chargement, l'article précédent reste affiché avec la mention « Chargement de l'article… » en haut à droite du détail, et le curseur passe en sablier. L'affichage est aussi plus rapide (environ 0,7 s → 0,35 s) : moins de requêtes, calculs de ML et de temps de production faits une seule fois. La liste des matières ne se remplit plus de doublons au fil des sélections.*
- **Première ouverture des écrans** : *Les écrans Stock (environ 2 s → 0,2 s) et Stock à commander s'ouvrent beaucoup plus vite : ils reprennent le stock déjà chargé au lieu de le relire en base, et la liste n'est plus remplie deux fois ni ligne par ligne (le retour sur ces écrans est aussi plus rapide). Les écrans les plus utilisés (planning, stock, articles, suivi des devis, temps de production, boîte à outils…) sont préparés en arrière-plan après l'ouverture de l'accueil, quand l'application n'est pas utilisée : le planning s'ouvre en environ 0,5 s au lieu de 1,2 s, et le suivi des devis en 0,4 s au lieu de 0,55 s. L'application est aussi précompilée, ce qui accélère la première ouverture de toutes les fenêtres, et chaque démarrage profite du précédent pour préparer le code en avance.*
- **Synchronisation EBP des clients et des contacts** : *La mise à jour automatique des clients et des contacts depuis EBP prend environ 15 s au lieu de 3 min : seuls les clients et contacts nouveaux ou modifiés sont enregistrés. Elle n'est lancée que par un seul poste à la fois, et une mise à jour interrompue (application fermée) reprend 10 minutes plus tard au lieu de recommencer à chaque démarrage. Une erreur sur un contact n'interrompt plus la mise à jour et n'affiche plus de message.*
- **Démarrage et temps de production** : *L'application démarre plus vite : les temps de production (tout l'historique, le chargement le plus long) ne sont plus attendus au démarrage, ils sont lus en arrière-plan une fois l'accueil affiché, et ne sont plus relus toutes les quelques secondes tant que l'écran Temps de production n'a pas été ouvert. Cet écran s'affiche immédiatement, avec la mention « Chargement des temps de production… » si les données ne sont pas encore arrivées. Le bouton Rafraîchir de l'écran relit désormais les données en base (il ne faisait que réafficher celles déjà en mémoire).*
- **Recherches et filtres** : *Dans tous les écrans, les zones de recherche et de filtre saisies au clavier (commandes, stock, stock à commander, temps de production, suivi des devis, fiches techniques, listes d'articles, boîte à outils, inventaire, mise à jour des prix…) mettent la liste à jour dès que la frappe marque une courte pause, et non plus à chaque touche : la saisie reste fluide et la liste n'est plus recalculée (ni relue en base) pour chaque lettre. La touche Entrée lance toujours la recherche immédiatement ; les cases à cocher et les listes déroulantes s'appliquent toujours aussitôt.*
- **Liste des commandes (bouton « Commandes » de l'écran Commandes)** : *La liste s'ouvre plus vite : elle est remplie d'un seul coup au lieu de ligne par ligne. Les filtres (code client, n° de commande, article, réf. client, quantité, dates, états) s'appliquent sur la liste déjà chargée, sans relire la base à chaque lettre, dès que la frappe marque une courte pause ; Entrée filtre immédiatement.*
- **Boîte à outils (liste outil)** : *La liste est remplie d'un seul coup au lieu de ligne par ligne. Les filtres laize, développé et « Commandé ? » s'appliquent sur la liste déjà chargée, sans relire la base, et l'outil sélectionné reste sélectionné. Le clic sur un outil remplit les champs de saisie immédiatement (il relisait l'outil en base à chaque clic). Après une suppression, le nombre d'éléments affiché est juste. Le bouton RAZ relit toujours la liste en base.*
### 🐛 Corrections
- **Rouleaux complets** : *À la modification d'un client depuis l'écran Commandes, la case « Rouleaux complets » reprend la valeur du client. Auparavant elle s'affichait toujours décochée, et l'enregistrement de la fiche retirait l'option au client.*
- **Clignotement de l'écran Commandes** : *La recherche d'un client et le passage d'un client à l'autre ne font plus clignoter l'écran : les listes des clients, des commandes et des articles ne disparaissent plus un instant (le changement du titre « Liste de vos commandes… » redessinait tout l'écran). La recherche est lancée dès que la frappe marque une courte pause, et non plus à chaque touche ; les listes ne sont rechargées que si leur contenu change, et le détail de l'article affiché se vide d'un seul coup. Un nouveau clic sur le client déjà sélectionné, ou un tri de la liste des clients, ne recharge plus ses commandes.*
- **Recherche de commandes et de plaques** : *Une apostrophe dans la recherche de commandes (écran Commandes) ne provoque plus d'erreur. Le texte saisi dans cette recherche et dans la recherche de plaques (laize, développé) n'est plus inséré tel quel dans la requête envoyée à la base, ce qui empêchait aussi de la modifier par un texte collé.*
- **Filtres de la liste des commandes** : *Le filtre « Date de début » fonctionne de nouveau, et les filtres tiennent compte du dernier caractère saisi (ils avaient toujours une lettre de retard). Une date invalide n'est plus signalée en rouge une fois corrigée.*
## [v1.68.3] - 08/10/2026
`Note de version` : Cette version reprend le code commercial des clients depuis EBP et l'utilise dans les commandes qui y sont envoyées. Dans la saisie des devis, le statut « En attente » est retiré au profit de « Envoyé » par défaut, et l'écran défile lorsque la fenêtre est trop petite. Les totaux de l'écran Stock s'affichent de nouveau.
### 🔄 Améliorations
- **Code commercial des clients** : *La mise à jour des clients depuis EBP reprend désormais le code commercial/collaborateur de chaque client. Les commandes envoyées à EBP utilisent ce code commercial (en-tête et lignes) ; à défaut, le code commercial habituel est conservé.*
- **Statut des devis** : *Dans la saisie des devis, le statut « En attente » n'est plus proposé : un nouveau devis est « Envoyé » par défaut. Un ancien devis « En attente » s'ouvre avec le statut « Envoyé », qui lui est appliqué à l'enregistrement. Le suivi des devis affiche toujours les devis « En attente » existants.*
### 🐛 Corrections
- **Saisie des devis** : *Lorsque la fenêtre est trop petite pour afficher tous les champs, des barres de défilement apparaissent : plus aucun champ n'est inaccessible. Le défilement reste fluide : en faisant glisser la barre, l'écran se positionne au relâchement.*
- **Totaux du stock** : *Les totaux affichés sous la liste du Stock (en stock, réservé, total et valorisation) s'affichent de nouveau. Ils correspondent aux matières affichées et se mettent à jour à chaque filtre et à chaque actualisation.*
## [v1.68.2] - 07/10/2026
`Note de version` : Cette version facilite la saisie des commandes d'achat transférées dans EBP : la quantité en ML s'affiche avec le séparateur de milliers pendant la saisie, et une commande d'achat envoyée par erreur peut être annulée dans Planning. Les écrans ne clignotent plus lors de l'actualisation automatique.
### 🆕 Ajouts
- **Annulation d'une commande d'achat** : *Dans « Stock à commander », le clic droit « Commandes d'achat de la matière » ouvre la liste des commandes de la matière, avec un bouton « Annuler la commande ». Une commande annulée (toutes ses matières) n'est plus comptée en commande ni dans le stock prévisionnel, et les arrivages ne lui sont plus imputés ; elle reste visible avec le statut « annulée ». L'annulation ne concerne que Planning : la commande est à supprimer à la main dans EBP. Non disponible pour le profil Atelier.*
### 🔄 Améliorations
- **Quantités des commandes d'achat** : *Lors du transfert d'une commande d'achat dans EBP, la quantité en ML s'affiche avec le séparateur de milliers dès la saisie (ex. « 12 000 ») et le conserve une fois validée. Seuls les chiffres et une virgule décimale sont acceptés.*
### 🐛 Corrections
- **Clignotement à l'actualisation automatique** : *Les écrans ne clignotent plus à chaque actualisation automatique (commandes, stock, stock à commander, suivi des devis, temps de production, magasinier, arrivages, planning, planning graphique et planning atelier). Un écran n'est réaffiché que si ses données ont changé depuis un autre poste, et il est alors redessiné en une seule fois. Les cases cochées des devis ne sont plus perdues à chaque actualisation. Dans les commandes, les champs de l'article sélectionné ne sont rechargés que si la liste des articles de la commande a changé.*
## [v1.68.1] - 05/10/2026
`Note de version` : Cette version accélère le chargement de l'écran Planning et le changement de filtre (machine, client, état). Les plannings, les commandes, le magasinier et les arrivages se mettent à jour automatiquement avec les modifications faites depuis les autres postes, sans perdre la sélection ni la position dans les listes. Le planning graphique devient un écran de consultation. L'info-bulle d'une commande s'affiche plus vite, et plusieurs erreurs sont corrigées, dont la double validation d'un arrivage et la reprise de l'adhésif lors de la création d'un produit dans une nouvelle laize. Les commandes du client ESA peuvent maintenant être rattachées au client final, dont le commentaire est repris à l'écran et sur la fiche technique ESA. Enfin, une matière qui n'existe pas encore peut être créée directement depuis un devis : elle reste réservée aux devis jusqu'à son activation depuis le Stock. Le code article EBP d'une matière se saisit désormais dans la fiche matière, et les commandes envoyées à EBP ne contiennent plus de ligne de frais de port ajoutée automatiquement.
### 🆕 Ajouts
- **Client de rattachement** : *Lors de la création ou de la modification d'une commande du client ESA, une liste permet de choisir (facultativement) le client final de la commande. La liste des commandes l'affiche dans la colonne client (ex. « ESA > DUPONT ») et la recherche le prend en compte. Le commentaire affiché dans « Observation client » à l'ajout ou à la sélection d'un article, ainsi que sur la fiche technique ESA, est alors celui du client rattaché.*
- **Matières de devis** : *Un bouton à côté de la liste des matières du devis permet de créer une matière qui n'existe pas encore (code article, laize, prix, adhésif…), sans entrée en stock. Elle n'est proposée que dans les devis (repérée par « Matière devis ») et apparaît dans le Stock en italique gris ; elle reste absente des commandes, des articles, de l'inventaire, du stock à commander et de la mise à jour des prix jusqu'à son activation par clic droit « Activer la matière » dans le Stock. Elles sont masquées par défaut dans le Stock : la case « Afficher les matières devis » permet de les afficher.*
### 🔄 Améliorations
- **Actualisation automatique** : *Le planning, le planning graphique, le planning atelier, les commandes, le magasinier et les arrivages se mettent à jour d'eux-mêmes avec les modifications faites depuis les autres postes. La mise à jour se fait seulement sur l'écran affiché (sinon au retour sur l'écran, si les données ont plus de 2 minutes), jamais pendant une saisie, un glisser-déposer ou une fenêtre ouverte. La commande sélectionnée, les cases cochées, le tri et la position dans les listes sont conservés.*
- **Planning graphique** : *L'écran devient un écran de consultation : les commandes ne peuvent plus y être déplacées, ajoutées ou retirées. La planification se fait depuis l'écran Planning.*
- **Planning** : *Ouverture et changement de semaine ou de mois plus rapides : les horaires de production sont lus seulement pour la période affichée, les 25 journées s'affichent en une seule fois et le nombre de commandes sans date est calculé directement par la base de données.*
- **Filtres du planning** : *Le choix d'une machine, d'un client ou d'un état s'applique instantanément, sans relire la base de données. Les modifications faites depuis un autre poste restent prises en compte par le bouton Rafraîchir, l'actualisation automatique et le changement de semaine.*
- **Info-bulle du planning** : *Le détail d'une commande (format, couleurs, quantité, ML produits) s'affiche plus vite au survol, sans nouvelle lecture de la base lorsqu'on repasse sur la même commande.*
- **Prix des matières** : *Le prix d'une matière s'affiche désormais avec 3 décimales dans la liste du Stock, dans son export Excel et dans la fiche matière.*
- **Code article EBP des matières** : *La fiche matière (création, modification, création depuis un devis) affiche le code article EBP de la matière et de la laize, sous le code article, et permet de le saisir ou de le corriger. C'est ce code qui est utilisé lors du transfert des commandes d'achat dans EBP.*
- **Import des commandes dans EBP** : *La commande créée dans EBP ne contient plus que les articles de la commande : la ligne « FRAIS DE PORT » (ZPORT) à 0 € n'est plus ajoutée automatiquement.*
### 🐛 Corrections
- **Arrivages** : *Un arrivage déjà validé ou supprimé depuis un autre poste n'est plus traité une seconde fois : le stock n'est plus crédité en double et un message indique les lignes ignorées. Une ligne validée ne peut plus être supprimée par erreur depuis un écran non actualisé.*
- **Planning atelier** : *L'écran, ouvert toute la journée sur le poste atelier, ne risque plus de planter après de nombreuses actualisations (les anciennes cartes sont maintenant libérées).*
- **Planning** : *Les commandes de la PRATI VEGA+ s'affichent de nouveau dans la couleur de la machine (elles restaient en blanc lorsque toutes les machines étaient affichées).*
- **Info-bulle du planning** : *La quantité et les ML produits s'affichent avec le séparateur de milliers, et une commande sans quantité ne provoque plus d'erreur.*
- **Adhésif des nouvelles laizes** : *Un produit créé dans une nouvelle laize depuis la saisie d'une commande reprend désormais l'adhésif des autres laizes du même code article, comme l'EAN, le fournisseur, le prix et le libellé.*
- **Adhésif repris** : *Lors de la création d'un produit (commande, arrivage, inventaire, nouvelle matière), seules les laizes dont l'adhésif est renseigné servent de modèle : une laize sans adhésif n'empêche plus la reprise.*
- **Fiche matière** : *L'adhésif d'une autre matière ne reste plus affiché lorsqu'on change le code article, et il est retrouvé dans la liste même si les majuscules ou les espaces diffèrent. L'enregistrement sans adhésif choisi ne provoque plus d'erreur : l'adhésif déjà connu pour le code article est conservé.*
## [v1.68.0] - 04/10/2026
`Note de version` : Cette version ajoute l'écran « Stock à commander » avec la création des commandes d'achat matière dans EBP, apporte des améliorations à l'impression des fiches techniques client et corrige l'ajout d'un contact sur un prospect dans les devis. L'application est nettement plus rapide : à l'ouverture, pendant la saisie des commandes et des articles, et lors de l'actualisation automatique. Plusieurs erreurs sont corrigées, notamment avec les apostrophes dans les recherches et la détection des chevauchements lors du choix d'une date de production. Les nouveautés de chaque version sont maintenant présentées directement dans le planning. Enfin, on peut maintenant taper dans les listes déroulantes pour retrouver rapidement un élément.
### 🆕 Ajouts
- **Stock à commander** : *Nouvel écran listant la matière avec son stock disponible, les quantités déjà en commande et le stock prévisionnel. Filtres par seuil (ex. stock ≤ 0 ou ≤ -500) et par fournisseur.*
- **Commandes d'achat** : *Les lignes sélectionnées (un seul fournisseur) sont transférées en commande fournisseur dans EBP. L'envoi se fait en arrière-plan et son avancement s'affiche dans une notification en bas à droite de l'écran, comme pour les commandes clients ; en cas d'échec, le détail s'ouvre automatiquement. Les matières commandées sont signalées en bleu jusqu'à leur réception ; un nouveau transfert demande une confirmation. Les arrivages soldent automatiquement les quantités en commande.*
- **EBP** : *Importation des codes articles EBP dans les produits à partir d'un export d'articles EBP : le rapprochement se fait sur la matière et la laize, avec un bilan du nombre de produits renseignés et des codes sans correspondance.*
- **Quoi de neuf ?** : *Les nouveautés de chaque version sont désormais présentées directement dans le planning, au premier démarrage après une mise à jour, à la place du mail. L'écran reste accessible à tout moment depuis le bouton « Quoi de neuf ? » du menu de gauche, au-dessus de « Déconnecter », avec une recherche et un filtre par type (ajouts, améliorations, corrections).*
### 🔄 Améliorations
- **Listes déroulantes** : *On peut désormais taper directement dans les listes déroulantes : la liste se filtre au fil de la saisie sur les éléments qui contiennent le texte tapé, sans tenir compte des majuscules ni des accents (ex. « blanc » trouve « PP Blanc Mat »). Flèches haut/bas pour se déplacer, Entrée ou Tab pour valider, Échap pour annuler. Seule une valeur de la liste peut être retenue : un texte qui ne correspond à aucun élément est annulé en quittant le champ.*
- **Apparence des listes déroulantes** : *Les dernières listes à l'ancien style (devis, filtre des états, retrait de stock, export des codes articles, impression d'étiquettes) ont désormais le même aspect que les autres.*
- **Fiches techniques client** : *L'adhésif affiché est désormais celui du produit (matière et laize) de l'article.*
- **Démarrage** : *Ouverture de l'application plus rapide et plus fluide : les données sont chargées en parallèle sans être rechargées juste après, la synchronisation des clients EBP se fait en arrière-plan et l'écran des commandes se construit plus vite (listes et grille remplies en une fois).*
- **Écran de chargement** : *Nouvel écran de chargement avec la progression et l'étape en cours, qui reste animé pendant tout le démarrage. L'accueil n'apparaît qu'une fois entièrement prêt, et en connexion automatique l'écran de connexion n'est plus affiché.*
- **Mise à jour** : *Le téléchargement d'une nouvelle version utilise le même écran que le chargement, avec la barre de progression. Une fois la version téléchargée, deux boutons permettent de l'installer immédiatement (le planning redémarre) ou plus tard (installation au prochain démarrage).*
- **Saisie des commandes et des articles** : *Le prix d'achat, le m²/1000 et le ML à produire se recalculent instantanément pendant la saisie (laize, poses, échenillage, quantité), sans ralentissement à chaque caractère.*
- **Actualisation automatique** : *Plus légère et plus rapide : le planning n'est plus rechargé en entier en arrière-plan (chaque écran charge uniquement la période affichée) et les données sont chargées en parallèle.*
- **Base de données** : *Accès plus rapide au stock et à son réservé, aux commandes sans date et au planning.*
- **Sécurité** : *Les valeurs saisies (recherches, codes articles, commentaires…) sont transmises de façon sécurisée à la base de données.*
- **Application allégée** : *Suppression d'anciens écrans et de composants qui n'étaient plus utilisés.*
### 🐛 Corrections
- **Apostrophes** : *Une apostrophe saisie dans une recherche (stock, temps de production, fiches techniques, devis, articles…), dans un commentaire d'arrivage ou dans un code article ne provoque plus d'erreur.*
- **Choix de la date de production** : *La vérification des chevauchements s'appuie sur le planning à jour : une commande planifiée entre-temps depuis un autre poste est bien prise en compte. Le calendrier d'une machine sans commande s'affiche désormais vide, au lieu de reprendre les commandes de la machine précédente.*
- **Listes déroulantes** : *Elles ne peuvent plus apparaître vides ou incomplètes lorsqu'elles sont ouvertes pendant l'actualisation automatique.*
- **Stock** : *L'ouverture des paramètres (adhésifs, couleurs…) ou de l'écran Dorure ne remplace plus le stock affiché et exporté vers Excel.*
- **Liste des commandes** : *Les filtres par date de commande et par état sont de nouveau pris en compte.*
- **Devis** : *Il est de nouveau possible d'ajouter un contact lors de la création d'un prospect : le prospect est enregistré automatiquement avant la saisie du contact.*
- **Temps de production** : *Le tri choisi sur une colonne, les filtres et la position dans la liste sont conservés lors de l'actualisation automatique des données.*
- **EBP** : *La synchronisation automatique des contacts respecte désormais sa propre date de prochaine actualisation, au lieu de suivre celle des clients.*
- **Suivi des devis, commandes et magasinier** : *Le tri choisi sur une colonne est conservé lors de l'actualisation des données (liste des devis, liste des clients des commandes, liste du magasinier).*
## [v1.67.1] - 29/09/2026
`Note de version` : Cette version apporte des améliorations à l'impression des fiches techniques client et à la saisie des devis.
### 🆕 Ajouts
- **Devis** : *Nouvelle liste déroulante « Article » affichant les articles du client sur plusieurs colonnes (article, réf. client, matière, adhésif), avec recherche à la saisie. La sélection d'un article pré-remplit le devis.*
### 🔄 Améliorations
- **Fiches techniques client** : *Ajout de l'image du sens de sortie et de la matière sur la fiche technique client.*
- **Devis** : *L'adhésif correspondant à la matière est sélectionné automatiquement lors du choix de la matière.*
- **Devis** : *Lors d'un changement de matière, le prix de vente des quantités est conservé et c'est le % de marge qui est recalculé.*
- **EBP** : *L'envoi d'une commande dans EBP est suivi dans une notification en bas à droite de l'écran, sans bloquer l'application. La fenêtre détaillée s'ouvre automatiquement en cas d'erreur, ou à la demande via « Voir le détail ».*
- **EBP** : *Dans la liste des commandes, un « ? » gris signale les commandes qui n'ont jamais été envoyées dans EBP.*
## [v1.67.0] - 28/09/2026
`Note de version` : Cette version apporte des améliorations à l'impression des fiches techniques et aux contacts, et permet la synchronisation entre EBP et le planning.
### 🆕 Ajouts
- **EBP** : *SSynchronisation automatique des contacts et des clients depuis EBP. Création des commandes dans EBP depuis le planning.*
- **Envoi des devis** : *LLes devis peuvent être envoyés par mail directement depuis le planning.*
- **Contacts clients** : *LLa saisie de plusieurs contacts pour un client est maintenant possible.*
### 🔄 Améliorations
- **Fiches techniques client** : *Changement du format de la fiche technique client.* 
## [v1.66.4] - 09/09/2026
`Note de version` : Cette version apporte des améliorations à l'affichage du planning, le filtre des temps de production et l'impression de l'étiquette bobine.
### 🔄 Améliorations
- **Filtre planning** : *Le chargement du planning a été amélioré.*
- **Étiquettes bobines** : *Fermeture automatique de la fenêtre après impression.*
- **Temps de production** : *La sélection de date est étendue  à 500 jours maximum.*
### 🐛 Corrections
 - **Étiquettes bobines** : *Correction du champ date de départ.*
## [v1.66.3] - 09/09/2026
`Note de version` : Cette version apporte des améliorations à l'impression des fiches techniques.
### 🐛 Corrections
- **Fiches techniques commandes** : *Correction de l'erreur d'adhésif.*
## [v1.66.2] - 09/09/2026
`Note de version` : Cette version apporte des améliorations à l'impression des étiquettes bobines.
### 🐛 Corrections
- **Étiquettes bobines** : *Lancement de l'impression pour les machines MARKANDY et ESC. Affichage du nom du client plutôt que la raison sociale.*
## [v1.66.1] - 08/09/2026
`Note de version` : Cette version apporte des améliorations le planning et les fiches techniques.
### 🆕 Ajouts
- **Étiquettes bobines** : *Les nouvelles étiquettes bobines sont disponibles à l'impression.*
- **Filtres planning** : *Les filtres « référence client » et « code article » ont été ajoutés au planning. De plus, les filtres ont été déplacés dans un formulaire à part.*
### 🐛 Corrections
- **Impression fiche technique** : *L'impression de la fiche technique depuis une commande prend en compte les bonnes données.*
## [v1.66.0] - 27/08/2026
`Note de version` : Cette version apporte des améliorations sur l'inventaire.
### 🆕 Ajouts
- **Affichage de toutes les lignes** : *L'option d'affichage "toutes les lignes" est active dans la génération de l'inventaire.*
- **Étiquette bobine** : *Création d'une nouvelle étiquette bobine.*
### 🐛 Corrections
- **Stock inventaire** : *Le stock affiché lors de l'inventaire est maintenant le même que dans l'onglet stock.*
- **Gestion du Z** : *Le comportement du redimensionnement de la fenêtre a été corrigé.*
## [v1.65.6] - 26/08/2026   
`Note de version` : Redéploiement de la version précédente.
## [v1.65.5] - 26/08/2026   
`Note de version` : Cette version apporte des améliorations sur l'inventaire.
### 🐛 Corrections
- **Construction de l'inventaire** : *Les informations du code barre sont correctement lues.*
## [v1.65.4] - 21/07/2026
`Note de version` : Cette version apporte des améliorations sur l'impression des fiches techniques.
### 🐛 Corrections
- **Impression fiche technique** : *L'adhésif est correctement affiché sur les fiches techniques.*
## [v1.65.3] - 21/07/2026
`Note de version` : Cette version apporte des améliorations sur l'écran des commandes, la boite à outil et l'impression des fiches techniques.
### 🔄 Améliorations
- **Actualisation des listes** : *Les listes des clients, des commandes et des articles sont correctement actualisées.*
### 🐛 Corrections
- **Boîte à outils** : *Correction de l'erreur d'ouverture de la boîte à outils.*
- **Saisie de commande** : *L'aplat et le calage sont correctement syncrhonisés.*
- **Impression fiche technique** : *L'adhésif est correctement affiché sur les fiches techniques.*
## [v1.65.2] - 08/07/2026
`Note de version` : Cette version apporte des améliorations sur l'écran magasinier, l'ordre des commandes et la correction de l'actualisation des articles.
### 🆕 Ajouts
- **Liste des commandes** : *Ajout de la colonne "pose en laize" dans la liste des commandes pour l'écran magasinier.*
### 🔄 Améliorations
- **Ordre des commandes** : *Dans l'écran magasinier, les commandes sont triées par ordre croissant.*
### 🐛 Corrections
- **Actualisation des articles** : *Correction de l'actualisation des articles.*
- **Article / devis** : *Correction de la laize et du développé lors de la saisie d'un article depuis un devis.*
## [v1.65.1] - 07/07/2026
`Note de version` : Cette version apporte des améliorations sur l'actualisation EBP, l'importation de packing list, l'ajout d'articles similaires dans le stock et la correction de l'actualisation des clients.
### 🆕 Ajouts
- **Temps d'actualisation EBP** : *Le temps d'actualisation EBP est paramétrable et automatique.*
- **Fiche technique** : *Ajout de la fiche technique dans l'écran magasinier via un double clic.*
### 🔄 Améliorations
- **Actualisation EBP** : *L'actualisation EBP a été retirée pour l'atelier.*
- **Importation packing list** : *Modification du commentaire lors d'un import. Le numéro de commande apparait en premier dans le commentaire.*
- **Ajout dans le stock** : *Les articles similaires ajoutés dans le stock seront regroupés sur une seule ligne.*
### 🐛 Corrections
- **Actualisation clients** : *Correction de l'actualisation des clients. La liste des articles ne se vide plus à chaque actualisation.*
- **Quantité mandrin** : *Correction du calcul de la quantité de mandrin.*
## [v1.65.0] - 06/07/2026
`Note de version` : Cette version introduit un nouvel écran magasinier, l'export des codes articles, la synchronisation des clients avec EBP et plusieurs améliorations de l'interface utilisateur.
### 🆕 Ajouts
- **Export code article** : *Ajout de la fonctionnalité d'exportation des codes articles.*
- **Ecran magasinier** : *Ajout d'un écran dédié pour le magasinier.*
- **Actualisation EBP** : *Mise en place de l'actualisation des clients depuis EBP.*
### 🐛 Corrections
- **Calcul ML prod** : *La somme des ML utilisés à été corrigée.*
## [v1.64.1] - 01/07/2026
`Note de version` : Cette version apporte des améliorations sur le planning, les devis, les temps de production et la liste outil.
### 🆕 Ajouts
- **Affichage du planning semaine** : *Ajout d'une vue hebdomadaire du planning.*
- **Actualisation des temps de production** : *Ajout d'un bouton d'actualisation des données de temps de production.*
### 🔄 Améliorations
- **Modèles Word** : *Modification des modèles Word.*
- **Enregistrement des devis** : *La fenêtre des devis ne se ferme plus après l'enregistrement d'un devis.*
- **Filtres par défaut** : *Les filtres par défaut ont été ajoutés dans le nouveau planning.*
- **Informations écran atelier** : *Les informations du mandrin et de la quantité ont été ajoutées à l'écran atelier.*
- **Lignes sélectionnées** : *Le nombre de lignes sélectionnées est maintenant affiché dans l'écran de mise à jour des prix.*
- **Mise à jour des données** : *Les données de temps de production sont correctement actualisées.*
### 🐛 Corrections
- **Calcul de prix rouleaux** : *Le calcul du prix HT a été corrigé.*
- **Numéro de devis** : *Correction de la génération automatique du numéro de devis.*
- **Changement de matière** : *Le changement de matière met correctement à jour le prix HT dans la liste des quantités.*
- **Impression des devis** : *LCorrection de l'affichage de la case "Autre" lors de l'impression.*
- **Recherche laize** : *La virgule peut être utilisée comme séparateur dans la recherche de laize.*
- **Sauvegarde laize** : *La sauvegarde de la liste outil prend correctement en compte les décimales.*
- **Sélection du code article** : *La sélection du code article fonctionne correctement dans la mise à jour des prix.*
## [v1.64.0] - 29/06/2026
`Note de version` : Cette version apporte des améliorations sur les devis, l'accueil et le planning.
### 🆕 Ajouts
- **Ajout d'article depuis la liste des devis** : *Ajout d'une liste permettant de retrouver les articles disponibles pour chaque devis.*
- **Visualisation de l'état des devis** : *Les différents états des devis sont maintenant identifiés par une couleur dans la liste des devis.*
- **Accès aux machines depuis l'accueil** : *Ajout d'un bouton permettant de visualiser les cylindres disponibles pour chaque machine..*

### 🔄 Améliorations
- **Recherche clients/prospects** : *La liste déroulante des clients et prospects permet désormais d'effectuer une recherche.*
- **Affichage des infobulles** : *Le temps d'affichage des infobulles dans le nouveau planning a été augmenté à 30 secondes..*
### 🐛 Corrections
- **Calcul des devis avec dorure** : *Correction de la prise en compte de la dorure dans le calcul du PAHT 1000.*
## [v1.63.4] - 23/06/2026
`Note de version` : Cette version corrige une erreur de table
### 🐛 Corrections
- **Erreur de table** : *Correction d'une erreur de table dans le formulaire de gestion des temps de production.*

## [v1.63.3] - 22/06/2026
`Note de version` : Cette version corrige des erreurs liées au filtre de date dans le temps de production et à l'actualisation de la liste des devis.
### 🆕 Ajouts
- **Bouton d'actualisation** : *Ajout d'un bouton permettant de rafraîchir manuellement la liste des devis.*

### 🐛 Corrections
- **Correction du filtre de date dans le temps de production** : *Le filtre de date dans le formulaire de gestion des temps de production a été corrigé pour fonctionner correctement.*
- **Actualisation de la liste des devis** : *Correction d'un problème lié à l'actualisation de la liste des devis après la création ou la modification d'un devis.*

## [v1.63.2] - 16/06/2026
`Note de version` : Cette version apporte des améliorations sur la génération des devis, l'impression des étiquettes inventaire et sur le suivi des temps de production/bobinage
### 🆕 Ajouts

- **Option "rouleaux continus"** : Lors de la génération des devis, il est maintenant possible de maintenir l'impression en continu des rouleaux.
- **Bouton d'actualisation** : Ajout d'un bouton permettant de rafraîchir manuellement les listes déroulantes.
- **Mise à jour de la trame Word** : La trame Word affiche désormais le champ observation et adapte automatiquement l'unité selon le type de devis (étiquettes ou rouleaux continus).

### 🔄 Améliorations

- **Fenêtre de choix de date** : La fenêtre est maintenant affichée automatiquement au premier plan.

### 🐛 Corrections

- **Réinitialisation des champs d'impression** : Après l'impression d'une étiquette, les champs d'impression sont maintenant remis à zéro.
- **Filtre de date de production** : Correction d'un problème lié au filtrage des dates dans le formulaire de gestion des temps de production.
## [v1.63.1] - 16/06/2026
### 🆕 Ajouts 
- **Colonne référence client** : *Dans la liste des devis, la colonne référence client est ajouté.*
- **Accès rapide à l'impression d'étiquette** : *Un raccourci a été ajouté pour accéder rapidement à l'impression des étiquettes.*
- **Imprimante par défaut** : *Lors de l'impression d'étiquettes, l'imprimante par défaut est maintenant sélectionnée automatiquement.*
- **Ecrans inventaire** : *Mise en place des écrans d'inventaire.*
### 🔄 Modifications
- **Identification des champs manquant** : *Lorsque que des champs sont manquants dans la création d'un devis, ils sont maintenant clairement identifiés.*
- **Remise à zéro** : *Lors d'un nouveau devis, les champs frais de découpe et de cliché sont maintenant remis à zéro.*
- **Modification étiquette inventaire** : *Modification de l'affichage des informations sur les étiquettes d'inventaire.*
### 🐛 Corrections
- **Tri des devis** : *Les devis sont maintenant triés par ordre de numéro de devis.*
- **Création d'un nouveau client** : *Les nouveaux clients ne sont plus créés plusieurs fois lors d'un nouveau devis.*
## [v1.63.0] - 11/06/2026
### 🆕 Ajouts 
- **Somme ML utilsé** : *Ajout de somme ML utilisé dans le formulaire de gestion des temps de production.*
- **Filtre date** : *Ajout d'un filtre par date dans le formulaire de gestion des temps de production.*
- **Aplat** : *Ajout de l'aplat dans la trame WORD des devis.*
### 🔄 Modifications
- **Adhésif matière** : *Lors de la création ou de la modification d'une matière, l'adhésif reste cohérant avec la matière.*
- **Modification de format** : *Les champs frais de découpe et de cliché sont maintenant des champs alphanumérique.*
- **Mise en page des étiquettes inventaire** : *Modification de l'affichage des informations sur les étiquettes d'inventaire.*
- **RAZ champs impression** : *Lors du scan des codes-barres, si le code article est différent, les champs laize et quantité sont remis à zéro.*
### 🐛 Corrections
- **Erreur filtre technicien** : *Le filtre technicien ne prennait pas en compte l'affichage production ou bobinage.*
## [v1.62.9] - 10/06/2026
### 🐛 Corrections
- **Erreur étiquettes inventaire** : *Correction de l'erreur d'impression*
## [v1.62.8] - 09/06/2026
### 🆕 Ajouts 
- **Frais de découpe et de cliché** : *Ajout des frais de découpe et de cliché dans le formulaire de génération de devis. Ajout des champs dans les trames Word.*
- **Développé** : *Ajout du développé dans le formulaire de gestion des cylindres machines.*
### 🔄 Modifications 
- **Mise en page des étiquettes inventaire** : *Modification de l'affichage des informations sur les étiquettes d'inventaire. Agrandissement des champs code article et laize. Modification de la taille du code barre.*
- **Verrouillage laize matière** : *Le verrouillage de la laize matière a été levé.*
- **Sélection machine & nombre de dents** : *Modification du fonctionnement de la sélection de la machine et du nombre de dents. Affichage automatique des machine compatible aprés sélection du nombre de dents et vice versa.*
## [v1.62.7] - 08/06/2026
### 🆕 Ajouts 
- **Date & heure impression** : *Ajout de la date et de l'heure d'impression sur les étiquettes d'inventaire.*
- **Impression devis** : *Ajout du choix du format lors de l'impression du devis.*
### 🔄 Modifications 
- **Informations étiquettes** : *Affichage des informations de l'étiquette à la verticale.*
- **Suppression des champs** : *Après une impression, les champs ne sont pas remis à zéro.*
## [v1.62.6] - 05/06/2026
### 🆕 Ajouts 
- **Disponibilité étiquettes** : *Mise à disposition des étiquettes d'inventaire pour l'atelier*
### 🔄 Modifications 
- **Format étiquettes** : *Les étiquettes inventaire sont maintenant au format 100x98mm*
- **Caractère de séparation**: *Modification du caractère de séparation utilisé dans les étiquettes*
## [v1.62.5] - 05/06/2026
### 🆕 Ajouts 
- **Impression automatique** : *Ajout d'une case à cocher pour activer l'impression automatique des étiquettes après saisie des informations.*
- **Ajout fournisseur** : *Ajout du fournisseur dans l'impression des étiquettes inventaire.*
## [v1.62.4] - 01/06/2026
### 🆕 Ajouts 
- **Choix de l'imprimante** : *Ajout de la possibilité de choisir l'imprimante lors de l'impression d'étiquettes*
- **Sélection arrivage** : *Ajout d'une case à cocher pour sélectionner les arrivages à prendre en compte dans le stock*
### 🐛 Corrections
- **Erreur de cylindres** : *Lors de l'ouverture d'un devis, un mauvais chargement du cylindre pouvait entraîner une erreur de chargement des données*
## [v1.62.3] - 01/06/2026
- **Réinstallation à la suite d'une erreur d'installation** : *Suite à une erreur d'installation, une réinstallation est nécessaire pour la mise à jour vers la version v1.62.2*
## [v1.62.2] - 01/06/2026
- **Réinstallation à la suite d'une erreur d'installation** : *Suite à une erreur d'installation, une réinstallation est nécessaire pour la mise à jour vers la version v1.62.1*
## [v1.62.1] - 01/06/2026
### 🆕 Ajouts 
- **Présentation par défaut** : *Lors de la création d'un devis, l'option "Rouleau" est cochée par défaut.*
- **Génération des étiquettes** : *Génération des étiquettes à destination de l'inventaire*
- **Modification liste machine** : *Lors de la sélection d'une plaque, le nombre de dents est automatiquement renseigné et la liste machine est filtrée pour n'afficher que les machines compatibles avec le nombre de dents de la plaque.*
### 🐛 Corrections
- **Email erroné** : *Correction de l'erreur d'email dans la trame d'impression du devis.*
- **Caclul du prix** : *Prise en compte de la bonne colonne dans le calcul du prix d'un devis.*
- **Mappage référence client** : *Correction du mappage de la référence client dans le formulaire de génération de devis.*
- **Nouvelle matière** : *Lors de la création d'une nouvelle matière dans le stock, le code article n'est plus grisé*.
## [v1.62.0] - 22/05/2026
### 🆕 Ajouts 
- **Actualisation du stock** : *Lors de l'actualisation du stock, les fenêtres volantes sont garder au premier plan.*
### 🔄 Modifications 
- **Référence client** : *La trame d'impression du devis a été modifié pour prendre en compte la référence client.*
### 🐛 Corrections
- **Déplacement des commandes** : *Correction de l'erreur de déplacement des commandes dans le planning.*
- **Prise en compte des décimales dans le devis** : *Correction de l'erreur de prise en compte des décimales dans le devis.*
## [v1.61.1] - 22/05/2026
### 🆕 Ajouts 
- **Tri des devis** : *Tri des devis par date décroissante.*
- **Ajout de colonnes dans la liste des devis** : *Ajout des colonnes "Num. devis", "Ville" et "Dept." dans la liste des devis.*
- **Référence client** : *Ajout de la référence client dans le formulaire de génération de devis.*
- **Bouton "nouveau devis"** : *Ajout d'un bouton pour créer un nouveau devis directement depuis le formulaire en gardant le client.*
- **Filtres devis** : *Ajout de filtres pour rechercher les devis par client, numéro de devis et département.*
### 🔄 Modifications 
- **Ordre contact** : *Modification de l'ordre d'affichage du nom et prénom du contact.*
- **Dossier de sauvegarde devis** : *Modification du dossier de sauvegarde des devis.*
- **Impression devis** : *Ajout de la vérification de l'existence d'un fichier de devis avant impression.*
- **Contact commercial** : *Modification du champ contact commercial lors de la génération des devis*
### 🐛 Corrections
- **Chargement données devis** : *Correction de l'erreur de quantité lors du chargement d'un devis déjà ouvert.*
## [v1.61.0] - 21/05/2026
### 🆕 Ajouts 
- **Adhésif** : *Ajout de la sélection de l'adhésif dans le formulaire de génération de devis. Ajout de la liste des adhésifs lors de la création d'une matière depuis le stock.*
- **Liste des prospects devis** : *Ajout de la sélection des prospects dans le formulaire de génération de devis.*
- **Affichage des prospects** : *Modification de la liste des clients pour afficher/masquer les prospects.*
- **Mise à jour des EAN** : *Mise à jour des EAN*
- **Modification liste adhésifs matières** : *Ajout de la modification manuelle de la liste des adhésifs matières depuis l'écran de paramètrage.*
- **Impression avec ruban** : *Ajout de la possibilité d'imprimer les devis avec l'option ruban.*
### 🔄 Modifications 
- **Affichage observation article** : *Modification de l'affichage des observations des articles pour prendre en charge le format RTF.*
- **Libellé de machine** : *Modification de l'affichage du libellé de la machine pour une prise en compte de la machine séléctionnée dans la commande et non dans le squelette.*
- **Suppression d'un devis** : *Ajout de la possibilité de supprimer un devis directement depuis la liste des devis.*
### 🐛 Corrections
- **Sauvegarde statut** : *Correction d'un problème de sauvegarde du statut d'un devis lors de la création.*
## [v1.60.9] - 18/05/2026
### 🆕 Ajouts 
- **Bouton génération devis** : *Ajout d'un bouton pour générer les devis directement depuis le formulaire*
- **Affichage des commandes en production** : *Affichage des commandes en cours de production dans les écrans de choix de la date de début de production*
- **Rouleau et Paravent** : *Ajout des options rouleau et paravent dans le formulaire de génération de devis*
- **Tri des quantités** : *Tri des quantités dans le tableau des devis par ordre croissant*
### 🔄 Modifications 
- **Vérrouillage des heures de production** : *Mise en pause du vérrouillage des heures de production pour les jours ou une commande est déjà planifiée*
- **Vérrouillage des champs devis** : *Dans la liste des devis, les champs des devis sont désormais verrouillés pour éviter les modifications accidentelles*
### 🐛 Corrections
- **Erreur lors de la modification d'informations dans le stock** : *Lors de la modification d'information dans le stock, si le prix n'était pas renseigné, cela posait un problème de chargement des données*
- **Erreur matieère sans prix** : *Lors du choix de la matièere dans la création d'un devis, si le prix de la matièere n'était pas renseigné, cela posait un problème de chargement des données*
- **Erreur recalcul laize matière** : *Lors de la saisie des informations de la plaque, il était possible que le recalcul de laize matière échoue*
- **Erreur de chargement d'un article depuis la commande** : *Lors de la sélection d'un article depuis la commande, si le format n'était pas renseigné, le chargement rentrait en erreur*
## [v1.60.8] - 14/05/2026
### 🆕 Ajouts 
- **Vérrouillage des horaires** : *La gestion des horaires de production ne sont pas modifiable si une commandes est déjà planifiée*
- **Modification statut devis** : *Modification du statut d'un devis directement dans la liste des devis*
- **Pictogramme plaque** : *Ajout d'un pictogramme pour différencier les plaques a créer des plaques déjà créées*
- **Sélection de la ligne devis** : *Lors de l'actualisation de la liste des devis, si une ligne était sélectionnée, elle reste sélectionnée*
- **Création plaque depuis un devis** : *Une plaque peut directement être créée depuis un devis*
- **Fichier trame devis** : *Mise à disposition du fichier de trame devis*
### 🔄 Modifications 
- **Affichage des prix devis** :*Modification du nombre de chiffre après la virgule pour le prix matière et le PA HT"
### 🐛 Corrections
- **Actualisation du stock** : *Le stock n'était pas correctement actualisé après l'ajout d'un article dans une commande*
- **Affichage commercial** : *Correction de la sélection du commercial dans la liste des devis*
## [v1.60.5] - 2025-05-07
### 🆕 Ajouts 
- **Ouverture des journées** : *Ouverture des journées de productions de 05h00 à 20h00*
### 🔄 Modifications 
- **Affichage des jours de fermeture machine** : *Modification de l'affichage des jours de fermeture machine*
### 🐛 Corrections
- **Corrections multiples commandes** : *Corrections multiples des erreurs de déplacement des commandes*
## [v1.60.4] - 2025-04-30
### 🆕 Ajouts 
- **ESA-97** : *Ajout du nom et du prénom du contact dans la visualisation des devis*
### 🐛 Corrections
- **ESA-96** : *Correction de l'erreur de l'enregistrement d'un devis lors de la création d'une plaque*
## [v1.60.3] - 2025-04-30
- **Corrections continues**
## [v1.60.2] - 2025-04-29
### 🐛 Corrections
- ESA-92 | Correction de l'erreur d'ajout de quantité en stock
- ESA-93 | Correction de l'erreur de validation de la matière lors d'une fin de production
## [v1.60.1] - 2025-04-29
### 🆕 Ajouts 
- ESA-80 | Export des fiches techniques vers un fichier Excel
- ESA-83 | Le format des cartons n'est plus un champ obligatoire
- ESA-88 | Ajout du nom du client et du format dans la visualisation des mouvements de stock
### 🔄 Modifications 
- ESA-79 | Actualisation de la liste des commandes lorsque le filtre des clients est vide
- ESA-81 | Changement du fonctionnement du filtre de recherche des clients dans les fiches techniques
- ESA-82 | Modification du filtre des machines pour les fiches techniques
- ESA-84 | Modification de l'infobulle des commandes dans le planning
### 🐛 Corrections
- ESA-83 | Correction du chargement de l'image de sens de sortie
- ESA-91 | Correction de l'erreur de calcul du prix de la plaque
- ESA-90 | Correction du troncage de la laize matière
## [v1.60.0] - 2025-04-28
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.9] - 2025-04-28
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.8] - 2025-04-27
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.7] - 2025-04-27
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.6] - 2025-04-23
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.5] - 2025-04-22
### 🆕 Ajouts 
- **Génération des devis** : *Mise à jour de la génération des devis*
## [v1.55.4] - 2025-04-20
### 🔄 Modifications 
- **Filtre fiches techniques** : *Modification de la liste des filtres dans les fiches techniques*
### 🐛 Corrections
- **Affichage commentaire client** : *Affichage du commentaire client*

## [v1.55.3] - 2025-04-20
### 🆕 Ajouts 
- **Ajout colonne stock** : *Ajout de la colonne et du filtre fournisseur*
- **Modification informations** : *Modification des informations de stock maintenant possible*
### 🐛 Corrections
- **Information stock** : *Lors de l'ajout d'une nouvelle ligne dans le stock, si le libellé de la ligne avait une apostrophe, la ligne rentrait en erreur*
- **Sélection de la laize stock** : *Correction de l'erreur de sélection de laize dans le stock*
- **Actualsiation planning** : *Correction de l'erreur d'actualisation des commandes sans date de plannification*
## [v1.55.2] - 2025-04-15
### 🐛 Corrections
- **Calcul du temps de production** : *Le temps de production n'était plus correctement calculé*
- **Ouverture semaine** : *Changement de la gestion des semaines dans l'ouverture des machines*
## [v1.55.1] - 2025-04-13
### 🆕 Ajouts 
- **Visualisation fiche technique** : *La fiche technique est maintenant visualisable lors d'un double clique*
- **Vérification plaque** : *Lors de la saisie d'une commande, une vérification de la plaque est faite.*
- **Plage dynamique** : *Ajout des plages dynamiques dans la gestion des horaires de production de machine*
- **Suppression sélection** : *Il n'y a plus qu'une seule commande sélectionnable dans le planning*

### 🔄 Modifications 
- **Recherche fiche technique** : *Lors de la recherche de fiche technique, la sélection de fiche pour impression est automatiquement désélectionné*
- **Infobulle planning** : *Modification des informations de l'infobulle planning*
  
## [v1.55.0] - 2025-04-07
### 🐛 Corrections
- **Affichage caractères observation** : *Dans le champ observation d'un article, des caractères non sollicités étaient affichés. Le problème intervenait lors de la sauvegarde à cause d'un champ mal dimensionné*
- **Créneaux commande** : *Modification de l'affichage des créneaux interdit dans le placement d'une commande*
- **Plage horaire nouveau planning** : *Correction de l'erreur de plage horaire dans le nouveau planning*
## [v1.54.4] - 2025-03-26
### 🆕 Ajouts 
- **Génération des devis** : *Ajout du module de génération des devis en version alpha*
### 🔄 Modifications 
- **Infobulle commandes** : *Retrait de l'infobulle des commandes*
### 🐛 Corrections
- **Impression étiquettes rouleaux** : *Correction de l'erreur de champ dans les étiquettes rouleaux*
## [v1.54.3] - 2025-03-20
### 🆕 Ajouts 
- **Laize matière** : *Ajout de la laize matière dans le fichier Excel des clichés*
### 🐛 Corrections
- **Modification d'un article** : *Correction de l'erreur lors de la validation d'un article*
- **Erreur de format** : *Correction de l'erreur de format lors du chargement d'un article*
## [v1.54.2] - 2025-03-19
### 🔄 Modifications 
- **Nouveau planning** : *Réactivation du nouveau planning uniquement en consultation* 
## [v1.54.1] - 2025-03-18
### 🆕 Ajouts 
- **Filtre automatique** : *Au lancement de l'application, les commandes sont automatiquement filtrées sur l'état "en attente" ou "en production"*
### 🐛 Corrections
- **Affichage simulation** : *Les commandes terminées n'étaient pas toutes masquées lors de la simulation*
## [v1.54.0] - 2025-03-17
### 🆕 Ajouts 
- **Version préprod** : *Ajout de la version de préproduction pour des tests sur le nouveau planning*
## [v1.53.4] - 2025-03-17
### 🆕 Ajouts 
- **Infobulle commandes** : *Ajout d'une infobulle au survol des commandes*
- **Filtre commandes** : *Ajout d'un filtre des états des commandes*
- **Mise en forme champ observation** : *Le champ  observation peut être mis en forme par du texte en gras et en couleur*
### 🐛 Corrections
- **Mise à jour ML. Prod** : *Mise à jour de la quantité de ML prod lors de changement dans le squelette de l'article* 
## [v1.53.3] - 2025-03-12
### 🐛 Corrections
- **Mise à jour automatique** : *La mise à jour automatique ne se lançait plus correctement*
- **Etiquettes rouleaux** : *Corrections des erreurs de mappage des champs dans les étiquettes rouleaux*
## [v1.53.2] - 2025-03-11
### 🐛 Corrections
- **Affichage info bulle** : *Correction de l'erreur d'affichage de l'info bulle dans le planning*
- **Informations étiquettes cartons** : *Corretion des informations dans les étiquettes cartons*
## [v1.53.1] - 2025-03-11
### 🐛 Corrections
- **Erreur nom imprimantes** : *Erreur sur le paramètrage des noms d'imprimantes*
## [v1.53.0] - 2025-03-11
### 🆕 Ajouts 
- **Connexion automatique** : *Ajout de l'option de connexion automatique et de déconnexion*
- **Info bulle planning** : *Ajout dans l'info bulle du planning la quantitée d'étiquettes*
### 🔄 Modifications 
- **Impressions des étiquettes** : *Refonte de l'impression des étiquettes*

## [v1.52.4] - 2025-03-09
### 🆕 Ajouts 
- **Info bulles planning** : *Ajout d'une info-bulle lors du passage du curseur sur une commande*
### 🔄 Modifications 
- **Caclul aplat** : *Modification du calcul du temps de production avec un aplat*
### 🐛 Corrections
- **Visualisation des commandes dans l'atelier** : *Certaines commandes n'étaient pas visibles dans l'atelier*
- **Lenteur chargement atelier** : *Optimisation de l'affichage du planning atelier*
- **Erreur PA** : *Modification du format du champ PA et réctification des données dans la table*
- **Déduction du stock** : *Lors de la déclaration de la matière après la production, la matière appelée n'était pas la bonne. Le changement de matière entraînait une erreur de déclaration*
- **Affichage stock** : *Lors de la création d'une nouvelle matière, si celle-ci n'était pas utilisée dans une commande, elle n'apparaissait pas dans le stock*
## [v1.52.2] - 2025-02-26
### 🆕 Ajouts
- **Observation client** : *Ajout du champ 'observation client' dans la fiche technique*
- **Planification des commandes** : *Affichage des commandes en attente*
### 🐛 Corrections
- **Changement de clichés** : *Enregistrement automatique du changement de clichés avec une bonne prise en compte lors de la planification*
- **Affichage des heures de pause** : *Récupération de l'affichage des heures de pauses*
- **Liste outil** : *Application de la date du jour en automatique dans tous les scénarios possible*
## [v1.52.1] - 2025-02-24
### 🐛 Corrections
- **Affichage des heures de pause** : *Récupération de l'affichage des heures de pauses*
- **Erreur aplat** : *La sélection d'un article dans une commande ainsi que la modification de celui-ci ne déclenche plus l'erreur d'aplat*
- **Actualisation des commandes sans dates** : *Modification de l'actualisation de la liste des commandes sans date de modification*
  
## [v1.52.0] - 2025-02-23
### 🆕 Ajouts
- **Double ligne planning** : *Affichage des informations sur deux lignes dans le nouveau planning*
- **Refonte visuels commandes** : *Refonte visuels des segments des commandes*
- **Code couleurs états** : *Changemnent des couleurs des commandes pour afficher les états sous forme de couleur*
- **Changement de cliché** : *Changement du nombre de clichés directement dans la liste des commandes en attente de planification*
- **Changement d'aplat** : *Ajout d'un changement d'aplat : 20 minutes supplémentaires en cas de changement*
- **Verrouillage du planning** : *Ajout d'un bouton de verrouillage du planning* 

### 🔄 Modifications 
- **Modification filtre état** : *Changement de l'affichage des filtres des états*
## [v1.51.1] - 2025-02-18
### 🔄 Modifications 
- **Affichage du bouton nouveau planning** : *Le bouton du nouveau planning est maintenant disponible pour tout le monde*
## [v1.51.0] - 2025-02-18
### 🆕 Ajouts
- **Mise en place du nouveau planning** : *Mise à disposition du nouveau planning en version bêta*
- **Détail du reservé** : *Ajout de la colonne référence client*
  
### 🔄 Modifications 
- **Limitation du nombre de caractères** : *Lors de l'impression d'une étiquette carton, les caractères sont limités lors de l'impression*
  
## [v1.50.3] - 2025-02-12
### 🔄 Modifications
- **Couleur application** : *Harmonisation des couleurs de l'application*

### 🐛 Corrections
- **Date automatique mouvement** : *Lors de la saisie d'un mouvement dans le stock, la date du mouvement est automatiquement rajoutée*
- **Affichage mouvement de stock** : *Correction de l'affichage de multiréférences dans le mouvement de stock*
   
## [v1.50.2] - 2025-02-11
### 🐛 Corrections
- **Correction erreur planification** : *Corrections d'erreurs qui perturbaient la planification*

## [v1.50.1] - 2025-02-11
### 🐛 Corrections
- **Messages d'erreurs** : *Corrections des messages d'erreur lors de la planification*
- **Erreur des heures** : *Correction de l'affichage des heures dans le planning*
- **Erreur chargement des commandes** : *Correction de l'erreur de chargement dans le planning au moment de planifier une commande*
- **Affichage des plages interdites** : *Les plages interdites sont de nouveaux affichées*

## [v1.50.0] - 2025-02-10
### 🆕 Ajouts
- **Export Excel du temps de production** : *Eportation du tableau des temps de production au format Excel*
- **Contrôle du Z** : *Ajout d'un indicateur quand une combinaison cylindre/machine n'existe pas*
    
### 🔄 Modifications
- **Fonction de calcul du temps de production restant** : *Modification de la fonction de calcul du temps de production. Prise en compte réel du temps de production de chacune des commandes*
- **Modification filtre machines** : *Evolution du filtre des machines dans l'écran des temps de production*

### 🐛 Corrections
- **Déplanification commande** : *Lors du changement de la machine depuis une commande, la commande initialement planifiée sera déplanifiée*
- **Affichage des colonnes** : *L'affichage des colonnes dans le planning ne nécessite plus de rafraichissement pour être correctement affiché*
  
## [v1.49.6] - 2025-02-09
### 🐛 Corrections
- **Affichage des commandes** : *Les commandes après 16h30 n'étaient pas correctement affichées*
  
## [v1.49.5] - 2025-02-09
### 🐛 Corrections
- **Planification après 16h30** : *La planification après 16h30 sur la semaine du 09/02/2026 au 13/02/2026 n'était pas possible*
  
## [v1.49.4] - 2025-02-06
### 🆕 Ajouts
- **Ouverture de plannification** : *Pour la semaine du 09/02/2026 au 13/02/2026, la machine markandy est planifiable de 05h00 à 22h00*

## [v1.49.3] - 2025-02-03
### 🐛 Corrections
- **Affichage des commandes en attente** : *Dans l'atelier, certaines commandes en attente n'était pas correctement affichée*
  
## [v1.49.2] - 2025-02-03
### 🆕 Ajouts
- **Bouton rafraîchir** : *Ajout d'un bouton pour rafraîchir la liste des commandes sans date de planification*

### 🐛 Corrections
- **Erreur d'impression des fiches techniques** : *Lors de l'impression de plusieurs fiches techniques, un message d'erreur pouvait apparaitre*
- **Visualisation BAT** : *Le BAT est de nouveau consultable depuis l'espace des commandes*
- **Date de départ** : *Affichage d'une date vide dans le planning sur la date de départ n'est pas renseignée*

## [v1.49.1] - 2025-01-29
### 🆕 Ajouts
- **Bouton stock** : *Ajout d'un bouton de stock sur l'écran de planification*
- **Sélection automatique**  : *Lors de l’utilisation des menus contextuelle dans les tableaux, l’appui sur un clique droit sélectionne automatiquement la ligne*
- **Ajout de colonne** : *Dans la liste des commandes, la date de saisie de la commande a été ajoutée*
- **Opérateur de bobinage** : *Il existe maintenant un opérateur de bobinage dans le suivi des commandes*
- **Filtre des colonnes** : *Ajout d'un filtre de sélection des colonnes dans l'écran de temps de production*
  
### 🔄 Modifications
- **Fiche technique** : *Modification de la trame de la fiche technique*
- **Actualisation ML** : *Actualisation du ML si le nombre d'étiquettes par rouleaux est modifié*

### 🐛 Corrections
- **Correction filtre article** : *Le filtre du libellé de l'article ne fonctionnait plus depuis la dernière mise à jour*
- **Erreur format fiche technique** : *Correction de l'erreur de format lors de l'impression d'une fiche technique client*
- **Mauvaise fiche technique - impression multiple** : *Lors de l'impression multiple, la fiche technique imprimée n'était pas la fiche technique client*
- **Inversion des colonnes** : *Dans le temps de production, deux colonnes étaient inversées*
    
## [v1.49.0] - 2025-01-26

### 🆕 Ajouts
### 🔄 Modifications
- **Changement de machine** : *Lors du changement d'une machine, la planification de la commande est supprimée*
### 🐛 Corrections
- **Affichage des commandes planning** : *Sélection des éléments des commandes désormais impossible*
- **Affichage ML atelier** : *Correction de la valeur des ML pour l'atelier*
    
## [v1.48.1] - 2025-01-21

### 🆕 Ajouts
- **Ajout des couleurs machine** : *L'affichage du planning a été modifié pour faire apparaître les couleurs des machines*
- **Ajout du temps de bobinage** : *Ajout du temps de bobinage dans l'écran de temps de production*
- **Suppression de la matière** : *La suppression de la matière est disponible depuis l'écran de mise à jour du prix matière*

### 🐛 Corrections
- **Correction affichage commande** : *En fonction des critères de filtre, les commandes n'étaient pas toujours affichées dans l'ordre d'heure de début dans le planning*
- **Actualisation commande** : *Lors de la modification de l'état d'une commande, l'écran se met correctement à jour*
  
## [v1.48.0] - 2025-01-20

### 🆕 Ajouts
- **Date automatique** : *Lors de la création d'un nouveau format, la date de création est automatiquement ajoutée*
- **Affichage d'Excel** : *Lors de la génération du fichier Excel de cliché, la fenêtre Excel s'ouvre au premier plan*
- **Affichage des commandes sans date de planification** : *L'écran des commandes sans date de planification est maintenant affiché automatiquement sur le deuxième écran*
- **Bouton RAZ filtres** : *Ajout d'un bouton de remise à zéro des filtres sur les formulaires*
- **Changement du comportement de la fenêtre d'impression** : *Après l'impression d'étiquettes, la fenêtre d'impression ne se ferme plus automatiquement*
  
### 🔄 Modifications
- **Modification de format** : *Modification de l'affichage des champs ESP DEV et Laize avec deux chiffres après la virgule.Modification de l'affichage du champ ECH dans la fiche technique*
- **Affichage de la date d'impression dans la fiche technique** : *La date du jour d'impression est maintenant imprimée dans la fiche technique*
- **Modification du comportement du changement d'état de commande** : *Lors du changement d'état d'une commande, les questions de validation ont été supprimées et la fenêtre se ferme automatiquement après*
  
### 🐛 Corrections
- **Affichage du développé dans l'impression de cliché** : *Lors de la demande d'impression du fichier Excel de cliché, le développé n'était pas reprit*
- **Problème mappage du champ ESP DEV** : *Dans la boite à outil, le champ ESP était mal mappé. Il a été supprimé et le mappage a été contrôlé*
- **Couleur pour les commandes terminées** : *La couleur des commandes terminées est correctement affichée dans l'écran de planification d'une commande*
- **Sens de sortie non visible** : *Lors de la modification d'un article, l'image du sens de sortie n'était pas visible*
- **Erreur d'actualisation** : *Correction de l'erreur d'actualisation qui laissait des articles visible sans commande sélectionnée*
- **Suppression d'un client** : *Remise en fonctionnement de la suppression d'un client via le bouton supp*
- **Filtre pause atelier** : *Correction du fonctionnement du filtre pause*
  
## [v1.47.4] - 2025-01-13

### 🔄 Modifications
- **Modification des listes déroulantes** : *Les listes déroulantes sont maintenant actualisées lors de modification sur d'autres plannings*
- **Prise en compte de la laize mini** : *Lors de la création d'un article, la laize mini est maintenant utilisée à la place de la laize 2*
- **Modification taille** : *Réduction de la taille de la fenêtre de stock*

### 🐛 Corrections
- **Erreur lors de la création d'un stock** : *Correction lors de la création d'un article depuis le stock sans quantitée renseignée*
- **Tri des tableaux** : *Le tri des colonnes dans les tableaux fonctionne sur toutes les colonnes*
  
## [v1.47.3] - 2025-01-13

### 🔄 Modifications
- **Commandes terminées** : *lorsqu'une commande est terminée, celle-ci s'affiche d'une couleur différente dans la planification*
- **Liste déroulante** : *Dans l'écran de planification des commandes, la molette ne modifie plus les liste déroulante*

## [v1.47.2] - 2025-01-12

### 🔄 Modifications
- **Réduction du planning** : *Lors de l'impression d'étiquettes, le planning était automatiquement réduit*
- **Affichage de la fenêtre des commandes** : *Certaine fois, la fenêtre des commandes n'était pas affichée au premier plan*

## [v1.47.1] - 2025-01-12

### 🆕 Ajouts
- **Ajout de la laize 2** : *Dans l'écran de saisie d'une commande, ajout du champ laize 2 issue de la liste outil*
- **Actualisation planning** : *Ajout de l'actualisation du planning dans la routine d'actualisation globale*
- **Ajout du filtre code article client** : *Ajout du filtre dans la recherche de fiche technique*
- **Création fiche technique client** : *Création de la fiche technique client a partir de l'ancien modèle*
- **Ajout d'un bouton cocher/décocher** : *Ajout d'un bouton pour sélectionner ou de sélectionner les colonnes des fiches techniques*

### 🔄 Modifications
- **Modification de l'utilisation du filtre des états** : *Dans le planning de l'atelier, le filtre multiple des états a été remplacé par un mono filtre*
- **Contrôle du stock** : *L'affichage de la pastille de couleur n'était pas cohérent avec le stock réel de l'atelier*
- **Optimisation de l'affichage** : *Dans le planning de l'atelier, après une validation de commande, le temps de chargement du planning a été réduit*
- **Modification des filtres stock** : *Ajout de la possibilité de trié le stock avec des valeurs > et <*
- **Modification format laize mini** : *Retrait des 3 chiffres après la virgule de la laize mini dans la liste outil*
  
### 🐛 Corrections
- **Remise dans l'ordre des commandes** : *Dans le planning de l'atelier, les commandes sont maintenant affichées par ordre de début de production*
- **Erreur de mise à jour du prix** : *Correction de l'erreur de format rencontré dans la mise à jour des prix*
- **Erreur de calcul - temps de production restant** : *Correction de l'affichage du temps de production restant*
- **Rechargement de la table des prix** : *Correction des erreurs de prix matière*
- **Corrections multiples en run**
  
## [v1.40.0 -> v1.46.1]

- **Corrections multiples en run**

## [v1.40.0] - 2025-12-13

### 🆕 Ajouts
- **Déplacement des commandes sur 4 semaines** : *Modification de la simulation pour prendre en compte 4 semaines*
- **Suppression d'une commande planifiée** : *Ajout de la suppression d'une commande qui est planifié. Une fois supprimée, celle-ci revient dans la liste des commandes en attente de planification*
- **Pauses repas dans le planning** : *Ajout de l'effet visuel des pauses repas dans le planning*

### 🔄 Modifications
- **Temps de production restant** : *Changement du libellé d'information qu'une machine ne peut plus produire sur une journée*
  
### 🐛 Corrections
- **Calcul de la disponibilité matière** : *Lors du calcul, la commande en cours de modification était prise en compte dans le calcul de disponibilité et le calcul était érronnée*
- **Impression du BAT avec une fiche techniques** : *Lors de l'impression d'une fiche technique, si le BAT était vide, il était considéré comme indisponible*
- **Impression des fiches techniques** : *Corrections multiples*
- **Déduction du stock** : *La matière n'était pas correctement déduite du stock*
- **Alerte de stock** : *Modification de l'alerte pour une bonne prise en compte du stock*  

## [v1.0.38] - 2025-12-10

### 🆕 Ajouts
- **Alerte de stock matière indisponible** : *Lors de la saisie d'un article dans une commande, une alerte de stock matière indisponible est levé si jamais le stock est indisponible*
- **Alerte lors de la création d'un article avec un produit inexistant** : *Lors de la saisie d'un article dans une commande, si la combinaison laize & produit n'existe pas, alors une alerte est levé et le produit est créé*
- **Ecrans multiples article** : *L'écran des articles peut maintenant afficher plusieurs articles*
- **Impression fiche technique et BAT** : *Ajout de la fusion entre la fiche technique et le BAT*
- **Sélection automatique** : *Lorsqu'un commande est créée, celle-ci est automatiquement sélectionnée dans la liste des commandes*
- **Alerte de création** : *Ajout d'une alerte de création des articles*

### 🔄 Modifications
- **Changement de l'affichage des commandes sans date de planification** : *Ajout d'une colonne code client et changement des libellés de colonnes*
- **Changement icone** : *Changement de l'icone d'ajout d'un article à une commande*
- **Saisie du Z** : *Modification de la liste déroulante du nombre de dents (Z) par une zone de texte*

### 🐛 Corrections
- **Modification d'un BAT** : *Correction des erreurs liées à la modification d'un BAT*
- **Création et modification d'un article** : *Correction des erreurs liées à la création et à la modification d'un article*
- **Calcul article** : *Actualisation des calculs PA HT/1000 et M²/1000 lors de la saisie d'informations d'un article*
- **Actualisation des articles** : *Lors de la création d'un article, la liste des articles n'était pas correctement actualisée*
- **Filtre fiche technique** : *Correction des filtres d'affichage des fiches techniques*

## [v1.0.37] - 2025-12-02  

### 🆕 Ajouts
- **Temps de production restant** : *Ajout du calcul de temps de production restant par machine. ⚠️ Le calcul du temps de production restant est basé sur les commandes saisient et le temps théorique de travail. Le calcul sera adapté lors de la modification du temps de production réel de l'atelier*
- **Bouton vers le changelog** : *Ajout d'un bouton pointant vers le changelog de l'application*
- **Infobulles** : *Des infobulles ont été ajoutées sur l'ensemble des boutons de l'application*


### 🔄 Modifications
- **Sauvegarde du fichier de configuration** : *Le fichier de configuration est maintenant sauvegardé. Le fichier ne sera plus demandé à chaque mise à jour*
- **Masquage d'une colonne ID** : *Dans la liste des fiches techniques, l'ID était visible. Il est maintenant masqué*
- **Ajout d'un article à une commande** : *Le fonctionnement d'ajout d'un article à une commande a évolué. Maintenant, lors de la sélection d'un article, celui-ci est automatiquement ajouté à la commande et est directement modifiable*
- **Filtre liste des articles** : *Le filtre de la liste des articles a été étendu à l'ensemble des colonnes visible dans la liste*
- **Changement de libellé dans la saisie d'une commande** : *Dans l'écran de saisit d'une commande, le champ 'Num. Commande' a été remplacé par 'Référence client' et 'Num. Lot' par 'N° Lot CM'*

### 🐛 Corrections
- **Erreur de mise à jour des suppressions des commandes commandes** : *Lors de la suppression d'une commande, celle-ci pouvait toujours être visible dans la liste des commandes en attente de plannification*
- **Filtre des commandes dans date de plannification** : *Lorsqu'un filtre machine est appliqué sur le planning, celui-ci est également appliqué sur les commandes en attente de plannification*
- **Erreur de saisie de date de livraison** : *Lors de la création d'une commande, la date de départ était automatiquement sauvegardée dans la date de livraison*
- **Numéro de semaines** : *Les numéros de semaines n'étaient pas toujours corrects dans le planning*
- **Liste déroulante des formats de cartons** : *Correction de la liste déroulante des formats qui n'affichait pas la bonne liste*
- **Liste des commandes** : *Dans l'écran de sélection de l'heure de début de production, la colonne Z n'était jamais remise à zéro*

### ⛔ Abandon
- **Modification commentaire** : *La modification directement du commentaire dans la liste du stock n'est pas possible*

## [v1.0.36] - 2025-11-27  

### 🆕 Ajouts
- **Création de l'écran fiches techniques** : *Création de l'écran de visualisation de toutes le fiches techniques*
- **Crétion du nombre de clichés** : *Ajout d'une liste déroulante du nombre de cliché dans la saisie des commandes. Si cette option est utilisée, le temps de calage de la machine est enlevé du temps de production et un durée de cinq minutes par cliché est ajoutée*
- **Changement de couleur global de l'application** : *Changement de la nuance de vert dans l'application [en cours de changement]*
  
### 🔄 Modifications
- **Impression des fiches techniques** : *Modification du lien vers les fiches techniques*
- **Modification de l'écran de saisie des commandes dans le planning** : *Modification de l'interfacde de saisie des commandes dans le planning pour une optimisation du chargement*
  
### 🐛 Corrections
- **Erreur lors de la création d'une commande** : *A la création d'une commande, celle-ci n'avait pas d'état pas défaut. Cela entrainait une erreur lors du placement de la commande dans le planning*
- **Erreur de suppression d'une commande** : *Correction de l'erreur lié à la suppression d'une commannde*
  
## [v1.0.35] - 2025-11-25

### 🆕 Ajouts
- **Ajout d'un bouton de stock** : *Ajout d'un bouton pour afficher le stock sur une fenêtre indépendante*
- **Ajout du nombre de dents dans le planning** : *Le nombre de dents a été ajouté dans les informations visualisées dans le planning ainsi que dans l'écran du choix de début de production*

### 🔄 Modifications
- **Sélection automatique d'un article** : *Lors de la sélection d'une commande, le premier article est automatiquement sélectionné et chargé*
- **Changement des couleurs des champs PA €/HT 1000 & M²/1000** : *La couleur verte a été ajoutée pour les données issues du squelette de l'article et la couleur rouge pour les données modifiées*

### 🐛 Corrections
- **Correction de la l'affichage de la liste déroulante des Z la partie commande** : *La liste s'affichait vide peu importe l'article saisit*
- **Changement du lien vers l'image de sens** : *Le lien vers l'image de sens n'allait pas chercher au bon endroit sur le NAS*
- **Erreur sur la mise à jour des prix** : *Une erreur était déclenchée lors de la modification de prix via l'écran "mise à jour des prix"*
- **Erreur lors du changement de mois et d'année dans l'onglet planning** : *Correction de l'erreur de base de données lors du chargement du planning*