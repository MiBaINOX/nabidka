const techCatalogData = [
  {
    id: "1",
    title: "Přesné technické výlisky pro automotive a průmysl",
    category: "Technické díly",
    description: "Konstrukční díly s vysokou tvarovou stálostí a mechanickou pevností z PA66-GF30 a POM-C pro náročné průmyslové mechanismy.",
    specs: [
      { param: "Uzavírací síla lisu", value: "1500 až 3200 kN" },
      { param: "Zpracovávané polymery", value: "PA66-GF30, POM-C, PBT, PPS" },
      { param: "Rozměrová přesnost", value: "Tolerance dle DIN 16742 TG4" },
      { param: "Typické aplikace", value: "Ozubená kola, vodicí pouzdra, příruby, konektory" },
      { param: "Kontrola kvality", value: "3D optické a dotykové měření dílů" }
    ]
  },
  {
    id: "2",
    title: "Komponenty pro sanitární a wellness techniku",
    category: "Sanitární systémy",
    description: "Tvarově komplexní pohledové díly, tělesa ventilů, masážní trysky a rozvody z ABS a SAN pro dlouhodobý kontakt s vodou.",
    specs: [
      { param: "Uzavírací síla lisu", value: "1800 až 4500 kN" },
      { param: "Materiálová báze", value: "Sanitární ABS, SAN, PMMA, kopolymer PP" },
      { param: "Povrchová úprava", value: "Zrcadlový lesk SPI A1 / jemný dezén" },
      { param: "Odolnost", value: "Chemická stálost vůči čisticím přípravkům a teplé vodě" },
      { param: "Výrobní areál", value: "Tetčice, Rosická 358" }
    ]
  },
  {
    id: "3",
    title: "Konstrukční díly z polypropylenu a polyethylenu",
    category: "Konstrukční plasty",
    description: "Chemicky odolné kryty, elektroinstalační boxy, montážní příruby a transportní pouzdra z PP a PE-HD.",
    specs: [
      { param: "Uzavírací síla lisu", value: "800 až 2500 kN" },
      { param: "Materiál výlisků", value: "PP homopolymer, PP kopolymer, PE-HD, PE-LD" },
      { param: "Vlastnosti", value: "Vysoká rázová houževnatost i za nízkých teplot" },
      { param: "Recyklace", value: "100% materiálově recyklovatelné polymery" },
      { param: "Výrobní série", value: "Střední a velkosériová produkce" }
    ]
  },
  {
    id: "4",
    title: "Dvoukomponentní 2K vstřikování a zastřikování zálisků",
    category: "Speciální technologie",
    description: "Kombinace konstrukčního termoplastu s elastomerovým těsněním TPE v jednom cyklu a precizní zastřikování mosazných závitů.",
    specs: [
      { param: "Technologie vstřikování", value: "2K dvousložkové vstřikování + insert moulding" },
      { param: "Kombinace materiálů", value: "Tvrdý nosič PP/PA + měkký elastomer TPE" },
      { param: "Zálisky", value: "Mosazné a ocelové závitové vložky s předehřevem" },
      { param: "Těsnost spoje", value: "Molekulární soudržnost komponentů" },
      { param: "Kontrola zálisků", value: "Kamerová kontrola polohy zálisků v dutině" }
    ]
  },
  {
    id: "5",
    title: "Výroba a preventivní údržba vstřikovacích forem",
    category: "Nástrojárna",
    description: "Kompletní servis vstřikovacích forem, CNC 3D obrábění dutin, elektroerozivní hloubení EDM a laserové navařování v Tetčicích.",
    specs: [
      { param: "Kapacita nástrojárny", value: "Formy do rozměru 800 x 600 mm a váhy 3,5 t" },
      { param: "Strojní vybavení", value: "CNC 3D frézovací centra, EDM drátové řezačky" },
      { param: "Vtokové systémy", value: "Optimalizace horkých i studených vtokových soustav" },
      { param: "Údržba forem", value: "Pravidelný ultrazvukový servis a konzervace" },
      { param: "Pohotovostní opravy", value: "Vlastní nástrojářské zázemí přímo u lisovny" }
    ]
  },
  {
    id: "6",
    title: "Hydromasážní a rozvodné sanitární moduly",
    category: "Sanitární systémy",
    description: "Výroba těles masážních panelů, vanových modulů a vodicích prvků s vysokou odolností proti usazování vodního kamene.",
    specs: [
      { param: "Uzavírací síla lisu", value: "2500 až 4500 kN" },
      { param: "Výrobní materiál", value: "Sanitární akrylát, ABS s UV stabilizací" },
      { param: "Rozměry výlisků", value: "Délka výlisků až 1200 mm" },
      { param: "Zkoušky spolehlivosti", value: "Cyklické tlakové testy hydro-okruhů" },
      { param: "Výrobní kooperace", value: "Výroba pro areál Tetčice a odběratele v ČR" }
    ]
  },
  {
    id: "7",
    title: "Optické kryty a pohledové díly s vysokým leskem",
    category: "Designové výlisky",
    description: "Precizní čelní panely, optické průzory a ovládací prvky z transparentního PC a PMMA bez propadlin a stop po vyhazovačích.",
    specs: [
      { param: "Uzavírací síla lisu", value: "1000 až 2800 kN" },
      { param: "Použité polymery", value: "Optický polykarbonát Makrolon, Plexiglas PMMA" },
      { param: "Kvalita optiky", value: "Třída čirosti bez vzduchových bublin a závojů" },
      { param: "Ochrana povrchu", value: "Okamžitá aplikace ochranné PE maskovací fólie" },
      { param: "Prostředí výroby", value: "Zvýšená ochrana proti prachu a elektrostatice" }
    ]
  },
  {
    id: "8",
    title: "Montáž podskupin, ultrazvukové svařování a kompletace",
    category: "Kompletace",
    description: "Finální navazující montáž sestav, ultrazvukové spojování plastů, tamponový potisk a expediční balení dle požadavků klienta.",
    specs: [
      { param: "Montážní technologie", value: "Ultrazvukové sváření 20 kHz Herrmann" },
      { param: "Značení výrobků", value: "Průmyslový tamponový tisk (1 až 2 barvy)" },
      { param: "Zkoušení funkčnosti", value: "Pneumatická kontrola těsnosti každého kusu" },
      { param: "Balicí služby", value: "Zatavování do fólie, kartonáž, značení čárovými kódy" },
      { param: "Lokalita expedice", value: "Expediční sklad Tetčice u Brna" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get("ref");
  if (ref === "nabidka" || ref === "capture") {
    const pBanner = document.getElementById("personalizedBanner");
    if (pBanner) {
      pBanner.classList.add("active");
    }
  }

  const mobBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (mobBtn && mainNav) {
    mobBtn.addEventListener("click", () => {
      mainNav.classList.toggle("mobile-active");
    });
    mainNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mainNav.classList.remove("mobile-active");
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("revealed"));
  }

  const counterElements = document.querySelectorAll("[data-count]");
  let countersAnimated = false;
  function animateCounters() {
    if (countersAnimated) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    counterElements.forEach(el => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      counter.textContent = '0';
      const duration = 1200;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.innerText = target;
          clearInterval(timer);
        } else {
          el.innerText = Math.round(current);
        }
      }, stepTime);
    });
    countersAnimated = true;
  }

  if ("IntersectionObserver" in window) {
    const statsRow = document.querySelector(".hero-stats-row");
    if (statsRow) {
      const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      statsObserver.observe(statsRow);
    }
  } else {
    animateCounters();
  }

  const heroTabs = document.querySelectorAll(".tech-tab-btn");
  heroTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      heroTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tabType = btn.getAttribute("data-tab");
      if (tabType === "all") {
        filterCatalog("all", "");
      } else if (tabType === "press") {
        filterCatalog("Technické díly", "");
      } else if (tabType === "molds") {
        filterCatalog("Nástrojárna", "");
      } else if (tabType === "2k") {
        filterCatalog("Speciální technologie", "");
      } else if (tabType === "assembly") {
        filterCatalog("Kompletace", "");
      }
      const catSec = document.getElementById("katalog");
      if (catSec) {
        catSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const filterBtns = document.querySelectorAll(".cat-btn");
  const searchInput = document.getElementById("catalogSearch");
  const counterBadge = document.getElementById("searchCounter");
  const cards = document.querySelectorAll(".cat-card");

  let activeCategory = "all";
  let activeSearch = "";

  function filterCatalog(cat, search) {
    activeCategory = cat;
    activeSearch = search.trim().toLowerCase();

    filterBtns.forEach(btn => {
      if (btn.getAttribute("data-filter") === cat) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    let visibleCount = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute("data-cat") || "";
      const cardText = (card.innerText || "").toLowerCase();

      const matchesCat = (activeCategory === "all" || cardCat === activeCategory);
      const matchesSearch = (activeSearch === "" || cardText.includes(activeSearch));

      if (matchesCat && matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (counterBadge) {
      if (visibleCount === 1) {
        counterBadge.innerText = `${visibleCount} položka`;
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        counterBadge.innerText = `${visibleCount} položky`;
      } else {
        counterBadge.innerText = `${visibleCount} položek`;
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetCat = btn.getAttribute("data-filter");
      filterCatalog(targetCat, activeSearch);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterCatalog(activeCategory, e.target.value);
    });
  }

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalClose = document.getElementById("techModalClose");
  const modalTitle = document.getElementById("modalTechTitle");
  const modalCat = document.getElementById("modalTechCat");
  const modalDesc = document.getElementById("modalTechDesc");
  const modalSpecsBody = document.getElementById("modalSpecsBody");
  const modalInquireBtn = document.getElementById("modalInquireBtn");

  function openTechModal(techId) {
    const item = techCatalogData.find(t => t.id === String(techId)) || techCatalogData[0];
    if (!item || !modalBackdrop) return;

    if (modalTitle) modalTitle.innerText = item.title;
    if (modalCat) modalCat.innerText = item.category;
    if (modalDesc) modalDesc.innerText = item.description;

    if (modalSpecsBody) {
      modalSpecsBody.innerHTML = "";
      item.specs.forEach(s => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.innerText = s.param;
        const td = document.createElement("td");
        td.innerText = s.value;
        tr.appendChild(th);
        tr.appendChild(td);
        modalSpecsBody.appendChild(tr);
      });
    }

    modalBackdrop.classList.add("active");
    modalBackdrop.style.display = "flex";
    modalBackdrop.style.visibility = "visible";
    modalBackdrop.style.opacity = "1";
    document.body.style.overflow = "hidden";
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("active");
    modalBackdrop.style.display = "none";
    modalBackdrop.style.visibility = "hidden";
    modalBackdrop.style.opacity = "0";
    document.body.style.overflow = "";
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const tid = card.getAttribute("data-open-tech") || card.getAttribute("data-id");
      openTechModal(tid);
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeTechModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener("click", () => {
      closeTechModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("active")) {
      closeTechModal();
    }
  });

  const form = document.getElementById("techInquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Děkujeme za odeslání technologické poptávky. Náš technologický tým v Tetčicích Vás bude kontaktovat.");
      form.reset();
    });
  }
});
