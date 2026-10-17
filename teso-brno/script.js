const TECH_CATALOG = [
  {
    id: "mereni-emisi",
    cat: "emise",
    title: "Autorizované měření znečišťujících látek a spalin",
    perex: "Akreditované měření tuhých znečišťujících látek (TZL), plynných emisí (NOx, SO₂, CO, TOC) a těžkých kovů pro průmyslové zdroje znečišťování.",
    specs: "Akreditovaná laboratoř • Normy ČSN EN 14181 • TZL, TOC, plyny",
    table: {
      headers: ["Polutant", "Metoda měření", "Norma ČSN / EN", "Typický zdroj"],
      rows: [
        ["Tuhé znečišťující látky (TZL)", "Manuální gravimetrická izokinetika", "ČSN EN 13284-1", "Kotle na tuhá paliva, slévárny, lakovny"],
        ["Oxidy dusíku (NOx)", "Chemiluminiscence / NDIR analyzátory", "ČSN EN 14792", "Spalovací motory, kotelny, sušárny"],
        ["Oxid siřičitý (SO₂)", "Ultrafialová fluorescence / NDIR", "ČSN EN 14791", "Uhelné a biomasové energetické zdroje"],
        ["Těkavé organické látky (TOC)", "Plameno-ionizační detekce (FID)", "ČSN EN 12619", "Průmyslové lakovny, laminace, tiskárny"]
      ]
    },
    features: [
      "Autorizace Ministerstva životního prostředí ČR č.j. 1827/740/03",
      "Osvědčení o akreditaci Českého institutu pro akreditaci (ČIA)",
      "Kompletní protokol o autorizovaném měření do 14 dnů od měření",
      "Možnost expresního výjezdu pro garanční měření technologických linek"
    ]
  },
  {
    id: "mereni-pachu",
    cat: "pach",
    title: "Dynamická olfaktometrie a koncentrace pachu v ovzduší",
    perex: "Akreditované odběry a stanovení koncentrace pachových látek dynamickým olfaktometrem TO8 dle normy ČSN EN 13725.",
    specs: "Olfaktometr TO8 • Vzorkování do Nalophan vaků • Zkušební komise",
    table: {
      headers: ["Parametr", "Jednotka", "Metodika", "Aplikace"],
      rows: [
        ["Pachová koncentrace", "ouE/m³", "ČSN EN 13725", "Výduchy VZT, biofiltry, čistírny ČOV"],
        ["Hmotnostní tok pachu", "ouE/h", "Výpočet z objemového toku", "Vstupní data do rozptylových studií"],
        ["Účinnost deodorizace", "%", "Srovnání vstup / výstup", "Přejímky biofiltrů, praček plynů"],
        ["Pachové zkoušky na imisích", "ouE/m³", "Terénní inspekce", "Ověření dosahu zápachu v obcích"]
      ]
    },
    features: [
      "Vlastní akreditovaná olfaktometrická laboratoř v Brně",
      "Výběr a kalibrace zkušebních posuzovatelů standardním plynem n-butanolem",
      "Statistické zpracování dat v souladu s evropskou normou EN 13725",
      "Návrhy opatření pro snížení zápachu a dimenzování biofiltrů"
    ]
  },
  {
    id: "odborne-posudky",
    cat: "posudky",
    title: "Rozptylové studie znečištění ovzduší a odborné posudky",
    perex: "Zpracování rozptylových studií modelem SYMOS97 a odborných posudků autorizovanou osobou pro stavební úřady a krajské úřady.",
    specs: "Model SYMOS97 • Posudky dle § 11 zákona o ochraně ovzduší • EIA",
    table: {
      headers: ["Typ dokumentace", "Legislativní rámec", "Využití pro investora"],
      rows: [
        ["Rozptylová studie", "Metodika MŽP, SYMOS97", "Podklad pro ÚR, stavební řízení a proces EIA"],
        ["Odborný posudek", "§ 11 odst. 1 písm. d) zákona 201/2012 Sb.", "Povinná příloha žádosti o povolení zdroje"],
        ["Provozní řád zdroje", "§ 12 odst. 2 zákona o ochraně ovzduší", "Podmínka kolaudace a provozování technologie"],
        ["Kompenzační opatření", "Vyhláška č. 415/2012 Sb.", "Řešení překročení imisních limitů v lokalitě"]
      ]
    },
    features: [
      "Autorizace Ministerstva životního prostředí pro zpracování posudků",
      "Úzká koordinace s odbory životního prostředí krajských úřadů a ČIŽP",
      "Digitální mapové výstupy izolinií znečištění pro územní plánování",
      "Garance odborné obhajoby výsledků ve správních řízeních"
    ]
  },
  {
    id: "mereni-vzt",
    cat: "vzt",
    title: "Technologická měření vzduchotechniky a kalibrace AMS",
    perex: "Měření rychlostních a tlakových polí v potrubí, seřizování vzduchotechnických soustav a funkční zkoušky kontinuálních analyzátorů (QAL2 / AST).",
    specs: "Prandtlovy a Pitotovy sondy • Mikromanometry • Kalibrace ČSN EN 14181",
    table: {
      headers: ["Typ zkoušky", "Norma ČSN EN", "Frekvence", "Výstup"],
      rows: [
        ["Zkouška QAL2", "ČSN EN 14181", "1x za 3 až 5 let", "Kalibrační funkce pro stálá měřidla"],
        ["Zkouška AST", "ČSN EN 14181", "1x ročně", "Ověření platnosti kalibrační křivky"],
        ["Měření průtoku plynů", "ČSN ISO 10780", "Dle potřeby", "Objemový průtok v m³/h za norm. podmínek"],
        ["Účinnost odprášení", "ČSN EN 13284-1", "Přejímky technologií", "Garanční protokol o odloučení TZL"]
      ]
    },
    features: [
      "Referenční přístrojové vybavení s návazností na Český metrologický institut",
      "Zkušenosti s kalibrací analyzátorů SICK, ABB, Siemens a Emerson",
      "Zpracování protokolů pro Integrovanou prevenci (IPPC)",
      "Působnost po celé České republice i na Slovensku"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_teso")) {
      sessionStorage.setItem("ping_sent_teso", "1");
      const record = { slug: "teso-brno", time: new Date().toISOString(), ua: navigator.userAgent };
      localStorage.setItem("nabidka_open_teso-brno", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=teso-brno&t=" + Date.now();
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
  }

  const filterBtns = document.querySelectorAll("#catalogFilters .tab-btn");
  const cards = document.querySelectorAll("#catalogGrid .cat-card");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      cards.forEach(card => {
        if (f === "all" || card.getAttribute("data-cat") === f) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const srcSelect = document.getElementById("sourceType");
  const polSelect = document.getElementById("pollutantType");
  const resTitle = document.getElementById("resTitle");
  const resDesc = document.getElementById("resDesc");
  const resPeriod = document.getElementById("resPeriod");

  function updatePollutionGuide() {
    const src = srcSelect ? srcSelect.value : "kotelna";
    const pol = polSelect ? polSelect.value : "tzl";

    if (src === "nova_stavba") {
      if (resTitle) resTitle.textContent = "Rozptylová studie a odborný posudek EIA";
      if (resDesc) resDesc.textContent = "Matematický rozptylový model SYMOS97 pro posouzení vlivu na imisní situaci před vydáním stavebního povolení.";
      if (resPeriod) resPeriod.textContent = "Jednorázově v přípravě stavby";
    } else if (pol === "pach") {
      if (resTitle) resTitle.textContent = "Dynamická olfaktometrie pachu (ČSN EN 13725)";
      if (resDesc) resDesc.textContent = "Odběry do inertních vaků a stanovení pachové koncentrace v laboratoři akreditovanou komisí posuzovatelů.";
      if (resPeriod) resPeriod.textContent = "Dle integrovaného povolení / 1x za rok";
    } else if (src === "lakovna" || pol === "voc") {
      if (resTitle) resTitle.textContent = "Autorizované měření TOC plameno-ionizací (FID)";
      if (resDesc) resDesc.textContent = "Stanovení těkavých organických látek a bilance rozpouštědel pro krajský úřad a ČIŽP.";
      if (resPeriod) resPeriod.textContent = "1x za 3 roky (zdroje nad limit)";
    } else {
      if (resTitle) resTitle.textContent = "Autorizované jednorázové měření spalin a TZL";
      if (resDesc) resDesc.textContent = "Manuální izokinetické odběry prachu a kontinuální měření NOx, SO₂, CO dle platné legislativy.";
      if (resPeriod) resPeriod.textContent = "1x za 3 roky (střední zdroje)";
    }
  }

  if (srcSelect) srcSelect.addEventListener("change", updatePollutionGuide);
  if (polSelect) polSelect.addEventListener("change", updatePollutionGuide);
  updatePollutionGuide();

  const modal = document.getElementById("techModalBackdrop");
  const modalContent = document.getElementById("modalDynamicContent");
  const modalClose = document.getElementById("modalCloseBtn");

  function openModal(id) {
    const item = TECH_CATALOG.find(x => x.id === id);
    if (!item) return;

    let tableHtml = "";
    if (item.table) {
      let ths = item.table.headers.map(h => "<th>" + h + "</th>").join("");
      let trs = item.table.rows.map(r => "<tr>" + r.map(c => "<td>" + c + "</td>").join("") + "</tr>").join("");
      tableHtml = "<div class='modal-table-wrap'><table class='modal-table'><thead><tr>" + ths + "</tr></thead><tbody>" + trs + "</tbody></table></div>";
    }

    let featsHtml = item.features.map(f => "<li>" + f + "</li>").join("");

    modalContent.innerHTML = 
      "<div class='modal-header-block'>" +
        "<span class='modal-tag'>Akreditovaný postup</span>" +
        "<h3 class='modal-title'>" + item.title + "</h3>" +
        "<p class='modal-perex'>" + item.perex + "</p>" +
      "</div>" +
      "<h4 class='modal-section-title'>Rozsah měření a metodika</h4>" +
      tableHtml +
      "<h4 class='modal-section-title'>Garantované výhody akreditace</h4>" +
      "<ul class='modal-features-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalFromBtn()'>Poptat toto měření</a>" +
      "</div>";

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  }

  window.closeModalFromBtn = function() {
    if (modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  };

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.querySelectorAll("[data-open-tech]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-tech");
      openModal(id);
    });
  });

  const form = document.getElementById("emissionsInquiryForm");
  const formSuccess = document.getElementById("cSuccessMsg");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.style.display = "block";
      form.reset();
    });
  }

  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (counters.length > 0) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          el.innerText = '0';
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.innerText = current;
          }, 35);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }
});
