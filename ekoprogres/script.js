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

  var techCatalog = [{"id": "sedim-kruhove", "cat": "sedim", "cat_name": "Sedimentační nádrže", "title": "Kruhové sedimentační nádrže se stíracími mosty", "perex": "Dosazovací a usazovací kruhové nádrže s pojezdovým mostem a pohonem s ozubeným hřebenem pro čistírny odpadních vod.", "img": "assets/img_07_.jpg", "badge": "Typ EP-KSDN / EP-KSUN", "specs_preview": "Průměry nádrží 6 až 30 m • Obvodový nebo středový pohon", "full_desc": "Kruhové sedimentační nádrže slouží pro separaci usaditelného kalu a plovoucích nečistot na mechanicko-biologických čistírnách odpadních vod. Dodáváme nádrže s vodorovným i kuželovým dnem s centrálním nosným sloupem nebo obvodovým pojezdem. Vyvinuli jsme patentovaný systém pohonu stíracího mostu s ozubeným hřebenem, který eliminuje prokluzování pojezdových kol při námraze a sněhu.", "models": [{"name": "EP-KSUN", "desc": "Kruhová usazovací nádrž primární sedimentace se stíráním dna i hladiny"}, {"name": "EP-KSDN", "desc": "Kruhová dosazovací nádrž sekundární sedimentace s odběrem vyčištěné vody"}, {"name": "EP-KSDZ", "desc": "Kruhová dešťová zdrž pro záchyt prvního splachu ze stokové sítě"}, {"name": "EP-KSZN", "desc": "Zahušťovací nádrž kalů s vertikálním plotovým míchadlem"}], "table": {"headers": ["Parametr", "Standardní řada", "Materiálové provedení"], "rows": [["Průměr nádrže D", "6.000 až 30.000 mm", "Železobetonová vana / nerezový plášť"], ["Obvodová rychlost mostu", "1,5 až 2,5 cm/s", "Plynulá regulace frekvenčním měničem"], ["Pohon mostu", "Ozubený hřeben / třecí pryžové kolo", "Elektropřevodovka SEW / Nord IP65"], ["Stírání hladiny", "Stěrka plovoucích nečistot do jímky", "Nerez AISI 304 nebo žárový zinek"]]}, "features": ["Stírací most z profilové oceli s pochozí lávkou z protiskluzových roštů", "Uklidňovací válec s tangenciálním nátokem pro optimální hydraulický režim", "Odtokové žlaby s přelivnými hranami Thomsonova typu (trojúhelníkové výřezy)", "Čisticí kartáč pro automatické čištění odtokového žlabu během pojezdu"]}, {"id": "cistirny-kombiblok", "cat": "cistirny", "cat_name": "ČOV KOMBIBLOK®", "title": "Kompaktní biologická čistírna KOMBIBLOK® NG", "perex": "Ucelený stavebně-technologický celek pro 200 až 50 000 EO s minimálními nároky na zastavěnou plochu.", "img": "assets/img_06_.jpg", "badge": "Modely NG 1 až NG 8", "specs_preview": "Kapacita 200–3 200 EO v bloku • Průtok Q24 až 480 m³/den", "full_desc": "Systém KOMBIBLOK® NG integruje v jedné kompaktní stavební jednotce aktivační nádrž, dosazovací nádrž a kalový prostor. Odpadá nutnost rozsáhlých meziobjektových potrubních rozvodů a čerpacích jímek. Pracuje s nízkozatěžovanou aktivací s úplnou stabilizací kalu a nitrifikací/denitrifikací. Garantujeme splnění nejpřísnějších odtokových limitů po celou dobu životnosti čistírny.", "models": [{"name": "KOMBIBLOK NG 1–2", "desc": "Pro 200 až 400 EO, aktivace 70–100 m³, aerátor 1,5–2,2 kW"}, {"name": "KOMBIBLOK NG 3–5", "desc": "Pro 400 až 1 150 EO, aktivace 140–280 m³, aerátor 3,0–5,5 kW"}, {"name": "KOMBIBLOK NG 6–8", "desc": "Pro 1 150 až 3 200 EO, aktivace 400–800 m³, aerátor 7,5–15 kW"}, {"name": "Soustava KOMBIBLOK", "desc": "Paralelní řazení bloků pro aglomerace až do 50 000 EO"}], "table": {"headers": ["Model", "Kapacita [EO]", "Objem AN [m³]", "Průtok Q24 [m³/d]", "Plocha DN [m²]", "Příkon [kW]"], "rows": [["KOMBIBLOK NG 1", "200 – 280", "70", "42", "7", "1,5"], ["KOMBIBLOK NG 2", "280 – 400", "100", "60", "10", "2,2"], ["KOMBIBLOK NG 3", "400 – 580", "140", "84", "14", "3,0"], ["KOMBIBLOK NG 4", "580 – 800", "200", "120", "20", "4,0"], ["KOMBIBLOK NG 5", "800 – 1 150", "280", "172", "29", "5,5"], ["KOMBIBLOK NG 6", "1 150 – 1 600", "400", "240", "40", "7,5"], ["KOMBIBLOK NG 7", "1 600 – 2 300", "560", "345", "58", "11,0"], ["KOMBIBLOK NG 8", "2 300 – 3 200", "800", "480", "80", "15,0"]]}, "features": ["Integrovaná dosazovací nádrž se svislým průtokem a odsáváním vratného kalu", "Kyslíková sonda s frekvenčním měničem otáček pro energeticky úsporný provoz", "Možnost přepnutí aerátoru na pomalé otáčky pro řízenou denitrifikaci", "Členství v KOMBIBLOK Klubu s bezplatným poradenstvím a garancí servisu"]}, {"id": "sedim-podelne", "cat": "sedim", "cat_name": "Sedimentační nádrže", "title": "Podélné sedimentační nádrže a lapáky písku", "perex": "Obdélníkové usazovací nádrže s pojízdnými mosty šířky 5 až 15 metrů a jehlanovými kalovými jímkami.", "img": "assets/img_11_.jpg", "badge": "Typ EP-PSDN / EP-PSUN / LP", "specs_preview": "Šířky mostů 5.150 až 15.000 mm • Délky nádrží 20 až 60 m", "full_desc": "Podélné sedimentační nádrže jsou určeny pro větší čistírny odpadních vod s vysokým hydraulickým zatížením. Pojízdný stírací most stírá kal ze dna nádrže směrem k nátokové straně do kalových jímek a současně stírá plovoucí pěnu a nečistoty z hladiny do odvodňovacího žlabu. Speciální úpravou podélné nádrže je dvoukomorový provzdušňovaný lapák písku (LP).", "models": [{"name": "EP-PSUN", "desc": "Podélná usazovací nádrž předřazená biologickému stupni"}, {"name": "EP-PSDN", "desc": "Podélná dosazovací nádrž pro separaci aktivovaného kalu"}, {"name": "EP-PSDZ", "desc": "Podélná dešťová zdrž s automatickým vyprázdněním a oplachem"}, {"name": "LP (Lapák písku)", "desc": "Provzdušňovaný podélný lapák písku s mamutkovým čerpadlem"}], "table": {"headers": ["Šířka nádrže B", "Hmotnost mostu (L=30m)", "Přírůstek na 1m délky", "Příkon pojezdu"], "rows": [["5.150 mm (LP)", "5.400 kg", "180 kg/m", "2 x 0,37 kW"], ["6.000 mm", "4.500 kg", "100 kg/m", "2 x 0,37 kW"], ["7.850 mm (LP)", "6.600 kg", "250 kg/m", "2 x 0,55 kW"], ["9.000 mm", "5.500 kg", "120 kg/m", "2 x 0,55 kW"], ["12.000 mm", "7.000 kg", "150 kg/m", "2 x 0,75 kW"], ["15.000 mm", "9.000 kg", "200 kg/m", "2 x 1,10 kW"]]}, "features": ["Oboustranný elektromechanický pojezd po ocelových kolejnicích na koruně nádrže", "Dnové stírací radlice s pryžovými břity s automatickým přizvedáváním při zpětném chodu", "Možnost instalace ponorných čerpadel kalu přímo na pojezdový most", "Vyhřívání pojezdové dráhy pro spolehlivý zimní provoz v mrazech"]}, {"id": "predcisteni-cesle", "cat": "cesle", "cat_name": "Předčištění", "title": "Strojně stírané česle typu SH a lapáky písku", "perex": "Automatické strojní česle pro záchyt a vynesení hrubých nečistot z přítokových kanálů ČOV a MVE.", "img": "assets/img_08_.jpg", "badge": "Typ SH-K / SH-L", "specs_preview": "Průlinatost 6 až 50 mm • Kanály šířky 400 až 2 000 mm", "full_desc": "Strojně stírané česle typu SH představují spolehlivé primární mechanické předčištění. Hrablový mechanismus automaticky stírá česlicový rošt a vynáší zachycené shrabky do shozu nebo přímo do integrovaného lisovacího šnekového dopravníku, který shrabky odvodní a slisuje do kontejneru. Zařízení pracuje plně automaticky na základě hladinového rozdílu nebo časového intervalu.", "models": [{"name": "Česle SH přímé", "desc": "Klasické vertikální či šikmé provedení se sklonem 75° pro hluboké kanály"}, {"name": "Česle SH obloukové", "desc": "Kompaktní obloukové provedení pro menší čerpací stanice a mělké stoky"}, {"name": "Vírový lapák písku", "desc": "Kruhová nádrž s rotační lopatkou pro separaci anorganického písku"}, {"name": "Šnekový separátor písku", "desc": "Vynášecí a odvodňovací šnek směsi písku a vody"}], "table": {"headers": ["Parametr", "Hodnota", "Poznámka"], "rows": [["Šířka kanálu B", "400 až 2.000 mm", "Přizpůsobeno stavebním rozměrům stoky"], ["Hloubka kanálu H", "800 až 5.000 mm", "Vysoká tuhost bočních rámů"], ["Světlá průlinatost e", "6, 10, 15, 20, 30 mm", "Nerezové česlice AISI 304 / 316"], ["Objem lisu shrabků", "Úspora objemu až 65%", "Odvodnění s odvodem lisovací vody zpět"]]}, "features": ["Celonerezové konstrukční provedení zaručující dlouhou životnost v agresivní atmosféře", "Pohon elektropřevodovkou s momentovým přetěžovacím spínačem proti zaklínění kamene", "Doplňkové oplachování shrabků vodou pro snížení zápachu v kontejneru", "Snadná instalace do stávajícího betonového žlabu bez nutnosti rozsáhlých úprav"]}, {"id": "tesneni-linkseal", "cat": "linkseal", "cat_name": "Těsnění Link-Seal®", "title": "Certifikované modulární těsnění LINK-SEAL®", "perex": "Originální elastomerové řetězové těsnění prostupů potrubí stavebními konstrukcemi proti vodě a plynu.", "img": "assets/img_10_.jpg", "badge": "Modely LS 200 až LS 650", "specs_preview": "Tlaková odolnost 5 bar (50 m v.s.) • Teploty -40 až +200 °C", "full_desc": "LINK-SEAL® je přední světový modulární systém pro spolehlivé a trvalé utěsnění mezikruží mezi pažnicí (nebo jádrovým vrtem) a procházejícím potrubím. Těsnění je tvořeno řetězem vzájemně propojených elastomerových segmentů s přítlačnými deskami a stahovacími šrouby. Utažením šroubů dojde k radiálnímu roztažení pryže a vytvoření absolutně plynotěsného a vodotěsného spoje.", "models": [{"name": "Typ C (Standard)", "desc": "Černý EPDM kaučuk, kompozitové podložky, zinkované šrouby, -40 až +125 °C"}, {"name": "Typ S316 (Nerez)", "desc": "EPDM kaučuk, nerezové šrouby AISI 316 pro agresivní odpadní vody a chemické prostředí"}, {"name": "Typ O (Olejivzdorný)", "desc": "Zelený Nitril (NBR) odolávající ropným látkám, benzínu a rozpouštědlům"}, {"name": "Typ T (Vysokoteplotní)", "desc": "Šedý silikon odolávající teplotám až do +200 °C a parním rozvodům"}], "table": {"headers": ["Model elementu", "Min. mezera B [mm]", "Max. mezera B [mm]", "Délka L [mm]", "Rozsah potrubí D2 [mm]"], "rows": [["LS 200", "12,7", "15,7", "30,0", "21,3 – 323,9"], ["LS 275", "16,0", "20,0", "25,6", "0 – 90,0"], ["LS 300", "18,0", "22,5", "41,0", "44,5 – 250,0"], ["LS 325", "23,0", "30,0", "30,0", "88,9 – 711,0"], ["LS 400", "36,0", "46,0", "64,0", "139,7 – 1220,0"], ["LS 500", "60,0", "75,0", "80,0", "323,9 – 3000,0"], ["LS 600", "80,0", "102,0", "100,0", "500,0 – 3500,0"]]}, "features": ["Hydrostatická tlaková odolnost testována až do tlaku 5 bar (50 m vodního sloupce)", "Tlumení vibrací, rázů a dilatace potrubí – zamezuje přenosu chvění do stavební zdi", "Elektrická izolace chránící kovová potrubí před bludnými proudy a katodickou korozí", "Dodávka včetně ukončovacích manžet KT a DU a středicích prstenců"]}, {"id": "aerace-gigant", "cat": "cistirny", "cat_name": "ČOV KOMBIBLOK®", "title": "Povrchové aerační turbíny GIGANT - NG", "perex": "Vysokoúčinné mechanické aerátory pro provzdušňování aktivačních nádrží a oxidaci odpadních vod.", "img": "assets/img_04_.jpg", "badge": "Výkony 1,5 až 30 kW", "specs_preview": "Kyslíková kapacita OC až 2,2 kg O₂/kWh • Plovákové i pevné uložení", "full_desc": "Povrchový aerátor GIGANT-NG představuje léty prověřenou a modernizovanou aerační jednotku s vertikální pomaloběžnou turbínou. Turbína nasává vodu ze spodních vrstev nádrže a rozstřikuje ji do širokého paprsku kapek, čímž dochází k intenzivnímu přestupu vzdušného kyslíku do aktivační směsi a současně k dokonalému promíchání celého objemu nádrže bez tvorby usazenin na dně.", "models": [{"name": "GIGANT NG pevný", "desc": "Montáž na ocelový nebo betonový most nad aktivační nádrží"}, {"name": "GIGANT NG plovákový", "desc": "Uložení na plovákové konstrukci bez nutnosti kotvení do stavebních konstrukcí"}, {"name": "MONOBLOK - NG", "desc": "Diskontinuální aerační čistírna SBR pro malé izolované zdroje 50–200 EO"}], "table": {"headers": ["Typ aerátoru", "Příkon motoru [kW]", "Otáčky turbíny [ot/min]", "Kyslíková kapacita [kg O₂/h]"], "rows": [["GIGANT NG 1.5", "1,5", "95", "2,8 – 3,2"], ["GIGANT NG 3.0", "3,0", "75", "5,5 – 6,4"], ["GIGANT NG 5.5", "5,5", "60", "10,5 – 12,0"], ["GIGANT NG 7.5", "7,5", "52", "14,5 – 16,5"], ["GIGANT NG 11.0", "11,0", "45", "21,0 – 24,0"], ["GIGANT NG 15.0", "15,0", "38", "29,0 – 33,0"]]}, "features": ["Vysoká spolehlivost s minimální údržbou oproti aeračním elementům náchylným k ucpávání", "Plováková konstrukce umožňuje jednoduchou montáž a rychlé vytažení jeřábem při servisu", "Dvousložkový antikorozní nátěrový systém vhodný pro agresivní průmyslové vody", "Možnost regulace vneseného kyslíku pomocí frekvenčního měniče podle kyslíkové sondy"]}, {"id": "upravny-vody", "cat": "ostatni", "cat_name": "Úpravny vod & inženýring", "title": "Úpravny pitné a průmyslové vody, vodojemy", "perex": "Kompletní technologické vystrojení úpraven vod, armaturních komor, rychlofiltrů a dávkování chemikálií.", "img": "assets/img_13_.jpg", "badge": "Technologie úpravy vody", "specs_preview": "Strojní vystrojení • Čerpací stanice • Pomalé i rychlé filtry", "full_desc": "EKOPROGRES HRANICE a.s. navazuje na více než stoletou hranickou tradici ve vodárenství a výrobě čerpadel a armatur. Dodáváme technologické celky pro úpravu podzemních i povrchových vod na vodu pitnou, úpravny procesní a chladicí vody pro průmysl a technologie pro bazény. Zajišťujeme první i druhý stupeň úpravy vody včetně chemického hospodářství.", "models": [{"name": "Úpravny pitné vody", "desc": "Koagulace, sedimentace, filtrace přes rychlofiltry a hygienické zabezpečení"}, {"name": "Průmyslové chladicí okruhy", "desc": "Recirkulace vody, odkalování, filtrace a změkčování procesní vody"}, {"name": "Vystrojení vodojemů", "desc": "Nerezová potrubí, armaturní komory, zpětné klapky a obtoky"}, {"name": "Chemické hospodářství", "desc": "Rozpouštěcí nádrže s míchadly, dávkovací čerpadla a záchytné vany"}], "table": {"headers": ["Technologický stupeň", "Vyráběné strojní zařízení", "Materiál"], "rows": [["1. Stupeň úpravy", "Česle, lapáky splavenin, rychlomísiče, flokulátory", "Nerez AISI 304 / 316"], ["2. Stupeň filtrace", "Vystrojení pískových filtrů, drenážní systémy, odtokové regulátory", "Nerez / polypropylen"], ["Chemické dávkování", "Rozpouštěcí a zásobní nádrže, míchadla, dávkovací stanice", "PE / PP / nerez"], ["Čerpací stanice", "Dodávka čerpadel, armatur, výtlačných řadů a elektroinstalace", "Litina / tvárná litina / nerez"]]}, "features": ["Individuální projektové řešení přizpůsobené rozboru surové vody v dané lokalitě", "Kompletní dodávka včetně měření a regulace (MaR) a napojení na dispečink", "Strojní armaturní vystrojení s dlouhodobou zárukou a poprodejním servisem", "Rekonstrukce a modernizace starších vodárenských provozů v systému BIM"]}, {"id": "sedim-vertikalni", "cat": "sedim", "cat_name": "Sedimentační nádrže", "title": "Vertikální čtvercové a kruhové nádrže", "perex": "Dortmundské beznapěťové sedimentační nádrže bez pohyblivých částí a motorového pohonu.", "img": "assets/img_14_.jpg", "badge": "Typ EP-VkDN / EP-VSDN", "specs_preview": "Stavební hloubka od 3 m • Čtvercové i kruhové provedení", "full_desc": "Vertikální nádrže dortmundského typu využívají gravitační separaci bez jakýchkoliv pohyblivých strojních mechanismů. Voda přitéká do středového uklidňovacího válce, kde klesá ke dnu a při změně směru proudění dochází k oddělení kalu, který sedimentuje v kuželovém nebo jehlanovém dně. Jsou ideální pro menší čistírny, kde minimalizují provozní a energetické náklady.", "models": [{"name": "EP-VkDN kruhové", "desc": "Kruhový ocelový nebo betonový plášť s kuželovým dnem se sklonem 60°"}, {"name": "EP-VSDN čtvercové", "desc": "Čtvercový půdorys s jehlanovým dnem a nátokovým křížem"}, {"name": "EP-VSDZ dešťové", "desc": "Vertikální dešťové nádrže s přepadem pro zachycení přívalových srážek"}], "table": {"headers": ["Typ nádrže", "Doporučená hloubka", "Způsob odběru kalu", "Údržba"], "rows": [["EP-VkDN kruhová", "min. 3.000 mm dle ČSN", "Hydrostatický přetlak / mamutka", "Bezpohonové, nulová spotřeba elektro"], ["EP-VSDN čtvercová", "min. 3.000 mm dle ČSN", "Kalové potrubí se šoupětem", "Bezpohonové, bezúdržbové"], ["EP-VSDZ dešťová", "dle projektu", "Gravitační odkalení", "Automatický proplach dna"]]}, "features": ["Absolutní spolehlivost daná absencí jakýchkoliv motorů, řetězů či ložisek", "Odběr plovoucích nečistot pomocí ponorné děrované trubky s nerezovým košem", "Možnost prefabrikovaného samonosného provedení z konstrukční oceli", "Snadné napojení do sestav biologických čistíren KOMBIBLOK®"]}];

  var translations = {
    cs: {"page_title": "EKOPROGRES HRANICE, a.s. | Vodohospodářské technologie a čistírny odpadních vod", "top_founded": "Tradice od roku 1990", "top_standards": "Normy ČSN EN • ISO 9001", "top_location": "Sídlo Hranice I - Město", "nav_about": "O společnosti", "nav_products": "Výrobní program", "nav_kombiblok": "ČOV KOMBIBLOK®", "nav_calc": "Dimenzování EO", "nav_linkseal": "Těsnění Link-Seal®", "nav_contact": "Poptávka", "hero_badge": "Vodohospodářské technologie", "hero_badge_sub": "Založeno 1990 v Hranicích", "hero_title": "Technologie rozhoduje: Kompletní řešení pro čistírny odpadních vod a úpravny vod", "hero_desc": "EKOPROGRES HRANICE a.s. zajišťuje komplexní technologické dodávky vodohospodářských investičních celků. Vyrábíme osvědčené sedimentační nádrže, čistírny KOMBIBLOK®, strojně stírané česle a certifikované těsnění prostupů stavebními konstrukcemi LINK-SEAL®.", "hero_btn_catalog": "Katalog technologií", "hero_btn_calc": "Kalkulátor EO pro obce", "spec_systems": "ČOV systémy", "spec_systems_val": "KOMBIBLOK® 50–50 000 EO", "spec_sealing": "Těsnění prostupů", "spec_sealing_val": "LINK-SEAL® originál", "spec_experience": "Zkušenosti", "spec_experience_val": "Více než 35 let na trhu", "stat_proven": "Prověřená řešení", "stat_proven_desc": "Stovky úspěšných realizací pro města, obce a průmysl v ČR i zahraničí.", "stat_founded_lbl": "Rok založení jako první privátní a.s. ve vodohospodářství", "stat_years_lbl": "Let kontinuální výroby nádrží a technologických zařízení", "stat_eo_lbl": "Maximální kapacita komunálních čistírenských celků KOMBIBLOK®", "stat_czech_lbl": "České inženýrství navazující na tradici města Hranice", "about_eyebrow": "Profil a historie", "about_heading": "EKOPROGRES HRANICE a.s.", "about_subtext": "Sídlo společnosti je v Hranicích, ve městě s dlouholetou tradicí ve výstavbě vodovodů, armatur a čerpací techniky.", "feat1_t": "Komplexní vodohospodářské dodávky", "feat1_d": "Zajišťujeme kompletní technologické vystrojení čistíren odpadních vod, čerpacích stanic a úpraven vody včetně montáže a zprovoznění.", "feat2_t": "Atypické stroje a sedimentace", "feat2_d": "Vyrábíme speciální stroje ověřené dlouhodobým provozem – sedimentační nádrže, stírací mosty a mechanicky stírané česle pro čerpací kanály.", "feat3_t": "Dlouhá životnost a servis", "feat3_d": "Díky robustnímu nerezovému provedení a antikorozní ochraně pracují naše technologie spolehlivě v nepřetržitém provozu desítky let.", "prog_eyebrow": "Katalog technologií", "prog_heading": "Výrobní program vodohospodářských zařízení", "prog_subtext": "Kliknutím na kartu zobrazíte kompletní technický list s tabulkami rozměrů, kapacit a vyráběných variant.", "f_all": "Všechny technologie", "f_sedim": "Sedimentační nádrže", "f_cov": "Čistírny KOMBIBLOK®", "f_cesle": "Strojní česle SH", "f_linkseal": "LINK-SEAL® těsnění", "f_other": "Ostatní zařízení", "tm_lbl_desc": "Technický popis & funkce zařízení", "tm_lbl_models": "Vyráběné typové varianty", "tm_lbl_specs": "Technické parametry & dimenze", "tm_lbl_features": "Konstrukční přednosti", "tm_btn_inquire": "Poptat tuto specifikaci zařízení", "kombi_tag": "Vlajková loď výroby", "kombi_title": "Systém čistíren KOMBIBLOK®", "kombi_desc": "KOMBIBLOK® představuje ucelenou řadu kompaktních biologických čistíren odpadních vod. Spojuje v jedné kompaktní stavebně-technologické jednotce předčištění, aktivaci, nitrifikaci, denitrifikaci i dosazování.", "kombi_li_1": "Minimální zastavěná plocha oproti konvenčním rozsáhlým čistírnám", "kombi_li_2": "Vysoká účinnost čištění s rezervou splňující nejpřísnější limity EU", "kombi_li_3": "Automatizovaný provoz s nízkou spotřebou elektrické energie", "kombi_li_4": "Kompletní realizace na klíč od projektu po zprovoznění", "kombi_btn": "Zadat poptávku na KOMBIBLOK®", "kombi_badge_1": "Patentovaná technologie", "kombi_badge_2": "ČSN EN 12255", "kombi_badge_3": "Plná garance parametrů", "calc_eyebrow": "Technické dimenzování", "calc_heading": "Kalkulátor kapacity čistírny KOMBIBLOK®", "calc_subtext": "Zvolte předpokládaný počet ekvivalentních obyvatel (EO) a typ zástavby. Systém spočítá základní technologické dimenze.", "calc_lbl_eo": "Velikost aglomerace [EO]", "calc_lbl_range": "Velikost aglomerace [EO]", "calc_lbl_type": "Typ odpadních vod", "calc_opt_communal": "Splaškové komunální vody (obce a města)", "calc_opt_industrial": "Průmyslové vody (potravinářství / výroba)", "calc_opt_combined": "Kombinované splaškové a průmyslové vody", "calc_box_title": "Doporučená konfigurace technologie", "calc_res_badge": "Doporučená sestava", "calc_btn_quote": "Poptat navrženou sestavu KOMBIBLOK®", "calc_m_flow": "Průměrný denní průtok Q24:", "calc_m_tank": "Aktivační nádrž objem:", "calc_m_settle": "Dosazovací plocha DN:", "calc_m_aeration": "Aerační systém:", "calc_m_sludge": "Zpracování kalu:", "calc_btn_inquire": "Poptat navrženou sestavu KOMBIBLOK®", "link_eyebrow": "Certifikované prostupy", "link_heading": "Originální modulární těsnění LINK-SEAL®", "link_subtext": "Špičkové těsnění kruhových prostupů potrubí stavebními stěnami nádrží, šachet a základů budov.", "ls_1_title": "Hydrostatický tlak až 50 m", "ls_1_desc": "Pryžové elastomerové bloky stlačované nerezovými šrouby garantují absolutní vodotěsnost a plynotěsnost prostupu.", "ls_2_title": "Tlumič vibrací a hluku", "ls_2_desc": "Elastické uložení izoluje chvění od čerpadel a kompresorů, čímž chrání stavební konstrukce před praskáním.", "ls_3_title": "Materiálové varianty", "ls_3_desc": "EPDM pro pitnou a odpadní vodu, Nitril pro ropné látky a silikonové směsi pro vysoké teploty až do 200 °C.", "contact_eyebrow": "Spojte se s námi", "contact_heading": "Kontaktní a poptávkové centrum", "contact_subtext": "Odborníci z EKOPROGRES HRANICE a.s. vám pomohou s projektem, studií proveditelnosti i dodávkou technologie.", "c_company_title": "EKOPROGRES HRANICE a.s.", "btn_copy": "Kopírovat", "c_box_data": "Datová schránka:", "c_direct_title": "Přímé kontakty", "form_title": "Nezávazná technologická poptávka", "form_desc": "Vyplňte základní údaje k záměru, zpracujeme technický návrh.", "form_name": "Jméno a příjmení *", "form_name_ph": "Ing. Jan Dvořák", "form_org": "Obec / Společnost", "form_org_ph": "Obec / Firma s.r.o.", "form_email": "E-mail *", "form_email_ph": "dvorak@obec.cz", "form_phone": "Telefon *", "form_phone_ph": "+420 602 000 000", "form_tech": "Poptávané zařízení", "opt_1": "ČOV KOMBIBLOK® pro obec / podnik", "opt_2": "Sedimentační nádrže a stírací mosty", "opt_3": "Strojně stírané česle typu SH", "opt_4": "Modulární těsnění LINK-SEAL®", "opt_5": "Jiné vodohospodářské zařízení", "form_msg": "Specifikace záměru, kapacita EO či lokalita *", "form_msg_ph": "Uveďte předpokládaný počet obyvatel EO, průtok odpadních vod či technické požadavky na prostupy...", "form_submit": "Odeslat vodohospodářskou poptávku", "map_bar_title": "Sídlo společnosti: Třída 1. máje 1013, 753 01 Hranice", "map_bar_link": "Zobrazit na Mapy.cz →", "footer_desc": "Významný český výrobce a technologický dodavatel investičních celků ve vodohospodářství. Čistírny odpadních vod KOMBIBLOK®, sedimentační nádrže a těsnění LINK-SEAL®.", "footer_rights": "Všechna práva vyhrazena.", "footer_nav_title": "Navigace", "footer_contact_title": "Kontaktní údaje", "footer_databox": "Datová schránka: nscuyhi", "cat_card1_title": "Kruhové sedimentační nádrže se stíracími mosty", "cat_card1_desc": "Dosazovací a usazovací kruhové nádrže s pojezdovým mostem a pohonem s ozubeným hřebenem pro čistírny odpadních vod.", "cat_card2_title": "Kompaktní biologická čistírna KOMBIBLOK® NG", "cat_card2_desc": "Ucelený stavebně-technologický celek pro 200 až 50 000 EO s minimálními nároky na zastavěnou plochu.", "cat_card3_title": "Podélné sedimentační nádrže a lapáky písku", "cat_card3_desc": "Obdélníkové usazovací nádrže s pojízdnými mosty šířky 5 až 15 metrů a jehlanovými kalovými jímkami.", "cat_card4_title": "Strojně stírané česle typu SH a lapáky písku", "cat_card4_desc": "Automatické strojní česle pro záchyt a vynesení hrubých nečistot z přítokových kanálů ČOV a MVE.", "cat_card5_title": "Certifikované modulární těsnění LINK-SEAL®", "cat_card5_desc": "Originální elastomerové řetězové těsnění prostupů potrubí stavebními konstrukcemi proti vodě a plynu.", "cat_card6_title": "Povrchové aerační turbíny GIGANT - NG", "cat_card6_desc": "Vysokoúčinné mechanické aerátory pro provzdušňování aktivačních nádrží a oxidaci odpadních vod.", "cat_card7_title": "Úpravny pitné a průmyslové vody, vodojemy", "cat_card7_desc": "Kompletní technologické vystrojení úpraven vod, armaturních komor, rychlofiltrů a dávkování chemikálií.", "cat_card8_title": "Vertikální čtvercové a kruhové nádrže", "cat_card8_desc": "Dortmundské beznapěťové sedimentační nádrže bez pohyblivých částí a motorového pohonu."},
    en: {"page_title": "EKOPROGRES HRANICE, a.s. | Water Treatment Technologies and Wastewater Plants", "top_founded": "Established in 1990", "top_standards": "EN Standards • ISO 9001", "top_location": "Headquarters Hranice, Czech Republic", "nav_about": "About Us", "nav_products": "Product Range", "nav_kombiblok": "WWTP KOMBIBLOK®", "nav_calc": "PE Sizing", "nav_linkseal": "Link-Seal® Seals", "nav_contact": "Inquiry", "hero_badge": "Water Management Technologies", "hero_badge_sub": "Founded in 1990 in Hranice", "hero_title": "Engineering Precision: Turnkey Solutions for Wastewater and Water Treatment Plants", "hero_desc": "EKOPROGRES HRANICE a.s. is a premier European supplier of water management capital equipment. We manufacture heavy sedimentation tanks, KOMBIBLOK® wastewater plants, mechanical bar screens, and LINK-SEAL® wall penetration seals.", "hero_btn_catalog": "Equipment Catalog", "hero_btn_calc": "PE Sizing Calculator", "spec_systems": "WWTP Systems", "spec_systems_val": "KOMBIBLOK® 50–50,000 PE", "spec_sealing": "Penetration Seals", "spec_sealing_val": "LINK-SEAL® Original", "spec_experience": "Experience", "spec_experience_val": "Over 35 Years on Market", "stat_proven": "Proven Solutions", "stat_proven_desc": "Hundreds of successful turnkey installations across municipalities and heavy industries.", "stat_founded_lbl": "Year founded as the first private water technology corporation", "stat_years_lbl": "Years of continuous manufacturing of tanks and process units", "stat_eo_lbl": "Maximum population equivalent for municipal KOMBIBLOK® complexes", "stat_czech_lbl": "Czech engineering legacy rooted in the industrial city of Hranice", "about_eyebrow": "Company Profile & History", "about_heading": "EKOPROGRES HRANICE a.s.", "about_subtext": "Headquartered in Hranice, a historical industrial center recognized for century-old pump, valve, and water engineering traditions.", "feat1_t": "Turnkey Water Engineering", "feat1_d": "We deliver full technological outfitting for wastewater treatment plants, pumping stations, and drinking water facilities including installation.", "feat2_t": "Custom Machines & Clarifiers", "feat2_d": "We engineer specialized industrial machinery: circular and rectangular clarifiers, scraper bridges, and automated mechanical channel screens.", "feat3_t": "Durability & Field Service", "feat3_d": "Built with heavy stainless steel and industrial protective coatings, our systems operate trouble-free 24/7 for decades.", "prog_eyebrow": "Equipment Catalog", "prog_heading": "Water & Wastewater Equipment Range", "prog_subtext": "Click on any product card to open the technical datasheet with dimensional tables, capacities, and manufactured variants.", "f_all": "All Technologies", "f_sedim": "Clarifiers & Settling", "f_cov": "KOMBIBLOK® WWTP", "f_cesle": "Mechanical Screens", "f_linkseal": "LINK-SEAL® Seals", "f_other": "Water Treatment", "tm_lbl_desc": "Technical Description & Operation", "tm_lbl_models": "Manufactured Model Variants", "tm_lbl_specs": "Technical Specifications & Dimensions", "tm_lbl_features": "Design & Engineering Advantages", "tm_btn_inquire": "Request Proposal for This Specification", "kombi_tag": "Flagship Technology", "kombi_title": "KOMBIBLOK® WWTP System", "kombi_desc": "KOMBIBLOK® is a unified line of compact biological wastewater treatment plants integrating fine screening, aeration, nitrification, denitrification, and final clarification within a single civil structure.", "kombi_li_1": "Minimal footprint compared to conventional dispersed wastewater plants", "kombi_li_2": "High biological treatment efficiency exceeding strict European environmental limits", "kombi_li_3": "Automated operations with optimized energy-saving aeration controls", "kombi_li_4": "Complete turnkey implementation from design to commissioning", "kombi_btn": "Inquire KOMBIBLOK® System", "kombi_badge_1": "Patented Technology", "kombi_badge_2": "EN 12255 Standard", "kombi_badge_3": "Full Performance Guarantee", "calc_eyebrow": "Engineering Sizing", "calc_heading": "KOMBIBLOK® Capacity Calculator", "calc_subtext": "Select population equivalent (PE) and wastewater source. Our system calculates baseline engineering dimensions.", "calc_lbl_eo": "Agglomeration Size [PE]", "calc_lbl_range": "Agglomeration Size [PE]", "calc_lbl_type": "Wastewater Matrix", "calc_opt_communal": "Municipal Sewage (Towns & Villages)", "calc_opt_industrial": "Industrial Effluent (Food / Chemical)", "calc_opt_combined": "Combined Municipal and Industrial", "calc_box_title": "Recommended Technological Setup", "calc_res_badge": "Recommended Setup", "calc_btn_quote": "Inquire Designed KOMBIBLOK® Setup", "calc_m_flow": "Average daily flow Q24:", "calc_m_tank": "Aeration basin volume:", "calc_m_settle": "Clarification surface DN:", "calc_m_aeration": "Aeration system:", "calc_m_sludge": "Sludge stabilization:", "calc_btn_inquire": "Inquire Designed KOMBIBLOK® Setup", "link_eyebrow": "Certified Wall Penetrations", "link_heading": "Original Modular Seals LINK-SEAL®", "link_subtext": "The premier modular mechanical seal for pipes penetrating concrete walls, casing sleeves, and manholes.", "ls_1_title": "Hydrostatic Head up to 50 m", "ls_1_desc": "Synthetic elastomer blocks compressed by stainless steel bolts provide absolute water and gas tightness up to 5 bar.", "ls_2_title": "Vibration & Shock Absorption", "ls_2_desc": "Elastic mounting isolates vibrations from heavy sewage pumps and blowers, protecting structural walls from cracking.", "ls_3_title": "Material Formulations", "ls_3_desc": "EPDM for potable and wastewater, Nitrile for hydrocarbons, and silicone elastomers for extreme temperatures up to 200 °C.", "contact_eyebrow": "Get in Touch", "contact_heading": "Contact & Engineering Center", "contact_subtext": "EKOPROGRES HRANICE a.s. engineering teams are ready to support your plant design, feasibility study, or equipment supply.", "c_company_title": "EKOPROGRES HRANICE a.s.", "btn_copy": "Copy", "c_box_data": "Data Box ID:", "c_direct_title": "Direct Contacts", "form_title": "Non-Binding Engineering Inquiry", "form_desc": "Provide key project criteria, and our engineering department will formulate a technical proposal.", "form_name": "Full Name *", "form_name_ph": "John Doe, M.Sc.", "form_org": "Municipality / Company", "form_org_ph": "City Council / Corporation", "form_email": "E-mail *", "form_email_ph": "doe@company.com", "form_phone": "Phone *", "form_phone_ph": "+420 602 000 000", "form_tech": "Required Equipment", "opt_1": "KOMBIBLOK® WWTP for town / industry", "opt_2": "Clarifiers & Scraper Bridges", "opt_3": "Mechanically Cleaned Screen SH", "opt_4": "Modular Penetration Seals LINK-SEAL®", "opt_5": "Other Water Treatment Plant Equipment", "form_msg": "Project Scope, Flow Capacity or Site Criteria *", "form_msg_ph": "Please specify estimated PE capacity, daily wastewater flow, or wall sleeve dimensions...", "form_submit": "Submit Engineering Inquiry", "map_bar_title": "Headquarters: Třída 1. máje 1013, 753 01 Hranice, Czech Republic", "map_bar_link": "View on Mapy.cz →", "footer_desc": "Major Czech manufacturer and turnkey technological contractor for water infrastructure. KOMBIBLOK® treatment plants, clarifiers, and LINK-SEAL® penetration systems.", "footer_rights": "All rights reserved.", "footer_nav_title": "Navigation", "footer_contact_title": "Contact Details", "footer_databox": "Data Box: nscuyhi", "cat_card1_title": "Circular Sedimentation Tanks with Scraper Bridges", "cat_card1_desc": "Clarification and settling circular tanks with traveling bridge and rack drive for wastewater treatment plants.", "cat_card2_title": "Compact Biological Treatment Plant KOMBIBLOK NG", "cat_card2_desc": "Complete technological unit for 200 to 50,000 PE with minimal footprint requirements.", "cat_card3_title": "Longitudinal Sedimentation Tanks and Grit Chambers", "cat_card3_desc": "Rectangular settling tanks with traveling bridges 5 to 15 m wide and pyramidal sludge hoppers.", "cat_card4_title": "Mechanically Cleaned Bar Screens SH and Grit Traps", "cat_card4_desc": "Automatic mechanical screens for coarse solids separation and lifting from inlet wastewater channels.", "cat_card5_title": "Certified Modular Mechanical Seals LINK-SEAL", "cat_card5_desc": "Original modular elastomer mechanical sealing chain for pipe penetrations through concrete structures.", "cat_card6_title": "Surface Aeration Turbines GIGANT - NG", "cat_card6_desc": "High-efficiency mechanical aerators for wastewater aeration tanks and biological oxidation.", "cat_card7_title": "Potable and Process Water Treatment Plants, Reservoirs", "cat_card7_desc": "Turnkey mechanical outfitting for water treatment plants, valve chambers, rapid gravity filters.", "cat_card8_title": "Vertical Square and Circular Dortmund Tanks", "cat_card8_desc": "Dortmund gravity sedimentation clarifiers operating without moving parts or motor drives."},
    de: {"page_title": "EKOPROGRES HRANICE, a.s. | Wasserwirtschaft und Kläranlagentechnologie", "top_founded": "Tradition seit 1990", "top_standards": "ČSN EN Normen • ISO 9001", "top_location": "Sitz Hranice, Tschechische Republik", "nav_about": "Unternehmen", "nav_products": "Produktionsprogramm", "nav_kombiblok": "Kläranlage KOMBIBLOK®", "nav_calc": "EW Auslegung", "nav_linkseal": "Link-Seal® Dichtungen", "nav_contact": "Anfrage", "hero_badge": "Wasserwirtschaftliche Technologien", "hero_badge_sub": "Gegründet 1990 in Hranice", "hero_title": "Präzision entscheidet: Komplettlösungen für Kläranlagen und Wasserwerke", "hero_desc": "EKOPROGRES HRANICE a.s. liefert modernste verfahrenstechnische Ausrüstung für Wasser und Abwasser. Wir fertigen Sedimentationsbecken, Kompaktkläranlagen KOMBIBLOK®, mechanische Rechen und zertifizierte LINK-SEAL® Ringraumdichtungen.", "hero_btn_catalog": "Gerätekatalog", "hero_btn_calc": "EW Auslegungskalkulator", "spec_systems": "Kläranlagen", "spec_systems_val": "KOMBIBLOK® 50–50.000 EW", "spec_sealing": "Durchführungen", "spec_sealing_val": "LINK-SEAL® Original", "spec_experience": "Erfahrung", "spec_experience_val": "Über 35 Jahre am Markt", "stat_proven": "Bewährte Lösungen", "stat_proven_desc": "Hunderte erfolgreiche Realisierungen für Kommunen und Industrie im In- und Ausland.", "stat_founded_lbl": "Gründungsjahr als erste private AG im Bereich der Wasserwirtschaft", "stat_years_lbl": "Jahre kontinuierlicher Fertigung von Becken und Ausrüstung", "stat_eo_lbl": "Maximale Ausbaugröße kommunaler KOMBIBLOK® Komplexe", "stat_czech_lbl": "Tschechischer Maschinenbau anknüpfend an die Tradition von Hranice", "about_eyebrow": "Profil und Geschichte", "about_heading": "EKOPROGRES HRANICE a.s.", "about_subtext": "Der Firmensitz befindet sich in Hranice, einer Stadt mit über hundertjähriger Tradition im Pumpen- und Armaturenbau.", "feat1_t": "Komplette wasserwirtschaftliche Lieferungen", "feat1_d": "Wir übernehmen die gesamte maschinentechnische Ausrüstung von Kläranlagen, Pumpstationen und Wasserwerken inklusive Montage.", "feat2_t": "Sondermaschinen & Sedimentation", "feat2_d": "Wir bauen betriebsbewährte Maschinen: Rund- und Längsbecken, Räumerbrücken und mechanisch gereinigte Rechen für Gerinne.", "feat3_t": "Hohe Lebensdauer & Werkskundendienst", "feat3_d": "Robuste Edelstahlausführung und industrieller Korrosionsschutz garantieren jahrzehntelangen Dauerbetrieb.", "prog_eyebrow": "Gerätekatalog", "prog_heading": "Produktionsprogramm Wasserwirtschaft", "prog_subtext": "Klicken Sie auf eine Karte, um das technische Datenblatt mit Maßtabellen, Durchsätzen und Modellen zu öffnen.", "f_all": "Alle Technologien", "f_sedim": "Sedimentationsbecken", "f_cov": "Kläranlagen KOMBIBLOK®", "f_cesle": "Maschinelle Rechen SH", "f_linkseal": "LINK-SEAL® Dichtungen", "f_other": "Sonstige Anlagen", "tm_lbl_desc": "Technische Beschreibung & Funktion", "tm_lbl_models": "Lieferbare Typenvarianten", "tm_lbl_specs": "Technische Daten & Dimensionen", "tm_lbl_features": "Konstruktive Vorzüge", "tm_btn_inquire": "Diese Ausrüstungs-Spezifikation anfragen", "kombi_tag": "Aushängeschild der Fertigung", "kombi_title": "Kläranlagensystem KOMBIBLOK®", "kombi_desc": "KOMBIBLOK® ist eine ausgereifte Baureihe kompakter biologischer Abwasserreinigungsanlagen, die Vorreinigung, Belegung, Nitrifikation, Denitrifikation und Nachklärung in einer Einheit vereint.", "kombi_li_1": "Minimaler Flächenbedarf im Vergleich zu konventionellen Großanlagen", "kombi_li_2": "Hohe Reinigungsleistung mit sicherer Einhaltung strengster EU-Ablaufwerte", "kombi_li_3": "Vollautomatischer Betrieb mit geringem spezifischem Energieverbrauch", "kombi_li_4": "Komplette schlüsselfertige Realisierung von Planung bis Inbetriebnahme", "kombi_btn": "KOMBIBLOK® System anfragen", "kombi_badge_1": "Patentierte Technologie", "kombi_badge_2": "Norm EN 12255", "kombi_badge_3": "Volle Parameter-Garantie", "calc_eyebrow": "Technische Auslegung", "calc_heading": "Kapazitätsrechner KOMBIBLOK®", "calc_subtext": "Wählen Sie Einwohnerwerte (EW) und Abwasserart. Das System ermittelt die wesentlichen verfahrenstechnischen Kennzahlen.", "calc_lbl_eo": "Größe der Ortschaft [EW]", "calc_lbl_range": "Größe der Ortschaft [EW]", "calc_lbl_type": "Abwasserzusammensetzung", "calc_opt_communal": "Häusliches Abwasser (Kommunen)", "calc_opt_industrial": "Gewerbliches Abwasser (Lebensmittel/Industrie)", "calc_opt_combined": "Mischwasser kommunal & industriell", "calc_box_title": "Empfohlene technologische Konfiguration", "calc_res_badge": "Empfohlene Konfiguration", "calc_btn_quote": "KOMBIBLOK® Konfiguration anfragen", "calc_m_flow": "Mittlerer Tageszulauf Q24:", "calc_m_tank": "Belebungsbecken Volumen:", "calc_m_settle": "Nachklärfläche DN:", "calc_m_aeration": "Belüftungssystem:", "calc_m_sludge": "Schlammbehandlung:", "calc_btn_inquire": "KOMBIBLOK® Konfiguration anfragen", "link_eyebrow": "Zertifizierte Durchführungen", "link_heading": "Original Ringraumdichtungen LINK-SEAL®", "link_subtext": "Erstklassige modulare Abdichtung von Rohrdurchführungen durch Bauwerkswände von Becken, Schächten und Gebäuden.", "ls_1_title": "Hydrostatischer Druck bis 50 m", "ls_1_desc": "Gummielastomerelemente mit Edelstahlschrauben garantieren absolute Wasser- und Gasdichtigkeit bis 5 bar.", "ls_2_title": "Dämpft Schwingungen und Lärm", "ls_2_desc": "Elastische Lagerung entkoppelt Pumpenschwingungen und schützt Bauwerke vor Rissbildung.", "ls_3_title": "Werkstoffvarianten", "ls_3_desc": "EPDM für Trink- und Abwasser, Nitril für Öle und Silikonmischungen für Temperaturen bis 200 °C.", "contact_eyebrow": "Kontakt aufnehmen", "contact_heading": "Kontakt- und Anfragezentrum", "contact_subtext": "Die Experten von EKOPROGRES HRANICE a.s. beraten Sie gern bei Studien, Planung und Lieferung.", "c_company_title": "EKOPROGRES HRANICE a.s.", "btn_copy": "Kopieren", "c_box_data": "Elektronisches Postfach:", "c_direct_title": "Direktkontakte", "form_title": "Unverbindliche Technologieanfrage", "form_desc": "Tragen Sie die Eckdaten Ihres Vorhabens ein, wir erarbeiten einen technischen Vorschlag.", "form_name": "Vor- und Nachname *", "form_name_ph": "Dipl.-Ing. Hans Müller", "form_org": "Gemeinde / Unternehmen", "form_org_ph": "Gemeinde / Firma GmbH", "form_email": "E-Mail *", "form_email_ph": "mueller@gemeinde.de", "form_phone": "Telefon *", "form_phone_ph": "+420 602 000 000", "form_tech": "Gewünschte Ausrüstung", "opt_1": "KOMBIBLOK® Kläranlage für Ort/Industrie", "opt_2": "Sedimentationsbecken und Räumerbrücken", "opt_3": "Maschinell geräumte Rechen Typ SH", "opt_4": "Modulare Dichtungen LINK-SEAL®", "opt_5": "Sonstige wasserwirtschaftliche Anlagen", "form_msg": "Projektbeschreibung, Kapazität EW oder Standort *", "form_msg_ph": "Geben Sie die geschätzte EW-Zahl, Abwassermengen oder Abmessungen der Rohrdurchführungen an...", "form_submit": "Wasserwirtschaftliche Anfrage senden", "map_bar_title": "Firmensitz: Třída 1. máje 1013, 753 01 Hranice, Tschechische Republik", "map_bar_link": "Auf Mapy.cz ansehen →", "footer_desc": "Bedeutender tschechischer Hersteller und Lieferant wasserwirtschaftlicher Investitionskomplexe. Kläranlagen KOMBIBLOK®, Sedimentationsbecken und LINK-SEAL® Dichtungen.", "footer_rights": "Alle Rechte vorbehalten.", "footer_nav_title": "Navigation", "footer_contact_title": "Kontaktdaten", "footer_databox": "Postfach: nscuyhi", "cat_card1_title": "Rundsedimentationsbecken mit Räumerbrücken", "cat_card1_desc": "Nachklär- und Absetzbecken mit fahrbarer Brücke und Zahnstangenantrieb für Kläranlagen.", "cat_card2_title": "Kompaktkläranlage KOMBIBLOK NG", "cat_card2_desc": "Kompakte verfahrenstechnische Gesamtanlage für 200 bis 50.000 EW mit minimalem Flächenbedarf.", "cat_card3_title": "Längssedimentationsbecken und Sandfänge", "cat_card3_desc": "Rechteckige Absetzbecken mit Räumerbrücken von 5 bis 15 m Spannweite und Schlammtrichtern.", "cat_card4_title": "Maschinell geräumte Rechen Typ SH und Sandfänge", "cat_card4_desc": "Automatische Rechenanlagen zur Grobstoffrückhaltung in Zulaufgerinnen von Kläranlagen.", "cat_card5_title": "Zertifizierte modulare Dichtungen LINK-SEAL", "cat_card5_desc": "Modulare Elastomer-Gliederdichtungen für druckwasser- und gasdichte Rohrdurchführungen.", "cat_card6_title": "Oberflächenbelüfter GIGANT - NG", "cat_card6_desc": "Hocheffiziente mechanische Belüftungsturbinen zur Sauerstoffanreicherung in Belebungsbecken.", "cat_card7_title": "Trink- und Brauchwasseraufbereitungsanlagen, Speicher", "cat_card7_desc": "Komplette maschinentechnische Ausrüstung für Wasserwerke, Armaturenkammern und Schnellfilter.", "cat_card8_title": "Vertikale Dortmund-Sedimentationsbecken", "cat_card8_desc": "Trichterförmige Dortmunder Absetzbecken ohne bewegliche Maschinenteile und ohne Antrieb."}
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

    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
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
    if (typeof closeTechModal === "function") {
      closeTechModal();
    }
  }
  window.setLanguage = applyLanguage;

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

  var techModalBackdrop = document.getElementById('techModalBackdrop');
  var techModalClose = document.getElementById('techModalClose');
  var tmTag = document.getElementById('tmTag');
  var tmTitle = document.getElementById('tmTitle');
  var tmBadge = document.getElementById('tmBadge');
  var tmImg = document.getElementById('tmImg');
  var tmDesc = document.getElementById('tmDesc');
  var tmModels = document.getElementById('tmModels');
  var tmTable = document.getElementById('tmTable');
  var tmFeatures = document.getElementById('tmFeatures');
  var btnInquireFromModal = document.getElementById('btnInquireFromModal');
  var currentActiveTech = null;

  function openTechModal(techId) {
    var item = techCatalog.find(function (t) { return t.id === techId; });
    if (!item || !techModalBackdrop) return;
    currentActiveTech = item;

    if (tmTag) tmTag.textContent = item.cat_name;
    if (tmTitle) tmTitle.textContent = item.title;
    if (tmBadge) tmBadge.textContent = item.badge;
    if (tmImg) {
      tmImg.src = item.img;
      tmImg.alt = item.title;
    }
    if (tmDesc) tmDesc.textContent = item.full_desc;

    if (tmModels) {
      tmModels.innerHTML = '';
      if (item.models && item.models.length > 0) {
        item.models.forEach(function (m) {
          var li = document.createElement('li');
          li.innerHTML = '<strong>' + m.name + ':</strong> ' + m.desc;
          tmModels.appendChild(li);
        });
      }
    }

    if (tmTable) {
      tmTable.innerHTML = '';
      if (item.table && item.table.headers && item.table.rows) {
        var thead = document.createElement('thead');
        var trH = document.createElement('tr');
        item.table.headers.forEach(function (h) {
          var th = document.createElement('th');
          th.textContent = h;
          trH.appendChild(th);
        });
        thead.appendChild(trH);
        tmTable.appendChild(thead);

        var tbody = document.createElement('tbody');
        item.table.rows.forEach(function (row) {
          var trB = document.createElement('tr');
          row.forEach(function (cell) {
            var td = document.createElement('td');
            td.textContent = cell;
            trB.appendChild(td);
          });
          tbody.appendChild(trB);
        });
        tmTable.appendChild(tbody);
      }
    }

    if (tmFeatures) {
      tmFeatures.innerHTML = '';
      if (item.features && item.features.length > 0) {
        item.features.forEach(function (f) {
          var li = document.createElement('li');
          li.textContent = f;
          tmFeatures.appendChild(li);
        });
      }
    }

    techModalBackdrop.classList.add('is-open');
    techModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!techModalBackdrop) return;
    techModalBackdrop.classList.remove('is-open');
    techModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-tech]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var id = btn.getAttribute('data-open-tech');
      openTechModal(id);
    });
  });

  document.querySelectorAll('.cat-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('button')) return;
      var id = card.getAttribute('data-id');
      if (id) openTechModal(id);
    });
  });

  if (techModalClose) {
    techModalClose.addEventListener('click', closeTechModal);
  }

  if (techModalBackdrop) {
    techModalBackdrop.addEventListener('click', function (e) {
      if (e.target === techModalBackdrop) {
        closeTechModal();
      }
    });
  }

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && techModalBackdrop && techModalBackdrop.classList.contains('is-open')) {
      closeTechModal();
    }
  });

  if (btnInquireFromModal) {
    btnInquireFromModal.addEventListener('click', function () {
      closeTechModal();
      var contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (currentActiveTech) {
        var covTech = document.getElementById('covTech');
        var covMsg = document.getElementById('covMsg');
        if (covTech) {
          if (currentActiveTech.cat === 'cistirny') {
            covTech.value = 'kombiblok';
          } else if (currentActiveTech.cat === 'sedim') {
            covTech.value = 'sedim';
          } else if (currentActiveTech.cat === 'cesle') {
            covTech.value = 'cesle';
          } else if (currentActiveTech.cat === 'linkseal') {
            covTech.value = 'linkseal';
          } else {
            covTech.value = 'jine';
          }
        }
        if (covMsg) {
          var techNote = 'Poptávka na technologii: ' + currentActiveTech.title + ' (' + currentActiveTech.badge + ').\n\nPožadované parametry a specifikace:\n';
          covMsg.value = techNote;
          covMsg.focus();
        }
      }
    });
  }

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
    var type = covType ? covType.value : 'communal';

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
