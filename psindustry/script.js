const TECH_CATALOG = {
  "psi-cnc-soustruzeni": {
    "title": "CNC přesné soustružení rotačních dílů",
    "category": "CNC obrábění",
    "badge": "ISO 2768-mK",
    "image": "assets/cnc_turning.jpg",
    "short_desc": "Vysoce přesné CNC soustružení hřídelí, pouzder, přírub a čepů z konstrukčních ocelí, nerezi i neželezných kovů s přesností na setiny milimetru.",
    "form_value": "cnc-soustruzeni",
    "specs": [
      { "label": "Max. točný průměr nad ložem", "value": "380 mm (nad suportem 240 mm)" },
      { "label": "Maximální točná délka", "value": "750 mm ve hrotech" },
      { "label": "Opakovatelná přesnost", "value": "±0,005 mm" },
      { "label": "Zpracovávané materiály", "value": "Uhlíkové oceli, nerez AISI 304/316, dural, mosaz, POM" },
      { "label": "Typické výrobky", "value": "Přesné čepy, příruby, pouzdra, redukce a hřídele" }
    ],
    "features": [
      "Kusová, prototypová i opakovaná sériová výroba rotačních dílců",
      "Řezání vnějších i vnitřních závitů metrických, lichoběžníkových a kuželových",
      "Vrtání hlubokých otvorů a jemné vnitřní vystružování v toleranci H7",
      "Výstupní protokol rozměrů a jakosti ke každé výrobní dávce"
    ]
  },
  "psi-cnc-frezovani": {
    "title": "CNC 3 a 4-osé vertikální frézování",
    "category": "CNC obrábění",
    "badge": "ČSN EN ISO 9001",
    "image": "assets/cnc_milling.jpg",
    "form_value": "cnc-frezovani",
    "specs": [
      { "label": "Pracovní rozsah pojezdů", "value": "X = 1020 mm, Y = 610 mm, Z = 560 mm" },
      { "label": "Maximální zatížení stolu", "value": "850 kg" },
      { "label": "Otáčky vřetena", "value": "Až 12 000 ot/min s vnitřním chlazením nástroje" },
      { "label": "Polohovací přesnost", "value": "0,008 mm / opakovatelnost 0,005 mm" },
      { "label": "Dělicí aparát (4. osa)", "value": "Plynule řízená rotační osa pro šroubovice a radiální otvory" }
    ],
    "features": [
      "Přímé programování ze zákaznických 3D CAD modelů (STEP, IGES, Parasolid)",
      "Vysokorychlostní hrubování i zrcadlové dokončování funkčních ploch",
      "Obrábění svařenců, odlitků i plných bloků z nástrojových a nerez ocelí",
      "Optimalizované dráhy nástrojů pro minimální pnutí materiálu"
    ]
  },
  "psi-zamecnictvi": {
    "title": "Certifikovaná kovovýroba a svařování TIG / MIG / MAG",
    "category": "Kovovýroba a svařování",
    "badge": "ČSN EN ISO 9606-1",
    "image": "assets/welding_fabrication.jpg",
    "form_value": "kovovyroba",
    "specs": [
      { "label": "Metody svařování", "value": "TIG/WIG (141), MIG/MAG (131/135) v ochranných plynech" },
      { "label": "Svařované materiály", "value": "Konstrukční oceli S235/S355, nerez AISI 304/316L, hliník" },
      { "label": "Max. nosnost svařence", "value": "Až 2 500 kg na montážním pracovišti" },
      { "label": "Zámečnické operace", "value": "Dělení materiálu, ohýbání, vrtání, závitování, odhrotování" },
      { "label": "Kvalifikace personálu", "value": "Certifikovaní svářeči dle normy ČSN EN ISO 9606-1" }
    ],
    "features": [
      "Vizuální (VT) a kapilární (PT) zkoušky svarových spojů",
      "Kompletní zámečnické sestavy včetně nerezových pochozích roštů a krytů",
      "Finální povrchová ochrana: tryskání balotinou, žárové zinkování, Komaxit",
      "Přesné lícování před finální expedicí a zkušební montáž"
    ]
  },
  "psi-prumyslove-montaze": {
    "title": "Průmyslové montáže a montáž tlakových rozvodů",
    "category": "Průmyslové montáže",
    "badge": "ČSN EN 13480",
    "image": "assets/industrial_assembly.jpg",
    "form_value": "montaze",
    "specs": [
      { "label": "Rozsah montáží", "value": "Montáže strojních linek, aparátů a potrubních tras" },
      { "label": "Vyhrazená zařízení", "value": "Oprávnění na montáž a opravy vyhrazených tlakových zařízení" },
      { "label": "Provozní média", "value": "Technické plyny, pára, stlačený vzduch, průmyslové kapaliny" },
      { "label": "Tlakové zkoušky", "value": "Hydraulické tlakové a pneumatické těsnostní zkoušky" },
      { "label": "Dokumentace", "value": "Montážní deník, atesty materiálů, revizní zpráva" }
    ],
    "features": [
      "Instalace technologických uzlů přímo ve výrobních halách zákazníka",
      "Montáž armatur, regulátorů, pojistných ventilů a měřicí instrumentace",
      "Pravidelný servis, údržba a rekonstrukce potrubních sítí a aparátů",
      "Bezpečnost práce dle přísných průmyslových norem a BOZP"
    ]
  },
  "psi-cad-konstrukce": {
    "title": "3D konstrukce CAD/CAM a reverzní inženýrství",
    "category": "Konstrukce a vývoj",
    "badge": "CAD/CAM 3D",
    "image": "assets/cad_engineering.jpg",
    "form_value": "konstrukce",
    "specs": [
      { "label": "Konstrukční software", "value": "SolidWorks, Autodesk Inventor, Mastercam CAM" },
      { "label": "Podporované formáty", "value": "3D modely (STEP, IGES, Parasolid), výkresy (DWG, DXF, PDF)" },
      { "label": "Odborné vedení", "value": "Ing. Petr Šebela (absolvent Průmyslového designu VUT Brno)" },
      { "label": "Výrobní optimalizace", "value": "DFM analýza (Design for Manufacturing) snižující náklady" },
      { "label": "Reverzní inženýrství", "value": "Přeměření poškozeného dílu a vytvoření nové 3D výrobní dokumentace" }
    ],
    "features": [
      "Příprava výrobních výkresů od jednotlivých dílů po celkové sestavy",
      "Konstrukce jednoúčelových montážních a obráběcích přípravků",
      "Návrhy technologických postupů pro efektivní třískové obrábění",
      "Rychlá konzultace a úprava tolerancí před zahájením výroby"
    ]
  },
  "psi-kontrola-jakosti": {
    "title": "Přesná metrologie a rozměrová kontrola jakosti",
    "category": "Kontrola jakosti",
    "badge": "ČSN EN 10204",
    "image": "assets/metrology_inspection.jpg",
    "form_value": "komplet",
    "specs": [
      { "label": "Měřicí vybavení", "value": "Digitální výškoměry Mitutoyo, mikrometry, pasametry, dutinoměry" },
      { "label": "Měření drsnosti", "value": "Měření drsnosti povrchu Ra, Rz dle ISO 4287" },
      { "label": "Rozměrové protokoly", "value": "Výstupní protokoly s vyznačením naměřených úchylek a tolerancí" },
      { "label": "Hutní certifikáty", "value": "Materiálové atesty EN 10204 3.1 s plnou trasovatelností taveb" },
      { "label": "Balení a expedice", "value": "Konzervace a antikorozní balení VCI pro bezpečný transport" }
    ],
    "features": [
      "100% rozměrová inspekce funkčních lícovaných ploch a závitů",
      "Kalibrace měřidel v akreditovaných metrologických laboratořích",
      "Archivace záznamů o měření pro audit a zákaznickou dohledatelnost",
      "Přejímka dílců za přítomnosti zástupce zákazníka na přání"
    ]
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    const banner = document.getElementById("nabidkaBanner");
    if (banner) {
      banner.style.display = "block";
    }
  }

  const navToggle = document.getElementById("navToggle");
  const navMenu = document.querySelector(".nav-menu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("is-open");
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-revealed");
    });
  }

  const counters = document.querySelectorAll(".counter");
  let countersStarted = false;
  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    counters.forEach(function (counter) {
      const target = parseFloat(counter.getAttribute("data-target")) || 0;
      counter.textContent = '0';
      const duration = 1200;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          counter.textContent = Math.round(target);
          clearInterval(timer);
        } else {
          counter.textContent = Math.round(current);
        }
      }, stepTime);
    });
  }

  const heroMetrics = document.querySelector(".hero-metrics");
  if (heroMetrics && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        startCounters();
        counterObserver.unobserve(heroMetrics);
      }
    }, { threshold: 0.2 });
    counterObserver.observe(heroMetrics);
  } else {
    startCounters();
  }

  const searchInput = document.getElementById("catalogSearch");
  const filterPills = document.querySelectorAll(".filter-pill");
  const cards = document.querySelectorAll(".catalog-card");
  const itemCount = document.getElementById("itemCount");

  let currentFilter = "all";
  let currentSearch = "";

  function filterCatalog() {
    let visible = 0;
    cards.forEach(function (card) {
      const cat = card.getAttribute("data-category") || "";
      const text = card.textContent.toLowerCase();
      const matchCat = (currentFilter === "all" || cat.toLowerCase() === currentFilter.toLowerCase());
      const matchSearch = (!currentSearch || text.includes(currentSearch));

      if (matchCat && matchSearch) {
        card.style.display = "flex";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    if (itemCount) {
      itemCount.textContent = visible + " výrobních kapacit";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearch = e.target.value.trim().toLowerCase();
      filterCatalog();
    });
  }

  filterPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      filterPills.forEach(function (p) { p.classList.remove("is-active"); });
      pill.classList.add("is-active");
      currentFilter = pill.getAttribute("data-filter") || "all";
      filterCatalog();
    });
  });

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalClose = document.getElementById("techModalClose");
  const modalCloseSec = document.getElementById("tmCloseSecondary");
  const tmSelectBtn = document.getElementById("tmSelectBtn");

  const tmTitle = document.getElementById("tmTitle");
  const tmCategory = document.getElementById("tmCategory");
  const tmBadge = document.getElementById("tmBadge");
  const tmDesc = document.getElementById("tmDesc");
  const tmImage = document.getElementById("tmImage");
  const tmFeatures = document.getElementById("tmFeatures");
  const tmSpecsTbody = document.getElementById("tmSpecsTbody");

  let activeTechKey = null;

  function openTechModal(techId) {
    const data = TECH_CATALOG[techId];
    if (!data || !modalBackdrop) return;

    activeTechKey = techId;
    if (tmTitle) tmTitle.textContent = data.title;
    if (tmCategory) tmCategory.textContent = data.category;
    if (tmBadge) tmBadge.textContent = data.badge;
    if (tmDesc) tmDesc.textContent = data.short_desc;
    if (tmImage) {
      tmImage.src = data.image;
      tmImage.alt = data.title;
    }

    if (tmFeatures) {
      tmFeatures.innerHTML = "";
      (data.features || []).forEach(function (feat) {
        const li = document.createElement("li");
        li.textContent = feat;
        tmFeatures.appendChild(li);
      });
    }

    if (tmSpecsTbody) {
      tmSpecsTbody.innerHTML = "";
      (data.specs || []).forEach(function (s) {
        const tr = document.createElement("tr");
        const tdLabel = document.createElement("td");
        tdLabel.innerHTML = "<strong>" + s.label + "</strong>";
        const tdVal = document.createElement("td");
        tdVal.textContent = s.value;
        tr.appendChild(tdLabel);
        tr.appendChild(tdVal);
        tmSpecsTbody.appendChild(tr);
      });
    }

    modalBackdrop.style.display = "flex";
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = "none";
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeTechKey = null;
  }

  document.querySelectorAll("[data-open-tech]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      const techId = trigger.getAttribute("data-open-tech") || trigger.getAttribute("data-id");
      if (techId) {
        e.preventDefault();
        openTechModal(techId);
      }
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeTechModal);
  if (modalCloseSec) modalCloseSec.addEventListener("click", closeTechModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop || e.target.classList.contains("tech-modal-container")) {
        closeTechModal();
      }
    });
  }

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.style.display === "flex") {
      closeTechModal();
    }
  });

  if (tmSelectBtn) {
    tmSelectBtn.addEventListener("click", function () {
      if (activeTechKey && TECH_CATALOG[activeTechKey]) {
        const fVal = TECH_CATALOG[activeTechKey].form_value;
        const select = document.getElementById("fTechnology");
        if (select && fVal) {
          select.value = fVal;
        }
      }
      closeTechModal();
      const quoteSection = document.getElementById("poptavka");
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const quoteForm = document.getElementById("quoteForm");
  const formStatus = document.getElementById("formStatus");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = "Děkujeme za vaši poptávku. Technické zadání bylo úspěšně předáno do výroby. Budeme vás kontaktovat do 24 hodin.";
        formStatus.className = "form-status is-success";
        formStatus.style.display = "block";
      }
      quoteForm.reset();
    });
  }
});
