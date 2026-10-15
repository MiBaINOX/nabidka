const allJorosReferences = [
  {
    "id": 1,
    "title": "Plynová přípojka a dostavba venkovních skladů",
    "investor": "VŠB – Technická univerzita Ostrava",
    "category": "infrastructure",
    "category_label": "Inženýrské sítě & Plyn",
    "scope": "Kompletní plynová přípojka STL, zemní práce, venkovní skladové objekty a napojení technické infrastruktury areálu univerzity.",
    "year": "Dokončeno",
    "img": "images/ref_04.jpg"
  },
  {
    "id": 2,
    "title": "Rekonstrukce správní budovy a sanace chladících věží",
    "investor": "Chladící věže Praha a.s.",
    "category": "industry",
    "category_label": "Průmyslové objekty",
    "scope": "Opravy hydroizolací, betonářské a zednické práce, montážní tesařské a zámečnické konstrukce na průmyslových věžích.",
    "year": "Dokončeno",
    "img": "images/ref_03.jpg"
  },
  {
    "id": 3,
    "title": "Výstavba kotelen a plynofikace poboček České pošty",
    "investor": "Česká pošta, s.p. (Hlučín, Příbor, Komárov, Opava)",
    "category": "public",
    "category_label": "Veřejná správa",
    "scope": "Komplexní plynofikace, rekonstrukce kotelen, MaR (měření a regulace), rozvody ÚT, stavba a vložkování nových komínových těles.",
    "year": "Dokončeno",
    "img": "images/ref_19.jpg"
  },
  {
    "id": 4,
    "title": "Vybudování Regionálního informačního centra",
    "investor": "Muzeum Těšínska / Český Těšín",
    "category": "public",
    "category_label": "Veřejná správa & Kultura",
    "scope": "Kompletní stavební rekonstrukce historických prostor muzea, nová elektroinstalace, podlahy a reprezentativní prostory centra.",
    "year": "Dokončeno",
    "img": "images/ref_07.jpg"
  },
  {
    "id": 5,
    "title": "Oprava fasády a výměna oken lůžkové části",
    "investor": "Nemocnice s poliklinikou a LDN Orlová",
    "category": "public",
    "category_label": "Zdravotnictví",
    "scope": "Kompletní výměna okenních výplní, sanace obvodového pláště, zateplení a speciální nástřik odolné fasády.",
    "year": "Dokončeno",
    "img": "images/ref_08.jpg"
  },
  {
    "id": 6,
    "title": "Generální výměny rozvodů ZTI a rekonstrukce bytových domů",
    "investor": "Statutární město Ostrava – Městský obvod Ostrava - Jih",
    "category": "residential",
    "category_label": "Bytový fond & BD",
    "scope": "Generální výměny rozvodů vody a plynu, opravy balkónů, zateplování obvodových plášťů a komplexní údržba bytového fondu.",
    "year": "Dlouhodobá spolupráce",
    "img": "images/ref_06.jpg"
  },
  {
    "id": 7,
    "title": "Stavební rekonstrukce budovy radnice",
    "investor": "Městský obvod Ostrava - Pustkovec",
    "category": "public",
    "category_label": "Veřejná správa",
    "scope": "Částečná rekonstrukce administrativní budovy úřadu, modernizace interiérů, podlahové konstrukce a elektroinstalace.",
    "year": "Dokončeno",
    "img": "images/ref_12.jpg"
  },
  {
    "id": 8,
    "title": "Rekonstrukce hotelového domu a gastro provozu",
    "investor": "Hoteltrans s.r.o. Ostrava",
    "category": "industry",
    "category_label": "Komerční objekty",
    "scope": "Modernizace recepce, restaurace, kompletní rozvody vody a ústředního topení, hydroizolace plochých střech a zateplení fasády.",
    "year": "Dokončeno",
    "img": "images/ref_14.jpg"
  },
  {
    "id": 9,
    "title": "Výstavba kotelny a infrastruktury obchodního centra",
    "investor": "Obchodní centrum Bohumín – Těgo",
    "category": "industry",
    "category_label": "Komerční objekty",
    "scope": "Výstavba centrální plynové kotelny, kompletní rozvody plynu, ÚT, rozvody vody a napojení kanalizační přípojky.",
    "year": "Dokončeno",
    "img": "images/ref_16.jpg"
  },
  {
    "id": 10,
    "title": "Přístavba dílen a zpevněné plochy areálu",
    "investor": "Porexi s.r.o. Ostrava",
    "category": "industry",
    "category_label": "Průmyslové objekty",
    "scope": "Rekonstrukce správního objektu, přístavba výrobních a dílenských prostor, vybudování vnitrofiremních komunikací a oplocení.",
    "year": "Dokončeno",
    "img": "images/ref_17.jpg"
  },
  {
    "id": 11,
    "title": "Půdní vestavby a odstraňování povodňových škod",
    "investor": "Městský obvod Slezská Ostrava",
    "category": "residential",
    "category_label": "Bytový fond & BD",
    "scope": "Generální opravy bytových domů, nové půdní vestavby, sanace vlhkého zdiva, hydroizolace a rekonstrukce střešních plášťů.",
    "year": "Dokončeno",
    "img": "images/ref_18.jpg"
  },
  {
    "id": 12,
    "title": "Generální rekonstrukce ležatých a svislých rozvodů",
    "investor": "RPG Služby, s.r.o. Ostrava",
    "category": "residential",
    "category_label": "Bytový fond & BD",
    "scope": "Výměny stoupaček a ležaté kanalizace ve velkých bytových komplexech, bezprašné technologie a koordinace s nájemníky.",
    "year": "Dlouhodobá realizace",
    "img": "images/ref_21.jpg"
  },
  {
    "id": 13,
    "title": "Opravy podlah a hydroizolace objektů",
    "investor": "Statutární město Ostrava",
    "category": "public",
    "category_label": "Veřejná správa",
    "scope": "Průmyslové podlahy, sanace betonových konstrukcí, hydroizolace spodních staveb a rekonstrukce plochých střech.",
    "year": "Dokončeno",
    "img": "images/ref_22.jpg"
  },
  {
    "id": 14,
    "title": "Revitalizace a sanace předsazených balkónů",
    "investor": "Bytová družstva Ostrava a Havířov",
    "category": "residential",
    "category_label": "Bytový fond & BD",
    "scope": "Statické zajištění konzol, nové hydroizolační souvrství, protiskluzové nátěry, výměna zábradlí a okapových plechů.",
    "year": "Více než 300 balkónů",
    "img": "images/ref_23.jpg"
  },
  {
    "id": 15,
    "title": "Rekonstrukce prodejních a administrativních prostor",
    "investor": "QT technik s.r.o.",
    "category": "industry",
    "category_label": "Komerční objekty",
    "scope": "Kompletní stavební úpravy prodejny, sádrokartonové podhledy, nová elektroinstalace, sanitární zázemí a vytápění.",
    "year": "Dokončeno",
    "img": "images/ref_10.jpg"
  }
];
