document.addEventListener("DOMContentLoaded", () => {
  const catalogData = [
    {
      id: "stroj_ctx510",
      title: "DMG MORI CTX 510 eco",
      category: "soustruhy",
      categoryName: "CNC soustružení",
      badge: "Oběžný Ø 680 mm",
      image: "assets/ctx510eco-small.jpeg",
      desc: "Výkonné CNC soustružnické centrum pro přesné rotační součástky s točným průměrem až 465 mm, pojezdem Z 1 050 mm a poháněnými nástroji.",
      specs: {
        "Oběžný průměr max.": "680 mm",
        "Točný průměr max.": "465 mm",
        "Příčný pojezd (X)": "300 mm",
        "Podélný pojezd (Z)": "1 050 mm",
        "Průchod tyče": "76 mm",
        "Sklíčidlo": "250 mm",
        "Počet nástrojových míst": "12 pozic (z toho 6 poháněných nástrojů)",
        "Rozsah otáček vřetene": "max. 3 250 ot/min",
        "Výkon pohonu (40% / 100% zatížení)": "33 / 22 kW"
      },
      advantages: [
        "Vysoký výkon pohonu 33 kW umožňující hrubování i jemné dokončování ocelí i slitin",
        "6 poháněných nástrojových míst pro vrtání a frézování mimo osu v jednom upnutí",
        "Podélný pojezd 1 050 mm pro obrábění dlouhých hřídelů a vřetenových dílů"
      ]
    },
    {
      id: "stroj_ctx310",
      title: "DMG MORI CTX 310 eco",
      category: "soustruhy",
      categoryName: "CNC soustružení",
      badge: "Max. 5 000 ot/min",
      image: "assets/ctx310eco-small.jpeg",
      desc: "Rychlý a vysoce přesný kompaktní CNC soustruh pro kusovou a malosériovou výrobu tvarově náročných rotačních dílů.",
      specs: {
        "Oběžný průměr max.": "330 mm",
        "Točný průměr max.": "200 mm",
        "Příčný pojezd (X)": "160 mm",
        "Podélný pojezd (Z)": "450 mm",
        "Průchod tyče": "51 mm",
        "Sklíčidlo": "210 mm",
        "Počet nástrojových míst": "12 pozic (z toho 6 poháněných nástrojů)",
        "Rozsah otáček vřetene": "max. 5 000 ot/min",
        "Výkon pohonu (40% / 100% zatížení)": "16,5 / 11 kW"
      },
      advantages: [
        "Vysokorychlostní vřeteno až 5 000 ot/min pro špičkovou kvalitu a lesk obráběného povrchu",
        "Poháněné nástroje pro axiální a radiální vrtací a frézovací operace",
        "Vynikající dynamika zkracující vedlejší časy při výrobě menších přesných dílů"
      ]
    },
    {
      id: "stroj_ctx635",
      title: "DMG MORI CTX 635 eco (DMC 635 eco)",
      category: "obrabeci-centra",
      categoryName: "CNC frézování",
      badge: "Stůl 790 × 560 mm",
      image: "assets/ctx635eco-small.jpeg",
      desc: "Vertikální CNC frézovací a obráběcí centrum pro komplexní rovinné, tvarové a 3D obrábění prizmatických součástí.",
      specs: {
        "Pojezd osy X": "635 mm",
        "Pojezd osy Y": "510 mm",
        "Pojezd osy Z": "460 mm",
        "Upínací plocha stolu": "790 × 560 mm (s T-drážkami)",
        "Zatížení stolu max.": "600 kg",
        "Rozsah otáček vřetene": "max. 10 000 ot/min",
        "Rychlost posuvu": "20 m/min",
        "Upínací kužel vřetene": "SK 40",
        "Kapacita zásobníku nástrojů": "20 pozic",
        "Čas výměny nástroje": "1,6 s (5 s od řezu k řezu)",
        "Manipulační výška stolu": "720 mm"
      },
      advantages: [
        "Rychlá výměna nástroje 1,6 s a rychloposuv 20 m/min pro maximální efektivitu",
        "Pevná litinová konstrukce s nosností stolu až 600 kg",
        "Vysokootáčkové vřeteno 10 000 ot/min pro přesné frézování forem, přírub a skříní"
      ]
    },
    {
      id: "agie_cut20p",
      title: "GF AgieCharmilles CUT 20 P",
      category: "elektroeroze",
      categoryName: "Elektroerozivní obrábění (EDM)",
      badge: "Přesnost Ra < 0.25 µm",
      image: "assets/dratovka_small.png",
      desc: "Přesná CNC drátová elektroerozivní řezačka pro dělení a řezání kalených materiálů, střižných nástrojů a mikrogeometrií.",
      specs: {
        "Pojezdy os (X × Y × Z)": "350 × 250 × 250 mm",
        "Pojezdy přídavných os (U × V)": "90 × 90 mm",
        "Úhlové řezy": "±25° / 80 mm",
        "Max. rozměry obrobku (D × Š × V)": "820 × 680 × 250 mm",
        "Max. hmotnost obrobku": "400 kg",
        "Průměry řezného drátu": "0,10 / 0,15 / 0,20 / 0,25 / 0,30 mm",
        "Dosažitelná drsnost Ra": "< 0,25 µm",
        "Typ vedení drátu": "Uzavřená diamantová vodítka",
        "Typ odměřování": "Lineární pravítka (XY) / enkodér (UVZ)",
        "Rozlišení serva a řízení": "0,1 µm",
        "Generátor": "Integrovaný IPG-V (řezání bez bílé vrstvy)",
        "Max. řezný výkon": "300 mm²/min"
      },
      advantages: [
        "Obrábění libovolně tvrdých vodivých materiálů včetně kalených nástrojových ocelí a tvrdokovů",
        "Dokonalá kvalita povrchu Ra < 0,25 µm bez tepelně ovlivněné bílé vrstvy",
        "Lineární pravítka a uzavřená diamantová vodítka s rozlišením 0,1 µm"
      ]
    },
    {
      id: "vyroba_soucasti",
      title: "Zakázková výroba strojírenských součástí",
      category: "sluzby",
      categoryName: "Výrobní služby",
      badge: "Kusová i sériová produkce",
      image: "assets/promo1.png",
      desc: "Komplexní zakázková výroba přesných strojírenských dílců z ocelí, nerezi, duralu a barevných kovů dle výkresové dokumentace.",
      specs: {
        "Typy výroby": "Kusová, prototypová, malosériová i sériová výroba",
        "Zpracovávané materiály": "Konstrukční a nástrojové oceli, nerez, dural, mosaz, bronz, plasty",
        "Výrobní technologie": "CNC soustružení, CNC frézování, EDM drátové řezání",
        "Podklady pro výrobu": "Výkresová dokumentace v PDF/DWG/DXF nebo 3D CAD modely (STEP/IGES)",
        "Doplňkové operace": "Zajištění tepelného zpracování (kalení, zušlechťování) a povrchových úprav"
      },
      advantages: [
        "Dlouholeté zkušenosti operátorů a programátorů od roku 2008",
        "Vysoká flexibilita při kusových zakázkách i opakovaných sériích",
        "Optimalizace výrobních procesů pro snížení výrobních nákladů zákazníka"
      ]
    },
    {
      id: "deleni_materialu",
      title: "Dělení materiálu a příprava polotovarů",
      category: "sluzby",
      categoryName: "Příprava výroby",
      badge: "Přesné pásové řezání",
      image: "assets/promo3.png",
      desc: "Přesné dělení hutních materiálů, kruhových tyčí, trubek a bloků na moderních pásových pilách pro zajištění návazného obrábění.",
      specs: {
        "Technologie dělení": "Výkonné průmyslové pásové pily na kov",
        "Dělený sortiment": "Kruhové tyče, plné čtyřhrany, profily, trubky a bloky",
        "Kapacita dělení": "Oceli běžných jakostí, legované a nerezové materiály",
        "Přesnost řezu": "Čistý kolmý řez s minimálním přídavkem na obrábění",
        "Příprava polotovarů": "Příprava pro soustružnické a frézovací operace bez materiálových ztrát"
      },
      advantages: [
        "Rychlá příprava materiálu přímo v areálu Staré Město bez zbytečných prostojů",
        "Minimalizace prořezů a optimální využití hutního materiálu",
        "Plynulé zásobování CNC pracovišť děleným materiálem"
      ]
    },
    {
      id: "kontrola_kvality",
      title: "Technická kontrola kvality a měření",
      category: "sluzby",
      categoryName: "Kontrola kvality",
      badge: "100% rozměrová kontrola",
      image: "assets/promo2.png",
      desc: "Mezioperační a výstupní technická kontrola geometrické přesnosti a drsnosti povrchu kalibrovaným měřicím vybavením.",
      specs: {
        "Rozsah měření": "Délkové rozměry, průměry, úhly, rovnoběžnost, kolmost a drsnost Ra",
        "Měřicí přístroje": "Digitální posuvná měřidla, mikrometry, výškoměry, pasametry, kalibry",
        "Výstupní dokumentace": "Měřicí protokoly a záznamy o shodě parametrů s výkresem",
        "Režim kontroly": "Vstupní kontrola materiálu, mezioperační měření a 100% výstupní prověrka",
        "Opakovatelnost": "Garance mikronové přesnosti a dodržení tolerancí dle ISO"
      },
      advantages: [
        "Důsledná kontrola zabraňující expedici neshodných výrobků",
        "Pravidelně kalibrované měřicí přístroje v souladu s metrologickými předpisy",
        "Kompletní protokolování rozměrů na vyžádání odběratele"
      ]
    }
  ];

  const mobileToggle = document.getElementById("mobileToggle");
  const mainNav = document.getElementById("mainNav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
      });
    });
  }

  const revealElements = document.querySelectorAll(".reveal");
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

  const counterElements = document.querySelectorAll(".counter[data-target]");
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          if (!isNaN(target)) {
            let start = 0;
            const duration = 1200;
            const startTime = performance.now();
            const step = now => {
              const progress = Math.min((now - startTime) / duration, 1);
              el.textContent = Math.floor(progress * (target - start) + start);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = target;
              }
            };
            requestAnimationFrame(step);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    counterElements.forEach(el => counterObserver.observe(el));
  }

  const searchInput = document.getElementById("searchInput");
  const filterPills = document.getElementById("filterPills");
  const filterButtons = filterPills ? filterPills.querySelectorAll(".filter-btn") : [];
  const cards = document.querySelectorAll(".cat-card");
  const searchCounter = document.getElementById("searchCounter");

  let currentCategory = "all";
  let currentQuery = "";

  function filterCards() {
    let visibleCount = 0;
    const query = currentQuery.trim().toLowerCase();

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category") || "";
      const text = card.textContent.toLowerCase();

      const matchesCat = (currentCategory === "all" || cardCategory === currentCategory);
      const matchesSearch = (!query || text.includes(query));

      if (matchesCat && matchesSearch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (searchCounter) {
      if (visibleCount === 1) {
        searchCounter.textContent = "1 položka";
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        searchCounter.textContent = visibleCount + " položky";
      } else {
        searchCounter.textContent = visibleCount + " položek";
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", e => {
      currentQuery = e.target.value;
      filterCards();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      filterCards();
    });
  });

  const modalBackdrop = document.getElementById("techModalBackdrop");
  const modalClose = document.getElementById("techModalClose");
  const modalCat = document.getElementById("modalCat");
  const modalTitle = document.getElementById("modalTitle");
  const modalBadge = document.getElementById("modalBadge");
  const modalImg = document.getElementById("modalImg");
  const modalDesc = document.getElementById("modalDesc");
  const modalTableBody = document.getElementById("modalTableBody");
  const modalAdvantages = document.getElementById("modalAdvantages");
  const modalInquiryBtn = document.getElementById("modalInquiryBtn");

  function openTechModal(techId) {
    const item = catalogData.find(x => x.id === techId);
    if (!item || !modalBackdrop) return;

    if (modalCat) modalCat.textContent = item.categoryName;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalBadge) modalBadge.textContent = item.badge;
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.title;
    }
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalTableBody) {
      modalTableBody.innerHTML = "";
      Object.entries(item.specs).forEach(([k, v]) => {
        const tr = document.createElement("tr");
        const tdK = document.createElement("td");
        tdK.textContent = k;
        const tdV = document.createElement("td");
        tdV.textContent = v;
        tr.appendChild(tdK);
        tr.appendChild(tdV);
        modalTableBody.appendChild(tr);
      });
    }

    if (modalAdvantages) {
      modalAdvantages.innerHTML = "";
      item.advantages.forEach(adv => {
        const li = document.createElement("li");
        li.textContent = adv;
        modalAdvantages.appendChild(li);
      });
    }

    modalBackdrop.classList.add("active");
    modalBackdrop.style.display = "flex";
    modalBackdrop.style.visibility = "visible";
    modalBackdrop.style.opacity = "1";
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("active");
    modalBackdrop.style.display = "none";
    modalBackdrop.style.visibility = "hidden";
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const techId = card.getAttribute("data-open-tech") || card.getAttribute("data-id");
      if (techId) openTechModal(techId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", e => {
      e.stopPropagation();
      closeTechModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", e => {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeTechModal();
    }
  });

  if (modalInquiryBtn) {
    modalInquiryBtn.addEventListener("click", () => {
      closeTechModal();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash;
  const isOfferRef = urlParams.get("ref") === "nabidka" || hash.includes("ref=nabidka");
  const proposalBanner = document.getElementById("proposalBanner");
  if (isOfferRef && proposalBanner) {
    proposalBanner.style.display = "block";
  }
});
