const arrayObjets = [
  {
    id: 1,
    imageUrls: ['/static/images/details/1-1.JPG', '/static/images/details/1-2.JPG'],
    caption: "Alors que je stressais à la veille de mon premier passage du permis tout en \"regardant\" le film Fast & Furious – un examen foiré – une jeune demoiselle curieuse apparaît dans mes MP Instagram pour me questionner sur qui je suis. La raison ? Je commente les publications d'une relation commune (dont on taira le nom) et cela attise sa curiosité. Une relation étrange se construit alors peu à peu, purement platonique mais sincère, nous poussant à nous confier l'un à l'autre sans crainte du jugement et ce, malgré la distance et la différence d'âge. Je l'aide même à choisir parmi ses nombreux prétendants amoureux, c'est dire ! Affaire à suivre…",
    location: "Instagram",
    hashtags: "#rencontre #whatif #waitandsee",
    title: "Premier contact",
    description: "Quand une curieuse jeune fille glisse dans les messages privés d'un gars plus âgé.",
    date: "04-10-2017"
  },
  {
    id: 2,
    imageUrls: ['/static/images/details/2-1.jpg'],
    caption: "En plein confinement, c'est empreint d'ennui que je constate – avec beaucoup d'étonnement – que celle qui m'avait bloqué 2 ans auparavant réapparaît soudainement dans cette même messagerie Instagram où nous nous étions rencontrés il y a presque 3 ans jour pour jour. Celle-ci fait mine (du moins, c'est ce que je pensais) de ne pas se rappeler qui je suis. Il faut dire que je suis ravi de la retrouver, étant resté sur une incompréhension certaine à l'été 2018 suite à son blocage contre lequel j'ai essayé de lutter… Un nouveau départ assez inégal, avec des périodes de creux sans aucune nouvelle (chacun a désormais une vie bien différente) mais qui marque le départ d'une aventure insoupçonnée qui commencera quelques mois plus tard…",
    location: "Instagram",
    hashtags: "#rencontrebis #liloufaitdulilou",
    title: "Le comeback",
    description: "Quand cette même jeune fille perd la boule et glisse de nouveau dans ses messages privés.",
    date: "04-08-2020"
  },
  {
    id: 3,
    imageUrls: ['/static/images/details/3-1.JPEG'],
    caption: "Profitant de l'opportunité de notre proximité géographique (ou presque) et souhaitant franchement me changer les idées, je propose de laisser pour la première fois mon petit bébé Rocket pour aller à la rencontre de Lilou. Un périple contre vents et marées (enfin, plutôt vents et pluie) que je mène à bien, motivé par l'envie de voir celle que je n'arrive pas encore à cerner correctement. La rencontre est assez folle, puisque je ressens une réelle attirance sans vouloir me l'avouer tout de suite, pensant toute réciprocité impossible. Nous passons la journée ensemble, à déjeuner au restaurant alors que je déteste, à faire ses courses (l'avantage de ma voiture commence ici, lol) pour un maximum de fun, avant de passer la journée chez elle… à faire le con – à base de placage au sol, photomontage ou enfermement sur son \"balcon\". Une journée simple mais efficace où son rire m'aura fait oublier toute tristesse, au point de me rappeler encore aujourd'hui à quel endroit précis de la route retour je me suis rendu compte que cette \"amie\" me plaisait plus que bien.",
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
    caption: "À peine intégré à la famille, voilà que je profite sans crier gare à des vacances tous frais payés à la montagne. Une première pour moi avec, (mal)heureusement, pas de ski possible en raison du blocage des remontées. Les vacances sont merveilleuses, à la fois reposantes et épuisantes, je profite d'une ambiance superbe – de laquelle je suis aussi tombé sous le charme – au sein de cette petite famille Thiboult qui m'accueille à bras ouverts. Je suis heureux de passer ces moments magiques avec ma chérie, avec énormément de rire et un peu de froid. L'expérience fut superbe et me laisse de nombreux souvenirs (à l'instar d'une potentielle excursion de la mort à la recherche d'un refuge) 💀 Heureusement, Rocket est restée chez son papi et a fait de belles bêtises.",
    location: "Bonneval-sur-Arc, France",
    hashtags: "#vacances #ski #famille",
    title: "Les pas bronzés font du ski",
    description: "Mes premiers pas à la montagne en hiver, bien accompagné !",
    date: "02-20-2021"
  },
  {
    id: 8,
    imageUrls: ['/static/images/details/8-1.JPG', '/static/images/details/8-2.JPG', '/static/images/details/8-3.JPG', '/static/images/details/8-4.JPG', '/static/images/details/8-5.JPG'],
    caption: "Pour la première fois de ma vie, je pars en vacances sans mes parents et avec l'élue de mon cœur. Malgré un stress permanent (mais bon, après tout, quand ne suis-je pas stressé) à l'idée de faire autant de route, seuls, vers un lieu de villégiature globalement rudimentaire… mais très vite, notre tente est montée et notre petit nid d'amour prend forme. On s'y sent bien mais le cœur reste à la découverte du monde qui nous entoure, ou presque. Une petite randonnée avortée – avec des tenues absolument inadaptées – nous pousse ensuite à privilégier les expériences aquatiques : rivière, piscine (un peu) et kayak rythment donc nos journées avec pas mal de lecture et d'élevage de têtards (qui faisait quoi ?!). L'expérience a été superbe de bout en bout et me rend vraiment désireux de réitérer l'expérience… ❤️☀️",
    location: "Sainte-Enimie, France",
    hashtags: "#vacances #camping",
    title: "Les premières vacances",
    description: "Un petit moment rien qu'à deux dans une tente pour profiter de nos vacances",
    date: "08-07-2021"
  },
  {
    id: 9,
    imageUrls: ['/static/images/details/9-1.JPG', '/static/images/details/9-2.JPG', '/static/images/details/9-3.JPG', '/static/images/details/9-4.JPG'],
    caption: "Petit cadeau presque surprise d'Apolline en anticipation de Noël : une visite tous les 4 du royaume de Mickey. Une journée riche en cris (JE T'AIME ROCKET), en froid (même ultra couverts), en rire (sacrée team) mais aussi en attractions puisque nous avons été chanceux ! Bref, une superbe journée – aussi à refaire – qui témoigne que, même si c'est cucul, vivre Disneyland en amoureux est une belle expérience. ✨",
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
];

export default arrayObjets;