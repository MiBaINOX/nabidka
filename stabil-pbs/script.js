const TECH_ITEMS_DATA = {
  "sprinklerove-shz": {
    category: "Vodní SHZ",
    norm: "ČSN EN 12845",
    title: "Sprinklerové hasicí zařízení",
    desc: "Samočinné vodní hasicí systémy v mokrém, suchém i předstihovém provedení pro spolehlivou ochranu rozsáhlých průmyslových hal, skladů a administrativních budov.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 12845, VdS / CEA 4001" },
      { param: "Typy soustav", val: "Mokré, suché, předstihové" },
      { param: "Zdroje vody", val: "Požární nádrže, tlakové čerpací stanice" },
      { param: "Ověřené instalace", val: "Slovnaft a.s., Goldbeck Lozorno, Lidl" }
    ],
    applications: "Výrobní závody, logistické areály, skladovací haly a obchodní centra."
  },
  "drencerove-chlazeni": {
    category: "Vodní SHZ",
    norm: "ČSN EN 12845",
    title: "Drenčerové systémy a vodní clony",
    desc: "Otevřené hubicové soustavy pro velkoplošné chlazení technologických celků a oddělení požárních úseků vodní clonou v energetických provozech.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 12845, ČSN 73 0810" },
      { param: "Funkce systému", val: "Prostorové hašení a chlazení konstrukcí" },
      { param: "Spouštěcí mechanizmus", val: "Elektrická nebo pneumatická aktivace" },
      { param: "Ověřené instalace", val: "AE Jaslovské Bohunice V-1, Johns Manville" }
    ],
    applications: "Potrubní mosty, kabelové prostory, nádrže ropy a dělení velkých hal."
  },
  "plynove-shz-co2": {
    category: "Plynové SHZ",
    norm: "ČSN EN 15004",
    title: "Plynové hasicí systémy CO2 a plyny",
    desc: "Objemové a zónové plynové hasicí systémy chránící citlivé technologie, rozvodny, turbíny a datová centra bez sekundárních škod.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 15004, ISO 14520" },
      { param: "Hasiva", val: "CO2, chemické a inertní plyny" },
      { param: "Tlakové nádoby", val: "Vysokotlaké i nízkotlaké moduly" },
      { param: "Ověřené instalace", val: "Amylum Boleráz, PSA Trnava, JE V-2" }
    ],
    applications: "Serverovny, strojovny, parní turbíny, lakovny a elektrorozvodny."
  },
  "vazici-monitorovaci-system": {
    category: "Plynové SHZ",
    norm: "ČSN EN 12094",
    title: "Vážicí a monitorovací systémy SHZ",
    desc: "Kontinuální tenzometrické vážení a tlakový monitoring stavu plynových hasicích náplní s dálkovým hlášením úniku.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 12094, ČSN EN 15004" },
      { param: "Monitorovaná veličina", val: "Úbytek hmotnosti a provozní tlak hasiva" },
      { param: "Armatury", val: "Rychloaktivační a pojistné ventily" },
      { param: "Tlumiče rázu", val: "Automatické tlakové kompenzátory" }
    ],
    applications: "Baterie tlakových lahví plynového hašení v jaderné i průmyslové energetice."
  },
  "detekce-plynu-pointwatch": {
    category: "Detekce plynů",
    norm: "ČSN EN 60079-29-1",
    title: "Detekce plynů PointWatch PIR9400",
    desc: "Optický infračervený detektor hořlavých uhlovodíkových plynů a par pro nejtěžší průmyslové podmínky v zónách s nebezpečím výbuchu.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 60079-29-1, certifikace ATEX" },
      { param: "Princip měření", val: "Dvojvlnová infračervená optika" },
      { param: "Kompatibilní vysílač", val: "Vysílač detekce plynů model 505" },
      { param: "Ověřené instalace", val: "Transpetrol a.s., Duslo Šaľa" }
    ],
    applications: "Ropné terminály, chemické provozy, sklady uhlovodíků a kompresorovny."
  },
  "eps-multisenzor-esser": {
    category: "EPS signalizace",
    norm: "ČSN EN 54-2",
    title: "Elektrická požární signalizace ESSER",
    desc: "Špičkové kruhové adresné ústředny a inteligentní multisenzorové hlásiče s odolností proti falešným poplachům.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 54-2, ČSN EN 54-7, ČSN 34 2710" },
      { param: "Typ technologie", val: "Adresná kruhová smyčka essernet" },
      { param: "Senzorické krytí", val: "Optické, termické a CO senzory v jednom" },
      { param: "Ověřené instalace", val: "Transpetrol, SE Bohunice, VÚJE Trnava" }
    ],
    applications: "Energetické stavby, administrativní budovy, archivy a výrobní areály."
  },
  "eps-cerberus-siemens": {
    category: "EPS signalizace",
    norm: "ČSN EN 54",
    title: "Požární systémy Cerberus Siemens",
    desc: "Robustní modulární systémy elektrické požární signalizace Siemens Cerberus pro rozsáhlé komerční a průmyslové komplexy.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 54, ISO 7240, ČSN 34 2710" },
      { param: "Algoritmus detekce", val: "ASAtechnology pro náročná prostředí" },
      { param: "Periferie", val: "Kombinované hlásiče, tlačítka a sirény" },
      { param: "Integrace", val: "Napojení na velíny a MaR dispečinky" }
    ],
    applications: "Veřejné budovy, nemocnice, nákupní centra a rozsáhlé výrobní závody."
  },
  "plamenove-detektory": {
    category: "EPS detekce",
    norm: "ČSN EN 54-10",
    title: "Infračervené a frekvenční hlásiče plamene",
    desc: "Specializované optické hlásiče plamene TEDIS reagující na spektrální vyzařování a frekvenční pulsaci otevřeného ohně v milisekundách.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 54-10, třída 1" },
      { param: "Detekční pásmo", val: "Vícepásmová IR / frekvenční analýza" },
      { param: "Odolnost", val: "Ignoruje sluneční svit i svářečské oblouky" },
      { param: "Ověřené instalace", val: "Skladovací nádrže Transpetrol, transformátory" }
    ],
    applications: "Venkovní i vnitřní sklady hořlavých kapalin, trafostanice a hangáry."
  },
  "protipozarni-ucpavky": {
    category: "Pasivní PBS",
    norm: "ČSN EN 1366-3",
    title: "Protipožární utěsnění a ucpávky prostupů",
    desc: "Certifikované ucpávky kabelových svazků, kovových a plastových trubek a dilatačních spár zabraňující šíření ohně a toxických zplodin.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 1366-3, ČSN 73 0810" },
      { param: "Požární odolnost", val: "EI 30, EI 60, EI 90 až EI 120" },
      { param: "Prostupující média", val: "Silové kabely, sdělovací kabely, potrubí" },
      { param: "Materiály", val: "Intumescentní tmely, manžety, minerální desky" }
    ],
    applications: "Dělící stěny a stropy všech požárních úseků pozemních i průmyslových staveb."
  },
  "protipozarni-nastriky": {
    category: "Pasivní PBS",
    norm: "ČSN EN 13381",
    title: "Protipožární nástřiky a obklady konstrukcí",
    desc: "Ochranné tepelně-izolační nástřiky a deskové obklady ocelových, betonových a dřevěných nosných konstrukcí zvyšující jejich únosnost při požáru.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 13381-4, ČSN EN 13381-8" },
      { param: "Třída odolnosti", val: "R 30, R 60, R 90, R 120 až R 180" },
      { param: "Typ systémů", val: "Vláknité nástřiky, protipožární desky" },
      { param: "Životnost", val: "Dlouhodobá stálost bez ztráty účinnosti" }
    ],
    applications: "Ocelové skelety hal, kabelové lávky, střešní vazníky a nosné sloupy."
  },
  "odvod-koure-geze": {
    category: "ZOKT systémy",
    norm: "ČSN EN 12101-2",
    title: "Zařízení pro odvod kouře a tepla GEZE",
    desc: "Systémy gravitačního i nuceného odvodu tepla a kouře s elektromechanickými pohony GEZE pro udržení volných únikových cest.",
    specs: [
      { param: "Předpisová norma", val: "ČSN EN 12101-2, ČSN 73 0804" },
      { param: "Pohony oken a klapky", val: "Řetězové a vřetenové pohony 24V" },
      { param: "Řídicí centrály", val: "THZ zálohované centrály s EPS vazbou" },
      { param: "Ověřené instalace", val: "Elektrárna Nováky, Vojany EVO, AE Bohunice" }
    ],
    applications: "Schodišťové prostory, výrobní a skladovací haly, atria a sportovní centra."
  },
  "projekce-revize-pbs": {
    category: "Inženýring PBS",
    norm: "Vyhláška 246/2001 Sb.",
    title: "Požárně bezpečnostní řešení a revize PBZ",
    desc: "Kompletní projektová dokumentace požární bezpečnosti staveb (PBŘ), autorizovaný inženýring, revizní zprávy a periodické kontroly provozuschopnosti.",
    specs: [
      { param: "Legislativní rámec", val: "Vyhláška č. 246/2001 Sb., ČSN 73 0810" },
      { param: "Rozsah projekce", val: "PBŘ staveb, koncepce SHZ, EPS a ZOKT" },
      { param: "Revizní činnost", val: "Výchozí a periodické revize PBZ zařízení" },
      { param: "Ověřené instalace", val: "Archiv Trnava, ŽOS Trnava, Skloplast" }
    ],
    applications: "Novostavby, rekonstrukce výrobních provozů a kolaudační řízení staveb."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initCatalogFilters();
  initModalListeners();
  checkOfferReferrer();
});

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const mainNav = document.getElementById("mainNav");
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  const links = mainNav.querySelectorAll(".nav-link");
  links.forEach(l => {
    l.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(r => r.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll(".counter[data-target]");
  if (!counters.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target") || el.textContent, 10);
        if (isNaN(target)) return;

        el.textContent = "0";
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);
          el.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function initCatalogFilters() {
  const searchInput = document.getElementById("techSearchInput");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".catalog-item");
  const counterEl = document.getElementById("searchCounter");

  let activeCategory = "all";
  let searchQuery = "";

  function updateDisplay() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    cards.forEach(card => {
      const cardCat = card.getAttribute("data-category") || "";
      const cardText = card.textContent.toLowerCase();

      const matchesCat = (activeCategory === "all" || cardCat === activeCategory);
      const matchesSearch = (!query || cardText.includes(query));

      if (matchesCat && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (counterEl) {
      counterEl.textContent = visibleCount;
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category") || "all";
      updateDisplay();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      updateDisplay();
    });
  }
}

function openTechModal(itemId) {
  const item = TECH_ITEMS_DATA[itemId];
  if (!item) return;

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalCategory = document.getElementById("modalCategory");
  const modalNorm = document.getElementById("modalNorm");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalSpecsBody = document.getElementById("modalSpecsBody");
  const modalApplications = document.getElementById("modalApplications");

  if (modalCategory) modalCategory.textContent = item.category;
  if (modalNorm) modalNorm.textContent = item.norm;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalDesc) modalDesc.textContent = item.desc;
  if (modalApplications) modalApplications.textContent = item.applications;

  if (modalSpecsBody) {
    modalSpecsBody.innerHTML = "";
    item.specs.forEach(s => {
      const tr = document.createElement("tr");
      const tdKey = document.createElement("td");
      tdKey.textContent = s.param;
      tdKey.style.fontWeight = "600";
      const tdVal = document.createElement("td");
      tdVal.textContent = s.val;
      tr.appendChild(tdKey);
      tr.appendChild(tdVal);
      modalSpecsBody.appendChild(tr);
    });
  }

  if (modalBackdrop) {
    modalBackdrop.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeTechModal() {
  const modalBackdrop = document.getElementById("techModalBackdrop");
  if (modalBackdrop) {
    modalBackdrop.style.display = "none";
    document.body.style.overflow = "";
  }
}

function initModalListeners() {
  const modalBackdrop = document.getElementById("techModalBackdrop");
  if (!modalBackdrop) return;

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeTechModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.style.display === "flex") {
      closeTechModal();
    }
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById("leadForm");
  const successBox = document.getElementById("formSuccessMessage");
  if (form) form.reset();
  if (successBox) {
    successBox.style.display = "block";
    setTimeout(() => {
      successBox.style.display = "none";
    }, 6000);
  }
}

function checkOfferReferrer() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("ref") === "nabidka") {
    const banner = document.createElement("div");
    banner.style.cssText = "position:fixed;bottom:20px;left:20px;right:20px;background:#0F172A;color:#FFFFFF;padding:14px 20px;border-radius:12px;z-index:9998;display:flex;align-items:center;justify-content:space-between;box-shadow:0 10px 25px rgba(0,0,0,0.3);font-size:0.92rem;";
    banner.innerHTML = "<span>Tento interaktivní prototyp byl vytvořen na míru pro společnost <strong>STABIL PBS s.r.o.</strong></span><button onclick='this.parentElement.remove()' style='background:transparent;border:none;color:#94A3B8;cursor:pointer;font-size:1.2rem;margin-left:12px;'>&times;</button>";
    document.body.appendChild(banner);
  }
}
