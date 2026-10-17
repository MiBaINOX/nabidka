function applyLanguage(lang) {
const normLang = (lang || 'cz').toLowerCase();
const displayLang = normLang === 'sk' ? 'SK' : (normLang === 'en' ? 'EN' : 'CZ');
localStorage.setItem('social_group_lang', normLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
const bLang = (btn.getAttribute('data-lang') || '').toLowerCase();
if (bLang === normLang) {
btn.classList.add('active');
} else {
btn.classList.remove('active');
}
});

const dict = translations[displayLang] || translations.CZ;

document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
if (dict[key]) {
el.innerHTML = dict[key];
}
});

document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
const key = el.getAttribute('data-i18n-placeholder');
if (dict[key]) {
el.placeholder = dict[key];
}
});
}

window.setLanguage = applyLanguage;

const catalogData = [
{
id: 'sanace-kremova-injektaz',
title: 'Silan-siloxanová krémová injektáž zdiva',
category: 'sanace',
category_name: 'Sanace zdiva',
image: 'assets/sanace_injektaz.jpg',
norma: 'ČSN P 73 0610 / WTA 4-4-04/D',
perex: 'Vytvoření dodatečné hydrofobní clony proti vzlínající vlhkosti bez narušení statiky zdiva.',
specs: [
{ param: 'Účinná látka', value: 'Aktivní silan-siloxanová mikroemulze 80 %' },
{ param: 'Průměr vrtů', value: '12 mm v osových roztečích 100 až 120 mm' },
{ param: 'Účinnost hydrofobizace', value: 'Až 98 % redukce kapilární vzlínavosti' },
{ param: 'Vhodné zdivo', value: 'Plná i dutá cihla, smíšené zdivo, opuka' },
{ param: 'Technologický postup', value: 'Nízkotlaká plnicí pistole, beztlaké nasycení' }
],
features: [
'Okamžité zastavení vzlínání vody v kapilárách zdiva',
'Staticky zcela bezpečná metoda bez otřesů a sesedání',
'Dlouhodobá životnost hydrofobní clony přesahující 30 let',
'Možnost aplikace i při stupni provlhčení zdiva až 95 %'
]
},
{
id: 'sanace-podrezani-retez',
title: 'Mechanické podřezávání zdiva diamantovým lanem',
category: 'sanace',
category_name: 'Sanace zdiva',
image: 'assets/sanace_podrezani.jpg',
norma: 'ČSN 73 0601 / ČSN P 73 0610',
perex: 'Nejúčinnější přímé vložení nové celistvé hydroizolační fólie s PE deskami do proříznuté spáry.',
specs: [
{ param: 'Izolační materiál', value: 'Plastové desky LDPE/HDPE tl. 2 mm se zámkem' },
{ param: 'Statické zajištění', value: 'Plastové klíny zkoušené na tlak min. 50 MPa' },
{ param: 'Zálivková směs', value: 'Cementová expanzní směs s plastifikátorem' },
{ param: 'Druh zdiva', value: 'Cihla, kámen, smíšené zdivo neomezené tloušťky' },
{ param: 'Záruka hydroizolace', value: 'Garance 100% nepropustnosti clony' }
],
features: [
'Stoprocentní fyzická bariéra proti kapilární vlhkosti',
'Aplikace do průběžné i nepravidelné spáry kamenného zdiva',
'Postupné zajišťování statickými klíny brání sedání objektu',
'Trvalé řešení pro památkově chráněné i obytné stavby'
]
},
{
id: 'sanacni-omitky-wta',
title: 'Sanační omítkové souvrství WTA',
category: 'sanace',
category_name: 'Sanace zdiva',
image: 'assets/sanacni_omitky.jpg',
norma: 'Směrnice WTA 2-9-04/D',
perex: 'Paropropustný vícevrstvý omítkový systém pro ukládání solí a odpařování vlhkosti bez výkvětů.',
specs: [
{ param: 'Pórovitost jádra', value: 'Minimálně 45 % celkového objemu pórů' },
{ param: 'Koeficient difuze vodní páry', value: 'µ ≤ 12 (vysoce paropropustné)' },
{ param: 'Penetrace a postřik', value: 'Sanační podhoz s obsahem trasu 50 % pokrytí' },
{ param: 'Tloušťka souvrství', value: 'Jádrová vrstva min. 20 mm, štuk min. 3 mm' },
{ param: 'Kapacita solí', value: 'Vysoká akumulační schopnost pro sírany a dusičnany' }
],
features: [
'Zabraňuje tvorbě vlhkostních map a solným výkvětům',
'Umožňuje kontinuální vysychání sanovaného zdiva',
'Finální nátěry na bázi silikátů pro maximální prodyšnost',
'Certifikace dle mezinárodního předpisu WTA'
]
},
{
id: 'hydroizolace-tlakova-kmb',
title: 'Tlaková hydroizolace základů stěrkou KMB',
category: 'hydroizolace',
category_name: 'Hydroizolační systémy',
image: 'assets/hydroizolace_tlakova.jpg',
norma: 'ČSN EN 15814 / ČSN 73 0601',
perex: 'Dvousložková bitumen-polymerová bezešvá stěrka odolná proti tlakové vodě a radonu.',
specs: [
{ param: 'Typ stěrky', value: 'Dvousložková modifikovaná bitumenová emulze KMB' },
{ param: 'Tloušťka suché vrstvy', value: '3,0 až 4,5 mm s výztužnou tkaninou' },
{ param: 'Přemostění trhlin', value: 'Třída CB2 (překlenutí spáry až do 2 mm)' },
{ param: 'Odolnost proti tlaku', value: 'Testováno na tlak vody 0,5 bar (5 m vodní sloupec)' },
{ param: 'Ochrana spodní stavby', value: 'Základové pasy, opěrné zdi, suterénní stěny' }
],
features: [
'Bezešvá monolitická izolace bez rizika netěsných spojů',
'Integrovaná bariéra proti pronikání radonu z podloží',
'Výborná adheze k betonu, pórobetonu i cihelnému zdivu',
'Odolnost vůči agresivním huminovým a spodním vodám'
]
},
{
id: 'krystalizacni-izolace-beton',
title: 'Hloubková krystalizační izolace betonu',
category: 'hydroizolace',
category_name: 'Hydroizolační systémy',
image: 'assets/krystalizace_beton.jpg',
norma: 'ČSN EN 1504-2 / Zásady WTA',
perex: 'Chemicky reaktivní systém vytvářející nerozpustné krystaly v kapilárách a pórech betonu.',
specs: [
{ param: 'Hloubka penetrace', value: 'Krystalická reakce proniká až do hloubky 150 mm' },
{ param: 'Tlaková odolnost', value: 'Odolává hydrostatickému tlaku až 14 bar' },
{ param: 'Samohojicí schopnost', value: 'Aktivní zacelení trhlin do šířky 0,4 mm' },
{ param: 'Využití v praxi', value: 'Bílé vany, šachty, retenční nádrže, tunely' },
{ param: 'Způsob aplikace', value: 'Plavený cementový nátěr nebo vsyp do čerstvého betonu' }
],
features: [
'Trvalá vnitřní krystalizace se stává přímou součástí betonu',
'Účinnost z pozitivní i negativní strany vodního tlaku',
'Chrání armovací výztuž před korozí vlivem chloridů',
'Nevyžaduje dodatečné ochranné přizdívky ani drenážní fólie'
]
},
{
id: 'prumyslove-podlahy-epoxid',
title: 'Průmyslové epoxidové a vsypové podlahy',
category: 'podlahy',
category_name: 'Průmyslové podlahy',
image: 'assets/prumyslove_podlahy.jpg',
norma: 'ČSN 74 4505 / ČSN EN 13813',
perex: 'Monolitické podlahové systémy s vysokou mechanickou a chemickou odolností pro výrobní haly a sklady.',
specs: [
{ param: 'Pevnost v tlaku', value: 'Minimálně 65 až 80 MPa po 28 dnech' },
{ param: 'Odolnost proti obrusu', value: 'Třída BCA ARO,5 (vysoké průmyslové zatížení)' },
{ param: 'Protiskluznost', value: 'R9 až R12 dle požadavků provozního prostředí' },
{ param: 'Tloušťka souvrství', value: 'Lité stěrky 2 až 4 mm, vsypy pancéřové 3 až 5 mm' },
{ param: 'Chemická odolnost', value: 'Odolnost vůči olejům, palivům, louhům a solím' }
],
features: [
'Bezprašný povrch se snadnou mechanickou údržbou',
'Vysoká zatížitelnost těžkou manipulační a skladovou technikou',
'Hladké provedení bez spár eliminující znečištění',
'Rychlé vytvrzení umožňující minimální odstávku výroby'
]
},
{
id: 'statika-helikalni-vyztuze',
title: 'Helikální nerezové výztuže a spínání zdiva',
category: 'statika',
category_name: 'Statika & sanace',
image: 'assets/statika_vyztuze.jpg',
norma: 'ČSN EN 845-1 / ČSN EN 1996-1-1',
perex: 'Šetrné strukturální sešívání popraskaných stěn a kleneb pomocí austenitické nerezové oceli.',
specs: [
{ param: 'Materiál výztuže', value: 'Nerezová ocel třídy AISI 304 nebo AISI 316' },
{ param: 'Průměr táhel', value: 'Profilované helikální pruty průměru 6 až 10 mm' },
{ param: 'Kotevní tmel', value: 'Vysokopevnostní tixotropní cementová kotevní malta' },
{ param: 'Hloubka drážky', value: '30 až 40 mm ve ložné spáře bez zásahu do interiéru' },
{ param: 'Pevnost v tahu', value: 'Minimálně 1050 N/mm² při vysoké pružnosti' }
],
features: [
'Obnovení prostorové tuhosti objektu a nosných kleneb',
'Neviditelný zásah se zachováním historického líce zdiva',
'Roznášení tahových napětí bez vzniku sekundárních trhlin',
'Kompatibilní s cihelným, kamenným i smíšeným zdivem'
]
},
{
id: 'reprofilace-uhlikove-lamely',
title: 'Zesilování konstrukcí uhlíkovými CFRP lamelami',
category: 'statika',
category_name: 'Statika & sanace',
image: 'assets/statika_reprofilace.jpg',
norma: 'ČSN EN 1504-9 / fib Bulletin 14',
perex: 'Dodatečné statické zesílení betonových průvlaků, nosníků a stropních desek kompozity z uhlíkových vláken.',
specs: [
{ param: 'Typ kompozitu', value: 'Uhlíkové lamely CFRP lepené epoxidovým tmelem' },
{ param: 'Modul pružnosti', value: 'E ≥ 165 GPa (vysokomodulové varianty až 210 GPa)' },
{ param: 'Pevnost v tahu', value: 'Minimálně 2800 až 3100 MPa' },
{ param: 'Tloušťka lamely', value: '1,2 až 1,4 mm při šířce 50 až 100 mm' },
{ param: 'Reprofilace podkladu', value: 'Tixotropní malty PCC třídy R4 dle EN 1504-3' }
],
features: [
'Extrémní zvýšení únosnosti bez zatížení konstrukce vlastní vahou',
'Minimální tloušťka zachovávající původní světlou výšku prostor',
'Absolutní korozní odolnost materiálu ve vlhkém prostředí',
'Zvýšení zatížitelnosti stropů při změně užívání budovy'
]
}
];

const translations = {
CZ: {
nav_home: 'Úvod',
nav_divisions: 'Divize',
nav_tech: 'Technologie',
nav_about: 'O společnosti',
nav_contact: 'Kontakt',
nav_cta: 'Poptat sanaci',
hero_badge: 'Certifikované sanační a hydroizolační technologie',
hero_title: 'Specializované stavební práce & sanace konstrukcí',
hero_desc: 'Social Group s.r.o. poskytuje komplexní inženýrská řešení v oblasti sanace vlhkého zdiva, hloubkové hydroizolace základů, průmyslových podlah a statického zajištění objektů dle norem WTA a ČSN.',
hero_cta_cat: 'Prohlédnout technologie',
hero_cta_contact: 'Konzultace s jednatelem',
tab_title_sanace: 'Sanace vlhkého zdiva',
tab_title_hydro: 'Hydroizolační systémy',
tab_title_podlahy: 'Průmyslové podlahy',
tab_title_statika: 'Statika a sanace',
tab_sanace_h: 'Komplexní sanace vlhkého a zasoleného zdiva',
tab_sanace_p: 'Aplikujeme certifikované krémové silan-siloxanové injektáže, mechanické podřezávání zdiva diamantovým lanem s vkládáním PE fólií a sanační omítkové systémy WTA s vysokou kapacitou pro ukládání škodlivých solí.',
tab_hydro_h: 'Tlakové hydroizolace základů a spodní stavby',
tab_hydro_p: 'Realizujeme bezešvé dvousložkové bitumen-polymerové stěrky KMB a hloubkovou krystalizační hydroizolaci monolitického betonu odolávající tlaku vody až 14 bar s aktivním samohojením mikrotrhlin.',
tab_podlahy_h: 'Průmyslové epoxidové a pancéřové podlahy',
tab_podlahy_p: 'Monolitické lité stěrky a vsypové podlahy s korundovým a křemičitým plnivem pro výrobní prostory, logistické areály a komerční provozy s extrémní odolností proti mechanickému obrusu a chemikáliím.',
tab_statika_h: 'Statické zajištění a zesilování konstrukcí',
tab_statika_p: 'Šetrné strukturální sešívání trhlin zdiva nerezovou helikální výztuží AISI 304/316 a dodatečné zesilování železobetonových nosníků a stropních desek lepenými uhlíkovými kompozity CFRP.',
counter_years: 'Let specializace na trhu',
counter_projects: 'Realizovaných sanací a izolací',
counter_success: 'Úspěšnost hydrofobních clon',
counter_divisions: 'Technologické divize',
cat_sec_badge: 'Katalog postupů & norem',
cat_sec_title: 'Technologický katalog postupů a materiálů',
cat_sec_desc: 'Vyberte technologii pro zobrazení technických parametrů, použitých materiálů a souvisejících norem.',
search_placeholder: 'Hledat technologii, materiál nebo normu...',
counter_items_suffix: 'technologií v katalogu',
filter_all: 'Všechny divize',
filter_sanace: 'Sanace zdiva',
filter_hydro: 'Hydroizolace',
filter_podlahy: 'Průmyslové podlahy',
filter_statika: 'Statika & sanace',
btn_detail: 'Technické parametry',
item_title_1: 'Silan-siloxanová krémová injektáž zdiva',
item_desc_1: 'Vytvoření dodatečné hydrofobní clony proti vzlínající vlhkosti bez narušení statiky zdiva.',
item_title_2: 'Mechanické podřezávání zdiva diamantovým lanem',
item_desc_2: 'Nejúčinnější přímé vložení nové celistvé hydroizolační fólie s PE deskami do proříznuté spáry.',
item_title_3: 'Sanační omítkové souvrství WTA',
item_desc_3: 'Paropropustný vícevrstvý omítkový systém pro ukládání solí a odpařování vlhkosti bez výkvětů.',
item_title_4: 'Tlaková hydroizolace základů stěrkou KMB',
item_desc_4: 'Dvousložková bitumen-polymerová bezešvá stěrka odolná proti tlakové vodě a radonu.',
item_title_5: 'Hloubková krystalizační izolace betonu',
item_desc_5: 'Chemicky reaktivní systém vytvářející nerozpustné krystaly v kapilárách a pórech betonu.',
item_title_6: 'Průmyslové epoxidové a vsypové podlahy',
item_desc_6: 'Monolitické podlahové systémy s vysokou mechanickou a chemickou odolností pro výrobní haly a sklady.',
item_title_7: 'Helikální nerezové výztuže a spínání zdiva',
item_desc_7: 'Šetrné strukturální sešívání popraskaných stěn a kleneb pomocí austenitické nerezové oceli.',
item_title_8: 'Zesilování konstrukcí uhlíkovými CFRP lamelami',
item_desc_8: 'Dodatečné statické zesílení betonových průvlaků, nosníků a stropních desek kompozity z uhlíkových vláken.',
about_badge: 'O společnosti',
about_title: 'Důvěryhodný partner pro specializované stavební práce',
about_text_1: 'Social Group s.r.o. působí na českém stavebním trhu nepřetržitě od roku 2013 se sídlem ve Vyškově. Naším zaměřením jsou náročné inženýrské zásahy – sanace vlhkostí poškozených staveb, realizace tlakových hydroizolací pod úrovní terénu, průmyslové lité podlahy a statické zpevňování nosných konstrukcí.',
about_text_2: 'Veškeré technologické postupy navrhujeme a realizujeme striktně podle platných evropských norem ČSN EN a německých sanačních směrnic WTA. Za každým projektem stojí osobní dohled a autorizace jednatele Ing. Tomáše Gregůrka.',
about_point_1: 'Přesná diagnostika vlhkosti a chemický rozbor solí',
about_point_2: 'Staticky šetrné postupy bez ohrožení stability objektu',
about_point_3: 'Dlouhodobá záruka na funkčnost aplikovaných systémů',
contact_name: 'Ing. Tomáš Gregůrek',
contact_role: 'Jednatel společnosti',
contact_badge: 'Konzultace & poptávka',
contact_title: 'Navrhneme optimální technické řešení pro vaši stavbu',
contact_desc: 'Kontaktujte přímo vedení společnosti nebo vyplňte formulář níže pro nezávazné posouzení vašeho objektu.',
contact_rep_title: 'Vedení společnosti & technický dozor',
contact_phone_lbl: 'Přímý telefon',
contact_email_lbl: 'E-mail pro poptávky',
contact_address_lbl: 'Sídlo společnosti',
contact_address_val: 'Olomoucká 392/2, 682 01 Vyškov',
form_title: 'Nezávazná technická poptávka',
form_name_lbl: 'Jméno a příjmení / Firma',
form_phone_lbl: 'Telefonní kontakt',
form_email_lbl: 'E-mailová adresa',
form_tech_lbl: 'Požadovaná stavební technologie',
form_msg_lbl: 'Popis stavby a specifikace problému',
form_submit_btn: 'Odeslat technickou poptávku',
form_success_msg: 'Děkujeme za poptávku. Ing. Tomáš Gregůrek vás bude kontaktovat do 24 hodin.',
modal_specs_label: 'Technické parametry a mezní hodnoty',
modal_feat_label: 'Technologické přednosti',
footer_rights: 'Všechna práva vyhrazena.',
footer_reg: 'Společnost zapsána v OR u Krajského soudu v Brně, oddíl C, vložka 83764.'
},
SK: {
nav_home: 'Úvod',
nav_divisions: 'Divízie',
nav_tech: 'Technológie',
nav_about: 'O spoločnosti',
nav_contact: 'Kontakt',
nav_cta: 'Dopytovať sanáciu',
hero_badge: 'Certifikované sanačné a hydroizolačné technológie',
hero_title: 'Špecializované stavebné práce & sanácie konštrukcií',
hero_desc: 'Social Group s.r.o. poskytuje komplexné inžinierske riešenia v oblasti sanácie vlhkého muriva, hĺbkovej hydroizolácie základov, priemyselných podláh a statického zabezpečenia objektov podľa noriem WTA a STN.',
hero_cta_cat: 'Prezrieť technológie',
hero_cta_contact: 'Konzultácia s konateľom',
tab_title_sanace: 'Sanácia vlhkého muriva',
tab_title_hydro: 'Hydroizolačné systémy',
tab_title_podlahy: 'Priemyselné podlahy',
tab_title_statika: 'Statika a sanácia',
tab_sanace_h: 'Komplexná sanácia vlhkého a zasoleného muriva',
tab_sanace_p: 'Aplikujeme certifikované krémové silan-siloxánové injektáže, mechanické podrezávanie muriva diamantovým lanom s vkladaním PE fólií a sanačné omietkové systémy WTA s vysokou kapacitou pre ukladanie solí.',
tab_hydro_h: 'Tlakové hydroizolácie základov a spodnej stavby',
tab_hydro_p: 'Realizujeme bezšvíkové dvojzložkové bitúmen-polymérové stierky KMB a hĺbkovú kryštalizačnú hydroizoláciu monolitického betónu odolávajúcu tlaku vody až 14 bar s aktívnym samohojením mikrotrhlín.',
tab_podlahy_h: 'Priemyselné epoxidové a pancierové podlahy',
tab_podlahy_p: 'Monolitické liate stierky a vsypové podlahy s korundovým a kremičitým plnivom pre výrobné priestory, logistické areály a komerčné prevádzky s extrémnou odolnosťou proti opotrebeniu a chemikáliám.',
tab_statika_h: 'Statické zabezpečenie a zosilňovanie konštrukcií',
tab_statika_p: 'Šetrné štrukturálne zošívanie trhlín muriva nerezovou helikálnou výstužou AISI 304/316 a dodatočné zosilňovanie železobetónových nosníkov a stropných dosiek lepenými uhlíkovými kompozitmi CFRP.',
counter_years: 'Rokov špecializácie na trhu',
counter_projects: 'Realizovaných sanácií a izolácií',
counter_success: 'Úspešnosť hydrofóbnych clôn',
counter_divisions: 'Technologické divízie',
cat_sec_badge: 'Katalóg postupov & noriem',
cat_sec_title: 'Technologický katalóg postupov a materiálov',
cat_sec_desc: 'Vyberte technológiu pre zobrazenie technických parametrov, použitých materiálov a súvisiacich noriem.',
search_placeholder: 'Hľadať technológiu, materiál alebo normu...',
counter_items_suffix: 'technológií v katalógu',
filter_all: 'Všetky divízie',
filter_sanace: 'Sanácia muriva',
filter_hydro: 'Hydroizolácia',
filter_podlahy: 'Priemyselné podlahy',
filter_statika: 'Statika & sanácia',
btn_detail: 'Technické parametre',
item_title_1: 'Silan-siloxánová krémová injektáž muriva',
item_desc_1: 'Vytvorenie dodatočnej hydrofóbnej clony proti vzlínajúcej vlhkosti bez narušenia statiky muriva.',
item_title_2: 'Mechanické podrezávanie muriva diamantovým lanom',
item_desc_2: 'Najúčinnejšie priame vloženie novej celistvej hydroizolačnej fólie s PE doskami do prerezanej škáry.',
item_title_3: 'Sanačné omietkové súvrstvie WTA',
item_desc_3: 'Paropriepustný viacvrstvový omietkový systém pre ukladanie solí a odparovanie vlhkosti bez výkvetov.',
item_title_4: 'Tlaková hydroizolácia základov stierkou KMB',
item_desc_4: 'Dvojzložková bitúmen-polymérová bezšvíková stierka odolná proti tlakovej vode a radónu.',
item_title_5: 'Hĺbková kryštalizačná izolácia betónu',
item_desc_5: 'Chemicky reaktívny systém vytvárajúci nerozpustné kryštály v kapilárach a póroch betónu.',
item_title_6: 'Priemyselné epoxidové a vsypové podlahy',
item_desc_6: 'Monolitické podlahové systémy s vysokou mechanickou a chemickou odolnosťou pre výrobné haly a sklady.',
item_title_7: 'Helikálne nerezové výstuže a spínanie muriva',
item_desc_7: 'Šetrné štrukturálne zošívanie popraskaných stien a klenieb pomocou austenitickej nerezovej ocele.',
item_title_8: 'Zosilňovanie konštrukcií uhlíkovými CFRP lamelami',
item_desc_8: 'Dodatočné statické zosilnenie betónových prievlakov, nosníkov a stropných dosiek kompozitmi z uhlíkových vlákien.',
about_badge: 'O spoločnosti',
about_title: 'Dôveryhodný partner pre špecializované stavebné práce',
about_text_1: 'Social Group s.r.o. pôsobí na českom stavebnom trhu nepretržite od roku 2013 so sídlom vo Vyškove. Naším zameraním sú náročné inžinierske zásahy – sanácie vlhkosťou poškodených stavieb, realizácia tlakových hydroizolácií pod úrovňou terénu, priemyselné liate podlahy a statické spevňovanie nosných konštrukcií.',
about_text_2: 'Všetky technologické postupy navrhujeme a realizujeme striktne podľa platných európskych noriem STN EN a nemeckých sanačných smerníc WTA. Za každým projektom stojí osobný dohľad a autorizácia konateľa Ing. Tomáša Gregůrka.',
about_point_1: 'Presná diagnostika vlhkosti a chemický rozbor solí',
about_point_2: 'Staticky šetrné postupy bez ohrozenia stability objektu',
about_point_3: 'Dlhodobá záruka na funkčnosť aplikovaných systémov',
contact_name: 'Ing. Tomáš Gregůrek',
contact_role: 'Konateľ spoločnosti',
contact_badge: 'Konzultácia & dopyt',
contact_title: 'Navrhneme optimálne technické riešenie pre vašu stavbu',
contact_desc: 'Kontaktujte priamo vedenie spoločnosti alebo vyplňte formulár nižšie pre nezáväzné posúdenie vášho objektu.',
contact_rep_title: 'Vedenie spoločnosti & technický dozor',
contact_phone_lbl: 'Priamy telefón',
contact_email_lbl: 'E-mail pre dopyty',
contact_address_lbl: 'Sídlo spoločnosti',
contact_address_val: 'Olomoucká 392/2, 682 01 Vyškov',
form_title: 'Nezáväzný technický dopyt',
form_name_lbl: 'Meno a priezvisko / Firma',
form_phone_lbl: 'Telefónny kontakt',
form_email_lbl: 'E-mailová adresa',
form_tech_lbl: 'Požadovaná stavebná technológia',
form_msg_lbl: 'Popis stavby a špecifikácia problému',
form_submit_btn: 'Odoslať technický dopyt',
form_success_msg: 'Ďakujeme za dopyt. Ing. Tomáš Gregůrek vás bude kontaktovať do 24 hodín.',
modal_specs_label: 'Technické parametre a medzné hodnoty',
modal_feat_label: 'Technologické prednosti',
footer_rights: 'Všetky práva vyhradené.',
footer_reg: 'Spoločnosť zapísaná v OR u Krajského súdu v Brne, oddiel C, vložka 83764.'
},
EN: {
nav_home: 'Home',
nav_divisions: 'Divisions',
nav_tech: 'Technologies',
nav_about: 'About Us',
nav_contact: 'Contact',
nav_cta: 'Request Quote',
hero_badge: 'Certified Remediation & Waterproofing Technologies',
hero_title: 'Specialized Construction & Structural Remediation',
hero_desc: 'Social Group s.r.o. provides comprehensive engineering solutions in damp masonry remediation, deep foundation waterproofing, industrial flooring, and structural stabilization according to WTA and EN standards.',
hero_cta_cat: 'Explore Technologies',
hero_cta_contact: 'Consult with Director',
tab_title_sanace: 'Damp Masonry Remediation',
tab_title_hydro: 'Waterproofing Systems',
tab_title_podlahy: 'Industrial Flooring',
tab_title_statika: 'Structural Reinforcement',
tab_sanace_h: 'Comprehensive damp and salinized masonry remediation',
tab_sanace_p: 'We apply certified cream silane-siloxane injections, mechanical diamond-wire masonry cutting with PE membranes, and WTA restoration plaster systems with high salt accumulation capacity.',
tab_hydro_h: 'Pressurized foundation and substructure waterproofing',
tab_hydro_p: 'We execute seamless two-component bitumen-polymer coatings KMB and deep crystalline waterproofing of monolithic concrete resisting up to 14 bar water pressure with active self-healing.',
tab_podlahy_h: 'Industrial epoxy coatings and dry-shake floors',
tab_podlahy_p: 'Monolithic screeds and dry-shake topping floors with corundum and quartz aggregates for manufacturing facilities, logistics hubs, and commercial operations with extreme abrasion resistance.',
tab_statika_h: 'Structural stabilization and reinforcement of buildings',
tab_statika_p: 'Gentle structural stitching of masonry cracks using stainless helical reinforcement AISI 304/316 and post-strengthening of concrete beams and slabs with bonded carbon CFRP composites.',
counter_years: 'Years of Market Specialization',
counter_projects: 'Completed Remediation Projects',
counter_success: 'Success Rate of Hydrophobic Barriers',
counter_divisions: 'Technological Divisions',
cat_sec_badge: 'Catalog of Procedures & Standards',
cat_sec_title: 'Technological Procedures & Materials Catalog',
cat_sec_desc: 'Select a technology to view technical specifications, materials, and applicable standards.',
search_placeholder: 'Search technology, material, or standard...',
counter_items_suffix: 'technologies in catalog',
filter_all: 'All Divisions',
filter_sanace: 'Masonry Remediation',
filter_hydro: 'Waterproofing',
filter_podlahy: 'Industrial Floors',
filter_statika: 'Statics & Reinforcement',
btn_detail: 'Technical Details',
item_title_1: 'Silane-siloxane cream masonry injection',
item_desc_1: 'Creation of an additional hydrophobic barrier against rising damp without structural impairment.',
item_title_2: 'Mechanical diamond-wire masonry cutting',
item_desc_2: 'Most effective direct insertion of a new solid waterproofing membrane with PE boards into cut joint.',
item_title_3: 'WTA Restoration Plaster System',
item_desc_3: 'Vapor-permeable multi-layer plaster system for salt storage and moisture evaporation without efflorescence.',
item_title_4: 'Pressurized foundation waterproofing with KMB coating',
item_desc_4: 'Two-component bitumen-polymer seamless coating resistant to pressurized water and radon.',
item_title_5: 'Deep crystalline concrete waterproofing',
item_desc_5: 'Chemically reactive system forming insoluble crystals in concrete capillaries and micro-pores.',
item_title_6: 'Industrial epoxy and dry-shake topping floors',
item_desc_6: 'Monolithic floor systems with superior mechanical and chemical resistance for industrial plants.',
item_title_7: 'Helical stainless steel reinforcement and masonry stitching',
item_desc_7: 'Structural stitching of cracked masonry walls and vaults using austenitic stainless steel ties.',
item_title_8: 'Structural strengthening with carbon CFRP laminates',
item_desc_8: 'Post-strengthening of concrete girders, beams, and slabs using advanced carbon fiber composites.',
about_badge: 'About Us',
about_title: 'Trusted Partner for Specialized Construction Works',
about_text_1: 'Social Group s.r.o. has been operating on the Czech construction market continuously since 2013 with headquarters in Vyškov. We specialize in demanding engineering works – remediation of damp structures, pressurized below-ground waterproofing, industrial floors, and structural reinforcement.',
about_text_2: 'All engineering procedures are designed and executed strictly in compliance with applicable European EN standards and WTA guidelines under the personal supervision of Director Ing. Tomáš Gregůrek.',
about_point_1: 'Precise Moisture Diagnostics & Chemical Salt Analysis',
about_point_2: 'Statistically Gentle Procedures Without Structural Risk',
about_point_3: 'Long-Term Warranty on Applied System Functionality',
contact_name: 'Ing. Tomáš Gregůrek',
contact_role: 'Managing Director',
contact_badge: 'Consultation & Inquiry',
contact_title: 'We Will Design the Optimal Technical Solution',
contact_desc: 'Contact company leadership directly or submit the form below for a free technical consultation.',
contact_rep_title: 'Company Management & Technical Supervision',
contact_phone_lbl: 'Direct Phone',
contact_email_lbl: 'Inquiry E-mail',
contact_address_lbl: 'Headquarters',
contact_address_val: 'Olomoucká 392/2, 682 01 Vyškov',
form_title: 'Non-Binding Technical Inquiry',
form_name_lbl: 'Full Name / Company',
form_phone_lbl: 'Phone Number',
form_email_lbl: 'E-mail Address',
form_tech_lbl: 'Requested Technology',
form_msg_lbl: 'Project Description & Problem Specs',
form_submit_btn: 'Submit Technical Inquiry',
form_success_msg: 'Thank you. Director Ing. Tomáš Gregůrek will contact you within 24 hours.',
modal_specs_label: 'Technical Parameters & Limits',
modal_feat_label: 'Technological Advantages',
footer_rights: 'All rights reserved.',
footer_reg: 'Registered in the Commercial Register at the Regional Court in Brno, section C, file 83764.'
}
};

document.addEventListener('DOMContentLoaded', function() {
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('ref') === 'nabidka') {
if (!sessionStorage.getItem('nabidka_ping_sent')) {
sessionStorage.setItem('nabidka_ping_sent', 'true');
const pingData = {
slug: 'social-group',
openedAt: new Date().toISOString(),
ua: navigator.userAgent
};
try {
localStorage.setItem('nabidka_open_social-group', JSON.stringify(pingData));
if (window.NABIDKA_PING_URL) {
if (navigator.sendBeacon) {
const blob = new Blob([JSON.stringify(pingData)], { type: 'application/json' });
navigator.sendBeacon(window.NABIDKA_PING_URL, blob);
} else {
new Image().src = window.NABIDKA_PING_URL + '?slug=social-group&t=' + Date.now();
}
}
} catch(e) {}
}
}

const savedLang = localStorage.getItem('social_group_lang') || 'cz';
applyLanguage(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
btn.addEventListener('click', () => {
const lang = btn.getAttribute('data-lang');
applyLanguage(lang);
});
});

const tabBtns = document.querySelectorAll('.tech-tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
tabBtns.forEach(btn => {
btn.addEventListener('click', () => {
const targetTab = btn.getAttribute('data-tab');
tabBtns.forEach(b => b.classList.remove('active'));
tabPanes.forEach(p => p.classList.remove('active'));
btn.classList.add('active');
const activePane = document.getElementById('pane-' + targetTab);
if (activePane) {
activePane.classList.add('active');
}
const matchingFilterBtn = document.querySelector(`.filter-btn[data-filter="${targetTab}"]`);
if (matchingFilterBtn) {
filterCatalog(targetTab);
document.querySelectorAll('.filter-btn').forEach(fb => fb.classList.remove('active'));
matchingFilterBtn.classList.add('active');
}
});
});

const searchInput = document.getElementById('catalogSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const catCards = document.querySelectorAll('.cat-card');
const itemCountSpan = document.getElementById('itemCount');

let currentFilter = 'all';

function filterCatalog(category) {
currentFilter = category;
applyFilterAndSearch();
}

function applyFilterAndSearch() {
const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
let visibleCount = 0;

catCards.forEach(card => {
const cardCat = card.getAttribute('data-category');
const cardText = card.textContent.toLowerCase();
const matchesCat = (currentFilter === 'all' || cardCat === currentFilter);
const matchesQuery = (!query || cardText.includes(query));

if (matchesCat && matchesQuery) {
card.style.display = 'flex';
visibleCount++;
} else {
card.style.display = 'none';
}
});

if (itemCountSpan) {
itemCountSpan.textContent = visibleCount;
}
}

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const filterVal = btn.getAttribute('data-filter');
filterCatalog(filterVal);
});
});

if (searchInput) {
searchInput.addEventListener('input', applyFilterAndSearch);
}

const modalBackdrop = document.getElementById('techModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalNorm = document.getElementById('modalNorm');
const modalImage = document.getElementById('modalImage');
const modalDesc = document.getElementById('modalDesc');
const modalTable = document.getElementById('modalTable');
const modalFeatures = document.getElementById('modalFeatures');

function openTechModal(id) {
const item = catalogData.find(x => x.id === id);
if (!item || !modalBackdrop) return;

modalCategory.textContent = item.category_name;
modalTitle.textContent = item.title;
modalNorm.textContent = item.norma;
modalImage.src = item.image;
modalImage.alt = item.title;
modalDesc.textContent = item.perex;

let rowsHtml = '';
item.specs.forEach(s => {
rowsHtml += `<tr><td class="spec-name">${s.param}</td><td class="spec-val">${s.value}</td></tr>`;
});
modalTable.querySelector('tbody').innerHTML = rowsHtml;

let featHtml = '';
item.features.forEach(f => {
featHtml += `<li>${f}</li>`;
});
modalFeatures.innerHTML = featHtml;

modalBackdrop.classList.add('is-active');
modalBackdrop.setAttribute('aria-hidden', 'false');
document.body.style.overflow = 'hidden';
}

function closeTechModal() {
if (!modalBackdrop) return;
modalBackdrop.classList.remove('is-active');
modalBackdrop.setAttribute('aria-hidden', 'true');
document.body.style.overflow = '';
}

document.querySelectorAll('.btn-tech-open').forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
e.stopPropagation();
const id = btn.getAttribute('data-target-id');
openTechModal(id);
});
});

document.querySelectorAll('.cat-card').forEach(card => {
card.addEventListener('click', (e) => {
if (e.target.closest('.btn-tech-open')) return;
const id = card.getAttribute('data-id');
openTechModal(id);
});
});

if (modalCloseBtn) {
modalCloseBtn.addEventListener('click', closeTechModal);
}

if (modalBackdrop) {
modalBackdrop.addEventListener('click', (e) => {
if (e.target === modalBackdrop) {
closeTechModal();
}
});
}

document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-active')) {
closeTechModal();
}
});

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
if (entry.target.classList.contains('counter-card')) {
runCounter(entry.target.querySelector('.counter'));
}
}
});
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function runCounter(counterEl) {
if (!counterEl || counterEl.dataset.started) return;
counterEl.dataset.started = 'true';
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
const target = parseInt(counterEl.getAttribute('data-target'), 10);
counterEl.textContent = '0';
const duration = 1400;
const stepTime = 30;
const totalSteps = duration / stepTime;
const increment = target / totalSteps;
let current = 0;
const timer = setInterval(() => {
current += increment;
if (current >= target) {
counterEl.textContent = target;
clearInterval(timer);
} else {
counterEl.textContent = Math.floor(current);
}
}, stepTime);
}

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
menuToggle.addEventListener('click', () => {
mainNav.classList.toggle('is-open');
});
mainNav.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
mainNav.classList.remove('is-open');
});
});
}

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
if (formSuccess) {
formSuccess.style.display = 'block';
}
contactForm.reset();
});
}
});
