const arrayObjets = [
  {
    id: 1,
    imageUrls: ['/static/images/details/1-1.JPG', '/static/images/details/1-2.JPG'],
    caption: "Alors que je stressais à la veille de mon premier passage du permis tout en \"regardant\" le film Fast & Furious - un examen foiré - une jeune demoiselle curieuse apparaît dans mes MP Instagram pour me questionner sur qui je suis. La raison ? Je commente les publications d'une relation commune (dont on taira le nom) et cela attise sa curiosité. Une relation étrange se construit alors peu à peu, purement platonique mais sincère, nous poussant à nous confier l'un à l'autre sans crainte du jugement et ce, malgré la distance et la différence d'âge. Je l'aide même à choisir parmi ses nombreux prétendants amoureux, c'est dire ! Affaire à suivre…",
    location: "Instagram",
    hashtags: "#rencontre #whatif #waitandsee",
    title: "Premier contact",
    description: "Quand une curieuse jeune fille glisse dans les messages privés d'un gars plus âgé.",
    date: "04-10-2017"
  },
  {
    id: 2,
    imageUrls: ['/static/images/details/2-1.jpg'],
    caption: "En plein confinement, c'est empreint d'ennui que je constate - avec beaucoup d'étonnement - que celle qui m'avait bloqué 2 ans auparavant réapparaît soudainement dans cette même messagerie Instagram où nous nous étions rencontrés il y a presque 3 ans jour pour jour. Celle-ci fait mine (du moins, c'est ce que je pensais) de ne pas se rappeler qui je suis. Il faut dire que je suis ravi de la retrouver, étant resté sur une incompréhension certaine à l'été 2018 suite à son blocage contre lequel j'ai essayé de lutter… Un nouveau départ assez inégal, avec des périodes de creux sans aucune nouvelle (chacun a désormais une vie bien différente) mais qui marque le départ d'une aventure insoupçonnée qui commencera quelques mois plus tard…",
    location: "Instagram",
    hashtags: "#rencontrebis #liloufaitdulilou",
    title: "Le comeback",
    description: "Quand cette même jeune fille perd la boule et glisse de nouveau dans ses messages privés.",
    date: "04-08-2020"
  },
  {
    id: 3,
    imageUrls: ['/static/images/details/3-1.JPEG'],
    caption: "Profitant de l'opportunité de notre proximité géographique (ou presque) et souhaitant franchement me changer les idées, je propose de laisser pour la première fois mon petit bébé Rocket pour aller à la rencontre de Lilou. Un périple contre vents et marées (enfin, plutôt vents et pluie) que je mène à bien, motivé par l'envie de voir celle que je n'arrive pas encore à cerner correctement. La rencontre est assez folle, puisque je ressens une réelle attirance sans vouloir me l'avouer tout de suite, pensant toute réciprocité impossible. Nous passons la journée ensemble, à déjeuner au restaurant alors que je déteste, à faire ses courses (l'avantage de ma voiture commence ici, lol) pour un maximum de fun, avant de passer la journée chez elle… à faire le con - à base de placage au sol, photomontage ou enfermement sur son \"balcon\". Une journée simple mais efficace où son rire m'aura fait oublier toute tristesse, au point de me rappeler encore aujourd'hui à quel endroit précis de la route retour je me suis rendu compte que cette \"amie\" me plaisait plus que bien.",
    location: "Rennes, France",
    hashtags: "#rencontreter #envraidevrai #coupdefoudre",
    title: "La première (vraie) rencontre",
    description: "Quand la tristesse bouleverse ton destin de manière inattendue…",
    date: "10-03-2020"
  },
  {
    id: 4,
    imageUrls: ['/static/images/details/4-1.jpg'],
    caption: "Après être repassé chez elle en coup de vent et lui avoir laissé subtilement un « JTM » écrit sur un post-it, lançant une série d'autres « JTM » peu innocents dans nos conversations suivantes, c'est bel et bien ma charmante demoiselle qui passe le cap du premier « Je t'aime » dans une lettre postale charmante et inattendue, qui se sera faite attendre, jour férié oblige. À l'intérieur, elle me dévoile avec une prose irréprochable ses sentiments (partagés)… une nouvelle tellement surprenante que je suis forcé d'en faire lire une partie à mon meilleur ami. Un magnifique message, gravé à jamais dans ma mémoire. Et, comme elle le dit si bien, « je t'aime, mieux que je ne sais le dire ».",
    location: "Lannion, France",
    hashtags: "#lettre #jetaime",
    title: "La lettre",
    description: "Lilou fait le premier vrai pas et officialise les non-dits à l'ancienne",
    date: "11-12-2020"
  },
  {
    id: 5,
    imageUrls: ['/static/images/details/5-1.JPG'],
    caption: "Désireux de voir ma belle en dépit d'un confinement, je décide de sortir mes outils du parfait faussaire pour pondre un faux justificatif de domicile à Lilou lui permettant de prendre le train en direction de Lannion. Lui ayant concocté mon meilleur plat (une tarte au thon, wahouh…), c'est avec un plaisir incommensurable et, surtout, un stress inimaginable que je l'accueille alors dans mon humble demeure. Les rapprochements sont timides, d'abord une légère caresse dans le dos, avant (dit-elle) de lui toucher la cuisse. Après de nombreux et doux baisers échangés sur les joues, le premier pas est fait en échangeant un vrai baiser. Ne polémiquons pas sur qui est l'instigateur du dit baiser, c'est un sujet de discorde (même si l'on sait que c'est bien moi). Qu'importe, au final, puisque ce premier baiser aura été le premier de milliers d'autres tout au long du week-end.",
    location: "Lannion, France",
    hashtags: "#bisous",
    title: "L'officialisation",
    description: "Puisqu'une relation ne peut se contenter d'une simple lettre…",
    date: "11-21-2020"
  },
  {
    id: 6,
    imageUrls: ['/static/images/details/6-1.JPEG'],
    caption: "Après avoir rencontré mes beaux-parents la veille (une rencontre stressante en amont mais finalement merveilleuse et chaleureuse), Lilou décide que l'on célébrera le passage à la nouvelle année en compagnie de ses amis de lycée. Avant cela, il convient bien évidemment d'aller faire quelques courses pour la soirée… l'occasion idéale pour Lilou de refuser une belle petite priorité à droite alors que je suis sur son siège passager (ne jamais lui laisser le volant). Quel bonheur de voir ma chère et tendre faire un constat, dans la panique, oubliant son serre-tête avec des petites cornes… 🥲 Puis en a suivi une « petite » soirée où j'ai découvert ses potes et les joies de l'alcool en soirée. Pas le meilleur moment de ma vie, Lilou profitait donc, forcément, j'étais souvent seul au milieu d'inconnus avec un délire tout à fait différent du mien. Mais bon, je suis content d'avoir eu cette opportunité de fêter la nouvelle année à ses côtés.",
    location: "Saint Maixent, France",
    hashtags: "#happynewyear #accident #pilote",
    title: "Un réveillon… spécial",
    description: "On ne pouvait pas faire plus éprouvant comme fin d'année, c'est sûr.",
    date: "12-31-2020"
  },
  {
    id: 7,
    imageUrls: ['/static/images/details/7-1.JPG', '/static/images/details/7-2.JPG', '/static/images/details/7-3.JPG', '/static/images/details/7-4.JPG', '/static/images/details/7-5.JPG'],
    caption: "À peine intégré à la famille, voilà que je profite sans crier gare à des vacances tous frais payés à la montagne. Une première pour moi avec, (mal)heureusement, pas de ski possible en raison du blocage des remontées. Les vacances sont merveilleuses, à la fois reposantes et épuisantes, je profite d'une ambiance superbe - de laquelle je suis aussi tombé sous le charme - au sein de cette petite famille Thiboult qui m'accueille à bras ouverts. Je suis heureux de passer ces moments magiques avec ma chérie, avec énormément de rire et un peu de froid. L'expérience fut superbe et me laisse de nombreux souvenirs (à l'instar d'une potentielle excursion de la mort à la recherche d'un refuge) 💀 Heureusement, Rocket est restée chez son papi et a fait de belles bêtises.",
    location: "Bonneval-sur-Arc, France",
    hashtags: "#vacances #ski #famille",
    title: "Les pas bronzés font du ski",
    description: "Mes premiers pas à la montagne en hiver, bien accompagné !",
    date: "02-20-2021"
  },
  {
    id: 8,
    imageUrls: ['/static/images/details/8-1.JPG', '/static/images/details/8-2.JPG', '/static/images/details/8-3.JPG', '/static/images/details/8-4.JPG', '/static/images/details/8-5.JPG'],
    caption: "Pour la première fois de ma vie, je pars en vacances sans mes parents et avec l'élue de mon cœur. Malgré un stress permanent (mais bon, après tout, quand ne suis-je pas stressé) à l'idée de faire autant de route, seuls, vers un lieu de villégiature globalement rudimentaire… mais très vite, notre tente est montée et notre petit nid d'amour prend forme. On s'y sent bien mais le cœur reste à la découverte du monde qui nous entoure, ou presque. Une petite randonnée avortée - avec des tenues absolument inadaptées - nous pousse ensuite à privilégier les expériences aquatiques : rivière, piscine (un peu) et kayak rythment donc nos journées avec pas mal de lecture et d'élevage de têtards (qui faisait quoi ?!). L'expérience a été superbe de bout en bout et me rend vraiment désireux de réitérer l'expérience… ❤️☀️",
    location: "Sainte-Enimie, France",
    hashtags: "#concombre",
    title: "Les premières vacances",
    description: "Un petit moment rien qu'à deux dans une tente pour profiter de nos vacances",
    date: "08-07-2021"
  },
  {
    id: 9,
    imageUrls: ['/static/images/details/9-1.JPG', '/static/images/details/9-2.JPG', '/static/images/details/9-3.JPG', '/static/images/details/9-4.JPG'],
    caption: "Petit cadeau presque surprise d'Apolline en anticipation de Noël : une visite tous les 4 du royaume de Mickey. Une journée riche en cris (JE T'AIME ROCKET), en froid (même ultra couverts), en rire (sacrée team) mais aussi en attractions puisque nous avons été chanceux ! Bref, une superbe journée - aussi à refaire - qui témoigne que, même si c'est cucul, vivre Disneyland en amoureux est une belle expérience. ✨",
    location: "Disneyland Paris, France",
    hashtags: "#disneyland #paris #apolline",
    title: "Au pays des merveilles…",
    description: "Une journée aussi froide qu'excellente à Disneyland",
    date: "12-21-2021"
  },
  {
    id: 10,
    imageUrls: ['/static/images/details/10-1.JPG'],
    caption: "Moment redouté par tous les deux, l'heure de l'au revoir a été repoussé au maximum mais ne peut être repoussé davantage. En ce frais matin de février, avant d'aller en cours (pour Lilou, nous devons nous serrer une dernière fois dans les bras avant 6 mois d'une relative séparation. Je crains d'être seul, loin d'elle, de ne pas être présent pour l'épauler dans les moments difficiles qui l'attendent avec les concours. Je sais d'avance que cela va être compliqué de se voir dans les semaines à venir… et on chiale tous les deux. 😭",
    location: "Rennes, France",
    hashtags: "#belgique #snifsnif #tristesse",
    title: "Le départ pour un autre pays",
    description: "Les déchirants et difficiles « au revoir » à l'aube d'un stage en Belgique",
    date: "02-21-2022" 
  },
  {
    id: 11,
    date: "05-25-2022",
    imageUrls: ['/static/images/details/11-1.jpg', '/static/images/details/11-2.jpeg', '/static/images/details/11-3.jpeg', '/static/images/details/11-4.jpg'],
    title: "La surprise pour les résultats",
    description: "Une venue imprévue (ou presque) à l'aube des résultats de concours !",
    location: "Saint Maixent, France",
    caption: "Le week-end tant attendu. Alors que je n'avais pas été là pour tes concours (logique), l'heure des premiers résultats était venue. Le mercredi soir avant ce long week-end, ma chère et tendre attendait ses admissibilités pour la suite (et les oraux), une soirée pleine de stress à laquelle j'avais prétendu ne pas pouvoir me joindre, la faute à trop de monde sur les routes en ce week-end prolongé. Eh oui, il faut dire que venir de Bruxelles, après une journée de travail, passer par Paris pour aller jusqu'à Saint Maixent, c'était un cumul prévisible de problèmes et bouchons en tous genres… mais que voulez-vous, j'aime ma Lilou et je décide donc de lui faire la surprise en négociant avec sa maman, en cachette, une venue dès le mercredi soir. Une cachoterie qui ne plut pas à la principale intéressée, fâchée que je ne fasse pas la route le soir même, m'obligeant à lui révéler la vérité. Superbe surprise, mise en valeur par une comédienne de haut vol (non) lorsqu'elle m'aperçoit arrivant chez elle… Après plus de 7h00 de route sans pause, nous n'avons même pas eu le saint Graal de résultat puisque ceux-ci se sont faits attendre quelques longues heures supplémentaires. PS : c'est d'ailleurs ce week-end là que j'ai officialisé mon premier refus de poste, en Belgique, trop loin de ma Lilou.",
    hashtags: "#concours #surprise"
  },
  {
    id: 12,
    date: "05-06-2022",
    imageUrls: ['/static/images/details/12-1.jpg', '/static/images/details/12-2.jpg', '/static/images/details/12-3.jpg', '/static/images/details/12-4.jpg', '/static/images/details/12-5.jpg', '/static/images/details/12-6.jpg', '/static/images/details/12-7.jpg', '/static/images/details/12-8.jpg', '/static/images/details/12-9.jpg', '/static/images/details/12-10.jpg'],
    title: "Première visite en Belgique",
    description: "Découverte d'un autre pays pour Mademoiselle",
    location: "Bruxelles, Belgique",
    caption: "Après avoir brillamment réussi ses écrits (du moins, c'est ce qu'on apprendre un peu plus tard), Lilou vient me rejoindre un petit week-end dans mon nouveau fief belge pour découvrir ce petit coin dans lequel je dois passer mes 6 mois. N'étant pas le roi du tourisme, loin de là, les visites sont peu nombreuses. On décide donc de visiter un peu le centre de Bruxelles, qui n'a rien de très franchement passionnant… Au programme donc, une séance de cinéma pour Doctor Strange in the Multiverse of Madness après un repas au McDonald's tout pourri de Belgique (on m'avait prévenu qu'il fallait privilégier Quick en Belgique mais je n'ai pas pu lui faire entendre raison), puis la visite du musée de la BD, sympathique mais sans plus, et d'un autre musée histoire de combler le temps avant la séance... Un week-end de retrouvailles, rien qu'entre nous, qui, sans être extraordinaire dans le programme, fait beaucoup de bien au cœur et au moral. Le lendemain, le programme a cependant été plein de surprises ! Nous allions jusqu'à musée de sciences naturelles en ayant un peu tardé… on décide donc de vadrouiller jusqu'à un petit restaurant avant la visite. Lilou y boit une bière belge et découvre les frites locales… puis on visite finalement le Parlement européen en pleine journée européenne. On gratte plein de goodies européens (pourquoi faire ? rien, mais c'est drôle et gratuit), une expérience folle au milieu de l'hémicycle ! Ce fut très cool. ",
    hashtags: "#belgique #parlement"
  },
  {
    id: 13,
    date: "07-08-2022",
    imageUrls: ['/static/images/details/13-1.jpg', '/static/images/details/13-2.JPG', '/static/images/details/13-3.jpg'],
    title: "Deuxième visite en Belgique",
    description: "Mademoiselle revient à la conquête du pays de la frite",
    location: "Bruxelles, Belgique",
    caption: "Un week-end prolongé cette fois (même que j'ai fait genre d'avoir un problème de voiture un des jours pour rester une journée avec Lilou au lieu d'aller en stage…). On a visité - enfin - le musée de sciences naturelles qui était véritablement superbe, on a fait deux cinémas et on a fait un peu de shopping - dont nos représentations Lego ! Un beau moment, bien réconfortant pour nous deux, qui aurait pu être parfait sans l'odeur nauséabonde du studio…",
    hashtags: "#belgique"
  },
  {
    id: 14,
    date: "07-25-2022",
    imageUrls: ['/static/images/details/14-1.JPG', '/static/images/details/14-2.JPG', '/static/images/details/14-3.PNG'],
    title: "Retrouvailles romantiques et révélations finales",
    description: "Après la Belgique, nous nous retrouvons à Saint Malo… pour les résultats du concours",
    location: "Saint Malo, France",
    caption: "Sans grande conviction, je rejoins Lilou, sa maman et sa sœur pour un petit week-end improvisé à Saint Malo, peu après mon retour définitif en France. Je fausse compagnie à mon papa pour filer les rejoindre dans la ville natale de ma chérie. Au programme : crêperie, visite de la ville, plage (malgré un premier jour assez venteux), fruits de mer et un charmant petit hôtel. Le week-end fait plaisir, nos retrouvailles me font tellement chaud au cœur… même si le nuage guette sur nos têtes avec les résultats finaux du concours qui tombent pile ce week-end là. Résultat ? Bordeaux est assuré, Rennes est encore atteignable mais sans aucune certitude… une vie en Nouvelle-Aquitaine se profile à l'horizon.",
    hashtags: "#weekend #resultats #repos #saintmalo"
  },
  {
    id: 15,
    date: "08-02-2022",
    imageUrls: ['/static/images/details/15-1.jpg', '/static/images/details/15-2.jpg'],
    title: "La quête d'un logement",
    description: "Ni une, ni deux, fonçons à Bordeaux pour découvrir notre (potentiel) chez-nous.",
    location: "Bordeaux, France",
    caption: "Après des jours de recherche mouvementés, marqués par de nombreux appels - souvent négatifs -, des annonces fantômes et/ou qui disparaissent en un claquement de doigts, des incertitudes et incompréhensions sur les souhaits de chacun, nous finissons par avoir une shortlist de 2 ou 3 appartements à visiter… visites programmés aux 2 et 3 août. Nous prenons donc la route sans trop réfléchir. Un trajet autant mouvementé, pour plusieurs raisons : si le stress domine déjà, nous ne sommes pas aidés par le monde sur la route qui ne fait que nous retarder (alors que nous étions large), au point même de nous faire faire un détour que l'on sait aujourd'hui ridicule… Petit moment 'drôle' du trajet : Lilou qui appelle très maladroitement l'agence Foncia pour programmer une nouvelle visite d'un appartement fraîchement apparu… ce à quoi elle se fait envoyer bouler. Heureusement, nous arrivons à temps pour la première visite, au milieu d'un groupe de 4 ou 5 autres couples. Le bien nous plaît malgré quelques défauts, ça va être la course à qui sera le premier sur le coup. Heureusement, Lilou a tout prévu et envoie le mail en quelques minutes… Alors que nous visitons le (meilleur) Cultura de Bègles, nous recevons l'appel tant attendu : l'appartement est à nous… ou presque. Ne remuons pas le couteau dans la plaie et retenons plutôt la joie du one-shot et la douce nuit à l'hôtel B&B.",
    hashtags: "#visite #bordeaux #appartement #stress"
  },
  {
    id: 16,
    date: "08-27-2022",
    imageUrls: ['/static/images/details/16-1.JPG', '/static/images/details/16-2.JPG'],
    title: "L'emménagement",
    description: "Un nouveau départ, une nouvelle vie… à deux.",
    location: "Gradignan, France",
    caption: "Le grand jour finit par arriver. Une étape importante de notre vie, peut-être la plus importante de notre vie puisque nous emménageons ensemble après presque deux ans de couple. Le stress est à son paroxysme, nous n'avons même pas vu réellement l'appartement qui nous attend, la route est extrêmement longue (on fait la route en voiture, suivis du camion de mon papa, tandis que ma maman nous rejoint quelques instants plus tard en train et ton papa arrive le lendemain). On prend peu à peu nos marques - dont ma bibliothèque, déjà installée totalement le samedi soir, lol. Rocket est de retour avec nous, un peu stressée par tout ce bruit et ce nouvel environnement mais nous sommes enfin tous les trois. Les sensations sont assez étranges pour nous deux, nous sommes désormais loin de tout et de tout le monde mais une chose est sûre, je suis heureux de commencer cette nouvelle aventure à tes côtés. J'en suis sûr, ce moment est fondateur de notre vie future que j'attends de découvrir et vivre avec impatience.",
    hashtags: "#emmenagement #bordeaux #stress"
  },
  {
    id: 17,
    date: "09-10-2022",
    imageUrls: ['/static/images/details/17-1.jpeg', '/static/images/details/17-2.jpeg'],
    title: "La première réception",
    description: "Peu après notre emménagement, notre famille nous rend visite au complet !",
    location: "Arcachon, France",
    caption: "Un moment de réconfort à l'occasion de mon anniversaire puisque ta famille au complet, ma maman et ma sœur viennent nous visiter un week-end complet. Une première soirée à Biganos puis un petit détour à Arcachon (nos premiers pas à la plage) qui font chaud au cœur. Même que j'ai eu un projecteur !",
    hashtags: "#RIPPetiteTelecommande"
  },
  {
    id: 18,
    date: "10-01-2022",
    imageUrls: ['/static/images/details/18-1.JPG'],
    title: "La première remontée vers le nord",
    description: "Quoi de mieux que d'expérimenter un retour au nord avec le mariage de Sandra",
    location: "Igoville, France (entre autres)",
    caption: "Un mariage chiant, nul et cheap avec un couscous mauvais, une ambiance catastrophique et des mariés à l'ouest… bref, un moment qui ne mériterait pas que l'on s'y attarde si ce week-end ne constituait pas notre première expérimentation des longs trajets en train pour remonter de Bordeaux (et les amendes bien plaisantes…).",
    hashtags: "#mariage #nul"
  },
  {
    id: 19,
    date: "11-26-2022",
    imageUrls: ['/static/images/details/19-1.JPG', '/static/images/details/19-2.JPG', '/static/images/details/19-3.JPG', '/static/images/details/19-4.JPG', '/static/images/details/19-5.jpg', '/static/images/details/19-6.jpg'],
    title: "L'arrivée de notre deuxième bébé",
    description: "Quand Gabin le roux devient notre bébé Goose",
    location: "Gradignan, France",
    caption: "Après l'échec de l'adoption de Tampico (que Lilou embrassait déjà sur les photos, oui oui), nous voilà à faire presque 40 kilomètres un samedi matin en quête d'un petit chaton tout mignon qui, d'après l'association l'ayant recueilli, s'avère très amical des autres chats mais très craintif des humains (ce qui, je vous l'affirme, est totalement faux). Les débuts sont difficiles, assez craintif dans l'appropriation de son nouveau chez lui. Rocket a (très) peur et la cohabitation s'avère très compliquée – si bien que la présence de Goose dans une pièce est impossible pour Rocket. Les nuits se font séparées puisque le petit roux se voit vite diagnostiquer un coryza (même qu'on a accusé Rocket d'avoir frappé Goose à l'œil…). Une période très compliquée où j'ai squatté de nombreuses nuits le canapé en compagnie de ma Rocket, laissant ma douce avec son Goose dans notre lit.",
    hashtags: "#chat #goose #famille"
  },
  {
    id: 20,
    date: "12-17-2022",
    imageUrls: ['/static/images/details/20-1.JPG', '/static/images/details/20-2.jpg', '/static/images/details/20-3.PNG', '/static/images/details/20-4.jpg', '/static/images/details/20-5.jpg'],
    title: "Maman s'en va, Goose en panique",
    description: "Première cohabitation réelle entre Goose et son nouveau papa qui se sont peu apprivoisés",
    location: "Gradignan, France",
    caption: "Petit moment de stress alors que Lilou file à une soirée bretonne, me laissant seul responsable des chats pendant plusieurs jours, alors que Goose ne m'approche toujours pas… Il finit par se forcer mais la cohabitation reste difficile. Reste que je fais une vidéo TikTok de lui chassant sa balle assez amusante. Heureusement, maman est de retour avant le premier gros trajet qui nous attend pour rencontrer toute la famille.",
    hashtags: "#chat #goose"
  },
  {
    id: 21,
    date: "12-24-2022",
    imageUrls: ['/static/images/details/21-1.jpg', '/static/images/details/21-2.jpg', '/static/images/details/21-3.jpg', '/static/images/details/21-4.jpg'],
    title: "Notre premier Noël (réellement) ensemble !",
    description: "Un premier Noël en famille avec nos familles en commun",
    location: "Saint Maixent, France",
    caption: "Peu de choses à dire si ce n'est que ce moment était vraiment superbe. L'alchimie globale est excellente, on a bien évidemment rigolé toute la soirée. J'ai été très gâté de la part de tout le monde (même Mamie Louisette !). Bon, on repassera sur le repas à base d'autruche à l'orange. Sans commentaire.",
    hashtags: "#noel #christmas #famille"
  },
  {
    id: 22,
    date: "12-31-2022",
    imageUrls: ['/static/images/details/22-1.jpg', '/static/images/details/22-2.jpg', '/static/images/details/22-3.jpg', '/static/images/details/22-4.jpg', '/static/images/details/22-5.jpg', '/static/images/details/22-6.jpg', '/static/images/details/22-7.jpg', '/static/images/details/22-8.jpg'],
    title: "Un jour de l'an en amoureux",
    description: "Quand Madame concocte un repas de fin gourmet pour le dernier jour de l'année",
    location: "Gradignan, France",
    caption: "Alors que nous avions dû rentrer à la maison à cause de la reprise du travail (et oui, la vie de salarié impose des vacances réduites), Lilou a décidé de gentiment me tenir compagnie au lieu de remonter à Rennes. Elle a par ailleurs confectionné un petit plat merveilleux, dont des potatoes légendaires, tandis que nous avions acheté des petits desserts au chocolat. Un réveillon en amoureux, au calme, avec nos bébés, que nous avons aussi passé à jouer aux jeux de société, à regarder Tous en scène et à découvrir It takes Two sur Nintendo Switch (acheté pour l'occasion). Bref, la simplicité avec cependant tout notre amour, de quoi faire une superbe soirée. Ah oui, aussi… j'avais fait une blague en m'habillant bien puis en remettant un pyjama dessus après la douche… Lilou n'a rien vu ni dit, superbe « blague ».",
    hashtags: "#nouvelan #amoureux"
  },
  {
    id: 23,
    date: "04-08-2023",
    imageUrls: ['/static/images/details/23-1.jpg', '/static/images/details/23-2.JPG'],
    title: "Le début d'un double stage",
    description: "Quand Lilou nous quitte sur un total de 6 semaines (en deux fois)",
    location: "Gradignan, France",
    caption: "Un moment où je me retrouve confronté à la solitude une nouvelle fois après une longue période de vie commune. Une première période plutôt simple moralement, même si les chats participent à la fatigue (et sont en plein dans leur période d'enfer). La deuxième est plus compliquée – en juillet – avec le démarrage de mon nouveau poste sur Toulouse qui demande énormément de temps, cause beaucoup de stress et ennuie beaucoup nos deux bébés. Sans soutien, c'est un peu difficile mais on tient bon. Madame, elle, galère bien dans son champ au milieu des petits cochons.",
    hashtags: "#stage #ferme"
  },
  {
    id: 24,
    date: "06-10-2023",
    imageUrls: ['/static/images/details/24-1.jpg', '/static/images/details/24-2.jpg', '/static/images/details/24-3.jpg', '/static/images/details/24-4.jpg'],
    title: "Des jeux et du sable",
    description: "Un petit groupe se confirme avec les amies de Lilou",
    location: "Lacanau, France",
    caption: "On retiendra cette date parmi d'autres pour mentionner les agréables moments que l'on passe aussi en plus gros comité, avec les amies d'école de Lilou. D'abord en soirées jeux/BChef à la maison (au grand damn des voisins), puis en week-end plage (presque toutes les semaines de mai et juin) où je m'impose comme le meilleur comique de ma génération tandis que Lilou devient ma partenaire de crime dans l'utilisation de tous les gadgets – dont el famoso pistolero. L'ambiance est géniale, on rigole tout le temps et j'adore passer du temps avec Lilou au milieu de ses amies. On construit un petit groupe très sympathique qui nous ressource, nous sort et nous fait du bien (même si on a parfois l'impression d'être les darons du groupe).",
    hashtags: "#plage #jeux #amis"
  },
  {
    id: 25,
    date: "08-14-2023",
    imageUrls: ['/static/images/details/25-1.jpg', '/static/images/details/25-2.jpg'],
    title: "Kéni à la maison",
    description: "Profitant des vacances communes à tout le monde, on reçoit la visite d'une intrue à la maison !",
    location: "Gradignan, France",
    caption: "Alors que ma semaine de vacances arrive à son terme après une semaine (enfin, je mens, il me reste 1 semaine), nous sommes de retour à la maison avec Lilou, les chats et... Kénisée ! L'occasion de passer une petite semaine tranquille à la maison où nous avons pu faire énormément d'activité : outre notre première visite à la piscine de la résidence, nous sommes allés trois fois à la plage, nous avons visité le centre-ville de Bordeaux (pour faire des amplettes), un petit ciné pour voir un film nul, un action game absolument incroyable duquel nous sommes ressortis totalement lessivés et bien évidemment une soirée nocturne d'horreur dans un labyrinthe de maïs dans lequel nous avons autant rigolé que flippé. Cette semaine a aussi été l'occasion de voir mon papa avec lequel nous avons fait quelques-unes de ces activités : bref, une superbe semaine de vacances qui nous a permis de profiter de notre petit coin bordelais sans trop se ruiner et d'avoir accès à des activités assez enrichissantes ! Bon, par contre, Kéni ne fait pas la vaisselle...",
    hashtags: "#vacances"
  },
  {
    id: 26,
    date: "09-17-2023",
    imageUrls: ['/static/images/details/26-1.jpg', '/static/images/details/26-2.jpg', '/static/images/details/26-3.jpg', '/static/images/details/26-4.jpg'],
    title: "Deux fins connaisseurs du rugby",
    description: "Quand Capgemini nous offre des places aux premières loges d'un match de la Coupe du Monde de rugby",
    location: "Bordeaux, France",
    caption: "Grand évènement mais peu de choses à dire, nous avons pu expérimenter tous les deux un match de Coupe du Monde de rugby, dans le stade de Bordeaux. Une expérience assez unique, dans une superbe ambiance, avec un match plein d'essais (enfin, surtout pour l'Afrique du Sud), un temps de merde et pas mal de transport mais… ça reste un moment sympathique vécu à deux.",
    hashtags: "#rugby #amoureux"
  },
  {
    id: 27,
    date: "11-25-2023",
    imageUrls: ['/static/images/details/27-1.jpg', '/static/images/details/27-2.jpg', '/static/images/details/27-3.jpg'],
    title: "Trois années et des papiers",
    description: "Un petit restaurant en amoureux qui a failli nous faire perdre la frite...",
    location: "Villenave-d'Ornon, France",
    caption: "À l'occasion de nos trois ans, nous nous rendons au restaurant La Côte et l'Arête, un endroit plus sympathique avec une carte assez riche... de laquelle nous avons tous les deux retenu uniquement le burger. Un repas copieux (avec un supplément frites très très copieux) duquel nous sommes ressortis comblés - et encore plus amoureux, en tout cas... L'histoire aurait pu s'arrêter là si Mademoiselle n'avait pas remarqué 3 jours plus tard (le lundi, donc) que son porte-feuille avait totalement disparu. L'occasion d'appeler le cinéma, le restaurant et l'UGC avant de finalement se déplacer au restaurant le lundi soir (en frôlant un accident) pour retrouver le fameux Graal !",
    hashtags: "#restaurant #amoureux"
  },
  {
    id: 28,
    date: "12-02-2023",
    imageUrls: ['/static/images/details/28-1.jpg', '/static/images/details/28-2.jpg', '/static/images/details/28-3.jpg', '/static/images/details/28-4.jpg', '/static/images/details/28-5.JPG', '/static/images/details/28-6.jpg', '/static/images/details/28-7.jpg', '/static/images/details/28-8.jpg', '/static/images/details/28-9.jpg'],
    title: "Un discours en grandes pompes",
    description: "Un nouvel aller-retour express pour un mariage qui nous a fait bien rire (ou stresser?)",
    location: "Thue et Mue, France",
    caption: "Nouveau périple vers la Normandie, pour un autre mariage ! Ce mariage, bien plus classe, a été une vraie source de stress pour moi puisque j'ai dû faire un discours devant près de 200 personnes. Un discours que j'ai préparé avec beaucoup de soin, de stress et d'angoisse, mais qui a été très bien reçu par les invités et pour lequel j'ai reçu un soutien important de Lilou. Le mariage en lui-même était très beau, avec une ambiance très chaleureuse et une décoration très classe. On a bien rigolé, on a bien mangé (non, je rigole, je me suis fait engueuler par Lilou parce que je ne mangeais rien), on a bien bu, on a bien dansé, on a bien dormi (dans un dortoir plutôt stylé... mais pas que). Bref, j'adore plus que tout ces moments en compagnie de ma chère et tendre auprès de ma famille !",
    hashtags: "#mariage #famille"
  },
];

export default arrayObjets;