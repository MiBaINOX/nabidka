document.addEventListener('DOMContentLoaded', () => {
  const catalogData = [
    {
      id: "haas-vf-7-40",
      title: "Vertikální CNC centrum HAAS VF-7/40 (4-osé)",
      category: "cnc",
      categoryName: "CNC obrábění",
      image: "assets/cnc_haas_vf7_40.jpg",
      description: "Robustní velkoformátové 4-osé vertikální obráběcí centrum pro přesné opracování rozměrných a těžkých dílců, svařenců a forem až do hmotnosti 1 814 kg.",
      specs: {
        "Dráhy pojezdu (X × Y × Z)": "2 134 × 813 × 762 mm",
        "Upínací plocha stolu": "2 134 × 711 mm",
        "Maximální zatížení stolu": "1 814 kg",
        "Otáčky vřetene": "7 500 ot./min",
        "Osy obrábění": "4 osy (instalovaná rotační dělička)",
        "Kužel vřetene": "ISO 40"
      },
      advantages: [
        "Velký pojezd v ose X (2 134 mm) umožňuje obrábění dlouhých profilů a rozměrných desek",
        "Možnost 4-osého kontinuálního frézování a přesného polohování rotačních ploch",
        "Vysoká tuhost konstrukce pro silové hrubování i mikronové dokončování"
      ]
    },
    {
      id: "haas-vf-5-40xt",
      title: "Vertikální CNC centrum HAAS VF-5/40 XT",
      category: "cnc",
      categoryName: "CNC obrábění",
      image: "assets/cnc_haas_vf5_40xt.jpg",
      description: "Výkonné vertikální centrum s prodlouženým pojezdem XT vhodné pro středně velké a rozměrné dílce i vícekusové upínání sérií dílů.",
      specs: {
        "Dráhy pojezdu (X × Y × Z)": "1 524 × 660 × 635 mm",
        "Upínací plocha stolu": "1 575 × 584 mm",
        "Maximální zatížení stolu": "1 814 kg",
        "Otáčky vřetene": "8 100 ot./min",
        "Kužel vřetene": "ISO 40",
        "Počet nástrojů v zásobníku": "24+1 nástrojových pozic"
      },
      advantages: [
        "Prodloužené pojezdy XT pro rozměrné díly nebo upnutí více svěráků vedle sebe",
        "Rychlá výměna nástrojů zkracující vedlejší časy obrábění",
        "Přímé odměřování a vysoká opakovatelná přesnost polohování"
      ]
    },
    {
      id: "haas-vf-3ss",
      title: "Vysokorychlostní CNC centrum HAAS VF-3SS (Super-Speed)",
      category: "cnc",
      categoryName: "CNC obrábění",
      image: "assets/cnc_haas_vf3ss.jpg",
      description: "Super-Speed vertikální 4-osé obráběcí centrum s vysokootáčkovým vřetenem (12 000 ot./min) určené pro vysoce produktivní a přesné frézování.",
      specs: {
        "Dráhy pojezdu (X × Y × Z)": "1 016 × 508 × 635 mm",
        "Upínací plocha stolu": "1 219 × 457 mm",
        "Maximální zatížení stolu": "794 kg",
        "Otáčky vřetene": "12 000 ot./min",
        "Osy obrábění": "4 osy (instalovaná dělička)",
        "Rychloposuvy os": "až 35,6 m/min"
      },
      advantages: [
        "Vysokorychlostní vřeteno Super-Speed zaručuje vynikající kvalitu povrchu u hliníku i oceli",
        "Dělička umožňuje komplexní tvarové opracování na 4 řízených osách",
        "Vynikající dynamika pro malosériovou i středně sériovou zakázkovou výrobu"
      ]
    },
    {
      id: "konvencni-frezovani",
      title: "Konvenční frézování FGV32, FV32 & FA3V",
      category: "konvencni",
      categoryName: "Konvenční výroba",
      image: "assets/dilna_vyroba_0492.jpg",
      description: "Obrábění na osvědčených vertikálních a konzolových frézách pro kusovou zakázkovou výrobu, přípravné operace, drážkování a úpravy dílců.",
      specs: {
        "Strojní park": "Frézy FGV32, FV32, FA3V",
        "Typ operací": "Rovinné a tvarové frézování, srážení hran, drážky",
        "Upínání": "Strojní svěráky, otočné stoly, magnetické desky",
        "Využití": "Kusová výroba, prototypy, přípravky, opravy a úpravy"
      },
      advantages: [
        "Okamžitá flexibilita bez nutnosti programování CNC pro rychlé kusové zakázky",
        "Doplňková příprava polotovarů a hrubování před finálním CNC opracováním",
        "Dlouholeté zkušenosti v oboru kovoobrábění již od roku 1991"
      ]
    },
    {
      id: "deleni-materialu",
      title: "Dělení materiálu a řezání pásovou pilou",
      category: "konvencni",
      categoryName: "Konvenční výroba",
      image: "assets/produkt_dil_0494.jpg",
      description: "Přesné dělení tyčového, deskového i profilového materiálu na pásových pilách na kov s chlazením pro přesnou přípravu polotovarů.",
      specs: {
        "Strojní vybavení": "Průmyslové pásové pily na kov s chlazením",
        "Zpracovávané materiály": "Konstrukční a nástrojové oceli, nerez, slitiny hliníku, mosaz, bronz, plasty",
        "Přesnost řezu": "Kolmé i úhlové řezy dle výkresové specifikace",
        "Kapacita": "Dělení jednotlivých kusů i sériové svazkové řezání"
      },
      advantages: [
        "Přesné a čisté řezy bez tepelného ovlivnění struktury materiálu",
        "Plynulé zásobování CNC obráběcích center připravenými polotovary",
        "Nákup a skladování hutního materiálu od certifikovaných dodavatelů"
      ]
    },
    {
      id: "automotive-komponenty",
      title: "Přesné součásti pro automobilový průmysl",
      category: "aplikace",
      categoryName: "Odvětví a produkty",
      image: "assets/produkt_dil_0498.jpg",
      description: "Sériová a malosériová výroba vysoce přesných kovových součástí, čepů, přírub a těles pro automobilový průmysl s důrazem na toleranci a opakovatelnost.",
      specs: {
        "Odvětví": "Automobilový průmysl (Automotive Tier 1 / Tier 2 dodávky)",
        "Druh dílců": "Hřídele, pouzdra, příruby, úchyty, konzoly a mechanismy",
        "Tolerance": "Úzké výrobní tolerance dle výkresové dokumentace",
        "Kontrola jakosti": "Mezioperační a výstupní rozměrová kontrola kalibrovanými měřidly"
      },
      advantages: [
        "100% shoda s dodanou výkresovou dokumentací a technickými podmínkami",
        "Vysoká spolehlivost dodávek v dohodnutých termínech pro plynulou montáž",
        "Zpracování široké škály konstrukčních ocelí i lehkých slitin"
      ]
    },
    {
      id: "rozvadece-elektromotory",
      title: "Díly pro rozvaděče a elektrické motory",
      category: "aplikace",
      categoryName: "Odvětví a produkty",
      image: "assets/produkt_dil_0500.jpg",
      description: "Výroba frézovaných nosných prvků, montážních desek rozvaděčů, ložiskových štítů, vík a skříní pro elektrické motory a průmyslové pohony.",
      specs: {
        "Odvětví": "Elektrotechnika, výroba rozvaděčů, elektromotory a pohony",
        "Druh dílců": "Příruby motorů, ložiskové domky, chladicí desky, nosníky rozvaděčů",
        "Tolerance uložení": "Přesná uložení pro valivá ložiska a souosost hřídelí",
        "Povrch": "Možnost galvanického pokovení nebo práškového lakování"
      },
      advantages: [
        "Dlouholetá specializace a stabilní dodávky pro výrobce elektrotechniky",
        "Možnost zhotovení prototypů i opakovaných výrobních sérií",
        "Předvrtání montážních otvorů a řezání závitů na hotových dílech"
      ]
    },
    {
      id: "povrchove-upravy",
      title: "Komplexní povrchové úpravy & zušlechtění",
      category: "sluzby",
      categoryName: "Kompletní servis",
      image: "assets/produkt_dil_0501.jpg",
      description: "Zajištění kompletní dodávky dílu včetně všech požadovaných finálních povrchových úprav od zinkování a niklování přes eloxování až po karbonitridaci.",
      specs: {
        "Galvanické úpravy": "Galvanické zinkování (modrý, žlutý, černý chromát), niklování",
        "Eloxování": "Přírodní elox, tvrdý elox pro otěruvzdornost hliníkových součástí",
        "Tepelné a chemické úpravy": "Karbonitridace, kalení, zušlechťování ocelí",
        "Mechanické a lakýrnické": "Tryskání balotinou a pískem, práškové lakování (komaxit)"
      },
      advantages: [
        "Zákazník obdrží 100% hotový, povrchově upravený díl připravený přímo k montáži",
        "Garance rovnoměrné tloušťky vrstvy a vysoké korozní odolnosti",
        "Úspora logistických nákladů a času – realizace od výkresu po hotový dílec"
      ]
    }
  ];

  const searchInput = document.getElementById('catalogSearch');
  const searchCounter = document.getElementById('searchCounter');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const catalogCards = document.querySelectorAll('.catalog-item-card');

  let activeCategory = 'all';
  let searchQuery = '';

  function updateCatalog() {
    let visibleCount = 0;
    catalogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-cat') || '';
      const cardTitle = (card.querySelector('.item-title')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('.item-desc')?.textContent || '').toLowerCase();
      
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = (!searchQuery || cardTitle.includes(searchQuery) || cardDesc.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      if (visibleCount === 1) {
        searchCounter.textContent = '1 položka';
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        searchCounter.textContent = `${visibleCount} položky`;
      } else {
        searchCounter.textContent = `${visibleCount} položek`;
      }
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter') || 'all';
      updateCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      updateCatalog();
    });
  }

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalLead = document.getElementById('modalLead');
  const modalSpecsWrap = document.getElementById('modalSpecsWrap');
  const modalAdvList = document.getElementById('modalAdvList');

  function openModal(id) {
    const item = catalogData.find(x => x.id === id);
    if (!item || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalImage) {
      modalImage.src = item.image;
      modalImage.alt = item.title;
    }
    if (modalLead) modalLead.textContent = item.description;

    if (modalSpecsWrap) {
      let rows = '';
      for (const [key, val] of Object.entries(item.specs)) {
        rows += `<tr><th>${key}</th><td>${val}</td></tr>`;
      }
      modalSpecsWrap.innerHTML = `
        <div class="table-responsive">
          <table class="tech-specs-table">
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    }

    if (modalAdvList) {
      let advHtml = '';
      item.advantages.forEach(adv => {
        advHtml += `
          <li class="modal-adv-item">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${adv}</span>
          </li>
        `;
      });
      modalAdvList.innerHTML = advHtml;
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-tech]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-open-tech');
      openModal(id);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  const reveals = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(easeOutQuad * (target - start) + start);

        counter.textContent = current.toLocaleString('cs-CZ');

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = target.toLocaleString('cs-CZ');
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const heroSection = document.querySelector('.editorial-hero');
  if (heroSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounters();
        }
      });
    }, { threshold: 0.2 });
    counterObserver.observe(heroSection);
  } else {
    runCounters();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  const rfqForm = document.getElementById('rfqForm');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Děkujeme za vaši poptávku. V reálném provozu bude odeslána na adresu kovogryc@volny.cz.');
      rfqForm.reset();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash;
  const isOfferRef = urlParams.get('ref') === 'nabidka' || hash.includes('ref=nabidka');
  const proposalBanner = document.getElementById('proposalBanner');
  if (isOfferRef && proposalBanner) {
    proposalBanner.style.display = 'block';
  }
});
