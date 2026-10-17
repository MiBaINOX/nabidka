const catalogData = {
  "tech-svazky": {
    name: "Zakázková výroba kabelových svazků",
    category: "kabelova-konfekce",
    categoryName: "Kabelová konfekce",
    norma: "IPC/WHMA A-620",
    parametr: "Vodiče 0,08 až 35 mm²",
    desc: "Kompletní výroba kabelových svazků pro strojírenství, automatizaci i kolejová vozidla dle normy IPC/WHMA A-620. Realizujeme malosériovou i velkosériovou kabelovou konfekci od jednoduchých propojovacích vodičů až po komplexní rozvětvené kabelové formy chráněné bužírkami, opletem a ochrannými hadicemi.",
    specs: [
      ["Výrobní norma", "IPC/WHMA A-620 třída 2 a 3"],
      ["Průřezy vodičů", "0,08 mm² až 35 mm²"],
      ["Typy vodičů", "PVC, teflon (PTFE), silikon, PUR, bezhalogenové (HFFR)"],
      ["Ochranné návleky", "Smršťovací bužírky, textilní oplet, vlnité chráničky"],
      ["Kontrola jakosti", "100% elektrický test kontinuity a izolačních stavů"]
    ]
  },
  "tech-strihani": {
    name: "Automatizované stříhání a odplášťování",
    category: "kabelova-konfekce",
    categoryName: "Kabelová konfekce",
    norma: "ČSN EN 60204-1",
    parametr: "Délková přesnost ±0,2 mm",
    desc: "Přesné dělení, odplášťování a odizolování jednožilových i vícežilových kabelů s vysokou opakovatelností. Využíváme přesné poloautomatické a automatické odizolovací a střihací stroje s rotačními noži, které zaručují čistý řez bez poškození jemných pramenů lanka.",
    specs: [
      ["Strojní kapacita", "Automatické střihací a odizolovací centrum"],
      ["Délkový rozsah", "Od 20 mm do 100 metrů"],
      ["Délková přesnost", "±0,2 mm v závislosti na typu pláště"],
      ["Zpracovávané materiály", "Jednožilová lanka, stíněné kabely, koaxiální kabely"],
      ["Značení vodičů", "Potisk termotransferem, štítkování, návlečky"]
    ]
  },
  "tech-krimpovani": {
    name: "Strojní krimpování a lisování kontaktů",
    category: "kabelova-konfekce",
    categoryName: "Kabelová konfekce",
    norma: "ČSN EN 60352-2",
    parametr: "Tahové zkoušky do 1000 N",
    desc: "Lisování dutinek, fastonů, oček i precizních pinů s průběžným měřením výšky krimpování a tahovými zkouškami. Krimpování kontaktů provádíme pomocí stolních lisů s přesnými aplikátory. Každá série podléhá kalibrovaným tahovým zkouškám spojů.",
    specs: [
      ["Typy kontaktů", "Dutinky, fastony, kabelová oka, piny MOLEX, TE, JST"],
      ["Kontrola lisování", "Měření výšky zalisování (crimp height) mikrometrem"],
      ["Tahové zkoušky", "Kalibrovaný trhací přístroj do 1000 N"],
      ["Aplikátory", "Rychlovýměnné mini-aplikátory pro páskové kontakty"],
      ["Norma spojů", "ČSN EN 60352-2 (nepájené krimpované spoje)"]
    ]
  },
  "tech-pajeni": {
    name: "Pájení a zakončování plochých vodičů",
    category: "kabelova-konfekce",
    categoryName: "Kabelová konfekce",
    norma: "IPC J-STD-001",
    parametr: "Bezolovnaté i olovnaté pájení",
    desc: "Ruční a poloautomatické pájení konektorů, senzorů a plochých páskových kabelů technologií IDC. Zajišťujeme precizní pájení konektorů kruhových i obdélníkových typů a pájení vodičů na DPS.",
    specs: [
      ["Pájecí stanice", "Teplotně řízené stanice s ESD ochranou"],
      ["Slitiny", "Bezolovnaté slitiny (RoHS) i specifické slitiny pro průmysl"],
      ["Ploché kabely", "IDC lisování pro rozteče 1,27 mm a 2,54 mm"],
      ["ESD ochrana", "Vyhrazená pracoviště dle ČSN EN 61340-5-1"],
      ["Kontrola", "Mikroskopická kontrola kvality pájených spojů"]
    ]
  },
  "tech-testovani": {
    name: "Elektrické testování CableEye & Cirris",
    category: "kontrola-jakosti",
    categoryName: "Kontrola a jakost",
    norma: "ČSN EN 60300 / ISO 9001",
    parametr: "Až 256 testovacích bodů",
    desc: "100% výstupní testování zapojení, zkratů, odporu vodičů a dielektrické pevnosti s protokolem o zkoušce. Žádný kabelový svazek neopustí provoz v Javorníku bez počítačem řízeného testu.",
    specs: [
      ["Testovací zařízení", "Analyzátory CAMI CableEye a testery Cirris"],
      ["Kapacita bodů", "Až 256 programovatelných testovacích kanálů"],
      ["Testované parametry", "Kontinuita, izolační odpor, zkraty, odpor vedení"],
      ["Vysokonapěťový test", "Hipot test dielektrika do 1500 V DC"],
      ["Protokolování", "Digitální archivace výsledků a štítek s QR kódem"]
    ]
  },
  "tech-moduly": {
    name: "Montáž elektrotechnických modulů",
    category: "elektro-vyroba",
    categoryName: "Elektrovýroba",
    norma: "ČSN EN 61439-1",
    parametr: "Mechanická i elektro kompletace",
    desc: "Kompletace přístrojových panelů, osazování svorkovnicových skříněk a mechanická montáž podsestav. Zajišťujeme ucelenou elektromechanickou montáž včetně přípravy skříněk a osazení přístroji.",
    specs: [
      ["Komponenty", "Skříňky Rittal, Hensel, Schneider Electric, Spelsberg"],
      ["Montážní operace", "Mechanické opracování, osazení DIN lišt, kabelové průchodky"],
      ["Krytí sestav", "IP20 až IP66 dle specifikace zákazníka"],
      ["Integrace", "Zapojení napájecích zdrojů, jističů, relé a I/O modulů"],
      ["Značení", "Značení vodičů a přístrojů dle projektového schématu"]
    ]
  },
  "tech-rozvadece": {
    name: "Výroba rozvaděčů nízkého napětí",
    category: "elektro-vyroba",
    categoryName: "Elektrovýroba",
    norma: "ČSN EN 61439-1/-2",
    parametr: "Jmenovitý proud do 4000 A",
    desc: "Zakázková výroba průmyslových, domovních a distribučních rozvaděčů NN včetně kusových zkoušek a certifikace. Vyrábíme typově ověřené rozvaděče pro výrobní provozy i energetiku.",
    specs: [
      ["Norma", "ČSN EN 61439-1 ed. 2, ČSN EN 61439-2"],
      ["Typy skříní", "Nástěnné, skříňové řadové i pultové provedení"],
      ["Vnitřní forma", "Forma 1 až Forma 4b oddělení funkčních jednotek"],
      ["Dokumentace", "Výrobní štítek, osvědčení o kusové zkoušce, protokol CE"],
      ["Zkoušky", "Měření izolačních odporů, zkouška přiloženým napětím"]
    ]
  },
  "tech-automatizace": {
    name: "Průmyslová automatizace a řídicí systémy",
    category: "elektro-vyroba",
    categoryName: "Elektrovýroba",
    norma: "ČSN EN 61131 / ISO 13849",
    parametr: "Systémy Siemens, Schneider, Omron",
    desc: "Programování PLC automatů, vývoj vizualizací SCADA/HMI a komplexní automatizace výrobních technologií. Dodáváme ucelená řešení řízení strojů a výrobních linek.",
    specs: [
      ["Řídicí systémy", "Siemens SIMATIC S7-1200 / S7-1500, Schneider Modicon"],
      ["Komunikace", "PROFINET, PROFIBUS, Modbus TCP/RTU, IO-Link"],
      ["Bezpečnost strojů", "Bezpečnostní relé a F-CPU dle ČSN EN ISO 13849-1"],
      ["Pohony", "Frekvenční měniče, servopohony, krokové motory"],
      ["Vizualizace", "HMI panely Siemens Comfort, webové rozhraní SCADA"]
    ]
  },
  "tech-montaze": {
    name: "Elektromontáže v průmyslu a halách",
    category: "montaze-servis",
    categoryName: "Montáže a servis",
    norma: "ČSN 33 2000",
    parametr: "Silnoproud i slaboproud",
    desc: "Montáže kabelových tras, technologických rozvodů, osvětlení a připojování strojních zařízení. Disponujeme týmem certifikovaných elektrotechniků dle NV 194/2022 Sb.",
    specs: [
      ["Kabelové trasy", "Drátěné, plechové i žebříkové kabelové lávky"],
      ["Pracovníci", "Kvalifikace elektrotechniků dle NV 194/2022 Sb."],
      ["Osvětlení", "Průmyslová LED svítidla s inteligentním řízením DALI"],
      ["Technologie", "Připojování obráběcích strojů, lisů, jeřábových drah"],
      ["Revize", "Výchozí i pravidelné revizní zprávy elektroinstalace"]
    ]
  },
  "tech-servis": {
    name: "Údržba, elektroservis a revize",
    category: "montaze-servis",
    categoryName: "Montáže a servis",
    norma: "ČSN 33 1500",
    parametr: "Pohotovostní i plánovaný servis",
    desc: "Pravidelný servis elektroinstalací, diagnostika termokamerou, revizní zprávy a odstraňování závad. Nabízíme smluvní preventivní údržbu pro výrobní podniky v regionu Jesenicka a Olomouckého kraje.",
    specs: [
      ["Diagnostika", "Měření oteplení termokamerou Fluke, revizní přístroje"],
      ["Revize", "Výchozí a periodické revize dle ČSN 33 1500 a ČSN EN 62305"],
      ["Údržba", "Profylaxe rozvaděčů, výměna stykačů, čištění a kontrola"],
      ["Lokalita", "Javorník, Jeseník, Šumperk, Olomouc a celý region"],
      ["Dostupnost", "Flexibilní zásahy při výpadcích technologie"]
    ]
  },
  "tech-elektrarny": {
    name: "Fotovoltaické elektrárny a OZE",
    category: "montaze-servis",
    categoryName: "Montáže a servis",
    norma: "ČSN 33 2000 (FVE)",
    parametr: "Komerční i průmyslové instalace",
    desc: "Výstavba a připojení fotovoltaických elektráren pro výrobní haly, areály a komerční objekty. Zajišťujeme projekci, dodávku střídačů, bateriových úložišť a integraci do rozvodné sítě.",
    specs: [
      ["Typy instalací", "Trapézové a falcované střechy, ploché střechy s přitížením"],
      ["Střídače", "Průmyslové hybridní a síťové střídače"],
      ["Ochrany", "Přepěťové ochrany SPD typ 1+2, požární vypínače"],
      ["Bateriová úložiště", "Vysokonapěťové akumulační systémy"],
      ["Připojení", "Koordinace s distributorem a uvedení do provozu"]
    ]
  },
  "tech-projekce": {
    name: "Elektroprojekce a inženýring EPLAN",
    category: "elektro-vyroba",
    categoryName: "Elektrovýroba",
    norma: "ČSN EN 61082 / ISO 9001",
    parametr: "EPLAN Electric P8, AutoCAD",
    desc: "Zpracování kompletní projektové dokumentace silnoproudu, slaboproudu a MaR ve všech stupních. Vlastní projekční kancelář zpracovává dokumentaci v moderním CAE systému EPLAN.",
    specs: [
      ["Software", "EPLAN Electric P8, AutoCAD Electrical, ProgeCAD"],
      ["Stupně projektu", "Studie, DSP, DPS, dokumentace skutečného provedení"],
      ["Výstupy", "Schémata zapojení, kusovníky materiálu, svorkovnice"],
      ["Inženýring", "Autorský dozor, koordinace profesí, technická podpora"],
      ["Archivace", "Kompletní digitální archiv v PDF i nativních datech"]
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".cat-card"));
  const filterTabs = Array.from(document.querySelectorAll(".filter-tab"));
  const searchInput = document.getElementById("searchInput");
  const counterEl = document.getElementById("searchCounter");
  const modal = document.getElementById("techModalBackdrop");
  const modalClose = document.getElementById("techModalClose");
  const modalDismiss = document.getElementById("techModalDismiss");
  const modalBadge = document.getElementById("techModalBadge");
  const modalTitle = document.getElementById("techModalTitle");
  const modalDesc = document.getElementById("techModalDesc");
  const modalTable = document.getElementById("techModalTable");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  let currentFilter = "all";
  let currentSearch = "";

  const updateCatalog = () => {
    let visibleCount = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute("data-category") || "";
      const cardText = card.textContent.toLowerCase();
      const matchesFilter = (currentFilter === "all" || cardCat === currentFilter);
      const matchesSearch = (!currentSearch || cardText.includes(currentSearch));

      if (matchesFilter && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (counterEl) {
      counterEl.textContent = String(visibleCount);
    }
  };

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter") || "all";
      updateCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      updateCatalog();
    });
  }

  const openModal = (id) => {
    const data = catalogData[id];
    if (!data || !modal) return;

    if (modalBadge) modalBadge.textContent = data.norma + " • " + data.parametr;
    if (modalTitle) modalTitle.textContent = data.name;
    if (modalDesc) modalDesc.textContent = data.desc;

    if (modalTable) {
      modalTable.innerHTML = "";
      data.specs.forEach(row => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = row[0];
        const td = document.createElement("td");
        td.textContent = row[1];
        tr.appendChild(th);
        tr.appendChild(td);
        modalTable.appendChild(tr);
      });
    }

    modal.classList.add("active");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("active");
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  document.querySelectorAll(".btn-tech-detail").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-open-id");
      if (id) openModal(id);
    });
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      if (id) openModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalDismiss) modalDismiss.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-target") || el.textContent, 10);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        observer.unobserve(el);
        return;
      }
      el.textContent = "0";
      const duration = 1600;
      const start = performance.now();
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        el.textContent = String(current);
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = String(target);
        }
      };
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(c => counterObserver.observe(c));

  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(r => revealObserver.observe(r));

  const contactForm = document.getElementById("leadForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Děkujeme za vaši poptávku. Náš technický tým z Javorníku vás bude neprodleně kontaktovat.");
      contactForm.reset();
    });
  }
});
