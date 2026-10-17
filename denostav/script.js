document.addEventListener('DOMContentLoaded', function () {
  const catalogData = [
    {
      id: "opravy-bytoveho-fondu",
      title: "Opravy bytového fondu a rekonstrukce na klíč",
      category: "rekonstrukce",
      category_label: "Rekonstrukce",
      short_desc: "Kompletní rekonstrukce bytového fondu domů, bytových jednotek i firemních prostor včetně profesí elektro-MaR, ZTI a ÚT formou na klíč.",
      realization: "Bytové domy a rezidenční objekty Brno",
      image: "assets/realizace_bytovy_fond.jpg",
      norma: "ČSN 73 0810",
      specs: {
        "Rozsah dodávky": "Kompletní dodávka na klíč (stavební i technologická část)",
        "Zahrnuté profese": "Elektroinstalace, MaR, zdravotechnika (ZTI), ústřední vytápění (ÚT)",
        "Stavební normy": "ČSN 73 0810, ČSN 73 4301",
        "Termín realizace": "Dle harmonogramu a technologických postupů",
        "Záruční doba": "60 měsíců na stavební práce"
      },
      features: [
        "Koordinace všech stavebních řemesel pod jedním jednatelem",
        "Individuální přístup a detailní položkový rozpočet",
        "Minimální omezení chodu objektu během realizace",
        "Kompletní revizní zprávy a kolaudační dokumentace"
      ]
    },
    {
      id: "demolicni-bouraci-prace",
      title: "Demoliční a bourací práce s odvozem suti",
      category: "bouraci-prace",
      category_label: "Demolice",
      short_desc: "Veškeré bourací práce menšího i většího rozsahu včetně šetrného roztřídění a ekologického odstranění suti od konzultace po realizaci.",
      realization: "Příprava stavenišť a objektů Brno a okolí",
      image: "assets/realizace_rekonstrukce.jpg",
      norma: "ČSN 73 0035",
      specs: {
        "Rozsah prací": "Ruční i strojní demolice, bourání příček, otvorů a podlah",
        "Nakládání s odpady": "Třídění, nakládka, odvoz a certifikovaná recyklace suti",
        "Bezpečnost": "Statické zajištění a ochrana navazujících konstrukcí",
        "Normové krytí": "Zákon o odpadech č. 541/2020 Sb., ČSN 73 0035",
        "Strojní park": "Pneumatická a demoliční technika, kontejnery"
      },
      features: [
        "Kompletní služby: od statické konzultace po úklid staveniště",
        "Průkazná evidence ekologické likvidace odpadů",
        "Rychlý nástup na zakázku v Brně a Jihomoravském kraji",
        "Vysoký důraz na bezpečnost práce a bezprašné technologie"
      ]
    },
    {
      id: "pozemni-obcanska-vystavba",
      title: "Pozemní, inženýrská a občanská výstavba",
      category: "novostavby",
      category_label: "Novostavby",
      short_desc: "Komplexní generální dodávky v oblasti průmyslové, inženýrské, bytové i občanské výstavby s garancí špičkové kvality a termínů.",
      realization: "Občanské a bytové stavby Brno a Jihomoravský kraj",
      image: "assets/realizace_novostavby.jpg",
      norma: "ČSN EN 1990",
      specs: {
        "Typ stavby": "Pozemní, bytové, občanské a inženýrské stavby",
        "Režim výstavby": "Generální dodavatel stavby (GDS)",
        "Konstrukční systémy": "Monolitické i zděné konstrukce, montované prvky",
        "Technický dozor": "Autorizovaný inženýr ČKAIT, stálý autorský dozor",
        "Kvalitativní standard": "Certifikované řízení jakosti prováděných prací"
      },
      features: [
        "Striktní dodržování smluvních milníků a rozpočtu",
        "Komplexní inženýrská činnost a jednání s úřady",
        "Ověření dodavatelé materiálů - jedničky českého i evropského trhu",
        "Transparentní stavební deník a týdenní kontrolní dny"
      ]
    },
    {
      id: "zateplovani-fasad-etics",
      title: "Zateplovací fasádní systémy ETICS",
      category: "fasady",
      category_label: "Fasády ETICS",
      short_desc: "Vnější kontaktní zateplovací systémy rodinných i bytových domů s certifikací ETICS dle ČSN 73 0540 pro maximální energetickou úsporu.",
      realization: "Zateplení bytových a rodinných domů",
      image: "assets/realizace_zatepleni_etics.jpg",
      norma: "ČSN 73 0540-2",
      specs: {
        "Technologie": "Vnější kontaktní zateplovací systém (ETICS)",
        "Izolanty": "Fasádní EPS 100F, grafitový polystyren, minerální vata MW",
        "Tepelný odpor": "Optimalizace součinitele prostupu tepla U pod 0,18 W/(m²·K)",
        "Povrchové úpravy": "Silikonové a silikátové omítky se samočisticím efektem",
        "Certifikace systému": "ETAG 004, ČSN 73 0540-2, ČSN EN 13499"
      },
      features: [
        "Snížení tepelných ztrát objektu až o 45 %",
        "Ochrana konstrukce před vnějšími klimatickými vlivy a mrazem",
        "Moderní barevné řešení a architektonické prvky fasády",
        "Kompletní klempířské prvky, parapety a soklové lišty"
      ]
    },
    {
      id: "sadrokartonove-konstrukce",
      title: "Sádrokartonové konstrukce a suchá výstavba",
      category: "interiery",
      category_label: "Interiéry",
      short_desc: "Montáž certifikovaných SDK podhledů, akustických příček, předsazených stěn a podkrovních vestaveb pro rychlou a čistou dispozici.",
      realization: "Interiéry bytů a komerčních prostor Brno",
      image: "assets/realizace_obcanska_vystavba.jpg",
      norma: "ČSN EN 520",
      specs: {
        "Konstrukční typy": "Jednoduché i dvojité příčky, minerální podhledy, šachtové stěny",
        "Akustická izolace": "Vzduchová neprůzvučnost Rw až 62 dB dle skladby",
        "Požární odolnost": "Systémy EI 30 až EI 90 s protipožárními deskami",
        "Normové krytí": "ČSN EN 520, ČSN 73 0834",
        "Kvalita povrchu": "Tmelení ve stupních Q2 až Q4 (vysoký lesk)"
      },
      features: [
        "Dokonale rovné povrchy připravené pro výmalbu a tapetování",
        "Rychlá suchá montáž bez vnášení technologické vlhkosti",
        "Ideální řešení pro skryté rozvody elektroinstalace a vzduchotechniky",
        "Akustické útlumy pro maximální soukromí v bytech a kancelářích"
      ]
    },
    {
      id: "stavebni-material-montaze",
      title: "Dodávka stavebních materiálů a montáže",
      category: "materialy",
      category_label: "Materiály",
      short_desc: "Kompletní logistika a dodávky prvotřídních stavebních materiálů jedniček na českém i zahraničním trhu včetně odborné montáže.",
      realization: "Logistické a materiálové zajištění staveb",
      image: "assets/hero_editorial.jpg",
      norma: "ČSN EN 1996",
      specs: {
        "Sortiment": "Zdicí materiály, suché maltové směsi, izolace, hydroizolace, obklady",
        "Partnerská síť": "Renomovaní výrobci a distributori v ČR i zahraničí",
        "Logistika": "Doprava na staveniště autem s hydraulickou rukou dle harmonogramu",
        "Kvalitativní garance": "Prohlášení o vlastnostech (DoP) a certifikace CE ke všem dodávkám",
        "Úklid staveniště": "Průběžný odvoz obalů a odpadů v souladu s legislativou"
      },
      features: [
        "Příznivé velkoobchodní ceny přenesené přímo na investora",
        "Přesné dávkování materiálu minimalizující prostoje a staveništní odpad",
        "Garantovaná skladová dostupnost klíčových konstrukčních prvků",
        "Odborná konzultace volby materiálů pro konkrétní stavební účel"
      ]
    }
  ];

  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
      });
    });
  }

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  const counterEls = document.querySelectorAll('.counter');
  if (counterEls.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        counterObserver.unobserve(el);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }

        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        if (isNaN(target)) return;

        el.textContent = '0';
        const duration = 1400;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          const currentVal = Math.floor(easeOutQuad * target);
          el.textContent = currentVal;
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }, { threshold: 0.2 });

    counterEls.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const catCards = document.querySelectorAll('.cat-card');
  const searchCounter = document.getElementById('searchCounter');
  let currentFilter = 'all';

  function filterCatalog() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    catCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();
      const matchesCategory = (currentFilter === 'all' || cardCategory === currentFilter);
      const matchesQuery = (!query || text.indexOf(query) !== -1);

      if (matchesCategory && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      searchCounter.textContent = visibleCount;
    }
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      filterCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterCatalog);
  }

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalCloseSec = document.getElementById('modalCloseSecondary');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalImage = document.getElementById('modalImage');
  const modalSpecsBody = document.getElementById('modalSpecsBody');
  const modalFeaturesList = document.getElementById('modalFeaturesList');

  function openTechModal(techId) {
    const item = catalogData.find(function (d) { return d.id === techId; });
    if (!item || !modalBackdrop) return;

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategory) modalCategory.textContent = item.category_label;
    if (modalDesc) modalDesc.textContent = item.short_desc;
    if (modalImage) {
      modalImage.src = item.image;
      modalImage.alt = item.title;
    }

    if (modalSpecsBody) {
      modalSpecsBody.innerHTML = '';
      for (const [key, val] of Object.entries(item.specs)) {
        const tr = document.createElement('tr');
        const thKey = document.createElement('td');
        thKey.textContent = key;
        const tdVal = document.createElement('td');
        tdVal.textContent = val;
        tr.appendChild(thKey);
        tr.appendChild(tdVal);
        modalSpecsBody.appendChild(tr);
      }
    }

    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = '';
      item.features.forEach(function (f) {
        const li = document.createElement('li');
        li.textContent = f;
        modalFeaturesList.appendChild(li);
      });
    }

    modalBackdrop.classList.add('active');
    modalBackdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-card-detail').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const techId = btn.getAttribute('data-id');
      if (techId) {
        openTechModal(techId);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeTechModal);
  }
  if (modalCloseSec) {
    modalCloseSec.addEventListener('click', closeTechModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeTechModal();
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.bottom = '16px';
    banner.style.right = '16px';
    banner.style.zIndex = '9999';
    banner.style.background = '#18202A';
    banner.style.color = '#FFFFFF';
    banner.style.padding = '12px 18px';
    banner.style.borderRadius = '8px';
    banner.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
    banner.style.fontSize = '13px';
    banner.style.border = '1px solid #C25E38';
    banner.textContent = 'Exkluzivní nabídka modernizace webové prezentace pro DENOSTAV s.r.o.';
    document.body.appendChild(banner);
  }
});
