document.addEventListener('DOMContentLoaded', function () {
var catalogData = {
"pohonna_stanice": {
"title": "Kapotovaná pohonná stanice",
"cat": "Pohon a elektromechanika",
"img": "assets/wakelift-paint.jpg",
"desc": "Jako jediný výrobce na trhu poskytuje WAKELIFT plně kapotovanou pohonnou i vratnou stanici s nadčasovým aerodynamickým designem chránícím veškerou mechaniku a elektroniku před povětrnostními vlivy. Stanice je vybavena frekvenčním měničem pro hladký rozjezd od 0 km/h do 40 km/h.",
"specs": [
["Výkon motoru", "7,5 kW"],
["Napájení", "380 V / 50 Hz"],
["Rychlost pojezdu", "0 až 40 km/h"],
["Konstrukční provedení", "Plně kapotovaná skříň"],
["Povrchová úprava", "Žárový zinek / práškový lak"]
]
},
"vratna_stanice": {
"title": "Kapotovaná vratná stanice",
"cat": "Mechanika a napínání",
"img": "assets/wakelift-turn.jpg",
"desc": "Robustní vratná stanice s velkoryse dimenzovanou lanovnicí pro minimální opotřebení tažného lana. V základní ceně nabízí pevné kotvení, pro delší dráhy (až 250 metrů) je připraven systém dopínání protizávažím s hydraulickým nebo gravitačním mechanismem.",
"specs": [
["Typ kotvení", "Pevné kotvení / dopínání protizávažím"],
["Délka dráhy", "100 až 250 metrů"],
["Uložení ložisek", "Průmyslová bezúdržbová pouzdra"],
["Ochrana mechanismu", "Kapotáž s odvodem kondenzátu"]
]
},
"sloupy_konstrukce": {
"title": "Segmentové ocelové sloupy ve tvaru A",
"cat": "Nosná konstrukce",
"img": "assets/wakelift-mast.jpg",
"desc": "Základem vleku jsou robustní ocelové sloupy ve tvaru A. Jsou konstruovány ze segmentů o délce 2 nebo 3 metry, což umožňuje variabilní výšku (3 až 9 m) podle terénu a hladiny vody. Všechny díly lze přenášet ručně a přepravovat běžným osobním automobilem či přívěsným vozíkem.",
"specs": [
["Výška sloupů", "3 až 9 metrů"],
["Délka segmentů", "2 metry nebo 3 metry"],
["Geometrie", "A-sloup s vysokou torzní tuhostí"],
["Materiál", "Konstrukční ocel dle ČSN EN 1993"],
["Instalace", "Možná i bez těžké mechanizace"]
]
},
"pojezdovy_unasec": {
"title": "Unašeč s elektronickým snímáním polohy",
"cat": "Bezpečnost a monitoring",
"img": "assets/wakelift-carrier.jpg",
"desc": "Patentově chráněný pojezdový unašeč se senzory přesné polohy na lanové dráze. Zajišťuje bezpečné zpomalení před stanicí a okamžité zastavení při jakémkoliv vychýlení či pádu jezdce. Počítač zaznamenává veškeré jízdy a poskytuje kontrolu obsluhy i dálkový přehled přes mobil.",
"specs": [
["Dorazový systém", "Elektronické i mechanické dorazy"],
["Detekce polohy", "Průmyslové indukční a optické snímače"],
["Kapacita", "1 jezdec s individuálním řízením"],
["Bezpečnostní limit", "Okamžité nouzové zastavení do 1,5 m"]
]
},
"rizeni_reverzace": {
"title": "Automatické i manuální PLC řízení",
"cat": "Řízení a software",
"img": "assets/wakelift-installation.jpg",
"desc": "Řídicí rozvaděč umožňuje obsluze během sekundy přepínat mezi automatickým režimem reverzace (jezdec jezdí tam a zpět bez přerušení a bez časového omezení) a manuálním řízením (pro výuku začátečníků či nácvik konkrétních překážek a triků s okamžitým zastavením).",
"specs": [
["Režimy provozu", "Automatická reverzace / Manuální joystick"],
["Počítačový dohled", "Statistiky jízd, monitorování zátěže"],
["Dálkový přístup", "Možnost správy přes mobilní aplikaci"],
["Krytí rozvaděče", "IP65 pro venkovní použití"]
]
},
"lana_kotveni": {
"title": "Vysokopevnostní lana a kotevní systém",
"cat": "Lana a základy",
"img": "assets/wakelift-lenght.jpg",
"desc": "Systém využívá ocelová lana o průměru 8 mm nebo 9 mm s vysokou mezí pevnosti v tahu a odolností proti povětrnostním vlivům a vodě. Kotvení sloupů se provádí buď do betonových patek v břehu, nebo pomocí betonových zátěží a panelů, což usnadňuje instalaci v chráněných krajinných oblastech.",
"specs": [
["Průměr lana", "8 mm nebo 9 mm"],
["Typ lana", "Vysokopevnostní pozinkované / syntetické jádro"],
["Kotvení", "Betonové základy nebo panely"],
["Doporučená délka", "100 až 200 metrů (max. 250 m)"]
]
}
};

var refParam = new URLSearchParams(window.location.search).get('ref');
var bannerRef = document.getElementById('bannerRef');
if (refParam === 'nabidka' && bannerRef) {
bannerRef.style.display = 'block';
}
var closeRefBtn = document.getElementById('closeRefBanner');
if (closeRefBtn && bannerRef) {
closeRefBtn.addEventListener('click', function () {
bannerRef.style.display = 'none';
});
}

var menuToggle = document.getElementById('menuToggle');
var mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
menuToggle.addEventListener('click', function () {
mainNav.classList.toggle('active');
});
var navLinks = mainNav.querySelectorAll('.nav-link');
navLinks.forEach(function (nl) {
nl.addEventListener('click', function () {
mainNav.classList.remove('active');
});
});
}

var counters = document.querySelectorAll('.counter');
if ('IntersectionObserver' in window) {
var counterObserver = new IntersectionObserver(function (entries, observer) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
var el = entry.target;
var target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !isNaN(target)) {
el.textContent = '0';
var start = null;
var duration = 1600;
function step(timestamp) {
if (!start) start = timestamp;
var progress = Math.min((timestamp - start) / duration, 1);
var easeOut = 1 - Math.pow(1 - progress, 3);
var current = Math.floor(easeOut * target);
el.textContent = current;
if (progress < 1) {
window.requestAnimationFrame(step);
} else {
el.textContent = target;
}
}
window.requestAnimationFrame(step);
}
observer.unobserve(el);
}
});
}, { threshold: 0.3 });
counters.forEach(function (c) {
counterObserver.observe(c);
});
}

var searchInput = document.getElementById('catalogSearch');
var filterTabs = document.querySelectorAll('.filter-tab');
var cards = document.querySelectorAll('.cat-card');
var searchCounter = document.getElementById('searchCounter');
var activeFilter = 'all';

function filterCatalog() {
var query = searchInput ? searchInput.value.toLowerCase().trim() : '';
var visibleCount = 0;
cards.forEach(function (card) {
var title = card.querySelector('.card-title') ? card.querySelector('.card-title').textContent.toLowerCase() : '';
var desc = card.querySelector('.card-desc') ? card.querySelector('.card-desc').textContent.toLowerCase() : '';
var cat = card.getAttribute('data-cat') || '';
var matchesSearch = query === '' || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1 || cat.toLowerCase().indexOf(query) !== -1;
var matchesFilter = activeFilter === 'all' || cat === activeFilter;
if (matchesSearch && matchesFilter) {
card.style.display = 'flex';
visibleCount++;
} else {
card.style.display = 'none';
}
});
if (searchCounter) {
searchCounter.textContent = visibleCount;
}
}

if (searchInput) {
searchInput.addEventListener('input', filterCatalog);
}

filterTabs.forEach(function (tab) {
tab.addEventListener('click', function () {
filterTabs.forEach(function (t) { t.classList.remove('active'); });
tab.classList.add('active');
activeFilter = tab.getAttribute('data-filter');
filterCatalog();
});
});

var modalBackdrop = document.getElementById('techModalBackdrop');
var modalClose = document.getElementById('techModalClose');
var modalCloseAction = document.getElementById('modalCloseAction');
var modalCtaBtn = document.getElementById('modalCtaBtn');

var modalCat = document.getElementById('modalTechCat');
var modalTitle = document.getElementById('modalTechTitle');
var modalImg = document.getElementById('modalTechImg');
var modalDesc = document.getElementById('modalTechDesc');
var modalTbody = document.getElementById('modalSpecsTbody');

function openTechModal(itemId) {
var data = catalogData[itemId];
if (!data || !modalBackdrop) return;
if (modalCat) modalCat.textContent = data.cat;
if (modalTitle) modalTitle.textContent = data.title;
if (modalImg) {
modalImg.src = data.img;
modalImg.alt = data.title;
}
if (modalDesc) modalDesc.textContent = data.desc;
if (modalTbody) {
modalTbody.innerHTML = '';
data.specs.forEach(function (s) {
var tr = document.createElement('tr');
var tdK = document.createElement('td');
tdK.textContent = s[0];
var tdV = document.createElement('td');
tdV.textContent = s[1];
tr.appendChild(tdK);
tr.appendChild(tdV);
modalTbody.appendChild(tr);
});
}
modalBackdrop.style.display = 'flex';
document.body.style.overflow = 'hidden';
}

function closeTechModal() {
if (!modalBackdrop) return;
modalBackdrop.style.display = 'none';
document.body.style.overflow = '';
}

document.querySelectorAll('.btn-card-detail').forEach(function (btn) {
btn.addEventListener('click', function (e) {
e.stopPropagation();
var targetItem = btn.getAttribute('data-target-item');
openTechModal(targetItem);
});
});

cards.forEach(function (card) {
card.addEventListener('click', function () {
var itemId = card.getAttribute('data-id');
openTechModal(itemId);
});
});

if (modalClose) modalClose.addEventListener('click', closeTechModal);
if (modalCloseAction) modalCloseAction.addEventListener('click', closeTechModal);
if (modalCtaBtn) modalCtaBtn.addEventListener('click', closeTechModal);

if (modalBackdrop) {
modalBackdrop.addEventListener('click', function (e) {
if (e.target === modalBackdrop) {
closeTechModal();
}
});
}

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
closeTechModal();
}
});

var inquiryForm = document.getElementById('inquiryForm');
var formSuccess = document.getElementById('formSuccess');
if (inquiryForm) {
inquiryForm.addEventListener('submit', function (e) {
e.preventDefault();
if (formSuccess) {
formSuccess.style.display = 'block';
}
inquiryForm.reset();
});
}
});
