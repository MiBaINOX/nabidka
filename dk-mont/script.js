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
