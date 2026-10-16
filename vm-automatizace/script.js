document.addEventListener('DOMContentLoaded', function() {
  const techData = {
    'linka-lamely': {
      title: 'Linka pro skládání lamel a klapek',
      cat: 'Robotická pracoviště',
      badge: 'Robot Epson & Tray',
      img: 'assets/KI1_.jpg',
      desc: 'Plně automatizované robotické pracoviště s manipulátorem Epson pro přesné zakládání lamel do Tray palet a klapek na proložky. Vyvinuto pro náročný automobilový průmysl s důrazem na přesnost v desetinách milimetru a cyklové časy v sekundách.',
      specs: [
        ['Manipulátor', 'Průmyslový robot Epson'],
        ['Manipulované díly', 'Lamely a klapky do proložek'],
        ['Podávací systém', 'Automatický zakladač do Tray palet'],
        ['Řídicí systém', 'Průmyslové PLC s dotykovým rozhraním HMI'],
        ['Bezpečnost', 'Optické bezpečnostní závory dle ČSN EN ISO 13849'],
        ['Provozní režim', 'Nepřetržitý 3-směnný provoz automotive']
      ]
    },
    'montaz-ventilu': {
      title: 'Robotická montáž kulových ventilů',
      cat: 'Robotická pracoviště',
      badge: 'Machine Vision / Kamery',
      img: 'assets/KV0_.jpg',
      desc: 'Automatické robotické pracoviště pro montáž kulových ventilů s integrovaným kamerovým naváděním odebírací a montážní pozice. Machine Vision v reálném čase navádí chapadlo a provádí 100% optickou kontrolu správného usazení komponent.',
      specs: [
        ['Kamerový systém', 'Průmyslové navádění Machine Vision'],
        ['Typ sestavy', 'Kulové ventily a těsnicí prvky'],
        ['Montážní operace', 'Robotické zakládání, lisování těsnění a kompletace'],
        ['Kontrola jakosti', '100% optická verifikace přítomnosti dílů'],
        ['Takt linky', 'Vysokorychlostní synchronizovaný cyklus'],
        ['Řízení', 'PLC automatizace s autodiagnostikou chyb']
      ]
    },
    'baleni-tramu': {
      title: 'Průmyslová linka pro balení trámů',
      cat: 'Výrobní a balicí linky',
      badge: 'Těžká logistika & Vývoz',
      img: 'assets/tr3_.jpg',
      desc: 'Automatizovaná těžká průmyslová linka pro kontinuální balení dřevěných trámů a jejich automatický motorický odsun mimo výrobní halu. Robustní ocelová konstrukce odolává extrémnímu mechanickému namáhání.',
      specs: [
        ['Zpracovávaný materiál', 'Dřevěné konstrukční trámy a řezivo'],
        ['Funkce linky', 'Pevné svazkování, balení do ochranné fólie'],
        ['Manipulační systém', 'Motorický vyvážecí dopravník mimo halu'],
        ['Konstrukce rámu', 'Těžká ocelová svařovaná konstrukce'],
        ['Pohony', 'Průmyslové elektropřevodovky s měničem'],
        ['Bezpečnostní zóna', 'Oplocení s bezpečnostními zámky vstupů']
      ]
    },
    'lisovani-hacku': {
      title: 'Poloautomatické lisování háčků a test bowdenů',
      cat: 'Jednoúčelové stroje',
      badge: 'Zátěžový test 100%',
      img: 'assets/HKS1_.jpg',
      desc: 'Poloautomatický jednoúčelový stroj pro kompletaci lanovodů a bowdenů se zalisováním háčku a integrovaným testem zátěžnou silou. Zaručuje 100% spolehlivost spojení pro automobilové aplikace.',
      specs: [
        ['Určení stroje', 'Montáž bowdenů a lanovodů'],
        ['Pracovní operace', 'Přesné zalisování kovového háčku'],
        ['In-line testování', 'Měření zátěžnou silou s vyhodnocením OK / NOK'],
        ['Ovládání', 'Bezpečné dvouruční spouštění dle norem BOZP'],
        ['Konstrukce', 'Kompaktní ergonomický stůl s AL profily'],
        ['Sledovatelnost', 'Optická signalizace a blokování vadných kusů']
      ]
    },
    'montazni-linka': {
      title: 'Automatická montážní linka plastových dílů',
      cat: 'Výrobní a balicí linky',
      badge: 'Plastové montážní díly',
      img: 'assets/L0_.jpg',
      desc: 'Plně automatizovaná modulární linka pro montáž plastových výlisků s automatickými vibračními podavači, šroubováním a kontrolními stanicemi. Připraveno pro přímou návaznost na vstřikovací lisy.',
      specs: [
        ['Materiál komponent', 'Technické plasty a kovové zálisky'],
        ['Technologie montáže', 'Automatické zakládání, šroubování a lepení'],
        ['Zásobníky dílů', 'Vibrační kruhové a lineární podavače'],
        ['Kontrola montáže', 'Laserové a indukční snímače přítomnosti'],
        ['Koncepce', 'Karuselový / modulární dopravníkový systém'],
        ['HMI rozhraní', 'Přehledná vizualizace stavu a taktu výroby']
      ]
    },
    'cnc-haas-vf2': {
      title: 'Vertikální CNC obráběcí centrum HAAS VF-2',
      cat: 'CNC obrábění a strojírenství',
      badge: 'CNC centrum 8 100 ot/min',
      img: 'assets/haas_vf.jpg',
      desc: 'Vysoce přesné 3-osé vertikální obráběcí centrum pro zakázkovou výrobu přesných dílů jednoúčelových strojů, přípravků a forem s rozsahem pojezdů 762 × 406 × 508 mm.',
      specs: [
        ['Posuv v ose X', '762 mm'],
        ['Posuv v ose Y', '406 mm'],
        ['Posuv v ose Z', '508 mm'],
        ['Maximální otáčky', '8 100 ot/min'],
        ['Kužel vřetene', 'ISO 40'],
        ['Obráběné materiály', 'Ocel, nerez, dural, hliník, technické plasty']
      ]
    },
    'cnc-doosan-6700': {
      title: 'Vertikální CNC obráběcí centrum Doosan DNM 6700',
      cat: 'CNC obrábění a strojírenství',
      badge: 'CNC centrum 8 000 ot/min',
      img: 'assets/dosan2.jpg',
      desc: 'Těžké vertikální obráběcí centrum s velkým pracovním stolem a pojezdem v ose X 1 020 mm pro přesné opracování velkých základových desek jednoúčelových strojů a forem.',
      specs: [
        ['Posuv v ose X', '1 020 mm'],
        ['Posuv v ose Y', '510 mm'],
        ['Posuv v ose Z', '625 mm'],
        ['Maximální otáčky', '8 000 ot/min'],
        ['Kužel vřetene', 'ISO 40 / BT 40'],
        ['Využití', 'Těžké frézování, kusová i sériová strojírenská výroba']
      ]
    }
  };

  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      siteNav.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        siteNav.classList.remove('active');
      });
    });
  }

  const searchInput = document.getElementById('techSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogItems = document.querySelectorAll('.catalog-item');
  const itemCountEl = document.getElementById('itemCount');
  const searchCounterEl = document.getElementById('searchCounter');

  let currentCategory = 'all';
  let currentSearch = '';

  function updateCatalog() {
    let visibleCount = 0;
    const term = currentSearch.toLowerCase().trim();

    catalogItems.forEach(function(item) {
      const cat = item.getAttribute('data-cat') || '';
      const text = item.textContent.toLowerCase();

      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = (term === '' || text.indexOf(term) !== -1);

      if (matchesCat && matchesSearch) {
        item.style.display = 'flex';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (itemCountEl) {
      itemCountEl.textContent = visibleCount;
    }
    if (searchCounterEl) {
      searchCounterEl.textContent = visibleCount;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentSearch = e.target.value;
      updateCatalog();
    });
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat') || 'all';
      updateCatalog();
    });
  });

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalCat = document.getElementById('modalCat');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalTableBody = document.querySelector('#modalTable tbody');
  const modalCtaBtn = document.getElementById('modalCtaBtn');

  function openTechModal(id) {
    const item = techData[id];
    if (!item) return;

    if (modalTitle) modalTitle.textContent = item.title;
    if (modalBadge) modalBadge.textContent = item.badge;
    if (modalCat) modalCat.textContent = item.cat;
    if (modalImg) {
      modalImg.src = item.img;
      modalImg.alt = item.title;
    }
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalTableBody) {
      modalTableBody.innerHTML = '';
      item.specs.forEach(function(spec) {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = spec[0];
        const td = document.createElement('td');
        td.textContent = spec[1];
        tr.appendChild(th);
        tr.appendChild(td);
        modalTableBody.appendChild(tr);
      });
    }

    if (modalCtaBtn) {
      modalCtaBtn.href = '#kontakt-form';
      modalCtaBtn.addEventListener('click', function() {
        closeTechModal();
      });
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeTechModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-tech]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const id = btn.getAttribute('data-open-tech');
      openTechModal(id);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeTechModal);
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTechModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeTechModal();
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const topBar = document.querySelector('.top-bar');
    if (topBar) {
      topBar.style.backgroundColor = '#162032';
      topBar.style.borderColor = '#F59E0B';
    }
  }
});
