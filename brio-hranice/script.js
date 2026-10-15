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
