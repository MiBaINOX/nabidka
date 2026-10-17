document.addEventListener('DOMContentLoaded', function () {
  const catalogData = {
    'veka-softline-82-md-plus': {
      name: 'VEKA SOFTLINE 82 MD Plus (Trojsklo)',
      category: 'Plastová okna',
      badge: 'Nejúspornější okenní systém',
      image: 'assets/images/veka-softline-82-md.jpg',
      desc: 'Špičkový 7komorový systém se stavební hloubkou 82 mm, středovým těsněním a prémiovým izolačním trojsklem pro nízkoenergetické a pasivní stavby.',
      specs: {
        'Stavební hloubka': '82 mm',
        'Počet komor': '7 komor v rámu i křídle',
        'Systém těsnění': '3 těsnicí roviny se středovým těsněním (MD)',
        'Tloušťka stěn': 'Třída A dle DIN EN 12608 (tloušťka 3,0 mm)',
        'Zasklení': 'Izolační trojsklo 4-18-4-18-4 (Ug = 0,5 W/m²K)',
        'Součinitel Uf rámu': '0,92 W/m²K',
        'Celkový prostup Uw': '0,73 W/m²K',
        'Distanční rámeček': 'Teplý nerezový distanční rámeček (TGI/Swisspacer)',
        'Celoobvodové kování': 'MACO Multi-Matic s mikroventilací a zvedačem křídla',
        'Technologie svarů': 'ContourLine se skrytým detailem bez retušování'
      },
      highlights: [
        'Garantovaná tloušťka vnějších stěn 3 mm pro maximální tvarovou stálost a pevnost rohových svarů',
        'Třetí středové těsnění spolehlivě chrání kování před vlhkostí a snižuje tepelné ztráty',
        'Masivní ocelové pozinkované výztuhy v rámu i křídle dle přísných směrnic VEKA',
        'Povrchová úprava v hladkých barvách, dřevodekorech nebo matných odstínech VEKA Spectral'
      ]
    },
    'veka-softline-82-md-basic': {
      name: 'VEKA SOFTLINE 82 MD Basic (Dvojsklo)',
      category: 'Plastová okna',
      badge: '7komorový standard MD',
      image: 'assets/images/veka-softline-82-md.jpg',
      desc: 'Konstrukčně identický 7komorový profil se středovým těsněním osazený úsporným izolačním dvojsklem pro rekonstrukce a bytové domy.',
      specs: {
        'Stavební hloubka': '82 mm',
        'Počet komor': '7 komor',
        'Systém těsnění': 'Středové těsnění (MD)',
        'Tloušťka stěn': 'Třída A (3,0 mm dle normy RAL)',
        'Zasklení': 'Izolační dvojsklo 4-16-4 s argonem (Ug = 1,1 W/m²K)',
        'Součinitel Uf rámu': '0,92 W/m²K',
        'Celkový prostup Uw': '1,1 W/m²K',
        'Distanční rámeček': 'Teplý nerezový distanční rámeček',
        'Celoobvodové kování': 'MACO Multi-Matic s bezpečnostním hříbkovým uzávěrem',
        'Technologie svarů': 'ContourLine automatické CNC svařování'
      },
      highlights: [
        'Ideální volba pro rozsáhlé rekonstrukce a bytové domy s důrazem na kvalitu třídy A',
        'Hluboké zapuštění izolačního skla radikálně eliminuje povrchovou kondenzaci v interiéru',
        'Příprava pro pozdější snadnou výměnu za izolační trojsklo až do šířky 52 mm'
      ]
    },
    'veka-softline-82-ad-plus': {
      name: 'VEKA SOFTLINE 82 AD Plus (Trojsklo)',
      category: 'Plastová okna',
      badge: 'Dorazové těsnění s trojsklem',
      image: 'assets/images/veka-softline-82-ad.jpg',
      desc: 'Moderní 7komorový systém s dvojitým dorazovým těsněním a izolačním trojsklem s vynikajícím poměrem ceny a tepelné izolace.',
      specs: {
        'Stavební hloubka': '82 mm',
        'Počet komor': '7 komor v rámu i křídle',
        'Systém těsnění': '2 dorazové těsnicí roviny (AD)',
        'Tloušťka stěn': 'Třída A dle DIN EN 12608',
        'Zasklení': 'Izolační trojsklo (Ug = 0,5 W/m²K)',
        'Součinitel Uf rámu': '1,0 W/m²K',
        'Celkový prostup Uw': '0,76 W/m²K',
        'Distanční rámeček': 'Teplý nerezový distanční rámeček',
        'Celoobvodové kování': 'MACO Multi-Matic, matně stříbrný antikorozní povrch',
        'Technologie svarů': 'ContourLine CNC s čistým detailem hrany'
      },
      highlights: [
        'Snadná údržba falcového prostoru díky absenci středové těsnicí ploutve v rámu',
        'Špičková tepelná propustnost Uw = 0,76 W/m²K splňuje přísná kritéria dotačních programů',
        'Celoobvodové kování MACO s integrovanou pojistkou proti chybné manipulaci'
      ]
    },
    'veka-softline-82-ad-basic': {
      name: 'VEKA SOFTLINE 82 AD Basic (Dvojsklo)',
      category: 'Plastová okna',
      badge: 'Ekonomická řada 82 mm',
      image: 'assets/images/veka-softline-82-ad.jpg',
      desc: 'Prověřený 7komorový systém s dorazovým těsněním a standardním izolačním dvojsklem pro komerční a administrativní objekty.',
      specs: {
        'Stavební hloubka': '82 mm',
        'Počet komor': '7 komor',
        'Systém těsnění': '2 roviny dorazového těsnění (AD)',
        'Tloušťka stěn': 'Třída A (stěny 3,0 mm)',
        'Zasklení': 'Izolační dvojsklo plněné argonem (Ug = 1,1 W/m²K)',
        'Součinitel Uf rámu': '1,1 W/m²K',
        'Celkový prostup Uw': '1,2 W/m²K',
        'Distanční rámeček': 'Nerezový distanční rámeček',
        'Celoobvodové kování': 'MACO Multi-Matic s mikroventilací',
        'Technologie svarů': 'ContourLine CNC automat'
      },
      highlights: [
        'Optimální ekonomické řešení pro průmyslové stavby, sklady a kancelářské budovy',
        'Robustní německé profily VEKA třídy A zaručují dlouhou životnost bez svěšování křídel',
        'Plně kompatibilní s doplňky a příslušenstvím řady VEKA Softline 82'
      ]
    },
    'veka-aluconnect': {
      name: 'VEKA AluConnect (Hliníkový systém)',
      category: 'AluConnect',
      badge: 'Inovativní spojení hliníku a PVC',
      image: 'assets/images/aluconnect-01.jpg',
      desc: 'Revoluční konstrukce spojující subtilní pevný hliníkový plášť s vysoce izolačním svařitelným plastovým jádrem a termoelastickým spojením.',
      specs: {
        'Stavební hloubka': '82 mm',
        'Konstrukce': 'Hliníkový profil s integrovaným PVC izolačním jádrem',
        'Technologie spoje': 'High-tech termoelastické lepení a svařované rohy',
        'Zasklení': 'Izolační trojsklo do šířky 48 mm (Ug = 0,5 W/m²K)',
        'Součinitel Uf rámu': '1,1 W/m²K',
        'Celkový prostup Uw': '0,79 W/m²K',
        'Povrchová úprava': 'Práškové lakování dle Qualicoat Class 2',
        'Středové těsnění': 'Středové těsnění a vícenásobné izolační komory',
        'Barevné možnosti': 'Kompletní vzorník RAL + sladění s dekory PVC oken',
        'Statika': 'Extrémní stabilita bez dodatečných ocelových výztuh křídla'
      },
      highlights: [
        'Unikátní kombinace: vzhled a odolnost hliníku s tepelnou izolací prémiového PVC okna',
        'Možnost opticky perfektní kombinace hliníkových a plastových prvků na jedné stavbě',
        'Výrazně vyšší tuhost a subtilní pohledové šířky vhodné pro moderní architekturu'
      ]
    },
    'zdvizne-posuvne-dvere-hst': {
      name: 'Zdvižně posuvné dveře HST VEKA',
      category: 'Zdvižně posuvné dveře HST',
      badge: 'Velkoformátové terasové portály',
      image: 'assets/images/vekaslide.jpg',
      desc: 'Bezbariérové zdvižně-posuvné portály velkorysých rozměrů pro plynulé propojení obytného interiéru se zahradou či terasou.',
      specs: {
        'Stavební hloubka': 'Dle systému VEKASLIDE / Softline 82',
        'Ovládání': 'Zdvižně-posuvný mechanismus s lehkým pojezdem křídla',
        'Práh': 'Plochý bezbariérový práh s přerušeným tepelným mostem',
        'Max. rozměry křídla': 'Až 3,0 m šířky na jedno křídlo (celkové formáty až 6,5 m)',
        'Zasklení': 'Izolační trojskla s Ug = 0,5 W/m²K',
        'Bezpečnost': 'Vícebodové bezpečnostní uzamykání třídy RC2',
        'Kolejnice': 'Nerezová pojezdová lišta s tichým chodem pojezdových vozíků',
        'Těsnění': 'Celoobvodové těsnění odolné proti nárazovému dešti',
        'Barvy': 'Kompletní paleta dekorů VEKA a hliníkové opláštění',
        'Výroba': 'Vlastní výrobní závod Hodonín na CNC automatech'
      },
      highlights: [
        'Lehké ovládání i u křídel s hmotností přes 300 kg pomocí ergonomické dlouhé páky',
        'Nulový bezbariérový přechod zaručuje bezpečný a pohodlný pohyb dětí i seniorů',
        'Tepelně izolační vlastnosti na úrovni nízkoenergetických oken zabraňují ochlazování podlahy'
      ]
    },
    'vchodove-dvere-veka-82': {
      name: 'Vchodové plastové dveře VEKA Softline 82',
      category: 'Plastové dveře',
      badge: 'Bezpečnostní vstupní systémy',
      image: 'assets/images/gava-761.jpg',
      desc: 'Masivní domovní dveře z profilů VEKA Softline 82 s rohovými ocelovými výztuhami, automatickými vícebodovými zámky GU a prémiovými výplněmi.',
      specs: {
        'Stavební hloubka': '82 mm vícekomorový profil',
        'Rohové spoje': 'Rozměrné ocelové výztuhy s integrovaným svařeným rohovým spojem',
        'Zámek': 'Vícebodový automatický zámek GU-SECURY Automatic',
        'Závěsy (panty)': 'Robustní dveřní závěsy Simonswerk se seřízením v 6 směrech',
        'Práh': 'Kombinovaný dělený práh Alu/PVC s přerušeným tepelným mostem (max. 20 mm)',
        'Dveřní výplně': 'Originální okrasné panely GAVA plast a VP trend',
        'Designové výplně': 'Možnost digitálního potisku na kaleném skle nebo nerezových intarzií',
        'Bezpečnost': 'Vysoká odolnost proti vloupání (třída RC2 / RC3)',
        'Těsnění': 'Dvojité celoobvodové těsnění eliminující průvan a tepelné mosty',
        'Kování a kliky': 'Bezpečnostní kliky, koule a nerezová madla Simonswerk a GU'
      },
      highlights: [
        'Automatické uzamčení střelkami GU-SECURY ihned po zaklapnutí bez nutnosti zamykat klíčem',
        'Extrémní tvarová stabilita díky masivním ocelovým vložkám v křídlech i rámech',
        'Široký výběr z desítek moderních i klasických designů výplní s trojsklem'
      ]
    },
    'balkonove-dvere-veka-82': {
      name: 'Balkonové a terasové dveře VEKA Softline 82',
      category: 'Plastové dveře',
      badge: 'Jednokřídlé, dvoukřídlé a PSK',
      image: 'assets/images/balkon-dvere-typy.gif',
      desc: 'Jednokřídlé i dvoukřídlé balkonové dveře se štulpem nebo sklopně-posuvným systémem PSK s nízkým prahem a celoobvodovým kováním MACO.',
      specs: {
        'Stavební hloubka': '82 mm (7komorový systém)',
        'Konstrukční varianty': 'Otevíravé, otevíravě-sklopné, dvoukřídlé s klapačkou, PSK posuvné',
        'Kování': 'Celoobvodové kování MACO Multi-Matic s mikroventilací',
        'Práh': 'Klasický rámový práh nebo nízký teplý hliníkový práh',
        'Zasklení': 'Izolační dvojsklo nebo trojsklo s teplým rámečkem (Ug od 0,5 W/m²K)',
        'Bezpečnostní prvky': 'Zvedač křídla, pojistka proti chybné poloze kliky a průvanová pojistka',
        'Balkonová západka': 'Standardní madélko a západka proti samovolnému otevření průvanem',
        'Zasklívací drážka': 'Dostatečně hluboká pro izolační skla až do tloušťky 52 mm',
        'Barvy': '12 základních odstínů + desítky fólií a dekorů dřeva dle vzorníku VEKA',
        'Těsnění': 'Středové těsnění MD nebo dorazové AD pro optimální izolaci'
      },
      highlights: [
        'Pohodlné větrání v poloze vyklopeno se zabezpečením proti zabouchnutí větrem',
        'Nízký práh minimalizuje překážku při vstupu na balkon, lodžii či zahradu',
        'Stoprocentní sladění profilového systému s ostatními okny v objektu'
      ]
    }
  };

  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
    });
    mainNav.querySelectorAll('.nav-item').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
      });
    });
  }

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        counterObserver.unobserve(el);
        if (prefersReduced) return;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        if (isNaN(target)) return;
        el.textContent = '0';
        const duration = 1200;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(easeOut * target);
          el.textContent = current;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target;
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.counter').forEach(function (el) {
    counterObserver.observe(el);
  });

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalDismiss = document.getElementById('modalDismissBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalImg = document.getElementById('modalImg');
  const modalSpecsTable = document.getElementById('modalSpecsTable');
  const modalHighlightsList = document.getElementById('modalHighlightsList');

  function openTechModal(itemId) {
    const item = catalogData[itemId];
    if (!item || !modalBackdrop) return;
    if (modalBadge) modalBadge.textContent = item.category;
    if (modalTitle) modalTitle.textContent = item.name;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.name;
    }
    if (modalSpecsTable) {
      let tbodyHtml = '';
      for (const [key, val] of Object.entries(item.specs)) {
        tbodyHtml += '<tr><th>' + key + '</th><td>' + val + '</td></tr>';
      }
      modalSpecsTable.innerHTML = '<tbody>' + tbodyHtml + '</tbody>';
    }
    if (modalHighlightsList) {
      let hlHtml = '';
      item.highlights.forEach(function (hl) {
        hlHtml += '<li>' + hl + '</li>';
      });
      modalHighlightsList.innerHTML = hlHtml;
    }
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-open-tech], [data-target-id]');
    if (btn) {
      e.preventDefault();
      const techId = btn.getAttribute('data-target-id') || btn.getAttribute('data-open-tech') || btn.getAttribute('data-id');
      openTechModal(techId);
    }
  });

  if (modalClose) modalClose.addEventListener('click', closeTechModal);
  if (modalDismiss) modalDismiss.addEventListener('click', closeTechModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeTechModal();
    }
  });

  const searchInput = document.getElementById('catalogSearch');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const catalogCards = document.querySelectorAll('.cat-card');
  const searchCounter = document.getElementById('searchCounter');

  let activeCategory = 'all';
  let searchQuery = '';

  function updateCatalog() {
    let visibleCount = 0;
    catalogCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardText = card.textContent.toLowerCase();
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = (searchQuery === '' || cardText.indexOf(searchQuery) !== -1);
      if (matchesCategory && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    if (searchCounter) {
      searchCounter.textContent = visibleCount;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      updateCatalog();
    });
  }

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      activeCategory = this.getAttribute('data-filter') || 'all';
      updateCatalog();
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka' || urlParams.get('from') === 'nabidka') {
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
      heroBadge.style.backgroundColor = '#fef08a';
      heroBadge.style.color = '#854d0e';
    }
  }
});
