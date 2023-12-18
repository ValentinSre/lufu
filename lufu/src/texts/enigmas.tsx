const enigmas: any = [
    {
      picture: "/static/images/details/1.JPG",
      title: "Repas des condamnés",
      question: "Commençons simplement, avec une question des plus futiles mais néanmoins fondatrice de notre relation… Quel est le premier plat que nous avons mangé ensemble ?",
      answer: "pizza",
      explanation: "Une pizza ! Un de nos péchés mignons, je me souviens encore avoir été très gêné durant tout le repas. Déjà sous ton charme, je ne savais pas vraiment quoi te dire et je pense avoir passé plus de temps sur mon téléphone qu'à être pleinement dans la discussion avec toi… autant dire que je ne sais pas comment j'ai pu marquer des points. On continue ?"
    },
    {
      picture: "/static/images/details/2.JPG",
      title: "Photo des kikoos",
      question: "Remonte un peu dans ta galerie (ou dans tes souvenirs) pour retrouver que représente l'emoji figure sur notre première photo tous les deux ?",
      answer: "éclair",
      explanation: "Un filtre nul pour symboliser le coup de foudre que j'ai à ton égard et que je ressens encore chaque fois que je croise ton regard. Une photo qui s'est d'ailleurs trop faite attendre à mon goût. Allez, au suivant."
    },
    {
      picture: "/static/images/details/3.jpg",
      title: "Ke-ski-spass ?!",
      question: "En guise de souvenir de ce beau périple dans les Alpes aux côtés de ta famille, quoi de mieux que de retrouver l'authenticité du papier ? Une énigme qui risque de te mettre… dos au mur.",
      answer: "punisher",
      explanation: "Ces bons moments méritaient d'être cités dans ce périple énigmatique. Si tu as trouvé tout cela, bien joué, tu as bien réfléchi. Peut être que tu ne liras jamais cette phrase… 😭 Pas de temps à perdre, tu en as déjà perdu assez, question suivante."
    },
    {
      picture: "/static/images/details/4.JPG",
      title: "Lannionais emprisonnés",
      question: "Faisons appel à tes méninges. À de multiples reprises, nous avons eu l(occasion de vivre ensemble sur plusieurs jours voire semaines grâce à mon emploi du temps parfois léger ou à des circonstances particulières… mais te rappellerais-tu combien de jours avons-nous vécu à Lannion ensemble durant la période de confinement d'avril 2021 ?",
      answer: "29",
      explanation: "J'ai été gentil, j'aurais pu mettre 26 parce que tu t'es échappée au bout de 20 jours - et ce, pendant 3 jours - pour aller faire la fête (et fumer 😱) chez Jade… voyons où tout cela vous a mené aujourd'hui. Nous, en tout cas, cela nous mène à la question suivante."
    },
    {
      picture: "/static/images/details/5.JPG",
      title: "On joue aux billes ?",
      question: "Tu l'aimes autant que tu le détestes, sa couleur est aussi aujourd'hui réconfortante qu'agaçante mais il s'agit néanmoins de notre premier achat en commun (qui pourrait être indirectement lié à notre second a-chat). Quel symbole est inscrit sur son étiquette ?",
      answer: "étoile",
      explanation: "Notre premier achat commun, pour redonner un peu de vie à ce salon que tu trouvais si triste à Lannion. Un achat que l'on regrette ou pas, mais qui sait encore aujourd'hui ravir notre petit bébé Goose… c'est déjà ça."
    },
    {
      picture: "/static/images/details/6.jpg",
      title: "Cache-cache tag",
      question: "Dans une belle et douce région française, où nous ramions tout à notre aise, une semaine de notre vie telle une parenthèse, représentée aujourd'hui par un simple mot-dièse.",
      answer: "concombre",
      explanation: "Un peu moins difficile mais (je pense qu') il fallait réfléchir ! Pourquoi concombre ? Comment puis-je oublier cette salade de pâtes-concombre massive que nous avons trimballée dans notre gros tonneau au milieu du kayak… à la fois bon et dégoûtant, ahaha."
    },
    {
      picture: "/static/images/details/7.JPG",
      title: "L'antre soi",
      question: "Les années passent à tes côtés, mon amour pour toi ne fait que croître mais… qu'en est-il de ta mémoire ? Alors que nous venons de fêter nos trois ans de relation, te souviens du nom du restaurant où nous avons dîné pour notre premier anniversaire ? (sans article)",
      answer: "taverne",
      explanation: "Et oui, le restaurant La Taverne en centre de Rennes. Nous étions beaux, surtout toi, ce fut une vraie fierté d'aller dîner comme des grands dans ce restaurant plutôt chic et copieux. J'adore passer de telles soirées avec toi. Bon, même si je me souviens encore aujourd'hui à quel point ce fut un enfer, pendant des heures (littéralement), pour trancher quel restaurant nous choisirions pour ce soir-là."
    },
    {
      picture: "/static/images/details/8.JPG",
      title: "Six pieds sous terre",
      question: "Avant que toute notre vie soit chamboulée, réfléchis bien (la réponse est évidente quand on y réfléchit), qui est l'ennemi numéro 1 de Rocket - l'ennemi contre lequel ses nombreuses bastons nous ont gâché quelques nuits ?",
      answer: "auguste",
      explanation: "Combien de fois avons-nous utilisé ton vieil aspirateur brûlant - qui n'aspirait rien - pour ramasser les kilos de terre que Rocket renversait la nuit ?! Alors qu'elle ne creuse même pas sa litière, Mademoiselle décidait de chercher un trésor presque toutes les nuits dans la terre de ce pauvre Auguste. Un ennemi nocturne qu'elle maîtrisait à merveille à l'époque… les choses ont changé. On poursuit ?"
    },
    {
      picture: "/static/images/details/9.jpeg",
      title: "La fame avec ma femme",
      question: "Te souviens-tu du nom du compte TikTok que nous avions convenu d'ouvrir et tenir ensemble lorsque j'étais en Belgique ?",
      answer: "in my web",
      explanation: "Un compte - pas totalement sorti de nulle part - où nous voulions parler de tout et de rien, pour lequel j'avais même créé un logo moche mais chiant à réaliser, selon tes propres souhaits et critères."
    },
    {
      picture: "/static/images/details/10.JPG",
      title: "Sortyr de la rue",
      question: "Sur les lieux de notre rencontre, Une nouvelle Histoire s'est ouverte le jour où notre famille s'est agrandie. Nous avons accueilli un nouveau petit être, tout roux, et nous regardons désormais toujours plus haut. #PèreFourras",
      answer: "sommeil",
      explanation: "Je crois que ce fut l'énigme la plus difficile. Je doute même presque que tu sois arrivée jusque là (sans aide). Mais comment ne pas revenir sur l'arrivée de ce petit Goose lorsque l'on parle de notre histoire. Cette petite (fichue) boule d'énergie (sans fin) est chaque jour une belle aventure de notre Aventure. Un être vivant nous rendant tout l'amour qu'on lui porte et que l'on aime détester. Malgré son caractère de chien débile, je suis heureux que nous lui ayons ouvert notre porte (pour le sortir de la rue) et que notre famille soit passée à 4. Après… je fus obligé de choisir ce mot-clé pour cette énigme finale !"
    },
  ];

export default enigmas;