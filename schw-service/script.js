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
                observer.unobserve(entry.target);
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target') || counter.textContent, 10);
                    if (isNaN(target)) return;
                    counter.textContent = '0';
                    const duration = 1600;
                    const startTime = performance.now();
                    function update(now) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);
                        if (progress < 1) {
                            counter.textContent = current;
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = target;
                        }
                    }
                    requestAnimationFrame(update);
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
        btn.textContent = '✓';
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
        logo_tag: "CNC OBRÁBĚNÍ • OD 1994",
        nav_home: "Úvod",
        nav_story: "Historie",
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
        hero_mach_live: "ONLINE V PROVOZU",
        hero_strip1: "POJEZD Y",
        hero_strip2: "TOČNÁ DÉLKA",
        hero_strip3: "SKLÍČIDLO",
        hero_strip4: "MAX. TYČ",
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
        tnow_year: "Dnes",
        tnow_title: "Stabilní dodavatel pro lídry českého i evropského průmyslu",
        tnow_desc: "Desítky tisíc vyrobených přesných komponentů ročně s přenosem taveb materiálu a trvalá podpora mladých talentů v kartingu.",
        hall_caption: "Hlavní výrobní hala S.CH.W. SERVICE v Hanušovicích",
        cam_title: "CAM PROGRAMOVÁNÍ",
        cam_desc: "Veškerou přípravu a simulaci 3D obrábění realizujeme v profesionálním prostředí <strong>GibbsCAM</strong> s přímým generováním G-kódů pro řídicí systémy Siemens 840D a Mori Seiki M730BM.",
        sec_mach_sub: "TECHNICKÁ DOKUMENTACE STROJŮ",
        sec_mach_title: "STROJNÍ PARK <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "Pracujeme výhradně na prověřených japonských a korejských CNC strojích nejvyšší tuhosti s vnitřním chlazením vřetena a aktivním odměřováním.",
        mtab_all: "Všechny stroje (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-osá & Frézky (2)",
        mtab_hyu: "Hyundai & Ostatní (3)",
        m1_cat: "CNC SOUSTRUŽNICKÉ CENTRUM S OSOU Y",
        m2_cat: "CNC DLOUHÉ SOUSTRUŽNICKÉ CENTRUM S OSOU Y",
        m3_cat: "DVOUVŘETENOVÉ CNC CENTRUM S PROTIVŘETENEM",
        m4_cat: "5-OSÉ SIMULTÁNNÍ OBRÁBĚCÍ CENTRUM",
        m5_cat: "VERTIKÁLNÍ FRÉZOVACÍ CENTRUM",
        m6_cat: "VÝKONNÝ CNC SOUSTRUH",
        m7_cat: "TĚŽKÝ DVOUOSÝ CNC SOUSTRUH",
        m8_cat: "POPOUŠTĚCÍ A ŽÍHACÍ PEC",
        lbl_turn_len: "Točná délka:",
        lbl_turn_dia: "Max. točný průměr:",
        lbl_chuck: "Průměr sklíčidla:",
        lbl_bar: "Max. průměr tyče:",
        lbl_turret: "Počet poloh NH:",
        lbl_turret_live: "Poháněné polohy NH:",
        lbl_axis_x: "Rozsah osy X:",
        lbl_axis_y: "Rozsah osy Y:",
        lbl_axis_z: "Rozsah osy Z:",
        lbl_axis_xz: "Rozsah osy X / Z:",
        lbl_spindle1: "Vřeteno 1 (hlavní):",
        lbl_spindle2: "Vřeteno 2 (protivřeteno):",
        lbl_transfer: "Předání obrobku:",
        val_auto: "Automatické v cyklu",
        lbl_xyz: "Pojezdy X / Y / Z:",
        lbl_rapid: "Rychloposuv:",
        lbl_rpm: "Otáčky vřetena:",
        lbl_power: "Pohon vřetena:",
        lbl_table_bc: "Otočný stůl:",
        lbl_mag: "Zásobník nástrojů:",
        lbl_ctrl: "Řídicí systém:",
        lbl_table_sz: "Velikost stolu:",
        lbl_load: "Max. nosnost:",
        lbl_taper: "Kužel vřetene:",
        lbl_atc: "Výměna nástroje:",
        lbl_bore: "Kalibr vřetena:",
        lbl_gear: "Převodovka:",
        lbl_weight: "Hmotnost stroje:",
        lbl_tmax: "Maximální teplota:",
        lbl_trange: "Pracovní teplota:",
        lbl_vol: "Užitný objem:",
        lbl_dim: "Vnitřní rozměry:",
        lbl_power_in: "Elektrický příkon:",
        m1_foot: "Výkonné frézování na průměru i čele",
        m2_foot: "Obrábění dlouhých hřídelí a náprav",
        m3_foot: "Kompletní obrobení obou stran dílu",
        m4_foot: "Složité tvarové matrice, formy a díly",
        m5_foot: "Paletové provedení pro sériové frézování",
        m6_foot: "Robustní hrubování i přesné dokončování",
        m7_foot: "Extrémní tuhost pro velkorozměrové díly",
        m8_foot: "Žíhání na snížení pnutí a popouštění",
        sec_prod_sub: "ZAKÁZKOVÁ VÝROBA DLE VÝKRESU",
        sec_prod_title: "PORTFOLIO VÝROBKŮ <span>A MATERIÁLŮ</span>",
        sec_prod_lead: "Obrábíme díly od kusových prototypů po tisícové série z korozivzdorných, konstrukčních, zušlechtěných i nástrojových ocelí.",
        p_badge: "PRODUKT",
        p6_badge: "PROCES",
        p1_title: "Přesná nerezová pouzdra",
        p1_desc: "Broušené vnější i vnitřní průměry v tolerancích H7/h6, mazací drážky, kalení a cementování.",
        p1_l1: "Materiál: 1.4301, 1.4404, 1.4571",
        p1_l2: "Drsnost povrchu až Ra 0,4",
        p2_title: "Příruby a víka armatur",
        p2_desc: "Kombinované soustružení s vrtáním roztečných kružnic, závitováním a frézováním těsnicích drážek.",
        p2_l1: "Do průměru Ø 560 mm",
        p2_l2: "Pro tlakové řady PN16 až PN400",
        p3_title: "Hřídele a vřetena",
        p3_desc: "Dlouhé hřídele s drážkami pro pera, jemnými závity a broušenými ložiskovými čepy na stroji NL 3000Y.",
        p3_l1: "Délka dílu až 1 250 mm",
        p3_l2: "Dynamické vyvažování",
        p4_title: "Tvarové matrice a razníky",
        p4_desc: "Komplexní 5-osé frézování kalených ocelí na centru DMG DMU 50 eVolution v prostředí Siemens 840D.",
        p4_l1: "Oceli 1.2379, 1.2343, 1.2083",
        p4_l2: "Tvrdost po kalení až 62 HRC",
        p5_title: "Čepy, šrouby a spojovací prvky",
        p5_desc: "Vysokopevnostní spojovací materiál se speciálními závity, zápichy a povrchovými úpravami.",
        p5_l1: "Zušlechtěné oceli 42CrMo4, 16MnCr5",
        p5_l2: "Výroba přímo z tyčoviny",
        p6_title: "Kompletní metalurgický servis",
        p6_desc: "Garantujeme 100% sledovatelnost každého kusu s přenosem čísla tavby přímo na hotový obrobek.",
        p6_l1: "Hutní atesty 3.1 dle EN 10204",
        p6_l2: "Protokoly rozměrové kontroly",
        sec_gal_sub: "FOTODOKUMENTACE VÝROBY",
        sec_gal_title: "REÁLNÉ DÍLY <span>Z NAŠÍ DÍLNY</span>",
        sec_gal_lead: "Kliknutím na fotografii otevřete detail ve vysokém rozlišení (800 × 600 px).",
        g1_lbl: "PŘESNÉ SOUSTRUŽENÍ",
        g2_lbl: "FRÉZOVÁNÍ ZÁVITŮ",
        g3_lbl: "PŘÍRUBOVÝ DÍL",
        g4_lbl: "POUZDRO V TOLERANCI",
        g5_lbl: "ZÁVITOVÝ ČEP",
        g6_lbl: "KONTROLA JAKOSTI",
        g7_lbl: "HYDRAULICKÉ DÍLY",
        g8_lbl: "BROUŠENÁ HŘÍDEL",
        sec_ref_sub: "ODVĚTVÍ & APLIKACE",
        sec_ref_title: "KDE NAŠE DÍLY <span>SPOLEHLIVĚ PRACUJÍ</span>",
        r1_title: "Všeobecné strojírenství",
        r1_desc: "Dodávky hřídelí, převodových skříní, čepů a přírub pro výrobce průmyslových linek, jednoúčelových strojů a hydrauliky.",
        r2_title: "Chemický a petrochemický průmysl",
        r2_desc: "Přísně sledované díly z nerezových kyselinovzdorných ocelí AISI 316Ti / 1.4571 pro ventily, čerpadla a potrubní systémy.",
        r3_title: "Automobilový průmysl & Motorsport",
        r3_desc: "Kořeny v autokrosu a kartingu – výroba odlehčených vysoce namáhaných dílů náprav, těhlic a brzdových komponentů.",
        sec_contact_sub: "IDENTIFIKAČNÍ & FAKTURAČNÍ ÚDAJE",
        sec_contact_title: "KONTAKTUJTE <span>VÝROBNÍ TÝM</span>",
        comp_sub: "Zakázkové CNC obrábění kovů a strojírenská výroba",
        c_addr_lbl: "Sídlo & Provozovna:",
        c_map_open: "📍 Otevřít na Mapy.cz",
        btn_copy: "Kopírovat",
        c_bank_czk: "Bankovní účet (CZK):",
        c_bank_eur: "Účet EUR:",
        c_ds: "Datová schránka:",
        c_phone: "Telefon:",
        c_email: "E-mail poptávky:",
        form_head: "Poptávka CNC výroby",
        form_lead: "Zašlete nám výkresovou dokumentaci v PDF/STEP nebo specifikaci série. Odpovíme vám do 24 hodin.",
        opt_mat1: "Nerezová ocel (AISI 304 / 316Ti / 1.4404)",
        opt_mat2: "Konstrukční / Zušlechtěná ocel (42CrMo4)",
        opt_mat3: "Nástrojová ocel (1.2379 / 1.2343)",
        opt_mat4: "Jiné materiály (dural, mosaz, bronz)",
        form_submit: "Odeslat poptávku přes e-mail",
        map_bar_title: "📍 Výrobní areál S.CH.W. SERVICE, s.r.o. – Hlavní 73, 788 33 Hanušovice",
        map_bar_link: "Otevřít na Mapy.cz ↗",
        foot_top: "Zpět nahoru ↑"
    },
    en: {
        logo_tag: "CNC MACHINING • SINCE 1994",
        nav_home: "Home",
        nav_story: "History",
        nav_machines: "Machinery",
        nav_products: "Capabilities",
        nav_industries: "Industries",
        nav_gallery: "Parts & Gallery",
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
        hero_mach_live: "ONLINE IN OPERATION",
        hero_strip1: "Y-AXIS TRAVEL",
        hero_strip2: "TURNING LENGTH",
        hero_strip3: "CHUCK SIZE",
        hero_strip4: "MAX BAR DIA",
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
        tnow_year: "Today",
        tnow_title: "Trusted Supplier for European Industrial Leaders",
        tnow_desc: "Tens of thousands of precision parts produced annually with full heat melt traceability and support for young karting talents.",
        hall_caption: "Main CNC Production Hall of S.CH.W. SERVICE in Hanušovice",
        cam_title: "CAM PROGRAMMING",
        cam_desc: "All 3D toolpath preparation and simulation is performed in <strong>GibbsCAM</strong> with direct post-processing for Siemens 840D and Mori Seiki M730BM controls.",
        sec_mach_sub: "TECHNICAL MACHINE SPECIFICATIONS",
        sec_mach_title: "CNC MACHINE FLEET <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "We operate exclusively proven Japanese and Korean high-rigidity CNC machines with through-spindle coolant and active probing.",
        mtab_all: "All Machines (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-Axis & Milling (2)",
        mtab_hyu: "Hyundai & Other (3)",
        m1_cat: "CNC TURNING CENTER WITH Y-AXIS",
        m2_cat: "LONG-BED CNC TURNING CENTER WITH Y-AXIS",
        m3_cat: "TWIN-SPINDLE CNC CENTER WITH SUB-SPINDLE",
        m4_cat: "5-AXIS SIMULTANEOUS MACHINING CENTER",
        m5_cat: "VERTICAL MILLING CENTER",
        m6_cat: "HIGH-PERFORMANCE CNC LATHE",
        m7_cat: "HEAVY-DUTY 2-AXIS CNC LATHE",
        m8_cat: "TEMPERING & ANNEALING FURNACE",
        lbl_turn_len: "Turning length:",
        lbl_turn_dia: "Max. turning dia:",
        lbl_chuck: "Chuck diameter:",
        lbl_bar: "Max. bar capacity:",
        lbl_turret: "Turret stations:",
        lbl_turret_live: "Driven tool stations:",
        lbl_axis_x: "X-axis travel:",
        lbl_axis_y: "Y-axis travel:",
        lbl_axis_z: "Z-axis travel:",
        lbl_axis_xz: "X / Z travel:",
        lbl_spindle1: "Main spindle:",
        lbl_spindle2: "Sub-spindle:",
        lbl_transfer: "Part transfer:",
        val_auto: "Automated in-cycle",
        lbl_xyz: "X / Y / Z travels:",
        lbl_rapid: "Rapid traverse:",
        lbl_rpm: "Spindle speed:",
        lbl_power: "Spindle drive:",
        lbl_table_bc: "Rotary table:",
        lbl_mag: "Tool magazine:",
        lbl_ctrl: "Control system:",
        lbl_table_sz: "Table size:",
        lbl_load: "Max. table load:",
        lbl_taper: "Spindle taper:",
        lbl_atc: "Tool change:",
        lbl_bore: "Spindle bore:",
        lbl_gear: "Gearbox:",
        lbl_weight: "Machine weight:",
        lbl_tmax: "Max. temperature:",
        lbl_trange: "Working range:",
        lbl_vol: "Chamber volume:",
        lbl_dim: "Internal dimensions:",
        lbl_power_in: "Power input:",
        m1_foot: "Heavy-duty off-center & face milling",
        m2_foot: "Machining of long shafts and axles",
        m3_foot: "Complete front & back machining in one cycle",
        m4_foot: "Complex 3D dies, molds and precision parts",
        m5_foot: "Twin-pallet setup for series milling",
        m6_foot: "Rigid roughing and precision finishing",
        m7_foot: "Extreme rigidity for large-diameter parts",
        m8_foot: "Stress-relief annealing and tempering",
        sec_prod_sub: "CUSTOM MANUFACTURING PER DRAWING",
        sec_prod_title: "PRODUCT PORTFOLIO <span>& MATERIALS</span>",
        sec_prod_lead: "We machine components from single prototypes to multi-thousand series in stainless, structural, heat-treated and tool steels.",
        p_badge: "PRODUCT",
        p6_badge: "PROCESS",
        p1_title: "Precision Stainless Bushings",
        p1_desc: "Ground outer and inner diameters in H7/h6 tolerances, lubrication grooves, hardening and case-hardening.",
        p1_l1: "Material: 1.4301, 1.4404, 1.4571",
        p1_l2: "Surface finish up to Ra 0.4",
        p2_title: "Flanges & Valve Covers",
        p2_desc: "Combined turning with bolt-circle drilling, threading and sealing groove milling.",
        p2_l1: "Up to Ø 560 mm diameter",
        p2_l2: "Pressure ratings PN16 to PN400",
        p3_title: "Shafts & Spindles",
        p3_desc: "Long shafts with keyways, fine threads and ground bearing journals on the NL 3000Y center.",
        p3_l1: "Part length up to 1,250 mm",
        p3_l2: "Dynamic balancing available",
        p4_title: "Contoured Dies & Punches",
        p4_desc: "Complex 5-axis milling of hardened tool steels on DMG DMU 50 eVolution with Siemens 840D.",
        p4_l1: "Tool steels 1.2379, 1.2343, 1.2083",
        p4_l2: "Hardness up to 62 HRC",
        p5_title: "Pins, Bolts & Fasteners",
        p5_desc: "High-tensile fasteners with special threads, undercuts and protective surface treatments.",
        p5_l1: "Alloy steels 42CrMo4, 16MnCr5",
        p5_l2: "Automated bar-fed production",
        p6_title: "Full Metallurgical Traceability",
        p6_desc: "We guarantee 100% traceability of every piece with heat melt numbers transferred onto finished parts.",
        p6_l1: "EN 10204 3.1 mill certificates",
        p6_l2: "Dimensional inspection protocols",
        sec_gal_sub: "PRODUCTION PHOTO GALLERY",
        sec_gal_title: "REAL PARTS <span>FROM OUR SHOP</span>",
        sec_gal_lead: "Click any photo to view high-resolution detail (800 × 600 px).",
        g1_lbl: "PRECISION TURNING",
        g2_lbl: "THREAD MILLING",
        g3_lbl: "FLANGE COMPONENT",
        g4_lbl: "TOLERANCE BUSHING",
        g5_lbl: "THREADED PIN",
        g6_lbl: "QUALITY CONTROL",
        g7_lbl: "HYDRAULIC PARTS",
        g8_lbl: "GROUND SHAFT",
        sec_ref_sub: "INDUSTRIES & APPLICATIONS",
        sec_ref_title: "WHERE OUR PARTS <span>PERFORM RELIABLY</span>",
        r1_title: "General Mechanical Engineering",
        r1_desc: "Supply of shafts, gear housings, pins and flanges for builders of industrial lines, special-purpose machinery and hydraulics.",
        r2_title: "Chemical & Petrochemical Industry",
        r2_desc: "Strictly traceable components made of acid-resistant stainless steels AISI 316Ti / 1.4571 for valves, pumps and piping.",
        r3_title: "Automotive & Motorsport",
        r3_desc: "Roots in autocross and karting – manufacturing lightweight, high-stress axle parts, uprights and braking components.",
        sec_contact_sub: "IDENTIFICATION & BILLING DETAILS",
        sec_contact_title: "CONTACT OUR <span>PRODUCTION TEAM</span>",
        comp_sub: "Custom CNC Metal Machining & Engineering Production",
        c_addr_lbl: "Headquarters & Plant:",
        c_map_open: "📍 Open on Mapy.cz",
        btn_copy: "Copy",
        c_bank_czk: "Bank Account (CZK):",
        c_bank_eur: "EUR Account:",
        c_ds: "Data Box ID:",
        c_phone: "Phone:",
        c_email: "RFQ E-mail:",
        form_head: "CNC Production Inquiry",
        form_lead: "Send us your CAD drawings (PDF/STEP) or batch specifications. We respond within 24 hours.",
        opt_mat1: "Stainless steel (AISI 304 / 316Ti / 1.4404)",
        opt_mat2: "Structural / Alloy steel (42CrMo4)",
        opt_mat3: "Tool steel (1.2379 / 1.2343)",
        opt_mat4: "Other materials (aluminum, brass, bronze)",
        form_submit: "Send RFQ via E-mail",
        map_bar_title: "📍 Production Plant S.CH.W. SERVICE, s.r.o. – Hlavní 73, 788 33 Hanušovice",
        map_bar_link: "Open on Mapy.cz ↗",
        foot_top: "Back to top ↑"
    },
    de: {
        logo_tag: "CNC-ZERSPANUNG • SEIT 1994",
        nav_home: "Start",
        nav_story: "Historie",
        nav_machines: "Maschinenpark",
        nav_products: "Fertigung",
        nav_industries: "Branchen",
        nav_gallery: "Teile & Galerie",
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
        hero_mach_live: "IM LAUFENDEN BETRIEB",
        hero_strip1: "Y-ACHSE",
        hero_strip2: "DREHLÄNGE",
        hero_strip3: "SPANNMITTEL",
        hero_strip4: "STANGEN-Ø",
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
        tnow_year: "Heute",
        tnow_title: "Zuverlässiger Partner der europäischen Industrie",
        tnow_desc: "Zehntausende Präzisionsteile jährlich mit Schmelzenrückverfolgbarkeit sowie Nachwuchsförderung im Kartsport.",
        hall_caption: "Haupthalle der CNC-Fertigung S.CH.W. SERVICE in Hanušovice",
        cam_title: "CAM-PROGRAMMIERUNG",
        cam_desc: "Die gesamte 3D-Programmierung und Simulation erfolgt in <strong>GibbsCAM</strong> für Siemens 840D und Mori Seiki M730BM Steuerungen.",
        sec_mach_sub: "TECHNISCHE DOKUMENTATION",
        sec_mach_title: "MASCHINENPARK <span>S.CH.W. SERVICE</span>",
        sec_mach_lead: "Wir arbeiten ausschließlich auf hochsteifen japanischen und koreanischen CNC-Maschinen mit Innenkühlung und Messtastern.",
        mtab_all: "Alle Maschinen (8)",
        mtab_mori: "Mori Seiki (3)",
        mtab_mill: "5-Achs & Fräsen (2)",
        mtab_hyu: "Hyundai & Sonstige (3)",
        m1_cat: "CNC-DREHZENTRUM MIT Y-ACHSE",
        m2_cat: "LANGBETT-CNC-DREHZENTRUM MIT Y-ACHSE",
        m3_cat: "ZWEISPINDEL-CNC-ZENTRUM MIT GEGENSPINDEL",
        m4_cat: "5-ACHS-SIMULTAN-BEARBEITUNGSZENTRUM",
        m5_cat: "VERTIKALES FRÄSZENTRUM",
        m6_cat: "LEISTUNGSSTARKE CNC-DREHMASCHINE",
        m7_cat: "SCHWERE 2-ACHS-CNC-DREHMASCHINE",
        m8_cat: "ANLASS- UND GLÜHOFEN",
        lbl_turn_len: "Drehlänge:",
        lbl_turn_dia: "Max. Drehdurchmesser:",
        lbl_chuck: "Futterdurchmesser:",
        lbl_bar: "Max. Stangendurchmesser:",
        lbl_turret: "Revolverplätze:",
        lbl_turret_live: "Angetriebene Werkzeuge:",
        lbl_axis_x: "Verfahrweg X:",
        lbl_axis_y: "Verfahrweg Y:",
        lbl_axis_z: "Verfahrweg Z:",
        lbl_axis_xz: "Verfahrweg X / Z:",
        lbl_spindle1: "Hauptspindel:",
        lbl_spindle2: "Gegenspindel:",
        lbl_transfer: "Werkstückübergabe:",
        val_auto: "Automatisch im Zyklus",
        lbl_xyz: "Verfahrwege X / Y / Z:",
        lbl_rapid: "Eilgang:",
        lbl_rpm: "Spindeldrehzahl:",
        lbl_power: "Spindelantrieb:",
        lbl_table_bc: "Schwenkrundtisch:",
        lbl_mag: "Werkzeugmagazin:",
        lbl_ctrl: "Steuerung:",
        lbl_table_sz: "Tischgröße:",
        lbl_load: "Max. Tischbelastung:",
        lbl_taper: "Spindelaufnahme:",
        lbl_atc: "Werkzeugwechsel:",
        lbl_bore: "Spindelbohrung:",
        lbl_gear: "Getriebe:",
        lbl_weight: "Maschinengewicht:",
        lbl_tmax: "Maximaltemperatur:",
        lbl_trange: " Arbeitstemperatur:",
        lbl_vol: "Nutzvolumen:",
        lbl_dim: "Innenmaße:",
        lbl_power_in: "Anschlussleistung:",
        m1_foot: "Leistungsstarkes Mantel- und Stirnfräsen",
        m2_foot: "Bearbeitung langer Wellen und Achsen",
        m3_foot: "Komplettbearbeitung beider Seiten im Zyklus",
        m4_foot: "Komplexe 3D-Matrizen, Formen und Präzisionsteile",
        m5_foot: "Palettenwechsler für die Serienfertigung",
        m6_foot: "Robustes Schruppen und präzises Schlichten",
        m7_foot: "Maximale Steifigkeit für Großdrehteile",
        m8_foot: "Spannungsarmglühen und Anlassen",
        sec_prod_sub: "AUFTRAGSFERTIGUNG NACH ZEICHNUNG",
        sec_prod_title: "PRODUKTPORTFOLIO <span>& WERKSTOFFE</span>",
        sec_prod_lead: "Wir fertigen Drehteile und Frästeile vom Einzelprototyp bis zur Großserie aus Edelstahl, Baustahl, Vergütungsstahl und Werkzeugstahl.",
        p_badge: "PRODUKT",
        p6_badge: "PROZESS",
        p1_title: "Präzisionsbuchsen aus Edelstahl",
        p1_desc: "Geschliffene Außen- und Innendurchmesser in Toleranz H7/h6, Schmiernuten, Härten und Einsatzhärten.",
        p1_l1: "Werkstoff: 1.4301, 1.4404, 1.4571",
        p1_l2: "Oberflächenrauheit bis Ra 0,4",
        p2_title: "Flansche & Armaturendeckel",
        p2_desc: "Kombiniertes Drehen mit Lochkreisbohren, Gewindeschneiden und Dichtnutfräsen.",
        p2_l1: "Bis Durchmesser Ø 560 mm",
        p2_l2: "Für Druckstufen PN16 bis PN400",
        p3_title: "Wellen & Spindeln",
        p3_desc: "Lange Wellen mit Paßfedernuten, Feingewinden und geschliffenen Lagersitzen auf der NL 3000Y.",
        p3_l1: "Bauteillänge bis 1.250 mm",
        p3_l2: "Dynamisches Auswuchten",
        p4_title: "Formmatrizen & Stempel",
        p4_desc: "Komplexe 5-Achs-Fräsbearbeitung gehärteter Werkzeugstähle auf DMG DMU 50 eVolution.",
        p4_l1: "Stähle 1.2379, 1.2343, 1.2083",
        p4_l2: "Härte nach Wärmebehandlung bis 62 HRC",
        p5_title: "Bolzen, Schrauben & Verbindungselemente",
        p5_desc: "Hochfeste Verbindungselemente mit Sondergewinden, Freistichen und Oberflächenschutz.",
        p5_l1: "Vergütungsstähle 42CrMo4, 16MnCr5",
        p5_l2: "Fertigung direkt von der Stange",
        p6_title: "Metallurgische Rückverfolgbarkeit",
        p6_desc: "Wir garantieren 100 % Rückverfolgbarkeit jedes Bauteils mit Übertragung der Schmelzennummer.",
        p6_l1: "Abnahmeprüfzeugnis 3.1 nach EN 10204",
        p6_l2: "Messprotokolle der Ausgangskontrolle",
        sec_gal_sub: "FOTODOKUMENTATION DER FERTIGUNG",
        sec_gal_title: "REALE BAUTEILE <span>AUS UNSEREM WERK</span>",
        sec_gal_lead: "Klicken Sie auf ein Foto, um die Detailansicht in hoher Auflösung (800 × 600 px) zu öffnen.",
        g1_lbl: "PRÄZISIONSDREHEN",
        g2_lbl: "GEWINDEFRÄSEN",
        g3_lbl: "FLANSCHTEIL",
        g4_lbl: "PASSUNGSBUCHSE",
        g5_lbl: "GEWINDEBOLZEN",
        g6_lbl: "QUALITÄTSKONTROLLE",
        g7_lbl: "HYDRAULIKTEILE",
        g8_lbl: "GESCHLIFFENE WELLE",
        sec_ref_sub: "BRANCHEN & ANWENDUNGEN",
        sec_ref_title: "WO UNSERE BAUTEILE <span>ZUVERLÄSSIG ARBEITEN</span>",
        r1_title: "Allgemeiner Maschinenbau",
        r1_desc: "Lieferung von Wellen, Getriebegehäusen, Bolzen und Flanschen für Hersteller von Industrieanlagen, Sondermaschinen und Hydraulik.",
        r2_title: "Chemische & Petrochemische Industrie",
        r2_desc: "Streng überwachte Bauteile aus säurebeständigen Edelstählen AISI 316Ti / 1.4571 für Ventile, Pumpen und Rohrleitungssysteme.",
        r3_title: "Automobilindustrie & Motorsport",
        r3_desc: "Wurzeln im Autocross und Kartsport – Fertigung gewichtsoptimierter, hochbelasteter Achsteile, Achsschenkel und Bremskomponenten.",
        sec_contact_sub: "IDENTIFIKATIONS- & RECHNUNGSDATEN",
        sec_contact_title: "KONTAKTIEREN SIE UNSER <span>FERTIGUNGSTEAM</span>",
        comp_sub: "CNC-Lohnfertigung und metallverarbeitende Produktion",
        c_addr_lbl: "Sitz & Betriebsstätte:",
        c_map_open: "📍 Auf Mapy.cz öffnen",
        btn_copy: "Kopieren",
        c_bank_czk: "Bankkonto (CZK):",
        c_bank_eur: "EUR-Konto:",
        c_ds: "Datenbox-ID:",
        c_phone: "Telefon:",
        c_email: "Anfrage-E-Mail:",
        form_head: "CNC-Fertigungsanfrage",
        form_lead: "Senden Sie uns Ihre Zeichnungsdokumentation (PDF/STEP) oder Serienspezifikation. Wir antworten innerhalb von 24 Stunden.",
        opt_mat1: "Edelstahl (AISI 304 / 316Ti / 1.4404)",
        opt_mat2: "Baustahl / Vergütungsstahl (42CrMo4)",
        opt_mat3: "Werkzeugstahl (1.2379 / 1.2343)",
        opt_mat4: "Sonstige Werkstoffe (Alu, Messing, Bronze)",
        form_submit: "Anfrage per E-Mail senden",
        map_bar_title: "📍 Produktionswerk S.CH.W. SERVICE, s.r.o. – Hlavní 73, 788 33 Hanušovice",
        map_bar_link: "Auf Mapy.cz öffnen ↗",
        foot_top: "Nach oben ↑"
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

    const placeholders = {
        cs: {
            inqName: "Jméno a příjmení / Firma",
            inqEmail: "E-mail",
            inqPhone: "Telefon",
            inqMsg: "Popis dílu, počet kusů, požadovaný termín a tolerance..."
        },
        en: {
            inqName: "Full Name / Company",
            inqEmail: "E-mail",
            inqPhone: "Phone",
            inqMsg: "Part description, batch size, required lead time and tolerances..."
        },
        de: {
            inqName: "Vor- und Nachname / Firma",
            inqEmail: "E-Mail",
            inqPhone: "Telefon",
            inqMsg: "Bauteilbeschreibung, Stückzahl, Liefertermin und Toleranzen..."
        }
    };
    if (placeholders[lang]) {
        Object.keys(placeholders[lang]).forEach(id => {
            const input = document.getElementById(id);
            if (input) input.setAttribute("placeholder", placeholders[lang][id]);
        });
    }
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
