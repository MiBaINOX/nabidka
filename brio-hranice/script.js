document.addEventListener('DOMContentLoaded', () => {
    const slug = 'brio-hranice';
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
                counterObserver.unobserve(entry.target);
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    counter.textContent = '0';
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
        counterObserver.observe(counters[0].closest('.counters-grid'));
    }

    const productsDatabase = [
        {
            id: 0,
            title: 'Stolice vodopropustnosti betonu AVH-PLC',
            cat: 'beton',
            catName: 'Zkoušky betonu',
            norm: 'ČSN EN 12390-8 • DIN 1048',
            origin: 'BRIO Hranice (Vlastní vývoj)',
            img: 'assets/images/brio_59_AVH_-_PLC_12-150_vodopropustnost.webp',
            desc: 'Plně automatizované zkušební zařízení pro zkoušku hloubky průsaku tlakové vody do ztvrdlého betonu. Řízeno průmyslovým PLC Siemens s barevným dotykovým rozhraním.',
            specs: ['Zkušební tělesa: krychle 150×150 mm, 200×200 mm nebo válce', 'Pracovní přetlak: 0.5 MPa (plynule regulovatelný do 1.5 MPa)', 'Kapacita: 6 nebo 12 nezávislých zkušebních komor', 'Přívod stlačeného vzduchu: 0.6 až 1.0 MPa', 'Záznam průběhu zkoušky do vnitřní paměti PLC a USB export']
        },
        {
            id: 1,
            title: 'Nucená laboratorní míchačka HMZ 60 F',
            cat: 'beton',
            catName: 'Zkoušky betonu',
            norm: 'ČSN EN 12390-2 • TP 170',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_60_HMZ_60_f_m_cha_ka.webp',
            desc: 'Vysoce výkonná míchačka s nuceným planetovým oběhem míchacích lopatek pro přípravu zkušebních záměsí obyčejných, vysokohodnotných i žáruvzdorných betonů.',
            specs: ['Objem míchací nádoby: 60 litrů (užitečná vsázka 45 l)', 'Výkon motoru: 2.2 kW s tepelnou ochranou', 'Míchací lopatky: Otěruvzdorná ocel s možností seřízení', 'Vyprazdňování: Spodní segmentová výpusť s bezpečnostním spínačem']
        },
        {
            id: 2,
            title: 'Laboratorní vibrační stůl VFS',
            cat: 'beton',
            catName: 'Zkoušky betonu',
            norm: 'ČSN EN 12390-2 • ISO 1920-3',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_61_vibra_n__st__VFS.webp',
            desc: 'Stabilní vibrační zařízení pro spolehlivé a reprodukovatelné zhutňování vzorků betonu v ocelových i plastových formách.',
            specs: ['Rozměry upínací desky: 1000 × 600 mm', 'Kmitočet vibrací: 50 Hz (3000 kmitů/min)', 'Amplituda: Nastavitelná závažími příložného vibrátoru', 'Maximální zatížení stolu: až 180 kg']
        },
        {
            id: 3,
            title: 'Bruska betonových těles PSM-3-340',
            cat: 'beton',
            catName: 'Zkoušky betonu',
            norm: 'ČSN EN 12390-3 • ČSN EN 12504-1',
            origin: 'BRIO Hranice / COMEC',
            img: 'assets/images/brio_54_PSM-3-340.webp',
            desc: 'Přesná strojní bruska pro úpravu čelních tlačných ploch betonových vzorků a jádrových vývrtů před zkouškou pevnosti v tlaku.',
            specs: ['Rozsah upínání: Válce Ø 50–160 mm, krychle 100 a 150 mm', 'Chlazení: Uzavřený okruh chladicí kapaliny s čerpadlem', 'Přesnost rovinnosti: lepší než 0.05 mm dle normy', 'Brusný nástroj: Diamantový segmentový kotouč Ø 340 mm']
        },
        {
            id: 4,
            title: 'Nerezová lázeň pro vodní uložení vzorků',
            cat: 'beton',
            catName: 'Zkoušky betonu',
            norm: 'ČSN EN 12390-2 • ASTM C192',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_53_Nerezov__vodn__ulo_en__bez_regulace_2_-_kopie.webp',
            desc: 'Tepelně izolovaná nerezová vana s přesnou mikroprocesorovou regulací teploty a nucenou cirkulací pro zrání zkušebních těles ve vodní lázni.',
            specs: ['Konstrukce: Dvojitý plášť z nerezové oceli AISI 304 s izolací', 'Regulace teploty: 20.0 °C ± 2.0 °C (dle ČSN EN)', 'Vnitřní rošty: Odnímatelné nerezové police pro ukládání vzorků', 'Ochrana: Hladinový spínač proti chodu topení na sucho']
        },
        {
            id: 5,
            title: 'Automatický Vicatův přístroj',
            cat: 'cement',
            catName: 'Cementy a malty',
            norm: 'ČSN EN 196-3 • ASTM C191',
            origin: 'TESTING Bluhm & Feuerherdt / BRIO',
            img: 'assets/images/brio_62_Automat_Vicat.webp',
            desc: 'Plně automatický penetrometr pro měření doby tuhnutí cementové kaše a malt. Automaticky spouští normovou jehlu a zaznamenává hloubku vniknutí.',
            specs: ['Zkušební jehla: Kalená ocel Ø 1.13 mm ± 0.05 mm', 'Záznam: Integrovaná paměť a přenos do PC přes rozhraní USB', 'Testovací cyklus: Programovatelný interval vpichů', 'Příslušenství: Zkušební kónické kroužky a skleněné podložky']
        },
        {
            id: 6,
            title: 'Trojdílná forma na trámečky 40×40×160 mm',
            cat: 'cement',
            catName: 'Cementy a malty',
            norm: 'ČSN EN 196-1 • ISO 679',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_65_P_esn__forma_na_tr_me_ky_40x40x160.webp',
            desc: 'Přesná zkušební forma pro zhotovení 3 zkušebních trámečků z cementové malty. Vyniká vysokou rozměrovou stálostí a tvrdostí čel.',
            specs: ['Rozměr komor: 40 × 40 × 160 mm s tolerancí dle EN 196-1', 'Materiál: Speciální zušlechtěná ocel odolná otěru', 'Tvrdost vnitřních ploch: min. 55 HRC', 'Hmotnost formy: 8.5 kg']
        },
        {
            id: 7,
            title: 'Automatický Haegermannův poklepový stolek',
            cat: 'cement',
            catName: 'Cementy a malty',
            norm: 'ČSN EN 1015-3 • DIN 18555',
            origin: 'TESTING / BRIO',
            img: 'assets/images/brio_63_Hagermann_automat.webp',
            desc: 'Přístroj pro stanovení konzistence čerstvých malt měřením průměru rozlití po 15 normových rázech s motorickým zvedacím mechanismem.',
            specs: ['Průměr desky: 300 mm, pochromovaný povrch', 'Výška zdvihu: 10.0 mm ± 0.1 mm', 'Ovládání: Automatické vypnutí po 15 rázech', 'Součást dodávky: Kuželová forma a narážecí pěchovadlo']
        },
        {
            id: 8,
            title: 'Otlukový buben kameniva Los Angeles',
            cat: 'kamenivo',
            catName: 'Kamenivo',
            norm: 'ČSN EN 1097-2 • ASTM C131',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_71_Otlukov__buben_na_kamenivo.webp',
            desc: 'Masivní ocelový buben s vnitřní narážecí lištou a ocelovými koulemi pro testování odolnosti kameniva vůči fragmentaci a abrazi.',
            specs: ['Vnitřní rozměry bubnu: Ø 711 mm × 508 mm', 'Otáčky: 31 až 33 otáček za minutu', 'Koule: Sada 12 ocelových koulí Ø 45–49 mm', 'Bezpečnost: Bezpečnostní kryt s koncovým spínačem motoru']
        },
        {
            id: 9,
            title: 'Laboratorní prosévačka kameniva',
            cat: 'kamenivo',
            catName: 'Kamenivo',
            norm: 'ČSN EN 933-1 • ISO 3310-1',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_69_Mechanick__vibra_n__pros_va_ka_kameniva.webp',
            desc: 'Elektromechanický třídič se simultánním rotačním a vertikálním rázovým pohybem pro přesný sítový rozbor zrnitosti kameniva.',
            specs: ['Vhodná síta: Rámová zkušební síta Ø 200 mm a Ø 300 mm', 'Časovač: Digitální časovač 0 až 60 minut', 'Upínání: Rychloupínací sloupky s aretačními maticemi', 'Provoz: Suché i mokré prosévání']
        },
        {
            id: 10,
            title: 'Zkušební hydraulický lis FORM+TEST 2000–3000 kN',
            cat: 'lisy',
            catName: 'Zkušební lisy',
            norm: 'ČSN EN 12390-4 • DIN 51220',
            origin: 'FORM+TEST Seidner GmbH (Zastoupení BRIO)',
            img: 'assets/images/brio_04_BSML-40-tun_web.webp',
            desc: 'Špičkový 4sloupový zkušební rám s vysokou tuhostí a hydraulickým pohonem pro zkoušky pevnosti v tlaku betonových zkušebních těles.',
            specs: ['Zkušební síla: 2000 kN nebo 3000 kN', 'Třída přesnosti: Třída 1 (lepší než 1% od 1% jmenovité síly)', 'Řídicí elektronika: Digitální kontrolér DIONpro s připojením k PC', 'Tlačné desky: Ø 300 mm nebo 320 × 320 mm kalené na 58 HRC']
        },
        {
            id: 11,
            title: 'Laboratorní vibrační diskový mlýn BVM',
            cat: 'mlyny',
            catName: 'Drtiče a mlýny',
            norm: 'Příprava vzorků • RFA / XRF',
            origin: 'BRIO Hranice',
            img: 'assets/images/brio_11_mlyny.webp',
            desc: 'Diskový vibrační mlýn pro extrémně rychlé bezotěrové mletí pevných křehkých materiálů na analytickou jemnost.',
            specs: ['Vstupní zrnitost: do 15 mm', 'Výstupní jemnost: až pod 40 µm během 1 až 3 minut', 'Objem mlecích nádob: 100 ml nebo 250 ml', 'Materiály garnitury: Chromová ocel, slinutý karbid nebo achát']
        }
    ];

    const cardsContainer = document.getElementById('cardsView');
    const tableContainer = document.getElementById('tableView');
    const tableBody = document.getElementById('tableBody');
    const viewGridBtn = document.getElementById('viewGridBtn');
    const viewTableBtn = document.getElementById('viewTableBtn');
    const devSearch = document.getElementById('devSearch');
    const counterPill = document.getElementById('counterPill');
    const tabBtns = document.querySelectorAll('.p-tab-btn');

    let activeCategory = 'all';
    let searchQuery = '';

    function populateTable() {
        tableBody.innerHTML = '';
        productsDatabase.forEach(p => {
            const tr = document.createElement('tr');
            tr.setAttribute('data-cat', p.cat);
            tr.setAttribute('data-name', p.title.toLowerCase());
            tr.setAttribute('data-norm', p.norm.toLowerCase());
            tr.innerHTML = '<td><strong>' + p.title + '</strong></td>' +
                '<td><span class="norm-badge">' + p.catName + '</span></td>' +
                '<td>' + p.norm + '</td>' +
                '<td>' + p.specs[0] + '<br><small style="color: #64748B;">' + p.specs[1] + '</small></td>' +
                '<td>' + p.origin + '</td>' +
                '<td><button class="table-btn" data-id="' + p.id + '">Poptat</button></td>';
            tableBody.appendChild(tr);
        });
        bindModalTriggers();
    }
    populateTable();

    function filterDevices() {
        let count = 0;
        const cards = document.querySelectorAll('.dev-card');
        cards.forEach(card => {
            const cat = card.getAttribute('data-cat');
            const name = card.getAttribute('data-name').toLowerCase();
            const norm = card.getAttribute('data-norm').toLowerCase();
            const matchCat = (activeCategory === 'all' || cat === activeCategory);
            const matchSearch = (!searchQuery || name.includes(searchQuery) || norm.includes(searchQuery));
            if (matchCat && matchSearch) {
                card.style.display = 'flex';
                count++;
            } else {
                card.style.display = 'none';
            }
        });

        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(tr => {
            const cat = tr.getAttribute('data-cat');
            const name = tr.getAttribute('data-name');
            const norm = tr.getAttribute('data-norm');
            const matchCat = (activeCategory === 'all' || cat === activeCategory);
            const matchSearch = (!searchQuery || name.includes(searchQuery) || norm.includes(searchQuery));
            if (matchCat && matchSearch) {
                tr.style.display = '';
            } else {
                tr.style.display = 'none';
            }
        });

        if (counterPill) {
            counterPill.textContent = count + ' přístrojů';
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-cat');
            filterDevices();
        });
    });

    document.querySelectorAll('.field-link').forEach(link => {
        link.addEventListener('click', () => {
            const f = link.getAttribute('data-filter');
            tabBtns.forEach(b => {
                if (b.getAttribute('data-cat') === f) {
                    b.click();
                }
            });
        });
    });

    if (devSearch) {
        devSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            filterDevices();
        });
    }

    if (viewGridBtn && viewTableBtn) {
        viewGridBtn.addEventListener('click', () => {
            viewGridBtn.classList.add('active');
            viewTableBtn.classList.remove('active');
            cardsContainer.style.display = 'grid';
            tableContainer.style.display = 'none';
        });
        viewTableBtn.addEventListener('click', () => {
            viewTableBtn.classList.add('active');
            viewGridBtn.classList.remove('active');
            cardsContainer.style.display = 'none';
            tableContainer.style.display = 'block';
        });
    }

    const modal = document.getElementById('devModal');
    const modalClose = document.getElementById('modalCloseBtn');
    const mImg = document.getElementById('mImg');
    const mTitle = document.getElementById('mTitle');
    const mNorm = document.getElementById('mNorm');
    const mDesc = document.getElementById('mDesc');
    const mSpecs = document.getElementById('mSpecs');
    const mInquireBtn = document.getElementById('mInquireBtn');

    function openModalForProduct(id) {
        const p = productsDatabase[id];
        if (!p) return;
        mImg.src = p.img;
        mImg.alt = p.title;
        mTitle.textContent = p.title;
        mNorm.textContent = 'Normy: ' + p.norm + ' | Původ: ' + p.origin;
        mDesc.textContent = p.desc;
        mSpecs.innerHTML = '';
        p.specs.forEach(s => {
            const row = document.createElement('div');
            row.textContent = '• ' + s;
            mSpecs.appendChild(row);
        });
        mInquireBtn.onclick = () => {
            modal.classList.remove('active');
            const selectEl = document.getElementById('bCategory');
            if (selectEl) {
                for (let i = 0; i < selectEl.options.length; i++) {
                    if (selectEl.options[i].text.toLowerCase().includes(p.cat)) {
                        selectEl.selectedIndex = i;
                        break;
                    }
                }
            }
            const msgEl = document.getElementById('bMessage');
            if (msgEl) {
                msgEl.value = 'Mám zájem o technický list a nabídku na: ' + p.title + ' (' + p.norm + ').';
            }
        };
        modal.classList.add('active');
    }

    function bindModalTriggers() {
        document.querySelectorAll('.btn-dev-modal, .table-btn').forEach(btn => {
            btn.onclick = () => {
                const id = parseInt(btn.getAttribute('data-id'), 10);
                openModalForProduct(id);
            };
        });
    }
    bindModalTriggers();

    if (modalClose) {
        modalClose.addEventListener('click', () => modal.classList.remove('active'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });
    }

    const burger = document.getElementById('navBurger');
    const drawer = document.getElementById('portalDrawer');
    if (burger && drawer) {
        burger.addEventListener('click', () => {
            drawer.classList.toggle('active');
        });
        document.querySelectorAll('.drawer-item, .drawer-action').forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('active');
            });
        });
    }

    const copyBtn = document.getElementById('brioCopyIco');
    const toast = document.getElementById('pToast');
    if (copyBtn && toast) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('47669365').then(() => {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2500);
            });
        });
    }

    const brioForm = document.getElementById('brioForm');
    if (brioForm) {
        brioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('bName').value.trim();
            const company = document.getElementById('bCompany').value.trim();
            const phone = document.getElementById('bPhone').value.trim();
            const email = document.getElementById('bEmail').value.trim();
            const cat = document.getElementById('bCategory').value;
            const msg = document.getElementById('bMessage').value.trim();

            const subject = 'Poptávka laboratorního zařízení BRIO - ' + company;
            const body = 'Dobrý den,\n\nzadáváme poptávku zkušebního / laboratorního vybavení pro společnost BRIO HRANICE s.r.o.:\n\n' +
                'Jméno kontaktní osoby: ' + name + '\n' +
                'Organizace / Laboratoř: ' + company + '\n' +
                'Telefon: ' + phone + '\n' +
                'E-mail: ' + email + '\n' +
                'Kategorie zkoušek: ' + cat + '\n\n' +
                'Specifikace poptávky / zařízení:\n' + msg + '\n\n' +
                'S pozdravem,\n' + name + ' (' + company + ')';

            const mailtoUrl = 'mailto:sprencl@briohranice.cz?cc=sprenclova@briohranice.cz&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            window.location.href = mailtoUrl;
        });
    }

    const mapBox = document.getElementById('brioMap');
    if (mapBox && typeof L !== 'undefined') {
        const hraniceCoords = [49.5488, 17.7471];
        const map = L.map('brioMap', { scrollWheelZoom: false }).setView(hraniceCoords, 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap přispěvatelé'
        }).addTo(map);

        const pin = L.circleMarker(hraniceCoords, {
            radius: 9,
            fillColor: '#0B2545',
            color: '#FFFFFF',
            weight: 3,
            opacity: 1,
            fillOpacity: 1
        }).addTo(map);

        pin.bindPopup('<strong>BRIO HRANICE s.r.o.</strong><br>Teplická 232, 753 01 Hranice<br>Výroba zkušebních zařízení').openPopup();
    }
});


const translations = {
    cs: {
        nav_about: "O společnosti",
        nav_fields: "Oblasti zkoušek",
        nav_catalog: "Katalog přístrojů",
        nav_partner: "FORM+TEST",
        nav_ref: "Reference",
        nav_contact: "Kontakt",
        nav_cta: "Poptat přístroj",
        hero_badge_trad: "TRADICE OD ROKU 1992",
        hero_badge_exp: "EXPORT DO 20+ ZEMÍ",
        hero_heading: "Špičková laboratorní technika a zkušební stroje pro stavebnictví a průmysl",
        hero_paragraph: "Již více než 30 let vyvíjíme a vyrábíme certifikovaná zkušební zařízení pro stavební, silniční a hutní zkušební laboratoře. Jsme autorizovaným výhradním zástupcem německé společnosti FORM + TEST Seidner & Co. GmbH pro Českou republiku a Slovensko.",
        hero_btn_catalog: "Prohlédnout katalog zařízení",
        hero_btn_consult: "Technická konzultace",
        hero_feat1: "Konstrukce v souladu s evropskými normami ČSN EN",
        hero_feat2: "Vlastní vývoj a výroba jednoúčelových zkušebních strojů",
        hero_feat3: "Kompletní záruční, pozáruční servis a kalibrace",
        sc_badge: "Vlajkový produkt",
        sc_meta: "Kód: AVH-PLC 12/150",
        sc_title: "Automatizovaná stolice vodopropustnosti betonu",
        sc_desc: "Plně automatický systém řízený průmyslovým PLC automatem s dotykovým panelem. Splňuje normu ČSN EN 12390-8 pro zkoušení hloubky průsaku vody pod tlakem.",
        sc_tag1: "Až 12 zkušebních těles",
        sc_tag2: "Tlak až 1.5 MPa",
        cnt1_title: "Rok založení společnosti",
        cnt1_desc: "Více než 32 let kontinuálního vývoje zkušebních zařízení v Hranicích na Moravě.",
        cnt2_title: "Exportních zemí světa",
        cnt2_desc: "Dodávky pro prestižní materiálové laboratoře v ČR, na Slovensku, v Polsku, Německu i zámoří.",
        cnt3_title: "Partnerství FORM+TEST",
        cnt3_desc: "Dvacet let výhradního obchodního a servisního zastoupení německého lídra v lisovací technice.",
        cnt4_title: "Typů přístrojů a forem",
        cnt4_desc: "Kompletní technologické vybavení pro zkoušky betonu, cementů, malt, kameniva a zemin.",
        sec_about_sub: "PROFIL SPOLEČNOSTI",
        sec_about_title: "Tradice přesného materiálového zkušebnictví",
        sec_about_desc: "Od roku 1992 vyvíjíme spolehlivá zařízení pro zkušebny stavebních hmot, betonárny, cementárny a technické univerzity.",
        about_h3: "Inženýrský přístup, vlastní vývoj a mezinárodní know-how",
        about_p1: "Společnost BRIO HRANICE s.r.o. vznikla v roce 1992. Od samého počátku jsme se specializovali na vývoj a zakázkovou výrobu jednoúčelových strojů. Na základě úzké spolupráce se stavebními a silničními laboratořemi jsme postupně vybudovali ucelený výrobní program zaměřený na zařízení pro kontrolu kvality stavebních materiálů.",
        about_p2: "Významná část naší produkce směřuje k zahraničním partnerům. Vybudovali jsme silnou tržní pozici v České republice, na Slovensku a v Polsku. Naše zkušební zařízení a speciální zakázky dodáváme do více než 20 zemí světa. Mezi naše stálé zákazníky patří přední stavební korporace i technické vysoké a střední školy (ČVUT v Praze, VUT v Brně, VŠB-TU Ostrava).",
        pil1_title: "Přesnost a opakovatelnost měření",
        pil1_desc: "Všechny naše přístroje splňují nejpřísnější toleranční požadavky norem ČSN, EN, ISO a DIN.",
        pil2_title: "Zakázková výroba na míru",
        pil2_desc: "Vedle katalogových modelů navrhujeme jednoúčelové testovací aparatury přesně dle specifikace klienta.",
        about_badge_t: "Autorizovaný servis zkušebních lisů",
        about_badge_s: "Kalibrace sil a dráhy ve spolupráci s akreditovanými laboratořemi",
        sec_fields_sub: "SPECIALIZACE ZAŘÍZENÍ",
        sec_fields_title: "Oblasti zkoušek materiálů",
        sec_fields_desc: "Dodáváme ucelené laboratorní sestavy pro jednotlivá odvětví zkušebnictví stavebních hmot a geotechniky.",
        f1_title: "Zkoušky kvality betonu",
        f1_desc: "Kompletní zařízení pro zkoušení čerstvého i ztvrdlého betonu: formy na zkušební kostky a trámce, Abramsovy kužele, laboratorní míchačky, vibrační stoly, stolice vodopropustnosti AVH a zařízení pro zkoušky obrusnosti Böhme.",
        f1_link: "Zobrazit přístroje pro beton →",
        f2_title: "Cementy a malty",
        f2_desc: "Přesné formy na cementomaltové trámečky 40×40×160 mm, normové laboratorní míchačky dle ČSN EN 196-1, zhutňovací stolky, měření smrštění trámečků a automatické Vicatovy přístroje pro zkoušky doby tuhnutí.",
        f2_link: "Zobrazit přístroje pro cement →",
        f3_title: "Kamenivo a sypké materiály",
        f3_desc: "Otlukové bubny Los Angeles a Deval, elektromechanické a vibrační prosévačky, laboratorní síta s certifikátem shody, sušárny MEMMERT, analytické a přesné laboratorní váhy KERN, tyčová síta a děliče vzorků.",
        f3_link: "Zobrazit přístroje pro kamenivo →",
        f4_title: "Zkušební lisy a stroje",
        f4_desc: "Hydraulické a elektromechanické zkušební lisy FORM+TEST na tlak, tah a ohyb v rozsahu 100 až 5000 kN. Digitální řízení DIONpro s automatickým vyhodnocením pevnostních charakteristik.",
        f4_link: "Zobrazit zkušební lisy →",
        f5_title: "Drtiče, mlýny a homogenizace",
        f5_desc: "Laboratorní čelisťové drtiče BCD pro hrubé drcení nerostů, vibrační diskové mlýny BVM pro jemné mletí analytických vzorků, omílací bubny a laboratorní tabletovací lisy BSML 250 a 400 kN.",
        f5_link: "Zobrazit drtiče a mlýny →",
        sec_cat_sub: "PRODUKTOVÝ KATALOG",
        sec_cat_title: "Laboratorní přístroje a zkušební zařízení BRIO",
        sec_cat_desc: "Vyberte kategorii nebo vyhledejte přístroj dle názvu, metody či normy ČSN EN / ISO. Možnost přepnutí mezi kartami a technickou tabulkou parametrů.",
        tab_all: "Všechna zařízení",
        tab_beton: "Zkoušky betonu",
        tab_cement: "Cementy a malty",
        tab_kamenivo: "Kamenivo",
        tab_lisy: "Zkušební lisy",
        tab_mlyny: "Drtiče a mlýny",
        sec_partner_sub: "OFICIÁLNÍ ZASTOUPENÍ V ČESKÉ A SLOVENSKÉ REPUBLICE",
        sec_partner_title: "FORM + TEST Seidner & Co. GmbH",
        sec_partner_desc: "Od roku 2004 zastupujeme v plném rozsahu německého technologického lídra v oboru zkušebních strojů a systémů materiálového testování.",
        part_col1_t: "Rozsah zastoupení FORM+TEST:",
        part_col2_t: "Další zastupované světové značky:",
        sec_ref_sub: "OVĚŘENO V PRAXI",
        sec_ref_title: "Důvěra předních stavebních společností a laboratoří",
        sec_ref_desc: "Naše zařízení a servis pomáhají kontrolovat kvalitu na nejvýznamnějších infrastrukturních a pozemních stavbách v Česku i zahraničí.",
        sec_contact_sub: "KONTAKTNÍ CENTRUM",
        sec_contact_title: "Obchodní a technická podpora BRIO HRANICE",
        sec_contact_desc: "Náš inženýrský tým vám ochotně poradí s výběrem přístroje, sestavením laboratorního celku i kalibračním servisem.",
        btn_copy_ico: "Kopírovat IČ",
        c_hq_label: "Sídlo a provozovna:",
        c_hq_hint: "(bývalý areál Sigma Hranice / Teplická ulice)",
        c_p1_name: "Ing. Petr Šprencl – jednatel",
        c_p1_role: "Obchodní a technické záležitosti, konstrukce",
        c_p2_name: "Hana Šprenclová – jednatelka",
        c_p2_role: "Ekonomické oddělení, fakturace a logistika",
        c_mail_label: "Centrální e-mailová schránka:",
        form_title: "Poptávka laboratorního vybavení a servisu",
        form_lead: "Vyplňte formulář níže. Zpráva se automaticky připraví ve vašem e-mailu pro okamžité odeslání vedení společnosti.",
        lbl_name: "Jméno a příjmení *",
        lbl_comp: "Společnost / Laboratoř *",
        lbl_phone: "Telefonní kontakt *",
        lbl_email: "E-mailová adresa *",
        lbl_cat: "Požadovaná oblast zkoušek",
        lbl_msg: "Specifikace požadavku / dotaz",
        form_submit: "Odeslat poptávku na sprencl@briohranice.cz",
        map_title: "Poloha areálu BRIO HRANICE – Teplická 232, 753 01 Hranice",
        footer_copy: "© 2026 BRIO HRANICE s.r.o. Všechna práva vyhrazena. Výrobce zkušebních zařízení a výhradní zástupce FORM+TEST Seidner & Co. GmbH pro ČR a SR.",
        footer_oldweb: "Původní web"
    },
    en: {
        nav_about: "About Us",
        nav_fields: "Testing Fields",
        nav_catalog: "Equipment Catalog",
        nav_partner: "FORM+TEST",
        nav_ref: "References",
        nav_contact: "Contact",
        nav_cta: "Inquire Equipment",
        hero_badge_trad: "TRADITION SINCE 1992",
        hero_badge_exp: "EXPORT TO 20+ COUNTRIES",
        hero_heading: "High-End Laboratory Equipment and Testing Machines for Civil Engineering & Industry",
        hero_paragraph: "For over 30 years, we have engineered and manufactured certified testing equipment for civil engineering, road building and metallurgical laboratories. We are the authorized exclusive distributor of German FORM + TEST Seidner & Co. GmbH for the Czech Republic and Slovakia.",
        hero_btn_catalog: "Browse Equipment Catalog",
        hero_btn_consult: "Technical Consultation",
        hero_feat1: "Engineering in full compliance with European EN standards",
        hero_feat2: "Custom in-house R&D and specialized testing machine manufacturing",
        hero_feat3: "Comprehensive warranty, post-warranty maintenance and calibration",
        sc_badge: "Flagship Equipment",
        sc_meta: "Code: AVH-PLC 12/150",
        sc_title: "Automated Concrete Water Permeability Rig",
        sc_desc: "Fully automated system controlled by an industrial PLC unit with touch panel. Complies with EN 12390-8 for testing depth of penetration of water under pressure.",
        sc_tag1: "Up to 12 specimens",
        sc_tag2: "Pressure up to 1.5 MPa",
        cnt1_title: "Company Founded",
        cnt1_desc: "Over 32 years of continuous development of testing systems in Hranice, Czech Republic.",
        cnt2_title: "Export Countries Worldwide",
        cnt2_desc: "Deliveries for prestigious material testing laboratories across CZ, SK, Poland, Germany and overseas.",
        cnt3_title: "FORM+TEST Partnership",
        cnt3_desc: "Twenty years as exclusive commercial and service representative of the German leader in testing presses.",
        cnt4_title: "Equipment & Mold Types",
        cnt4_desc: "Complete technological portfolio for testing concrete, cement, mortar, aggregates and soils.",
        sec_about_sub: "COMPANY PROFILE",
        sec_about_title: "Tradition of Precision Materials Testing",
        sec_about_desc: "Since 1992, we have engineered reliable testing systems for building materials laboratories, concrete plants, cement works and technical universities.",
        about_h3: "Engineering Excellence, In-House R&D and International Know-How",
        about_p1: "BRIO HRANICE s.r.o. was founded in 1992. From the very beginning, we have specialized in custom development and manufacturing of special-purpose machinery. In close cooperation with civil engineering and road testing laboratories, we built a comprehensive product line dedicated to quality control of building materials.",
        about_p2: "A significant portion of our production is exported to international partners. We hold a strong market position in the Czech Republic, Slovakia and Poland, supplying testing systems to more than 20 countries worldwide, including leading construction corporations and technical universities.",
        pil1_title: "Measurement Accuracy & Repeatability",
        pil1_desc: "All our testing instruments meet the strictest tolerance requirements of EN, ISO and DIN standards.",
        pil2_title: "Custom-Built Testing Systems",
        pil2_desc: "Alongside catalog instruments, we design special-purpose testing apparatus tailored to client specifications.",
        about_badge_t: "Authorized Testing Press Service",
        about_badge_s: "Force and displacement calibration in cooperation with accredited laboratories",
        sec_fields_sub: "EQUIPMENT SPECIALIZATION",
        sec_fields_title: "Materials Testing Fields",
        sec_fields_desc: "We supply complete laboratory setups for individual sectors of building materials testing and geotechnics.",
        f1_title: "Concrete Quality Testing",
        f1_desc: "Complete equipment for testing fresh and hardened concrete: cube and beam molds, Abrams cones, laboratory mixers, vibrating tables, AVH water permeability rigs and Böhme abrasion testers.",
        f1_link: "View concrete testing equipment →",
        f2_title: "Cements and Mortars",
        f2_desc: "Precision three-gang molds for 40×40×160 mm mortar prisms, standard laboratory mixers per EN 196-1, jolting tables, shrinkage apparatus and automatic Vicat needle instruments.",
        f2_link: "View cement testing equipment →",
        f3_title: "Aggregates & Bulk Materials",
        f3_desc: "Los Angeles and Micro-Deval drums, electromechanical sieve shakers, certified test sieves, MEMMERT drying ovens, KERN precision balances, bar sieves and sample dividers.",
        f3_link: "View aggregate testing equipment →",
        f4_title: "Testing Presses & Machines",
        f4_desc: "FORM+TEST hydraulic and electromechanical testing machines for compression, tension and flexure from 100 to 5000 kN. Digital DIONpro control with automated strength evaluation.",
        f4_link: "View testing presses →",
        f5_title: "Crushers, Mills & Homogenization",
        f5_desc: "BCD laboratory jaw crushers for coarse mineral crushing, BVM vibratory disc mills for analytical grinding, tumbling drums and BSML 250 / 400 kN laboratory pelletizing presses.",
        f5_link: "View crushers and mills →",
        sec_cat_sub: "PRODUCT CATALOG",
        sec_cat_title: "BRIO Laboratory Instruments & Testing Equipment",
        sec_cat_desc: "Select a category or search by instrument name, test method or EN / ISO standard. Switch between card view and technical specification table.",
        tab_all: "All Equipment",
        tab_beton: "Concrete Testing",
        tab_cement: "Cements & Mortars",
        tab_kamenivo: "Aggregates",
        tab_lisy: "Testing Presses",
        tab_mlyny: "Crushers & Mills",
        sec_partner_sub: "OFFICIAL REPRESENTATIVE IN THE CZECH REPUBLIC AND SLOVAKIA",
        sec_partner_title: "FORM + TEST Seidner & Co. GmbH",
        sec_partner_desc: "Since 2004, we have served as the full-scope representative of the German technological leader in testing machines and material testing systems.",
        part_col1_t: "Scope of FORM+TEST Representation:",
        part_col2_t: "Other Represented Global Brands:",
        sec_ref_sub: "PROVEN IN PRACTICE",
        sec_ref_title: "Trusted by Leading Construction Companies & Laboratories",
        sec_ref_desc: "Our equipment and calibration services help ensure quality on major infrastructure and civil engineering projects.",
        sec_contact_sub: "CONTACT CENTER",
        sec_contact_title: "Sales & Technical Support BRIO HRANICE",
        sec_contact_desc: "Our engineering team will gladly advise you on selecting instruments, configuring complete lab setups and calibration services.",
        btn_copy_ico: "Copy ID",
        c_hq_label: "Headquarters & Plant:",
        c_hq_hint: "(former Sigma Hranice industrial park / Teplická street)",
        c_p1_name: "Ing. Petr Šprencl – Managing Director",
        c_p1_role: "Sales, Technical Engineering & Custom Design",
        c_p2_name: "Hana Šprenclová – Managing Director",
        c_p2_role: "Finance, Invoicing & Logistics",
        c_mail_label: "Central E-mail:",
        form_title: "Laboratory Equipment & Service Inquiry",
        form_lead: "Fill in the form below. Your inquiry will automatically open in your email client ready to send to our management.",
        lbl_name: "Full Name *",
        lbl_comp: "Company / Laboratory *",
        lbl_phone: "Phone Number *",
        lbl_email: "E-mail Address *",
        lbl_cat: "Required Testing Field",
        lbl_msg: "Specification / Inquiry Details",
        form_submit: "Send Inquiry to sprencl@briohranice.cz",
        map_title: "BRIO HRANICE Facility Location – Teplická 232, 753 01 Hranice",
        footer_copy: "© 2026 BRIO HRANICE s.r.o. All rights reserved. Manufacturer of testing equipment and exclusive representative of FORM+TEST Seidner & Co. GmbH for CZ & SK.",
        footer_oldweb: "Original Website"
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;
    try {
        localStorage.setItem("selected_lang_brio", lang);
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
        const saved = localStorage.getItem("selected_lang_brio");
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    } catch (e) {}
});
