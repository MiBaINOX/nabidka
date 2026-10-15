document.addEventListener('DOMContentLoaded', () => {
    initClientTracker();
    initMobileMenu();
    initMachineTabs();
    initScrollReveal();
    initCounters();
});

function initClientTracker() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'nabidka' || params.get('ref') === 'capture') {
        const payload = {
            slug: 'schw-service',
            opened_at: new Date().toISOString(),
            ua: navigator.userAgent
        };
        try {
            localStorage.setItem('nabidka_open_schw-service', JSON.stringify(payload));
            if (!sessionStorage.getItem('nabidka_ping_sent')) {
                sessionStorage.setItem('nabidka_ping_sent', '1');
                if (window.NABIDKA_PING_URL) {
                    const pingUrl = window.NABIDKA_PING_URL + '?slug=schw-service&time=' + encodeURIComponent(payload.opened_at);
                    if (navigator.sendBeacon) {
                        navigator.sendBeacon(pingUrl);
                    } else {
                        const img = new Image();
                        img.src = pingUrl;
                    }
                }
            }
        } catch (e) {}
    }
}

function initMobileMenu() {
    const btn = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });
}

function initMachineTabs() {
    const tabs = document.querySelectorAll('.m-tab');
    const cards = document.querySelectorAll('.m-card');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            cards.forEach(card => {
                if (target === 'all' || card.getAttribute('data-category') === target) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });
    reveals.forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    let started = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    const duration = 1600;
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const inc = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += inc;
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSec = document.querySelector('.stats-bar');
    if (statsSec) observer.observe(statsSec);
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (!lb || !img) return;
    img.src = src;
    lb.style.display = 'flex';
}

function closeLightboxDirect() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.style.display = 'none';
}

function closeLightbox(e) {
    if (e.target.id === 'lightbox') {
        closeLightboxDirect();
    }
}

function copyIco(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Zkopírováno!';
        setTimeout(() => {
            btn.textContent = orig;
        }, 2000);
    });
}

function handleInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('inqName').value;
    const email = document.getElementById('inqEmail').value;
    const phone = document.getElementById('inqPhone').value;
    const material = document.getElementById('inqMaterial').value;
    const msg = document.getElementById('inqMsg').value;

    const subject = encodeURIComponent('Poptávka CNC obrábění – ' + name);
    const body = encodeURIComponent('Dobrý den,\n\npoptávám u vás zakázkovou výrobu:\n\nMateriál: ' + material + '\nZpráva: ' + msg + '\n\nKontakt: ' + name + ', tel: ' + phone + ', e-mail: ' + email);
    window.location.href = 'mailto:info@schwservice.cz?subject=' + subject + '&body=' + body;
}
