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
        stat1_sub: "Rok zahájení praxe",
        stat1_desc: "Vznik dílny a start závodních licencí",
        stat2_sub: "Klíčových CNC center",
        stat2_desc: "Mori Seiki, Hyundai a DMG 5-osé centrum",
        stat3_sub: "Výstupní kontrola jakosti",
        stat3_desc: "Kalibrované měřicí pracoviště a protokoly",
        stat4_sub: "Tepelné zpracování",
        stat4_desc: "Popouštěcí pec PP 270/65 s Ht200 přímo v provozu",
        sec_story_sub: "PŘÍBĚH ZAKLADATELE & HISTORIE SPOLEČNOSTI",
        sec_story_title: "OD ZÁVODNÍHO AUTOKROSU K <span>ŠPIČKOVÉMU CNC OBRÁBĚNÍ</span>",
        story_quote: "\"Na začátku byl sen stát se automobilovým závodníkem. V roce 1994 jsem získal mezinárodní licenci jezdce v autokrosu (divize D1600 Nová Paka). Bylo zřejmé, že bez špičkové dílny a soustruhu to nepůjde. A tak jsme v roce 1994 pořídili první manuální soustruh. Po čase první řízený a dále první frézovací centrum.\"",
        story_author_role: "Zakladatel a jednatel S.CH.W. SERVICE, s.r.o.",
        t1994_title: "Založení dílny v Hanušovicích",
        t1994_desc: "Pořízení prvního manuálního soustruhu pro stavbu závodních speciálů a postupné zahájení zakázkové výroby dílů.",
        t2006_title: "Transformace na S.CH.W. SERVICE s.r.o.",
        t2006_desc: "Formální zápis společnosti, nákup prvních moderních CNC soustruhů a expanze výrobních kapacit pro strojírenství.",
        t2013_title: "Masivní technologická stabilizace a inovace",
        t2013_desc: "Kompletní modernizace výrobních systémů, instalace víceosých center Mori Seiki a specializace na náročné nerezové materiály.",
        tnow_title: "Stabilní dodavatel pro lídry českého i evropského průmyslu",
        tnow_desc: "Desítky tisíc vyrobených přesných komponentů ročně s přenosem taveb materiálu a trvalá podpora mladých talentů v kartingu.",
        hall_caption: "Hlavní výrobní hala S.CH.W. SERVICE v Hanušovicích",
        cam_desc: "Veškerou přípravu a simulaci 3D obrábění realizujeme v profesionálním prostředí <strong>GibbsCAM</strong> s přímým generováním G-kódů pro řídicí systémy Siemens 840D a Mori Seiki M730BM.",
        sec_mach_sub: "TECHNICKÁ DOKUMENTACE STROJŮ",
        sec_mach_title: "STROJNÍ PARK <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "Pracujeme výhradně na prověřených japonských a korejských CNC strojích nejvyšší tuhosti s vnitřním chlazením vřetena a aktivním odměřováním.",
        mtab_all: "Všechny stroje (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-osá & Frézky (2)",
        mtab_hyu: "Hyundai & Ostatní (3)",
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
        stat1_sub: "Year Established",
        stat1_desc: "Founding of the workshop and racing engineering",
        stat2_sub: "Core CNC Centers",
        stat2_desc: "Mori Seiki, Hyundai and DMG 5-axis machining centers",
        stat3_sub: "Final Quality Inspection",
        stat3_desc: "Calibrated metrology laboratory and QA reports",
        stat4_sub: "In-House Heat Treatment",
        stat4_desc: "Tempering furnace PP 270/65 with Ht200 controller on site",
        sec_story_sub: "COMPANY STORY & HERITAGE",
        sec_story_title: "FROM RACING WORKSHOP TO <span>PRECISION CNC ENGINEERING</span>",
        story_quote: "\"It began with a dream to become a racing driver. In 1994 I obtained an international autocross license (D1600 division Nová Paka). It was clear that without a top workshop and lathe it wouldn't be possible. So in 1994 we acquired our first manual lathe, followed by CNC turning and milling centers.\"",
        story_author_role: "Founder & Managing Director, S.CH.W. SERVICE, s.r.o.",
        t1994_title: "Workshop Founded in Hanušovice",
        t1994_desc: "Acquisition of the first manual lathe for racing specials and start of custom component manufacturing.",
        t2006_title: "Incorporation of S.CH.W. SERVICE s.r.o.",
        t2006_desc: "Official registration, investment in modern CNC lathes and expansion of engineering production capacities.",
        t2013_title: "Major Technological Upgrade",
        t2013_desc: "Comprehensive modernization of production systems, installation of multi-axis Mori Seiki centers and stainless steel specialization.",
        tnow_title: "Trusted Supplier for European Industrial Leaders",
        tnow_desc: "Tens of thousands of precision parts produced annually with full heat melt traceability and support for young karting talents.",
        hall_caption: "Main CNC Production Hall of S.CH.W. SERVICE in Hanušovice",
        cam_desc: "All 3D toolpath preparation and simulation is performed in <strong>GibbsCAM</strong> with direct post-processing for Siemens 840D and Mori Seiki M730BM controls.",
        sec_mach_sub: "TECHNICAL MACHINE SPECIFICATIONS",
        sec_mach_title: "CNC MACHINE FLEET <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "We operate exclusively proven Japanese and Korean high-rigidity CNC machines with through-spindle coolant and active probing.",
        mtab_all: "All Machines (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-Axis & Milling (2)",
        mtab_hyu: "Hyundai & Other (3)",
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
        stat1_sub: "Gründungsjahr",
        stat1_desc: "Werkstattgründung und Start im Rennsport",
        stat2_sub: "CNC-Bearbeitungszentren",
        stat2_desc: "Mori Seiki, Hyundai und DMG 5-Achs-Zentrum",
        stat3_sub: "Endkontrolle & QS",
        stat3_desc: "Kalibrierter Messraum und Prüfprotokolle",
        stat4_sub: "Wärmebehandlung",
        stat4_desc: "Anlassofen PP 270/65 mit Ht200 direkt im Werk",
        sec_story_sub: "UNTERNEHMENSGESCHICHTE",
        sec_story_title: "VOM AUTOCROSS-BETRIEB ZUR <span>SPITZEN-CNC-ZERSPANUNG</span>",
        story_quote: "\"Am Anfang stand der Traum vom Motorsport. 1994 erhielt ich die internationale Autocross-Lizenz (Division D1600 Nová Paka). Ohne eigene Werkstatt und Drehmaschine ging es nicht. So kauften wir 1994 die erste konventionelle Drehmaschine, später CNC-Dreh- und Fräszentren.\"",
        story_author_role: "Gründer & Geschäftsführer, S.CH.W. SERVICE, s.r.o.",
        t1994_title: "Werkstattgründung in Hanušovice",
        t1994_desc: "Anschaffung der ersten Drehmaschine für Rennfahrzeuge und Beginn der Lohnfertigung.",
        t2006_title: "Gründung der S.CH.W. SERVICE s.r.o.",
        t2006_desc: "Handelsregistereintragung, Kauf moderner CNC-Drehmaschinen und Ausbau der Fertigungskapazitäten.",
        t2013_title: "Technologische Modernisierung",
        t2013_desc: "Installation mehrachsiger Mori Seiki Dreh-Fräszentren und Spezialisierung auf hochlegierte Edelstähle.",
        tnow_title: "Zuverlässiger Partner der europäischen Industrie",
        tnow_desc: "Zehntausende Präzisionsteile jährlich mit Schmelzenrückverfolgbarkeit sowie Nachwuchsförderung im Kartsport.",
        hall_caption: "Haupthalle der CNC-Fertigung S.CH.W. SERVICE in Hanušovice",
        cam_desc: "Die gesamte 3D-Programmierung und Simulation erfolgt in <strong>GibbsCAM</strong> für Siemens 840D und Mori Seiki M730BM Steuerungen.",
        sec_mach_sub: "TECHNISCHE DOKUMENTATION",
        sec_mach_title: "MASCHINENPARK <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "Wir arbeiten ausschließlich auf hochsteifen japanischen und koreanischen CNC-Maschinen mit Innenkühlung und Messtastern.",
        mtab_all: "Alle Maschinen (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-Achs & Fräsen (2)",
        mtab_hyu: "Hyundai & Sonstige (3)",
        sec_contact_sub: "KONTAKTIEREN SIE UNS",
        sec_contact_title: "CNC-FERTIGUNGSANFRAGE & KONTAKT",
        form_submit: "Anfrage an Geschäftsleitung senden"
    }
};

function setLanguage(lang) {
    if (lang === "cz") lang = "cs";
    if (!translations[lang]) return;
    try {
        localStorage.setItem("selected_lang_schw", lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
}
window.setLanguage = setLanguage;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    try {
        const saved = localStorage.getItem("selected_lang_schw");
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    } catch (e) {}
});
