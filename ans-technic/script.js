const catalogData = [{"id": "lisovane-profily", "title": "Lisované hliníkové profily Standard Proferal", "perex": "Kompletní sortiment lisovaných profilů z konstrukčních slitin AlMgSi pro strojírenství a stavebnictví.", "category": "lisovane", "image": "assets/hprofily.jpg", "specs": {"Sortiment": "Trubky, čtvercové a obdélníkové profily, L, T, U, J profily", "Normy": "ČSN EN 573-3, ČSN EN 755-1 až 9", "Slitiny": "EN AW-6060 (AlMgSi), EN AW-6082 (AlSi1MgMn), EN AW-6005A", "Stavy materiálu": "T4, T5, T6, T66 dle požadavku na pevnost", "Pevnost v tahu Rm": "120 až 310 MPa dle zvolené slitiny", "Délky": "Standardní výrobní délky 6 m nebo přesné dělení na míru", "Povrchová úprava": "Surový lisovaný povrch, eloxování, práškové lakování"}, "features": ["Vysoká korozní odolnost a vynikající svařitelnost", "Přesné geometrické tolerance dle evropských norem", "Výkresové profily na zakázku dle dodané dokumentace", "Okamžitá skladová dostupnost standardních průřezů"]}, {"id": "tazne-profily", "title": "Tažné hliníkové profily a přesné tyče", "perex": "Tažené kalibrované tyče kruhového, čtyřhranného a šestihranného průřezu s vysokou rozměrovou přesností.", "category": "tazne", "image": "assets/hprofily.jpg", "specs": {"Sortiment": "Kruhové tyče, čtyřhranné tyče, šestihranné tyče, trubky", "Slitiny": "EN AW-2011 (AlCu6BiPb), EN AW-2024, EN AW-7075 (letecký dural)", "Tolerance": "H9, H11 přesné kalibrování pro CNC obrábění", "Pevnost v tahu Rm": "až 560 MPa (vysokopevnostní slitina 7075)", "Stav": "T6, T8, T9 zušlechtěno na vysokou tvrdost HB", "Obrobitelnost": "Výborná drobivá tříska pro automatové soustružení"}, "features": ["Určeno pro vysoce namáhané strojní součásti a letectví", "Přísná kontrola vnitřní homogenity a ultrazvuková defektoskopie", "Minimální házení a vysoká přímočarost pro rychloběžné automaty", "Dodávky s hutními atesty EN 10204 3.1"]}, {"id": "tpe-elastomery", "title": "Termoplastické elastomery (TPE) – směsi a profily", "perex": "Spojovací článek mezi vulkanizovanou pryží a termoplasty se špičkovou elasticitou a recyklovatelností.", "category": "tpe", "image": "assets/tpe.jpg", "specs": {"Produktové řady": "Elastofran, Gumifran, Adifran, Elifran, Marfran", "Tvrdost": "20 Shore A až 65 Shore D", "Technologie zpracování": "Vstřikování, extruze (vytlačování), vyfukování", "Teplotní rozsah": "-40 °C až +125 °C", "Recyklovatelnost": "100% recyklovatelné, opětovné zpracování technologického odpadu"}, "features": ["Pryžové elastické vlastnosti bez nutnosti vulkanizace", "Vynikající odolnost vůči UV záření, ozónu a povětrnosti", "Možnost koextruze s polypropylenem a technickými plasty", "Vhodné pro automobilová těsnění, kabely a spotřební výrobky"]}, {"id": "obuvnicke-komponenty", "title": "Komponenty pro obuvnický a kožedělný průmysl", "perex": "Ucelený sortiment polotovarů, podešví a materiálů pro profesionální výrobu a opravy obuvi.", "category": "obuv", "image": "assets/obuv.jpg", "specs": {"Sortiment": "Fusbetty (anatomické stélky), plotny EVA, technické usně, lepidla, podešve", "EVA materiály": "Vysoká hustota, paměťový efekt, tlumicí schopnost", "Lepidla": "Kontaktní polyuretanová a polychloroprenová lepidla", "Použití": "Pracovní, bezpečnostní, ortopedická i vycházková obuv"}, "features": ["Ergonomicky tvarované komponenty pro maximální komfort", "Materiály testované na oděr a mechanické namáhání", "Stabilní dodávky pro sériovou i zakázkovou výrobu", "Ekologicky šetrné receptury lepidel s nízkým obsahem VOC"]}];

document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);
if (params.get("ref") === "nabidka") {
if (!sessionStorage.getItem("ping_sent_ans_technic")) {
sessionStorage.setItem("ping_sent_ans_technic", "true");
const record = {
slug: "ans-technic",
time: new Date().toISOString(),
ua: navigator.userAgent
};
localStorage.setItem("nabidka_open_ans-technic", JSON.stringify(record));
if (window.NABIDKA_PING_URL) {
const pingUrl = `${window.NABIDKA_PING_URL}?slug=ans-technic&t=${Date.now()}`;
if (navigator.sendBeacon) {
navigator.sendBeacon(pingUrl);
} else {
new Image().src = pingUrl;
}
}
}
}

const counters = document.querySelectorAll(".stat-number");
const counterObserver = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const target = parseInt(entry.target.dataset.target, 10);
let current = 0;
const step = Math.max(1, Math.floor(target / 30));
const timer = setInterval(() => {
current += step;
if (current >= target) {
current = target;
clearInterval(timer);
}
entry.target.textContent = current;
}, 35);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

const modalBackdrop = document.getElementById("techModalBackdrop");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalCloseBottom = document.getElementById("modalCloseBottom");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalPerex = document.getElementById("modalPerex");
const modalSpecsWrap = document.getElementById("modalSpecsWrap");
const modalFeatures = document.getElementById("modalFeatures");

function openModal(item) {
modalTitle.textContent = item.title;
modalImg.src = item.image;
modalImg.alt = item.title;
modalPerex.textContent = item.perex;

let specsHtml = "";
for (const [k, v] of Object.entries(item.specs)) {
specsHtml += `<div class="modal-spec-item"><span class="modal-spec-k">${k}:</span> <span class="modal-spec-v">${v}</span></div>`;
}
modalSpecsWrap.innerHTML = specsHtml;

let featHtml = "";
item.features.forEach(f => {
featHtml += `<li>${f}</li>`;
});
modalFeatures.innerHTML = featHtml;

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
modalCloseBottom.addEventListener("click", closeModal);
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
