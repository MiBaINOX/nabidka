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
    function checkInitialReveals() {
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 100) {
                el.classList.add('active');
            }
        });
    }
    checkInitialReveals();

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
});


const translations = {
    cs: {
        nav_about: "O firmě",
        nav_production: "Výroba",
        nav_catalog: "Katalog",
        nav_cert: "Certifikace",
        nav_career: "Kariéra",
        nav_contact: "Kontakt",
        nav_cta: "Poptat výrobu",
        drawer_lang_title: "Jazyk / Language:",
        drawer_cta: "Odeslat poptávku",
        hero_location: "MOHELNICE • ČESKÁ REPUBLIKA",
        hero_tradition: "TRADICE OD ROKU 1994",
        hero_title: "Přední výrobce kovových dílců pro sádrokartonové systémy",
        hero_desc: "Společnost DK mont a.s. je největším výrobcem kovového montážního příslušenství k sádrokartonovým konstrukcím v České republice i ve Střední Evropě. Náš certifikovaný systém PROFIFIX® je synonymem špičkové přesnosti, stability a férového partnerství ve více než 15 zemích Evropy.",
        hero_btn_catalog: "Prozkoumat katalog produktů",
        hero_btn_contact: "Kontaktovat obchodní tým",
        hero_feat1: "Vlastní nástrojárna a vysokorychlostní lisy",
        hero_feat2: "Certifikovaná ocel DX51D s garantovaným zinkováním",
        hero_feat3: "Expediční sklad s garancí dodávek pro velkoobchody",
        metric1_title: "TOP 35% hodnocení EcoVadis",
        metric1_desc: "Mezinárodní bronzová medaile za odpovědný přístup k životnímu prostředí, lidským právům, etice a udržitelnému nákupu surovin.",
        metric2_title: "Let zkušeností v oboru",
        metric2_desc: "Nepřetržitý vývoj, rozšiřování výrobních hal v Mohelnici a stabilní pozice spolehlivého dodavatele pro stavební distributory.",
        metric3_title: "Kvalifikovaných zaměstnanců",
        metric3_desc: "Tým zkušených nástrojařů, seřizovačů lisů, techniků kvality a logistických specialistů dbajících na každý detail.",
        metric4_title: "Certifikace ISO",
        metric4_desc: "ISO 9001 (Kvalita), ISO 14001 (Environmentální management) a ISO/IEC 27001 (Informační bezpečnost dat).",
        sec_excellence_sub: "VÝROBNÍ EXCELENCE",
        sec_excellence_title: "Technologické zázemí a filozofie systému PROFIFIX®",
        sec_excellence_lead: "Každý dílec z naší mohelnické výroby prochází přísnou rozměrovou a pevnostní kontrolou. Usnadňujeme práci montážním firmám po celé Evropě.",
        bento1_tag: "RYCHLOST & PEVNOST",
        bento1_title: "Kvalitní kování a závěsy šetří čas na stavbě",
        bento1_desc: "Systémové prvky DK mont PROFIFIX® jsou navrženy ve spolupráci s profesionálními montážníky sádrokartonu. Speciální prolisy a zesílené lemy závěsů zvyšují únosnost, eliminují prohýbání konstrukcí podhledů a předcházejí vzniku trhlin v sádrokartonových deskách.",
        bento1_item1: "<strong>Přesné dosednutí:</strong> Kompatibilita s profily CD 60/27, UD 28 a dřevěnými trámy.",
        bento1_item2: "<strong>Antikorozní ochrana:</strong> Použití žárově pozinkovaného ocelového pásu třídy DX51D.",
        bento1_item3: "<strong>Bezpečná manipulace:</strong> Zaoblené a odhrotované hrany chránící montážníky před pořezáním.",
        bento2_tag: "AUTOMATIZOVANÁ VÝROBA",
        bento2_title: "Vlastní lisovací nástroje a stabilní kapacita",
        bento2_desc: "Díky vlastní konstrukční kanceláři a nástrojárně jsme schopni rychle inovovat stávající produkty a vyvíjet zakázkové lisované díly podle specifických požadavků zákazníků.",
        stat_exp_lbl: "Zemí exportu",
        stat_rec_lbl: "Recyklovatelná ocel",
        stat_ship_lbl: "Rychlá expedice",
        stat_norm_lbl: "Shoda s normami",
        bento3_title: "Logistické centrum Mohelnice",
        bento3_desc: "Velkokapacitní skladové prostory přímo u hlavního silničního tahu I/35 umožňují plynulé zásobování stavebních velkoobchodů a dodavatelů suché výstavby.",
        bento4_title: "Informační bezpečnost ISO 27001",
        bento4_desc: "Jako jedna z mála strojírenských společností disponujeme certifikací ČSN EN ISO/IEC 27001, která garantuje maximální ochranu klientských dat a digitálních procesů.",
        bento5_title: "Zelená energie a cirkularita",
        bento5_desc: "V areálu závodu využíváme fotovoltaické systémy a úsporná technologická opatření podpořená z fondů EU. Kovový odpad z lisování je plně navracen do hutního oběhu.",
        sec_catalog_sub: "KOMPLETNÍ SORTIMENT",
        sec_catalog_title: "Interaktivní katalog kovového příslušenství PROFIFIX®",
        sec_catalog_lead: "Vyberte kategorii nebo vyhledejte požadovaný dílec. Všechny komponenty vyrábíme z certifikované oceli dle příslušných evropských norem ČSN EN 13964.",
        tab_all: "Všechny dílce",
        tab_hangers: "Přímé a krokvové závěsy",
        tab_quick: "Rychlozávěsy a dráty",
        tab_connect: "Spojky CD profilů",
        tab_nonius: "Nonius systém",
        tab_other: "Rohy a doplňky",
        search_placeholder: "Hledat dílec, rozměr, kód...",
        btn_spec: "Technická specifikace",
        catalog_download_title: "Máte zájem o ucelený technický list všech 36 položek?",
        catalog_download_desc: "Rádi vám zašleme kompletní katalog montážního systému včetně zátěžových tabulek a certifikátů shody.",
        catalog_download_btn: "Vyžádat kompletní katalog v PDF",
        sec_certs_sub: "OVĚŘENÁ KVALITA",
        sec_certs_title: "Mezinárodní certifikace a prestižní ocenění",
        sec_certs_lead: "Kvalita naší výroby a procesů je pravidelně auditována předními certifikačními autoritami. Dodržujeme evropské standardy i přísné ekologické normy.",
        cert1_tag: "SYSTÉM ŘÍZENÍ JAKOSTI",
        cert1_desc: "Certifikovaný systém řízení jakosti výroby kovových dílců zaručující stálou jakost každé výrobní šarže.",
        cert2_tag: "ŽIVOTNÍ PROSTŘEDÍ",
        cert2_desc: "Environmentální management minimalizující ekologickou stopu a garantující šetrné nakládání s energiemi a odpady.",
        cert3_tag: "BEZPEČNOST INFORMACÍ",
        cert3_desc: "Nejnovější standard informační bezpečnosti chránící průmyslová data a partnerskou komunikaci.",
        cert4_tag: "FINANČNÍ STABILITA",
        cert4_desc: "Zařazení mezi nejstabilnější a nejdůvěryhodnější obchodní společnosti v České republice.",
        career_tag: "KARIÉRA V MOHELNICI",
        career_title: "Hledáte stabilní práci v moderním strojírenském závodě?",
        career_desc: "V DK mont a.s. stavíme na dlouhodobých vztazích, férovém přístupu a moderním zázemí. Neustále modernizujeme strojní park a nabízíme příležitosti pro seřizovače lisů, nástrojaře, skladníky i mistry výroby.",
        career_perk1: "Perspektiva a jistota v ryze české prosperující akciové společnosti",
        career_perk2: "Moderní a čisté pracovní prostředí s moderními lisovacími linkami",
        career_perk3: "Možnost profesního růstu, zaškolení a rozšiřování kvalifikace",
        career_btn: "Zobrazit volné pozice",
        career_call_text: "Nebo volejte personální: +420 602 484 401",
        career_badge_lbl: "Kolegů ve výrobním a logistickém areálu Mohelnice",
        sec_contact_sub: "SPOJTE SE S NÁMI",
        sec_contact_title: "Kontaktní a expediční centrum DK mont a.s.",
        sec_contact_lead: "Náš obchodní tým je připraven zpracovat vaši poptávku, připravit vzorkovou sadu nebo domluvit individuální velkoobchodní podmínky.",
        team_tag: "PŘÍMÉ SPOJENÍ",
        team_card_title: "Obchodní a technický tým DK mont a.s.",
        team_card_desc: "Naši specialisté pro příjem objednávek, kalkulace i regionální obchodní zastoupení v ČR a na Slovensku.",
        team_group_hq: "Centrála Mohelnice – Objednávky & Asistent obchodu",
        team_group_reg: "Produktoví manažeři – Obchodní zastoupení v regionu",
        badge_orders: "OBJEDNÁVKY",
        badge_support: "ASISTENT OBCHODU",
        badge_mgr: "PRODUKTOVÝ MANAGER",
        role_orders: "Příjem objednávek a expedice",
        role_support: "Zákaznická podpora a obchod",
        role_pm_czsk: "Region: Česká republika & Slovensko",
        role_pm_cz: "Region: Česká republika",
        address_box_title: "Sídlo a výrobní závod Mohelnice",
        address_label: "Adresa areálu:",
        address_val: "Újezd 86, 789 85 Mohelnice, Česká republika",
        hours_label: "Provozní doba expedice:",
        hours_val: "Pondělí – Pátek: 06:00 – 14:30",
        billing_label: "Fakturační a rejstříkové údaje:",
        billing_court: "Zapsána u Krajského soudu v Ostravě, oddíl B, vložka 2897",
        central_label: "Centrální spojení:",
        reception_label: "Telefon recepce:",
        form_title: "Nezávazná poptávka a dotaz na sortiment",
        form_desc: "Vyplňte formulář níže. Zpráva se předvyplní do vašeho e-mailového klienta přímo pro naše obchodní oddělení.",
        form_name_lbl: "Vaše jméno a firma *",
        form_phone_lbl: "Telefonní číslo *",
        form_email_lbl: "E-mailová adresa *",
        form_cat_lbl: "Zájem o sortiment",
        form_msg_lbl: "Specifikace poptávky / množství",
        form_msg_placeholder: "Uveďte předpokládané množství, požadavky na dodání nebo dotaz...",
        form_submit: "Odeslat poptávku na obchod@dkmont.cz",
        map_title: "Výrobní, skladový a expediční areál Mohelnice",
        map_address_txt: "Újezd 86, 789 85 Mohelnice • Česká republika",
        map_btn: "📍 Otevřít na Mapy.cz",
        footer_rights: "© 2026 DK mont akciová společnost. Všechna práva vyhrazena. Výrobce certifikovaného systému PROFIFIX®.",
        footer_about: "O firmě",
        footer_catalog: "Katalog",
        footer_cert: "Certifikáty",
        footer_contact: "Kontakty",
        modal_inquire_btn: "Poptat tento dílec"
    },
    en: {
        nav_about: "About Us",
        nav_production: "Manufacturing",
        nav_catalog: "Catalog",
        nav_cert: "Certifications",
        nav_career: "Careers",
        nav_contact: "Contact",
        nav_cta: "Inquire Production",
        drawer_lang_title: "Language:",
        drawer_cta: "Send Inquiry",
        hero_location: "MOHELNICE • CZECH REPUBLIC",
        hero_tradition: "TRADITION SINCE 1994",
        hero_title: "Leading European Manufacturer of Drywall System Accessories",
        hero_desc: "DK mont a.s. is the largest manufacturer of metal assembly accessories for drywall systems in Central Europe. Our certified PROFIFIX® system is synonymous with top precision, structural stability and reliable partnership in over 15 European countries.",
        hero_btn_catalog: "Explore Product Catalog",
        hero_btn_contact: "Contact Sales Team",
        hero_feat1: "In-house toolshop and high-speed stamping presses",
        hero_feat2: "Certified DX51D steel with guaranteed zinc coating",
        hero_feat3: "Central distribution warehouse with guaranteed wholesale delivery",
        metric1_title: "TOP 35% EcoVadis Rating",
        metric1_desc: "International bronze medal for responsible approach to environment, human rights, ethics and sustainable procurement.",
        metric2_title: "Years of Industry Experience",
        metric2_desc: "Continuous development, expansion of manufacturing halls in Mohelnice and reliable partnership for building distributors.",
        metric3_title: "Qualified Specialists",
        metric3_desc: "Team of experienced toolmakers, press operators, quality engineers and logistics specialists paying attention to every detail.",
        metric4_title: "ISO Certifications",
        metric4_desc: "ISO 9001 (Quality), ISO 14001 (Environmental Management) and ISO/IEC 27001 (Information Security).",
        sec_excellence_sub: "MANUFACTURING EXCELLENCE",
        sec_excellence_title: "Technological Infrastructure and PROFIFIX® Philosophy",
        sec_excellence_lead: "Every component from our Mohelnice manufacturing plant undergoes strict dimensional and load inspection. We make assembly work easier across Europe.",
        bento1_tag: "SPEED & STRENGTH",
        bento1_title: "High-Quality Fittings and Hangers Save Time on Site",
        bento1_desc: "DK mont PROFIFIX® system components are engineered in cooperation with professional drywall installers. Reinforced ribs increase load capacity, eliminate sagging and prevent cracking in boards.",
        bento1_item1: "<strong>Precise fit:</strong> Compatibility with CD 60/27, UD 28 profiles and timber beams.",
        bento1_item2: "<strong>Corrosion protection:</strong> Hot-dip galvanized DX51D grade steel coil.",
        bento1_item3: "<strong>Safe handling:</strong> Deburred edges protecting installers from cuts.",
        bento2_tag: "AUTOMATED MANUFACTURING",
        bento2_title: "In-house Tooling and Stable Capacity",
        bento2_desc: "With an in-house design office and toolshop, we rapidly innovate standard products and develop custom stamped components tailored to customer needs.",
        stat_exp_lbl: "Export Countries",
        stat_rec_lbl: "Recyclable Steel",
        stat_ship_lbl: "Fast Dispatch",
        stat_norm_lbl: "Standard Compliance",
        bento3_title: "Logistics Hub Mohelnice",
        bento3_desc: "Large-scale warehousing directly off the I/35 corridor enables reliable supply to building material wholesalers across Europe.",
        bento4_title: "ISO 27001 Information Security",
        bento4_desc: "As one of few manufacturers, we hold ISO/IEC 27001 certification guaranteeing maximum protection of client data and supply processes.",
        bento5_title: "Green Energy & Circularity",
        bento5_desc: "We utilize on-site rooftop PV systems and eco-efficient technologies. All sheet metal stamping scrap is 100% recycled back into metallurgy.",
        sec_catalog_sub: "COMPLETE PORTFOLIO",
        sec_catalog_title: "Interactive Catalog of PROFIFIX® Metal Accessories",
        sec_catalog_lead: "Select a category or search for any item. All components are manufactured from certified steel in accordance with European standard EN 13964.",
        tab_all: "All Components",
        tab_hangers: "Direct & Rafter Hangers",
        tab_quick: "Quick Hangers & Wires",
        tab_connect: "CD Profile Connectors",
        tab_nonius: "Nonius System",
        tab_other: "Corners & Accessories",
        search_placeholder: "Search component, dimension, code...",
        btn_spec: "Technical Specification",
        catalog_download_title: "Interested in the comprehensive technical datasheet of all 36 items?",
        catalog_download_desc: "We will gladly send you our complete assembly catalog including load tables and certificates of conformity.",
        catalog_download_btn: "Request Full PDF Catalog",
        sec_certs_sub: "VERIFIED QUALITY",
        sec_certs_title: "International Certifications & Industry Recognition",
        sec_certs_lead: "Our manufacturing quality and processes are regularly audited by leading authorities, complying with European standards and environmental norms.",
        cert1_tag: "QUALITY MANAGEMENT SYSTEM",
        cert1_desc: "Certified quality management system ensuring consistent high quality in every manufacturing batch.",
        cert2_tag: "ENVIRONMENTAL MANAGEMENT",
        cert2_desc: "Environmental management minimizing ecological footprint and ensuring sustainable energy and waste practices.",
        cert3_tag: "INFORMATION SECURITY",
        cert3_desc: "Latest information security standard protecting industrial data and partner communications.",
        cert4_tag: "FINANCIAL STABILITY",
        cert4_desc: "Ranked among the most stable and creditworthy commercial companies in the Czech Republic.",
        career_tag: "CAREERS IN MOHELNICE",
        career_title: "Looking for a Stable Career in Modern Manufacturing?",
        career_desc: "At DK mont a.s. we build on long-term relationships, fairness and modern facilities. We continuously invest in our machinery and offer opportunities for toolmakers, operators and technicians.",
        career_perk1: "Stability and long-term perspective in a prosperous Czech manufacturing company",
        career_perk2: "Modern and clean working environment with state-of-the-art stamping lines",
        career_perk3: "Professional growth, training and skill expansion programs",
        career_btn: "View Open Positions",
        career_call_text: "Or call HR department: +420 602 484 401",
        career_badge_lbl: "Colleagues in Mohelnice manufacturing & logistics hub",
        sec_contact_sub: "GET IN TOUCH",
        sec_contact_title: "Sales and Logistics Center DK mont a.s.",
        sec_contact_lead: "Our sales team is ready to process your inquiry, prepare sample packs, or negotiate custom wholesale conditions.",
        team_tag: "DIRECT CONTACT",
        team_card_title: "Sales & Technical Team DK mont a.s.",
        team_card_desc: "Our specialists for order intake, calculations and regional sales representatives across Czech Republic and Slovakia.",
        team_group_hq: "Mohelnice Headquarters – Orders & Sales Support",
        team_group_reg: "Regional Product Managers for Czech Republic & Slovakia",
        badge_orders: "ORDERS",
        badge_support: "SALES SUPPORT",
        badge_mgr: "PRODUCT MANAGER",
        role_orders: "Order Processing & Dispatch",
        role_support: "Customer Support & Sales Assistance",
        role_pm_czsk: "Region: Czech Republic & Slovakia",
        role_pm_cz: "Region: Czech Republic",
        address_box_title: "Headquarters & Manufacturing Plant",
        address_label: "Facility address:",
        address_val: "Újezd 86, 789 85 Mohelnice, Czech Republic",
        hours_label: "Dispatch operating hours:",
        hours_val: "Monday – Friday: 06:00 – 14:30",
        billing_label: "Billing & Registration Details:",
        billing_court: "Registered at Regional Court in Ostrava, Section B, Insert 2897",
        central_label: "Central Contact:",
        reception_label: "Reception Phone:",
        form_title: "Inquiry and Product Question",
        form_desc: "Fill out the form below. Your message will be pre-filled into your email client directly for our sales team.",
        form_name_lbl: "Your Name and Company *",
        form_phone_lbl: "Phone Number *",
        form_email_lbl: "Email Address *",
        form_cat_lbl: "Product Category",
        form_msg_lbl: "Inquiry Specification / Quantity",
        form_msg_placeholder: "State estimated quantity, delivery terms or questions...",
        form_submit: "Send Inquiry to obchod@dkmont.cz",
        map_title: "Manufacturing, Warehouse & Logistics Facility Mohelnice",
        map_address_txt: "Újezd 86, 789 85 Mohelnice • Czech Republic",
        map_btn: "📍 Open on Mapy.cz",
        footer_rights: "© 2026 DK mont joint-stock company. All rights reserved. Manufacturer of the certified PROFIFIX® system.",
        footer_about: "About Us",
        footer_catalog: "Catalog",
        footer_cert: "Certificates",
        footer_contact: "Contact",
        modal_inquire_btn: "Inquire This Item"
    },
    de: {
        nav_about: "Über uns",
        nav_production: "Fertigung",
        nav_catalog: "Katalog",
        nav_cert: "Zertifikate",
        nav_career: "Karriere",
        nav_contact: "Kontakt",
        nav_cta: "Anfrage senden",
        drawer_lang_title: "Sprache:",
        drawer_cta: "Anfrage senden",
        hero_location: "MOHELNICE • TSCHECHISCHE REPUBLIK",
        hero_tradition: "TRADITION SEIT 1994",
        hero_title: "Führender europäischer Hersteller von Trockenbausystem-Zubehör",
        hero_desc: "DK mont a.s. ist der führende Hersteller von Metallzubehör für Trockenbaukonstruktionen in Mitteleuropa. Unser zertifiziertes PROFIFIX®-System steht für höchste Präzision, Stabilität und verlässliche Partnerschaften in über 15 europäischen Ländern.",
        hero_btn_catalog: "Produktkatalog erkunden",
        hero_btn_contact: "Vertriebsteam kontaktieren",
        hero_feat1: "Eigener Werkzeugbau und Hochgeschwindigkeitsstanzanlagen",
        hero_feat2: "Zertifizierter DX51D-Stahl mit garantierter Verzinkung",
        hero_feat3: "Auslieferungslager mit garantierter Belieferung für den Großhandel",
        metric1_title: "TOP 35% EcoVadis-Bewertung",
        metric1_desc: "Internationale Bronzemedaille für verantwortungsvollen Umgang mit Umwelt, Menschenrechten, Ethik und nachhaltiger Beschaffung.",
        metric2_title: "Jahre Branchenerfahrung",
        metric2_desc: "Kontinuierliche Entwicklung und Fertigung seit 1994 mit starker Marktpräsenz in Europa.",
        metric3_title: "Qualifizierte Mitarbeiter",
        metric3_desc: "Team aus erfahrenen Werkzeugmachern, Einrichtern, Qualitätstechnikern und Logistikspezialisten.",
        metric4_title: "ISO-Zertifizierungen",
        metric4_desc: "ISO 9001 (Qualität), ISO 14001 (Umweltmanagement) und ISO/IEC 27001 (Informationssicherheit).",
        sec_excellence_sub: "FERTIGUNGSEXZELLENZ",
        sec_excellence_title: "Technologische Basis und PROFIFIX®-Philosophie",
        sec_excellence_lead: "Jedes Bauteil aus unserer Fertigung in Mohelnice durchläuft strenge Maß- und Festigkeitsprüfungen. Wir erleichtern Montageunternehmen in ganz Europa die Arbeit.",
        bento1_tag: "SCHNELLIGKEIT & STABILITÄT",
        bento1_title: "Hochwertige Beschläge und Abhänger sparen Bauzeit",
        bento1_desc: "DK mont PROFIFIX® Systemelemente werden in Zusammenarbeit mit Trockenbauprofis entwickelt. Verstärkte Sicken erhöhen die Tragkraft und verhindern Rissbildung in Gipsplatten.",
        bento1_item1: "<strong>Präziser Sitz:</strong> Kompatibel mit CD 60/27, UD 28 Profilen und Holzbalken.",
        bento1_item2: "<strong>Korrosionsschutz:</strong> Feuerverzinktes Stahlband der Güteklasse DX51D.",
        bento1_item3: "<strong>Sichere Handhabung:</strong> Entgratete Kanten zum Schutz der Monteure vor Schnittverletzungen.",
        bento2_tag: "AUTOMATISIERTE FERTIGUNG",
        bento2_title: "Eigene Stanzwerkzeuge und stabile Kapazitäten",
        bento2_desc: "Dank eigener Konstruktion und eigenem Werkzeugbau entwickeln wir Standardprodukte schnell weiter und fertigen kundenspezifische Stanzteile.",
        stat_exp_lbl: "Exportländer",
        stat_rec_lbl: "Recycelbarer Stahl",
        stat_ship_lbl: "Schnellversand",
        stat_norm_lbl: "Normkonformität",
        bento3_title: "Logistikzentrum Mohelnice",
        bento3_desc: "Großzügige Lagerflächen an der Hauptverkehrsachse I/35 sichern die zuverlässige Versorgung des Baustoffgroßhandels.",
        bento4_title: "ISO 27001 Informationssicherheit",
        bento4_desc: "Als eines der wenigen Unternehmen verfügen wir über die Zertifizierung nach ISO/IEC 27001 für optimalen Schutz von Kundendaten.",
        bento5_title: "Grüne Energie & Kreislaufwirtschaft",
        bento5_desc: "Wir nutzen betriebliche Photovoltaikanlagen und energiesparende Verfahren. Sämtlicher Stanzschrott wird vollständig recycelt.",
        sec_catalog_sub: "KOMPLETTES SORTIMENT",
        sec_catalog_title: "Interaktiver Katalog für PROFIFIX®-Metallzubehör",
        sec_catalog_lead: "Wählen Sie eine Kategorie oder suchen Sie nach einem Bauteil. Alle Produkte werden aus zertifiziertem Stahl gemäß EN 13964 hergestellt.",
        tab_all: "Alle Bauteile",
        tab_hangers: "Direkt- & Sparrenabhänger",
        tab_quick: "Schnellabhänger & Drähte",
        tab_connect: "CD-Profilverbinder",
        tab_nonius: "Nonius-System",
        tab_other: "Eckprofile & Zubehör",
        search_placeholder: "Bauteil, Maß, Artikelnummer suchen...",
        btn_spec: "Technische Daten",
        catalog_download_title: "Interessiert am vollständigen Datenblatt aller 36 Positionen?",
        catalog_download_desc: "Gerne senden wir Ihnen den Gesamtkatalog inklusive Belastungstabellen und Konformitätszertifikaten zu.",
        catalog_download_btn: "Gesamtkatalog als PDF anfordern",
        sec_certs_sub: "GEPRÜFTE QUALITÄT",
        sec_certs_title: "Internationale Zertifizierungen & Auszeichnungen",
        sec_certs_lead: "Unsere Fertigungsqualität wird regelmäßig von führenden Zertifizierungsstellen geprüft und entspricht europäischen Standards.",
        cert1_tag: "QUALITÄTSMANAGEMENT",
        cert1_desc: "Zertifiziertes Qualitätsmanagementsystem für gleichbleibend hohe Qualität jeder Fertigungscharge.",
        cert2_tag: "UMWELTMANAGEMENT",
        cert2_desc: "Umweltmanagement zur Minimierung des ökologischen Fußabdrucks und für nachhaltigen Ressourceneinsatz.",
        cert3_tag: "INFORMATIONSSICHERHEIT",
        cert3_desc: "Modernster Standard für Informationssicherheit zum Schutz industrieller Daten und digitaler Prozesse.",
        cert4_tag: "FINANZIELLE STABILITÄT",
        cert4_desc: "Auszeichnung unter den stabilsten und vertrauenswürdigsten Handelsunternehmen der Tschechischen Republik.",
        career_tag: "KARRIERE IN MOHELNICE",
        career_title: "Suchen Sie einen sicheren Arbeitsplatz in einem modernen Werk?",
        career_desc: "Bei DK mont a.s. setzen wir auf langfristige Beziehungen, faire Bedingungen und moderne Anlagen. Wir investieren kontinuierlich in unseren Maschinenpark.",
        career_perk1: "Sicherheit und Perspektive in einer prosperierenden tschechischen Aktiengesellschaft",
        career_perk2: "Modernes und sauberes Arbeitsumfeld mit hochmodernen Stanzanlagen",
        career_perk3: "Möglichkeiten zur beruflichen Weiterentwicklung und Qualifizierung",
        career_btn: "Offene Stellen ansehen",
        career_call_text: "Oder rufen Sie die Personalabteilung an: +420 602 484 401",
        career_badge_lbl: "Mitarbeiter am Produktions- und Logistikstandort Mohelnice",
        sec_contact_sub: "KONTAKTIEREN SIE UNS",
        sec_contact_title: "Vertriebs- und Logistikzentrum DK mont a.s.",
        sec_contact_lead: "Unser Vertriebsteam bearbeitet gerne Ihre Anfrage, stellt Mustersätze bereit oder vereinbart individuelle Großhandelskonditionen.",
        team_tag: "DIREKTER KONTAKT",
        team_card_title: "Vertriebs- & Technikerteam DK mont a.s.",
        team_card_desc: "Unsere Spezialisten für Auftragsbearbeitung, Kalkulationen und regionale Vertriebsrepräsentanten in Tschechien und der Slowakei.",
        team_group_hq: "Zentrale Mohelnice – Auftragsabwicklung & Vertriebsassistenz",
        team_group_reg: "Regionale Produktmanager für Tschechien und die Slowakei",
        badge_orders: "AUFTRÄGE",
        badge_support: "VERTRIEBSASSISTENZ",
        badge_mgr: "PRODUKTMANAGER",
        role_orders: "Auftragsannahme & Versand",
        role_support: "Kundensupport & kaufmännische Assistenz",
        role_pm_czsk: "Region: Tschechische Republik & Slowakei",
        role_pm_cz: "Region: Tschechische Republik",
        address_box_title: "Unternehmenssitz & Produktionswerk",
        address_label: "Standortadresse:",
        address_val: "Újezd 86, 789 85 Mohelnice, Tschechische Republik",
        hours_label: "Öffnungszeiten Versand:",
        hours_val: "Montag – Freitag: 06:00 – 14:30",
        billing_label: "Rechnungs- und Registerdaten:",
        billing_court: "Eingetragen beim Kreisgericht in Ostrava, Abteilung B, Einlage 2897",
        central_label: "Zentrale Verbindung:",
        reception_label: "Telefon Rezeption:",
        form_title: "Unverbindliche Anfrage und Sortiment",
        form_desc: "Füllen Sie das Formular aus. Die Nachricht wird in Ihrem E-Mail-Programm für unseren Vertrieb vorbereitet.",
        form_name_lbl: "Ihr Name und Firma *",
        form_phone_lbl: "Telefonnummer *",
        form_email_lbl: "E-Mail-Adresse *",
        form_cat_lbl: "Produktkategorie",
        form_msg_lbl: "Spezifikation / Stückzahl",
        form_msg_placeholder: "Geben Sie die geschätzte Menge, Lieferbedingungen oder Fragen an...",
        form_submit: "Anfrage an obchod@dkmont.cz senden",
        map_title: "Produktions-, Lager- und Versandareal Mohelnice",
        map_address_txt: "Újezd 86, 789 85 Mohelnice • Tschechische Republik",
        map_btn: "📍 Auf Mapy.cz öffnen",
        footer_rights: "© 2026 DK mont Aktiengesellschaft. Alle Rechte vorbehalten. Hersteller des zertifizierten PROFIFIX®-Systems.",
        footer_about: "Über uns",
        footer_catalog: "Katalog",
        footer_cert: "Zertifikate",
        footer_contact: "Kontakt",
        modal_inquire_btn: "Dieses Teil anfragen"
    },
    pl: {
        nav_about: "O firmie",
        nav_production: "Produkcja",
        nav_catalog: "Katalog",
        nav_cert: "Certyfikaty",
        nav_career: "Kariera",
        nav_contact: "Kontakt",
        nav_cta: "Zapytanie ofertowe",
        drawer_lang_title: "Język:",
        drawer_cta: "Wyślij zapytanie",
        hero_location: "MOHELNICE • REPUBLIKA CZESKA",
        hero_tradition: "TRADYCJA OD 1994 ROKU",
        hero_title: "Wiodący europejski producent akcesoriów do systemów gipsowo-kartonowych",
        hero_desc: "DK mont a.s. to największy producent metalowych akcesoriów montażowych do konstrukcji gipsowo-kartonowych w Europie Środkowej. Nasz certyfikowany system PROFIFIX® jest synonimem precyzji, trwałości i stabilnego partnerstwa w ponad 15 krajach Europy.",
        hero_btn_catalog: "Przeglądaj katalog produktów",
        hero_btn_contact: "Skontaktuj się z działem handlowym",
        hero_feat1: "Własna narzędziownia i szybkobieżne linie wykrawające",
        hero_feat2: "Certyfikowana stal DX51D z gwarantowaną powłoką cynkową",
        hero_feat3: "Magazyn centralny z gwarancją terminowych dostaw hurtowych",
        metric1_title: "TOP 35% oceny EcoVadis",
        metric1_desc: "Międzynarodowy brązowy medal za odpowiedzialne podejście do środowiska, praw człowieka, etyki i zrównoważonych zakupów.",
        metric2_title: "Lat doświadczenia w branży",
        metric2_desc: "Nieprzerwany rozwój, rozbudowa hal produkcyjnych w Mohelnicach i pozycja rzetelnego partnera dla dystrybutorów budowlanych.",
        metric3_title: "Wykwalifikowanych pracowników",
        metric3_desc: "Zespół doświadczonych narzędziowców, ustawiaczy pras, techników jakości i specjalistów logistyki dbających o każdy detal.",
        metric4_title: "Certyfikaty ISO",
        metric4_desc: "ISO 9001 (Jakość), ISO 14001 (Środowisko) oraz ISO/IEC 27001 (Bezpieczeństwo informacji).",
        sec_excellence_sub: "DOSKONAŁOŚĆ PRODUKCYJNA",
        sec_excellence_title: "Zaplecze technologiczne i filozofia systemu PROFIFIX®",
        sec_excellence_lead: "Każdy element z naszej produkcji w Mohelnicach przechodzi rygorystyczną kontrolę wymiarów i wytrzymałości. Ułatwiamy pracę montażystom w całej Europie.",
        bento1_tag: "SZYBKOŚĆ I WYTRZYMAŁOŚĆ",
        bento1_title: "Wysokiej jakości okucia i wieszaki oszczędzają czas na budowie",
        bento1_desc: "Elementy systemowe DK mont PROFIFIX® są projektowane we współpracy z profesjonalnymi montażystami. Wzmocnione przetłoczenia zwiększają nośność i zapobiegają pękaniu płyt.",
        bento1_item1: "<strong>Precyzyjne dopasowanie:</strong> Kompatybilność z profilami CD 60/27, UD 28 i belkami.",
        bento1_item2: "<strong>Ochrona antykorozyjna:</strong> Stal ocynkowana ogniowo klasy DX51D.",
        bento1_item3: "<strong>Bezpieczna obsługa:</strong> Zaokrąglone krawędzie chroniące instalatorów przed skaleczeniem.",
        bento2_tag: "AUTOMATYZACJA PRODUKCJI",
        bento2_title: "Własne tłoczniki i stabilna wydajność",
        bento2_desc: "Dzięki własnemu biuru konstrukcyjnemu i narzędziowni szybko modyfikujemy produkty i produkujemy elementy na zamówienie.",
        stat_exp_lbl: "Krajów eksportu",
        stat_rec_lbl: "Stal z recyklingu",
        stat_ship_lbl: "Szybka wysyłka",
        stat_norm_lbl: "Zgodność z normami",
        bento3_title: "Centrum Logistyczne Mohelnice",
        bento3_desc: "Duże powierzchnie magazynowe przy trasie I/35 zapewniają płynne zaopatrzenie hurtowni budowlanych.",
        bento4_title: "Bezpieczeństwo Informacji ISO 27001",
        bento4_desc: "Jako jedna z nielicznych firm posiadamy certyfikat ISO/IEC 27001 zapewniający ochronę danych klientów i procesów cyfrowych.",
        bento5_title: "Zielona energia i cyrkularność",
        bento5_desc: "Wykorzystujemy instalacje fotowoltaiczne i energooszczędne rozwiązania. Odpady stalowe w 100% trafiają z powrotem do hutnictwa.",
        sec_catalog_sub: "KOMPLETNY ASORTYMENT",
        sec_catalog_title: "Interaktywny katalog elementów metalowych PROFIFIX®",
        sec_catalog_lead: "Wybierz kategorię lub wyszukaj element. Wszystkie części produkujemy z certyfikowanej stali zgodnie z normą EN 13964.",
        tab_all: "Wszystkie elementy",
        tab_hangers: "Wieszaki bezpośrednie i krokwiowe",
        tab_quick: "Wieszaki obrotowe ze sprężyną",
        tab_connect: "Łączniki do profili CD",
        tab_nonius: "System Noniusz",
        tab_other: "Narożniki i akcesoria",
        search_placeholder: "Szukaj elementu, wymiaru, kodu...",
        btn_spec: "Specyfikacja techniczna",
        catalog_download_title: "Szukasz pełnej karty technicznej wszystkich 36 pozycji?",
        catalog_download_desc: "Chętnie prześlemy kompletny katalog montażowy wraz z tabelami obciążeń i certyfikatami zgodności.",
        catalog_download_btn: "Pobierz pełny katalog w PDF",
        sec_certs_sub: "SPRAWDZONA JAKOŚĆ",
        sec_certs_title: "Międzynarodowe certyfikaty i wyróżnienia",
        sec_certs_lead: "Jakość naszej produkcji jest regularnie audytowana przez wiodące jednostki certyfikujące zgodnie z normami europejskimi.",
        cert1_tag: "SYSTEM ZARZĄDZANIA JAKOŚCIĄ",
        cert1_desc: "Certyfikowany system zarządzania jakością gwarantujący stabilną jakość każdej partii produkcyjnej.",
        cert2_tag: "ZARZĄDZANIE ŚRODOWISKIEM",
        cert2_desc: "Zarządzanie środowiskowe minimalizujące ślad węglowy i promujące zrównoważone gospodarowanie odpadami.",
        cert3_tag: "BEZPIECZEŃSTWO INFORMACJI",
        cert3_desc: "Najnowszy standard bezpieczeństwa informacji chroniący dane przemysłowe i komunikację biznesową.",
        cert4_tag: "STABILNOŚĆ FINANSOWA",
        cert4_desc: "Miejsce w gronie najbardziej stabilnych i wiarygodnych przedsiębiorstw w Republice Czeskiej.",
        career_tag: "KARIERA W MOHELNICACH",
        career_title: "Szukasz stabilnej pracy w nowoczesnym zakładzie produkcyjnym?",
        career_desc: "W DK mont a.s. stawiamy na relacje długoterminowe i nowoczesne zaplecze. Stale modernizujemy park maszynowy i oferujemy zatrudnienie dla specjalistów.",
        career_perk1: "Stabilność i perspektywy w rozwijającej się czeskiej spółce akcyjnej",
        career_perk2: "Nowoczesne i czyste środowisko pracy z zaawansowanymi liniami tłoczącymi",
        career_perk3: "Możliwość rozwoju zawodowego, szkoleń i podnoszenia kwalifikacji",
        career_btn: "Zobacz wolne stanowiska",
        career_call_text: "Lub zadzwoń do działu kadr: +420 602 484 401",
        career_badge_lbl: "Pracowników w centrum produkcyjno-logistycznym w Mohelnicach",
        sec_contact_sub: "SKONTAKTUJ SIĘ Z NAMI",
        sec_contact_title: "Centrum Sprzedaży i Spedycji DK mont a.s.",
        sec_contact_lead: "Nasz zespół handlowy chętnie przygotuje ofertę, zestaw próbek lub indywidualne warunki hurtowe.",
        team_tag: "BEZPOŚREDNI KONTAKT",
        team_card_title: "Zespół handlowy i techniczny DK mont a.s.",
        team_card_desc: "Nasi specjaliści od zamówień, kalkulacji oraz regionalni przedstawiciele handlowi w Czechach i na Słowacji.",
        team_group_hq: "Centrala Mohelnice – Zamówienia i Wsparcie sprzedaży",
        team_group_reg: "Regionalni Menedżerowie Produktu na Czechy i Słowację",
        badge_orders: "ZAMÓWIENIA",
        badge_support: "WSPARCIE SPRZEDAŻY",
        badge_mgr: "MENEDŻER PRODUKTU",
        role_orders: "Przyjmowanie zamówień i spedycja",
        role_support: "Wsparcie klienta i obsługa handlowa",
        role_pm_czsk: "Region: Czechy i Słowacja",
        role_pm_cz: "Region: Republika Czeska",
        address_box_title: "Siedziba i zakład produkcyjny",
        address_label: "Adres zakładu:",
        address_val: "Újezd 86, 789 85 Mohelnice, Republika Czeska",
        hours_label: "Godziny pracy spedycji:",
        hours_val: "Poniedziałek – Piątek: 06:00 – 14:30",
        billing_label: "Dane rejestrowe i fakturowe:",
        billing_court: "Sąd Okręgowy w Ostrawie, Dział B, Wpis 2897",
        central_label: "Kontakt centralny:",
        reception_label: "Telefon recepcji:",
        form_title: "Zapytanie ofertowe i asortyment",
        form_desc: "Wypełnij poniższy formularz. Wiadomość zostanie wstępnie przygotowana w Twoim programie pocztowym.",
        form_name_lbl: "Imię i nazwisko / Firma *",
        form_phone_lbl: "Numer telefonu *",
        form_email_lbl: "Adres e-mail *",
        form_cat_lbl: "Kategoria produktów",
        form_msg_lbl: "Szczegóły zapytania / ilość",
        form_msg_placeholder: "Wpisz szacowaną ilość, wymagania dostawy lub pytania...",
        form_submit: "Wyślij zapytanie do obchod@dkmont.cz",
        map_title: "Obszar produkcyjno-magazynowy i spedycyjny Mohelnice",
        map_address_txt: "Újezd 86, 789 85 Mohelnice • Republika Czeska",
        map_btn: "📍 Otwórz na Mapy.cz",
        footer_rights: "© 2026 DK mont spółka akcyjna. Wszelkie prawa zastrzeżone. Producent certyfikowanego systemu PROFIFIX®.",
        footer_about: "O firmě",
        footer_catalog: "Katalog",
        footer_cert: "Certyfikaty",
        footer_contact: "Kontakt",
        modal_inquire_btn: "Zapytaj o ten element"
    }
};

function setLanguage(lang) {
    if (lang === "cz") lang = "cs";
    if (!translations[lang]) return;
    try {
        localStorage.setItem("selected_lang_dkmont", lang);
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.setAttribute("placeholder", translations[lang][key]);
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
        const saved = localStorage.getItem("selected_lang_dkmont");
        if (saved && translations[saved]) {
            setLanguage(saved);
        }
    } catch (e) {}
});
