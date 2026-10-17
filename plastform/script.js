document.addEventListener("DOMContentLoaded", function () {
  const TECH_DATA = {"mat-hps": {"id": "mat-hps", "category": "materialy", "category_name": "Materiály a desky", "title": "Houževnatý polystyren (HPS / HIPS)", "subtitle": "Termoplast pro vakuové tvarování a vstřikování", "short_desc": "Vynikající rozměrová stabilita, snadné vakuové tvarování a mechanická odolnost pro technické díly a obaly.", "full_desc": "HPS (High Impact Polystyrene) je modifikovaný polystyren s přídavkem polybutadienového kaučuku, který materiálu dodává vysokou rázovou houževnatost při zachování tuhosti a výborné tepelné tvarovatelnosti. Používá se pro výrobu přepravních proložek, vnitřních obložení, krytů a technických výlisků s požadavkem na přesné rozměry a hladký povrch.", "image": "assets/mat_hps.svg", "specs": {"Hustota": "1,04 – 1,06 g/cm³", "Pevnost v tahu": "22 – 32 MPa", "Vrubová houževnatost (Charpy)": "8 – 15 kJ/m²", "Teplotní odolnost (Vicat)": "85 – 98 °C", "Tloušťky desek": "0,5 – 8,0 mm", "Způsob zpracování": "Vakuové tvarování, vstřikování, frézování"}, "benefits": ["Vysoká rázová houževnatost za normálních teplot", "Vynikající tvarová stálost a snadné opracování", "Ideální podklad pro potisk, značení a lepení", "Zdravotní nezávadnost a 100% recyklovatelnost"]}, "mat-abs": {"id": "mat-abs", "category": "materialy", "category_name": "Materiály a desky", "title": "Akrylonitrilbutadienstyren (ABS)", "subtitle": "Konstrukční termoplast s extrémní rázovou odolností", "short_desc": "Konstrukční materiál s vysokou mechanickou pevností, odolností vůči otěru i chemikáliím pro náročné průmyslové aplikace.", "full_desc": "ABS kombinuje pevnost a tuhost akrylonitrilu a styrenu s houževnatostí butadienového kaučuku. Vykazuje vynikající rázovou odolnost i při nízkých teplotách (až -40 °C), rozměrovou stálost a odolnost vůči kyselinám, louhům i olejům. Vhodné pro automobilový průmysl, přístrojové kryty a vysoce namáhané prvky.", "image": "assets/mat_abs.svg", "specs": {"Hustota": "1,05 – 1,08 g/cm³", "Pevnost v tahu": "35 – 50 MPa", "Vrubová houževnatost": "15 – 30 kJ/m²", "Teplotní rozsah": "-40 °C až +85 °C (krátkodobě 100 °C)", "Smrštění při vstřikování": "0,4 – 0,7 %", "Zpracování": "Vstřikování do forem, termoforming"}, "benefits": ["Vysoká odolnost proti mechanickému poškození a otěru", "Stálost vlastností i při podbodových teplotách", "Snadná povrchová úprava (galvanizace, lakování)", "Vynikající elektroizolační vlastnosti"]}, "mat-pmma": {"id": "mat-pmma", "category": "materialy", "category_name": "Materiály a desky", "title": "Polymethylmethakrylát (PMMA / Plexisklo)", "subtitle": "Opticky čirý plast s 92% propustností světla", "short_desc": "Prvotřídní průhlednost, vysoká UV stabilita a odolnost vůči povětrnostním vlivům pro kryty přístrojů a optiku.", "full_desc": "PMMA nabízí nejvyšší optickou čistotu mezi technickými plasty. Nepodléhá žloutnutí na slunečním záření, je odolné vůči povětrnosti, UV záření a slabým kyselinám. Využívá se na transparentní ochranné kryty strojů, optické díly, světlovody a přístrojová okénka.", "image": "assets/mat_pmma.svg", "specs": {"Hustota": "1,18 – 1,20 g/cm³", "Propustnost světla": "92 % (čiré provedení)", "Index lomu": "1,49", "Pevnost v tahu": "65 – 75 MPa", "Teplota měknutí (Vicat)": "100 – 105 °C", "Zpracování": "Přesné vstřikování, laserové dělení, leštění"}, "benefits": ["Optická propustnost vyšší než u běžného skla", "Poloviční hmotnost ve srovnání se sklem", "Přirozená odolnost vůči UV záření a stárnutí", "Vynikající opracovatelnost a možnost leštění hran"]}, "mat-pe": {"id": "mat-pe", "category": "materialy", "category_name": "Materiály a desky", "title": "Polyethylen (HDPE / LDPE)", "subtitle": "Univerzální polymer s maximální chemickou odolností", "short_desc": "Nízká hustota, nulová nasákavost a špičková odolnost vůči agresivním chemikáliím, kapalinám i mrazu.", "full_desc": "Polyethylen se vyznačuje mimořádnou chemickou netečností, kluznými vlastnostmi a velmi nízkou absorpcí vody (< 0,01 %). HDPE nabízí vyšší tuhost a pevnost, zatímco LDPE vyniká flexibilitou a tažností. Ideální pro technické zátky, těsnění, průchodky a obalové prvky v průmyslu.", "image": "assets/mat_pe.svg", "specs": {"Hustota": "0,92 (LDPE) / 0,95 (HDPE) g/cm³", "Nasákavost vody": "< 0,01 %", "Tažnost při přetržení": "100 – 600 %", "Teplotní odolnost": "-50 °C až +80 °C", "Odolnost vůči chemikáliím": "Kyseliny, louhy, alkoholy, oleje", "Zpracování": "Vstřikování, rotační tvarování, vytlačování"}, "benefits": ["Fyziologická nezávadnost a atest pro styk s potravinami", "Vysoká rázová pevnost i za hlubokého mrazu", "Vynikající elektroizolační a dielektrické parametry", "Nulová koroze a snadná recyklovatelnost"]}, "mat-pvc": {"id": "mat-pvc", "category": "materialy", "category_name": "Materiály a desky", "title": "Polyvinylchlorid (PVC tvrdé i měkčené)", "subtitle": "Samozhášivý technický polymer s vysokou tuhostí", "short_desc": "Tvarově stálý, samozhášivý a pevný polymer s vynikající dielektrickou pevností a odolností proti opotřebení.", "full_desc": "Neměkčené PVC (PVC-U) nabízí mimořádnou tuhost, vysoký modul pružnosti a samozhášivou schopnost (třída hořlavosti V-0 dle UL94). Měkčené PVC (PVC-P) se uplatňuje u flexibilních manžet, kabelových vývodek a těsnicích profilů. Široké využití v elektrotechnice a strojírenství.", "image": "assets/mat_pvc.svg", "specs": {"Hustota": "1,38 – 1,45 g/cm³", "Modul pružnosti v tahu": "2500 – 3200 MPa", "Třída hořlavosti": "UL94 V-0 (samozhášivý)", "Dielektrická pevnost": "20 – 50 kV/mm", "Teplotní rozsah": "-10 °C až +60 °C", "Zpracování": "Vstřikování do forem, protlačování"}, "benefits": ["Samozhášivost bez nutnosti přísad retardérů", "Výjimečná dielektrická a elektrická izolace", "Vysoká odolnost vůči kyselinám a solným roztokům", "Dlouhá životnost a vysoká otěruvzdornost"]}, "mat-esd": {"id": "mat-esd", "category": "materialy", "category_name": "Materiály a desky", "title": "Antistatické a ESD vložky", "subtitle": "Řízený svod elektrostatického náboje pro elektroniku", "short_desc": "Ochrana citlivých elektronických a polovodičových součástek před elektrostatickým výbojem během výroby i transportu.", "full_desc": "ESD vložky a nosiče vyráběné z elektrostaticky disipativních nebo vodivých plastů (např. vodivý PS, ABS-ESD) zaručují bezpečný svod náboje a zamezují poškození čipů, desek plošných spojů a senzorů. Výlisky a platíčka jsou navrhovány přesně na míru manipulovaných komponent.", "image": "assets/mat_esd.svg", "specs": {"Povrchový odpor (Rs)": "10⁴ – 10⁹ Ω (disipativní / vodivý)", "Doba svodu náboje": "< 0,05 s na 100 V", "Základní polymery": "PS-ESD, ABS-ESD, PP vodivý", "Tloušťka stěny": "0,8 – 4,0 mm", "Kompatibilita": "Čisté prostory a automatizované linky", "Certifikace": "Shoda s ČSN EN 61340-5-1 (ESD ochrana)"}, "benefits": ["Spolehlivá ochrana před elektrostatickým výbojem", "Trvalé ESD vlastnosti nezávislé na vzdušné vlhkosti", "Přesné lůžkování součástek v zakázkových formách", "Stohovatelné a kompatibilní s robotickými zakladači"]}, "vstrikovani-engel": {"id": "vstrikovani-engel", "category": "vstrikovani", "category_name": "Vstřikování plastů", "title": "Vstřikování na lisech ENGEL a ESCHMAS", "subtitle": "Strojní park 10 vstřikovacích lisů 15 až 160 tun", "short_desc": "Sériová i malosériová produkce přesných plastových výlisků na rakouských lisech ENGEL s garancí stability rozměrů.", "full_desc": "V lisovně disponujeme ucelenou řadou vstřikovacích lisů ENGEL ES a ESCHMAS. Zahrnuje stroje ENGEL ES 15/25, ES 40/22, ES 30/50E, ES 50/50 E, ES 75/50 E, ES 50/100 E, ES 100/100, ESCHMAS 150/100 a CS 371/160. Lisovna je vybavena 2 drtičkami technologického odpadu, 4 sušičkami materiálu a perifériemi pro přesnou temperaci forem.", "image": "assets/tool_injection.svg", "specs": {"Uzavírací síly lisů": "15 tun až 160 tun (150 – 1600 kN)", "Instalované stroje": "ENGEL ES (7 typů), ESCHMAS 150, CS 371", "Sušení materiálu": "4 průmyslové sušičky granulátu", "Regenerace drtí": "2 rychloběžné drtičky vtoků", "Temperace forem": "Automatické termoregulační jednotky", "Kontrola procesu": "Mikroprocesorové řízení vstřikovacího cyklu"}, "benefits": ["Široký rozsah uzavíracích sil pro malé i střední díly", "Přesné dávkování a opakovatelnost parametrů vstřiku", "Ekologická bezodpadová recyklace čistých vtoků", "Komplexní systém temperace pro minimalizaci vnitřního pnutí"]}, "vyrobky-ovladaci": {"id": "vyrobky-ovladaci", "category": "vstrikovani", "category_name": "Vstřikování plastů", "title": "Ovládací prvky a normalizované díly", "subtitle": "Kličky, madla, ruční kola a průmyslové komponenty", "short_desc": "Výroba standardních i zákaznických ovládacích elementů pro strojírenství, zdravotnictví a elektrotechniku.", "full_desc": "Vyrábíme široký sortiment ovládacích elementů: ruční kolečka, hvězdicové matice, upínací páčky, madla, nožičky přístrojů a průchodky. Možnost zálisů kovových závitových vložek (mosaz, ocel, nerez) přímo při vstřikovacím procesu pro maximální mechanickou nosnost závitů.", "image": "assets/banner_feature1.png", "specs": {"Sortiment": "Rukojeti, matice, kola, kličky, záslepky", "Materiály těla": "Polyamid (PA6/PA66), PP, ABS, HPS", "Zálisové prvky": "Ocelové čepy, mosazná pouzdra M4 až M16", "Barevné provedení": "Standardní černá, barevné rozlišovací čepičky", "Povrchová struktura": "Jemná erozní krupice, leštěný povrch", "Sériovost": "Od desítek kusů po stotisícové série"}, "benefits": ["Ergonomický design a protiskluzový povrch dílů", "Pevné spojení kovového zálisu s plastovým tělem", "Vysoká odolnost vůči mastnotám a čisticím prostředkům", "Rychlá expedice typizovaných rozměrů ze skladu"]}, "nastrojarna-cad": {"id": "nastrojarna-cad", "category": "nastrojarna", "category_name": "Nástrojárna a formy", "title": "Konstrukce forem a CAD/CAM SolidWorks", "subtitle": "3D konstrukce forem, výpočet smrštění a simulace plnění", "short_desc": "Kompletní konstrukční pracoviště se systémem SolidWorks pro vývoj lisovacích forem od zadání dílu po CAM kód.", "full_desc": "Naše konstrukční kancelář navazuje na tradici přesné mechaniky Chronotechny a Meopty. Ve 3D CAD/CAM prostředí SolidWorks zpracováváme kompletní konstrukci vstřikovacích forem, střižných nástrojů a přípravků. Optimalizujeme geometrii dělicí roviny, vtokový systém, chlazení a odvětrání pro dosažení minimálního pracovního taktu.", "image": "assets/tool_cad.svg", "specs": {"Software": "SolidWorks 3D CAD / CAM", "Datové formáty": "STEP, IGES, Parasolid, DXF, DWG", "Typy forem": "Jednonásobné i vícenásobné, se stěrači a tahači", "Analýzy": "Kontrola úkosů, tlouštěk stěn a smrštění", "Výrobní dokumentace": "Kompletní výkresová a technologická data", "Tradice oboru": "Zkušenosti v přesné mechanice od roku 1990"}, "benefits": ["Eliminace konstrukčních chyb před zahájením výroby", "Přímé generování CNC kódů z 3D objemových modelů", "Možnost konstrukce formy podle dodaného vzorku dílu", "Vlastní archivace a evidence nástrojů zákazníků"]}, "lis-czr600": {"id": "lis-czr600", "category": "nastrojarna", "category_name": "Nástrojárna a formy", "title": "Nástrojářský hydraulický lis CZR 600 tun", "subtitle": "Těžká lisovací síla pro lícování a zkoušení velkých forem", "short_desc": "Robustní hydraulický lis s uzavírací silou 6000 kN pro přesné zalisování, lícování dělicích rovin a zkušební lisování.", "full_desc": "Hydraulický lis CZR s kapacitou 600 tun tvoří pilíř nástrojárny pro manipulaci a lícování rozměrných a těžkých vstřikovacích i lisovacích forem. Umožňuje přesné ověření těsnosti dělicích rovin, kontrolu záběru vodících sloupků a zkoušky tvarovacích desek pod reálným pracovním tlakem.", "image": "assets/tool_press.svg", "specs": {"Lisovací síla": "600 tun (6 000 kN)", "Typ lisu": "Hydraulický čtyřsloupový nástrojářský", "Upínací plocha stolu": "Velkoformátové desky pro těžké formy", "Využití": "Lícování dělicích rovin, zkoušení nástrojů", "Pohon": "Vysokotlaký hydraulický agregát s regulací", "Umístění": "Výrobní hala Cejl 29/76, Brno"}, "benefits": ["Záruka dokonalé těsnosti dělicí roviny před expedicí", "Ověření chodu vyhazovacího a tahačového systému", "Schopnost servisovat i těžké nástroje externích lisoven", "Vysoká bezpečnost a stabilita pracovního stolu"]}, "laser-yag": {"id": "laser-yag", "category": "laser", "category_name": "Laserové technologie", "title": "Laserový navařovací systém YAG QR 150", "subtitle": "Mikropřesné navařování nástrojů s vlnovou délkou 1064 nm", "short_desc": "Precizní navařování poškozených nebo opotřebených tvarových částí forem bez vzniku vnitřního pnutí a prasklin.", "full_desc": "Laserový systém Nd:YAG QR 150 s vlnovou délkou 1064 nm představuje vrchol technologií pro renovaci nástrojů. Na rozdíl od zastaralého plazmového či impulsního navařování zůstává tepelně ovlivněná zóna minimální a okolní materiál je prakticky studený. Nedochází k tepelnému pnutí, deformaci tvaru ani nežádoucím změnám tvrdosti základního materiálu.", "image": "assets/LRS2.jpg", "specs": {"Typ laseru": "Pevnolátkový Nd:YAG systém", "Model": "QR 150 pro nástrojařské opravy", "Vlnová délka záření": "1064 nm", "Tepelně ovlivněná zóna": "Mikroskopická (studený svar)", "Přídavné materiály": "Dráty identické se základní ocelí (až 60 HRC)", "Opravy": "Střižné hrany, tvarové dutiny, textury, změny tvaru"}, "benefits": ["Opravy bez vzniku vnitřního pnutí a praskání oceli", "Přesné nanesení materiálu od tloušťky 0,1 mm", "Obrovská ekonomická úspora oproti výrobě nové formy", "Možnost následného leštění, elektroeroze i dezénování"]}, "obrabeni-edm": {"id": "obrabeni-edm", "category": "nastrojarna", "category_name": "Nástrojárna a formy", "title": "Elektroerozivní hloubička Charmilles ROBOFORM 22", "subtitle": "Švýcarská technologie pro mikropřesné dutiny forem", "short_desc": "Bezkontaktní elektroerozivní obrábění kalených ocelí a složitých tvarů pomocí elektrod bez mechanického namáhání.", "full_desc": "Elektrojiskrová hloubička Charmilles ROBOFORM 22 v kombinaci s generátorem Isopulse umožňuje výrobu nejnáročnějších prostorových tvarů a hlubokých žeber v kalených nástrojových ocelích. Dále nástrojárna disponuje CNC frézkou Haas, frézkami FN40, FN20, FA3V, soustruhy SV18 a SUI 40, bruskami BPH 20N a tvrdoměrem Rockwell.", "image": "assets/tool_edm.svg", "specs": {"Stroj": "Charmilles ROBOFORM 22 + Isopulse", "Přesnost polohování": "± 0,002 mm (2 µm)", "Materiál elektrod": "Měď, grafit pro jemné dokončování", "Doplňkové stroje": "Frézka CNC Haas, frézky FN40, soustruhy SV18", "Broušení": "Brusky na plocho BPH 20N, na kulato BUA 16", "Měření a kontrola": "Zařízení Mitutoyo, tvrdoměr Rockwell, ISO 9001"}, "benefits": ["Schopnost obrábět materiály libovolné tvrdosti (až 65 HRC)", "Ostré vnitřní rohy a mikroskopické poloměry žeber", "Vynikající kvalita povrchu bez nutnosti náročného leštění", "Kompletní nástrojařský park pod jednou střechou"]}};

  const urlParams = new URLSearchParams(window.location.search);
  const offerBanner = document.getElementById("offerBanner");
  if (urlParams.get("ref") === "nabidka" && offerBanner) {
    offerBanner.style.display = "block";
  }

  const mobileToggle = document.getElementById("mobileToggle");
  const mainNav = document.getElementById("mainNav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", function () {
      mainNav.classList.toggle("nav-open");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("nav-open");
      });
    });
  }

  const counterEls = document.querySelectorAll(".stat-num");
  const counterObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const target = parseInt(entry.target.getAttribute("data-target"), 10);
        let start = 0;
        entry.target.textContent = '0';
        const duration = 1200;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        const timer = setInterval(function () {
          start += increment;
          if (start >= target) {
            entry.target.textContent = target;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(start);
          }
        }, stepTime);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterEls.forEach(function (el) {
    counterObserver.observe(el);
  });

  const searchInput = document.getElementById("catalogSearch");
  const searchClear = document.getElementById("searchClear");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".cat-card");
  const searchCounter = document.getElementById("searchCounter");

  let currentFilter = "all";
  let currentSearch = "";

  function updateCatalog() {
    let visibleCount = 0;
    cards.forEach(function (card) {
      const cat = card.getAttribute("data-category");
      const title = (card.querySelector(".item-title") ? card.querySelector(".item-title").textContent : "").toLowerCase();
      const desc = (card.querySelector(".item-desc") ? card.querySelector(".item-desc").textContent : "").toLowerCase();
      const sub = (card.querySelector(".card-sub") ? card.querySelector(".card-sub").textContent : "").toLowerCase();
      const combined = title + " " + desc + " " + sub;

      const matchesFilter = (currentFilter === "all" || cat === currentFilter);
      const matchesSearch = (!currentSearch || combined.includes(currentSearch));

      if (matchesFilter && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (searchCounter) {
      searchCounter.textContent = visibleCount;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearch = e.target.value.trim().toLowerCase();
      updateCatalog();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", function () {
      searchInput.value = "";
      currentSearch = "";
      updateCatalog();
      searchInput.focus();
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      updateCatalog();
    });
  });

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalClose = document.getElementById("techModalClose");
  const mBadge = document.getElementById("mBadge");
  const mTitle = document.getElementById("mTitle");
  const mSub = document.getElementById("mSub");
  const mImg = document.getElementById("mImg");
  const mDesc = document.getElementById("mDesc");
  const mTable = document.getElementById("mTable");
  const mBenefits = document.getElementById("mBenefits");
  const modalCtaBtn = document.getElementById("modalCtaBtn");

  function openModal(id) {
    const data = TECH_DATA[id];
    if (!data || !modalBackdrop) return;

    if (mBadge) mBadge.textContent = data.category_name;
    if (mTitle) mTitle.textContent = data.title;
    if (mSub) mSub.textContent = data.subtitle;
    if (mImg) {
      mImg.src = data.image;
      mImg.alt = data.title;
    }
    if (mDesc) mDesc.textContent = data.full_desc;

    if (mTable) {
      const tbody = mTable.querySelector("tbody") || mTable;
      tbody.innerHTML = "";
      for (const [key, val] of Object.entries(data.specs || {})) {
        const tr = document.createElement("tr");
        const tdKey = document.createElement("td");
        tdKey.textContent = key;
        const tdVal = document.createElement("td");
        tdVal.textContent = val;
        tr.appendChild(tdKey);
        tr.appendChild(tdVal);
        tbody.appendChild(tr);
      }
    }

    if (mBenefits) {
      mBenefits.innerHTML = "";
      (data.benefits || []).forEach(function (b) {
        const li = document.createElement("li");
        li.textContent = b;
        mBenefits.appendChild(li);
      });
    }

    modalBackdrop.style.display = "flex";
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = "none";
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      const id = card.getAttribute("data-open-tech");
      if (id) openModal(id);
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  if (modalCtaBtn) {
    modalCtaBtn.addEventListener("click", function () {
      closeModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.style.display === "flex") {
      closeModal();
    }
  });

  const inquiryForm = document.getElementById("inquiryForm");
  const formSuccess = document.getElementById("formSuccess");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formSuccess) {
        formSuccess.style.display = "block";
      }
      inquiryForm.reset();
    });
  }
});
