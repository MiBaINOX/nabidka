const catalogData = [{"id": "stavebni-chemie-eternal", "title": "Výroba stavební chemie a nátěrových hmot ETERNAL", "perex": "Přední český výrobce vodou ředitelných nátěrových systémů pro střechy, podlahy, fasády a kovové konstrukce.", "category": "chemie", "image": "assets/obr1.jpg", "specs": {"Sortiment": "ETERNAL na střechy, SANAKRYL, hydroizolace, antikorozní nátěry, lazury a laky", "Ekologie": "100% vodou ředitelné receptury, nízký obsah VOC, bez zápachu", "Certifikace": "ISO 9001, ISO 14001, certifikováno TZÚS Praha", "Záruka na systém": "Až 10 let na ucelené střešní a hydroizolační systémy", "Použití": "Ocelové haly, eternitové a plechové střechy, průmyslové podlahy, balkóny"}, "features": ["Více než 30 let tradice na českém i evropském trhu stavební chemie", "Vlastní výzkumné a vývojové laboratoře s testováním stárnutí", "Komplexní hydroizolační řešení pro ploché i šikmé střechy", "Odborné technické poradenství a tvorba technologických předpisů"]}, {"id": "stavebni-divize-aps", "title": "Divize Realizace staveb (APS AUSTIS)", "perex": "Generální dodávky pozemních staveb, revitalizace bytových domů, zateplování fasád a průmyslové rekonstrukce.", "category": "stavby", "image": "assets/obr2.jpg", "specs": {"Rozsah": "Generální dodavatel pozemních a průmyslových staveb", "Specializace": "Zateplovací systémy ETICS, sanace betonových konstrukcí, střechy", "Reference": "Stovky zrealizovaných bytových domů, škol a komerčních objektů", "Zázemí": "Vlastní lešení, mechanizace, dopravní technika a zkušení stavbyvedoucí"}, "features": ["Komplexní realizace od architektonické studie po kolaudaci", "Důsledná kontrola kvality dle norem ISO 9001 a BOZP", "Optimalizace energetické náročnosti budov v programu Nová zelená úsporám", "Pojištění odpovědnosti stavební činnosti do výše desítek milionů Kč"]}, {"id": "technicky-dozor-bozp", "title": "Technický dozor stavebníka (TDS) a Koordinátor BOZP", "perex": "Nezávislá expertní kontrola kvality, prostavěnosti a bezpečnosti práce na staveništi dle zákona č. 309/2006 Sb.", "category": "inzenyring", "image": "assets/obr3.jpg", "specs": {"Oprávnění": "Autorizovaní inženýři ČKAIT, certifikovaní koordinátoři BOZP", "Činnost": "Kontrola souladu s projektovou dokumentací, přejímky konstrukcí, soupisy vad a nedodělků", "Finanční kontrola": "Prověřování zjišťovacích protokolů a fakturace zhotovitelů", "BOZP": "Plán BOZP, koordinace profesí, hlášení inspekci práce"}, "features": ["Ochrana finančních zájmů a investic stavebníka", "Prevence skrytých vad a zbytečných vícenákladů stavby", "Pravidelný fotodokumentační reporting z kontrolních dnů", "Zkušenosti s projekty financovanými ze strukturálních fondů EU"]}, {"id": "sprava-nemovitosti-real", "title": "Správa nemovitostí a facility management (AUSTIS-REAL)", "perex": "Komplexní ekonomická, právní a technická správa bytových domů, SVJ, bytových družstev a komerčních areálů.", "category": "facility", "image": "assets/obr2.jpg", "specs": {"Spravované jednotky": "Více než 10 000 spravovaných bytových a nebytových jednotek", "Služby": "Vedení účetnictví, vyúčtování služeb, revize, havarijní servis 24/7", "Právní servis": "Vymáhání pohledávek, příprava smluv, asistence na shromážděních SVJ", "Klientský portál": "Online přístup vlastníků k předpisům plateb a dokumentům"}, "features": ["Nonstop dispečink havarijních oprav pro vodu, plyn, elektro a výtahy", "Pravidelné technické prohlídky a plánování fondu oprav", "Transparentní hospodaření s důrazem na úspory energií", "Dlouholetá tradice na trhu správy nemovitostí v Praze a okolí"]}];

const translations = {
cz: {
topbar_exp: "Tradice a česká výroba od roku 1990",
nav_divisions: "Divize",
nav_eternal: "Barvy ETERNAL",
nav_catalog: "Katalog",
nav_stats: "Přednosti",
nav_contact: "Kontakt",
btn_contact_us: "Kontaktovat centrálu",
hero_badge: "ČESKÁ AKCIOVÁ SPOLEČNOST • OD ROKU 1990",
hero_title: "Přední český výrobce stavební chemie a generální dodavatel staveb",
hero_desc: "Vyvíjíme a vyrábíme ekologické vodou ředitelné barvy a hydroizolace ETERNAL. Zajišťujeme komplexní dodávky pozemních staveb, technický dozor investora (TDS) a profesionální facility management.",
stat_years: "Let na trhu",
stat_units: "Spravovaných jednotek",
stat_czech: "Česká výroba",
btn_explore_catalog: "Katalog sortimentu",
btn_view_divisions: "Přehled činností",
kicker_divisions: "STRUKTURA SPOLEČNOSTI",
title_divisions: "Čtyři klíčové pilíře AUSTIS a.s.",
desc_divisions: "Synergické propojení vývoje chemických hmot, stavební realizace a komplexní správy areálů.",
div1_title: "Výroba stavební chemie",
div1_desc: "Vývoj a výroba nátěrových hmot, hydroizolací a laků ETERNAL a SANAKRYL. Vlastní moderní laboratoře a receptury s certifikací ISO 9001.",
div2_title: "Stavební divize (APS)",
div2_desc: "Generální dodávky novostaveb, komplexní zateplování fasád bytových domů, sanace betonů a hydroizolace plochých střech.",
div3_title: "Technický dozor a BOZP",
div3_desc: "Nezávislý technický dozor stavebníka (TDS) a koordinace bezpečnosti práce na staveništi dle zákona č. 309/2006 Sb.",
div4_title: "Správa nemovitostí (REAL)",
div4_desc: "Facility management a technicko-ekonomická správa pro bytová družstva, SVJ a komerční objekty s nepřetržitým dispečinkem 24/7.",
kicker_chem: "PROVĚŘENÁ ZNAČKA ETERNAL",
title_chem: "Ekologické vodou ředitelné nátěrové systémy",
desc_chem: "Značka ETERNAL je synonymem pro spolehlivou ochranu stavebních konstrukcí, střech, podlah a kovových povrchů. Díky vodou ředitelným recepturám minimalizujeme obsah těkavých organických látek (VOC) a chráníme zdraví aplikačních pracovníků i životní prostředí.",
feat1: "Hydroizolace střech a teras s vysokou pružností",
feat2: "Antikorozní nátěry na zkorodovaný i pozinkovaný plech",
feat3: "Otěruvzdorné podlahové nátěry pro garáže a dílny",
feat4: "Certifikováno Technickým a zkušebním ústavem stavebním Praha (TZÚS)",
kicker_catalog: "SORTIMENT A SLUŽBY",
title_catalog: "Katalog divizí a produktových řad",
desc_catalog: "Prohlédněte si ucelené technické specifikace jednotlivých oblastí činnosti AUSTIS a.s.",
btn_view_specs: "Technické specifikace & atesty",
kicker_ethics: "KVALITA A ZODPOVĚDNOST",
title_ethics: "Certifikovaný systém řízení jakosti",
desc_ethics: "Naše výrobní i stavební procesy podléhají pravidelným nezávislým auditům a etickému kodexu.",
eth1_title: "ISO 9001 Systém řízení jakosti",
eth1_desc: "Garance špičkových parametrů každé šarže barev a stavebních prací s pravidelnou kontrolou výstupní kvality.",
eth2_title: "ISO 14001 Environmentální řízení",
eth2_desc: "Systematické snižování energetické náročnosti výroby, recyklace obalů a bezodpadové hospodaření.",
eth3_title: "Etický kodex a Whistleblowing",
eth3_desc: "Transparentní obchodní vztahy, dodržování zákonných norem a podpora férového podnikatelského prostředí.",
kicker_contact: "CENTRÁLA PRAHA 5",
title_contact: "Kontakt na vedení a obchodní divize",
desc_contact: "Rádi s Vámi probereme požadavky na stavební chemii, dodávky staveb nebo správu objektů.",
lbl_headquarters: "Sídlo společnosti:",
lbl_ico: "Identifikační údaje:",
lbl_board: "Představenstvo:",
lbl_phone: "Telefon centrála:",
lbl_email: "E-mail:",
form_title: "Odeslat zprávu do centrály",
frm_name: "Jméno a příjmení / Společnost *",
frm_email: "E-mail *",
frm_phone: "Telefon *",
frm_division: "Požadovaná divize",
frm_message: "Specifikace poptávky nebo dotaz",
btn_send: "Odeslat poptávku",
footer_desc: "AUSTIS a.s. – stabilní česká společnost s více než 30letou tradicí ve vývoji stavební chemie ETERNAL, realizaci stavebních děl a správě nemovitostí.",
footer_nav: "Rychlá navigace",
footer_hq: "Centrála Slivenec",
modal_specs: "Technické specifikace",
modal_advantages: "Certifikované přednosti",
btn_inquire_div: "Poptat tuto divizi",
btn_close: "Zavřít",
card1_title: "Výroba stavební chemie a nátěrových hmot ETERNAL",
card1_perex: "Přední český výrobce vodou ředitelných nátěrových systémů pro střechy, podlahy, fasády a kovové konstrukce.",
card2_title: "Divize Realizace staveb (APS AUSTIS)",
card2_perex: "Generální dodávky pozemních staveb, revitalizace bytových domů, zateplování fasád a průmyslové rekonstrukce.",
card3_title: "Technický dozor stavebníka (TDS) a Koordinátor BOZP",
card3_perex: "Nezávislá expertní kontrola kvality, prostavěnosti a bezpečnosti práce na staveništi dle zákona č. 309/2006 Sb.",
card4_title: "Správa nemovitostí a facility management (AUSTIS-REAL)",
card4_perex: "Komplexní ekonomická, právní a technická správa bytových domů, SVJ, bytových družstev a komerčních areálů."
},
en: {
topbar_exp: "Czech manufacture and heritage since 1990",
nav_divisions: "Divisions",
nav_eternal: "ETERNAL Paints",
nav_catalog: "Catalog",
nav_stats: "Advantages",
nav_contact: "Contact",
btn_contact_us: "Contact Headquarters",
hero_badge: "CZECH PUBLIC COMPANY • FOUNDED 1990",
hero_title: "Leading Czech building chemistry manufacturer and general contractor",
hero_desc: "We engineer and produce eco-friendly waterborne paints and ETERNAL waterproofing systems. We deliver complete construction works, client technical supervision (TDS) and facility management.",
stat_years: "Years on Market",
stat_units: "Managed Units",
stat_czech: "Czech Production",
btn_explore_catalog: "Product Catalog",
btn_view_divisions: "Divisions Overview",
kicker_divisions: "CORPORATE STRUCTURE",
title_divisions: "Four Core Pillars of AUSTIS a.s.",
desc_divisions: "Synergistic integration of chemical coatings, construction delivery and asset management.",
div1_title: "Building Chemistry",
div1_desc: "Development and manufacture of coatings, waterproofing and varnishes ETERNAL and SANAKRYL. Modern in-house R&D certified to ISO 9001.",
div2_title: "Construction Division",
div2_desc: "General contractor for new builds, facade thermal insulation, concrete restoration and flat roof waterproofing.",
div3_title: "Technical Supervision",
div3_desc: "Independent client construction supervision (TDS) and occupational safety coordination under Act No. 309/2006 Coll.",
div4_title: "Property Management",
div4_desc: "Comprehensive facility management for cooperatives, HOAs and commercial hubs with 24/7 emergency dispatch.",
kicker_chem: "TRUSTED ETERNAL BRAND",
title_chem: "Eco-friendly Waterborne Coating Systems",
desc_chem: "ETERNAL stands for durable protection of building envelopes, roofs, industrial floors and metal structures with minimal VOC content.",
feat1: "Flexible roof and terrace waterproofing systems",
feat2: "Direct-to-metal anticorrosive primers and topcoats",
feat3: "Heavy-duty abrasion resistant floor paints",
feat4: "Tested and certified by TZÚS Prague",
kicker_catalog: "PORTFOLIO & CAPABILITIES",
title_catalog: "Divisions & Product Lines Catalog",
desc_catalog: "Review detailed technical specifications of each AUSTIS business segment.",
btn_view_specs: "Technical Specs & Certificates",
kicker_ethics: "QUALITY & INTEGRITY",
title_ethics: "Certified Quality Management System",
desc_ethics: "Our chemical production and building operations strictly comply with ISO standards and our Code of Ethics.",
eth1_title: "ISO 9001 Quality Management",
eth1_desc: "Ensures highest batch-to-batch consistency and rigorous quality control at every stage.",
eth2_title: "ISO 14001 Environmental Management",
eth2_desc: "Systematic reduction of energy consumption and responsible packaging recycling.",
eth3_title: "Code of Ethics & Whistleblowing",
eth3_desc: "Committed to transparent business ethics, fair competition and compliance.",
kicker_contact: "HEAD OFFICE PRAGUE 5",
title_contact: "Contact Executive & Sales Teams",
desc_contact: "We welcome the opportunity to discuss your technical coating requirements or construction projects.",
lbl_headquarters: "Headquarters:",
lbl_ico: "Identification:",
lbl_board: "Board of Directors:",
lbl_phone: "Phone (Head Office):",
lbl_email: "E-mail:",
form_title: "Send Message to Head Office",
frm_name: "Full Name / Organization *",
frm_email: "E-mail Address *",
frm_phone: "Phone Number *",
frm_division: "Target Division",
frm_message: "Inquiry or Project Details",
btn_send: "Submit Inquiry",
footer_desc: "AUSTIS a.s. – established Czech enterprise with over 30 years of excellence in ETERNAL chemical manufacturing, construction works and property management.",
footer_nav: "Quick Navigation",
footer_hq: "Slivenec Headquarters",
modal_specs: "Technical Specifications",
modal_advantages: "Certified Highlights",
btn_inquire_div: "Inquire This Division",
btn_close: "Close",
card1_title: "Manufacture of Building Chemistry and ETERNAL Coatings",
card1_perex: "Leading European producer of waterborne coating systems for roofs, industrial floors, facades and structural steel.",
card2_title: "Construction Works Division (APS AUSTIS)",
card2_perex: "General contracting for commercial buildings, residential thermal renovations, concrete restoration and roofs.",
card3_title: "Independent Construction Supervision (TDS) and Safety",
card3_perex: "Expert quality control, execution audits and occupational site safety coordination under Act No. 309/2006 Coll.",
card4_title: "Property Management and Facility Services (AUSTIS-REAL)",
card4_perex: "Complete financial, legal and technical management for residential communities, housing cooperatives and commercial hubs."
}
};

document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);
if (params.get("ref") === "nabidka") {
if (!sessionStorage.getItem("ping_sent_austis")) {
sessionStorage.setItem("ping_sent_austis", "true");
const record = {
slug: "austis",
time: new Date().toISOString(),
ua: navigator.userAgent
};
localStorage.setItem("nabidka_open_austis", JSON.stringify(record));
if (window.NABIDKA_PING_URL) {
const pingUrl = `${window.NABIDKA_PING_URL}?slug=austis&t=${Date.now()}`;
if (navigator.sendBeacon) {
navigator.sendBeacon(pingUrl);
} else {
new Image().src = pingUrl;
}
}
}
}

const currentLang = localStorage.getItem("austis_lang") || "cz";
setLanguage(currentLang);

document.querySelectorAll(".lang-btn").forEach(btn => {
btn.addEventListener("click", () => {
const lang = btn.dataset.lang;
setLanguage(lang);
localStorage.setItem("austis_lang", lang);
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

const counters = document.querySelectorAll(".count-val");
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

const modalBackdrop = document.getElementById("techModalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseFoot = document.getElementById("modalCloseFoot");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalPerex = document.getElementById("modalPerex");
const modalSpecsList = document.getElementById("modalSpecsList");
const modalAdvList = document.getElementById("modalAdvList");

function openModal(item) {
modalTitle.textContent = item.title;
modalImg.src = item.image;
modalImg.alt = item.title;
modalPerex.textContent = item.perex;

let specsHtml = "";
for (const [k, v] of Object.entries(item.specs)) {
specsHtml += `<div class="modal-spec-row"><span class="k">${k}:</span> <span class="v">${v}</span></div>`;
}
modalSpecsList.innerHTML = specsHtml;

let advHtml = "";
item.features.forEach(f => {
advHtml += `<li>${f}</li>`;
});
modalAdvList.innerHTML = advHtml;

modalBackdrop.classList.add("is-active");
modalBackdrop.setAttribute("aria-hidden", "false");
document.body.style.overflow = "hidden";
}

function closeModal() {
modalBackdrop.classList.remove("is-active");
modalBackdrop.setAttribute("aria-hidden", "true");
document.body.style.overflow = "";
}

document.querySelectorAll(".btn-tech-open").forEach(btn => {
btn.addEventListener("click", () => {
const id = btn.dataset.id;
const item = catalogData.find(x => x.id === id);
if (item) {
openModal(item);
}
});
});

modalCloseBtn.addEventListener("click", closeModal);
modalCloseFoot.addEventListener("click", closeModal);
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
