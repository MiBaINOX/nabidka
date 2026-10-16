document.addEventListener('DOMContentLoaded', function () {
  var techData = {
    'tech-podlahy-epoxid': {
      title: 'Epoxidové samonivelační lité podlahy',
      cat: 'Průmyslové podlahy',
      norm: 'ČSN EN 13813',
      desc: 'Vysoce odolné bezešvé epoxidové podlahové systémy pro průmyslové haly, sklady, dílny a čisté provozy. Chemická a mechanická odolnost s možností protiskluzové úpravy.',
      specs: [
        ['Pevnost v tlaku', '≥ 65 MPa'],
        ['Pevnost v tahu za ohybu', '≥ 25 MPa'],
        ['Tloušťka souvrství', '2,0 – 4,5 mm'],
        ['Teplotní odolnost', '-20 °C až +60 °C'],
        ['Protismykovost', 'R9 až R12 dle požadavku'],
        ['Aplikace', 'Strojní hlazení a odvzdušnění jehlovým válečkem']
      ],
      procedure: 'Tryskání nebo diamantové broušení betonového podkladu, hloubková epoxidová penetrace, aplikace samonivelační stěrky, případný křemičitý vsyp a uzavírací nátěr.'
    },
    'tech-podlahy-pancir': {
      title: 'Pancéřované betonové podlahy se vsypem',
      cat: 'Průmyslové podlahy',
      norm: 'ČSN EN 206+A2',
      desc: 'Monolitické drátkobetonové a železobetonové průmyslové podlahy se strojně hlazeným vsypem na bázi korundu a karbidu křemíku pro vysoké bodové i pojezdové zatížení.',
      specs: [
        ['Třída betonu', 'C25/30 – C30/37'],
        ['Vsypový materiál', 'Syntetický korund a křemičitan'],
        ['Dávkování vsypu', '4,0 – 6,0 kg/m²'],
        ['Obrusnost dle Böhme', 'Třída A3 – A6'],
        ['Dilatační spáry', 'Řezání do 1/3 tloušťky, polyuretanový tmel'],
        ['Zatížení', 'Vysokozdvižné vozíky, těžké regálové systémy']
      ],
      procedure: 'Laserové urovnání čerstvého betonu, strojní zapracování vsypu rotačními hladičkami, nástřik ošetřujícího vytvrzovacího akrylátového laku a nařezání spár.'
    },
    'tech-podlahy-pur': {
      title: 'Polyuretanové pružné stěrky a nátěry',
      cat: 'Průmyslové podlahy',
      norm: 'ČSN EN 1504-2',
      desc: 'Trvale pružné polyuretanové systémy schopné překlenovat dynamické trhliny v podkladu. Ideální pro parkovací domy, rampy, laboratoře a komerční prostory.',
      specs: [
        ['Schopnost přemostění trhlin', 'Třída B3.2 (až 2 mm)'],
        ['Tvrdost Shore D', '55 – 65'],
        ['Tloušťka', '1,5 – 3,0 mm'],
        ['UV stabilita', 'Plná odolnost vůči UV záření'],
        ['Tlumicí efekt', 'Kročejový útlum až 6 dB'],
        ['Využití', 'Výrobní haly, autoservisy, parkovací plochy']
      ],
      procedure: 'Příprava podkladu frézováním, penetrace, nanesení elastické polyuretanové mezivrstvy a finálního UV stabilního polyuretanového matného či pololesklého laku.'
    },
    'tech-sanace-beton': {
      title: 'Sanace železobetonových konstrukcí a reprofilace',
      cat: 'Sanace betonu',
      norm: 'ČSN EN 1504-3',
      desc: 'Komplexní statická reprofilace poškozených betonových nosníků, průvlaků, sloupů a podlahových desek sanačními maltami třídy R4 s inhibitory koroze výztuže.',
      specs: [
        ['Pevnost v tlaku malty', '≥ 45 MPa (třída R4)'],
        ['Přídržnost k podkladu', '≥ 2,0 MPa'],
        ['Modul pružnosti', '≥ 20 GPa'],
        ['Antikorozní ochrana', 'Aktivní pasivace výztuže'],
        ['Tloušťka jedné vrstvy', '10 – 50 mm'],
        ['Odolnost proti karbonataci', 'Dk ≤ kontrolní beton']
      ],
      procedure: 'Vysokotlaké otryskání degradovaného betonu vodním paprskem, očištění ocelové výztuže na Sa 2.5, antikorozní nátěr, adhezní můstek a strojní reprofilace maltou R4.'
    },
    'tech-sanace-omitky': {
      title: 'Sanační omítkové systémy vlhkého zdiva',
      cat: 'Sanace zdiva',
      norm: 'ČSN EN 998-1',
      desc: 'Systémové sanační omítky s vysokou pórovitostí a difuzní propustností pro vysušování vlhkého a zasoleného cihelného i kamenného zdiva objektů.',
      specs: [
        ['Pórovitost omítky', '> 40 obj. %'],
        ['Koeficient difuzního odporu μ', '≤ 12'],
        ['Hloubka ukládání solí', 'Ukládání solí uvnitř pórů bez výkvětů'],
        ['Paropropustnost', 'Vysoká (třída V1)'],
        ['Tloušťka systému', '25 – 35 mm (podhoz + jádro + štuk)'],
        ['Certifikace', 'Směrnice WTA 2-9-04/D']
      ],
      procedure: 'Otlučení původních zavlhlých omítek 80 cm nad linii zavlhčení, vyškrábnutí spár, neutralizace solí, aplikace sanačního podhozu a paropropustné hydrofobizované jádrové omítky.'
    },
    'tech-sanace-injektaz': {
      title: 'Tlakové injektáže a hydroizolační clony',
      cat: 'Sanace a izolace',
      norm: 'ČSN EN 1504-5',
      desc: 'Dodatečné hydroizolační clony zdiva chemickou nízkotlakou a vysokotlakou injektáží mikroemulzemi nebo polyuretanovými pryskyřicemi proti vzlínající vlhkosti.',
      specs: [
        ['Injekční médium', 'Silan-siloxanové mikroemulze / PUR pryskyřice'],
        ['Tlak injektáže', 'Nízkotlaká (0,5–1,5 MPa) i vysokotlaká (do 15 MPa)'],
        ['Rozteč vrtů', '100 – 125 mm v jedné až dvou řadách'],
        ['Těsnění spár', 'Bobtnavé bentonitové pásky a injektážní hadičky'],
        ['Účinnost hydrofobizace', 'Až 98 % zamezení vzlínání'],
        ['Použití', 'Suterény, opěrné zdi, základy a technologické šachty']
      ],
      procedure: 'Vyvrtání šikmých otvorů do zdiva, osazení ocelových pakrů, postupné proinjektování materiálu a zaplnění vrtů sanační hydrofobní zálivkou.'
    },
    'tech-izolace-radon': {
      title: 'Izolace spodní stavby a protiradonová opatření',
      cat: 'Hydroizolace',
      norm: 'ČSN 73 0601',
      desc: 'Dvouvrstvé systémy z modifikovaných SBS asfaltových pásů s hliníkovou spřaženou vložkou garantující plynotěsnost proti radonu i těsnost proti tlakové spodní vodě.',
      specs: [
        ['Součinitel difuze radonu', 'D ≤ 1,5 × 10⁻¹² m²/s'],
        ['Pevnost v tahu pásu', '≥ 1000 N / 50 mm'],
        ['Tloušťka souvrství', '2× 4,0 mm (celkem 8 mm)'],
        ['Ohebnost na trnu', 'do -20 °C (SBS modifikace)'],
        ['Odolnost proti tlaku vody', 'Až 0,2 MPa'],
        ['Vložka', 'Polyesterové rouno + hliníková bariéra']
      ],
      procedure: 'Penetrace základové desky asfaltovým lakem, celoplošné natavení podkladního protiradonového pásu a plnoplošné natavení vrchního SBS pásu s vystřídanými přesahy 100 mm.'
    },
    'tech-izolace-strechy': {
      title: 'Fóliové hydroizolace plochých střech a teras',
      cat: 'Hydroizolace střech',
      norm: 'ČSN EN 13956',
      desc: 'Jednovrstvé mechanicky kotvené nebo přitížené hydroizolační souvrství z mPVC a TPO fólií vyztužených polyesterovou mřížkou s horkovzdušně svařovanými spoji.',
      specs: [
        ['Tloušťka fólie', '1,5 – 1,8 mm'],
        ['Pevnost svaru v tahu', 'Přetržení mimo svar (> 800 N)'],
        ['Požární klasifikace', 'BROOF(t3) odolnost proti vnějšímu ohni'],
        ['UV stabilizace', 'Plná odolnost s životností > 30 let'],
        ['Svařování', 'Automatické horkovzdušné automaty Leister'],
        ['Příslušenství', 'Poplastované plechy Viplanyl pro ukončení']
      ],
      procedure: 'Pokládka separační geotextilie min. 300 g/m², rozvinutí hydroizolační fólie, mechanické kotvení teleskopickými hmoždinkami do nosné konstrukce a horkovzdušný dvojitý svar.'
    },
    'tech-fasady-etics': {
      title: 'Kontaktní zateplovací systémy ETICS',
      cat: 'Fasády a zateplení',
      norm: 'ČSN EN 13499',
      desc: 'Certifikovaný vnější kontaktní zateplovací systém s izolačními deskami z fasádního polystyrenu (EPS 70F / šedý grafitový EPS) nebo podélné minerální vlny.',
      specs: [
        ['Součinitel tepelné vodivosti λ', '0,031 – 0,039 W/(m·K)'],
        ['Kotvení', 'Talířové hmoždinky s ocelovým trnem a EPS zátkou'],
        ['Výztužná vrstva', 'Sklotextilní síťovina Vertex min. 160 g/m²'],
        ['Přídržnost lepicí hmoty', '≥ 0,25 MPa'],
        ['Finální povrch', 'Silikonová probarvená omítka zrnitosti 1,5 mm'],
        ['Třída reakce na oheň', 'A2-s1,d0 (minerální vata) / B-s1,d0 (EPS)']
      ],
      procedure: 'Očištění podkladu, lepení desek po obvodu rámečkem a na buchty, montáž hmoždinek se zápustnou montáží, armovací stěrka s perlinkou, penetrace a finální silikonový štuk.'
    },
    'tech-fasady-startrack': {
      title: 'Systém zateplení starých domů StarTrack',
      cat: 'Fasády a zateplení',
      norm: 'ETA-08/0263',
      desc: 'Technologie zateplení starých domů a břízolitových fasád bez nutnosti kotvení přes izolant. Lepicí kotvy StarTrack se osazují přímo do nosného zdiva před lepením.',
      specs: [
        ['Typ kotvení', 'Příklepové lepicí kotvy přímo do nosné zdi'],
        ['Tepelné mosty', 'Bodový činitel prostupu tepla χ = 0,000 W/K'],
        ['Kotevní hloubka', '≥ 40 mm v betonu, plné cihle i pórobetonu'],
        ['Úspora pracnosti', 'Zamezení provrtávání silných izolačních desek'],
        ['Pevnost ve vytržení', '≥ 1,5 kN na jednu kotvu'],
        ['Využití', 'Starší bytové domy, křivé podklady, rekonstrukce']
      ],
      procedure: 'Vyvrtání otvorů do nosného zdiva v rastru, osazení kotev StarTrack, nanesení lepicí hmoty na terče kotev a celoplošné nalepení izolačních desek.'
    },
    'tech-fasady-provetravane': {
      title: 'Provětrávané fasády a lehké opláštění',
      cat: 'Fasády a opláštění',
      norm: 'ČSN 73 2901',
      desc: 'Moderní fasádní systémy s hliníkovou nosnou podkonstrukcí, provětrávanou vzduchovou mezerou a velkoformátovými kompozitními, vláknocementovými či kovovými deskami.',
      specs: [
        ['Vzduchová mezera', 'Minimálně 40 mm pro komínový tah odvětrání'],
        ['Izolační výplň', 'Hydrofobizovaná minerální vata s černou netkanou textilií'],
        ['Nosný rošt', 'Hliníkový rošt s termopodložkami proti tepelným mostům'],
        ['Dilatační kompenzace', 'Plovoucí uložení desek s kompenzací teplotních změn'],
        ['Opláštění', 'Cembrit, Equitone, Alucobond, bondové kazety'],
        ['Akustický útlum', 'Zlepšení vzduchové neprůzvučnosti až o 11 dB']
      ],
      procedure: 'Kotvení nerezových/hliníkových konzolí na nosnou zeď s přerušením tepelného mostu, vložení minerální izolace, instalace vertikálních profilů a montáž obkladových desek.'
    },
    'tech-stavba-monolit': {
      title: 'Monolitické železobetonové konstrukce a základy',
      cat: 'Pozemní stavby',
      norm: 'ČSN EN 1992-1-1',
      desc: 'Komplexní realizace základových pasů, monolitických základových desek a železobetonových stropních konstrukcí včetně dodávky bednění Peri a armokošů.',
      specs: [
        ['Třída betonu', 'C20/25 až C35/45 se zaručenou vodonepropustností'],
        ['Vyztužení', 'Kari sítě + vázaná prutová výztuž B500B'],
        ['Hutnění', 'Vysokofrekvenční ponorné vibrátory Wacker Neuson'],
        ['Rovinnost desky', 'Odchylka ≤ 2 mm na 2m lati pro přímou montáž podlah'],
        ['Bednící systémy', 'Systémové rámové bednění s vysokou únosností'],
        ['Ošetřování', 'Vlhčení a nástřik protiodparovacích emulzí']
      ],
      procedure: 'Přesné vytyčení stavby geodetem, zemní výkopy, štěrkový podsyp s hutněním na Edef2, uložení ležaté kanalizace a chrániček, položení hydroizolace, armování a betonáž pumpou.'
    },
    'tech-stavba-zdivo': {
      title: 'Přesné zdění nosných a výplňových konstrukcí',
      cat: 'Pozemní stavby',
      norm: 'ČSN EN 1996-1-1',
      desc: 'Zdění z broušených keramických bloků (Porotherm, Heluz), vápenopískových cihel i pórobetonových tvárnic (Ytong) na tenkovrstvou maltu či PUR pěnu.',
      specs: [
        ['Tloušťka ložné spáry', '1 – 3 mm (broušené tvarovky)'],
        ['Pevnost zdicích prvků v tlaku', 'P10 – P25 MPa'],
        ['Akustický útlum', 'Rw až 56 dB u vápenopískových mezibytových příček'],
        ['Kotvení příček', 'Nerezové stěnové spony v každé druhé ložné spáře'],
        ['Řešení překladů', 'Systémové nosné keramické i ploché spřažené překlady'],
        ['Rychlost výstavby', 'Rychlá montáž bez technologických prodlev']
      ],
      procedure: 'Založení první řady na zakládací maltu nivelační soupravou s přesností do 1 mm, nanášení tenkovrstvého lepidla nanášecím válcem a vazba rohových i křížících se stěn.'
    },
    'tech-dokonceni-sdk': {
      title: 'Suchá výstavba a protipožární SDK konstrukce',
      cat: 'Suchá výstavba',
      norm: 'ČSN EN 520',
      desc: 'Montáž sádrokartonových podhledů, předsazených stěn a akustických i protipožárních mezibytových a dělicích příček (Knauf, Rigips) s certifikovanou odolností.',
      specs: [
        ['Požární odolnost', 'EI 15 až EI 90 DP1'],
        ['Typy desek', 'GKB (standard), GKBi (impregnovaná), GKF (protipožární)'],
        ['Vzduchová neprůzvučnost', 'Rw = 48 – 62 dB dle skladby a minerální výplně'],
        ['Tmelení spár', 'Kvalitativní třídy Q1 až Q4 s výztužnou páskou'],
        ['Ocelový rošt', 'Tenkostěnné pozinkované profily CW a UW 50/75/100'],
        ['Certifikace montáže', 'Osvědčení pro montáž protipožárních konstrukcí']
      ],
      procedure: 'Osazení obvodových profilů s tlumicí páskou, rozteč stojin 625 mm, vložení minerální akustické izolace, opláštění systémovými deskami a tmelení spár v požadované třídě Q.'
    }
  };

  var heroTabBtns = document.querySelectorAll('.hero-tab-btn');
  var heroPanels = document.querySelectorAll('.tab-panel');

  heroTabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.getAttribute('data-tab-target');
      heroTabBtns.forEach(function (b) { b.classList.remove('active'); });
      heroPanels.forEach(function (p) { p.classList.remove('active'); });

      this.classList.add('active');
      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  var mobileToggle = document.getElementById('mobileToggle');
  var mainNav = document.getElementById('mainNav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('active');
      });
    });
  }

  var searchInput = document.getElementById('techSearchInput');
  var clearBtn = document.getElementById('clearSearchBtn');
  var filterPills = document.querySelectorAll('.filter-pill');
  var catalogCards = document.querySelectorAll('.cat-card');
  var searchCounter = document.getElementById('searchCounter');

  var currentFilter = 'all';
  var currentSearchQuery = '';

  function filterCatalog() {
    var visibleCount = 0;
    var query = currentSearchQuery.toLowerCase().trim();

    catalogCards.forEach(function (card) {
      var category = card.getAttribute('data-category') || '';
      var text = card.textContent.toLowerCase();

      var matchesFilter = (currentFilter === 'all' || category === currentFilter);
      var matchesSearch = (!query || text.indexOf(query) !== -1);

      if (matchesFilter && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      searchCounter.textContent = visibleCount + ' specializací';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      currentSearchQuery = this.value;
      if (clearBtn) {
        if (currentSearchQuery.length > 0) {
          clearBtn.classList.add('active');
        } else {
          clearBtn.classList.remove('active');
        }
      }
      filterCatalog();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      currentSearchQuery = '';
      clearBtn.classList.remove('active');
      filterCatalog();
      searchInput.focus();
    });
  }

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      filterPills.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter') || 'all';
      filterCatalog();
    });
  });

  var modal = document.getElementById('techModalBackdrop');
  var modalClose = document.getElementById('techModalClose');
  var modalDismiss = document.getElementById('modalDismissBtn');
  var modalTitle = document.getElementById('modalTitle');
  var modalCat = document.getElementById('modalCat');
  var modalNorm = document.getElementById('modalNorm');
  var modalDesc = document.getElementById('modalDesc');
  var modalSpecsTbody = document.getElementById('modalSpecsTbody');
  var modalProcedure = document.getElementById('modalProcedure');
  var modalInquireBtn = document.getElementById('modalInquireBtn');
  var techSelect = document.getElementById('techSelect');

  var activeModalTechId = '';

  function openTechModal(techId) {
    var item = techData[techId];
    if (!item || !modal) return;

    activeModalTechId = techId;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCat) modalCat.textContent = item.cat;
    if (modalNorm) modalNorm.textContent = item.norm;
    if (modalDesc) modalDesc.textContent = item.desc;

    if (modalSpecsTbody) {
      modalSpecsTbody.innerHTML = '';
      item.specs.forEach(function (pair) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.textContent = pair[0];
        var td2 = document.createElement('td');
        td2.textContent = pair[1];
        tr.appendChild(td1);
        tr.appendChild(td2);
        modalSpecsTbody.appendChild(tr);
      });
    }

    if (modalProcedure) {
      modalProcedure.textContent = item.procedure;
    }

    modal.classList.add('active');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cat-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var tid = this.getAttribute('data-id');
      if (tid) {
        openTechModal(tid);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeTechModal);
  }
  if (modalDismiss) {
    modalDismiss.addEventListener('click', closeTechModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeTechModal();
    }
  });

  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', function () {
      closeTechModal();
      if (techSelect && activeModalTechId) {
        var foundOpt = false;
        for (var i = 0; i < techSelect.options.length; i++) {
          if (techSelect.options[i].value === activeModalTechId) {
            techSelect.selectedIndex = i;
            foundOpt = true;
            break;
          }
        }
        if (!foundOpt) {
          techSelect.selectedIndex = 0;
        }
      }
      var poptavkaSec = document.getElementById('poptavka');
      if (poptavkaSec) {
        poptavkaSec.scrollIntoView({ behavior: 'smooth' });
        var firstInput = document.getElementById('formName');
        if (firstInput) {
          setTimeout(function () { firstInput.focus(); }, 400);
        }
      }
    });
  }

  var inquiryForm = document.getElementById('inquiryForm');
  var formFeedback = document.getElementById('formFeedback');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var nameInput = document.getElementById('formName');
      var phoneInput = document.getElementById('formPhone');
      var emailInput = document.getElementById('formEmail');

      if (!nameInput.value.trim() || !phoneInput.value.trim() || !emailInput.value.trim()) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Prosím vyplňte všechna povinná pole označená hvězdičkou.';
          formFeedback.style.display = 'block';
        }
        return;
      }

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Děkujeme za vaši poptávku. Naši technici vás budou neprodleně kontaktovat s technickým návrhem.';
        formFeedback.style.display = 'block';
      }
      inquiryForm.reset();
    });
  }

  var revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  var counterElements = document.querySelectorAll('[data-counter-target]');
  var countersStarted = false;

  function runCounters() {
    counterElements.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-counter-target'), 10);
      var prefix = el.getAttribute('data-counter-prefix') || '';
      var suffix = el.getAttribute('data-counter-suffix') || '';
      if (isNaN(target)) return;

      var current = 0;
      var duration = 1400;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var value = Math.floor(progress * target);
        el.textContent = prefix + value + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target + suffix;
        }
      }
      window.requestAnimationFrame(step);
    });
  }

  var statsSection = document.querySelector('.hero-stats-grid');
  if (statsSection && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounters();
        }
      });
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  var urlParams = new URLSearchParams(window.location.search);
  var refParam = urlParams.get('ref');
  if (refParam) {
    try {
      sessionStorage.setItem('client_ref', refParam);
    } catch (e) {}
  }
});
