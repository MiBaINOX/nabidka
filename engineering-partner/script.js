document.addEventListener('DOMContentLoaded', function () {
  const catalogData = [
    {
      id: 'innovace-dilu',
      title: 'Inovace opotřebeného náhradního dílu',
      category: 'Náhradní díly & servis',
      norma: 'ČSN EN ISO 12100',
      image: 'assets/Design_01_2.png',
      desc: 'Kompletní reverzní inženýrství a 3D parametrický model původně opotřebeného dílu. Úprava tvaru, optimalizace kontaktních ploch a volba materiálu s vyšší odolností proti únavovému lomu.',
      specs: {
        'Výrobní norma': 'ČSN EN ISO 12100 / Výrobní dokumentace EP',
        'Fáze vývoje': '3D CAD návrh, rozměrová optimalizace, prototyp',
        'Původní problém': 'Předčasné opotřebení funkčních ploch na lince',
        'Dosažený výsledek': 'Prodloužení servisního intervalu o 150 %'
      }
    },
    {
      id: 'zdvihaci-zarizeni-navrh',
      title: 'Konstrukční návrh zdvihacího zařízení',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN 13155 / ISO 12100',
      image: 'assets/Design_02_1.png',
      desc: 'Koncepční inženýrský návrh zdvihacího zařízení na míru konkrétnímu provoznímu taktu. Zahrnuje rozbor zatížení, volbu pohonů a ergonomické ovládání pro obsluhu.',
      specs: {
        'Typ zařízení': 'Speciální manipulační a zdvihací mechanismus',
        'Norma': 'ČSN EN 13155 (Zdvihací zařízení – vázací prostředky)',
        'Pohon': 'Elektromechanický / hydraulický dle zástavby',
        'Dokumentace': 'Kompletní výrobní a montážní výkresová dokumentace'
      }
    },
    {
      id: 'vacka-design',
      title: 'Tvarová optimalizace výrobní vačky',
      category: 'Náhradní díly & servis',
      norma: 'ČSN ISO 286-1 / DIN 3960',
      image: 'assets/Design_03_3.png',
      desc: 'Optimalizace zdvihové křivky a zrychlení vačky pro snížení rázů a vibrací ve vysokorychlostním balicím nebo montážním automatu.',
      specs: {
        'Typ dílu': 'Přesná vačka pro vačkový převodový mechanismus',
        'Přesnost výroby': 'Broušeno v toleranci IT6 / IT7',
        'Tepelné zpracování': 'Cementováno a kaleno na 58–62 HRC',
        'Přínos': 'Plynulý přenos pohybu bez rázových špiček'
      }
    },
    {
      id: 'rozvodova-skrin',
      title: 'Pneumatická rozvodová skříň výrobní linky',
      category: 'Výrobní linky & dopravníky',
      norma: 'ČSN EN ISO 4414',
      image: 'assets/Design_04_1.png',
      desc: 'Komplexní uspořádání ventilových ostrovů, úpravných jednotek stlačeného vzduchu a logických obvodů pro řízení pneumatických válců a přísuvů výrobní linky.',
      specs: {
        'Pracovní tlak': '6 až 10 bar (filtrovaný sušený vzduch)',
        'Norma bezpečnosti': 'ČSN EN ISO 4414 (Pneumatické fluidní pohony)',
        'Krytí skříně': 'IP65 do náročného strojírenského provozu',
        'Integrace': 'Přímé napojení na centrální PLC linky'
      }
    },
    {
      id: 'kryt-remenu',
      title: 'Bezpečnostní kryt řemenového rozvodu',
      category: 'Náhradní díly & servis',
      norma: 'ČSN EN ISO 14120',
      image: 'assets/Design_06_2.png',
      desc: 'Ochranný kryt s rychloodnímatelným inspekčním otvorem pro kontrolu napnutí řemene. Zajišťuje stoprocentní ochranu obsluhy před rotujícími částmi stroje.',
      specs: {
        'Bezpečnostní norma': 'ČSN EN ISO 14120 (Ochranné kryty strojů)',
        'Bezpečné vzdálenosti': 'Dle ČSN EN ISO 13857',
        'Povrch': 'Signální bezpečnostní nátěr RAL dle přání klienta',
        'Montáž': 'Rychloupínací systém pro snadnou údržbu'
      }
    },
    {
      id: 'fem-vypocet-nosniku',
      title: 'FEM pevnostní výpočet nosníku zdvihacího zařízení',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 1993-1-1 / EN 1090-2',
      image: 'assets/Design_05_1.png',
      desc: 'Počítačová simulace napětí podle von Misese, průhybů a mezních stavů únosnosti nosníku při maximálním provozním zatížení a dynamických rázech zdvihu.',
      specs: {
        'Metodika výpočtu': 'FEM (Metoda konečných prvků) / FEA simulace',
        'Norma posouzení': 'ČSN EN 1993-1-1 (Eurokód 3: Navrhování konstrukcí)',
        'Výstupní dokument': 'Autorizovaná statická zpráva s grafickým průběhem napětí',
        'Bezpečnostní koeficient': 'Minimálně 1,5–2,0 vůči mezi kluzu Re'
      }
    },
    {
      id: 'mosazny-dil-lesteny',
      title: 'Tvarově složitý přesný mosazný díl',
      category: 'Náhradní díly & servis',
      norma: 'ČSN EN 12164',
      image: 'assets/SparePart_02_3.png',
      desc: 'Zakázkově vyráběný náhradní díl s komplexním vnitřním tvarováním a závitovými spoji. Dosažena vysoká geometrická přesnost a zrcadlová jakost povrchu.',
      specs: {
        'Technologie': 'Víceosé CNC soustružení a frézování',
        'Tolerance rozměrů': '± 0,01 mm dle výkresu',
        'Drsnost povrchu': 'Ra 0,4 µm (jemně leštěno)',
        'Využití': 'Pneumatické a kapalinové rozvody technologických linek'
      }
    },
    {
      id: 'pryzokovovy-dil',
      title: 'Pryžokovový díl s vysokou odolností proti otěru',
      category: 'Náhradní díly & servis',
      norma: 'ČSN 62 1436 / DIN 53516',
      image: 'assets/SparePart_03_1.png',
      desc: 'Vulkanizace speciální pryžové otěruvzdorné směsi přímo na ocelovou nosnou vložku. Výrazně snižuje hlučnost a chrání strojní uzel před destrukcí.',
      specs: {
        'Tvrdost pryže': '70–85 Shore A',
        'Pevnost spoje': 'Vysokopevnostní chemická vulkanizace kov-pryž',
        'Odolnost': 'Vůči minerálním olejům, otěru a dynamickým rázům',
        'Životnost': 'Až trojnásobná oproti standardním dílům'
      }
    },
    {
      id: 'ocelove-pevnostni-kolo',
      title: 'Ocelové pevnostní kolo pro přenos momentu',
      category: 'Náhradní díly & servis',
      norma: 'ČSN 01 4686 / DIN 3990',
      image: 'assets/SparePart_01_3.png',
      desc: 'Přesně ozubené hnací kolo se zuby kalenými indukčně. Vyrobeno jako přímá náhrada nedostupného originálního dílu zahraničního výrobce.',
      specs: {
        'Materiál': 'Ušlechtilá chrommolybdenová ocel 42CrMo4',
        'Zubové kalení': 'Indukční kalení boků zubů na 54–58 HRC',
        'Kontrola jakosti': 'Měření úchylek evolventy a NDT kontrola trhlin (MT)',
        'Přenos momentu': 'Drážkovaný náboj / pero dle ČSN 02 2562'
      }
    },
    {
      id: 'maltezsky-kriz-plast',
      title: 'Maltézský kříž z technického plastu',
      category: 'Náhradní díly & servis',
      norma: 'ISO 2768-fH / DIN 7168',
      image: 'assets/SparePart_04_2.png',
      desc: 'Náhrada původního kovového mechanismu dílem z kluzného technického plastu POM-C. Umožňuje bezmazný provoz v čistém prostředí s minimální setrvačností.',
      specs: {
        'Koeficient tření': 'Nízký kluzný odpor bez nutnosti mazání tukem',
        'Hmotnost': 'O 80 % nižší hmotnost oproti oceli',
        'Hlučnost': 'Tichý chod při vysokých cyklech otáčení',
        'Odolnost': 'Vynikající rozměrová stálost a chemická odolnost'
      }
    },
    {
      id: 'zakrytovani-vyvevy',
      title: 'Akustické zakrytování a odhlučnění vývěvy',
      category: 'Náhradní díly & servis',
      norma: 'ČSN EN ISO 11546-1',
      image: 'assets/Safety_01_1.png',
      desc: 'Samonosná odhlučňovací skříň s nuceným odvětráváním motoru vývěvy. Snížení hlukové zátěže v pracovním prostoru pod zákonné hygienické limity.',
      specs: {
        'Hlukový útlum': 'Snížení hladiny hluku až o 18–22 dB(A)',
        'Chlazení': 'Labyrintové větrací otvory s odhlučněním proudění',
        'Přístupnost': 'Výklopná servisní dvířka s plynovými vzpěrami',
        'Norma': 'ČSN EN ISO 11546 (Akustika – Zvuková izolace krytů)'
      }
    },
    {
      id: 'bezpecnostni-pletiva',
      title: 'Bezpečnostní pletiva a ochranné zábrany',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN ISO 14120 / EN 1090-2',
      image: 'assets/Safety_02_2.png',
      desc: 'Systém pevných a otevíratelných ochranných zábran s možností osazení bezpečnostních zámků a koncových spínačů pro okamžité zastavení linky při otevření.',
      specs: {
        'Výška zábran': '2 000 mm standardně (nebo dle požadavku)',
        'Výrobní třída': 'ČSN EN 1090-2 EXC1 / EXC2',
        'Povrchová úprava': 'Práškové lakování žlutá/černá (bezpečnostní RAL)',
        'Kotvení': 'Chemické kotvy do betonové podlahy provozu'
      }
    },
    {
      id: 'premosteni-dopravniku',
      title: 'Přemostění dopravníkové trasy pochozí lávkou',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 1090-2 / ISO 14122-2',
      image: 'assets/Safety_03_1.png',
      desc: 'Svařovaná nosná lávka navržená a vyrobená dle ČSN EN 1090-2 a ISO 14122-2. Součástí je schodiště, pochozí mřížové rošty a zarážkový plech proti pádu předmětů.',
      specs: {
        'Norma lávek a plošin': 'ČSN EN ISO 14122-2 a 14122-3',
        'Svařování': 'ČSN EN ISO 3834-2 (plná certifikace jakosti)',
        'Pochozí vrstva': 'Žárově zinkované ocelové mřížkové rošty (pororošty)',
        'Nosnost': '2,5 kN/m² až 5,0 kN/m² užitného zatížení'
      }
    },
    {
      id: 'regaly-barvy',
      title: 'Průmyslové regály pro skladování barev a chemikálií',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 15635 / EN 1090-2',
      image: 'assets/Safety_04_1.png',
      desc: 'Svařované konstrukce pro organizované a bezpečné uložení nádob s nátěrovými hmotami, ředidly a mazivy. Vyhovuje ekologickým a požárním předpisům provozu.',
      specs: {
        'Nosnost patra': 'Až 1 500 kg na úroveň',
        'Záchytný objem': 'Integrovaná těsně svařená vana na dně regálu',
        'Ochrana oceli': 'Dvousložkový epoxidový chemicky odolný nátěr',
        'Certifikace': 'Prohlášení o shodě a statický posudek regálu'
      }
    },
    {
      id: 'police-na-stroji',
      title: 'Ergonomické skladovací police na zábradlí stroje',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN ISO 14122-3',
      image: 'assets/Safety_05_1.png',
      desc: 'Umožňuje bezpečné odložení měřidel, nářadí a montážních přípravků přímo na dosah obslužného personálu bez nutnosti sestupovat z technologické plošiny.',
      specs: {
        'Montáž': 'Pevné nebo hákové uchycení bez vrtání do nosných sloupů',
        'Hrany': 'Zaoblené bezpečné lemování proti zranění',
        'Povrch': 'Odolný komaxit se strukturovaným lakem',
        'Ergonomie': 'Splňuje zásady štíhlé výroby 5S'
      }
    },
    {
      id: 'boxy-zavazeni',
      title: 'Závěsné boxy pro zavážení materiálu do výroby',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 13155 / EN 1090-2',
      image: 'assets/Safety_06_1.png',
      desc: 'Svařované kontejnery s vysokou tuhostí stěn a kónickým dnem pro hladké vyprazdňování. Prověřeny nedestruktivní zkouškou svarů na závěsných prvcích.',
      specs: {
        'Nosnost': '2 000 kg manipulovaného materiálu',
        'Závěsná oka': 'Certifikována pro jeřábový transport dle EN 13155',
        'Manipulace': 'Kapsy pro vidle VZV se zajištěním proti sklouznutí',
        'Stohovatelnost': 'Konstrukční rohové patky pro bezpečné stohování 1+2'
      }
    },
    {
      id: 'odpruzena-valeckova-draha',
      title: 'Odpružená válečková dráha technologického dopravníku',
      category: 'Výrobní linky & dopravníky',
      norma: 'ČSN EN 619',
      image: 'assets/Segment_01_0.png',
      desc: 'Díky integrovaným vinutým pružinám a elastomerovým dorazům eliminuje poškození ložisek válečků a chrání geometrii navazujících robotických buněk.',
      specs: {
        'Typ válečků': 'Ocelové přesné válečky s kuličkovými ložisky',
        'Rázová absorpce': 'Tlumicí zdvih pružin až 25 mm',
        'Zatížení': 'Až 800 kg na jeden metr trati',
        'Údržba': 'Prachotěsná pouzdra ložisek s trvalou tukovou náplní'
      }
    },
    {
      id: 'pritlacny-dopravnik',
      title: 'Přítlačný dopravník s lomenou dráhou',
      category: 'Výrobní linky & dopravníky',
      norma: 'ČSN EN 619 / ISO 12100',
      image: 'assets/Segment_02_0.png',
      desc: 'Kombinace spodního nosného a horního přítlačného pásu zaručuje fixaci polohy výrobku i při sklonu až 45°. Synchronní pohon s nastavitelným přítlakem.',
      specs: {
        'Úhel lomu': 'Variabilní dle prostorových dispozic (15° až 45°)',
        'Pohon': 'Šneková elektropřevodovka SEW-Eurodrive',
        'Synchronizace': 'Elektronicky řízený chod obou větví',
        'Aplikace': 'Automobilový a obalový průmysl'
      }
    },
    {
      id: 'pneu-mechanismus-dopravniku',
      title: 'Pneumatický mechanismus dopravníku s PLC řízením',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN ISO 4414 / EN 60204-1',
      image: 'assets/Segment_03_1.png',
      desc: 'Automatizovaný přísuvný a stohovací mechanismus řízený signály z optických čidel. Umožňuje přesné polohování výrobku pro následnou kontrolní operaci.',
      specs: {
        'Takt cyklu': '0,8 sekundy na jeden pracovní zdvih',
        'Opakovatelná přesnost': '± 0,1 mm díky mechanickým dorazům s tlumením',
        'Řídicí systém': 'Siemens Simatic / průmyslové PLC',
        'Diagnostika': 'Snímání koncových poloh magnetickými senzory'
      }
    },
    {
      id: 'otocna-jerabova-hlava',
      title: 'Otočná jeřábová hlava pro manipulaci',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 13001 / EN 1090-2',
      image: 'assets/Segment_04_0.png',
      desc: 'Masivní nosná hlava s integrovaným ložiskem a možností motorického i ručního natáčení ramene. Pevnostně dimenzována na klopné momenty při plném vyložení.',
      specs: {
        'Úhel otočení': '360° kontinuálně nebo s elektromechanickými dorazy',
        'Nosnost jeřábu': 'Až 3 200 kg při vyložení 5 metrů',
        'Zkoušky svarů': '100% NDT kontrola ultrazvukem a magnetickou metodou',
        'Certifikace': 'Zkouška přetížením s autorizovanou revizní zprávou'
      }
    },
    {
      id: 'variabilni-pasovy-dopravnik',
      title: 'Variabilní pásový dopravník s plynulým řízením',
      category: 'Výrobní linky & dopravníky',
      norma: 'ČSN EN 619 / EN 60204-1',
      image: 'assets/Segment_05_3.png',
      desc: 'Flexibilní dopravníkový segment ideální pro mezioperační dopravu. Vybaven frekvenčním měničem pro plynulou regulaci rychlosti posuvu pásu.',
      specs: {
        'Rychlost pásu': '0,05 až 1,5 m/s plynule regulovatelná',
        'Materiál pásu': 'Antistatický PVC / polyuretanový pás',
        'Nastavitelnost': 'Výškově stavitelný podvozek s aretací',
        'Připojení': 'Jednofázové 230V nebo 3x400V s bezpečnostním tlačítkem STOP'
      }
    },
    {
      id: 'pasovy-dopravnik-rizeni',
      title: 'Průmyslový pásový dopravník s elektronickým řízením',
      category: 'Výrobní linky & dopravníky',
      norma: 'ISO 13849-1 (PL d)',
      image: 'assets/Segment_06_0.png',
      desc: 'Vybaven oboustranným nouzovým lankovým vypínačem, optickými závorami a komunikací přes průmyslovou sběrnici Profinet pro synchronizaci s robotem.',
      specs: {
        'Nosnost dopravníku': 'Až 150 kg/m',
        'Bezpečnostní úroveň': 'Performance Level PL d dle ISO 13849-1',
        'Válečky': 'Pogumované hnací válce zamezující prokluzu pásu',
        'Servisní přístup': 'Centrální napínací šrouby pro snadné vycentrování pásu'
      }
    },
    {
      id: 'plosina-naklaneni',
      title: 'Manipulační plošina s automatickým nakláněním',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN 1570-1 / ISO 12100',
      image: 'assets/Separate_01_0.png',
      desc: 'Zařízení odstraňuje nutnost hlubokého ohýbání do beden s těžkými odlitky. Automatické naklonění až do úhlu 45° podle výšky zbývajícího materiálu.',
      specs: {
        'Úhel náklonu': '0° až 45° plynule',
        'Nosnost náklonu': '1 200 kg (standardní EUR paleta nebo kovový box)',
        'Ovládání': 'Nožní pedál nebo automatické ultrazvukové čidlo hladiny',
        'Bezpečnost': 'Pojistné ventily proti samovolnému pádu a mechanická aretace'
      }
    },
    {
      id: 'radlice-vzv',
      title: 'Průmyslová radlice na sníh a materiál pro VZV',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 1090-2 (EXC2)',
      image: 'assets/Separate_02_0.png',
      desc: 'Robustní svařovaná konstrukce s kapsami pro rychlé nasazení na nosné vidle VZV. Zajištění čepy a mechanické oboustranné natáčení radlice.',
      specs: {
        'Pracovní záběr': '1 800 až 2 400 mm',
        'Břit radlice': 'Kombinovaný ocelový otěruvzdorný břit + pružná pryž',
        'Úhel natočení': 'Stavitelný ± 30° do obou stran',
        'Povrchová úprava': 'Žárové zinkování + výstražné šrafování'
      }
    },
    {
      id: 'elektricky-otocny-jerab',
      title: 'Elektricky ovládaný sloupový otočný jeřáb',
      category: 'Ocelové konstrukce',
      norma: 'ČSN EN 13001 / EN 1090-2',
      image: 'assets/Separate_03_0.png',
      desc: 'Vysoce spolehlivý pomocník pro nakládání dílů do CNC obráběcích center. Staticky posouzená základová deska s chemickými kotvami a revizí.',
      specs: {
        'Nosnost': '500 kg až 2 000 kg',
        'Vyložení ramene': 'Až 6 metrů',
        'Kladkostroj': 'Dvourychlostní elektrický řetězový kladkostroj Demag/Stahl',
        'Dokumentace': 'Zkouška shody CE, pasport zdvihacího zařízení, elektrorevize'
      }
    },
    {
      id: 'zdvihaci-vozik-manualni',
      title: 'Dílenský zdvihací vozík s manuálním pohonem',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN ISO 3691-5',
      image: 'assets/Separate_04_0.png',
      desc: 'Vozík vybavený nožní hydraulickou pumpou a mikro-posuvem pro přesné navedení lisovací formy. Polyuretanová kolečka nezanechávající stopy na podlaze.',
      specs: {
        'Max. výška zdvihu': '1 200 mm',
        'Nosnost': '500 kg',
        'Kolečka': 'Otočná kolečka s nášlapnou brzdou',
        'Platforma': 'Hladký plech s odnímatelným dorazem'
      }
    },
    {
      id: 'hydraulicka-nuzkova-plosina',
      title: 'Hydraulická nůžková zdvihací plošina',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN 1570-1 / ISO 3834-2',
      image: 'assets/Separate_05_1.png',
      desc: 'Plně svařovaná nosná konstrukce s dvojčinným nůžkovým mechanismem. Vybavena obvodovou bezpečnostní kontaktní lištou zamezující sevření končetin.',
      specs: {
        'Užitná nosnost': '2 500 kg',
        'Rozměry stolu': '2 000 x 1 200 mm',
        'Bezpečnostní prvky': 'Zpětné padací ventily, podpěrné vzpěry pro údržbu',
        'Certifikace': 'Prohlášení o shodě CE dle ČSN EN 1570-1'
      }
    },
    {
      id: 'plosinove-zdvihaci-zarizeni',
      title: 'Plošinové zdvihací zařízení s přesným vedením',
      category: 'Jednoúčelová zařízení',
      norma: 'ČSN EN 81-31 / EN 1090-2',
      image: 'assets/Separate_06_0.png',
      desc: 'Samonosná ocelová vodicí šachta s klecí vybavenou roletovými vraty a blokovacím bezpečnostním systémem. Navrženo a realizováno na klíč.',
      specs: {
        'Zdvih': 'Až 4,5 metru',
        'Nosnost': '1 000 kg',
        'Přesnost dojezdu': '± 2 mm pro bezproblémový nájezd nízkozdvižného vozíku',
        'Zabezpečení': 'Elektromechanické blokování dveří při pohybu plošiny'
      }
    }
  ];

  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
      });
    });
  }

  const swTabs = document.querySelectorAll('.sw-tab');
  swTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      swTabs.forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.sw-pane').forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      const targetPane = document.getElementById(tab.getAttribute('data-target-pane'));
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  const counters = document.querySelectorAll('.counter[data-target]');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
          el.textContent = '0';
          const duration = 1200;
          const startTime = performance.now();
          const animate = function (now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(easeOut * target);
            el.textContent = val;
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target;
            }
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  const catalogItems = document.querySelectorAll('.catalog-item.cat-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('catalogSearch');
  const searchReset = document.getElementById('searchReset');
  const itemCountEl = document.getElementById('itemCount');

  let currentCategory = 'all';
  let searchQuery = '';

  function updateCatalog() {
    let visibleCount = 0;
    catalogItems.forEach(function (item) {
      const itemCat = item.getAttribute('data-category') || '';
      const itemExtra = item.getAttribute('data-extra') || '';
      const text = item.textContent.toLowerCase();

      const catMatches = (currentCategory === 'all') || (itemCat === currentCategory) || (itemExtra === currentCategory);
      const searchMatches = (!searchQuery) || text.includes(searchQuery);

      if (catMatches && searchMatches) {
        item.style.display = 'flex';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (itemCountEl) {
      itemCountEl.textContent = visibleCount;
    }

    if (searchReset) {
      if (searchQuery.length > 0) {
        searchReset.classList.add('visible');
      } else {
        searchReset.classList.remove('visible');
      }
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      updateCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value.trim().toLowerCase();
      updateCatalog();
    });
  }

  if (searchReset) {
    searchReset.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
      }
      searchQuery = '';
      updateCatalog();
    });
  }

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalNorma = document.getElementById('modalNorma');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsBody = document.getElementById('modalSpecsBody');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  function openModal(itemId) {
    const item = catalogData.find(function (d) { return d.id === itemId; });
    if (!item || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategory) modalCategory.textContent = item.category;
    if (modalNorma) modalNorma.textContent = item.norma;
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.title;
    }
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalSpecsBody) {
      modalSpecsBody.innerHTML = '';
      for (const key in item.specs) {
        if (Object.prototype.hasOwnProperty.call(item.specs, key)) {
          const tr = document.createElement('tr');
          const tdKey = document.createElement('td');
          tdKey.textContent = key;
          const tdVal = document.createElement('td');
          tdVal.textContent = item.specs[key];
          tr.appendChild(tdKey);
          tr.appendChild(tdVal);
          modalSpecsBody.appendChild(tr);
        }
      }
    }

    if (modalInquireBtn) {
      modalInquireBtn.href = '#kontakt';
    }

    modalBackdrop.style.display = 'flex';
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  catalogItems.forEach(function (card) {
    const itemId = card.getAttribute('data-id');
    card.addEventListener('click', function () {
      openModal(itemId);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(itemId);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  const inquiryForm = document.getElementById('inquiryForm');
  const formFeedback = document.getElementById('formFeedback');
  if (inquiryForm && formFeedback) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const company = document.getElementById('formCompany').value;
      formFeedback.className = 'form-feedback-msg success';
      formFeedback.textContent = 'Děkujeme, ' + name + ' (' + company + '). Váš inženýrský požadavek byl úspěšně zaevidován. Ing. Jiří Krbeček vás bude kontaktovat nejpozději do 24 hodin.';
      formFeedback.style.display = 'block';
      inquiryForm.reset();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref');
  if (refParam === 'nabidka' || refParam === 'capture') {
    const payload = {
      slug: 'engineering-partner',
      opened_at: new Date().toISOString(),
      referrer: document.referrer || '',
      user_agent: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_engineering-partner', JSON.stringify(payload));
      if (!sessionStorage.getItem('nabidka_ping_sent')) {
        sessionStorage.setItem('nabidka_ping_sent', '1');
        if (window.NABIDKA_PING_URL) {
          const pingUrl = window.NABIDKA_PING_URL + '?slug=engineering-partner&time=' + encodeURIComponent(payload.opened_at);
          fetch(pingUrl, { mode: 'no-cors' }).catch(function () {});
        }
      }
    } catch (err) {}
  }
});
