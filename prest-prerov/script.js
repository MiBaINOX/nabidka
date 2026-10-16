(function () {
  'use strict';

  var translations = {
    cs: {
      nav_divisions: 'Výrobní divize',
      nav_tech: 'Technologie & kapacity',
      nav_certs: 'Certifikace',
      nav_refs: 'Klienti',
      nav_team: 'Kontaktní osoby',
      btn_inquiry: 'Poptat výrobu',
      hero_badge: 'Strojírenská a aparátová výroba od roku 1999 • Přerov',
      hero_title: 'Tlakové nádoby, procesní aparáty a nerezové celky',
      hero_lead: 'Společnost PREST PŘEROV a.s. je předním certifikovaným dodavatelem vyhrazených tlakových zařízení, kolon, výměníků, technologických van a svařenců pro chemický, petrochemický, energetický a kolejový průmysl v celé Evropě.',
      hero_btn_portfolio: 'Technické portfolio',
      hero_btn_certs: 'Mezinárodní certifikace',
      param_diam: 'Max. průměr nádob',
      param_weight: 'Max. hmotnost kusu',
      param_len: 'Max. délka aparátů',
      v_tag: 'Vyhrazená tlaková zařízení',
      v_title: 'Tlakové nádoby dle EN 13445 a AD 2000',
      m_years: 'Let zkušeností v oboru',
      m_years_sub: 'Založeno v roce 1999 v Přerově',
      m_emp: 'Kvalifikovaných specialistů',
      m_emp_sub: 'Svářečští inženýři IWE/EWE a personál EWT',
      m_certs: 'Auditovaných certifikací',
      m_certs_sub: 'ISO 9001, EN 1090-2, EN 15085-2, ČD V95/5',
      m_ndt: 'NDT defektoskopie svarů',
      m_ndt_sub: 'Rentgen (RT), ultrazvuk (UT), kapilární (PT)',
      div_kicker: 'Výrobní program',
      div_title: 'Specializované výrobní divize',
      div_desc: 'Přepínejte mezi klíčovými obory a prozkoumejte technologické možnosti a realizované aparáty společnosti PREST PŘEROV a.s.',
      tab_vessels: 'Tlakové nádoby',
      tab_stainless: 'Nerezové výrobky',
      tab_energy: 'Energetika & ekologie',
      tab_tanks: 'Technologické vany',
      tab_rail: 'Kolejová vozidla & kotle',
      tab_rolling: 'Skružování & ohýbání',
      p1_badge: 'Certifikace PED 2014/68/EU',
      p1_title: 'Tlakové nádoby a chemické kolony',
      p1_p1: 'Vyrábíme vyhrazená tlaková zařízení pro chemický, energetický a zpracovatelský průmysl. Návrh a výroba probíhá v souladu s evropskými normami ČSN EN 13445, německým předpisem AD 2000 Merkblatt nebo americkým standardem ASME Code.',
      p2_badge: 'Korozivzdorné oceli',
      p2_title: 'Aparatura a potrubí z ušlechtilých nerezových ocelí',
      p2_p1: 'Kompletní dodávky technologických aparátů, potrubních rozvodů a výměníků tepla z austenitických nerezových ocelí AISI 304, AISI 316L i duplexních materiálů pro farmacii a chemii.',
      p3_badge: 'Ekologické technologie',
      p3_title: 'Absorbéry, cyklony a kouřovodné trasy',
      p3_p1: 'Výroba velkorozměrových spalinových kanálů, potrubních tras, odprašovacích cyklonů a absorpčních věží pro projekty odsiřování a denitrifikace uhelných i plynových elektráren.',
      p4_badge: 'Průmyslová chemie',
      p4_title: 'Mořicí, odmašťovací a technologické vany',
      p4_p1: 'Konstrukce tuhých ocelových a nerezových van pro povrchové úpravy kovů, zinkovny a galvanické linky. Možnost integrace vnitřních topných registrů a míchacích okruhů.',
      p5_badge: 'ČSN EN 15085-2 (CL1)',
      p5_title: 'Generální opravy parních kotlů a kolejových vozidel',
      p5_p1: 'Unikátní technologické know-how pro výrobu a rekonstrukce nýtovaných i svařovaných parních kotlů historických lokomotiv (např. řady 475.101 Šlechtična) a cisteren nákladních vozů dle předpisů ČD V 95/5 a RID.',
      p6_badge: 'Strojní kapacity',
      p6_title: 'CNC skružování a ohýbání tlustých plechů',
      p6_p1: 'Přesné zakružování válcových a kónických plášťů aparátů na hydraulických čtyřválcových zakružovačkách s předohybem obou konců bez rovné plošky.',
      spec_diam_label: 'Maximální průměr:',
      spec_weight_label: 'Maximální hmotnost:',
      spec_mat_label: 'Materiály:',
      spec_surface_label: 'Povrchová úprava:',
      spec_pure_label: 'Čistota prostředí:',
      spec_ref_label: 'Významné reference:',
      spec_comp_label: 'Součásti:',
      spec_lining_label: 'Obložení:',
      spec_leak_label: 'Bezpečnost:',
      spec_dr_label: 'Drážní certifikace:',
      spec_craft_label: 'Řemeslná tradice:',
      spec_thick_label: 'Tloušťka plechu:',
      spec_width_label: 'Délka válců:',
      spec_prof_label: 'Max. průměr trubek:',
      tbl1_title: 'Tvářecí parametry zakružování plechů (běžná ocel, mez kluzu 240 N/mm²)',
      th_machine: 'Tvářecí stroj',
      th_roll_len: 'Točná délka',
      th_top_roll: 'Ø horního válce',
      th_work_len: 'Délka zakružení',
      th_in_diam: 'Vnitřní průměr',
      th_prebend: 'Tloušťka předohyb',
      th_bend: 'Tloušťka ohyb',
      tbl2_title: 'Zakružování ocelových profilů a trubek (AKYAPAK APK 180 a APK 61)',
      th_machine_prof: 'Stroj',
      th_prof_type: 'Druh profilu',
      th_prof_max: 'Maximální rozměr profilu',
      th_min_diam: 'Min. vnitřní průměr Ø',
      th_notes: 'Technologická poznámka',
      p_tubes: 'Kruhové trubky',
      note_spirals: 'Možnost zakružování do spirál',
      p_upn: 'Nosníky UPN a IPN',
      note_beam: 'Ohyb v rovině i napříč rovinou',
      p_angles: 'Úhelníky L',
      note_flange: 'Ohýbání na vnějším i vnitřním křídle',
      p_bars: 'Čtverec a kruh plný',
      note_solid: 'Plné tyčové materiály',
      p_tubes_mid: 'Kruhové trubky a jekly',
      note_box: 'Jekly do 60 × 60 × 3 mm',
      p_angles_mid: 'Úhelníky L a profily T',
      note_precise: 'Přesné tváření bez deformace přírub',
      p_bars_mid: 'Tyče plné',
      note_radius: 'Hladký rádius bez vroubkování',
      exp_label: 'Technolog a vedoucí výroby pro skružování',
      exp_desc: 'Bližší informace, technologické posouzení kuželů, profilů a zakázkové nabídky skružování a strojního opracování.',

      cert_kicker: 'Auditovaná jakost',
      cert_title: 'Mezinárodní certifikace a oprávnění',
      cert_desc: 'Společnost PREST PŘEROV a.s. drží nejvyšší možné svářečské a průmyslové certifikace pro evropský trh.',
      c1_title: 'Management jakosti',
      c1_desc: 'Certifikovaný systém řízení jakosti výroby aparátů a tlakových zařízení platný do roku 2028.',
      c2_title: 'Vyšší požadavky jakosti svařování',
      c2_desc: 'Splnění komplexních požadavků na tavné svařování kovových materiálů dle mezinárodní normy.',
      c3_title: 'Ocelové konstrukce třídy EXC4',
      c3_desc: 'Nejvyšší prováděcí třída ocelových konstrukcí pro dynamicky a seismicky namáhané celky.',
      c4_title: 'Svařování kolejových vozidel',
      c4_desc: 'Certifikace pro výrobu a rekonstrukce tlakových nádob a dílů železničních kolejových vozidel.',
      c5_title: 'Dodavatel Českých drah',
      c5_desc: 'Osvědčení o technické způsobilosti dodavatele pro provozování a opravy drážních zařízení.',
      c6_title: 'Cisternové nádrže nebezpečných látek',
      c6_desc: 'Oprávnění výrobce tlakových nádrží pro železniční a silniční přepravu nebezpečných látek.',
      ref_kicker: 'Partneři a klienti',
      ref_title: 'Dlouhodobá důvěra průmyslových lídrů',
      team_kicker: 'Odborné vedení',
      team_title: 'Projektoví garanti a kontaktní osoby',
      team_desc: 'Zkušení projektoví inženýři s mezinárodní jazykovou výbavou (angličtina, němčina) pro bezproblémový průběh zakázky.',
      tm1_role: 'Vedoucí výroby • EWE / IWE',
      tm1_desc: 'Svářečský dozor IWE, řízení kapacit strojírenské haly a dozor nad skružováním.',
      tm2_role: 'Projektový manažer • English speaking',
      tm2_desc: 'Řízení mezinárodních aparátových projektů, komunikace se zahraničními zákazníky v angličtině.',
      tm3_role: 'Projektový manažer • Deutschsprachig',
      tm3_desc: 'Technicko-obchodní řízení zakázek pro německy mluvící trhy (DACH region).',
      tm4_role: 'Kontrola kvality • EWT',
      tm4_desc: 'Defektoskopie svarů, přejímky aparátů s inspekčními orgány (TÜV, TIČR, ČD) a strojní opracování.',
      tm5_role: 'Příprava CNC pálení a technologie',
      tm5_desc: 'Nesting výpalků, převod CAD dat do výrobních programů a příprava plechů.',
      tm6_role: 'Ekonom a personalista společnosti',
      tm6_desc: 'Smluvní administrativa, fakturace a personální řízení společnosti.',
      c_kicker: 'Přerov • Výrobní závod',
      c_title: 'Sídlo a výrobní areál',
      c_plant_label: 'Sídlo společnosti a výrobní závod:',
      c_hq_label: 'Sídlo společnosti:',
      c_legal_label: 'Identifikační údaje:',
      btn_copy_ico: 'Kopírovat IČO',
      c_phone_label: 'Centrála & e-mail:',
      f_title: 'Technická poptávka výroby',
      f_desc: 'Zašlete nám výkresovou dokumentaci nebo specifikaci aparátu. Naši technologové posoudí výrobní možnosti a připraví nabídku.',
      f_name: 'Jméno a příjmení / Společnost',
      f_phone: 'Telefon',
      f_email: 'E-mail',
      f_division: 'Výrobní kategorie',
      opt_cat1: 'Tlakové nádoby a chemické kolony',
      opt_cat2: 'Nerezová aparatura a výměníky',
      opt_cat3: 'Energetické a ekologické celky',
      opt_cat4: 'Technologické a mořicí vany',
      opt_cat5: 'Parní kotle kolejových vozidel',
      opt_cat6: 'CNC skružování a ohýbání plechů',
      f_msg: 'Technická specifikace zakázky',
      f_submit: 'Odeslat technickou poptávku',
      ft_desc: 'PREST PŘEROV a.s. – přední český výrobce vyhrazených tlakových nádob, kolon, výměníků tepla, nerezové aparatury a těžkých konstrukcí pro evropský průmysl.',
      ft_div_title: 'Divize',
      ft_d1: 'Tlakové nádoby a kolony',
      ft_d2: 'Nerezová zařízení',
      ft_d3: 'Energetika a odsiřování',
      ft_d4: 'Železniční parní kotle',
      ft_d5: 'CNC skružování plechů',
      ft_contact_title: 'Závod Přerov',
      ft_credit: 'Technologická prezentace těžkého strojírenství'
    },
    en: {
      nav_divisions: 'Production Divisions',
      nav_tech: 'Technology & Capacity',
      nav_certs: 'Certifications',
      nav_refs: 'Clients',
      nav_team: 'Contact Persons',
      btn_inquiry: 'Request Quotation',
      hero_badge: 'Heavy Engineering & Apparatus Manufacturing since 1999 • Přerov',
      hero_title: 'Pressure Vessels, Process Apparatus & Stainless Equipment',
      hero_lead: 'PREST PŘEROV a.s. is a certified European manufacturer of dedicated pressure vessels, columns, heat exchangers, pickling tanks, and heavy welded structures for chemical, petrochemical, energy, and railway industries.',
      hero_btn_portfolio: 'Technical Portfolio',
      hero_btn_certs: 'International Certifications',
      param_diam: 'Max. Vessel Diameter',
      param_weight: 'Max. Unit Weight',
      param_len: 'Max. Apparatus Length',
      v_tag: 'Dedicated Pressure Equipment',
      v_title: 'Pressure vessels according to EN 13445 & AD 2000',
      m_years: 'Years of Heavy Industry Experience',
      m_years_sub: 'Founded in 1999 in Přerov, Czech Republic',
      m_emp: 'Qualified Technical Specialists',
      m_emp_sub: 'Welding engineers IWE/EWE and EWT inspectors',
      m_certs: 'Audited Quality Certifications',
      m_certs_sub: 'ISO 9001, EN 1090-2, EN 15085-2, ČD V95/5',
      m_ndt: 'NDT Non-Destructive Weld Testing',
      m_ndt_sub: 'X-Ray (RT), Ultrasonic (UT), Penetrant (PT)',
      div_kicker: 'Production Program',
      div_title: 'Specialized Production Divisions',
      div_desc: 'Switch between key manufacturing divisions and explore the technical capabilities and completed apparatus of PREST PŘEROV a.s.',
      tab_vessels: 'Pressure Vessels',
      tab_stainless: 'Stainless Equipment',
      tab_energy: 'Energy & Ecology',
      tab_tanks: 'Process Tanks',
      tab_rail: 'Railway Boilers & Tanks',
      tab_rolling: 'Plate Rolling & Bending',
      p1_badge: 'Certification PED 2014/68/EU',
      p1_title: 'Pressure Vessels and Chemical Columns',
      p1_p1: 'We manufacture dedicated pressure equipment for the chemical, petrochemical, and energy sectors. Engineering and fabrication comply with EN 13445, German AD 2000 Merkblatt, or American ASME Code.',
      p2_badge: 'Stainless Steels',
      p2_title: 'Apparatus and Piping in High-Grade Stainless Steels',
      p2_p1: 'Complete fabrication of technological apparatus, piping runs, and heat exchangers from austenitic stainless steels (AISI 304, AISI 316L) and duplex alloys for pharmaceutical and chemical duties.',
      p3_badge: 'Ecological Engineering',
      p3_title: 'Absorbers, Cyclones and Flue Gas Ducting',
      p3_p1: 'Manufacturing of large-scale flue gas ducts, piping systems, de-dusting cyclones, and absorption towers for desulphurization and denitrifaction of power stations.',
      p4_badge: 'Industrial Chemistry',
      p4_title: 'Pickling, Degreasing and Process Chemical Tanks',
      p4_p1: 'Construction of rigid carbon and stainless steel tanks for metal finishing, galvanizing, and chemical treatment lines with internal heating coils and circulation circuits.',
      p5_badge: 'EN 15085-2 (CL1) Railway',
      p5_title: 'Overhaul of Steam Boilers and Rail Tank Cars',
      p5_p1: 'Unique engineering know-how for manufacturing and reconstructing riveted and welded steam locomotive boilers (e.g. 475.101 Noble Lady) and tank cars according to ČD V 95/5 and RID rules.',
      p6_badge: 'Machinery Capabilities',
      p6_title: 'CNC Heavy Plate Rolling and Bending',
      p6_p1: 'Precision rolling of cylindrical and conical shells on hydraulic 4-roll plate bending machines with double pre-bending of edges eliminating flat zones.',
      spec_diam_label: 'Max. Diameter:',
      spec_weight_label: 'Max. Weight:',
      spec_mat_label: 'Materials:',
      spec_surface_label: 'Surface Finish:',
      spec_pure_label: 'Environment:',
      spec_ref_label: 'Key References:',
      spec_comp_label: 'Components:',
      spec_lining_label: 'Lining Options:',
      spec_leak_label: 'Safety:',
      spec_dr_label: 'Rail Approval:',
      spec_craft_label: 'Heritage:',
      spec_thick_label: 'Plate Thickness:',
      spec_width_label: 'Roll Length:',
      spec_prof_label: 'Max. Tube Diameter:',
      tbl1_title: 'Plate Rolling Parameters (Standard steel, yield strength 240 N/mm²)',
      th_machine: 'Machine',
      th_roll_len: 'Roll Length',
      th_top_roll: 'Top Roll Ø',
      th_work_len: 'Bending Length',
      th_in_diam: 'Internal Diameter',
      th_prebend: 'Pre-bend Thickness',
      th_bend: 'Bending Thickness',
      tbl2_title: 'Section & Pipe Bending (AKYAPAK APK 180 & APK 61)',
      th_machine_prof: 'Machine',
      th_prof_type: 'Section Type',
      th_prof_max: 'Maximum Section Size',
      th_min_diam: 'Min. Internal Diameter Ø',
      th_notes: 'Technical Note',
      p_tubes: 'Circular Tubes',
      note_spirals: 'Spiral rolling capability',
      p_upn: 'Beams UPN & IPN',
      note_beam: 'Bending in plane and across plane',
      p_angles: 'Equal & Unequal Angles L',
      note_flange: 'Bending on outer and inner flange',
      p_bars: 'Square & Round Solid Bars',
      note_solid: 'Solid merchant bars',
      p_tubes_mid: 'Circular Tubes & RHS',
      note_box: 'Box sections up to 60 × 60 × 3 mm',
      p_angles_mid: 'Angles L & T Sections',
      note_precise: 'Precision forming without web deformation',
      p_bars_mid: 'Solid Bars',
      note_radius: 'Smooth radius without serrations',
      exp_label: 'Production Manager & Rolling Technologist',
      exp_desc: 'Technical consultation for cone calculations, profile capacities, and customized machining quotations.',

      cert_kicker: 'Audited Quality',
      cert_title: 'International Certifications & Approvals',
      cert_desc: 'PREST PŘEROV a.s. holds the highest welding and industrial manufacturing qualifications for the European single market.',
      c1_title: 'Quality Management',
      c1_desc: 'Certified quality management system for apparatus and pressure vessel production valid through 2028.',
      c2_title: 'Comprehensive Welding Quality',
      c2_desc: 'Full compliance with international standards for fusion welding of metallic materials.',
      c3_title: 'Steel Structures Class EXC4',
      c3_desc: 'Highest execution class of load-bearing steel structures for dynamic and seismic installations.',
      c4_title: 'Welding of Railway Vehicles',
      c4_desc: 'Certification for fabrication and overhaul of pressure equipment and rail vehicle components.',
      c5_title: 'Certified Railway Supplier',
      c5_desc: 'Certificate of technical competence for manufacturing and servicing railway equipment.',
      c6_title: 'Dangerous Goods Tank Containers',
      c6_desc: 'Manufacturer authorization for rail and road dangerous chemical transport tanks.',
      ref_kicker: 'Partners & Clients',
      ref_title: 'Long-Term Trust of Industrial Leaders',
      team_kicker: 'Project Leadership',
      team_title: 'Project Managers & Key Contacts',
      team_desc: 'Experienced project engineers fluent in English and German ensuring seamless international project execution.',
      tm1_role: 'Head of Production • EWE / IWE',
      tm1_desc: 'Welding engineer IWE, fabrication hall capacity management and plate rolling supervision.',
      tm2_role: 'Project Manager • English Speaking',
      tm2_desc: 'International project coordination, engineering review, and client communication in English.',
      tm3_role: 'Project Manager • German Speaking',
      tm3_desc: 'Technical and commercial project management for German-speaking markets (DACH region).',
      tm4_role: 'Quality Control • EWT',
      tm4_desc: 'Non-destructive weld testing, inspection authority liaison (TÜV, TIČR, ČD) and machining.',
      tm5_role: 'CNC Cutting & Technology',
      tm5_desc: 'Sheet nesting, CAD/CAM data conversion, and thermal plate cutting preparation.',
      tm6_role: 'Head of Administration & HR',
      tm6_desc: 'Contract administration, commercial invoicing, and corporate human resources.',
      c_kicker: 'Přerov • Production Works',
      c_title: 'Headquarters & Manufacturing Plant',
      c_plant_label: 'Manufacturing Works & Dispatch:',
      c_hq_label: 'Registered Office:',
      c_legal_label: 'Company Identification:',
      btn_copy_ico: 'Copy Reg. No.',
      c_phone_label: 'Switchboard & E-mail:',
      f_title: 'Technical Quotation Request',
      f_desc: 'Send us your technical drawings or apparatus parameters. Our engineering team will review requirements and submit an offer.',
      f_name: 'Name & Surname / Company',
      f_phone: 'Telephone',
      f_email: 'E-mail',
      f_division: 'Manufacturing Category',
      opt_cat1: 'Pressure vessels & chemical columns',
      opt_cat2: 'Stainless apparatus & heat exchangers',
      opt_cat3: 'Energy & ecological flue systems',
      opt_cat4: 'Pickling & chemical process tanks',
      opt_cat5: 'Railway steam boilers & tank cars',
      opt_cat6: 'CNC plate rolling & heavy bending',
      f_msg: 'Technical Project Details',
      f_submit: 'Submit Technical Request',
      ft_desc: 'PREST PŘEROV a.s. – leading European manufacturer of certified pressure vessels, chemical columns, heat exchangers, and stainless equipment.',
      ft_div_title: 'Divisions',
      ft_d1: 'Pressure Vessels & Columns',
      ft_d2: 'Stainless Equipment',
      ft_d3: 'Energy & Desulphurization',
      ft_d4: 'Railway Steam Boilers',
      ft_d5: 'CNC Heavy Plate Rolling',
      ft_contact_title: 'Works Přerov',
      ft_credit: 'Heavy engineering technical digital showcase'
    }
  };

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_prest-prerov')) {
    sessionStorage.setItem('nabidka_ping_prest-prerov', '1');
    var payload = {
      slug: 'prest-prerov',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_prest-prerov', JSON.stringify(payload));
    } catch (e) {}
    if (window.NABIDKA_PING_URL) {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
      } else {
        new Image().src = window.NABIDKA_PING_URL + '?slug=prest-prerov&t=' + Date.now();
      }
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    try {
      localStorage.setItem('prest_lang', lang);
    } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(this.getAttribute('data-lang'));
    });
  });

  var savedLang = 'cs';
  try {
    savedLang = localStorage.getItem('prest_lang') || 'cs';
  } catch (e) {}
  setLanguage(savedLang);

  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      this.classList.add('active');
      var targetId = 'panel-' + this.getAttribute('data-tab');
      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  var reveals = document.querySelectorAll('.hero-content, .hero-visual, .metric-card, .tab-panel, .cert-card, .client-logo-box, .team-card, .contact-left, .inquiry-box');
  reveals.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

  var counters = document.querySelectorAll('.m-num');
  var countersDone = false;

  function runCounters() {
    if (countersDone) return;
    counters.forEach(function (c) {
      var target = parseInt(c.getAttribute('data-target'), 10);
      var current = 0;
      var increment = Math.max(1, Math.ceil(target / 40));
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          c.textContent = target;
          clearInterval(timer);
        } else {
          c.textContent = current;
        }
      }, 30);
    });
    countersDone = true;
  }

  var metricsSection = document.querySelector('.metrics-strip');
  if (metricsSection) {
    var metricsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        runCounters();
        metricsObserver.disconnect();
      }
    }, { threshold: 0.2 });
    metricsObserver.observe(metricsSection);
  }

  var btnCopyIco = document.getElementById('btnCopyIco');
  if (btnCopyIco) {
    btnCopyIco.addEventListener('click', function () {
      var ico = this.getAttribute('data-ico');
      navigator.clipboard.writeText(ico).then(function () {
        btnCopyIco.textContent = 'Zkopírováno!';
        setTimeout(function () {
          btnCopyIco.textContent = 'Kopírovat IČO';
        }, 2000);
      });
    });
  }
})();
