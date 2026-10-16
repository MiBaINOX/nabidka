(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_ekoprogres')) {
    sessionStorage.setItem('nabidka_ping_ekoprogres', '1');
    var rec = {
      slug: 'ekoprogres',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_ekoprogres', JSON.stringify(rec));
    } catch (e) {}

    if (window.NABIDKA_PING_URL) {
      var pingUrl = window.NABIDKA_PING_URL + '?slug=ekoprogres&t=' + encodeURIComponent(rec.time);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(pingUrl);
      } else {
        var im = new Image();
        im.src = pingUrl;
      }
    }
  }

  var translations = {
    cs: {
      top_founded: 'Tradice od roku 1990',
      top_standards: 'Normy ČSN EN • ISO 9001',
      top_location: 'Sídlo Hranice I - Město',
      nav_about: 'O společnosti',
      nav_products: 'Výrobní program',
      nav_kombiblok: 'ČOV KOMBIBLOK®',
      nav_calc: 'Dimenzování EO',
      nav_linkseal: 'Těsnění Link-Seal®',
      nav_contact: 'Poptávka',
      hero_badge: 'Vodohospodářské technologie',
      hero_badge_sub: 'Založeno 1990 v Hranicích',
      hero_title: 'Technologie rozhoduje: Kompletní řešení pro čistírny odpadních vod a úpravny vod',
      hero_desc: 'EKOPROGRES HRANICE a.s. zajišťuje komplexní technologické dodávky vodohospodářských investičních celků. Vyrábíme osvědčené sedimentační nádrže, čistírny KOMBIBLOK®, strojně stírané česle a certifikované těsnění prostupů stavebními konstrukcemi LINK-SEAL®.',
      hero_btn_catalog: 'Katalog technologií',
      hero_btn_calc: 'Kalkulátor EO pro obce',
      spec_systems: 'ČOV systémy',
      spec_systems_val: 'KOMBIBLOK® 50–50 000 EO',
      spec_sealing: 'Těsnění prostupů',
      spec_sealing_val: 'LINK-SEAL® originál',
      spec_experience: 'Zkušenosti',
      spec_experience_val: 'Více než 35 let na trhu',
      stat_proven: 'Prověřená řešení',
      stat_proven_desc: 'Stovky úspěšných realizací pro města, obce a průmysl v ČR i zahraničí.',
      stat_founded_lbl: 'Rok založení jako první privátní a.s. ve vodohospodářství',
      stat_years_lbl: 'Let kontinuální výroby nádrží a technologických zařízení',
      stat_eo_lbl: 'Maximální kapacita komunálních čistírenských celků KOMBIBLOK®',
      stat_czech_lbl: 'České inženýrství navazující na tradici města Hranice',
      about_eyebrow: 'Profil a historie',
      about_heading: 'EKOPROGRES HRANICE a.s.',
      about_subtext: 'Sídlo společnosti je v Hranicích, ve městě s dlouholetou tradicí ve výstavbě vodovodů, armatur a čerpací techniky.',
      feat_1_title: 'Komplexní vodohospodářské dodávky',
      feat_1_desc: 'Zajišťujeme kompletní technologické vystrojení čistíren odpadních vod, čerpacích stanic a úpraven vody včetně montáže a zprovoznění.',
      feat_2_title: 'Atypické stroje a sedimentace',
      feat_2_desc: 'Vyrábíme speciální stroje ověřené dlouhodobým provozem – sedimentační nádrže, stírací mosty a mechanicky stírané česle pro čerpací kanály.',
      feat_3_title: 'Dlouhá životnost a servis',
      feat_3_desc: 'Díky robustnímu nerezovému provedení a antikorozní ochraně pracují naše technologie spolehlivě v nepřetržitém provozu desítky let.',
      cat_eyebrow: 'Katalog technologií',
      cat_heading: 'Výrobní program vodohospodářských zařízení',
      cat_subtext: 'Filtrujte kategorie zařízení nebo vyhledejte konkrétní technologii kliknutím na příslušnou kartu.',
      cat_all: 'Všechny technologie',
      cat_sedim: 'Sedimentační nádrže',
      cat_cov: 'Čistírny KOMBIBLOK®',
      cat_cesle: 'Strojní česle SH',
      cat_link: 'LINK-SEAL® těsnění',
      cat_sedim_tag: 'Sedimentace',
      cat_cov_tag: 'Čistírny odpadních vod',
      cat_cesle_tag: 'Předčištění',
      cat_link_tag: 'Těsnění prostupů',
      prod_1_title: 'Horizontální a radiální sedimentační nádrže',
      prod_1_desc: 'Celá řada typů nádrží pro čištění vody na čistírnách odpadních vod s pojezdovými stíracími mosty.',
      prod_1_spec: 'Materiál: nerez / ocel s antikorozním nátěrem',
      prod_2_title: 'Kompaktní čistírna KOMBIBLOK®',
      prod_2_desc: 'Plně integrovaný biologický stupeň s jemnobublinnou aerací a separací kalu pro obce a průmysl.',
      prod_2_spec: 'Kapacita: 50 až 50 000 ekvivalentních obyvatel',
      prod_3_title: 'Strojně stírané česle typu SH',
      prod_3_desc: 'Zachycení plovoucích a sunutých látek v přítokových kanálech čistíren vod a malých vodních elektráren.',
      prod_3_spec: 'Automatický provoz s integrací šnekového lisu',
      prod_4_title: 'Modulární těsnění LINK-SEAL®',
      prod_4_desc: 'Trvalé elastické utěsnění kruhových prostupů potrubí stavebními konstrukcemi proti tlakové vodě a plynu.',
      prod_4_spec: 'Tlaková odolnost až 5 bar (50 m vodního sloupce)',
      prod_5_title: 'Pojezdové stírací mosty a lapáky',
      prod_5_desc: 'Odstraňování usazeného písku a plovoucích nečistot s centrálním nebo obvodovým pohonem.',
      prod_5_spec: 'Vysoká účinnost stírání s minimální energetickou náročností',
      prod_6_title: 'Kontejnerové a atypické čistírny vod',
      prod_6_desc: 'Kompaktní řešení v prefabrikovaných či mobilních kontejnerech pro rekreační areály a průmyslové zóny.',
      prod_6_spec: 'Rychlá instalace bez nutnosti náročných zemních prací',
      kombi_tag: 'Vlajková loď výroby',
      kombi_title: 'Systém čistíren KOMBIBLOK®',
      kombi_desc: 'KOMBIBLOK® představuje ucelenou řadu kompaktních biologických čistíren odpadních vod. Spojuje v jedné kompaktní stavebně-technologické jednotce předčištění, aktivaci, nitrifikaci, denitrifikaci i dosazování.',
      kombi_li_1: 'Minimální zastavěná plocha oproti konvenčním rozsáhlým čistírnám',
      kombi_li_2: 'Vysoká účinnost čištění s rezervou splňující nejpřísnější limity EU',
      kombi_li_3: 'Automatizovaný provoz s nízkou spotřebou elektrické energie',
      kombi_li_4: 'Modulární rozšiřitelnost při postupném nárůstu obyvatel v obci',
      kombi_btn: 'Dimenzovat KOMBIBLOK pro vaši obec',
      calc_eyebrow: 'Interaktivní dimenzování',
      calc_heading: 'Kalkulátor kapacity čistírny (EO)',
      calc_subtext: 'Zvolte předpokládaný počet ekvivalentních obyvatel a typ objektu – kalkulátor vám doporučí optimální technologickou sestavu.',
      calc_lbl_range: 'Počet ekvivalentních obyvatel (EO)',
      calc_lbl_type: 'Požadovaná technologická konfigurace',
      calc_res_badge: 'Doporučená technologická specifikace',
      calc_m_tank: 'Doporučená nádrž:',
      calc_m_screens: 'Předčištění:',
      calc_m_aeration: 'Aerace & separace:',
      calc_m_sludge: 'Kalové hospodářství:',
      calc_btn_quote: 'Poptat tuto konfiguraci ČOV',
      link_eyebrow: 'Certifikované prostupy',
      link_heading: 'Originální modulární těsnění LINK-SEAL®',
      link_subtext: 'Špičkové těsnění prostupů technologického potrubí stavebními konstrukcemi čistíren, nádrží a armaturních komor.',
      ls_1_title: 'Hydrostatický tlak až 50 m',
      ls_1_desc: 'Pryžové elastomerové bloky stlačované nerezovými šrouby garantují absolutní vodotěsnost a plynotěsnost prostupu.',
      ls_2_title: 'TLumí vibrace a hluk',
      ls_2_desc: 'Elastické uložení izoluje chvění od čerpadel a kompresorů, čímž chrání stavební konstrukce před praskáním.',
      ls_3_title: 'Materiálové varianty',
      ls_3_desc: 'EPDM pro pitnou a odpadní vodu, Nitril pro ropné látky a silikonové směsi pro vysoké teploty až do 200 °C.',
      contact_eyebrow: 'Spojte se s námi',
      contact_heading: 'Kontaktní a poptávkové centrum',
      contact_subtext: 'Odborníci z EKOPROGRES HRANICE a.s. vám pomohou s projektem, studií proveditelnosti i dodávkou technologie.',
      c_company_title: 'EKOPROGRES HRANICE a.s.',
      c_box_data: 'Datová schránka: nscuyhi',
      c_direct_title: 'Přímé kontakty',
      form_title: 'Nezávazná technologická poptávka',
      form_desc: 'Vyplňte základní údaje k záměru, zpracujeme technický návrh.',
      form_name: 'Jméno a příjmení *',
      form_org: 'Obec / Společnost',
      form_email: 'E-mail *',
      form_phone: 'Telefon *',
      form_tech: 'Poptávané zařízení',
      form_msg: 'Specifikace záměru, kapacita EO či lokalita *',
      form_submit: 'Odeslat vodohospodářskou poptávku',
      map_bar_title: 'Sídlo společnosti: Třída 1. máje 1013, 753 01 Hranice',
      map_bar_link: 'Zobrazit na Mapy.cz →',
      footer_desc: 'Významný český výrobce a technologický dodavatel investičních celků ve vodohospodářství. Čistírny odpadních vod KOMBIBLOK®, sedimentační nádrže a těsnění LINK-SEAL®.',
      footer_rights: 'Všechna práva vyhrazena.',
      footer_nav_title: 'Navigace',
      footer_contact_title: 'Kontaktní údaje',
      footer_databox: 'Datová schránka: nscuyhi'
    },
    en: {
      top_founded: 'Tradition since 1990',
      top_standards: 'Standards EN ISO 9001',
      top_location: 'Headquarters Hranice, Czech Republic',
      nav_about: 'About Us',
      nav_products: 'Product Range',
      nav_kombiblok: 'WWTP KOMBIBLOK®',
      nav_calc: 'PE Dimensioning',
      nav_linkseal: 'Link-Seal® Seals',
      nav_contact: 'Inquiry',
      hero_badge: 'Water Treatment Technologies',
      hero_badge_sub: 'Founded 1990 in Hranice',
      hero_title: 'Technology Matters: Complete Solutions for Wastewater and Water Treatment Plants',
      hero_desc: 'EKOPROGRES HRANICE a.s. provides complete technological deliveries of water management investment complexes. We manufacture proven sedimentation tanks, KOMBIBLOK® wastewater treatment plants, mechanical screens, and certified LINK-SEAL® penetration seals.',
      hero_btn_catalog: 'Technology Catalog',
      hero_btn_calc: 'Municipal PE Calculator',
      spec_systems: 'WWTP Systems',
      spec_systems_val: 'KOMBIBLOK® 50–50,000 PE',
      spec_sealing: 'Penetration Seals',
      spec_sealing_val: 'LINK-SEAL® Original',
      spec_experience: 'Experience',
      spec_experience_val: 'Over 35 Years on the Market',
      stat_proven: 'Proven Solutions',
      stat_proven_desc: 'Hundreds of successful installations for municipalities and industries across Europe.',
      stat_founded_lbl: 'Year founded as the first private joint-stock co. in water management',
      stat_years_lbl: 'Years of continuous engineering and tank manufacturing',
      stat_eo_lbl: 'Maximum capacity of municipal KOMBIBLOK® treatment complexes',
      stat_czech_lbl: 'Czech engineering continuing the industrial tradition of Hranice',
      about_eyebrow: 'Profile & History',
      about_heading: 'EKOPROGRES HRANICE a.s.',
      about_subtext: 'The company is headquartered in Hranice, a town with a long tradition in water supply, pumps and piping.',
      feat_1_title: 'Turnkey Water Deliveries',
      feat_1_desc: 'We provide complete technological outfitting of wastewater treatment plants, pumping stations and waterworks including assembly and commissioning.',
      feat_2_title: 'Atypical Machinery & Sedimentation',
      feat_2_desc: 'We manufacture specialized equipment proven in long-term operation: sedimentation tanks, scraper bridges and mechanical screen systems.',
      feat_3_title: 'Long Service Life & Service',
      feat_3_desc: 'Thanks to robust stainless steel design and high-grade corrosion protection, our installations work reliably for decades.',
      cat_eyebrow: 'Technology Catalog',
      cat_heading: 'Water Management Equipment Range',
      cat_subtext: 'Filter equipment categories or explore technical specifications by clicking on any card.',
      cat_all: 'All Technologies',
      cat_sedim: 'Sedimentation Tanks',
      cat_cov: 'WWTP KOMBIBLOK®',
      cat_cesle: 'SH Mechanical Screens',
      cat_link: 'LINK-SEAL® Seals',
      cat_sedim_tag: 'Sedimentation',
      cat_cov_tag: 'Wastewater Treatment',
      cat_cesle_tag: 'Pre-treatment',
      cat_link_tag: 'Penetration Seals',
      prod_1_title: 'Horizontal and Radial Sedimentation Tanks',
      prod_1_desc: 'Full range of tanks for wastewater treatment equipped with longitudinal or circular scraper bridges.',
      prod_1_spec: 'Material: stainless steel / epoxy-coated steel',
      prod_2_title: 'Compact Treatment Plant KOMBIBLOK®',
      prod_2_desc: 'Integrated biological stage with fine-bubble aeration and sludge separation for towns and industry.',
      prod_2_spec: 'Capacity: 50 to 50,000 population equivalents (PE)',
      prod_3_title: 'Mechanically Cleaned Screens Type SH',
      prod_3_desc: 'Capturing floating and dragged debris in intake channels of sewage plants and small hydro stations.',
      prod_3_spec: 'Automated operation with screenings wash press',
      prod_4_title: 'Modular Penetration Seal LINK-SEAL®',
      prod_4_desc: 'Permanent elastic hydrostatic sealing of circular pipe penetrations through concrete walls against water and gas.',
      prod_4_spec: 'Pressure resistance up to 5 bar (50 m water column)',
      prod_5_title: 'Scraper Bridges and Grit Chambers',
      prod_5_desc: 'Removal of settled grit and floating scums with central or peripheral driving units.',
      prod_5_spec: 'High scraping efficiency with minimal energy demand',
      prod_6_title: 'Containerized & Custom Water Plants',
      prod_6_desc: 'Compact mobile solutions in modular containers for recreational resorts, camps and industrial parks.',
      prod_6_spec: 'Fast installation without extensive civil groundwork',
      kombi_tag: 'Flagship Technology',
      kombi_title: 'KOMBIBLOK® Wastewater Treatment System',
      kombi_desc: 'KOMBIBLOK® represents a comprehensive series of compact biological wastewater treatment systems combining pre-treatment, aeration, nitrification, denitrification and clarification in one single unit.',
      kombi_li_1: 'Minimal building footprint compared to conventional spread plants',
      kombi_li_2: 'High purification efficiency strictly meeting demanding EU effluent limits',
      kombi_li_3: 'Fully automated process with low electrical energy consumption',
      kombi_li_4: 'Modular expansion capability for future municipal growth',
      kombi_btn: 'Dimension KOMBIBLOK for your municipality',
      calc_eyebrow: 'Interactive Sizing',
      calc_heading: 'WWTP Capacity Calculator (PE)',
      calc_subtext: 'Select your target population equivalent and site requirements – our calculator will recommend the optimal equipment setup.',
      calc_lbl_range: 'Population Equivalent (PE)',
      calc_lbl_type: 'Required Plant Configuration',
      calc_res_badge: 'Recommended Technical Specification',
      calc_m_tank: 'Recommended Tank:',
      calc_m_screens: 'Pre-treatment:',
      calc_m_aeration: 'Aeration & Separation:',
      calc_m_sludge: 'Sludge Management:',
      calc_btn_quote: 'Inquire About This Setup',
      link_eyebrow: 'Certified Penetrations',
      link_heading: 'Original Modular Seals LINK-SEAL®',
      link_subtext: 'Top-tier pipe penetration seals through structural walls of reservoirs, sewage plants and valve chambers.',
      ls_1_title: 'Hydrostatic Pressure up to 50 m',
      ls_1_desc: 'Elastomeric rubber blocks compressed with stainless bolts guarantee permanent gas- and watertight performance.',
      ls_2_title: 'Damps Vibrations & Noise',
      ls_2_desc: 'Resilient cushioning isolates pump and compressor vibrations, protecting structural concrete from cracks.',
      ls_3_title: 'Material Formulations',
      ls_3_desc: 'EPDM for potable and wastewater, Nitrile for petroleum hydrocarbons and silicone for high temperatures up to 200 °C.',
      contact_eyebrow: 'Contact Us',
      contact_heading: 'Contact & Inquiry Center',
      contact_subtext: 'Experts from EKOPROGRES HRANICE a.s. will gladly assist with feasibility studies, project design and equipment delivery.',
      c_company_title: 'EKOPROGRES HRANICE a.s.',
      c_box_data: 'Data Box: nscuyhi',
      c_direct_title: 'Direct Contacts',
      form_title: 'Technological Inquiry Form',
      form_desc: 'Fill in your project specifications and we will prepare a technical proposal.',
      form_name: 'Full Name *',
      form_org: 'Municipality / Company',
      form_email: 'E-mail *',
      form_phone: 'Phone *',
      form_tech: 'Requested Equipment',
      form_msg: 'Project details, PE capacity or location *',
      form_submit: 'Submit Water Treatment Inquiry',
      map_bar_title: 'Company Headquarters: Třída 1. máje 1013, Hranice, Czech Republic',
      map_bar_link: 'View on Mapy.cz →',
      footer_desc: 'Renowned Czech manufacturer and technological supplier of complete water management installations. Wastewater treatment plants KOMBIBLOK®, sedimentation tanks and LINK-SEAL® seals.',
      footer_rights: 'All rights reserved.',
      footer_nav_title: 'Navigation',
      footer_contact_title: 'Contact Details',
      footer_databox: 'Data Box: nscuyhi'
    },
    de: {
      top_founded: 'Tradition seit 1990',
      top_standards: 'Normen EN ISO 9001',
      top_location: 'Sitz Hranice, Tschechische Republik',
      nav_about: 'Über uns',
      nav_products: 'Lieferprogramm',
      nav_kombiblok: 'Kläranlage KOMBIBLOK®',
      nav_calc: 'EW Dimensionierung',
      nav_linkseal: 'Link-Seal® Dichtungen',
      nav_contact: 'Anfrage',
      hero_badge: 'Wasserwirtschaftliche Technologien',
      hero_badge_sub: 'Gegründet 1990 in Hranice',
      hero_title: 'Technologie entscheidet: Komplettlösungen für Kläranlagen und Wasseraufbereitung',
      hero_desc: 'EKOPROGRES HRANICE a.s. liefert technologische Ausrüstungen für wasserwirtschaftliche Investitionskomplexe. Wir fertigen bewährte Sedimentationsbecken, Kompaktkläranlagen KOMBIBLOK®, maschinelle Rechen und zertifizierte LINK-SEAL® Ringraumdichtungen.',
      hero_btn_catalog: 'Technologiekatalog',
      hero_btn_calc: 'EW-Rechner für Kommunen',
      spec_systems: 'Klärsysteme',
      spec_systems_val: 'KOMBIBLOK® 50–50.000 EW',
      spec_sealing: 'Ringraumdichtungen',
      spec_sealing_val: 'LINK-SEAL® Original',
      spec_experience: 'Erfahrung',
      spec_experience_val: 'Über 35 Jahre am Markt',
      stat_proven: 'Bewährte Lösungen',
      stat_proven_desc: 'Hunderte erfolgreiche Realisierungen für Städte, Gemeinden und Industrie.',
      stat_founded_lbl: 'Gründungsjahr als erste private AG der Wasserwirtschaft',
      stat_years_lbl: 'Jahre kontinuierlicher Behälter- und Maschinenfertigung',
      stat_eo_lbl: 'Maximale Auslegungskapazität kommunaler KOMBIBLOK® Anlagen',
      stat_czech_lbl: 'Tschechische Ingenieurskunst mit Standorttradition in Hranice',
      about_eyebrow: 'Profil & Geschichte',
      about_heading: 'EKOPROGRES HRANICE a.s.',
      about_subtext: 'Der Sitz befindet sich in Hranice – einer Stadt mit langjähriger Tradition im Wasserleitungs-, Pumpen- und Armaturenbau.',
      feat_1_title: 'Schlüsselfertige Wasserlieferungen',
      feat_1_desc: 'Wir liefern die komplette maschinentechnische Ausrüstung von Kläranlagen, Pumpwerken und Wasserwerken inklusive Montage.',
      feat_2_title: 'Sondermaschinen & Sedimentation',
      feat_2_desc: 'Wir bauen betriebsbewährte Maschinen: Sedimentationsbecken, Räumerbrücken und maschinell gereinigte Rechenanlagen.',
      feat_3_title: 'Lange Lebensdauer & Service',
      feat_3_desc: 'Dank robuster Edelstahlausführung und wirksamem Korrosionsschutz arbeiten unsere Anlagen über Jahrzehnte störungsfrei.',
      cat_eyebrow: 'Technologiekatalog',
      cat_heading: 'Lieferprogramm für Wasserwirtschaft',
      cat_subtext: 'Filtern Sie nach Kategorien oder informieren Sie sich detailliert über unsere Technologien.',
      cat_all: 'Alle Technologien',
      cat_sedim: 'Sedimentationsbecken',
      cat_cov: 'Kläranlagen KOMBIBLOK®',
      cat_cesle: 'Maschinelle Rechen SH',
      cat_link: 'LINK-SEAL® Dichtungen',
      cat_sedim_tag: 'Sedimentation',
      cat_cov_tag: 'Abwasserreinigung',
      cat_cesle_tag: 'Vorreinigung',
      cat_link_tag: 'Ringraumdichtungen',
      prod_1_title: 'Horizontale und radiale Sedimentationsbecken',
      prod_1_desc: 'Beckenbaureihen für Kläranlagen mit fahrbaren Räumerbrücken zur Schlammräumung.',
      prod_1_spec: 'Werkstoff: Edelstahl / beschichteter Stahl',
      prod_2_title: 'Kompaktkläranlage KOMBIBLOK®',
      prod_2_desc: 'Voll integrierte biologische Stufe mit Feinblasenbelüftung und Schlammabtrennung.',
      prod_2_spec: 'Kapazität: 50 bis 50.000 Einwohnerwerte (EW)',
      prod_3_title: 'Maschinell geräumte Rechen Typ SH',
      prod_3_desc: 'Rückhaltung von Grobstoffen in Zulaufkanälen von Kläranlagen und Wasserkraftwerken.',
      prod_3_spec: 'Automatischer Betrieb mit integrierter Rechengutpresse',
      prod_4_title: 'Modulare Ringraumdichtung LINK-SEAL®',
      prod_4_desc: 'Dauerhafte elastische Abdichtung von Rohrdurchführungen durch Bauwerke gegen drückendes Wasser.',
      prod_4_spec: 'Druckdichtigkeit bis 5 bar (50 m Wassersäule)',
      prod_5_title: 'Räumerbrücken und Sandfänge',
      prod_5_desc: 'Abscheidung von Sand und Schwimmstoffen mit Zentral- oder Peripherieantrieb.',
      prod_5_spec: 'Hoher Räumwirkungsgrad bei minimalem Energieaufwand',
      prod_6_title: 'Containerisierte Kläranlagen',
      prod_6_desc: 'Mobile Containerlösungen für Freizeitanlagen, Gewerbegebiete und temporäre Einsätze.',
      prod_6_spec: 'Schnelle Montage ohne umfangreiche Tiefbauarbeiten',
      kombi_tag: 'Hauptprodukt',
      kombi_title: 'Kläranlagensystem KOMBIBLOK®',
      kombi_desc: 'KOMBIBLOK® ist eine geschlossene Reihe kompakter biologischer Kläranlagen, die Vorreinigung, Belegung, Nitrifikation, Denitrifikation und Nachklärung in einer kompakten Einheit vereint.',
      kombi_li_1: 'Minimaler Flächenbedarf gegenüber herkömmlichen Großkläranlagen',
      kombi_li_2: 'Hohe Reinigungsleistung mit Einhaltung strengster EU-Grenzwerte',
      kombi_li_3: 'Vollautomatischer Betrieb mit niedrigem Stromverbrauch',
      kombi_li_4: 'Modulare Erweiterbarkeit bei steigender Einwohnerzahl',
      kombi_btn: 'KOMBIBLOK für Ihre Gemeinde auslegen',
      calc_eyebrow: 'Interaktive Auslegung',
      calc_heading: 'Kapazitätsrechner Kläranlage (EW)',
      calc_subtext: 'Wählen Sie die geplante Einwohnerzahl und Anlagenart – der Rechner empfiehlt sofort die passende Technologie.',
      calc_lbl_range: 'Einwohnerwerte (EW)',
      calc_lbl_type: 'Gewünschte Anlagenkonfiguration',
      calc_res_badge: 'Empfohlene technische Spezifikation',
      calc_m_tank: 'Empfohlenes Becken:',
      calc_m_screens: 'Vorreinigung:',
      calc_m_aeration: 'Belüftung & Abscheidung:',
      calc_m_sludge: 'Schlammwirtschaft:',
      calc_btn_quote: 'Diese Konfiguration anfragen',
      link_eyebrow: 'Zertifizierte Durchführungen',
      link_heading: 'Original Ringraumdichtungen LINK-SEAL®',
      link_subtext: 'Erstklassige Abdichtung von Rohrdurchführungen durch Bauwerkswände von Behältern und Schächten.',
      ls_1_title: 'Hydrostatischer Druck bis 50 m',
      ls_1_desc: 'Gummielastomer-Elemente mit Edelstahlschrauben garantieren absolute Wasser- und Gasdichtigkeit.',
      ls_2_title: 'Dämpft Schwingungen und Lärm',
      ls_2_desc: 'Elastische Lagerung entkoppelt Pumpenschwingungen und schützt Bauwerke vor Rissbildung.',
      ls_3_title: 'Werkstoffvarianten',
      ls_3_desc: 'EPDM für Trink- und Abwasser, Nitril für Öle und Silikonmischungen für Temperaturen bis 200 °C.',
      contact_eyebrow: 'Kontakt aufnehmen',
      contact_heading: 'Kontakt- und Anfragezentrum',
      contact_subtext: 'Die Experten von EKOPROGRES HRANICE a.s. beraten Sie gern bei Studien, Planung und Lieferung.',
      c_company_title: 'EKOPROGRES HRANICE a.s.',
      c_box_data: 'Elektronisches Postfach: nscuyhi',
      c_direct_title: 'Direktkontakte',
      form_title: 'Unverbindliche Technologieanfrage',
      form_desc: 'Tragen Sie die Eckdaten Ihres Vorhabens ein, wir erarbeiten einen technischen Vorschlag.',
      form_name: 'Vor- und Nachname *',
      form_org: 'Gemeinde / Unternehmen',
      form_email: 'E-Mail *',
      form_phone: 'Telefon *',
      form_tech: 'Gewünschte Ausrüstung',
      form_msg: 'Projektbeschreibung, Kapazität EW oder Standort *',
      form_submit: 'Wasserwirtschaftliche Anfrage senden',
      map_bar_title: 'Firmensitz: Třída 1. máje 1013, Hranice, Tschechische Republik',
      map_bar_link: 'Auf Mapy.cz ansehen →',
      footer_desc: 'Bedeutender tschechischer Hersteller und Lieferant wasserwirtschaftlicher Investitionskomplexe. Kläranlagen KOMBIBLOK®, Sedimentationsbecken und LINK-SEAL® Dichtungen.',
      footer_rights: 'Alle Rechte vorbehalten.',
      footer_nav_title: 'Navigation',
      footer_contact_title: 'Kontaktdaten',
      footer_databox: 'Postfach: nscuyhi'
    }
  };

  var currentLang = 'cs';
  try {
    var savedLang = localStorage.getItem('ekoprogres_lang');
    if (savedLang && translations[savedLang]) {
      currentLang = savedLang;
    }
  } catch (e) {}

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem('ekoprogres_lang', lang);
    } catch (e) {}

    var dict = translations[lang];
    var translatable = document.querySelectorAll('[data-i18n]');
    translatable.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    var langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    updateCalculator();
  }

  var langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    var buttons = langSwitch.querySelectorAll('.lang-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });
  }

  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      primaryNav.classList.toggle('is-active');
    });

    var navItems = primaryNav.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        primaryNav.classList.remove('is-active');
      });
    });
  }

  var fYear = document.getElementById('fYear');
  if (fYear) {
    fYear.textContent = new Date().getFullYear();
  }

  var reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  var counters = document.querySelectorAll('.pstat-num');
  var countersDone = false;

  function runCounters() {
    if (countersDone) return;
    countersDone = true;

    counters.forEach(function (c) {
      var target = parseInt(c.getAttribute('data-target'), 10) || 0;
      var cur = 0;
      var step = Math.max(1, Math.floor(target / 40));
      if (target > 1900 && target < 2050) {
        cur = 1950;
        step = 1;
      }
      var timer = setInterval(function () {
        cur += step;
        if (cur >= target) {
          c.textContent = target;
          clearInterval(timer);
        } else {
          c.textContent = cur;
        }
      }, 25);
    });
  }

  var statsBar = document.querySelector('.portal-stats-bar');
  if (statsBar && 'IntersectionObserver' in window) {
    var statsObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          runCounters();
          statsObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    statsObs.observe(statsBar);
  } else {
    runCounters();
  }

  var filterPills = document.querySelectorAll('.filter-pill');
  var catCards = document.querySelectorAll('.cat-card');

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      filterPills.forEach(function (p) { p.classList.remove('is-active'); });
      pill.classList.add('is-active');

      var cat = pill.getAttribute('data-cat');
      catCards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  var eoRange = document.getElementById('eoRange');
  var covType = document.getElementById('covType');
  var calcHeading = document.getElementById('calcHeading');
  var calcTank = document.getElementById('calcTank');
  var calcScreens = document.getElementById('calcScreens');
  var calcAeration = document.getElementById('calcAeration');
  var calcSludge = document.getElementById('calcSludge');

  function updateCalculator() {
    if (!eoRange || !calcHeading) return;

    var eo = eoRange.value;
    var type = covType.value;

    if (currentLang === 'en') {
      if (eo === 'industrial') {
        calcHeading.textContent = 'Heavy Industrial Wastewater Treatment Plant with Chemical Flotation';
        calcTank.textContent = 'Modular Stainless AISI 316L Tankage with Equalization Basin';
        calcScreens.textContent = 'Rotary Drum Fine Screens SH (0.5 mm slot)';
        calcAeration.textContent = 'High-rate Dissolved Air Flotation + MBBR Biofilm';
        calcSludge.textContent = 'Centrifugal Decanter or Screw Sludge Press';
      } else if (eo === '50' || eo === '500') {
        calcHeading.textContent = 'Compact Treatment Unit KOMBIBLOK® Model KB-' + eo;
        calcTank.textContent = 'Prefabricated Reinforced Concrete Tank or Modular Polypropylene';
        calcScreens.textContent = 'Manual / Mechanically raked basket screens';
        calcAeration.textContent = 'Fine-bubble disc diffusers + integrated clarification';
        calcSludge.textContent = 'Aerobically stabilized sludge holding compartment';
      } else {
        calcHeading.textContent = 'Municipal WWTP Complex KOMBIBLOK® Model KB-' + eo + ' PE';
        calcTank.textContent = 'Circular In-situ Concrete / Stainless Radial Tank with Scraper';
        calcScreens.textContent = 'Mechanically Cleaned Screen SH with Screenings Press';
        calcAeration.textContent = 'Fine-bubble Membrane Grids + Anoxic Denitrification';
        calcSludge.textContent = 'Gravity Sludge Thickener with Mechanical Dewatering';
      }
    } else if (currentLang === 'de') {
      if (eo === 'industrial') {
        calcHeading.textContent = 'Industriekläranlage mit chemisch-physikalischer Flotation';
        calcTank.textContent = 'Modulare Edelstahlbecken AISI 316L mit Ausgleichsbecken';
        calcScreens.textContent = 'Feinrechen / Spaltsiebanlage Typ SH (0,5 mm Spalt)';
        calcAeration.textContent = 'Druckentspannungsflotation + MBBR Festbett';
        calcSludge.textContent = 'Schneckenschlammpresse mit Flockungsmittelstation';
      } else if (eo === '50' || eo === '500') {
        calcHeading.textContent = 'Kompaktkläranlage KOMBIBLOK® Modell KB-' + eo + ' EW';
        calcTank.textContent = 'Stahlbeton-Fertigbecken oder modulare Verbundbehälter';
        calcScreens.textContent = 'Siebkorb oder Vertikalrechen mit automatischer Spülung';
        calcAeration.textContent = 'Feinblasige Tellerbelüfter + integrierte Nachklärung';
        calcSludge.textContent = 'Aerobe Schlammstabilisierungszone';
      } else {
        calcHeading.textContent = 'Kommunaler Kläranlagenkomplex KOMBIBLOK® KB-' + eo + ' EW';
        calcTank.textContent = 'Rundbecken Stahlbeton / Edelstahl mit Räumerbrücke';
        calcScreens.textContent = 'Maschinell geräumte Rechen Typ SH mit Waschpresse';
        calcAeration.textContent = 'Feinblasen-Membranbelüftungsgitter + Denitrifikation';
        calcSludge.textContent = 'Schwerkraft-Schlammeindicker mit Entwässerung';
      }
    } else {
      if (eo === 'industrial') {
        calcHeading.textContent = 'Průmyslová čistírna odpadních vod s chemickou flotací a neutralizací';
        calcTank.textContent = 'Modulární nerezové nádrže AISI 316L s homogenizační jímkou';
        calcScreens.textContent = 'Rotační jemná sítová česla SH s mezerou 0,5 mm';
        calcAeration.textContent = 'Tlakovzdušná flotace DAF + nosiče biomasy MBBR';
        calcSludge.textContent = 'Šnekový odvodňovací lis kalu s flokulační stanicí';
      } else if (eo === '50' || eo === '500') {
        calcHeading.textContent = 'Kompaktní čistírna KOMBIBLOK® typ KB-' + eo + ' pro menší aglomerace';
        calcTank.textContent = 'Železobetonová prefabrikovaná nebo celonerezová nádrž';
        calcScreens.textContent = 'Ručně nebo strojně stíraný česlicový koš';
        calcAeration.textContent = 'Jemnobublinné aerační talíře + integrované dosazování';
        calcSludge.textContent = 'Aerobní stabilizační kalojem s periodickým odtahem';
      } else {
        calcHeading.textContent = 'Komunální čistírenský celek KOMBIBLOK® model KB-' + eo + ' EO';
        calcTank.textContent = 'Kruhový monolitický železobeton / nerez s pojezdovým mostem';
        calcScreens.textContent = 'Strojně stírané česle typu SH s integrovaným lisem shrabků';
        calcAeration.textContent = 'Jemnobublinný aerační rošt + anoxická denitrifikace';
        calcSludge.textContent = 'Gravitační zahušťovač kalu se strojním odvodněním';
      }
    }
  }

  if (eoRange) eoRange.addEventListener('change', updateCalculator);
  if (covType) covType.addEventListener('change', updateCalculator);

  var copyBtns = document.querySelectorAll('.btn-copy-tag');
  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var val = btn.getAttribute('data-copy');
      if (navigator.clipboard && val) {
        navigator.clipboard.writeText(val).then(function () {
          var orig = btn.textContent;
          btn.textContent = 'OK!';
          setTimeout(function () {
            btn.textContent = orig;
          }, 2000);
        });
      }
    });
  });

  var covForm = document.getElementById('covForm');
  var formFeedback = document.getElementById('formFeedback');
  if (covForm) {
    covForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('covName').value;
      var org = document.getElementById('covOrg').value;
      var email = document.getElementById('covEmail').value;
      var phone = document.getElementById('covPhone').value;
      var tech = document.getElementById('covTech').value;
      var msg = document.getElementById('covMsg').value;

      var mailSubject = encodeURIComponent('Poptávka ČOV / technologie: ' + tech);
      var mailBody = encodeURIComponent(
        'Jméno: ' + name + '\n' +
        'Organizace: ' + org + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefon: ' + phone + '\n' +
        'Technologie: ' + tech + '\n\n' +
        'Zadání:\n' + msg
      );

      window.location.href = 'mailto:ekoprogres@ekoprogres.cz?subject=' + mailSubject + '&body=' + mailBody;

      if (formFeedback) {
        formFeedback.textContent = currentLang === 'en'
          ? 'Inquiry prepared. Thank you, our technical department will contact you soon.'
          : (currentLang === 'de'
            ? 'Anfrage vorbereitet. Vielen Dank, unsere Technikabteilung wird sich in Kürze melden.'
            : 'Poptávka byla připravena k odeslání. Děkujeme, technické oddělení vás bude kontaktovat.');
        formFeedback.classList.add('is-visible');
      }
      covForm.reset();
    });
  }

  applyLanguage(currentLang);
})();
