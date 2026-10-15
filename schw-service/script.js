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


const translations = {
    cs: {
        nav_home: "Úvod",
        nav_story: "Příběh & Historie",
        nav_machines: "Strojní park",
        nav_products: "Výrobní možnosti",
        nav_industries: "Odvětví",
        nav_gallery: "Díly & Výroba",
        nav_contact: "Kontakt",
        nav_cta: "Zadat poptávku",
        hero_tag: "ŠPIČKOVÉ OBRÁBĚNÍ NEREZOVÉ A ZUŠLECHTĚNÉ OCELI",
        hero_title: "PŘESNÉ CNC OBRÁBĚNÍ S TECHNOLOGIÍ <span>MORI SEIKI & HYUNDAI</span>",
        hero_desc: "Od závodního autokrosu v roce 1994 k modernímu strojírenskému provozu s víceosými soustruhy a frézovacími centry. Vyrábíme náročné nerezové díly, příruby, hřídele a pouzdra s garantovaným přenosem tavby materiálu a kalibrovanou kontrolou jakosti.",
        hero_point1_title: "Přenos tavby materiálu",
        hero_point1_desc: "Identifikace a laserové značení každého obrobku",
        hero_point2_title: "5-osé komplexní operace",
        hero_point2_desc: "Soustružení, vrtání, závitování i frézování v jednom upnutí",
        hero_btn_mach: "Parametry strojního parku",
        hero_btn_parts: "Katalog dílů",
        sec_story_sub: "HISTORICKÝ PŘÍBĚH SPOLEČNOSTI",
        sec_story_title: "OD AUTOKROSOVÉ DÍLNY K DODÁVKÁM PRO MEZINÁRODNÍ KONCERNY",
        sec_mach_sub: "HIGH-END TECHNOLOGIE",
        sec_mach_title: "ŠPIČKOVÝ STROJNÍ PARK MORI SEIKI & HYUNDAI",
        sec_contact_sub: "SPOJTE SE S NÁMI",
        sec_contact_title: "POPTÁVKA CNC VÝROBY A KONTAKTNÍ MÍSTO",
        form_submit: "Odeslat poptávku jednateli"
    },
    en: {
        nav_home: "Home",
        nav_story: "Story & History",
        nav_machines: "Machinery",
        nav_products: "Capabilities",
        nav_industries: "Industries",
        nav_gallery: "Parts & Production",
        nav_contact: "Contact",
        nav_cta: "Submit RFQ",
        hero_tag: "HIGH-PRECISION STAINLESS & ALLOY STEEL MACHINING",
        hero_title: "PRECISION CNC MACHINING POWERED BY <span>MORI SEIKI & HYUNDAI</span>",
        hero_desc: "From racing autocross in 1994 to a modern precision engineering plant with multi-axis CNC turning and milling centers. We manufacture complex stainless parts, flanges, shafts and bushings with full heat melt traceability and calibrated QA inspection.",
        hero_point1_title: "Heat Melt Traceability",
        hero_point1_desc: "Material batch tracking and laser marking of every component",
        hero_point2_title: "5-Axis Complex Operations",
        hero_point2_desc: "Turning, drilling, tapping and milling in a single clamping setup",
        hero_btn_mach: "Machinery Specifications",
        hero_btn_parts: "Parts Catalog",
        sec_story_sub: "COMPANY STORY & HERITAGE",
        sec_story_title: "FROM RACING WORKSHOP TO GLOBAL INDUSTRIAL CLIENTS",
        sec_mach_sub: "HIGH-END TECHNOLOGY",
        sec_mach_title: "PREMIUM MORI SEIKI & HYUNDAI CNC MACHINERY",
        sec_contact_sub: "GET IN TOUCH",
        sec_contact_title: "CNC PRODUCTION INQUIRY & CONTACT POINT",
        form_submit: "Send RFQ to Management"
    },
    de: {
        nav_home: "Startseite",
        nav_story: "Geschichte & Profil",
        nav_machines: "Maschinenpark",
        nav_products: "Fertigung",
        nav_industries: "Branchen",
        nav_gallery: "Teile & Werkzeuge",
        nav_contact: "Kontakt",
        nav_cta: "Anfrage senden",
        hero_tag: "PRÄZISIONSBEARBEITUNG VON EDELSTAHL UND VERGÜTUNGSSTAHL",
        hero_title: "PRÄZISIONS-CNC-BEARBEITUNG MIT <span>MORI SEIKI & HYUNDAI</span>",
        hero_desc: "Vom Renn-Autocross 1994 zum modernen Zerspanungsbetrieb mit Mehrachsen-Dreh- und Fräszentren. Wir fertigen anspruchsvolle Edelstahlteile, Flansche, Wellen und Buchsen mit garantierter Schmelzenrückverfolgbarkeit und kalibrierter Qualitätssicherung.",
        hero_point1_title: "Schmelzen-Rückverfolgbarkeit",
        hero_point1_desc: "Materialzeugnis und Laserbeschriftung für jedes Werkstück",
        hero_point2_title: "5-Achs-Komplettbearbeitung",
        hero_point2_desc: "Drehen, Bohren, Gewinden und Fräsen in einer einzigen Aufspannung",
        hero_btn_mach: "Maschinenpark-Parameter",
        hero_btn_parts: "Teilekatalog",
        sec_story_sub: "UNTERNEHMENSGESCHICHTE",
        sec_story_title: "VOM AUTOCROSS-BETRIEB ZUM GLOBALEN INDUSTRIELIEFERANTEN",
        sec_mach_sub: "HIGH-END TECHNOLOGIE",
        sec_mach_title: "HOCHMODERNER MASCHINENPARK MORI SEIKI & HYUNDAI",
        sec_contact_sub: "KONTAKTIEREN SIE UNS",
        sec_contact_title: "CNC-FERTIGUNGSANFRAGE & KONTAKT",
        form_submit: "Anfrage an Geschäftsleitung senden"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;
    try {
        localStorage.setItem("selected_lang_schw", lang);
    } catch (e) {}

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const saved = localStorage.getItem("selected_lang_schw");
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    } catch (e) {}
});
