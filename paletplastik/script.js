const catalogData = [{"id": "ep-08", "title": "EUROPLASTETA® Standard (EP 08 / EP 08R)", "perex": "Ekologická přepravní europaleta 1200 x 800 mm vyráběná ze 100% recyklovaného směsného plastu.", "category": "europalety", "image": "assets/9-europlasteta.png", "specs": {"Rozměry": "1200 x 800 x 150 mm", "Materiál": "Recyklovaný směsný plast (PE/PP)", "Statická nosnost": "5 000 kg", "Dynamická nosnost": "1 200 kg", "Regálová nosnost": "800 kg", "Provedení lemu": "S 5mm okrajem (R) nebo hladká plocha", "Hygienický atest": "Vhodné pro potravinářství a export", "Životnost": "Až 10x vyšší než dřevěná paleta"}, "features": ["Odolnost proti vlhkosti, plísním, hnilobě i chemikáliím", "Není nutné ošetřovat insekticidy/fungicidy (IPPC ISPM 15)", "Možnost označení RFID čipy, čárovým kódem nebo logem", "100% recyklovatelná s možností zpětného odkupu"]}, {"id": "ip-10", "title": "PLASTETA® Industriální (IP 10 / IP 10R)", "perex": "Zesílená průmyslová paleta 1200 x 1000 mm pro vysoké zatížení v logistických centrech a chemickém průmyslu.", "category": "prumyslove", "image": "assets/9-plasteta-industrialni.png", "specs": {"Rozměry": "1200 x 1000 x 150 mm", "Materiál": "Zesílený polypropylen/polyethylen recyklát", "Statická nosnost": "6 000 kg", "Dynamická nosnost": "1 500 kg", "Regálová nosnost": "1 000 kg", "Hmotnost": "cca 18,5 kg", "Teplotní odolnost": "-30 °C až +60 °C", "Varianta okraje": "Hladká nebo s bezpečnostním lemem 5 mm"}, "features": ["Optimalizováno pro automatizované regálové zakladače", "Vysoká odolnost vůči agresivním louhům, kyselinám a olejům", "Konstantní tara bez nasákavosti vody za deště", "Protiskluzový profil ložné plochy pro bezpečnou manipulaci"]}, {"id": "cp-114", "title": "EUROPLASTETA® Kontejnerová (CP 114)", "perex": "Kontejnerová paleta 1140 x 1140 mm navržená pro maximální využití prostoru v námořních ISO kontejnerech.", "category": "kontejnerove", "image": "assets/9-europlasteta-kontejnerova.png", "specs": {"Rozměry": "1140 x 1140 x 150 mm", "Určení": "Námořní 20' a 40' ISO kontejnery", "Statická nosnost": "4 500 kg", "Dynamická nosnost": "1 200 kg", "Materiál": "Tuhý směsný recyklovaný plast", "Vstup pro vidle": "4cestný pro VZV i paletové vozíky", "Stohovatelnost": "Ano, stabilní stohování"}, "features": ["Bezezbytku vyplňuje vnitřní šířku námořního kontejneru", "Nulové prostoje na celnicích – nepodléhá fytosanitárním předpisům", "Bez hřebíků, třísek a ostrých hran ohrožujících obaly", "Certifikováno pro mezinárodní zámořský export"]}, {"id": "ep-08k", "title": "PLASTETA® Sudová (EP 08K)", "perex": "Specializovaná paleta s prolisy a bezpečnostním lůžkem pro bezpečnou přepravu a skladování 200l sudů.", "category": "specialni", "image": "assets/9-plasteta-sudova.png", "specs": {"Rozměry": "1200 x 800 x 165 mm", "Kapacita": "Bezpečné uložení 2x 200l sudů", "Statická nosnost": "4 000 kg", "Dynamická nosnost": "1 200 kg", "Materiál": "Chemicky odolný recyklovaný plast", "Aretace": "Tvarované prolisy zabraňující posunu sudů"}, "features": ["Zabraňuje převrácení a skluzu sudů při prudkém brzdění", "Odolné proti ropným produktům, mazivům a ředidlům", "Vhodné pro chemické provozy, lakovny i automotive", "Snadná dekontaminace a mytí horkou párou"]}, {"id": "ep-08pd", "title": "PLASTETA® Plná s hladkou deskou (EP 08 - PD)", "perex": "Hygienická plná paleta s celistvou ložnou plochou bez otvorů pro sypké a potravinářské zboží.", "category": "hygienicke", "image": "assets/9-plasteta-plna.png", "specs": {"Rozměry": "1200 x 800 x 155 mm", "Ložná deska": "Plná, hladká, snadno omyvatelná", "Statická nosnost": "4 000 kg", "Dynamická nosnost": "1 000 kg", "Materiál": "Vysokohustotní recyklovaný plast", "Použití": "Potravinářství, farmacie, sypké směsi"}, "features": ["Zamezuje propadávání drobných předmětů a nečistot", "Perfektní čistitelnost bez dutin a skrytých spár", "Splňuje nejpřísnější hygienické požadavky HACCP", "Dlouhá životnost v mrazírenských a vlhkých skladech"]}, {"id": "svod-750", "title": "Mobilní plastové svodidlo (SVOD)", "perex": "Modulární silniční svodidlo z recyklovaného plastu s možností úhlového natáčení a řetězení.", "category": "prvky", "image": "assets/9-mobilni-svodidlo.png", "specs": {"Skladebná délka": "750 mm", "Materiál": "Recyklovaný směsný plast", "Možnost spojování": "Ano, modulární zámkový systém", "Možnost natáčení": "Ano, flexibilní úhly oblouku", "Odolnost": "Mrazuvzdorné, UV stabilní, netříštivé"}, "features": ["Rychlá ruční montáž a demontáž bez těžké mechanizace", "Pohlcuje kinetickou energii nárazu bez tříštění", "Ekologická náhrada betonových a ocelových svodidel", "Vhodné pro staveniště, parkoviště i logistické areály"]}];

const translations = {
cz: {
nav_advantages: "Výhody recyklátu",
nav_catalog: "Katalog PLASTETA®",
nav_specs: "Technické parametry",
nav_services: "Služby a pronájem",
nav_contact: "Kontakt",
btn_inquiry: "Nezávazná poptávka",
hero_badge: "100% RECYKLOVANÝ PLAST • VÝROBCE ČR",
hero_title: "Průmyslové přepravní palety PLASTETA® s nosností až 6 tun",
hero_desc: "Dodáváme ucelenou produktovou řadu certifikovaných plastových palet z houževnatého recyklovaného plastu. Hygienické, odolné vůči chemikáliím, bez nutnosti fytosanitárního ošetření pro export.",
stat_stat_load: "Statická nosnost",
stat_dyn_load: "Dynamická nosnost",
stat_recycle: "Recyklovatelné",
btn_explore_catalog: "Prohlédnout sortiment",
btn_view_specs: "Srovnání parametrů",
tag_europlasteta: "EUROPLASTETA® EP 08 • Standard 1200x800 mm",
sub_advantages: "TECHNOLOGICKÉ PŘEDNOSTI",
title_advantages: "Proč nahradit dřevěné palety plastovými PLASTETA®",
adv1_title: "Vhodné pro mezinárodní export",
adv1_desc: "Plastové palety nepodléhají fytosanitárním předpisům IPPC ISPM 15. Odpadají náklady na tepelné ošetření či fumigaci a riziko zdržení zásilky na celnicích.",
adv2_title: "100% hygienické a chemicky odolné",
adv2_desc: "Nenasakují vodu, nehnijí a nepodléhají plísním ani dřevokazným škůdcům. Odolávají působení kyselin, louhů i ropných látek a snadno se čistí párou.",
adv3_title: "Stálost tvaru a tara hmotnosti",
adv3_desc: "Palety mají konstantní hmotnost bez ohledu na déšť či vlhkost skladu. Přesná geometrie bez třísek a hřebíků chrání balené zboží i automatizované zakladače.",
sub_catalog: "CERTIFIKOVANÝ SORTIMENT",
title_catalog: "Katalog plastových palet a prvků PLASTETA®",
filter_all: "Všechny výrobky (6)",
filter_euro: "Europalety 1200x800",
filter_ind: "Průmyslové 1200x1000",
filter_spec: "Sudové a plné",
btn_show_specs: "Detailní parametry & specifikace",
sub_comparison: "TECHNICKÉ SROVNÁNÍ",
title_comparison: "Zátěžové parametry produktových řad",
sub_services: "KOMPLEXNÍ LOGISTICKÉ SLUŽBY",
title_services: "Paletové hospodářství na klíč",
srv1_title: "Dlouhodobý pronájem palet",
srv1_desc: "Flexibilní řešení pro pokrývání sezónních špiček bez nutnosti vázat kapitál v nákupu vlastního paletového fondu. Rychlá expedice potřebného množství.",
srv2_title: "Outsourcing paletového fondu",
srv2_desc: "Kompletní správa paletového hospodářství včetně financování, evidence toků, čištění, údržby a logistiky přímo ve vašich skladech.",
srv3_title: "Ekologická likvidace a recyklace",
srv3_desc: "Výkup a ekologická recyklace vyřazených a poškozených plastových palet. Uzavřený materiálový cyklus s nulovou zátěží pro životní prostředí.",
sub_contact: "PŘÍMÝ KONTAKT",
title_contact: "Poptávka a centrála společnosti",
firm_role: "Přední český výrobce a distributor plastových palet PLASTETA®",
label_address: "Sídlo společnosti:",
label_ico: "Identifikace:",
label_phones: "Telefony:",
label_email: "E-mail:",
label_mgmt: "Vedení společnosti:",
form_title: "Odeslat rychlou poptávku",
frm_name: "Jméno a příjmení / Firma *",
frm_email: "E-mail *",
frm_phone: "Telefon *",
frm_product: "Poptávaný sortiment",
frm_message: "Požadované množství a specifikace",
btn_send: "Odeslat nezávaznou poptávku",
footer_subtext: "Výroba certifikovaných plastových transportních palet PLASTETA® a ucelené služby paletového hospodářství.",
footer_nav: "Rychlá navigace",
footer_contacts: "Kontaktní centrála",
modal_specs_title: "Technické parametry",
modal_feat_title: "Konstrukční přednosti",
btn_inquire_product: "Poptat tento typ palety",
btn_close: "Zavřít okno",
prod_1_title: "EUROPLASTETA® Standard (EP 08 / EP 08R)",
prod_1_perex: "Ekologická přepravní europaleta 1200 x 800 mm vyráběná ze 100% recyklovaného směsného plastu.",
prod_2_title: "PLASTETA® Industriální (IP 10 / IP 10R)",
prod_2_perex: "Zesílená průmyslová paleta 1200 x 1000 mm pro vysoké zatížení v logistických centrech a chemickém průmyslu.",
prod_3_title: "EUROPLASTETA® Kontejnerová (CP 114)",
prod_3_perex: "Kontejnerová paleta 1140 x 1140 mm navržená pro maximální využití prostoru v námořních ISO kontejnerech.",
prod_4_title: "PLASTETA® Sudová (EP 08K)",
prod_4_perex: "Specializovaná paleta s prolisy a bezpečnostním lůžkem pro bezpečnou přepravu a skladování 200l sudů.",
prod_5_title: "PLASTETA® Plná s hladkou deskou (EP 08 - PD)",
prod_5_perex: "Hygienická plná paleta s celistvou ložnou plochou bez otvorů pro sypké a potravinářské zboží.",
prod_6_title: "Mobilní plastové svodidlo (SVOD)",
prod_6_perex: "Modulární silniční svodidlo z recyklovaného plastu s možností úhlového natáčení a řetězení."
},
en: {
nav_advantages: "Recycled Plastic Benefits",
nav_catalog: "PLASTETA® Catalog",
nav_specs: "Technical Specs",
nav_services: "Services & Rental",
nav_contact: "Contact",
btn_inquiry: "Inquire Now",
hero_badge: "100% RECYCLED MIXED PLASTIC • CZECH MANUFACTURER",
hero_title: "Industrial shipping pallets PLASTETA® load capacity up to 6 tons",
hero_desc: "We supply a certified product line of heavy-duty plastic shipping pallets made of 100% recycled plastic. Hygienic, chemical resistant, zero ISPM 15 export restrictions.",
stat_stat_load: "Static Load Capacity",
stat_dyn_load: "Dynamic Load Capacity",
stat_recycle: "Recyclable Material",
btn_explore_catalog: "Explore Products",
btn_view_specs: "Compare Specifications",
tag_europlasteta: "EUROPLASTETA® EP 08 • Standard 1200x800 mm",
sub_advantages: "ENGINEERING ADVANTAGES",
title_advantages: "Why replace wooden pallets with PLASTETA® plastic pallets",
adv1_title: "Ready for global export",
adv1_desc: "Plastic pallets are exempt from IPPC ISPM 15 phytosanitary regulations. Zero heat treatment costs or customs delays.",
adv2_title: "100% hygienic & chemical resistant",
adv2_desc: "Zero water absorption, immune to mould, pests and rot. Highly resistant to acids, alkalis, oils and easily steam cleaned.",
adv3_title: "Constant tare & dimensional stability",
adv3_desc: "Tare weight remains constant in all weather conditions. Precision geometry without nails or splinters protects packaging and conveyors.",
sub_catalog: "CERTIFIED PRODUCT RANGE",
title_catalog: "PLASTETA® Plastic Pallets & Elements Catalog",
filter_all: "All Products (6)",
filter_euro: "Europallets 1200x800",
filter_ind: "Industrial 1200x1000",
filter_spec: "Drum & Solid Top",
btn_show_specs: "Detailed Specs & Data",
sub_comparison: "TECHNICAL COMPARISON",
title_comparison: "Load Capacity Comparison Chart",
sub_services: "LOGISTICS SERVICES",
title_services: "Turnkey Pallet Management",
srv1_title: "Long-term Pallet Rental",
srv1_desc: "Flexible rental schemes covering seasonal demand peaks without upfront capital expenditure.",
srv2_title: "Pallet Pool Outsourcing",
srv2_desc: "Comprehensive pallet pool management including tracking, cleaning, servicing and supply directly at your plant.",
srv3_title: "Eco Recycling & Buy-back",
srv3_desc: "Buy-back and closed-loop recycling of damaged plastic pallets into new certified products.",
sub_contact: "DIRECT CONTACT",
title_contact: "Inquiry & Company Headquarters",
firm_role: "Leading Czech manufacturer and distributor of PLASTETA® plastic pallets",
label_address: "Headquarters:",
label_ico: "Identification:",
label_phones: "Phone:",
label_email: "E-mail:",
label_mgmt: "Management:",
form_title: "Submit Quick Inquiry",
frm_name: "Full Name / Company *",
frm_email: "E-mail Address *",
frm_phone: "Phone Number *",
frm_product: "Product of Interest",
frm_message: "Required Quantity & Details",
btn_send: "Send Free Inquiry",
footer_subtext: "Certified manufacture of PLASTETA® shipping pallets and integrated pallet pooling services.",
footer_nav: "Quick Navigation",
footer_contacts: "Head Office",
modal_specs_title: "Technical Parameters",
modal_feat_title: "Design Advantages",
btn_inquire_product: "Inquire This Model",
btn_close: "Close",
prod_1_title: "EUROPLASTETA Standard (EP 08 / EP 08R)",
prod_1_perex: "Eco-friendly shipping europallet 1200 x 800 mm manufactured from 100% recycled mixed plastic.",
prod_2_title: "PLASTETA Industrial (IP 10 / IP 10R)",
prod_2_perex: "Reinforced industrial shipping pallet 1200 x 1000 mm for heavy load distribution in logistics and chemical plants.",
prod_3_title: "EUROPLASTETA Container (CP 114)",
prod_3_perex: "Container pallet 1140 x 1140 mm designed for optimal cube utilization in maritime ISO freight containers.",
prod_4_title: "PLASTETA Drum Pallet (EP 08K)",
prod_4_perex: "Specialized pallet with molded cradles for safe transport and storage of two 200-liter chemical drums.",
prod_5_title: "PLASTETA Solid Smooth Top (EP 08 - PD)",
prod_5_perex: "Hygienic heavy pallet with a solid seamless top deck preventing contamination for food and bulk cargo.",
prod_6_title: "Mobile Plastic Road Barrier (SVOD)",
prod_6_perex: "Modular recycled polymer road safety barrier with interlocking hinges and variable angular positioning."
},
de: {
nav_advantages: "Vorteile von Kunststoff",
nav_catalog: "PLASTETA® Katalog",
nav_specs: "Technische Daten",
nav_services: "Dienstleistungen & Miete",
nav_contact: "Kontakt",
btn_inquiry: "Unverbindliche Anfrage",
hero_badge: "100% RECYCELTER MISCHKUNSTSTOFF • TSCHECHISCHER HERSTELLER",
hero_title: "Industrie-Transportpaletten PLASTETA® Tragkraft bis zu 6 Tonnen",
hero_desc: "Komplette Produktlinie zertifizierter Kunststofftransportpaletten aus robustem Mischkunststoff. Hygienisch, chemikalienbeständig, ohne ISPM 15 Auflagen für den Export.",
stat_stat_load: "Statische Tragkraft",
stat_dyn_load: "Dynamische Tragkraft",
stat_recycle: "Wiederverwertbar",
btn_explore_catalog: "Sortiment ansehen",
btn_view_specs: "Parameter vergleichen",
tag_europlasteta: "EUROPLASTETA® EP 08 • Standard 1200x800 mm",
sub_advantages: "TECHNISCHE VORTEILE",
title_advantages: "Warum Holzpaletten durch PLASTETA® ersetzen",
adv1_title: "Ideal für den internationalen Export",
adv1_desc: "Kunststoffpaletten unterliegen nicht den IPPC ISPM 15 Bestimmungen. Keine Begasungskosten und keine Verzögerungen am Zoll.",
adv2_title: "100% hygienisch & chemikalienbeständig",
adv2_desc: "Keine Feuchtigkeitsaufnahme, kein Schimmel- oder Schädlingsbefall. Resistent gegen Säuren, Laugen und Öle, dampfstrahlbar.",
adv3_title: "Form- und Taragewichtskonstanz",
adv3_desc: "Konstantes Eigengewicht bei jedem Wetter. Präzise Abmessungen ohne Nägel und Splitter schützen Ware und Fördertechnik.",
sub_catalog: "ZERTIFIZIERTES SORTIMENT",
title_catalog: "Katalog der PLASTETA® Kunststoffpaletten",
filter_all: "Alle Produkte (6)",
filter_euro: "Europaletten 1200x800",
filter_ind: "Industriepaletten 1200x1000",
filter_spec: "Fass- & Vollplatten",
btn_show_specs: "Detaillierte Spezifikationen",
sub_comparison: "TECHNISCHER VERGLEICH",
title_comparison: "Belastungsparameter der Produktreihen",
sub_services: "LOGISTIKDIENSTLEISTUNGEN",
title_services: "Palettenmanagement aus einer Hand",
srv1_title: "Langzeitmiete von Paletten",
srv1_desc: "Flexible Mietmodelle zur Abdeckung von Saisonspitzen ohne Bindung von Investitionskapital.",
srv2_title: "Paletten-Outsourcing",
srv2_desc: "Komplettes Palettenmanagement inklusive Finanzierung, Tracking, Reinigung und Bereitstellung.",
srv3_title: "Ökologische Verwertung & Recycling",
srv3_desc: "Rückkauf und geschlossener Recyclingkreislauf für beschädigte Paletten zu neuen Produkten.",
sub_contact: "DIREKTER KONTAKT",
title_contact: "Anfrage & Firmenzentrale",
firm_role: "Führender tschechischer Hersteller von PLASTETA® Kunststoffpaletten",
label_address: "Firmensitz:",
label_ico: "Identifikation:",
label_phones: "Telefon:",
label_email: "E-Mail:",
label_mgmt: "Geschäftsführung:",
form_title: "Schnellanfrage senden",
frm_name: "Name / Unternehmen *",
frm_email: "E-Mail-Adresse *",
frm_phone: "Telefonnummer *",
frm_product: "Gewünschtes Produkt",
frm_message: "Bedarf und Spezifikation",
btn_send: "Anfrage absenden",
footer_subtext: "Zertifizierte Produktion von PLASTETA® Transportpaletten und umfassende Dienstleistungen.",
footer_nav: "Schnellnavigation",
footer_contacts: "Zentrale",
modal_specs_title: "Technische Parameter",
modal_feat_title: "Konstruktionsvorteile",
btn_inquire_product: "Dieses Modell anfragen",
btn_close: "Schließen",
prod_1_title: "EUROPLASTETA Standard (EP 08 / EP 08R)",
prod_1_perex: "Ökologische Transport-Europalette 1200 x 800 mm aus 100% recyceltem Mischkunststoff.",
prod_2_title: "PLASTETA Industriepalette (IP 10 / IP 10R)",
prod_2_perex: "Verstärkte Industriepalette 1200 x 1000 mm für schwere Lasten in Logistik und chemischer Industrie.",
prod_3_title: "EUROPLASTETA Containerpalette (CP 114)",
prod_3_perex: "Containerpalette 1140 x 1140 mm zur optimalen Raumausnutzung in Seefrachtcontainern.",
prod_4_title: "PLASTETA Fasspalette (EP 08K)",
prod_4_perex: "Spezialpalette mit Mulden zur sicheren Beförderung und Lagerung von 200-Liter-Fässern.",
prod_5_title: "PLASTETA Vollplatte (EP 08 - PD)",
prod_5_perex: "Hygienische Vollkunststoffpalette mit geschlossener Deckfläche für lose Güter und Lebensmittel.",
prod_6_title: "Mobile Leitplanke aus Kunststoff (SVOD)",
prod_6_perex: "Modulare Leitplanke aus Recyclingkunststoff mit flexiblem Winkeleinschlag und Stecksystem."
}
};

document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);
if (params.get("ref") === "nabidka") {
if (!sessionStorage.getItem("ping_sent_paletplastik")) {
sessionStorage.setItem("ping_sent_paletplastik", "true");
const record = {
slug: "paletplastik",
time: new Date().toISOString(),
ua: navigator.userAgent
};
localStorage.setItem("nabidka_open_paletplastik", JSON.stringify(record));
if (window.NABIDKA_PING_URL) {
const pingUrl = `${window.NABIDKA_PING_URL}?slug=paletplastik&t=${Date.now()}`;
if (navigator.sendBeacon) {
navigator.sendBeacon(pingUrl);
} else {
new Image().src = pingUrl;
}
}
}
}

const currentLang = localStorage.getItem("paletplastik_lang") || "cz";
setLanguage(currentLang);

document.querySelectorAll(".lang-btn").forEach(btn => {
btn.addEventListener("click", () => {
const lang = btn.dataset.lang;
setLanguage(lang);
localStorage.setItem("paletplastik_lang", lang);
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
const modal = document.getElementById("techModalBackdrop");
if (modal) {
modal.classList.remove("active");
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
const target = parseInt(entry.target.dataset.target, 10);
let current = 0;
entry.target.textContent = '0';
const step = Math.max(1, Math.floor(target / 40));
const timer = setInterval(() => {
current += step;
if (current >= target) {
current = target;
clearInterval(timer);
}
entry.target.textContent = current.toLocaleString("cs-CZ");
}, 30);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

const filterBtns = document.querySelectorAll(".filter-chip");
const cards = document.querySelectorAll(".product-card");
filterBtns.forEach(btn => {
btn.addEventListener("click", () => {
filterBtns.forEach(b => b.classList.remove("active"));
btn.classList.add("active");
const f = btn.dataset.filter;
cards.forEach(card => {
if (f === "all" || card.dataset.category === f) {
card.style.display = "flex";
} else {
card.style.display = "none";
}
});
});
});

const modalBackdrop = document.getElementById("techModalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseFootBtn = document.getElementById("modalCloseFootBtn");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalPerex = document.getElementById("modalPerex");
const modalSpecsTable = document.getElementById("modalSpecsTable");
const modalFeatList = document.getElementById("modalFeatList");
const modalCategoryBadge = document.getElementById("modalCategoryBadge");

function openModal(item) {
modalCategoryBadge.textContent = item.category.toUpperCase();
modalTitle.textContent = item.title;
modalImg.src = item.image;
modalImg.alt = item.title;
modalPerex.textContent = item.perex;

let specsHtml = "";
for (const [k, v] of Object.entries(item.specs)) {
specsHtml += `<div class="modal-spec-row"><span class="spec-key">${k}:</span> <span class="spec-val">${v}</span></div>`;
}
modalSpecsTable.innerHTML = specsHtml;

let featHtml = "";
item.features.forEach(f => {
featHtml += `<li>${f}</li>`;
});
modalFeatList.innerHTML = featHtml;

modalBackdrop.classList.add("is-active");
modalBackdrop.setAttribute("aria-hidden", "false");
document.body.style.overflow = "hidden";
}

function closeModal() {
modalBackdrop.classList.remove("is-active");
modalBackdrop.setAttribute("aria-hidden", "true");
document.body.style.overflow = "";
}

document.querySelectorAll(".btn-detail").forEach(btn => {
btn.addEventListener("click", () => {
const id = btn.dataset.itemId;
const item = catalogData.find(x => x.id === id);
if (item) {
openModal(item);
}
});
});

modalCloseBtn.addEventListener("click", closeModal);
modalCloseFootBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
if (e.target === modalBackdrop) {
closeModal();
}
});
document.addEventListener("keydown", (e) => {
if (e.key === "Escape" && modalBackdrop.classList.contains("is-active")) {
closeModal();
}
});
});
