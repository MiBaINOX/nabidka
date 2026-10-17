const I18N_DATA = {"cs": {"top_badge": "Certifikovaná bankovní a pokladní technika od roku 1990", "top_service_center": "Centrální servisní dispečink ČR", "nav_about": "O nás & Historie", "nav_false_hunter": "Systém FALSE HUNTER", "nav_catalog": "Katalog zařízení", "nav_service": "Servisní síť", "nav_contact": "Poptávka & Kontakt", "hero_tag": "Výhradní zastoupení, vývoj a autorizovaný servis od roku 1990", "hero_title": "Špičková bankovní technika a patentovaný systém FALSE HUNTER", "hero_desc": "Dodáváme a servisujeme certifikované počítačky bankovek, vysokorychlostní třídičky mincí s CCD SELEX a detektory padělků testované v Evropské centrální bance a České národní bance. Více než 7 500 instalací v ČR a SR.", "hero_cta": "Poptat zařízení", "hero_catalog_cta": "Katalog zařízení", "filter_all": "Všechna zařízení (19)", "filter_banknotes": "Počítačky bankovek (7)", "filter_coins": "Třídičky a počítačky mincí (5)", "filter_detectors": "Detektory & doplňky (7)", "about_tag": "Tradice a mezinárodní uznání od roku 1990", "about_title": "O společnosti K.o.T.a.S, spol. s r.o.", "fh_tag": "Patentovaná technologie", "fh_title": "Revoluční systém verifikace pravosti FALSE HUNTER", "catalog_tag": "Sortiment produktů", "catalog_title": "Kompletní katalog bankovní a pokladní techniky", "catalog_desc": "Kliknutím na fotografii otevřete detailní náhled zařízení. Všechny modely dodáváme včetně záručního a pozáručního servisu po celé ČR.", "service_tag": "Zázemí a podpora", "service_title": "Vlastní servisní síť a dispečink v ČR", "contact_title": "Poptávka techniky a objednávka servisu", "contact_desc": "Vyberte konkrétní zařízení z katalogu nebo popište svůj požadavek. Náš technik vás obratem kontaktuje.", "mapy_link_kotas": "Otevřít na Mapy.cz →"}, "en": {"top_badge": "Certified Banking & Cash Handling Equipment Since 1990", "top_service_center": "Central Dispatch & Service Network CZ", "nav_about": "About & Heritage", "nav_false_hunter": "FALSE HUNTER System", "nav_catalog": "Product Catalog", "nav_service": "Service Network", "nav_contact": "Inquiry & Contact", "hero_tag": "Exclusive Distribution, R&D & Authorized Service Since 1990", "hero_title": "Advanced Banking Technology & Patented FALSE HUNTER System", "hero_desc": "Supplying and servicing ECB & CNB certified banknote counters, high-speed coin sorters with CCD SELEX, and multi-spectrum counterfeit detectors. Over 7,500 machines installed across Central Europe.", "hero_cta": "Request Quote", "hero_catalog_cta": "Product Catalog", "filter_all": "All Machines (19)", "filter_banknotes": "Banknote Counters (7)", "filter_coins": "Coin Sorters & Counters (5)", "filter_detectors": "Detectors & Accessories (7)", "about_tag": "Heritage & Global Recognition Since 1990", "about_title": "About K.o.T.a.S, spol. s r.o.", "fh_tag": "Patented Innovation", "fh_title": "FALSE HUNTER Infrared Verification System", "catalog_tag": "Hardware Portfolio", "catalog_title": "Comprehensive Banking & Cash Handling Equipment", "catalog_desc": "Click any machine photo to inspect in full-resolution Lightbox. All models supplied with authorized lifetime maintenance.", "service_tag": "Technical Infrastructure", "service_title": "Dedicated Service Dispatch & 5 Support Centers in CZ", "contact_title": "Equipment Inquiry & Maintenance Request", "contact_desc": "Select a specific model or describe your operational requirements. Our technical specialists will respond promptly.", "mapy_link_kotas": "Open on Mapy.cz →"}, "de": {"top_badge": "Zertifizierte Bank- und Bargeldtechnik seit 1990", "top_service_center": "Zentraler Kundendienst & Servicenetz CZ", "nav_about": "Über uns & Historie", "nav_false_hunter": "FALSE HUNTER System", "nav_catalog": "Gerätekatalog", "nav_service": "Kundendienst", "nav_contact": "Anfrage & Kontakt", "hero_tag": "Exklusivvertretung, Entwicklung & autorisierter Service seit 1990", "hero_title": "Erstklassige Banktechnik & patentiertes FALSE HUNTER System", "hero_desc": "Lieferung und Wartung von EZB-geprüften Banknotenzählern, Hochleistungs-Münzsortierern mit CCD SELEX und Falschgelddetektoren. Mehr als 7.500 installierte Systeme in der Tschechischen und Slowakischen Republik.", "hero_cta": "Gerät anfragen", "hero_catalog_cta": "Gerätekatalog", "filter_all": "Alle Geräte (19)", "filter_banknotes": "Banknotenzähler (7)", "filter_coins": "Münzzähler & Sortierer (5)", "filter_detectors": "Detektoren & Zubehör (7)", "about_tag": "Tradition & internationale Anerkennung seit 1990", "about_title": "Über K.o.T.a.S, spol. s r.o.", "fh_tag": "Patentierte Innovation", "fh_title": "Revolutionssystem zur Falschgelderkennung FALSE HUNTER", "catalog_tag": "Produktpalette", "catalog_title": "Kompletter Katalog für Bank- und Kassentechnik", "catalog_desc": "Klicken Sie auf ein Bild für die Vollbildansicht. Alle Geräte inklusive autorisiertem Kundendienst und Garantie.", "service_tag": "Infrastruktur & Support", "service_title": "Eigenes Servicenetz mit 5 Stützpunkten in CZ", "contact_title": "Geräteanfrage & Serviceauftrag", "contact_desc": "Wählen Sie ein gewünschtes Modell oder schildern Sie Ihren Bedarf. Unser Techniker meldet sich umgehend.", "mapy_link_kotas": "Auf Mapy.cz öffnen →"}};
let currentLang = 'cs';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    let countersStarted = false;
    const statSection = document.getElementById('stats');
    if (statSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    runCounters();
                }
            });
        }, { threshold: 0.2 });
        counterObserver.observe(statSection);
    }

    function runCounters() {
        if (window.matchMedia(\'(prefers-reduced-motion: reduce)\').matches) return;
        document.querySelectorAll('.stat-counter').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 1600;
            const startTime = performance.now();

            function update(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);
                counter.textContent = current.toLocaleString('cs-CZ');
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString('cs-CZ');
                }
            }
            requestAnimationFrame(update);
        });
    }

    const filterBtns = document.querySelectorAll('.cat-filter-btn');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-filter');
            productCards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.btn-select-model').forEach(btn => {
        btn.addEventListener('click', () => {
            const model = btn.getAttribute('data-model-name');
            const selectEl = document.getElementById('formService');
            if (selectEl) {
                for (let i = 0; i < selectEl.options.length; i++) {
                    if (selectEl.options[i].value === model) {
                        selectEl.selectedIndex = i;
                        break;
                    }
                }
            }
            const contactSection = document.getElementById('kontakt');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');
    const galleryItems = Array.from(document.querySelectorAll('[data-gallery-src]'));
    let currentImgIdx = 0;

    function openLb(idx) {
        if (!galleryItems.length || !lightbox) return;
        currentImgIdx = (idx + galleryItems.length) % galleryItems.length;
        const src = galleryItems[currentImgIdx].getAttribute('data-gallery-src');
        lbImg.src = src;
        lightbox.classList.add('open');
    }

    galleryItems.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.btn-select-model')) return;
            openLb(idx);
        });
    });

    if (lbClose) lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
    if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); openLb(currentImgIdx - 1); });
    if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); openLb(currentImgIdx + 1); });
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
    }
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') lightbox.classList.remove('open');
        if (e.key === 'ArrowLeft') openLb(currentImgIdx - 1);
        if (e.key === 'ArrowRight') openLb(currentImgIdx + 1);
    });

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        if (!I18N_DATA[lang]) return;
        currentLang = lang;
        langBtns.forEach(b => {
            if (b.getAttribute('data-lang') === lang) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
        const data = I18N_DATA[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) el.textContent = data[key];
        });
        document.querySelectorAll('[data-stat-cs]').forEach(el => {
            const trans = el.getAttribute('data-stat-' + lang);
            if (trans) el.textContent = trans;
        });
    }

    const form = document.getElementById('inquiryForm');
    const successBox = document.getElementById('formSuccess');
    if (form && successBox) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const recipient = form.getAttribute('data-recipient') || '';
            const company = form.getAttribute('data-company') || '';
            const name = (document.getElementById('formName')?.value || '').trim();
            const phone = (document.getElementById('formPhone')?.value || '').trim();
            const email = (document.getElementById('formEmail')?.value || '').trim();
            const service = (document.getElementById('formService')?.value || '').trim();
            const msg = (document.getElementById('formMsg')?.value || '').trim();

            const subject = encodeURIComponent(`Poptávka z webu (${service}) – ${name}`);
            const body = encodeURIComponent(
                `Dobrý den,\n\nzasílám poptávku z webu (${company}):\n\n• Jméno / Firma: ${name}\n• Telefon: ${phone}\n• E-mail: ${email}\n• Model / Služba: ${service}\n\nZpráva:\n${msg}\n`
            );
            const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

            if (window.location.protocol.startsWith('http')) {
                try {
                    const formData = new FormData(form);
                    const resp = await fetch('odeslat-poptavku.php', {
                        method: 'POST',
                        body: formData
                    });
                    if (resp.ok) {
                        const resJson = await resp.json();
                        if (resJson && resJson.success) {
                            successBox.innerHTML = `✓ Děkujeme! Vaše poptávka byla úspěšně odeslána na <strong>${recipient}</strong>.`;
                            successBox.style.display = 'block';
                            form.reset();
                            return;
                        }
                    }
                } catch (_) {}
            }

            successBox.innerHTML = `
                <div style="margin-bottom:8px;">✓ <strong>Poptávka na model ${service} je připravena k odeslání</strong>.</div>
                <a href="${mailtoUrl}" style="display:inline-block; background:#166534; color:#FFF; padding:8px 14px; border-radius:6px; font-weight:700; font-size:0.85rem; text-decoration:none;">
                    ✉️ Odeslat přes e-mail na ${recipient} →
                </a>
            `;
            successBox.style.display = 'block';
            window.location.href = mailtoUrl;
            form.reset();
        });
    }

    const kotasMapEl = document.getElementById('kotasMap');
    if (kotasMapEl && typeof L !== 'undefined') {
        const map = L.map('kotasMap', { scrollWheelZoom: false }).setView([49.67696, 18.64859], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap | <a href="https://mapy.cz/zakladni?q=M%C3%ADru%2026%2C%20739%2061%20T%C5%99inec" target="_blank" rel="noopener">Mapy.cz</a>'
        }).addTo(map);

        const redPin = L.divIcon({
            className: 'custom-pin-marker',
            html: '<div style="width:36px; height:48px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.35));"><svg width="36" height="48" viewBox="0 0 36 48" fill="none"><path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z" fill="#E11D48"/><circle cx="18" cy="18" r="7" fill="#FFFFFF"/><circle cx="18" cy="18" r="3.5" fill="#E11D48"/></svg></div>',
            iconSize: [36, 48],
            iconAnchor: [18, 48],
            popupAnchor: [0, -44]
        });
        const marker = L.marker([49.67696, 18.64859], { icon: redPin }).addTo(map);
        marker.bindPopup('<div style="font-family:sans-serif; font-size:13px; line-height:1.4;"><strong>K.o.T.a.S, spol. s r.o.</strong><br>Míru 26, 739 61 Třinec<br><a href="https://mapy.cz/zakladni?q=M%C3%ADru%2026%2C%20739%2061%20T%C5%99inec" target="_blank" rel="noopener" style="color:#2563EB; font-weight:700; text-decoration:underline; display:inline-block; margin-top:4px;">Navigovat na Mapy.cz ↗</a></div>').openPopup();
    }
});