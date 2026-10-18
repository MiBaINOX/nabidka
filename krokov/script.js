const catalogItems = [
  {
    id: 'razidla-rucni',
    title: 'Ruční ocelová razidla v sadách i jednotlivě',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Klasická i speciální ruční razidla pro ražení do oceli a kovů za studena i za tepla. Písmena, číslice a zakázkové znaky.',
    material: 'Kalená nástrojová ocel 19 312 / 19 573',
    params: {
      'Tvrdost břitu': '58–62 HRC (kaleno a popuštěno)',
      'Provedení': 'Písmena A–Z, číslice 0–9 v sadách i kusově',
      'Výška písma': '1,0 mm až 25,0 mm',
      'Profil břitu': 'Standardní ostrý břit nebo zaoblený (low-stress)',
      'Použití': 'Ruční ražení za studena i za tepla'
    },
    image: 'assets/ko.jpg'
  },
  {
    id: 'razidla-kontrola',
    title: 'Speciální razidla pro technickou kontrolu',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Inspekční a kontrolní značky pro výstupní kontrolu OTK, svářečské značky a kódová razidla s vysokou ostrostí detailu.',
    material: 'Nástrojová ocel 19 312, selektivně kalená',
    params: {
      'Tvrdost břitu': '60–62 HRC (odolná úderová hlava)',
      'Typy motivů': 'Geometrické znaky, čísla kontrolorů, loga OTK',
      'Provedení': 'Kulatý dřík s rýhováním nebo čtyřhran',
      'Bezpečnost': 'Tvrzený dřík s úpravou proti otřepům'
    },
    image: 'assets/hz.jpg'
  },
  {
    id: 'razidla-strojni',
    title: 'Strojní razidla pro lisovací operace',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Průmyslová strojní razidla přizpůsobená pro mechanické, pneumatické a hydraulické lisy s vysokou dynamickou odolností.',
    material: 'Vysokolegovaná nástrojová ocel 19 573',
    params: {
      'Tepelné zpracování': 'Vakuové kalení na 58–60 HRC',
      'Upínací stopka': 'Válcová, prizmatická nebo dle výkresu',
      'Režim ražení': 'Za studena i za tepla (vysoká odolnost proti popouštění)',
      'Životnost': 'Vysoká cyklická odolnost břitu'
    },
    image: 'assets/juk.jpg'
  },
  {
    id: 'kotouce-navalovaci',
    title: 'Navalovací a razicí kotouče',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Rotační navalovací segmenty a kotouče pro kontinuální značení trubek, profilů, tyčí a rotačních součástí přímo ve výrobní lince.',
    material: 'Kalená nástrojová ocel s vysokou otěruvzdorností',
    params: {
      'Průměr kotouče': 'Dle zástavby linky a kroku značení',
      'Typ značení': 'Kontinuální obvodové značení nebo segmentové',
      'Aplikace': 'Hutní materiály, automobilový a zbrojní průmysl',
      'Tolerance obvodu': 'Broušeno na přesný valivý průměr'
    },
    image: 'assets/0730.jpg'
  },
  {
    id: 'drzaky-skupinove',
    title: 'Držáky a hlavy pro skupinové ražení',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Výměnné stavebnicové držáky pro víceřádkové ražení textů, šarží, výrobních čísel a dat výroby s rychlou aretací znaků.',
    material: 'Konstrukční a zušlechtěná nástrojová ocel',
    params: {
      'Počet řádků': '1 až 4 řádky (modulární provedení)',
      'Systém upnutí': 'Rychloupínací klín nebo přítlačná lišta',
      'Kapacita znaků': 'Dle šířky segmentů a velikosti písma',
      'Využití': 'Ruční úderové ražení i strojní lisovací hlavy'
    },
    image: 'assets/0999.jpg'
  },
  {
    id: 'razidla-zrcadlova',
    title: 'Zrcadlově obrácená razidla do matric a forem',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Precizní reverzně gravírovaná razidla určená pro vkládání do tvářecích matric, vstřikovacích forem a slévárenských modelů.',
    material: 'Žárupevní a nástrojové oceli',
    params: {
      'Geometrie': 'Zrcadlový reliéf s úkosem stěn pro odformování',
      'Odolnost za tepla': 'Maximální odolnost proti popouštění',
      'Přesnost gravírování': 'CNC rytecké mikro-frézování',
      'Využití': 'Formy pro plasty, pryž, tlakové lití kovů'
    },
    image: 'assets/0753.jpg'
  },
  {
    id: 'razidla-mosaz',
    title: 'Mosazná razidla pro slepotisk a kůži',
    category: 'razidla',
    category_name: 'Výroba razidel & značení',
    perex: 'Jemně rytá mosazná razidla s vynikající tepelnou vodivostí pro horkou ražbu do kůže, dřeva, plastů, papíru a knihařský slepotisk.',
    material: 'Gravírovací polotvrdá mosaz Ms58',
    params: {
      'Tepelná vodivost': 'Ideální pro termoražbu (horké razidlo)',
      'Uchycení': 'Se závitovým čepem pro topné těleso nebo dřík',
      'Detail grafiky': 'Vysoké rozlišení linek od 0,2 mm',
      'Použití': 'Kožedělný, obuvnický a luxusní obalový průmysl'
    },
    image: 'assets/0708.jpg'
  },
  {
    id: 'cnc-dilce',
    title: 'Přesné CNC tvarové díly a kovoobrábění',
    category: 'kovoobrabeni',
    category_name: 'CNC Kovoobrábění & Nástrojárna',
    perex: 'Zakázkové frézování a soustružení tvarově náročných dílců na CNC centrech ZPS a MAS. Kusová i sériová přesná produkce.',
    material: 'Ocel, ocelolitina, litina, dural, barevné kovy',
    params: {
      'Pracovní rozsah': 'Až 1060 × 610 × 760 mm',
      'Tolerance rozměrů': 'V přesných tolerancích dle ISO norem',
      'Operace': 'Frézování, vrtání, vystružování, řezání závitů',
      'Chlazení': 'Středový přívod chladicí kapaliny pro hluboké otvory'
    },
    image: 'assets/0652.jpg'
  },
  {
    id: 'celisti-prizmata',
    title: 'Upínací čelisti, prizmata a tvarové bloky',
    category: 'kovoobrabeni',
    category_name: 'CNC Kovoobrábění & Nástrojárna',
    perex: 'Výroba vysoce přesných upínacích čelistí pro svěráky a hydraulická upínadla, kalená prizmata a polohovací bloky.',
    material: 'Nástrojová ocel legovaná, kalená na 58–60 HRC',
    params: {
      'Broušení': 'Přesné rovinné broušení funkčních ploch',
      'Tvarování': 'Rovinné i tvarové drážky dle upínaného profilu',
      'Trvanlivost': 'Vysoká odolnost proti opotřebení a otlačení',
      'Zakázková výroba': 'Dle výkresové dokumentace zákazníka'
    },
    image: 'assets/0633.jpg'
  },
  {
    id: 'karusel-900mm',
    title: 'Karuselové obrábění tvarů a průměrů do 900 mm',
    category: 'kovoobrabeni',
    category_name: 'CNC Kovoobrábění & Nástrojárna',
    perex: 'Obrábění rozměrných rotačních těles, přírub, prstenců a velkých tvarových dílů na svislých karuselových strojích.',
    material: 'Ušlechtilá ocel, litina, svařence, výkovky',
    params: {
      'Maximální průměr obrobku': 'Až do 900 mm',
      'Typ stroje': 'Svislý soustruh – karusel',
      'Operace': 'Soustružení vnějších a vnitřních průměrů, čel a kuželů',
      'Hmotnost dílce': 'Vysoká nosnost stolu pro těžké polotovary'
    },
    image: 'assets/0644.jpg'
  },
  {
    id: 'nastrojove-desky',
    title: 'Tvarové desky a kalené vložky',
    category: 'nastrojarna',
    category_name: 'Nástrojárna & broušení',
    perex: 'Kompletní výroba vodicích lišt, kalených střižných desek, opěrných podložek a tvarových nástrojových komponent.',
    material: 'Nástrojová ocel 19 312 / 19 573',
    params: {
      'Tepelné zpracování': 'Kalené a popouštěné na 58–62 HRC',
      'Povrch': 'Jemně broušené rovinné plochy',
      'Rovinnost': 'Vysoká přesnost rovnoběžnosti a kolmosti',
      'Použití': 'Střižné a lisovací nástroje, jednoúčelové stroje'
    },
    image: 'assets/0698.jpg'
  },
  {
    id: 'gravirovani-rytectvi',
    title: 'Rytecké práce a CNC gravírování',
    category: 'nastrojarna',
    category_name: 'Nástrojárna & broušení',
    perex: 'Počítačově řízené gravírování technických reliéfů, firemních logotypů, výrobních štítků, přístrojových panelů a měřítek.',
    material: 'Ocel, mosaz, dural, technické plasty',
    params: {
      'Řízení': 'Plně počítačem řízené CNC gravírovací stroje',
      'Podklady': 'Výroba dle CAD dat, DXF, vektorových log i vzorků',
      'Geometrie rytí': '2D i 3D prostorové reliéfní gravírování',
      'Použití': 'Strojírenství, hutě, svařovny, potravinářství'
    },
    image: 'assets/0655.jpg'
  }
];

const translations = {
  cs: {
    nav_home: 'Úvod',
    nav_disciplines: 'Výrobní obory',
    nav_products: 'Výrobky & Razidla',
    nav_machines: 'Strojní park',
    nav_rental: 'Pronájem areálu',
    nav_contact: 'Kontakty',
    hero_cta_inquiry: 'Poptat výrobu',
    hero_badge: 'Tradiční výroba nástrojů a razidel od roku 1990',
    hero_title: 'Přesná razidla, CNC kovoobrábění a karusel do 900 mm',
    hero_subtitle: 'Vyrábíme ocelová a mosazná razidla pro ruční i strojní ražení za studena i za tepla, znaky OTK, navalovací kotouče a přesné strojní díly s více než 30 lety zkušeností.',
    hero_cta_cat: 'Prohlédnout katalog výrobků',
    stat_year: 'Rok založení firmy',
    stat_years: 'Let nástrojářské tradice',
    stat_diameter: 'Maximální průměr karuselu',
    stat_hardness: 'Tvrdost kalených razidel',
    hero_float_title: 'Kalená nástrojová ocel',
    hero_float_desc: 'Třídy 19 312 a 19 573 s odolností proti popouštění',
    tabs_title: 'Specializované výrobní obory',
    tabs_subtitle: 'Kompletní technologické zázemí od CAD modelování a gravírování po CNC frézování a tepelné zpracování.',
    tab_stamps: 'Výroba razidel & log',
    tech_stamps_desc: 'Výroba klasických i speciálních razidel z nástrojové oceli 19 312 a 19 573 k ručnímu i strojnímu ražení za studena i za tepla. Znaky, firemní loga, kontrolní razidla OTK a navalovací kotouče.',
    tab_cnc: 'CNC kovoobrábění',
    tech_cnc_desc: 'Přesné 3-osé frézování na vertikálních centrech ZPS MCFV a MAS MCV s pojezdy do 1060 mm. Tvarové dílce, upínací čelisti, nástrojové desky a kusová i sériová výroba.',
    tab_carousel: 'Karusel do 900 mm',
    tech_carousel_desc: 'Obrábění rozměrných rotačních tvarů a součástí až do průměru 900 mm na svislých karuselových strojích. Těžké příruby, prstence a rotační polotovary.',
    tab_engraving: 'Rytecké práce',
    tech_engraving_desc: 'Počítačově řízené gravírování na CNC strojích. Precizní reliéfy, matricová zrcadlová razidla, měřítka, technické logotypy a značení do oceli i mosazi.',
    cat_section_title: 'Katalog výrobků a technologických dílů',
    cat_section_subtitle: 'Interaktivní přehled standardních i zakázkových razidel, obráběných součástí a nástrojových komponentů.',
    filter_all: 'Všechny výrobky (12)',
    filter_razidla: 'Razidla a značení',
    filter_cnc: 'CNC kovoobrábění',
    filter_tooling: 'Nástrojárna & broušení',
    search_placeholder: 'Hledat razidlo, materiál, stroj...',
    catalog_count_label: 'Zobrazeno',
    catalog_count_items: 'položek',
    item_1_title: 'Ruční ocelová razidla v sadách i jednotlivě',
    item_1_desc: 'Klasická i speciální ruční razidla pro ražení do oceli a kovů za studena i za tepla. Písmena, číslice a zakázkové znaky.',
    item_2_title: 'Speciální razidla pro technickou kontrolu',
    item_2_desc: 'Inspekční a kontrolní značky pro výstupní kontrolu OTK, svářečské značky a kódová razidla s vysokou ostrostí detailu.',
    item_3_title: 'Strojní razidla pro lisovací operace',
    item_3_desc: 'Průmyslová strojní razidla přizpůsobená pro mechanické, pneumatické a hydraulické lisy s vysokou dynamickou odolností.',
    item_4_title: 'Navalovací a razicí kotouče',
    item_4_desc: 'Rotační navalovací segmenty a kotouče pro kontinuální značení trubek, profilů, tyčí a rotačních součástí přímo ve výrobní lince.',
    item_5_title: 'Držáky a hlavy pro skupinové ražení',
    item_5_desc: 'Výměnné stavebnicové držáky pro víceřádkové ražení textů, šarží, výrobních čísel a dat výroby s rychlou aretací znaků.',
    item_6_title: 'Zrcadlově obrácená razidla do matric a forem',
    item_6_desc: 'Precizní reverzně gravírovaná razidla určená pro vkládání do tvářecích matric, vstřikovacích forem a slévárenských modelů.',
    item_7_title: 'Mosazná razidla pro slepotisk a kůži',
    item_7_desc: 'Jemně rytá mosazná razidla s vynikající tepelnou vodivostí pro horkou ražbu do kůže, dřeva, plastů, papíru a knihařský slepotisk.',
    item_8_title: 'Přesné CNC tvarové díly a kovoobrábění',
    item_8_desc: 'Zakázkové frézování a soustružení tvarově náročných dílců na CNC centrech ZPS a MAS. Kusová i sériová přesná produkce.',
    item_9_title: 'Upínací čelisti, prizmata a tvarové bloky',
    item_9_desc: 'Výroba vysoce přesných upínacích čelistí pro svěráky a hydraulická upínadla, kalená prizmata a polohovací bloky.',
    item_10_title: 'Karuselové obrábění tvarů a průměrů do 900 mm',
    item_10_desc: 'Obrábění rozměrných rotačních těles, přírub, prstenců a velkých tvarových dílů na svislých karuselových strojích.',
    item_11_title: 'Tvarové desky a kalené vložky',
    item_11_desc: 'Kompletní výroba vodicích lišt, kalených střižných desek, opěrných podložek a tvarových nástrojových komponent.',
    item_12_title: 'Rytecké práce a CNC gravírování',
    item_12_desc: 'Počítačově řízené gravírování technických reliéfů, firemních logotypů, výrobních štítků, přístrojových panelů a měřítek.',
    btn_open_detail: 'Technická specifikace',
    machines_title: 'Špičkový strojní park a vybavení',
    machines_subtitle: 'Moderní obráběcí centra ZPS a MAS doplněná stabilní dělicí pilou BOMAR a konvenčními stroji pro kusovou výrobu.',
    rental_title: 'Průmyslový areál a prostory k pronájmu',
    rental_subtitle: 'Kromě kovoobrábění nabízíme volné výrobní a skladové prostory o rozloze 250 až 1 000 m² s kompletním zabezpečením.',
    rental_feature_1: 'Rozloha 250 až 1 000 m²',
    rental_feature_2: 'Kamerový a vnitřní zabezpečovací systém',
    rental_feature_3: 'Parkovací plochy a příjezd pro nákladní dopravu',
    rental_inquire: 'Informovat se o pronájmu',
    contact_title: 'Kontakty a nezávazná poptávka',
    contact_subtitle: 'Pošlete nám výkresovou dokumentaci nebo specifikaci požadovaného razidla či obrobku. Obratem se vám ozveme.',
    contact_hours_title: 'Provozní a pracovní doba',
    contact_hours_mon_thu: 'Pondělí – Čtvrtek: 7:00 – 16:00',
    contact_hours_fri: 'Pátek: 7:00 – 14:00',
    form_name_placeholder: 'Vaše jméno a příjmení',
    form_company_placeholder: 'Název firmy / IČO',
    form_email_placeholder: 'firemni@email.cz',
    form_phone_placeholder: '+420 123 456 789',
    form_tech_label: 'Typ technologie / poptávky',
    form_msg_placeholder: 'Popište požadavek, typ materiálu, počet kusů, požadavky na tepelné zpracování...',
    form_submit: 'Odeslat nezávaznou poptávku',
    footer_desc: 'Výroba razidel, znaků, logotypů, přesné CNC kovoobrábění a karuselové tvary do 900 mm s tradicí od roku 1990.',
    footer_rights: 'Všechna práva vyhrazena.'
  },
  en: {
    nav_home: 'Home',
    nav_disciplines: 'Production Sectors',
    nav_products: 'Products & Stamps',
    nav_machines: 'Machinery',
    nav_rental: 'Industrial Rental',
    nav_contact: 'Contact',
    hero_cta_inquiry: 'Request Quotation',
    hero_badge: 'Traditional Tooling & Stamp Production Since 1990',
    hero_title: 'Precision Stamps, CNC Machining & Turning up to 900 mm',
    hero_subtitle: 'We manufacture steel and brass stamps for manual and machine cold and hot stamping, QC inspection marks, roll dies and precision parts with over 30 years of expertise.',
    hero_cta_cat: 'Browse Product Catalog',
    stat_year: 'Year Established',
    stat_years: 'Years of Tooling Tradition',
    stat_diameter: 'Max Vertical Turning Diameter',
    stat_hardness: 'Hardened Stamp Hardness',
    hero_float_title: 'Hardened Tool Steel',
    hero_float_desc: 'Grades 19 312 and 19 573 with high temper resistance',
    tabs_title: 'Specialized Manufacturing Sectors',
    tabs_subtitle: 'Comprehensive technological equipment from CAD modeling and engraving to CNC milling and heat treatment.',
    tab_stamps: 'Stamps & Logos',
    tech_stamps_desc: 'Production of standard and custom stamps from tool steel 19 312 and 19 573 for manual and machine hot and cold stamping. Logotypes, QC inspector stamps and roll dies.',
    tab_cnc: 'CNC Metalworking',
    tech_cnc_desc: 'Precision 3-axis milling on ZPS MCFV and MAS MCV vertical centers with travels up to 1060 mm. Form parts, fixture jaws, tooling plates and custom components.',
    tab_carousel: 'Turning to 900 mm',
    tech_carousel_desc: 'Machining large rotationally symmetrical shapes and parts up to 900 mm diameter on vertical lathes. Heavy flanges, rings and forgings.',
    tab_engraving: 'Engraving & Reliefs',
    tech_engraving_desc: 'Computer-controlled CNC engraving. Precision reliefs, mirror matrix dies, technical logotypes, scales and marking in steel and brass.',
    cat_section_title: 'Product Catalog & Technical Parts',
    cat_section_subtitle: 'Interactive overview of standard and custom stamps, machined parts and tooling components.',
    filter_all: 'All Products (12)',
    filter_razidla: 'Stamps & Marking',
    filter_cnc: 'CNC Machining',
    filter_tooling: 'Tooling & Grinding',
    search_placeholder: 'Search stamp, material, machine...',
    catalog_count_label: 'Showing',
    catalog_count_items: 'items',
    item_1_title: 'Manual Steel Stamps in Sets and Singles',
    item_1_desc: 'Conventional and custom manual stamps for stamping into steel and metals hot and cold. Letters, numbers and custom emblems.',
    item_2_title: 'Special Stamps for Quality Control (QC)',
    item_2_desc: 'Inspection and control marks for quality control, welder badges and code stamps with high contour definition.',
    item_3_title: 'Machine Stamps for Press Operations',
    item_3_desc: 'Industrial machine stamps adapted for mechanical, pneumatic and hydraulic presses with high cyclic endurance.',
    item_4_title: 'Roll and Segment Stamping Dies',
    item_4_desc: 'Rotary roll segments and wheels for continuous marking of tubes, profiles, bars and rotary parts directly on production lines.',
    item_5_title: 'Holders and Heads for Group Stamping',
    item_5_desc: 'Modular interchangeable holders for multi-line stamping of texts, batch numbers, serial numbers with quick lock mechanism.',
    item_6_title: 'Mirrored Stamps for Matrices and Molds',
    item_6_desc: 'Precision reverse-engraved stamps intended for inserting into forming matrices, injection molds and casting patterns.',
    item_7_title: 'Brass Stamps for Blind Embossing & Leather',
    item_7_desc: 'Finely engraved brass stamps with superior heat conductivity for hot stamping leather, wood, plastics and bookbinding.',
    item_8_title: 'Precision CNC Form Parts & Machining',
    item_8_desc: 'Custom milling and turning of complex parts on ZPS and MAS CNC centers. High-precision piece and series manufacturing.',
    item_9_title: 'Clamping Jaws, Prisms and Form Blocks',
    item_9_desc: 'Manufacture of high-precision clamping jaws for vises, hardened prisms and positioning blocks for tooling setups.',
    item_10_title: 'Vertical Lathe Turning up to 900 mm',
    item_10_desc: 'Machining large rotating bodies, flanges, rings and large formed parts on vertical carousel turning machines.',
    item_11_title: 'Forming Plates and Hardened Inserts',
    item_11_desc: 'Complete production of guide rails, hardened shearing plates, support washers and forming tooling components.',
    item_12_title: 'Engraving Work and CNC Relief Carving',
    item_12_desc: 'Computer-controlled engraving of technical reliefs, company logotypes, nameplates, instrument panels and dials.',
    btn_open_detail: 'Technical Specifications',
    machines_title: 'Advanced Machinery & Workshop Equipment',
    machines_subtitle: 'Modern ZPS and MAS vertical machining centers complemented by BOMAR heavy-duty bandsaw and conventional machines.',
    rental_title: 'Industrial Park & Commercial Premises',
    rental_subtitle: 'In addition to precision engineering, we offer production and warehouse premises from 250 to 1,000 m² with security.',
    rental_feature_1: 'Premises area from 250 to 1,000 m²',
    rental_feature_2: 'CCTV and indoor alarm security monitoring',
    rental_feature_3: 'Spacious parking and truck access routes',
    rental_inquire: 'Inquire about Rental',
    contact_title: 'Contact Us for a Non-Binding Quotation',
    contact_subtitle: 'Send us your technical drawings or specifications for the required stamp or machined part. We will reply promptly.',
    contact_hours_title: 'Working Hours',
    contact_hours_mon_thu: 'Monday – Thursday: 7:00 – 16:00',
    contact_hours_fri: 'Friday: 7:00 – 14:00',
    form_name_placeholder: 'Your Full Name',
    form_company_placeholder: 'Company Name / Reg. No.',
    form_email_placeholder: 'company@email.com',
    form_phone_placeholder: '+420 123 456 789',
    form_tech_label: 'Technology / Inquiry Type',
    form_msg_placeholder: 'Describe your requirement, material grade, quantity, heat treatment needs...',
    form_submit: 'Submit Quotation Request',
    footer_desc: 'Production of stamps, marks, logos, precision CNC machining and vertical turning up to 900 mm since 1990.',
    footer_rights: 'All rights reserved.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initCounters();
  initCatalog();
  initModal();
  initNav();
});

function initLanguage() {
  const savedLang = localStorage.getItem('krokov_lang') || 'cs';
  setLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('krokov_lang', lang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        const duration = 1200;
        const startTime = performance.now();
        el.textContent = '0';

        function animate(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(easeOut * target);
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = target;
          }
        }
        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

function initCatalog() {
  const filterBtns = document.querySelectorAll('.tab-btn[data-filter]');
  const searchInput = document.getElementById('catalogSearch');
  const countEl = document.getElementById('itemCount');
  const cards = document.querySelectorAll('.cat-card');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    let visibleCount = 0;
    cards.forEach(card => {
      const cat = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      const matchCat = activeCategory === 'all' || cat === activeCategory;
      const matchSearch = !searchTerm || text.includes(searchTerm);

      if (matchCat && matchSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    if (countEl) {
      countEl.textContent = visibleCount;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }
}

function initModal() {
  const modal = document.getElementById('techModalBackdrop');
  const closeBtn = document.getElementById('techModalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalImg = document.getElementById('modalImg');
  const modalMaterial = document.getElementById('modalMaterial');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsTbody = document.getElementById('modalSpecsTbody');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  if (!modal) return;

  function openModal(id) {
    const item = catalogItems.find(i => i.id === id);
    if (!item) return;

    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category_name;
    modalImg.src = item.image;
    modalImg.alt = item.title;
    modalMaterial.textContent = item.material;
    modalDesc.textContent = item.perex;

    modalSpecsTbody.innerHTML = '';
    for (const [key, val] of Object.entries(item.params)) {
      const tr = document.createElement('tr');
      const tdKey = document.createElement('td');
      tdKey.textContent = key;
      const tdVal = document.createElement('td');
      tdVal.textContent = val;
      tr.appendChild(tdKey);
      tr.appendChild(tdVal);
      modalSpecsTbody.appendChild(tr);
    }

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-target-tech]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-target-tech');
      openModal(id);
    });
  });

  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      const id = card.getAttribute('data-open-tech');
      if (id) openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      closeModal();
    });
  }
}

function initNav() {
  const toggle = document.getElementById('mobileMenuBtn');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
      });
    });
  }
}
