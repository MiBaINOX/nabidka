document.addEventListener('DOMContentLoaded', function() {
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('ref') === 'nabidka') {
if (!sessionStorage.getItem('nabidka_ping_sent')) {
sessionStorage.setItem('nabidka_ping_sent', 'true');
const pingData = {
slug: 'lamals',
openedAt: new Date().toISOString(),
ua: navigator.userAgent
};
try {
localStorage.setItem('nabidka_open_lamals', JSON.stringify(pingData));
if (window.NABIDKA_PING_URL) {
if (navigator.sendBeacon) {
const blob = new Blob([JSON.stringify(pingData)], { type: 'application/json' });
navigator.sendBeacon(window.NABIDKA_PING_URL, blob);
} else {
new Image().src = window.NABIDKA_PING_URL + '?slug=lamals&t=' + Date.now();
}
}
} catch(e) {}
}
}

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
if (entry.target.classList.contains('hero-key-figures')) {
initCounters();
}
}
});
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

let countersStarted = false;
function initCounters() {
if (countersStarted) return;
countersStarted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
document.querySelectorAll('.counter').forEach(cnt => {
const target = parseInt(cnt.getAttribute('data-target'), 10);
        cnt.textContent = '0';
const duration = 1500;
const stepTime = 30;
const totalSteps = duration / stepTime;
const increment = target / totalSteps;
let current = 0;
const timer = setInterval(() => {
current += increment;
if (current >= target) {
cnt.textContent = target;
clearInterval(timer);
} else {
cnt.textContent = Math.floor(current);
}
}, stepTime);
});
}

const filterBtns = document.querySelectorAll('.s-filter-btn');
const serviceCards = document.querySelectorAll('.s-card');
filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const cat = btn.getAttribute('data-cat');
serviceCards.forEach(card => {
if (cat === 'all' || card.getAttribute('data-cat') === cat) {
card.style.display = 'flex';
} else {
card.style.display = 'none';
}
});
});
});

const problemSelect = document.getElementById('problemCategory');
const sizeSelect = document.getElementById('companySize');
const urgencySelect = document.getElementById('urgencyLevel');
const recTitle = document.getElementById('recTitle');
const recDesc = document.getElementById('recDesc');
const recCta = document.getElementById('recCtaBtn');

const adviceMatrix = {
crash: {
title: 'Expresní servis & diagnostika',
desc: 'Pravděpodobná závada disku nebo napájení. Pro firmy v Praze nabízíme bezplatný svoz nebo zásah technika do 2 hodin se zálohováním zbylých dat.',
cta: 'Zavolat servis +420 284 824 300'
},
network: {
title: 'Diagnostika sítě & výjezd',
desc: 'Okamžitě prověříme router, DNS a bránu. Pokud jde o fyzickou závadu na kabeláži či switchi, vyšleme technika s měřicí technikou.',
cta: 'Zavolat technika +420 284 824 300'
},
printer: {
title: 'Servis tiskáren na místě',
desc: 'Autorizovaný servis pro značky HP, Canon a Epson. Vyčistíme mechaniku, zkontrolujeme tiskový server a zprovozníme síťové skenování.',
cta: 'Nahlásit servis +420 284 824 300'
},
backup: {
title: 'Zálohovací plán 3-2-1',
desc: 'Navrhneme kombinaci lokálního šifrovaného NAS úložiště a nezávislé cloudové zálohy, které spolehlivě ochrání vaše účetnictví před ransomwarem.',
cta: 'Konzultovat zálohy +420 284 824 300'
},
outsourcing: {
title: 'Správa IT se smlouvou SLA',
desc: 'Převezmeme plnou péči o vaši techniku, servery, bezpečnost a uživatele. Získáte dedikovaného správce a garantovanou dostupnost bez výpadků.',
cta: 'Domluvit audit +420 284 824 300'
}
};

function updateTroubleshooter() {
if (!problemSelect) return;
const prob = problemSelect.value;
const info = adviceMatrix[prob] || adviceMatrix.crash;
recTitle.textContent = info.title;
recDesc.textContent = info.desc;
recCta.textContent = info.cta;
}

if (problemSelect) {
problemSelect.addEventListener('change', updateTroubleshooter);
sizeSelect.addEventListener('change', updateTroubleshooter);
urgencySelect.addEventListener('change', updateTroubleshooter);
updateTroubleshooter();
}

let catalogData = [];
fetch('assets/tech_catalog.json')
.then(r => r.json())
.then(data => { catalogData = data; })
.catch(() => {});

const modalBackdrop = document.getElementById('techModalBackdrop');
const modalClose = document.getElementById('modalCloseBtn');
const modalTitle = document.getElementById('modalTitle');
const modalCat = document.getElementById('modalCategory');
const modalDesc = document.getElementById('modalDesc');
const modalImg = document.getElementById('modalImage');
const modalSpecs = document.getElementById('modalSpecs');
const modalAdv = document.getElementById('modalAdvantages');

function openTechModal(id) {
const item = catalogData.find(x => x.id === id);
if (!item) return;
modalTitle.textContent = item.title;
modalCat.textContent = item.category_name;
modalDesc.textContent = item.description;
modalImg.src = item.image;
modalImg.alt = item.title;
modalSpecs.innerHTML = '';
Object.entries(item.specs).forEach(([k, v]) => {
const row = document.createElement('div');
row.className = 'modal-spec-item';
row.innerHTML = '<span>' + k + '</span><strong>' + v + '</strong>';
modalSpecs.appendChild(row);
});
modalAdv.innerHTML = '';
item.advantages.forEach(adv => {
const li = document.createElement('li');
li.textContent = adv;
modalAdv.appendChild(li);
});
modalBackdrop.classList.add('open');
modalBackdrop.setAttribute('aria-hidden', 'false');
document.body.style.overflow = 'hidden';
}

function closeTechModal() {
modalBackdrop.classList.remove('open');
modalBackdrop.setAttribute('aria-hidden', 'true');
document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-tech]').forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
openTechModal(btn.getAttribute('data-open-tech'));
});
});

if (modalClose) {
modalClose.addEventListener('click', closeTechModal);
}
if (modalBackdrop) {
modalBackdrop.addEventListener('click', (e) => {
if (e.target === modalBackdrop) closeTechModal();
});
}
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
closeTechModal();
}
});
});
