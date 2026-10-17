document.addEventListener('DOMContentLoaded', function() {
  var techData = {
    'puma-240-m': {
      title: 'CNC soustruh Doosan PUMA 240 M',
      category: 'CNC soustružení',
      badge: 'Soustružení s pohonem v ose C',
      img: 'assets/stroj-pic-1-141031074230.jpg',
      desc: 'Horizontální soustružnické centrum vybavené poháněnými nástroji pro komplexní obrábění v ose C. Umožňuje vedle soustružení také frézování drážek, vrtání a řezání závitů mimo osu na jedno upnutí.',
      specs: {
        'Typ stroje': 'CNC horizontální soustruh s poháněnými nástroji',
        'Řídicí systém': 'Fanuc s barevným displejem',
        'Vřeteno': 'Poháněné rotační nástroje, osa C',
        'Max. průměr': 'až 300 mm',
        'Max. délka': 'až 513 mm',
        'Vrtání vřetene': '65 mm',
        'Přesnost': '±0,005 mm'
      }
    },
    'puma-240-b': {
      title: 'CNC soustruh Doosan PUMA 240 B',
      category: 'CNC soustružení',
      badge: 'Velké vrtání pro tyče 76 mm',
      img: 'assets/stroj-pic-2-141031074230.jpg',
      desc: 'Robustní produkční CNC soustruh s monolitickým litinovým šikmým ložem, který vyniká maximální tuhostí při těžkém i dokončovacím obrábění. Vybaven hydraulickým sklíčidlem a koníkem.',
      specs: {
        'Typ stroje': 'Vysoce tuhý produkční CNC soustruh',
        'Řídicí systém': 'CNC Fanuc řady i',
        'Vrtání vřetene': '76 mm (velké vrtání pro tyče)',
        'Otáčky vřetene': 'až 3 500 ot/min',
        'Nástrojová hlava': '12 pozic',
        'Použití': 'Sériová výroba přírub, čepů a pouzder'
      }
    },
    'puma-240-ms': {
      title: 'CNC soustruh Doosan PUMA 240 MS (protivřeteno)',
      category: 'CNC soustružení',
      badge: 'Hotový díl na jedno upnutí',
      img: 'assets/stroj-pic-1-141031080912.jpg',
      desc: 'Špičkový dvousoustružnický poloautomat s plnohodnotným protivřetenem a poháněnými rotačními nástroji. Umožňuje automatické předání obrobku a dokončení zadní strany dílu bez nutnosti manuálního přehazování.',
      specs: {
        'Konfigurace': 'Hlavní vřeteno + plnohodnotné protivřeteno',
        'Pohon nástrojů': 'Ano, frézování a vrtání na obou vřetenech',
        'Předání dílu': 'Plynulá synchronizace otáček',
        'Průměr sklíčidla': '210 mm hlavní / 135 mm protivřeteno',
        'Výhoda': 'Kompletní dokončení z obou stran na jedno upnutí'
      }
    },
    'puma-240-a': {
      title: 'CNC soustruh Doosan PUMA 240 A',
      category: 'CNC soustružení',
      badge: 'Mikrometrická přesnost a rychlost',
      img: 'assets/stroj-pic-2-141031080912.jpg',
      desc: 'Osvědčený CNC soustruh s vysokorychlostním vřetenem, který poskytuje prvotřídní kvalitu obrobeného povrchu a vynikající tepelnou stabilitu během celodenního sériového provozu.',
      specs: {
        'Typ stroje': 'Přesný CNC horizontální soustruh',
        'Max. točný průměr': '300 mm',
        'Vedení': 'Tuhá kluzná vedení pro tlumení vibrací',
        'Přesnost': 'V mikrometrických tolerancích',
        'Materiály': 'Konstrukční a ušlechtilá ocel, nerez, dural'
      }
    },
    'puma-2600-ms': {
      title: 'CNC soustruh Doosan PUMA 2600 MS (protivřeteno)',
      category: 'CNC soustružení',
      badge: 'Těžké obrábění s výkonem 22 kW',
      img: 'assets/stroj-pic-1-141031074230.jpg',
      desc: 'Nejvýkonnější soustružnické centrum v naší dílně. Zvětšený pracovní prostor, silný motor s vysokým točivým momentem pro těžké úběry a protivřeteno pro dokončení rozměrných hřídelí.',
      specs: {
        'Průměr nad ložem': 'až 780 mm',
        'Max. točný průměr': '376 mm',
        'Max. točná délka': '760 mm',
        'Vrtání vřetene': '82 mm',
        'Výkon motoru': '22 kW',
        'Technologie': 'Poháněné nástroje BMT65 + synchronní protivřeteno'
      }
    },
    'lynx-220': {
      title: 'CNC soustruh Doosan LYNX 220',
      category: 'CNC soustružení',
      badge: 'Rychlé série malých dílců',
      img: 'assets/stroj-pic-2-141031074230.jpg',
      desc: 'Konstruován pro vysokou produktivitu s minimálními vedlejšími časy. Rychloposuvy 30 m/min a bleskové indexování nástrojové hlavy zajišťují nízké výrobní náklady na kus.',
      specs: {
        'Max. točný průměr': '320 mm',
        'Max. točná délka': '300 mm',
        'Rychloposuvy': '30 / 36 m/min',
        'Otáčky vřetene': 'až 6 000 ot/min',
        'Využití': 'Rychlé série menších přesných součástek'
      }
    },
    'haas-vf-2ss-1': {
      title: 'CNC vertikální frézka HAAS VF 2SS (I)',
      category: 'CNC frézování',
      badge: 'Super-Speed 12 000 ot/min',
      img: 'assets/stroj-pic-1-141031080912.jpg',
      desc: 'Vertikální 3osé frézovací centrum optimalizované pro vysokorychlostní obrábění (Super Speed). Přímý pohon vřetene, rychlé výměny nástrojů za 1,8 sekundy a pokročilé řízení trajektorie.',
      specs: {
        'Pojezdy X / Y / Z': '762 × 406 × 508 mm',
        'Upínací stůl': '914 × 356 mm',
        'Nosnost stolu': '680 kg',
        'Otáčky vřetene': '12 000 ot/min (Inline Direct-Drive)',
        'Zásobník': '24+1 nástrojů'
      }
    },
    'haas-vf-2ss-2': {
      title: 'CNC vertikální frézka HAAS VF 2SS (II)',
      category: 'CNC frézování',
      badge: 'Plná výrobní zastupitelnost',
      img: 'assets/stroj-pic-2-141031080912.jpg',
      desc: 'Druhé identické centrum HAAS VF-2SS zajišťující stoprocentní výrobní zálohu a kapacitu pro velké série bez prostojů a čekání na uvolnění stroje.',
      specs: {
        'Pojezdy X / Y / Z': '762 × 406 × 508 mm',
        'Rychloposuv': '35,6 m/min',
        'Kužel vřetene': 'ISO 40',
        'Řídicí systém': 'HAAS CNC dialogové řízení',
        'Záruka termínu': 'Plná zastupitelnost a kontinuita výroby'
      }
    },
    'mynx-400': {
      title: 'CNC frézovací centrum Doosan MYNX 400',
      category: 'CNC frézování',
      badge: 'Silové frézování oceli a forem',
      img: 'assets/stroj-pic-1-141031074230.jpg',
      desc: 'Navržen pro nejnáročnější silové frézovací operace s vysokým úběrem materiálu. Masivní litinová konstrukce s širokými kluznými vedeními spolehlivě pohlcuje vibrace.',
      specs: {
        'Pojezdy X / Y / Z': '762 × 400 × 510 mm',
        'Vedení': 'Tuhá obdélníková litinová vedení',
        'Kužel vřetene': 'BT 40',
        'Krouticí moment': 'Vysoký moment pro silové záběry',
        'Vhodné pro': 'Ocelové desky, těžké svařence a formy'
      }
    },
    'challenger-800': {
      title: 'CNC obráběcí centrum CHALLENGER 800',
      category: 'CNC frézování',
      badge: 'Velký pracovní stůl do 800 kg',
      img: 'assets/stroj-pic-2-141031074230.jpg',
      desc: 'Velkorysé vertikální obráběcí centrum pro rozměrnější obrobky. Umožňuje přesné rovinné frézování, vyvrtávání velkých ocelových a hliníkových desek a svařovaných podsestav.',
      specs: {
        'Pojezdy stolu': 'X = 800 mm, Y = 500 mm',
        'Nosnost stolu': 'až 800 kg',
        'Chlazení': 'Chlazení středem vřetene',
        'Materiály': 'Konstrukční oceli, nerez, slitiny Al, litina'
      }
    },
    'brany-samonosne': {
      title: 'Samonosné vjezdové a pojezdové brány',
      category: 'Brány a oplocení',
      badge: 'Bezproblémový celoroční provoz',
      img: 'assets/01-141031075459.jpg',
      desc: 'Zakázková výroba samonosných posuvných bran pro rodinné domy i průmyslové areály. Konstrukce nevyžaduje vodicí kolejnici v zemi, což zaručuje plynulý chod i při sněhu a mrazu.',
      specs: {
        'Průjezdná šířka': '3 až 10 metrů na zakázku',
        'Nosný profil': 'Masivní C-profil s přesnými ložiskovými vozíky',
        'Pohon': 'Příprava pro automatický pohon nebo ruční chod',
        'Ochrana': 'Žárové zinkování dle ČSN EN ISO 1461 + lakování',
        'Výplně': 'Tahokov, jekly, lamely, dřevoplast'
      }
    },
    'brany-kridlove': {
      title: 'Křídlové vjezdové brány a vstupní branky',
      category: 'Brány a oplocení',
      badge: 'Masivní ocelový rám a stavitelné panty',
      img: 'assets/05-141031075459.jpg',
      desc: 'Jednokřídlé a dvoukřídlé otočné brány a branky pro pěší se seřiditelnými panty, kvalitním zámkem a designem dokonale sladěným s plotovými poli.',
      specs: {
        'Konstrukce': 'Svařovaný ocelový rám z uzavřených jeklů',
        'Panty': 'Stavitelné závitové panty s maznicí',
        'Zámek': 'Zadlabací zámek s vložkou nebo el. otvírač',
        'Sloupky': 'Masivní jeklové sloupky k zabetonování / patka',
        'Životnost': 'Přesahuje 30 let bez nutnosti údržby'
      }
    },
    'ploty-ocelove': {
      title: 'Ocelové ploty a plotové dílce',
      category: 'Brány a oplocení',
      badge: 'Výroba na přesné zaměření',
      img: 'assets/0001-141031075608.jpg',
      desc: 'Kompletní plotové systémy vyráběné na zakázku přesně podle stavebních polí a podezdívek. Precizní svary bez dutin a prvotřídní protikorozní ochrana.',
      specs: {
        'Rozměry': 'Zcela na zakázku dle zaměření na stavbě',
        'Výplně': 'Tahokov různých ok, svislé jekly, vodorovné profily',
        'Kotvení': 'Nerezové spojovací prvky a skryté úchyty',
        'Povrch': 'Žárový zinek + prášková barva komaxit RAL'
      }
    },
    'zabradli-schodiste': {
      title: 'Zábradlí pro schodiště, balkony a terasy',
      category: 'Zámečnictví a konstrukce',
      badge: 'Splňuje normu ČSN 74 3305',
      img: 'assets/00001-141031075542.jpg',
      desc: 'Bezpečná a estetická zábradlí pro interiér i exteriér. Důraz na pevnou kotvicí konstrukci, ergonomická madla a dodržení předepsaných norem.',
      specs: {
        'Materiály': 'Konstrukční ocel pozinkovaná / Nerez AISI 304',
        'Kotvení': 'Boční do líce podesty nebo shora do stupně',
        'Norma': 'ČSN 74 3305 Ochranná zábradlí',
        'Madlo': 'Kruhové, čtvercové nebo ploché ocelové madlo'
      }
    },
    'mrize-bezpecnostni': {
      title: 'Bezpečnostní mříže na okna a světlíky',
      category: 'Zámečnictví a konstrukce',
      badge: 'Neprostupná mechanická zábrana',
      img: 'assets/001-141031075707.jpg',
      desc: 'Zakázková výroba pevných i otevíracích bezpečnostních mříží z plné oceli s bezpečnostním kotvením do zdiva zabraňujícím jejich vytržení.',
      specs: {
        'Provedení': 'Pevné kotvené / otevírací s bezpečnostním zámkem',
        'Materiál': 'Plná ocelová čtyřhranná nebo kruhová tyčovina',
        'Kotvení': 'Chemické kotvy se zavařenými hlavami',
        'Úprava': 'Zinkováno a lakováno pro venkovní použití'
      }
    },
    'postovni-schranky': {
      title: 'Zakázkové poštovní schránky a sloupky',
      category: 'Zámečnictví a konstrukce',
      badge: 'Integrace do plotu s oboustranným vhozem',
      img: 'assets/002-141031075707.jpg',
      desc: 'Atypické schránky z nerezového a ocelového plechu plně integrované do plotových polí a sloupků. Vhoz z ulice a bezpečný výběr pošty ze dvora.',
      specs: {
        'Materiál': 'Nerezový broušený plech / pozinkovaný lakovaný',
        'Konstrukce': 'Oboustranná (vhoz zepředu, výběr zezadu)',
        'Zámek': 'Kvalitní schránkový zámek se dvěma klíči',
        'Příslušenství': 'Příprava pro zvonková tlačítka a interkom'
      }
    },
    'ocelove-sarence': {
      title: 'Kovovýroba a ocelové svařence',
      category: 'Zámečnictví a konstrukce',
      badge: 'Certifikovaní svářeči dle EN ISO 9606-1',
      img: 'assets/0006-141031080947.jpg',
      desc: 'Zakázkové svařování ocelových konstrukcí, rámů strojů a podsestav metodami MIG/MAG a TIG s následným přesným CNC opracováním styčných ploch.',
      specs: {
        'Metody svařování': 'MIG/MAG (135), TIG/WIG (141)',
        'Personál': 'Certifikovaní svářeči dle EN ISO 9606-1',
        'Hmotnost sestav': 'Kusové i sériové svařence do 2 tun',
        'Kontrola svarů': 'Vizuální zkoušky (VT), kapilární zkoušky (PT)'
      }
    },
    'rizeni-jakosti-iso': {
      title: 'Systém řízení jakosti dle ISO 9001',
      category: 'Kontrola jakosti',
      badge: '100% rozměrová a výstupní kontrola',
      img: 'assets/iso_9001.jpg',
      desc: 'Certifikovaný systém řízení jakosti dle ČSN EN ISO 9001:2008. Veškeré obráběné dílce a zámečnické výrobky procházejí vstupní, mezioperační a výstupní kontrolou.',
      specs: {
        'Certifikace': 'ČSN EN ISO 9001:2008',
        'Měřidla': 'Digitální výškoměry, mikrometry, kalibry',
        'Dokumentace': 'Měřicí protokoly, hutní atesty 3.1 dle EN 10204',
        'Sledovatelnost': 'Značení výrobních šarží a dávek materiálu'
      }
    }
  };

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    var offerBar = document.getElementById('offerNotificationBar');
    if (offerBar) {
      offerBar.style.display = 'block';
    }
  }

  var mobileToggle = document.getElementById('mobileNavToggle');
  var mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('open');
    });
    var navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
      });
    });
  }

  var catalogCards = Array.from(document.querySelectorAll('.catalog-item-card'));
  var searchInput = document.getElementById('searchInput');
  var searchCounter = document.getElementById('searchCounter');
  var catalogTabs = document.querySelectorAll('.cat-tab');
  var currentCategory = 'all';

  function filterCatalog() {
    var query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    var visibleCount = 0;

    catalogCards.forEach(function(card) {
      var cat = card.getAttribute('data-category') || '';
      var title = (card.querySelector('.item-title') ? card.querySelector('.item-title').textContent : '').toLowerCase();
      var desc = (card.querySelector('.item-desc') ? card.querySelector('.item-desc').textContent : '').toLowerCase();
      var specs = (card.querySelector('.item-specs-tags') ? card.querySelector('.item-specs-tags').textContent : '').toLowerCase();

      var matchesCat = (currentCategory === 'all' || cat === currentCategory);
      var matchesQuery = !query || title.includes(query) || desc.includes(query) || specs.includes(query);

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      if (visibleCount === 1) {
        searchCounter.textContent = '1 položka v nabídce';
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        searchCounter.textContent = visibleCount + ' položky v nabídce';
      } else {
        searchCounter.textContent = visibleCount + ' položek v nabídce';
      }
    }
  }

  if (catalogTabs.length > 0) {
    catalogTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        catalogTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-filter') || 'all';
        filterCatalog();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCatalog);
  }

  var modalBackdrop = document.getElementById('techModalBackdrop');
  var modalClose = document.getElementById('techModalClose');
  var modalTitle = document.getElementById('techModalTitle');
  var modalCategoryBadge = document.getElementById('modalCategoryBadge');
  var modalImg = document.getElementById('techModalImg');
  var modalDesc = document.getElementById('techModalDesc');
  var modalTable = document.getElementById('techModalTable');
  var modalPoptatBtn = document.getElementById('modalPoptatBtn');

  function openTechModal(id) {
    var data = techData[id];
    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategoryBadge) modalCategoryBadge.textContent = data.badge;
    if (modalImg) {
      modalImg.src = data.img;
      modalImg.alt = data.title;
    }
    if (modalDesc) modalDesc.textContent = data.desc;

    if (modalTable) {
      var tbody = modalTable.querySelector('tbody');
      if (!tbody) {
        tbody = document.createElement('tbody');
        modalTable.appendChild(tbody);
      }
      tbody.innerHTML = '';
      for (var param in data.specs) {
        if (Object.prototype.hasOwnProperty.call(data.specs, param)) {
          var tr = document.createElement('tr');
          var th = document.createElement('th');
          th.textContent = param;
          var td = document.createElement('td');
          td.textContent = data.specs[param];
          tr.appendChild(th);
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
    }

    if (modalBackdrop) {
      modalBackdrop.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  function closeTechModal() {
    if (modalBackdrop) {
      modalBackdrop.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-tech]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var id = el.getAttribute('data-open-tech') || el.getAttribute('data-id');
      if (id) {
        openTechModal(id);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeTechModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  if (modalPoptatBtn) {
    modalPoptatBtn.addEventListener('click', function() {
      closeTechModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.style.display === 'flex') {
      closeTechModal();
    }
  });

  var counters = document.querySelectorAll('[data-counter-target]');
  var countersStarted = false;

  function runCounters() {
    if (countersStarted) return;
    countersStarted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    counters.forEach(function(counter) {
      var target = parseInt(counter.getAttribute('data-counter-target'), 10) || 0;
      counter.textContent = '0';
      var duration = 1500;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var current = Math.floor(progress * target);
        counter.textContent = current;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          counter.textContent = target;
        }
      }
      window.requestAnimationFrame(step);
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function(el) {
      observer.observe(el);
    });

    var numSection = document.querySelector('.numbers-section');
    if (numSection) {
      var numObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          runCounters();
        }
      }, { threshold: 0.2 });
      numObserver.observe(numSection);
    }
  } else {
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.classList.add('active');
    });
    runCounters();
  }
});
