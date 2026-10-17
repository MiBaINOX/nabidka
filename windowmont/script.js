document.addEventListener('DOMContentLoaded', function() {
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('ref') === 'nabidka') {
if (!sessionStorage.getItem('nabidka_ping_sent')) {
sessionStorage.setItem('nabidka_ping_sent', 'true');
const pingData = {
slug: 'windowmont',
openedAt: new Date().toISOString(),
ua: navigator.userAgent
};
try {
localStorage.setItem('nabidka_open_windowmont', JSON.stringify(pingData));
if (window.NABIDKA_PING_URL) {
if (navigator.sendBeacon) {
const blob = new Blob([JSON.stringify(pingData)], { type: 'application/json' });
navigator.sendBeacon(window.NABIDKA_PING_URL, blob);
} else {
new Image().src = window.NABIDKA_PING_URL + '?slug=windowmont&t=' + Date.now();
}
}
} catch(e) {}
}
}

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
if (entry.target.classList.contains('hero-metrics-grid')) {
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

const tabBtns = document.querySelectorAll('.tech-tab-btn');
const serviceCards = document.querySelectorAll('.service-tech-card');
tabBtns.forEach(btn => {
btn.addEventListener('click', () => {
tabBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const filter = btn.getAttribute('data-filter');
serviceCards.forEach(card => {
if (filter === 'all' || card.getAttribute('data-filter') === filter) {
card.style.display = 'flex';
} else {
card.style.display = 'none';
}
});
});
});

const radiusSlider = document.getElementById('craneRadius');
const radiusDisplay = document.getElementById('radiusVal');
const outriggerSelect = document.getElementById('outriggerPos');
const weightInput = document.getElementById('loadWeight');
const statusHeadline = document.getElementById('safetyStatusText');
const statusPanel = document.getElementById('safetyStatusBox');
const gaugeBar = document.getElementById('gaugeBar');
const maxCapDisplay = document.getElementById('maxCapDisplay');
const usageDisplay = document.getElementById('usageDisplay');
const calcNote = document.getElementById('calcNote');

function calcCraneCapacity(radius, outrigger) {
let baseCap = 2900;
if (radius <= 1.4) baseCap = 2900;
else if (radius <= 2.0) baseCap = 2400;
else if (radius <= 3.0) baseCap = 1650;
else if (radius <= 4.0) baseCap = 1150;
else if (radius <= 5.0) baseCap = 820;
else if (radius <= 6.0) baseCap = 600;
else if (radius <= 7.0) baseCap = 450;
else baseCap = 350;

if (outrigger === 'mid') baseCap = Math.round(baseCap * 0.75);
if (outrigger === 'min') baseCap = Math.round(baseCap * 0.50);
return baseCap;
}

function updateCraneCalculator() {
if (!radiusSlider || !outriggerSelect || !weightInput) return;
const radius = parseFloat(radiusSlider.value);
const outrigger = outriggerSelect.value;
const weight = parseFloat(weightInput.value) || 0;
radiusDisplay.textContent = radius.toFixed(1) + ' m';

const maxCap = calcCraneCapacity(radius, outrigger);
maxCapDisplay.textContent = maxCap.toLocaleString('cs-CZ') + ' kg';

const usagePercent = Math.round((weight / maxCap) * 100);
usageDisplay.textContent = usagePercent + ' %';

const clampedGauge = Math.min(100, usagePercent);
gaugeBar.style.width = clampedGauge + '%';

if (usagePercent <= 80) {
statusHeadline.textContent = 'BEZPEČNÝ ZDVIH';
statusHeadline.style.color = '#10B981';
gaugeBar.style.background = '#10B981';
statusPanel.style.borderLeftColor = '#10B981';
calcNote.textContent = 'Zdvih je v bezpečné zóně zátěžového diagramu. Manipulace je stabilní a vyhovuje normám ČSN.';
} else if (usagePercent <= 100) {
statusHeadline.textContent = 'POZOR: LIMITNÍ ZÁTĚŽ';
statusHeadline.style.color = '#F59E0B';
gaugeBar.style.background = '#F59E0B';
statusPanel.style.borderLeftColor = '#F59E0B';
calcNote.textContent = 'Zatížení se blíží maximální nosnosti stroje. Vyžaduje zkušeného jeřábníka a přesné vyrovnání patek.';
} else {
statusHeadline.textContent = 'PŘETÍŽENÍ: NEPOVOLENO';
statusHeadline.style.color = '#EF4444';
gaugeBar.style.background = '#EF4444';
statusPanel.style.borderLeftColor = '#EF4444';
calcNote.textContent = 'Břemeno překračuje nosnost jeřábu při tomto vyložení! Je nutné přisunout stroj blíže nebo rozdělit náklad.';
}
}

if (radiusSlider) {
radiusSlider.addEventListener('input', updateCraneCalculator);
outriggerSelect.addEventListener('change', updateCraneCalculator);
weightInput.addEventListener('input', updateCraneCalculator);
updateCraneCalculator();
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
