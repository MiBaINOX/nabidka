document.addEventListener('DOMContentLoaded', () => {
    const slug = 'dk-mont';
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'nabidka') {
        if (!sessionStorage.getItem('nabidka_opened_' + slug)) {
            sessionStorage.setItem('nabidka_opened_' + slug, '1');
            const logEntry = {
                slug: slug,
                opened_at: new Date().toISOString(),
                user_agent: navigator.userAgent
            };
            try {
                localStorage.setItem('nabidka_open_' + slug, JSON.stringify(logEntry));
            } catch (e) {}
            if (typeof window.NABIDKA_PING_URL === 'string' && window.NABIDKA_PING_URL) {
                const pingUrl = window.NABIDKA_PING_URL + '?slug=' + encodeURIComponent(slug) + '&t=' + Date.now();
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(pingUrl);
                } else {
                    const img = new Image();
                    img.src = pingUrl;
                }
            }
        }
    }

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));

    const counters = document.querySelectorAll('.counter');
    let countersStarted = false;
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    const duration = 1600;
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
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
    }, { threshold: 0.25 });
    if (counters.length > 0) {
        counterObserver.observe(counters[0].closest('.hero-grid'));
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const catalogCards = document.querySelectorAll('.catalog-item-card');
    const searchInput = document.getElementById('catalogSearch');
    const searchCounter = document.getElementById('searchCounter');

    let currentCategory = 'all';
    let currentQuery = '';

    function filterCatalog() {
        let count = 0;
        catalogCards.forEach(card => {
            const cat = card.getAttribute('data-category');
            const name = card.getAttribute('data-name').toLowerCase();
            const code = card.getAttribute('data-code').toLowerCase();
            const matchesCat = (currentCategory === 'all' || cat === currentCategory);
            const matchesQuery = (!currentQuery || name.includes(currentQuery) || code.includes(currentQuery));
            if (matchesCat && matchesQuery) {
                card.style.display = 'flex';
                count++;
            } else {
                card.style.display = 'none';
            }
        });
        if (searchCounter) {
            searchCounter.textContent = count + ' položek';
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterCatalog();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentQuery = e.target.value.trim().toLowerCase();
            filterCatalog();
        });
    }

    const productsData = [
        {
            title: 'Přímý závěs pro CD profily',
            code: 'DK-ZPV-060',
            img: 'assets/products/prod_01.jpg',
            desc: 'Nejpoužívanější prvek pro přímé kotvení nosného roštu k masivnímu stropu nebo dřevěným konstrukcím. K dispozici v délce 60 mm, 120 mm a 200 mm s garantovanou nosností.',
            params: ['Materiál: Pozinkovaný ocelový plech DX51D', 'Třída reakce na oheň: A1', 'Tloušťka plechu: 0.8 mm / 1.0 mm', 'Nosnostní třída: 0.40 kN', 'Balení: 100 ks v kartonu']
        },
        {
            title: 'Akustický přímý závěs s tlumicí vložkou',
            code: 'DK-ZPA-002',
            img: 'assets/products/prod_02.jpg',
            desc: 'Speciální protivibrační a akustický závěs s integrovanou elastomerovou vložkou. Výrazně eliminuje přenos kročejového a strukturálního hluku do podhledu.',
            params: ['Akustický útlum: až 14 dB', 'Povrch: Pozink Z140', 'Použití: Zvukově izolační stropy bytů i kin', 'Balení: 50 ks v kartonu']
        },
        {
            title: 'Krokvový závěs zesílený pro podkroví',
            code: 'DK-KZK-003',
            img: 'assets/products/prod_03.jpg',
            desc: 'Konstrukční závěs s bočními prolisy a zesíleným tělem pro kotvení do boků dřevěných krokví v šikmých podhledech obytných podkroví.',
            params: ['Délky: 170 mm a 270 mm', 'Nosnost: 0.40 kN', 'Zakončení: Zkosené s montážními otvory', 'Balení: 100 ks v kartonu']
        },
        {
            title: 'Rychlozávěs pérový čtyřbodový',
            code: 'DK-RZP-004',
            img: 'assets/products/prod_04.jpg',
            desc: 'Vysoce přesný pérový závěs pro bleskové zaklapnutí do CD profilů. Pružinová ocel zaručuje pevné držení na tahovém drátu bez prokluzování.',
            params: ['Typ: Čtyřbodový pérový závěs', 'Ocelové pero: Temperovaná pružinová ocel', 'Norma: ČSN EN 13964', 'Balení: 100 ks']
        },
        {
            title: 'Závěsný drát s okem tahový',
            code: 'DK-ZDO-005',
            img: 'assets/products/prod_05.jpg',
            desc: 'Tuhý tahový drát o průměru 4.0 mm s tvarovaným montážním okem pro stropní ocelové trny DN6 nebo vruty do dřeva.',
            params: ['Průměr drátu: Ø 4.0 mm', 'Délky: 125, 250, 375, 500, 750, 1000 až 2000 mm', 'Povrchová úprava: Žárový pozink', 'Balení: Svazek 100 ks']
        },
        {
            title: 'Křížová spojka CD profilů dvoudílná',
            code: 'DK-KSC-006',
            img: 'assets/products/prod_06.jpg',
            desc: 'Propojuje křížící se základní a montážní CD profily ve dvou výškových úrovních. Zajišťuje absolutní pravoúhlost rastru podhledu.',
            params: ['Tloušťka materiálu: 0.9 mm', 'Profil: CD 60/27', 'Zámek: Dvojité samosvorné jazýčky', 'Balení: 100 ks v kartonu']
        },
        {
            title: 'Úrovňová spojka CD profilů',
            code: 'DK-USC-007',
            img: 'assets/products/prod_07.jpg',
            desc: 'Umožňuje křížové spojení profilů v jediné rovině. Šetří světlou výšku místnosti a usnadňuje aplikaci tepelné izolace.',
            params: ['Konstrukce: Jednoúrovňový rošt', 'Materiál: Pozink ocel DX51D', 'Balení: 100 ks v kartonu']
        },
        {
            title: 'Rovná podélná spojka CD profilu',
            code: 'DK-RPS-008',
            img: 'assets/products/prod_08.jpg',
            desc: 'Axiální spojovací prvek se středovým dorazem pro bezpečné a pevné prodlužování CD 60 profilů bez zkroucení profilu v ose.',
            params: ['Délka: 110 mm', 'Tloušťka: 0.6 mm lisovaný plech', 'Aretace: Středový dorazový prolis', 'Balení: 100 ks']
        },
        {
            title: 'Nonius vrchní díl závěsu',
            code: 'DK-NVZ-009',
            img: 'assets/products/prod_09.jpg',
            desc: 'Extrémně pevný závěsný systém pro protipožární a těžké podhledy. Tuhé tělo zamezuje nadzvedávání stropu průvanem.',
            params: ['Délky: 200 až 1000 mm', 'Třída nosnosti: 0.40 kN', 'Děrování: Přesný krok pro závlačku', 'Balení: 100 ks']
        },
        {
            title: 'Nonius spodní díl pro CD profil',
            code: 'DK-NSD-010',
            img: 'assets/products/prod_10.jpg',
            desc: 'Spodní adaptér systému Nonius určený k zacvaknutí do CD 60 profilu. Zajišťuje se dvěma protilehlými pojistnými závlačkami.',
            params: ['Uchycení: Samosvorné do CD 60', 'Zabezpečení: 2x závlačka Nonius', 'Balení: 100 ks']
        },
        {
            title: 'Pojistná závlačka Nonius',
            code: 'DK-PZN-011',
            img: 'assets/products/prod_11.jpg',
            desc: 'Pružný bezpečnostní čep z ušlechtilé pružinové oceli. Nezbytný prvek pro bezpečné uzamčení spojení dílů Nonius.',
            params: ['Materiál: Temperovaná pružinová ocel', 'Povrch: Pozinkováno', 'Balení: 100 ks']
        },
        {
            title: 'Hliníkový ochranný roh děrovaný',
            code: 'DK-HOR-012',
            img: 'assets/products/prod_12.jpg',
            desc: 'Ochranný profil s přesnou perforací pro dokonalé provázání se sádrovým tmelem. Chrání exponované rohy stěn a nik.',
            params: ['Materiál: Hliník AL99.5', 'Délky: 2.0 m, 2.5 m a 3.0 m', 'Úhel: 90 stupňů', 'Balení: 50 ks']
        }
    ];

    const modal = document.getElementById('productModal');
    const modalClose = document.getElementById('modalClose');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    const modalDesc = document.getElementById('modalDesc');
    const modalParams = document.getElementById('modalParams');
    const detailButtons = document.querySelectorAll('.btn-detail');

    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-prod'), 10);
            const p = productsData[idx];
            if (!p) return;
            modalImg.src = p.img;
            modalImg.alt = p.title;
            modalTitle.textContent = p.title;
            modalCode.textContent = 'Katalogové označení: ' + p.code;
            modalDesc.textContent = p.desc;
            modalParams.innerHTML = '';
            p.params.forEach(param => {
                const row = document.createElement('div');
                row.textContent = '• ' + param;
                modalParams.appendChild(row);
            });
            modal.classList.add('active');
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', () => modal.classList.remove('active'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
        });
        document.querySelectorAll('.drawer-link, .drawer-btn').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
            });
        });
    }

    const copyBtn = document.getElementById('copyIcoBtn');
    const toast = document.getElementById('toastMsg');
    if (copyBtn && toast) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('26867133').then(() => {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2500);
            });
        });
    }

    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('frmName').value.trim();
            const phone = document.getElementById('frmPhone').value.trim();
            const email = document.getElementById('frmEmail').value.trim();
            const cat = document.getElementById('frmCategory').value;
            const msg = document.getElementById('frmMsg').value.trim();

            const subject = 'Poptávka sortimentu PROFIFIX - ' + name;
            const body = 'Dobrý den,\n\nzadávám poptávku na sortiment společnosti DK mont a.s.:\n\n' +
                'Jméno / Firma: ' + name + '\n' +
                'Telefon: ' + phone + '\n' +
                'E-mail: ' + email + '\n' +
                'Kategorie produktů: ' + cat + '\n\n' +
                'Specifikace poptávky:\n' + msg + '\n\n' +
                'S pozdravem,\n' + name;

            const mailtoUrl = 'mailto:obchod@dkmont.cz?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.location.href = mailtoUrl;
        });
    }

    const mapEl = document.getElementById('map');
    if (mapEl && typeof L !== 'undefined') {
        const mohelniceCoords = [49.7744, 16.9201];
        const map = L.map('map', { scrollWheelZoom: false }).setView(mohelniceCoords, 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap přispěvatelé'
        }).addTo(map);

        const customMarker = L.circleMarker(mohelniceCoords, {
            radius: 9,
            fillColor: '#0F4C81',
            color: '#FFFFFF',
            weight: 3,
            opacity: 1,
            fillOpacity: 1
        }).addTo(map);

        customMarker.bindPopup('<strong>DK mont a.s.</strong><br>Nádražní 531/18, 789 85 Mohelnice<br>Výrobní a logistický areál').openPopup();
    }
});


const translations = {
    cs: {
        nav_about: "O společnosti",
        nav_production: "Přednosti výroby",
        nav_catalog: "Katalog PROFIFIX®",
        nav_cert: "Certifikace",
        nav_career: "Kariéra",
        nav_contact: "Kontakt",
        nav_cta: "Poptat výrobu",
        hero_tradition: "TRADICE OD ROKU 1994",
        hero_title: "Přední výrobce kovových dílců pro sádrokartonové systémy",
        hero_desc: "Společnost DK mont a.s. je největším výrobcem kovového montážního příslušenství k sádrokartonovým konstrukcím v České republice i ve Střední Evropě. Náš certifikovaný systém PROFIFIX® je synonymem špičkové přesnosti, stability a férového partnerství ve více než 15 zemích Evropy.",
        hero_btn_catalog: "Prozkoumat katalog produktů",
        hero_btn_contact: "Kontaktovat obchodní tým",
        hero_feat1: "Vlastní nástrojárna a vysokorychlostní lisy",
        hero_feat2: "Certifikovaná ocel DX51D s garantovaným zinkováním",
        hero_feat3: "Expediční sklad s garancí dodávek pro velkoobchody",
        metric1_title: "TOP 35% hodnocení EcoVadis",
        metric2_title: "Let zkušeností v oboru",
        metric3_title: "Kvalifikovaných zaměstnanců",
        metric4_title: "Certifikace ISO",
        sec_excellence_sub: "VÝROBNÍ EXCELENCE",
        sec_excellence_title: "Technologické zázemí a filozofie systému PROFIFIX®",
        sec_catalog_sub: "KOMPLETNÍ SORTIMENT",
        sec_catalog_title: "Certifikovaný systém PROFIFIX® pro suchou výstavbu",
        sec_certs_sub: "DŮVĚRYHODNOST & NORMY",
        sec_certs_title: "Certifikace kvality a technické protokoly",
        sec_contact_sub: "SPOJTE SE S NÁMI",
        sec_contact_title: "Obchodní oddělení a technická podpora",
        form_title: "Poptávka velkoobchodních dodávek a výroby",
        form_submit: "Odeslat nezávaznou poptávku"
    },
    en: {
        nav_about: "About Us",
        nav_production: "Manufacturing",
        nav_catalog: "PROFIFIX® Catalog",
        nav_cert: "Certifications",
        nav_career: "Careers",
        nav_contact: "Contact",
        nav_cta: "Inquire Production",
        hero_tradition: "TRADITION SINCE 1994",
        hero_title: "Leading European Manufacturer of Drywall System Accessories",
        hero_desc: "DK mont a.s. is the largest manufacturer of metal assembly accessories for drywall systems in Central Europe. Our certified PROFIFIX® system is synonymous with top precision, structural stability and reliable partnership in over 15 European countries.",
        hero_btn_catalog: "Explore Product Catalog",
        hero_btn_contact: "Contact Sales Team",
        hero_feat1: "In-house toolshop and high-speed stamping presses",
        hero_feat2: "Certified DX51D steel with guaranteed zinc coating",
        hero_feat3: "Central distribution warehouse with guaranteed wholesale delivery",
        metric1_title: "TOP 35% EcoVadis Rating",
        metric2_title: "Years of Industry Experience",
        metric3_title: "Skilled Specialists",
        metric4_title: "ISO Certifications",
        sec_excellence_sub: "MANUFACTURING EXCELLENCE",
        sec_excellence_title: "Technological Infrastructure and PROFIFIX® Philosophy",
        sec_catalog_sub: "COMPLETE PORTFOLIO",
        sec_catalog_title: "Certified PROFIFIX® Drywall Construction System",
        sec_certs_sub: "TRUST & STANDARDS",
        sec_certs_title: "Quality Certifications and Technical Test Reports",
        sec_contact_sub: "GET IN TOUCH",
        sec_contact_title: "Sales Department and Technical Support",
        form_title: "Wholesale Delivery and Production Inquiry",
        form_submit: "Send Non-Binding Inquiry"
    },
    de: {
        nav_about: "Über uns",
        nav_production: "Fertigung",
        nav_catalog: "PROFIFIX® Katalog",
        nav_cert: "Zertifikate",
        nav_career: "Karriere",
        nav_contact: "Kontakt",
        nav_cta: "Anfrage senden",
        hero_tradition: "TRADITION SEIT 1994",
        hero_title: "Führender Hersteller von Metallzubehör für Trockenbausysteme",
        hero_desc: "DK mont a.s. ist der führende Hersteller von Metallzubehör für Trockenbaukonstruktionen in Mitteleuropa. Unser zertifiziertes PROFIFIX®-System steht für höchste Präzision, Stabilität und verlässliche Partnerschaften in über 15 europäischen Ländern.",
        hero_btn_catalog: "Produktkatalog erkunden",
        hero_btn_contact: "Vertriebsteam kontaktieren",
        hero_feat1: "Eigener Werkzeugbau und Hochgeschwindigkeitsstanzanlagen",
        hero_feat2: "Zertifizierter DX51D-Stahl mit garantierter Verzinkung",
        hero_feat3: "Auslieferungslager mit garantierter Belieferung für den Großhandel",
        metric1_title: "TOP 35% EcoVadis-Bewertung",
        metric2_title: "Jahre Branchenerfahrung",
        metric3_title: "Qualifizierte Mitarbeiter",
        metric4_title: "ISO-Zertifizierungen",
        sec_excellence_sub: "FERTIGUNGSEXZELLENZ",
        sec_excellence_title: "Technologische Basis und PROFIFIX®-Philosophie",
        sec_catalog_sub: "KOMPLETTES SORTIMENT",
        sec_catalog_title: "Zertifiziertes PROFIFIX®-System für den Trockenbau",
        sec_certs_sub: "VERTRAUEN & NORMEN",
        sec_certs_title: "Qualitätszertifikate und Prüfberichte",
        sec_contact_sub: "KONTAKTIEREN SIE UNS",
        sec_contact_title: "Vertrieb und technische Beratung",
        form_title: "Anfrage für Großhandel und Serienfertigung",
        form_submit: "Unverbindliche Anfrage senden"
    },
    pl: {
        nav_about: "O firmie",
        nav_production: "Zalety produkcji",
        nav_catalog: "Katalog PROFIFIX®",
        nav_cert: "Certyfikaty",
        nav_career: "Kariera",
        nav_contact: "Kontakt",
        nav_cta: "Zapytanie ofertowe",
        hero_tradition: "TRADYCJA OD 1994 ROKU",
        hero_title: "Wiodący producent elementów metalowych do systemów gipsowo-kartonowych",
        hero_desc: "DK mont a.s. to największy producent metalowych akcesoriów montażowych do konstrukcji gipsowo-kartonowych w Europie Środkowej. Nasz certyfikowany system PROFIFIX® jest synonimem precyzji, trwałości i stabilnego partnerstwa w ponad 15 krajach Europy.",
        hero_btn_catalog: "Przeglądaj katalog produktów",
        hero_btn_contact: "Skontaktuj się z działem handlowym",
        hero_feat1: "Własna narzędziownia i szybkobieżne linie wykrawające",
        hero_feat2: "Certyfikowana stal DX51D z gwarantowaną powłoką cynkową",
        hero_feat3: "Magazyn centralny z gwarancją terminowych dostaw hurtowych",
        metric1_title: "TOP 35% oceny EcoVadis",
        metric2_title: "Lat doświadczenia w branży",
        metric3_title: "Wykwalifikowanych pracowników",
        metric4_title: "Certyfikaty ISO",
        sec_excellence_sub: "DOSKONAŁOŚĆ PRODUKCYJNA",
        sec_excellence_title: "Zaplecze technologiczne i filozofia systemu PROFIFIX®",
        sec_catalog_sub: "KOMPLETNY ASORTYMENT",
        sec_catalog_title: "Certyfikowany system PROFIFIX® do suchej zabudowy",
        sec_certs_sub: "ZAUFANIE I NORMY",
        sec_certs_title: "Certyfikaty jakości i raporty techniczne",
        sec_contact_sub: "SKONTAKTUJ SIĘ Z NAMI",
        sec_contact_title: "Dział handlowy i wsparcie techniczne",
        form_title: "Zapytanie o dostawy hurtowe i produkcję",
        form_submit: "Wyślij bezpłatne zapytanie"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;
    try {
        localStorage.setItem("selected_lang_dkmont", lang);
    } catch (e) {}

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        const saved = localStorage.getItem("selected_lang_dkmont");
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    } catch (e) {}
});
