const catalogData = [
  {
    id: "pkd-standard-iso",
    title: "PKD standardizované ISO destičky",
    perex: "Vysoce přesné břitové destičky s polykrystalickým diamantem vpájeným do karbidového tělesa pro obrábění neželezných kovů a kompozitů.",
    category: "pkd",
    image: "assets/pkd.jpg",
    specs: {
      "Typ nástroje": "Vyměnitelná břitová destička dle ISO norem",
      "Řezný materiál": "Syntetický polykrystalický diamant (slinovaný při 1700 °C)",
      "Geometrie ISO": "CCGW, DCGW, VCGW, TCGW, SCGW, RCGW",
      "Zrnitost": "Jemnozrnná (vysoká kvalita povrchu) / Hrubozrnná (životnost)",
      "Obrobitelné materiály": "Slitiny hliníku (Al-Si), měď, mosaz, bronz, plasty, CFRP/GFRP",
      "Technologie výroby": "Dělení drátovým řezáním EDM, vakuové pájení"
    },
    features: [
      "Mnohonásobně delší životnost ostří ve srovnání s tvrdokovem",
      "Zkrácení výrobních časů díky vysokým řezným rychlostem",
      "Vynikající odvod tepla a minimalizace nárůstků na břitu",
      "Snížení výrobních nákladů díky segmentovému pájení do karbidu"
    ]
  },
  {
    id: "pkd-specialni-tvary",
    title: "Speciální tvarové PKD nástroje na zakázku",
    perex: "Zakázková výroba speciálních tvarů PKD břitů a profilových destiček dle individuální výkresové dokumentace zákazníka.",
    category: "pkd",
    image: "assets/1.jpg",
    specs: {
      "Provedení": "Speciální tvary a rotační nástroje dle výkresu",
      "Řezný břit": "PKD segmenty pájené vysokofrekvenčně ve vakuu",
      "Tolerance břitu": "± 0,002 mm (ultra-přesný profil)",
      "Úprava ostří": "Broušený břit, laserové opracování, mikrorádius",
      "Použití": "Automobilový, letecký a optický průmysl, výroba forem",
      "Testování": "Možnost bezplatného otestování přímo ve vašem provozu"
    },
    features: [
      "Řešení komplexních operací jediným sdruženým nástrojem",
      "Zkrácené dodací termíny pro speciální geometrie",
      "Konsignační sklad pro sériovou výrobu",
      "Individuální technické poradenství a optimalizace řezných parametrů"
    ]
  },
  {
    id: "cbn-solid",
    title: "Masivní Solid CBN destičky pro těžké hrubování",
    perex: "Celistvé břitové destičky z plného kubického nitridu boru bez karbidového nosiče pro maximální hloubku řezu a oboustranné použití.",
    category: "cbn",
    image: "assets/cbn.jpg",
    specs: {
      "Konstrukce": "Solid CBN (celistvý masivní materiál)",
      "Využití břitů": "Oboustranné destičky (dvojnásobný počet břitů)",
      "Tvrdost CBN": "cca 4500 HV (druhý nejtvrdší materiál po diamantu)",
      "Obrobitelné materiály": "Kalené oceli 45-68 HRC, rychlořezné oceli HSS, tvrdá litina",
      "Úprava ostří": "Ochranná fazetka T-land chránící břit před vyštípnutím",
      "Řezné podmínky": "Vhodné pro velký úběr materiálu a přerušovaný řez"
    },
    features: [
      "Vynikající chemická stabilita při vysokých teplotách až do 1200 °C",
      "Schopnost obrábět kalené oceli za sucha bez chlazení",
      "Masivní konstrukce odolná proti dynamickým rázům a vibracím",
      "Úspora nákladů díky využití obou stran destičky"
    ]
  },
  {
    id: "cbn-karbid-nosic",
    title: "CBN destičky na nosné karbidové vrstvě",
    perex: "Vysoce hospodárné CBN břitové destičky s jemným CBN hrotem slinovaným nebo vpájeným na tvrdokovovém substrátu pro dokončovací operace.",
    category: "cbn",
    image: "assets/2.jpg",
    specs: {
      "Konstrukce": "CBN segment slinovaný/vpájený na karbidovém těle",
      "ISO tvary": "CNGA, WNGA, DNGA, TNGA, VNGA, SNGA",
      "Hloubka řezu ap": "0,05 až 0,5 mm (přesné dokončování a jemný řez)",
      "Dosažitelná drsnost": "Ra 0,2 až 0,4 µm (nahrazuje broušení)",
      "Podíl CBN": "50 % až 90 % dle typu matrice a pojiva",
      "Aplikace": "Dokončovací soustružení ložiskových kroužků, hřídelí a ozubení"
    },
    features: [
      "Výměna operace broušení za produktivní tvrdé soustružení",
      "Extrémní rozměrová stálost během dlouhých sérií",
      "Menší hloubka řezu s minimálním řezným odporem",
      "Výrazné snížení jednotkových nákladů na obrobek"
    ]
  },
  {
    id: "karbidove-vbd",
    title: "Karbidové vyměnitelné břitové destičky (VBD)",
    perex: "Slinuté karbidové destičky vyráběné technologií práškové metalurgie pro univerzální soustružení a frézování kovových materiálů.",
    category: "karbid",
    image: "assets/3.jpg",
    specs: {
      "Materiál substrátu": "WC-Co (slinutý karbid wolframu s kobaltem)",
      "Slinovací teplota": "cca 1600 °C s řízeným smrštěním",
      "Tvary dle ISO": "Standardní geometrie pro soustružení a frézování",
      "Povlakování": "PVD / CVD vícesložkové povlaky (TiAlN, AlCrN, TiCN)",
      "Zrnitost substrátu": "Submikronní a mikronové zrno pro optimální houževnatost",
      "Rozsah obrábění": "Oceli P, nerez M, litiny K, neželezné kovy N, superslitiny S"
    },
    features: [
      "Široké spektrum tříd tvrdokovu od houževnatých po otěruvzdorné",
      "Přesně broušené geometrie a efektivní utvařeče třísky",
      "Zvýšená tepelná odolnost a odolnost proti oxidaci břitu",
      "Možnost vyzkoušení testovací sady přímo ve výrobním provozu"
    ]
  },
  {
    id: "karbidove-valce",
    title: "Karbidové válce pro válcování za studena i tepla",
    perex: "Vysoce namáhané válce a průvlaky ze slinutého karbidu dodávané jako polotovary i finální výrobky včetně kalibrování a drážkování.",
    category: "polotovary",
    image: "assets/4.jpg",
    specs: {
      "Typ produktu": "Válce pro válcovací tratě drátů, profilů a plechů",
      "Zpracování": "Válcování za tepla i za studena",
      "Dodávaný stav": "Lisovaný + sintrovaný polotovar nebo hotový díl dle výkresu",
      "Úpravy": "Přesné broušení, drážkování, popis a značení",
      "Hlavní odvětví": "Hutnictví, drátovny, tažírny oceli a neželezných kovů",
      "Servis": "Repase a přebrušování opotřebených karbidových válců"
    },
    features: [
      "Mimořádná odolnost proti tlakovému otěru a únavovému vyštipování",
      "Desetinásobná životnost oproti nástrojovým kaleným ocelím",
      "Zajištění vysoké povrchové jakosti a rozměrové tolerance válcovaného drátu",
      "Kompletní dodávky na klíč včetně hutních atestů"
    ]
  },
  {
    id: "karbidove-polotovary",
    title: "Karbidová vodítka, těsnění, razníky a opěrné čepy",
    perex: "Přesné strojní součásti a polotovary z tvrdokovů pro náročné průmyslové aplikace, lisovny a výrobu střižných nástrojů.",
    category: "polotovary",
    image: "assets/5.jpg",
    specs: {
      "Sortiment": "Těsnicí kroužky, střižníky, razníky, vodítka, opěrné čepy",
      "Metalurgie": "Jemnozrnné slinuté karbidy s volitelným obsahem kobaltu",
      "Oblasti použití": "Stavebnictví, obalový průmysl (hliníkové obaly), nástrojárny",
      "Zpracování": "Broušení na přesné rozměry dle výkresové dokumentace",
      "Polotovary": "Tyče a předlisky pro výrobu monolitních fréz a vrtáků",
      "Poradenství": "Výběr optimálního typu karbidu pro konkrétní provozní namáhání"
    },
    features: [
      "Extrémní tvrdost a odolnost vůči abrazi, kavitaci a chemické korozi",
      "Přesná tolerance lícování a leštěné funkční plochy",
      "Možnost dodávky polotovarů i finálně obrobených komponent",
      "Dlouhá provozní spolehlivost v nepřetržitých výrobních linkách"
    ]
  },
  {
    id: "cvd-vyzkum-vyvoj",
    title: "CVD technologie – Výzkum syntetického diamantu",
    perex: "Výzkumné centrum v rámci projektu CZ.01.1.02/0.0/0.0/21_375/0027025 zaměřené na syntézu monokrystalického a polykrystalického diamantu.",
    category: "vyzkum",
    image: "assets/10.jpg",
    specs: {
      "Technologický proces": "CVD (Chemical Vapor Deposition)",
      "Výzkumné zaměření": "Růst monokrystalického a polykrystalického diamantu",
      "Projekt EU": "CZ.01.1.02/0.0/0.0/21_375/0027025",
      "Aplikace": "Špičkové řezné nástroje, polovodiče, optická okna, tepelné rozvaděče",
      "Spolupráce": "Vývoj nových nanokrystalických a diamantových povrchů",
      "Zázemí": "Špičkové laboratorní a vakuové technologické vybavení"
    },
    features: [
      "Vývoj diamantových vrstev nové generace s nulovou porozitou",
      "Přímá depozice diamantových nanovrstev na komplexní tvary nástrojů",
      "Průlomová tepelná vodivost a minimální koeficient tření",
      "Podpora v rámci Operačního programu OP PIK"
    ]
  }
];

const translations = {
  cz: {
    topbar_tag: "Specialista na PKD, CBN a karbidové destičky • Založeno 2014",
    topbar_cert: "Výzkumné CVD centrum EU",
    nav_home: "Úvod",
    nav_products: "Produkty",
    nav_pkd: "PKD destičky",
    nav_cbn: "CBN destičky",
    nav_karbid: "Karbidové destičky",
    nav_polotovary: "Karbidové polotovary",
    nav_why: "Proč my?",
    nav_cvd: "Publicita",
    nav_download: "Ke stažení",
    nav_career: "Zaměstnání",
    nav_contact: "Kontakt",
    btn_inquire_top: "Nezávazná poptávka",
    hero_badge: "SUPERTVRDÉ ŘEZNÉ MATERIÁLY • ZALOŽENO 2014",
    hero_title: "Přesné PKD, CBN a karbidové destičky pro nejnáročnější obrábění",
    hero_desc: "Dodáváme standardizované ISO tvary i zakázkové speciální geometrie ze syntetického diamantu, kubického nitridu boru a slinutých karbidů. Vyzkoušejte bezplatné testování přímo ve vašem provozu.",
    btn_explore: "Katalog technologií",
    btn_test: "Bezplatné testování v provozu",
    stat_year: "Rok založení",
    stat_hardness: "Tvrdost CBN (HV)",
    stat_temp: "Teplota slinování (°C)",
    stat_precision: "Přesnost profilu (µm)",
    kicker_catalog: "SORTIMENT A TECHNOLOGIE",
    title_catalog: "Katalog řezných destiček a slinutých polotovarů",
    desc_catalog: "Kompletní přehled sortimentu pro obrábění neželezných kovů, kalených ocelí i litin. Filtrujte dle materiálu nebo otevřete technický list.",
    pill_all: "Všechny technologie",
    pill_pkd: "PKD nástroje",
    pill_cbn: "CBN destičky",
    pill_karbid: "Karbidové VBD",
    pill_polotovary: "Karbidové polotovary",
    pill_vyzkum: "CVD výzkum",
    counter_suffix: "položek v přehledu",
    card1_title: "PKD standardizované ISO destičky",
    card1_desc: "Vysoce přesné břitové destičky s polykrystalickým diamantem vpájeným do karbidového tělesa pro obrábění neželezných kovů a kompozitů.",
    card1_tag: "Polykrystalický diamant",
    card1_cat: "PKD Nástroje",
    card2_title: "Speciální tvarové PKD nástroje na zakázku",
    card2_desc: "Zakázková výroba speciálních tvarů PKD břitů a profilových destiček dle individuální výkresové dokumentace zákazníka.",
    card2_tag: "Zakázková výroba",
    card2_cat: "PKD Nástroje",
    card3_title: "Masivní Solid CBN destičky pro těžké hrubování",
    card3_desc: "Celistvé břitové destičky z plného kubického nitridu boru bez karbidového nosiče pro maximální hloubku řezu a oboustranné použití.",
    card3_tag: "Solid CBN",
    card3_cat: "CBN Destičky",
    card4_title: "CBN destičky na nosné karbidové vrstvě",
    card4_desc: "Hospodárné CBN destičky s jemným CBN hrotem slinovaným nebo vpájeným na tvrdokovovém těle pro dokončovací tvrdé soustružení.",
    card4_tag: "Tvrdé soustružení",
    card4_cat: "CBN Destičky",
    card5_title: "Karbidové vyměnitelné břitové destičky (VBD)",
    card5_desc: "Slinuté karbidové destičky vyráběné technologií práškové metalurgie pro univerzální soustružení a frézování kovových materiálů.",
    card5_tag: "Slinutý karbid",
    card5_cat: "Karbidové VBD",
    card6_title: "Karbidové válce pro válcování za studena i tepla",
    card6_desc: "Vysoce namáhané válce a průvlaky ze slinutého karbidu dodávané jako polotovary i finální výrobky včetně kalibrování a drážkování.",
    card6_tag: "Válcovací tratě",
    card6_cat: "Karbidové polotovary",
    card7_title: "Karbidová vodítka, těsnění, razníky a opěrné čepy",
    card7_desc: "Přesné strojní součásti a polotovary z tvrdokovů pro náročné průmyslové aplikace, lisovny a výrobu střižných nástrojů.",
    card7_tag: "Přesné polotovary",
    card7_cat: "Karbidové polotovary",
    card8_title: "CVD technologie – Výzkum syntetického diamantu",
    card8_desc: "Výzkumné centrum v rámci projektu CZ.01.1.02/0.0/0.0/21_375/0027025 zaměřené na syntézu monokrystalického a polykrystalického diamantu.",
    card8_tag: "Výzkum & Vývoj EU",
    card8_cat: "CVD Výzkum",
    btn_view_specs: "Technické parametry",
    kicker_matrix: "TECHNICKÉ POROVNÁNÍ MATERIÁLŮ",
    title_matrix: "Výkonnostní parametry řezných substrátů",
    kicker_why: "PROČ SPOLUPRACOVAT S NÁMI",
    title_why: "Čtyři klíčové důvody pro volbu Superhard.cz",
    why1_title: "Individuální přístup a poradenství",
    why1_desc: "Posoudíme vaše stávající nástroje, navrhneme optimální geometrii destiček a doporučíme řezné parametry pro zvýšení životnosti.",
    why2_title: "Bezplatné testování ve vašem provozu",
    why2_desc: "Neriskujete! Nástroje si vyzkoušíte přímo na vašich strojích a platíte až v okamžiku, kdy jste s výsledkem plně spokojeni.",
    why3_title: "Široké portfolio substrátů",
    why3_desc: "Bohatý výběr jakostí PKD, CBN a karbidových směsí pro přesné sladění s obráběným materiálem od hliníku po kalené oceli.",
    why4_title: "Konsignační sklad a rychlé dodávky",
    why4_desc: "Pro sériovou výrobu držíme pojistné zásoby a zkracujeme dodací lhůty speciálních tvarů na minimum.",
    cvd_badge: "OP PIK • PROJEKT EU CZ.01.1.02/0.0/0.0/21_375/0027025",
    cvd_title: "Výzkumné centrum CVD technologií pro růst diamantů",
    cvd_desc: "Společnost Superhard s.r.o. provozuje špičkové výzkumné centrum zaměřené na depozici monokrystalického a polykrystalického diamantu pro novou generaci řezných a optických prvků.",
    kicker_downloads: "DOKUMENTACE A KARIÉRA",
    title_downloads: "Ke stažení katalog a nabídka zaměstnání",
    dl_title: "Superhard PKD a CBN katalog (PDF)",
    dl_desc: "Kompletní technická dokumentace rozměrů, geometrií a řezných doporučení v elektronické podobě.",
    btn_dl: "Stáhnout katalog PDF",
    job_title: "Zaměstnání – Hledáme obchodní zástupce",
    job_desc: "Hledáme spolupracující obchodní partnery (obchodní zástupce s ŽL a vlastním vozem) pro prodej řezných nástrojů v ČR a SR.",
    kicker_contact: "PŘÍMÝ KONTAKT",
    title_contact: "Technické a obchodní vedení společnosti",
    desc_contact: "Kontaktujte přímo jednatele nebo náš sekretariát pro technickou konzultaci, poptávku či sjednání návštěvy technika.",
    lbl_director: "Jednatel společnosti",
    lbl_office: "Sekretariát & administrativa",
    lbl_hq: "Fakturační sídlo:",
    lbl_post: "Korespondenční adresa:",
    lbl_reg: "Identifikace:",
    form_title: "Poptávka nástrojů a bezplatného testování",
    lbl_form_name: "Jméno a příjmení / Firma *",
    lbl_form_email: "E-mail *",
    lbl_form_phone: "Telefon *",
    lbl_form_type: "Poptávaný sortiment",
    lbl_form_msg: "Upřesnění poptávky / obráběný materiál",
    btn_submit: "Odeslat poptávku",
    map_label: "Sídlo Superhard s.r.o. – Konopná 344/14, 617 00 Brno",
    map_btn: "Otevřít v Mapy.cz",
    footer_desc: "Superhard s.r.o. – Specialista na syntetické diamantové nástroje (PKD), kubický nitrid boru (CBN) a výrobky z tvrdokovu pro přesné strojírenství a hutnictví.",
    footer_col_prod: "Sortiment",
    footer_col_coop: "Spolupráce",
    footer_col_contact: "Centrála Brno",
    modal_specs_title: "Technické parametry",
    modal_features_title: "Klíčové technologické přednosti",
    btn_close: "Zavřít",
    btn_modal_inquire: "Poptat tuto technologii"
  },
  en: {
    topbar_tag: "Specialist in PCD, CBN and Carbide Inserts • Founded 2014",
    topbar_cert: "EU CVD Research Center",
    nav_home: "Home",
    nav_products: "Products",
    nav_pkd: "PCD Inserts",
    nav_cbn: "CBN Inserts",
    nav_karbid: "Carbide Inserts",
    nav_polotovary: "Carbide Blanks",
    nav_why: "Why Us?",
    nav_cvd: "Publicity",
    nav_download: "Downloads",
    nav_career: "Careers",
    nav_contact: "Contact",
    btn_inquire_top: "Request Quote",
    hero_badge: "SUPERHARD CUTTING MATERIALS • ESTABLISHED 2014",
    hero_title: "Precision PCD, CBN and Carbide Inserts for Demanding Machining",
    hero_desc: "We supply standardized ISO shapes and custom geometries from synthetic diamond, cubic boron nitride and cemented carbides. Experience free tool testing in your facility.",
    btn_explore: "Explore Tooling",
    btn_test: "Free Operational Test",
    stat_year: "Year Established",
    stat_hardness: "CBN Hardness (HV)",
    stat_temp: "Sintering Temp (°C)",
    stat_precision: "Profile Precision (µm)",
    kicker_catalog: "PRODUCTS AND TECHNOLOGIES",
    title_catalog: "Catalog of Cutting Inserts and Carbide Blanks",
    desc_catalog: "Comprehensive range for machining non-ferrous metals, hardened steels and cast irons. Filter by material or open data sheet.",
    pill_all: "All Technologies",
    pill_pkd: "PCD Tooling",
    pill_cbn: "CBN Inserts",
    pill_karbid: "Carbide Inserts",
    pill_polotovary: "Carbide Blanks",
    pill_vyzkum: "CVD Research",
    counter_suffix: "catalog items",
    card1_title: "PCD Standardized ISO Inserts",
    card1_desc: "Ultra-precise cutting inserts with polycrystalline diamond brazed onto carbide substrate for non-ferrous machining.",
    card1_tag: "Polycrystalline Diamond",
    card1_cat: "PCD Tooling",
    card2_title: "Custom Special Shaped PCD Tooling",
    card2_desc: "Custom production of special shaped PCD cutting edges and profile inserts based on technical drawings.",
    card2_tag: "Custom Production",
    card2_cat: "PCD Tooling",
    card3_title: "Solid CBN Inserts for Heavy Roughing",
    card3_desc: "Solid cubic boron nitride cutting inserts without carbide carrier for maximum depth of cut and double-sided use.",
    card3_tag: "Solid CBN",
    card3_cat: "CBN Inserts",
    card4_title: "CBN Inserts on Carbide Substrate",
    card4_desc: "Cost-efficient CBN inserts with fine CBN tip sintered or brazed on carbide substrate for precision hard turning.",
    card4_tag: "Hard Turning",
    card4_cat: "CBN Inserts",
    card5_title: "Indexable Carbide Cutting Inserts",
    card5_desc: "Cemented carbide indexable inserts made by powder metallurgy for versatile metal turning and milling.",
    card5_tag: "Cemented Carbide",
    card5_cat: "Carbide Inserts",
    card6_title: "Carbide Rolls for Cold and Hot Rolling",
    card6_desc: "Heavy-duty rolls and dies made of cemented carbide supplied as blanks or finished parts with calibration and grooves.",
    card6_tag: "Rolling Mills",
    card6_cat: "Carbide Semi-products",
    card7_title: "Carbide Guides, Seals, Punches and Pins",
    card7_desc: "Precision machine parts and blanks made of tungsten carbide for industrial tooling, punching and stamping dies.",
    card7_tag: "Precision Blanks",
    card7_cat: "Carbide Semi-products",
    card8_title: "CVD Technology – Synthetic Diamond R&D",
    card8_desc: "R&D center under EU project CZ.01.1.02/0.0/0.0/21_375/0027025 focused on monocrystalline and polycrystalline diamond synthesis.",
    card8_tag: "EU R&D Project",
    card8_cat: "CVD Research",
    btn_view_specs: "Technical Specs",
    kicker_matrix: "MATERIAL PERFORMANCE MATRIX",
    title_matrix: "Performance Parameters of Cutting Substrates",
    kicker_why: "WHY COOPERATE WITH US",
    title_why: "Four Key Reasons to Choose Superhard.cz",
    why1_title: "Individual Approach and Consulting",
    why1_desc: "We review your current tools, suggest optimal insert geometries and recommend cutting parameters to maximize tool life.",
    why2_title: "Free In-House Operational Testing",
    why2_desc: "Zero risk! Test our cutting inserts directly on your machines and pay only when you are completely satisfied with the results.",
    why3_title: "Broad Range of Substrates",
    why3_desc: "Extensive selection of PCD, CBN and carbide grades perfectly matched to your workpiece from aluminum to hardened steels.",
    why4_title: "Consignment Stock and Fast Delivery",
    why4_desc: "For volume manufacturing we maintain safety buffers and minimize lead times for specialized custom geometries.",
    cvd_badge: "EU PROJECT CZ.01.1.02/0.0/0.0/21_375/0027025",
    cvd_title: "CVD Technology Research Center for Diamond Growth",
    cvd_desc: "Superhard s.r.o. operates an advanced R&D center focused on chemical vapor deposition of monocrystalline and polycrystalline diamond for next-gen cutting and optical tools.",
    kicker_downloads: "DOCUMENTATION AND CAREERS",
    title_downloads: "Download Catalog and Career Opportunities",
    dl_title: "Superhard PCD and CBN Catalog (PDF)",
    dl_desc: "Complete technical documentation of dimensions, geometries and cutting recommendations in PDF format.",
    btn_dl: "Download PDF Catalog",
    job_title: "Careers – Sales Representatives Wanted",
    job_desc: "We are seeking B2B sales representatives with own vehicle and trade license for cutting tool distribution in CZ and SK.",
    kicker_contact: "DIRECT CONTACT",
    title_contact: "Technical and Commercial Leadership",
    desc_contact: "Contact our managing director or office directly for technical consulting, RFQ or arranging a plant visit.",
    lbl_director: "Managing Director",
    lbl_office: "Office & Administration",
    lbl_hq: "Registered Office:",
    lbl_post: "Postal Address:",
    lbl_reg: "Identification:",
    form_title: "Request Tools and Free Plant Test",
    lbl_form_name: "Full Name / Company *",
    lbl_form_email: "E-mail *",
    lbl_form_phone: "Phone *",
    lbl_form_type: "Requested Tool Range",
    lbl_form_msg: "Inquiry Details / Workpiece Material",
    btn_submit: "Send Inquiry",
    map_label: "Superhard s.r.o. HQ – Konopna 344/14, 617 00 Brno",
    map_btn: "Open in Mapy.cz",
    footer_desc: "Superhard s.r.o. – Specialist in polycrystalline diamond (PCD), cubic boron nitride (CBN) and cemented carbide tooling for precision engineering.",
    footer_col_prod: "Products",
    footer_col_coop: "Cooperation",
    footer_col_contact: "Brno Headquarters",
    modal_specs_title: "Technical Specifications",
    modal_features_title: "Key Technological Advantages",
    btn_close: "Close",
    btn_modal_inquire: "Inquire This Technology"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_superhard")) {
      sessionStorage.setItem("ping_sent_superhard", "true");
      const record = {
        slug: "superhard",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_superhard", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = `${window.NABIDKA_PING_URL}?slug=superhard&t=${Date.now()}`;
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const currentLang = localStorage.getItem("superhard_lang") || "cz";
  setLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem("superhard_lang", lang);
    });
  });

  function setLanguage(lang) {
    const dict = translations[lang] || translations.cz;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll(".lang-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    const brandLogos = document.querySelectorAll(".brand-logo");
    brandLogos.forEach(img => {
      img.src = lang === "en" ? "assets/logo1-en.png" : "assets/logo1-cs.png";
    });
    const modal = document.getElementById("techModalBackdrop");
    if (modal) {
      modal.classList.remove("active");
      modal.classList.remove("is-active");
      modal.style.display = "none";
    }
  }
  window.setLanguage = setLanguage;

  const counters = document.querySelectorAll(".stat-number");
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
observer.unobserve(entry.target);
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const target = parseInt(entry.dataset.target, 10);
        let current = 0;
entry.target.textContent = '0';
        const step = Math.max(1, Math.floor(target / 35));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          entry.textContent = current.toLocaleString("cs-CZ");
        }, 30);
        observer.unobserve(entry);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObserver.observe(c));

  const searchInput = document.getElementById("catalogSearch");
  const catPills = document.querySelectorAll(".cat-pill");
  const cards = document.querySelectorAll(".catalog-item-card");
  const counterEl = document.getElementById("searchCounter");

  function filterCards() {
    const query = (searchInput ? searchInput.value.toLowerCase().trim() : "");
    const activePill = document.querySelector(".cat-pill.active");
    const activeCat = activePill ? activePill.dataset.cat : "all";

    let visibleCount = 0;
    cards.forEach(card => {
      const cat = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const matchesCat = (activeCat === "all" || cat === activeCat);
      const matchesQuery = (!query || text.includes(query));

      if (matchesCat && matchesQuery) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (counterEl) {
      counterEl.textContent = visibleCount;
      counterEl.setAttribute("data-counter", visibleCount);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterCards);
  }

  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      filterCards();
    });
  });

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalCloseBtn = document.getElementById("techModalClose");
  const modalCloseFoot = document.getElementById("modalCloseFoot");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalPerex = document.getElementById("modalPerex");
  const modalSpecsBody = document.getElementById("modalSpecsBody");
  const modalFeatures = document.getElementById("modalFeatures");

  function openModal(item) {
    if (!item) return;
    modalTitle.textContent = item.title;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalPerex.textContent = item.perex;

    let specsHtml = "";
    for (const [k, v] of Object.entries(item.specs)) {
      specsHtml += `<tr><td>${k}</td><td>${v}</td></tr>`;
    }
    modalSpecsBody.innerHTML = specsHtml;

    let featHtml = "";
    item.features.forEach(f => {
      featHtml += `<li>${f}</li>`;
    });
    modalFeatures.innerHTML = featHtml;

    modalBackdrop.classList.add("is-active");
    modalBackdrop.classList.add("active");
    modalBackdrop.style.display = "flex";
    modalBackdrop.style.visibility = "visible";
    modalBackdrop.style.opacity = "1";
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-active");
    modalBackdrop.classList.remove("active");
    modalBackdrop.style.display = "none";
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-open-tech], .btn-tech-open").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id || btn.dataset.openTech;
      const item = catalogData.find(x => x.id === id);
      if (item) {
        openModal(item);
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalCloseFoot) modalCloseFoot.addEventListener("click", closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-active")) {
      closeModal();
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isVisible = mainNav.style.display === "flex";
      mainNav.style.display = isVisible ? "none" : "flex";
      if (!isVisible) {
        mainNav.style.flexDirection = "column";
        mainNav.style.position = "absolute";
        mainNav.style.top = "100%";
        mainNav.style.left = "0";
        mainNav.style.width = "100%";
        mainNav.style.background = "#0a0e14";
        mainNav.style.padding = "20px";
        mainNav.style.borderBottom = "1px solid #263546";
      }
    });
  }

  const contactForm = document.getElementById("leadForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusEl = document.getElementById("formStatus");
      if (statusEl) {
        statusEl.textContent = "Děkujeme za poptávku. Váš požadavek byl úspěšně zaznamenán a technik Vás bude kontaktovat.";
        statusEl.style.display = "block";
        statusEl.style.color = "#10b981";
      }
      contactForm.reset();
    });
  }
});
