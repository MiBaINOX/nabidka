const catalogData = [
  {
    id: 'inspekce-pko-dozor',
    title: 'Nezávislá inspekce a dozor PKO při aplikaci',
    category: 'Inspekce PKO & Supervize',
    norm: 'ČSN EN ISO 12944 (1–9) / ISO 19840',
    desc: 'Trvalý nebo etapový dozor nad prováděním protikorozní ochrany ocelových konstrukcí, mostů a technologických celků. Kontrola čistoty otryskání, klimatických podmínek při aplikaci (teplota, rosný bod, relativní vlhkost), mokré a suché tloušťky filmu (WFT/DFT) a technologických intervalů mezi vrstvami.',
    instruments: 'Datalogger COMET D3121, bezkontaktní teploměr Greisinger, Elcometer 456 TOP FN',
    specs: {
      'Norma': 'ČSN EN ISO 12944, ISO 19840',
      'Certifikace inspektora': 'Certifikovaný korozní technik FROSIO / ČNS / AKI',
      'Typ dozoru': 'Trvalý autorský dozor nebo přejímací etapové kontroly',
      'Výstupní dokument': 'Inspekční zpráva a přejímací protokol PKO dle ISO 12944-7'
    },
    tableHeaders: ['Fáze kontroly', 'Sledovaný parametr', 'Zkušební norma / Přístroj'],
    tableRows: [
      ['Předúprava oceli', 'Stupeň čistoty otryskání a profil drsnosti', 'ISO 8501-1 (Sa 2,5 / Sa 3), ISO 8503'],
      ['Klimatické podmínky', 'Teplota oceli min. +3 °C nad rosným bodem, vlhkost < 85 %', 'COMET D3121, Greisinger'],
      ['Aplikace nátěrů', 'Mokrá tloušťka WFT, suchá tloušťka DFT dle pravidla 80/20', 'ISO 19840 / Elcometer 456'],
      ['Finální přejímka', 'Adheze povlaku, celistvost (bez pórů a puchýřků)', 'ISO 4624 / ISO 29601']
    ]
  },
  {
    id: 'odtrhova-zkouska-prilnavosti',
    title: 'Odtrhová zkouška přilnavosti povlaku (Pull-off test)',
    category: 'Laboratorní zkoušky',
    norm: 'ČSN EN ISO 4624 / ASTM D4541',
    desc: 'Destruktivní tahová zkouška hydraulickým nebo mechanickým odtrhoměrem. Měří přesnou sílu v MPa potřebnou k odtržení zkušební panenky nalepené na povrch a přesně identifikuje charakter lomu (adhezní lom mezi vrstvami, kohezní lom v nátěru či podkladu).',
    instruments: 'Elcometer 106 Adhesion Tester, DeFelsko PosiTest AT',
    specs: {
      'Norma': 'ČSN EN ISO 4624, ASTM D4541',
      'Měřicí rozsah': '0 až 25 MPa',
      'Průměr panenek': '20 mm (standard) / 50 mm (beton)',
      'Typy hodnocení lomu': 'A (podklad), A/B (adheze 1. vrstvy), B (koheze), B/C (mezi vrstvami), Y/Z (lepidlo)'
    },
    tableHeaders: ['Typ nátěrového systému', 'Minimální požadovaná adheze', 'Obvyklý charakter lomu'],
    tableRows: [
      ['Jednovrstvý epoxid', '> 5 MPa', 'Kohezní lom v nátěru'],
      ['Vícevrstvý PUR systém', '> 7 MPa', 'Lom v lepidle panenky (> 10 MPa)'],
      ['Duplexní systém (Zn + lak)', '> 4 MPa', 'Adhezní lom na rozhraní Zn/nátěr'],
      ['Těžká PKO (C5/CX)', '> 8 MPa', 'Požadavek dle ISO 12944-6']
    ]
  },
  {
    id: 'mrizkova-zkouska-rezy',
    title: 'Mřížková zkouška přilnavosti a křehkosti (Cross-cut)',
    category: 'Laboratorní zkoušky',
    norm: 'ČSN EN ISO 2409 / ASTM D3359',
    desc: 'Zkouška přilnavosti a křehkosti vytvrzených laků vyřezáním mřížky se 6 pravoúhlými řezy až na kovový podklad. Po očištění kartáčkem a odtržení certifikované pásky se vizuálně vyhodnocuje procento odloupnuté plochy dle tabulky ISO 2409.',
    instruments: 'Elcometer 107 Cross Hatch Cutter, BGD 502, kalibrovaná lupa',
    specs: {
      'Norma': 'ČSN EN ISO 2409, ASTM D3359',
      'Rozteč břitů': '1 mm (tloušťka do 60 µm), 2 mm (do 120 µm), 3 mm (do 250 µm)',
      'Klasifikační stupnice': 'Stupeň 0 (žádné poškození) až 5 (odloupnuto > 65 %)',
      'Typ čepele': '6břitý nůž z tvrzené nástrojové oceli'
    },
    tableHeaders: ['Klasifikace ISO 2409', 'Popis poškození mřížky', 'Vyhodnocení'],
    tableRows: [
      ['Stupeň 0', 'Hrany řezů jsou zcela hladké, žádné čtverečky se neodlupují', 'Vynikající adheze (100 %)'],
      ['Stupeň 1', 'Drobné odlupování na průsečících řezů, zasaženo do 5 % plochy', 'Vyhovuje pro náročné systémy'],
      ['Stupeň 2', 'Nátěr se odlupuje podél hran a na průsečících, 5 až 15 % plochy', 'Podmínečně vyhovující'],
      ['Stupeň 3 až 5', 'Výrazné odlupování celých čtverečků (> 15 až > 65 %)', 'Nevyhovuje – riziko delaminace']
    ]
  },
  {
    id: 'mereni-tloustky-povlaku-dft',
    title: 'Nedestruktivní měření tloušťky suchého povlaku (DFT)',
    category: 'Měření vlastností povlaků',
    norm: 'ČSN EN ISO 2808 / ISO 19840 / SSPC-PA 2',
    desc: 'Nedestruktivní kontrola tloušťky suchého filmu (Dry Film Thickness) elektromagnetickou indukcí a vířivými proudy. Aplikace normy ISO 19840 pro posouzení nominální tloušťky nátěru (NDFT), kdy žádná jednotlivá hodnota nesmí klesnout pod 80 % NDFT a průměr musí být >= NDFT.',
    instruments: 'Elcometer 456 TOP FN, CM-8826 FNF, kalibrační fólie',
    specs: {
      'Norma': 'ČSN EN ISO 2808, ISO 19840, SSPC-PA 2',
      'Metoda': 'Magneticko-indukční (ocel) a vířivoproudá (hliník, nerez, zinek)',
      'Přesnost / Rozlišení': 'Přesnost ±1 %, rozlišení 0,1 µm',
      'Statistické zpracování': 'Výpočet průměru, min/max, směrodatné odchylky a 80/20 pravidla'
    },
    tableHeaders: ['Korozní kategorie', 'Doporučená NDFT (suchá tloušťka)', 'Typická skladba systému'],
    tableRows: [
      ['C2 (nízká)', '120 až 160 µm', '1× základ + 1× vrchní polyuretan'],
      ['C3 (střední)', '160 až 200 µm', '1× epoxidový základ + 1× PUR email'],
      ['C4 (vysoká)', '200 až 280 µm', 'Epoxidový zinek + epoxid mezivrstva + PUR'],
      ['C5 / CX (velmi vysoká)', '300 až 400+ µm', 'Vícevrstvý systém s bariérovým pigmentem (MIO)']
    ]
  },
  {
    id: 'zkouska-porozity-pinhole',
    title: 'Detekce celistvosti povlaku a pórovitosti (Pinhole & Porosity)',
    category: 'Laboratorní zkoušky',
    norm: 'ČSN EN ISO 29601 / NACE SP0188',
    desc: 'Vysokocitlivá kontrola celistvosti dielektrických ochranných povlaků na vodivém kovovém podkladu. Metoda mokré houbičky se smáčedlem bezpečně odhalí i mikroskopické póry, které by v agresivním prostředí vedly k bodové korozi.',
    instruments: 'Elcometer 270 Pinhole Detector (Porosity meter)',
    specs: {
      'Norma': 'ČSN EN ISO 29601, ASTM D5162, NACE SP0188',
      'Zkušební napětí': '9 V (do 300 µm), 67,5 V (do 500 µm), 90 V (speciální výstelky)',
      'Signalizace': 'Akustický tón a LED vizualizace při detekci póru',
      'Využití': 'Nádrže, potrubí, chemické reaktory, ocelové konstrukce v C4/C5'
    },
    tableHeaders: ['Tloušťka povlaku', 'Nastavené napětí', 'Typické médium v provozu'],
    tableRows: [
      ['Do 300 µm', '9 V', 'Běžná atmosféra, kondenzát'],
      ['300 až 500 µm', '67,5 V / 90 V', 'Průmyslová odpadní voda, chemikálie'],
      ['Nad 500 µm', 'Vysokonapěťová jiskrová metoda', 'Havarijní jímky, podzemní produktovody']
    ]
  },
  {
    id: 'stanoveni-cistoty-soli-chloridy',
    title: 'Stanovení znečištění chloridy a solemi (Bresle test)',
    category: 'Měření vlastností povlaků',
    norm: 'ČSN EN ISO 8502-6 / ISO 8502-9',
    desc: 'Extrakční metoda Bresleovy náplasti k určení plošné koncentrace chloridů a dalších rozpustných solí na oceli před aplikací základního nátěru. Vysoká přítomnost solí pod nátěrem způsobuje osmotický tlak a předčasné selhání PKO.',
    instruments: 'Multimetr C401 (konduktivita, pH, slanost), náplasti Bresle Patch',
    specs: {
      'Norma': 'ČSN EN ISO 8502-6 (extrakce), ČSN EN ISO 8502-9 (vodivost)',
      'Měřená veličina': 'Měrná vodivost extraktu (µS/cm) přepočtená na mg/m² solí',
      'Mezní hodnota': 'Obvykle max. 20 až 50 mg/m² (podle nátěrového systému)',
      'Riziko překročení': 'Osmotické puchýřkování a podkorodování do 12 měsíců'
    },
    tableHeaders: ['Kategorie prostředí', 'Doporučený limit chloridů', 'Důsledek překročení'],
    tableRows: [
      ['C3 / C4 průmysl', '< 50 mg/m²', 'Postupné puchýřkování po 2–3 letech'],
      ['C5 / CX mořské / chemické', '< 20 mg/m²', 'Rychlá ztráta adheze základního nátěru'],
      ['Ponořené konstrukce (Im1–Im3)', '< 15 mg/m²', 'Okamžité riziko katodického odprýsknutí']
    ]
  },
  {
    id: 'profil-drsnost-povrchu',
    title: 'Kontrola čistoty a drsnosti povrchu (Sa 2,5 / Sa 3)',
    category: 'Měření vlastností povlaků',
    norm: 'ČSN EN ISO 8501-1 / ISO 8503-1, 2',
    desc: 'Správná předúprava oceli rozhoduje z 80 % o celkové životnosti protikorozního nátěru. Provádíme posouzení stupně čistoty Sa 1 až Sa 3 a porovnání profilu drsnosti povrchovými komparátory G (ostrohranné zrno) nebo S (kuličky) dle ISO 8503.',
    instruments: 'Povrchový komparátor ISO 8503, digitální drsnoměr, etalony ISO 8501',
    specs: {
      'Norma': 'ČSN EN ISO 8501-1, ISO 8503-1, ISO 8503-2',
      'Stupeň čistoty': 'Sa 2½ (velmi důkladné otryskání – čistý kov)',
      'Profil drsnosti': 'Jemný (do 30 µm), Střední G (50–85 µm), Hrubý (> 85 µm)',
      'Vliv na nátěr': 'Dostatečné zakotvení nátěru bez vyčnívajících vrcholů zrna'
    },
    tableHeaders: ['Stupeň Sa', 'Definice dle ISO 8501-1', 'Vhodnost pro systémy PKO'],
    tableRows: [
      ['Sa 1', 'Lehké otryskání – odstranění volných okují a rzi', 'Pouze dočasné nátěry'],
      ['Sa 2', 'Důkladné otryskání – většina okují a rzi odstraněna', 'Běžné dílenské nátěry v C1–C2'],
      ['Sa 2½', 'Velmi důkladné otryskání – stopy pouze ve formě skvrn', 'Standard pro vysoce odolné systémy ISO 12944'],
      ['Sa 3', 'Otryskání na vizuálně čistý kov – jednotný kovový vzhled', 'Extrémní expozice C5/CX, duplexní systémy']
    ]
  },
  {
    id: 'posouzeni-zivotnosti-navrh-pko',
    title: 'Návrhy PKO systémů a posouzení korozní agresivity',
    category: 'Návrhy PKO & Inženýring',
    norm: 'ČSN EN ISO 12944-2, 3, 5 / ISO 9223',
    desc: 'Vypracování komplexního technického předpisu protikorozní ochrany na míru projektu. Eliminace konstrukčních korozních pastí (štěrbiny, neprůchozí kouty, ostré hrany, nevhodné svary) a volba nátěrového systému s garantovanou životností.',
    instruments: 'Normativní databáze ISO 12944, software pro kalkulaci korozních úbytků',
    specs: {
      'Norma': 'ČSN EN ISO 12944 (části 2, 3, 5), ISO 9223',
      'Korozní třídy': 'C1 (velmi nízká), C2, C3, C4, C5 (velmi vysoká), CX (extrémní)',
      'Třídy životnosti': 'L (do 7 let), M (7–15 let), H (15–25 let), VH (> 25 let)',
      'Výstup': 'Technologický předpis PKO s garancí životnosti a plánem údržby'
    },
    tableHeaders: ['Třída korozivity', 'Příklad prostředí', 'Doporučená životnost PKO'],
    tableRows: [
      ['C1 / C2', 'Vytápěné budovy / venkovské oblasti s nízkým znečištěním', 'M až H (7–25 let)'],
      ['C3', 'Městské a průmyslové atmosféry, mírný SO₂', 'H až VH (15 až > 25 let)'],
      ['C4', 'Průmyslové zóny, chemické závody, pobřežní oblasti', 'H až VH (15 až > 25 let)'],
      ['C5 / CX', 'Agresivní chemická atmosféra, průmysl s vysokou kondenzací', 'VH (> 25 let) s inspekčním plánem']
    ]
  },
  {
    id: 'duplexni-systemy-zinek-lak',
    title: 'Duplexní systémy (Žárový zinek + ochranný nátěr)',
    category: 'Specializované technologie',
    norm: 'ČSN EN ISO 12944-5 / ČSN EN ISO 1461',
    desc: 'Duplexní ochrana přináší synergický efekt: nátěr chrání zinkový povlak před povětrnostním úbytkem a zinek chrání podklad před podkorodováním v případě mechanického porušení laku. Vyžaduje precizní předúpravu jemným zameteným otryskáním (sweep blasting).',
    instruments: 'Elcometer 456 TOP FN (duální sonda FNF), mikroskopické metalografické výbrusy',
    specs: {
      'Norma': 'ČSN EN ISO 12944-5, ČSN EN ISO 1461, ISO 12944-4',
      'Předúprava zinku': 'Zametené otryskání nekovovým abrasivem (Sweep blasting)',
      'Synergický koeficient': 'Životnost systému = 1,5 až 2,5 × (životnost Zn + životnost laku)',
      'Uplatnění': 'Stožáry VVN, mosty, protihlukové stěny, železniční koridory'
    },
    tableHeaders: ['Krok duplexního procesu', 'Klíčový technologický parametr', 'Riziko při nedodržení'],
    tableRows: [
      ['Žárové zinkování', 'Kvalitní zinkový povlak dle ČSN EN ISO 1461', 'Přítomnost zinkového popela na povrchu'],
      ['Předúprava zametením', 'Tlak max. 2–3 bar, jemné minerální abrazivo', 'Poškození nebo proříznutí vrstvy zinku'],
      ['Základní nátěr', 'Reaktivní epoxidový nátěr s vysokou přilnavostí k Zn', 'Ztráta adheze (odlupování šupin laku)'],
      ['Vrchní nátěr', 'UV stabilní alifatický polyuretan odolný křídování', 'Ztráta lesku a barevné stálosti']
    ]
  },
  {
    id: 'hodnoceni-degradace-vady',
    title: 'Hodnocení degradace povlaků a znalecké posudky',
    category: 'Inspekce PKO & Supervize',
    norm: 'ČSN EN ISO 4628 (1–10) / EN ISO 21227',
    desc: 'Posouzení vad a poruch nátěrových systémů soudním znalcem v oboru strojírenství – povrchové úpravy. Identifikace primární příčiny degradace (provozní vlivy, technologická nekázeň, nevhodná volba nátěrové hmoty, špatné promíchání) a stanovení nápravných sanačních opatření.',
    instruments: 'Konfokální laserový mikroskop OLYMPUS LEXT, etalony ISO 4628, makro kamera',
    specs: {
      'Norma': 'ČSN EN ISO 4628-1 až 10, EN ISO 21227',
      'Typy vad': 'Prorezavění (Ri), puchýřkování (D/S), praskání (Cracking), odlupování (Flaking)',
      'Soudní znalec': 'Oprávnění soudního znalce pro strojírenství – povrchové úpravy',
      'Použití': 'Reklamace velkých staveb, arbitráže, pojišťovací události, plány sanací'
    },
    tableHeaders: ['Typ vady dle ISO 4628', 'Zkušební část normy', 'Metoda klasifikace'],
    tableRows: [
      ['Množství puchýřků', 'ISO 4628-2', 'Hustota 2 až 5, velikost S2 až S5'],
      ['Stupeň prorezavění', 'ISO 4628-3', 'Ri 0 (0 %) až Ri 5 (40–50 % povrchu)'],
      ['Stupeň praskání', 'ISO 4628-4', 'Hustota prasklin a hloubka proniknutí'],
      ['Stupeň odlupování', 'ISO 4628-5', 'Plošné procento a velikost odloupnutých šupin']
    ]
  },
  {
    id: 'zkousky-odolnosti-ohu-raz',
    title: 'Mechanické zkoušky elasticity, rázu a ohybu',
    category: 'Laboratorní zkoušky',
    norm: 'ISO 1519 / 6860 / ASTM D2794',
    desc: 'Měření mechanické odolnosti vytvrzených tekutých a práškových barev vůči dynamickému namáhání a deformacím podkladu. Simuluje montážní deformace, teplotní dilatace a nárazy kamínků.',
    instruments: 'Cylindrický trn ISO 1519, kónický trn ISO 6860, Impact tester BGD, přístroj Erichsen ISO 1520',
    specs: {
      'Norma': 'ČSN EN ISO 1519, ČSN EN ISO 6860, ISO 1520, ASTM D2794',
      'Ohyb': 'Trny průměru 2 mm až 32 mm',
      'Rázová odolnost': 'Spádové závaží 1 kg z výšky až 100 cm (přímý i nepřímý ráz)',
      'Hloubení': 'Kulička průměru 20 mm vtlačovaná do podkladu až do vzniku trhlin'
    },
    tableHeaders: ['Metoda mechanického testu', 'Norma', 'Kritérium úspěšnosti'],
    tableRows: [
      ['Ohyb na cylindrickém trnu', 'ČSN EN ISO 1519', 'Nesmí dojít k prasknutí při stanoveném průměru trnu'],
      ['Rázová houževnatost (Impact)', 'ASTM D2794 / ISO 6272', 'Odolnost proti odprýsknutí při energii 10–50 kg.cm'],
      ['Hloubení dle Erichsena', 'ČSN EN ISO 1520', 'Hloubka protlačení v mm do vzniku první trhlinky']
    ]
  },
  {
    id: 'urychlene-klimaticke-zkousky',
    title: 'Zrychlené korozní zkoušky v solné mlze a vlhkosti',
    category: 'Laboratorní zkoušky',
    norm: 'ČSN EN ISO 9227 (NSS) / ISO 12944-6 / ISO 4892-3',
    desc: 'Akreditované korozní zkoušky pro kvalifikaci nátěrových systémů dle ISO 12944-6. Vzorky s umělým zářezem jsou vystaveny působení solné mlhy (NSS) a kondenzační komory pro ověření korozního šíření od řezu (delaminace M <= 1 mm).',
    instruments: 'Solná komora (NSS), kondenzační komora s vlhkostí 100 %, UV zkušební komora',
    specs: {
      'Norma': 'ČSN EN ISO 9227, ČSN EN ISO 6270-2, ČSN EN ISO 12944-6, ISO 4892-3',
      'Doba expozice': '480 h, 720 h, 1 440 h, 2 400 h dle korozní třídy C3 až C5/CX',
      'Testovací cyklus': 'Kombinace solné mlhy, kondenzace a UV stárnutí',
      'Hodnocení': 'Koroze v zářezu dle ISO 12944-6 (max. 1 mm) a ztráta přilnavosti'
    },
    tableHeaders: ['Kategorie C / Životnost', 'Expozice v solné mlze (NSS)', 'Expozice ve vlhkosti'],
    tableRows: [
      ['C3 High (15–25 let)', '480 hodin', '240 hodin'],
      ['C4 High (15–25 let)', '720 hodin', '480 hodin'],
      ['C5 High (15–25 let)', '1 440 hodin', '720 hodin'],
      ['C5 / CX Very High (> 25 let)', '2 400+ hodin (cyklický test)', '1 440 hodin']
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCounters();
  initScrollReveal();
  initCatalog();
  initModal();
  handleUrlRef();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  const links = navMenu.querySelectorAll('.nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        if (isNaN(target)) return;
        
        obs.unobserve(el);
        animateCounter(el, target, 1600);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target, duration) {
  let startTime = null;
  el.textContent = '0';

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);
    el.textContent = current.toString();

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target.toString();
    }
  }

  window.requestAnimationFrame(step);
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(r => observer.observe(r));
}

function initCatalog() {
  const searchInput = document.getElementById('catalogSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.catalog-card');
  const counterEl = document.getElementById('searchCounter');

  let currentFilter = 'all';
  let currentQuery = '';

  function updateCards() {
    let visibleCount = 0;
    const q = currentQuery.toLowerCase().trim();

    cards.forEach(card => {
      const cat = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchesFilter = (currentFilter === 'all') || (cat === currentFilter);
      const matchesSearch = !q || text.includes(q);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.textContent = visibleCount.toString();
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value;
      updateCards();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      updateCards();
    });
  });
}

function initModal() {
  const backdrop = document.getElementById('techModalBackdrop');
  const closeBtn = document.getElementById('techModalClose');
  const closeAction = document.getElementById('modalCloseAction');
  const detailBtns = document.querySelectorAll('.card-detail-btn');
  const inquiryBtn = document.getElementById('modalInquiryBtn');

  if (!backdrop) return;

  function closeModal() {
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  function openModal(id) {
    const item = catalogData.find(c => c.id === id);
    if (!item) return;

    const normTag = document.getElementById('modalNormTag');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');
    const inst = document.getElementById('modalInstruments');
    const specsWrap = document.getElementById('modalSpecs');
    const tableHead = document.getElementById('modalTableHead');
    const tableBody = document.getElementById('modalTableBody');

    if (normTag) normTag.textContent = item.norm;
    if (title) title.textContent = item.title;
    if (desc) desc.textContent = item.desc;
    if (inst) inst.textContent = item.instruments;

    if (specsWrap) {
      specsWrap.innerHTML = '';
      const grid = document.createElement('div');
      grid.className = 'modal-specs-grid';
      for (const [k, v] of Object.entries(item.specs)) {
        const d = document.createElement('div');
        d.className = 'spec-item';
        d.innerHTML = `<span class="spec-key">${k}</span><span class="spec-val">${v}</span>`;
        grid.appendChild(d);
      }
      specsWrap.appendChild(grid);
    }

    if (tableHead && item.tableHeaders) {
      tableHead.innerHTML = '<tr>' + item.tableHeaders.map(h => `<th>${h}</th>`).join('') + '</tr>';
    }

    if (tableBody && item.tableRows) {
      tableBody.innerHTML = item.tableRows.map(row => '<tr>' + row.map(cell => `<td>${cell}</td>`).join('') + '</tr>').join('');
    }

    if (inquiryBtn) {
      inquiryBtn.href = '#kontakt';
      inquiryBtn.onclick = () => {
        closeModal();
        const sel = document.getElementById('formService');
        if (sel) {
          for (let i = 0; i < sel.options.length; i++) {
            if (sel.options[i].text.toLowerCase().includes(item.norm.slice(0, 8).toLowerCase())) {
              sel.selectedIndex = i;
              break;
            }
          }
        }
      };
    }

    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-open-id');
      if (id) openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeAction) closeAction.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.style.display === 'flex') {
      closeModal();
    }
  });
}

function handleUrlRef() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const header = document.querySelector('.site-header');
    if (header) {
      header.style.borderBottom = '2px solid #2563EB';
    }
  }
}
