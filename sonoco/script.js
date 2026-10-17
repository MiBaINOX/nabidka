document.addEventListener('DOMContentLoaded', function() {
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('ref') === 'nabidka') {
if (!sessionStorage.getItem('nabidka_ping_sent')) {
sessionStorage.setItem('nabidka_ping_sent', 'true');
const pingData = {
slug: 'sonoco',
openedAt: new Date().toISOString(),
ua: navigator.userAgent
};
try {
localStorage.setItem('nabidka_open_sonoco', JSON.stringify(pingData));
if (window.NABIDKA_PING_URL) {
if (navigator.sendBeacon) {
const blob = new Blob([JSON.stringify(pingData)], { type: 'application/json' });
navigator.sendBeacon(window.NABIDKA_PING_URL, blob);
} else {
new Image().src = window.NABIDKA_PING_URL + '?slug=sonoco&t=' + Date.now();
}
}
} catch(e) {}
}
}

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
if (entry.target.classList.contains('hero-stats-banner')) {
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

const filterBtns = document.querySelectorAll('.filter-btn');
const catalogCards = document.querySelectorAll('.catalog-card');
filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const cat = btn.getAttribute('data-cat');
catalogCards.forEach(card => {
if (cat === 'all' || card.getAttribute('data-cat') === cat) {
card.style.display = 'flex';
} else {
card.style.display = 'none';
}
});
});
});

const windSlider = document.getElementById('calcWindSpeed');
const windValDisplay = document.getElementById('windVal');
const turbineSelect = document.getElementById('calcTurbinePower');
const hoursSelect = document.getElementById('calcOperationHours');
const resProd = document.getElementById('resProduction');
const resCo2 = document.getElementById('resCo2');
const resHomes = document.getElementById('resHomes');

function updateCalculator() {
if (!windSlider || !turbineSelect || !hoursSelect) return;
const speed = parseFloat(windSlider.value);
const power = parseFloat(turbineSelect.value);
const hours = parseFloat(hoursSelect.value);
windValDisplay.textContent = speed.toFixed(1) + ' m/s';
const speedFactor = Math.pow(speed / 5.5, 2.2);
const annualKwh = Math.round(power * hours * 0.72 * speedFactor);
const co2Tons = (annualKwh * 0.0005).toFixed(1);
const homesEquivalent = (annualKwh / 3500).toFixed(1);
resProd.textContent = annualKwh.toLocaleString('cs-CZ');
resCo2.textContent = co2Tons;
resHomes.textContent = homesEquivalent;
}

if (windSlider) {
windSlider.addEventListener('input', updateCalculator);
turbineSelect.addEventListener('change', updateCalculator);
hoursSelect.addEventListener('change', updateCalculator);
updateCalculator();
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
