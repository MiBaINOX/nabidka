(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_metaliko-industry')) {
    sessionStorage.setItem('nabidka_ping_metaliko-industry', '1');
    var rec = {
      slug: 'metaliko-industry',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_metaliko-industry', JSON.stringify(rec));
    } catch (e) {}

    if (window.NABIDKA_PING_URL) {
      var pingUrl = window.NABIDKA_PING_URL + '?slug=metaliko-industry&t=' + encodeURIComponent(rec.time);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(pingUrl);
      } else {
        var im = new Image();
        im.src = pingUrl;
      }
    }
  }

  var yearEl = document.getElementById('yearVal');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var mobileToggle = document.getElementById('mobileToggle');
  var siteNav = document.getElementById('siteNav');
  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', function () {
      siteNav.classList.toggle('is-open');
    });

    var navItems = siteNav.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  var counters = document.querySelectorAll('.counter-val');
  var countersStarted = false;

  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      var current = 0;
      var step = Math.max(1, Math.floor(target / 40));
      if (target > 1900) {
        current = 1970;
        step = 2;
      }
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 30);
    });
  }

  var stripSection = document.querySelector('.counters-strip');
  if (stripSection && 'IntersectionObserver' in window) {
    var stripObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCounters();
          stripObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    stripObserver.observe(stripSection);
  } else {
    startCounters();
  }

  var filterBtns = document.querySelectorAll('.filter-btn');
  var prodCards = document.querySelectorAll('.prod-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      var filter = btn.getAttribute('data-filter');
      prodCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  var modalLightbox = document.getElementById('modalLightbox');
  var modalImg = document.getElementById('modalImg');
  var modalCaption = document.getElementById('modalCaption');
  var modalClose = document.getElementById('modalClose');
  var modalBackdrop = document.getElementById('modalBackdrop');
  var modalPrev = document.getElementById('modalPrev');
  var modalNext = document.getElementById('modalNext');
  var currentModalIdx = 0;
  var visibleCards = [];

  function updateVisibleCards() {
    visibleCards = Array.from(prodCards).filter(function (card) {
      return !card.classList.contains('is-hidden');
    });
  }

  function showModalAt(idx) {
    if (!visibleCards.length) return;
    if (idx < 0) idx = visibleCards.length - 1;
    if (idx >= visibleCards.length) idx = 0;
    currentModalIdx = idx;

    var card = visibleCards[currentModalIdx];
    var imgEl = card.querySelector('.prod-img');
    var fullSrc = imgEl.getAttribute('data-full') || imgEl.getAttribute('src');
    var title = card.querySelector('.prod-title').textContent;
    var category = card.querySelector('.prod-category').textContent;
    var desc = card.querySelector('.prod-desc').textContent;

    modalImg.src = fullSrc;
    modalImg.alt = title;
    modalCaption.innerHTML = '<strong>[' + category + '] ' + title + '</strong><br><span style="font-size:0.85rem; font-weight:normal; color:#64748b;">' + desc + '</span>';
  }

  prodCards.forEach(function (card) {
    card.addEventListener('click', function () {
      updateVisibleCards();
      currentModalIdx = visibleCards.indexOf(card);
      showModalAt(currentModalIdx);
      modalLightbox.classList.add('is-open');
      modalLightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalLightbox.classList.remove('is-open');
    modalLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalPrev) {
    modalPrev.addEventListener('click', function (e) {
      e.stopPropagation();
      showModalAt(currentModalIdx - 1);
    });
  }
  if (modalNext) {
    modalNext.addEventListener('click', function (e) {
      e.stopPropagation();
      showModalAt(currentModalIdx + 1);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!modalLightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') showModalAt(currentModalIdx - 1);
    if (e.key === 'ArrowRight') showModalAt(currentModalIdx + 1);
  });

  var matChoiceBtns = document.querySelectorAll('#matChoiceGroup .choice-btn');
  var appChoiceBtns = document.querySelectorAll('#appChoiceGroup .choice-btn');

  var currentMat = 'nerez';
  var currentApp = 'potraviny';

  var rozcestnikMatrix = {
    'nerez_potraviny': {
      title_cs: 'Nerezové oceli AISI 304/316L pro potravinářský průmysl',
      title_en: 'Stainless steels AISI 304/316L for the Food Industry',
      title_de: 'Edelstähle AISI 304/316L für die Lebensmittelindustrie',
      method: 'TIG (141) pulzní oblouk s jemným závarem kořene',
      gas: 'Argon 4.8 s formováním kořene dusíko-vodíkem',
      clean: '100% bezuhlíková hala Šebetov bez feritického prachu',
      finish: 'Elektrochemické moření, pasivace a balotinování',
      note_cs: 'Garantujeme rovinnost pohledových ploch, hladké vnitřní koutové svary a absolutní odolnost proti pittingové a štěrbinové korozi.',
      note_en: 'We guarantee flatness of visible surfaces, smooth fillet welds and absolute resistance to pitting and crevice corrosion.',
      note_de: 'Wir garantieren Ebenheit der Sichtflächen, glatte Kehlnähte und absolute Beständigkeit gegen Loch- und Spaltkorrosion.',
      select_val: 'potravinarske'
    },
    'nerez_farmacie': {
      title_cs: 'Nerezové oceli AISI 316L pro farmacii a sterilní provozy',
      title_en: 'Stainless steel AISI 316L for Pharma & Cleanrooms',
      title_de: 'Edelstahl AISI 316L für Pharmazie und Reinräume',
      method: 'Orbitální a ruční TIG (141) s plným průvarem',
      gas: 'Vysokočistý Argon 5.0 s formováním inertním plynem',
      clean: 'Dedikované nerezové nástroje a separátní montážní boxy',
      finish: 'Elektrolýza, zrcadlové leštění Ra < 0,4 µm, pasivace',
      note_cs: 'Vyhovuje nejpřísnějším GMP a FDA hygienickým předpisům pro kontakt s léčivy a čistými médii.',
      note_en: 'Complies with the strictest GMP and FDA hygiene standards for contact with pharmaceuticals and pure media.',
      note_de: 'Entspricht den strengsten GMP- und FDA-Hygienestandards für den Kontakt mit Pharmazeutika und Reinstmedien.',
      select_val: 'medicina'
    },
    'nerez_energie': {
      title_cs: 'Nerezové oceli pro vakuovou a energetickou techniku',
      title_en: 'Stainless steels for Vacuum & Energy Technology',
      title_de: 'Edelstähle für Vakuum- und Energietechnik',
      method: 'TIG (141) a MIG (131) v ochranné atmosféře',
      gas: 'Argon + 2,5% CO2 / čistý Argon 4.8',
      clean: 'Kontrola těsnosti heliovým detektorem a kapilární zkoušky',
      finish: 'Mechanické tryskání nerezem a chemická pasivace',
      note_cs: 'Vysoká mechanická pevnost a těsnost svarů pro vakuové komory a rozvody stlačených plynů.',
      note_en: 'High mechanical strength and weld tightness for vacuum chambers and compressed gas piping.',
      note_de: 'Hohe mechanische Festigkeit und Dichtheit für Vakuumkammern und Druckgasleitungen.',
      select_val: 'nerez'
    },
    'nerez_doprava': {
      title_cs: 'Pevnostní nerezové díly pro kolejová vozidla',
      title_en: 'High-strength Stainless Parts for Rolling Stock',
      title_de: 'Hochfeste Edelstahlteile für Schienenfahrzeuge',
      method: 'MIG (131) pulzní svařování se synergickým řízením',
      gas: 'Směsný plyn Ar + CO2 s minimálním rozstřikem',
      clean: 'Speciální přípravky zabraňující mechanické deformaci',
      finish: 'Moření svarů a antikorozní ochranný nástřik',
      note_cs: 'Certifikováno dle EN 15085 pro svařování železničních kolejových vozidel a jejich komponentů.',
      note_en: 'Certified according to EN 15085 for welding of railway vehicles and components.',
      note_de: 'Zertifiziert nach EN 15085 für das Schweißen von Schienenfahrzeugen und deren Komponenten.',
      select_val: 'nerez'
    },
    'hlinik_potraviny': {
      title_cs: 'Hliníkové konstrukce pro chladírenské technologie',
      title_en: 'Aluminum Structures for Refrigeration Technology',
      title_de: 'Aluminiumkonstruktionen für Kältetechnik',
      method: 'MIG pulzní (131) a AC TIG (141) svařování hliníku',
      gas: 'Čistý Argon 4.8 nebo směs Argon + Helium',
      clean: 'Chemické odmaštění a mechanické odstranění oxidické vrstvy',
      finish: 'Přírodní nebo barevné eloxování (anodická oxidace)',
      note_cs: 'Nízká vlastní hmotnost a vynikající tepelná vodivost pro chladírenské panely a regály.',
      note_en: 'Low dead weight and excellent thermal conductivity for refrigeration panels and racks.',
      note_de: 'Geringes Eigengewicht und hervorragende Wärmeleitfähigkeit für Kühlpaneele und Regale.',
      select_val: 'hlinik'
    },
    'hlinik_farmacie': {
      title_cs: 'Hliníkové krytování a rámy pro laboratorní přístroje',
      title_en: 'Aluminum Enclosures & Frames for Lab Equipment',
      title_de: 'Aluminiumgehäuse & Rahmen für Laborgeräte',
      method: 'AC TIG (141) s mikropulzním režimem',
      gas: 'Vysokorychlostní ochranný plyn Argon 4.8',
      clean: 'Čistá montáž bez kontaktu s železným prachem',
      finish: 'Jemné balotinování a tvrdý elox',
      note_cs: 'Estetické pohledové svary s vysokou rozměrovou přesností pro moderní přístrojovou techniku.',
      note_en: 'Aesthetic cosmetic welds with high dimensional precision for modern instrumentation.',
      note_de: 'Ästhetische Sichtschweißnähte mit hoher Maßgenauigkeit für moderne Messtechnik.',
      select_val: 'hlinik'
    },
    'hlinik_energie': {
      title_cs: 'Hliníkové vodiče a skříně výkonové elektroniky',
      title_en: 'Aluminum Busbars & Cabinets for Power Electronics',
      title_de: 'Aluminium-Stromschienen & Schränke für Leistungselektronik',
      method: 'MIG (131) se čtyřkladkovým podavačem drátu',
      gas: 'Argon + 30% Helium pro hlubší závar',
      clean: 'Přísná kontrola poréznosti a elektrické vodivosti svarů',
      finish: 'Povrchová pasivace chromátováním / SurTec',
      note_cs: 'Optimální elektrická vodivost a odolnost proti přehřátí při špičkových proudových zátěžích.',
      note_en: 'Optimal electrical conductivity and resistance to overheating under peak current loads.',
      note_de: 'Optimale elektrische Leitfähigkeit und Überhitzungsbeständigkeit bei Spitzenlasten.',
      select_val: 'hlinik'
    },
    'hlinik_doprava': {
      title_cs: 'Nosné hliníkové AlMg svařence pro kolejová vozidla',
      title_en: 'Structural AlMg Aluminum Welds for Rail Vehicles',
      title_de: 'Tragende AlMg-Aluminiumschweißteile für Schienenfahrzeuge',
      method: 'Pulzní MIG (131) s dynamickým obloukem',
      gas: 'Argon 4.8 s předehřevem masivních průřezů',
      clean: 'Hala bez feritických částic zabraňující galvanické korozi',
      finish: 'Odmaštění a příprava pro lakování dle železničních norem',
      note_cs: 'Výrazná úspora hmotnosti vlakových souprav při zachování vysoké únavové dynamické pevnosti.',
      note_en: 'Significant weight savings for train sets while maintaining high dynamic fatigue strength.',
      note_de: 'Erhebliche Gewichtseinsparung für Zuggarnituren bei hoher dynamischer Ermüdungsfestigkeit.',
      select_val: 'hlinik'
    },
    'special_potraviny': {
      title_cs: 'Žárupevné nerezové slitiny pro pekařské pece a sušárny',
      title_en: 'Heat-resistant Alloys for Baking Ovens & Dryers',
      title_de: 'Hitzebeständige Legierungen für Backöfen & Trockner',
      method: 'TIG (141) s přídavným materiálem na bázi niklu',
      gas: 'Formovací plyn s obsahem vodíku',
      clean: 'Kompletní kontrola interpass teploty',
      finish: 'Tepelné žíhání a moření pro obnovu pasivní vrstvy',
      note_cs: 'Dlouhodobá stabilita při teplotách nad 600 °C bez odlupování okují a deformací.',
      note_en: 'Long-term stability at temperatures above 600 °C without scaling or distortion.',
      note_de: 'Langzeitstabilität bei Temperaturen über 600 °C ohne Verzunderung oder Verzug.',
      select_val: 'jine'
    },
    'special_farmacie': {
      title_cs: 'Speciální slitiny Hastelloy a Duplex pro chemii',
      title_en: 'Hastelloy & Duplex Special Alloys for Chemical Industry',
      title_de: 'Hastelloy & Duplex Speziallegierungen für die Chemie',
      method: 'TIG (141) s přesnou kontrolou vneseného tepla',
      gas: 'Vysoce čistý Argon 5.0 s formováním kořene',
      clean: 'Přísné oddělení nástrojů a zkoušky feritometrem',
      finish: 'Chemická pasivace a elektrolytické leštění',
      note_cs: 'Maximální odolnost vůči kyselinám, chloridům a extrémně agresivním chemickým činidlům.',
      note_en: 'Maximum resistance to acids, chlorides and extremely aggressive chemical agents.',
      note_de: 'Maximale Beständigkeit gegen Säuren, Chloride und extrem aggressive Chemikalien.',
      select_val: 'nerez'
    },
    'special_energie': {
      title_cs: 'Žárupevné a kyselinovzdorné celky pro energetiku',
      title_en: 'Heat & Acid Resistant Assemblies for Energy Sector',
      title_de: 'Hitzebeständige & säurefeste Baugruppen für den Energiesektor',
      method: 'Kombinace TIG kořen (141) + MIG výplň (131)',
      gas: 'Speciální tříkomponentní směsi Argon + He + H2',
      clean: 'Nedestruktivní NDT defektoskopie svarů (RT / UT / PT)',
      finish: 'Mechanické kartáčování nerezovými kotouči a pasivace',
      note_cs: 'Plná certifikace svarových postupů WPQR pro tlaková a tepelná zařízení dle EN ISO 15614.',
      note_en: 'Full certification of WPQR welding procedures for pressure and thermal equipment according to EN ISO 15614.',
      note_de: 'Vollständige Zertifizierung von WPQR-Schweißverfahren für Druck- und Wärmegeräte nach EN ISO 15614.',
      select_val: 'jine'
    },
    'special_doprava': {
      title_cs: 'Vysokopevnostní slitiny pro speciální transportní techniku',
      title_en: 'High-strength Alloys for Specialized Transport Equipment',
      title_de: 'Hochfeste Legierungen für Spezialtransporttechnik',
      method: 'Pulzní MIG svařování s přísnou kontrolou parametrů',
      gas: 'Argon + směsi vzácných plynů',
      clean: 'Rozměrová kontrola na 3D měřicím rameni',
      finish: 'Komplexní antikorozní ochrana pro extrémní klimatické podmínky',
      note_cs: 'Extrémní rázová houževnatost i při subnulových teplotách pro severské exportní trhy.',
      note_en: 'Extreme impact toughness even at sub-zero temperatures for Nordic export markets.',
      note_de: 'Extreme Kerbschlagzähigkeit auch bei Minustemperaturen für nordische Exportmärkte.',
      select_val: 'jine'
    }
  };

  function updateRozcestnik() {
    var key = currentMat + '_' + currentApp;
    var data = rozcestnikMatrix[key] || rozcestnikMatrix['nerez_potraviny'];
    var currentLang = localStorage.getItem('metaliko_lang') || 'cs';

    var resTitle = document.getElementById('resultTitle');
    var resMethod = document.getElementById('resMethod');
    var resGas = document.getElementById('resGas');
    var resClean = document.getElementById('resClean');
    var resFinish = document.getElementById('resFinish');
    var resNote = document.getElementById('resNote');

    if (currentLang === 'en') {
      resTitle.textContent = data.title_en;
      resNote.textContent = data.note_en;
    } else if (currentLang === 'de') {
      resTitle.textContent = data.title_de;
      resNote.textContent = data.note_de;
    } else {
      resTitle.textContent = data.title_cs;
      resNote.textContent = data.note_cs;
    }

    resMethod.textContent = data.method;
    resGas.textContent = data.gas;
    resClean.textContent = data.clean;
    resFinish.textContent = data.finish;
  }

  matChoiceBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      matChoiceBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentMat = btn.getAttribute('data-mat');
      updateRozcestnik();
    });
  });

  appChoiceBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      appChoiceBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentApp = btn.getAttribute('data-app');
      updateRozcestnik();
    });
  });

  var btnApplyToInquiry = document.getElementById('btnApplyToInquiry');
  if (btnApplyToInquiry) {
    btnApplyToInquiry.addEventListener('click', function () {
      var key = currentMat + '_' + currentApp;
      var data = rozcestnikMatrix[key] || rozcestnikMatrix['nerez_potraviny'];
      var userMaterial = document.getElementById('userMaterial');
      var userNote = document.getElementById('userNote');

      if (userMaterial) {
        userMaterial.value = data.select_val;
      }
      if (userNote) {
        userNote.value = 'Poptávka na základě rozcestníku: ' + data.title_cs + '\n' +
                         'Požadovaná technologie: ' + data.method + '\n' +
                         'Ochranná atmosféra: ' + data.gas + '\n' +
                         'Povrchová úprava: ' + data.finish + '\n' +
                         'Doplňující požadavky: [doplňte rozměry a počet kusů]';
      }

      var contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function () {
          if (userNote) userNote.focus();
        }, 600);
      }
    });
  }

  var translations = {
    cs: {
      page_title: 'Metaliko industry s.r.o. | Certifikované svařování nerezi a hliníku',
      top_meta: 'Provozovna Šebetov 258 • Export do 8 zemí',
      nav_about: 'O společnosti',
      nav_story: 'Náš příběh',
      nav_products: 'Výrobky',
      nav_rozcestnik: 'Technologický rozcestník',
      nav_team: 'Vedení firmy',
      nav_contact: 'Nezávazná poptávka',
      hero_kicker: 'Ryze česká strojírenská výroba',
      hero_title: 'Špičkové svařování nerezi a hliníku v prostředí bez kontaminace',
      hero_perex: 'Vyrábíme vysoce přesné nerezové a hliníkové svařence pro energetiku, potravinářství, medicínskou techniku a ekologické provozy. Naše čistá hala v Šebetově garantuje absolutní absenci uhlíkového materiálu a stoprocentní čistotu svarových spojů.',
      hero_btn_catalog: 'Katalog svařenců',
      hero_btn_rozcestnik: 'Materiálový rozcestník',
      export_label: 'Exportní trhy:',
      export_countries: 'Německo • Rakousko • Dánsko • Nizozemsko • Norsko • Švédsko • Kanada • Velká Británie',
      stat_clean: 'Čisté nerezové prostředí bez uhlíku',
      stat_export: 'Zemí mezinárodního exportu',
      counter_1: 'Rok vzniku společnosti a vstup do Metaliko Group',
      counter_states_unit: 'států',
      counter_2: 'Globální exportní dosah v západní Evropě a Skandinávii',
      counter_3: 'Oddělení výroby od uhlíkových ocelí pro nulovou korozi',
      counter_gallery_unit: 'položek',
      counter_4: 'Zdokumentovaných referenčních dílců v galerii výrobků',
      about_kicker: 'Filozofie a zázemí',
      about_title: 'Proč zvolit Metaliko industry',
      about_perex: 'Jsme členové týmu Metaliko Group – silného strojírenského partnera s dlouholetou tradicí. V naší modernizované hale v Šebetově se soustředíme výhradně na čistou práci s nerezovými a hliníkovými materiály.',
      feat1_title: 'Absolutní čistota prostředí',
      feat1_p: 'V naší výrobní hale se nezpracovávají žádné černé uhlíkové oceli. Tím je vyloučena jakákoliv kontaminace feritickým prachem, která by mohla u nerezových dílů způsobit skrytou korozi.',
      feat2_title: 'Zakázková i malosériová přesnost',
      feat2_p: 'Disponujeme certifikovanými svářeči podle mezinárodních norem pro metody TIG a MIG. Dokážeme realizovat jak unikátní prototypové sestavy, tak opakované výrobní série.',
      feat3_title: 'Mezinárodní expedice a balení',
      feat3_p: 'Propracovaný systém antikorozního a fixačního balení zaručuje, že pohledové nerezové díly dorazí k odběratelům v Německu, Skandinávii i zámoří v netknutém stavu.',
      story_kicker: 'Naše cesta a vize',
      story_title: 'Příběh čistého strojírenství',
      story_perex: 'Od založení v roce 2017 budujeme v Šebetově pracoviště, které splňuje nejpřísnější evropské požadavky na přesnost svarů a metalurgickou čistotu.',
      m1_title: 'Vznik společnosti a vstup do Metaliko Group',
      m1_p: 'Spojení s mateřskou společností Metaliko a strategické rozhodnutí vytvořit specializovaný provoz zaměřený výhradně na nerez a hliník.',
      m2_title: 'Modernizace areálu v Šebetově',
      m2_p: 'Kompletní přebudování výrobních prostor na bezuhlíkovou zónu s odsáváním, moderními TIG pracovišti a systémem čistého nářadí.',
      m3_title: 'Průlom na náročné exportní trhy',
      m3_p: 'Zahájení dodávek pro lídry v chemickém a medicínském strojírenství v Německu, Dánsku, Nizozemsku a zámoří.',
      m4_title: 'Stabilní partner s moderním inženýringem',
      m4_p: 'Kompletní konstrukční podpora, pokročilá kontrola jakosti svarů, mezinárodní certifikace a stabilní tým kvalifikovaných svářečů.',
      prod_kicker: 'Výrobní portfolio & Reference',
      prod_title: 'Katalog a fotogalerie svařenců',
      prod_perex: 'Kompletní přehled všech 39 reálných dílců vyráběných v našem závodě. Vyberte kategorii pro okamžité filtrování nebo klikněte pro zvětšení detailu svaru.',
      filter_all: 'Všechny realizace (39)',
      filter_nerez: 'Nerezové svařence (22)',
      filter_hlinik: 'Hliníkové svařence (7)',
      filter_expedice: 'Balení a expedice (10)',
      guide_kicker: 'Interaktivní konfigurátor svarů',
      guide_title: 'Technologický rozcestník materiálů & parametrů',
      guide_perex: 'Zvolte základní materiál a požadované odvětví aplikace. Systém automaticky doporučí certifikovanou metodu svařování, ochranný plyn a povrchovou úpravu s možností přímého přenosu do poptávky.',
      step1_label: 'Krok 1: Výběr materiálu',
      mat1_t: 'Nerezové oceli',
      mat2_t: 'Hliníkové slitiny',
      mat3_t: 'Speciální slitiny',
      step2_label: 'Krok 2: Odvětví nasazení',
      app1_t: 'Potravinářství',
      app2_t: 'Farmacie & Chemie',
      app3_t: 'Energetika',
      app4_t: 'Kolejová vozidla',
      res_header: 'Doporučená technologie svařování pro vybranou kombinaci',
      lbl_method: 'Metoda svařování:',
      lbl_gas: 'Ochranná atmosféra:',
      lbl_clean: 'Čistota prostředí:',
      lbl_finish: 'Povrchová úprava:',
      btn_apply_inquiry: 'Přenést parametry do poptávkového formuláře',
      team_kicker: 'Lidé stojící za kvalitou',
      team_title: 'Klíčoví představitelé společnosti',
      team_perex: 'Věříme v otevřenou a přímou komunikaci. Naši vedoucí pracovníci jsou vám k dispozici pro technické i obchodní konzultace.',
      role_1: 'Jednatel společnosti / Managing Director',
      role_2: 'Ředitel výroby / Production Director',
      role_3: 'Obchodně technický manažer / Sales & Operations',
      role_4: 'Příprava výroby a konstrukce / Design',
      role_5: 'Koordinátor výroby / Manufacturing Coordinator',
      doc_title: 'Oficiální dokument: Politika kvality Metaliko industry',
      doc_desc: 'Závazek vedení společnosti k trvalému zvyšování jakosti, metalurgické čistoty a spokojenosti zákazníků podle mezinárodních norem.',
      doc_btn: 'Stáhnout dokument (PDF)',
      contact_kicker: 'Spojte se s námi',
      contact_title: 'Poptávka svařování a kontakty',
      contact_perex: 'Zašlete nám výkresovou dokumentaci nebo nás navštivte přímo v naší provozovně v Šebetově.',
      addr_plant_title: 'Výrobní provozovna:',
      addr_seat_title: 'Fakturační sídlo:',
      btn_copy: 'Kopírovat',
      reg_court: 'Zapsaná v OR u Krajského soudu v Brně, oddíl C, vložka 101077',
      group_title: 'Mateřská skupina:',
      group_member: 'Člen skupiny',
      form_title: 'Rychlý poptávkový formulář',
      form_note: 'Odpovídáme standardně do 24 hodin s technickým návrhem.',
      form_name_lbl: 'Jméno a příjmení *',
      form_name_ph: 'Ing. Petr Svoboda',
      form_comp_lbl: 'Firma',
      form_comp_ph: 'Průmyslová společnost a.s.',
      form_email_lbl: 'E-mail *',
      form_email_ph: 'svoboda@spolecnost.cz',
      form_tel_lbl: 'Telefon *',
      form_tel_ph: '+420 777 123 456',
      form_mat_lbl: 'Požadovaný typ svařence',
      opt_1: 'Nerezové svařence TIG/MIG',
      opt_2: 'Hliníkové svařence AlMg/AlSi',
      opt_3: 'Potravinářské a sanitární vany',
      opt_4: 'Rámy pro zdravotnickou techniku',
      opt_5: 'Jiné zakázkové strojírenství',
      form_note_lbl: 'Popis poptávky, tloušťky materiálu, export *',
      form_note_ph: 'Uveďte rozměry svařence, požadované tolerance, povrchovou úpravu či zemi doručení...',
      form_submit_btn: 'Odeslat technickou poptávku',
      map_bar_text: 'Provozovna: Šebetov 258, 679 35 Šebetov',
      map_open_btn: 'Otevřít na Mapy.cz →',
      footer_desc: 'Přední česká strojírenská společnost se specializací na zakázkové svařování nerezových a hliníkových svařenců pro mezinárodní trh.',
      footer_rights: 'Všechna práva vyhrazena.',
      footer_nav_title: 'Rychlá navigace',
      footer_contact_title: 'Provozovna a kontakt',
      footer_part_of: 'Součást Metaliko Group'
    },
    en: {
      page_title: 'Metaliko industry s.r.o. | Certified Stainless Steel & Aluminum Welding',
      top_meta: 'Manufacturing Plant Šebetov 258 • Exporting to 8 Countries',
      nav_about: 'About Us',
      nav_story: 'Our Story',
      nav_products: 'Products',
      nav_rozcestnik: 'Technology Selector',
      nav_team: 'Leadership',
      nav_contact: 'Inquiry',
      hero_kicker: 'Pure Czech Engineering Manufacturing',
      hero_title: 'Premium Stainless Steel & Aluminum Welding in Zero-Carbon Environment',
      hero_perex: 'We manufacture high-precision stainless steel and aluminum welded assemblies for power generation, food processing, medical devices and green tech. Our clean facility in Šebetov guarantees total absence of carbon steels and 100% weld purity.',
      hero_btn_catalog: 'Weldment Catalog',
      hero_btn_rozcestnik: 'Material Selector',
      export_label: 'Export Destinations:',
      export_countries: 'Germany • Austria • Denmark • Netherlands • Norway • Sweden • Canada • United Kingdom',
      stat_clean: 'Pure zero-carbon stainless facility',
      stat_export: 'International export countries',
      counter_1: 'Year founded and joined Metaliko Group',
      counter_states_unit: 'countries',
      counter_2: 'Global export footprint across Western Europe & Scandinavia',
      counter_3: 'Complete separation from carbon steels for zero corrosion',
      counter_gallery_unit: 'items',
      counter_4: 'Documented reference parts in our product gallery',
      about_kicker: 'Philosophy & Facilities',
      about_title: 'Why Choose Metaliko industry',
      about_perex: 'We are proud members of Metaliko Group – a dependable manufacturing partner with a long tradition. In our modernized plant in Šebetov, we focus exclusively on clean stainless and aluminum fabrication.',
      feat1_title: 'Absolute Environmental Purity',
      feat1_p: 'No black carbon steels are processed in our facility. This completely eliminates any contamination by ferritic particles that could trigger hidden corrosion on stainless components.',
      feat2_title: 'Custom & Small-Batch Precision',
      feat2_p: 'Our welders are internationally certified for TIG and MIG processes. We handle single prototype weldments as well as repeated production batches.',
      feat3_title: 'International Packing & Logistics',
      feat3_p: 'Our engineered anti-corrosion packaging ensures high-finish stainless assemblies arrive intact in Germany, Scandinavia or overseas.',
      story_kicker: 'Our Heritage & Vision',
      story_title: 'The Story of Clean Engineering',
      story_perex: 'Since our establishment in 2017, we have developed a facility in Šebetov that meets the strictest European standards for weld integrity and metallurgical purity.',
      m1_title: 'Company Foundation & Joining Metaliko Group',
      m1_p: 'Joining the parent company Metaliko and making the strategic decision to build a specialized facility dedicated entirely to stainless steel and aluminum.',
      m2_title: 'Plant Modernization in Šebetov',
      m2_p: 'Complete refurbishment into a zero-carbon workshop with extraction, state-of-the-art TIG workstations, and segregated toolsets.',
      m3_title: 'Breakthrough into Demanding Export Markets',
      m3_p: 'Commenced deliveries to tier-1 clients in chemical and medical engineering across Germany, Denmark, the Netherlands and overseas.',
      m4_title: 'Reliable Partner with Advanced Engineering',
      m4_p: 'Full design support, advanced weld inspection, international certifications, and an experienced team of qualified welders.',
      prod_kicker: 'Manufacturing Portfolio & References',
      prod_title: 'Catalog & Photo Gallery of Weldments',
      prod_perex: 'Complete overview of all 39 genuine welded components produced in our workshop. Filter by category or click to inspect weld details.',
      filter_all: 'All Fabrications (39)',
      filter_nerez: 'Stainless Steel Weldments (22)',
      filter_hlinik: 'Aluminum Weldments (7)',
      filter_expedice: 'Packing & Logistics (10)',
      guide_kicker: 'Interactive Weld Configurator',
      guide_title: 'Technology Selector for Materials & Parameters',
      guide_perex: 'Select your base material and targeted industry application. The system will recommend certified welding processes, shielding gases and surface finishes with instant transfer to inquiry.',
      step1_label: 'Step 1: Select Material',
      mat1_t: 'Stainless Steels',
      mat2_t: 'Aluminum Alloys',
      mat3_t: 'Special Alloys',
      step2_label: 'Step 2: Industry Application',
      app1_t: 'Food Industry',
      app2_t: 'Pharma & Chemicals',
      app3_t: 'Energy & Power',
      app4_t: 'Rolling Stock',
      res_header: 'Recommended welding technology for chosen combination',
      lbl_method: 'Welding Method:',
      lbl_gas: 'Shielding Gas:',
      lbl_clean: 'Cleanliness Standard:',
      lbl_finish: 'Surface Finishing:',
      btn_apply_inquiry: 'Transfer Parameters into Inquiry Form',
      team_kicker: 'People Behind Quality',
      team_title: 'Key Company Executives',
      team_perex: 'We believe in transparent and direct collaboration. Our management is ready for your technical and commercial inquiries.',
      role_1: 'Managing Director / Jednatel společnosti',
      role_2: 'Production Director / Ředitel výroby',
      role_3: 'Sales & Operations Manager / Obchodně technický manažer',
      role_4: 'Design & Engineering / Příprava výroby a konstrukce',
      role_5: 'Manufacturing Coordinator / Koordinátor výroby',
      doc_title: 'Official Document: Quality Policy of Metaliko industry',
      doc_desc: 'Commitment of executive management to continuous improvement, metallurgical cleanliness and customer satisfaction according to ISO standards.',
      doc_btn: 'Download Document (PDF)',
      contact_kicker: 'Get in Touch',
      contact_title: 'Welding Inquiries & Contacts',
      contact_perex: 'Send us your technical drawings or visit our manufacturing plant directly in Šebetov.',
      addr_plant_title: 'Manufacturing Plant:',
      addr_seat_title: 'Registered Office:',
      btn_copy: 'Copy',
      reg_court: 'Registered at Regional Court in Brno, Section C, File 101077',
      group_title: 'Parent Group:',
      group_member: 'Member of',
      form_title: 'Quick Inquiry Form',
      form_note: 'We typically respond within 24 hours with an initial technical proposal.',
      form_name_lbl: 'Full Name *',
      form_name_ph: 'John Smith',
      form_comp_lbl: 'Company',
      form_comp_ph: 'Industrial Solutions Ltd.',
      form_email_lbl: 'E-mail *',
      form_email_ph: 'smith@company.com',
      form_tel_lbl: 'Phone *',
      form_tel_ph: '+49 151 2345678',
      form_mat_lbl: 'Requested Weldment Type',
      opt_1: 'Stainless Steel Weldments TIG/MIG',
      opt_2: 'Aluminum Weldments AlMg/AlSi',
      opt_3: 'Food & Sanitary Basins',
      opt_4: 'Medical Equipment Frames',
      opt_5: 'Other Custom Engineering',
      form_note_lbl: 'Inquiry details, wall thicknesses, export destination *',
      form_note_ph: 'Specify weldment dimensions, tolerances, surface requirements or delivery location...',
      form_submit_btn: 'Send Technical Inquiry',
      map_bar_text: 'Facility: Šebetov 258, 679 35 Šebetov, Czechia',
      map_open_btn: 'Open in Mapy.cz →',
      footer_desc: 'Leading Czech engineering company specialized in custom welding of stainless steel and aluminum components for global markets.',
      footer_rights: 'All rights reserved.',
      footer_nav_title: 'Quick Links',
      footer_contact_title: 'Facility & Contacts',
      footer_part_of: 'Member of Metaliko Group'
    },
    de: {
      page_title: 'Metaliko industry s.r.o. | Zertifiziertes Edelstahl- & Aluminiumschweißen',
      top_meta: 'Produktionswerk Šebetov 258 • Export in 8 Länder',
      nav_about: 'Über uns',
      nav_story: 'Geschichte',
      nav_products: 'Produkte',
      nav_rozcestnik: 'Technologie-Wegweiser',
      nav_team: 'Führung',
      nav_contact: 'Anfrage',
      hero_kicker: 'Reine tschechische Maschinenbaufertigung',
      hero_title: 'Erstklassiges Edelstahl- & Aluminiumschweißen in kontaminationsfreier Umgebung',
      hero_perex: 'Wir fertigen hochpräzise Edelstahl- und Aluminiumschweißbaugruppen für Energietechnik, Lebensmittelindustrie, Medizintechnik und Umwelttechnik. Unsere reine Halle in Šebetov garantiert absolute Abwesenheit von Kohlenstoffstahl und 100% reine Schweißnähte.',
      hero_btn_catalog: 'Schweißteil-Katalog',
      hero_btn_rozcestnik: 'Material-Wegweiser',
      export_label: 'Exportmärkte:',
      export_countries: 'Deutschland • Österreich • Dänemark • Niederlande • Norwegen • Schweden • Kanada • Großbritannien',
      stat_clean: 'Reine kohlenstofffreie Edelstahlhalle',
      stat_export: 'Internationale Exportländer',
      counter_1: 'Gründungsjahr und Beitritt zur Metaliko Group',
      counter_states_unit: 'Länder',
      counter_2: 'Globale Exportreichweite in Westeuropa und Skandinavien',
      counter_3: 'Vollständige Trennung von Baustählen für null Korrosion',
      counter_gallery_unit: 'Teile',
      counter_4: 'Dokumentierte Referenzbaugruppen in der Produktgalerie',
      about_kicker: 'Philosophie & Ausstattung',
      about_title: 'Warum Metaliko industry wählen',
      about_perex: 'Wir sind Mitglied der Metaliko Group – eines starken Maschinenbaupartners mit langjähriger Tradition. In unserem Werk in Šebetov konzentrieren wir uns ausschließlich auf saubere Edelstahl- und Aluminiumbearbeitung.',
      feat1_title: 'Absolute Reinheit der Umgebung',
      feat1_p: 'In unserer Produktionshalle werden keine schwarzen Kohlenstoffstähle verarbeitet. Dadurch wird jede Kontamination durch ferritischen Staub ausgeschlossen.',
      feat2_title: 'Präzision in Einzel- und Kleinserien',
      feat2_p: 'Wir verfügen über zertifizierte Schweißer nach internationalen Normen für TIG- und MIG-Verfahren sowohl für Prototypen als auch für wiederkehrende Serien.',
      feat3_title: 'Internationale Verpackung & Logistik',
      feat3_p: 'Ein ausgeklügeltes System aus Korrosionsschutz- und Fixierverpackungen garantiert, dass Sichtteile unversehrt bei Kunden in Deutschland oder Übersee eintreffen.',
      story_kicker: 'Unser Weg & Vision',
      story_title: 'Die Geschichte des reinen Maschinenbaus',
      story_perex: 'Seit unserer Gründung im Jahr 2017 bauen wir in Šebetov ein Werk auf, das strengste europäische Vorgaben an Nahtpräzision und metallurgische Reinheit erfüllt.',
      m1_title: 'Unternehmensgründung & Beitritt zur Gruppe',
      m1_p: 'Zusammenschluss mit der Muttergesellschaft Metaliko und die strategische Entscheidung für ein reines Edelstahl- und Aluminiumwerk.',
      m2_title: 'Modernisierung des Werks Šebetov',
      m2_p: 'Kompletter Umbau der Hallen zu einer kohlenstofffreien Zone mit Absaugung, modernen TIG-Arbeitsplätzen und getrenntem Werkzeug.',
      m3_title: 'Durchbruch in anspruchsvollen Exportmärkten',
      m3_p: 'Lieferstart für Marktführer der chemischen Industrie und Medizintechnik in Deutschland, Dänemark, den Niederlanden und Übersee.',
      m4_title: 'Verlässlicher Partner mit modernem Engineering',
      m4_p: 'Vollständige Konstruktionsunterstützung, fortgeschrittene Qualitätsprüfung und ein stabiles Team qualifizierter Schweißer.',
      prod_kicker: 'Fertigungsportfolio & Referenzen',
      prod_title: 'Katalog & Fotogalerie der Schweißteile',
      prod_perex: 'Komplette Übersicht aller 39 realen Baugruppen aus unserem Werk. Wählen Sie eine Kategorie zum Filtern oder klicken Sie für Details.',
      filter_all: 'Alle Baugruppen (39)',
      filter_nerez: 'Edelstahl-Schweißteile (22)',
      filter_hlinik: 'Aluminium-Schweißteile (7)',
      filter_expedice: 'Verpackung & Versand (10)',
      guide_kicker: 'Interaktiver Schweiß-Konfigurator',
      guide_title: 'Technologie-Wegweiser für Werkstoffe & Parameter',
      guide_perex: 'Wählen Sie Grundwerkstoff und Einsatzbereich. Das System empfiehlt zertifizierte Schweißverfahren, Schutzgase und Oberflächen mit Direktübernahme in die Anfrage.',
      step1_label: 'Schritt 1: Werkstoffauswahl',
      mat1_t: 'Edelstähle',
      mat2_t: 'Aluminiumlegierungen',
      mat3_t: 'Sonderlegierungen',
      step2_label: 'Schritt 2: Einsatzbereich',
      app1_t: 'Lebensmitteltechnik',
      app2_t: 'Pharma & Chemie',
      app3_t: 'Energietechnik',
      app4_t: 'Schienenfahrzeuge',
      res_header: 'Empfohlene Schweißtechnologie für die gewählte Kombination',
      lbl_method: 'Schweißverfahren:',
      lbl_gas: 'Schutzgas:',
      lbl_clean: 'Reinheitsstandard:',
      lbl_finish: 'Oberflächenbehandlung:',
      btn_apply_inquiry: 'Parameter in das Anfrageformular übernehmen',
      team_kicker: 'Menschen hinter der Qualität',
      team_title: 'Führungskräfte des Unternehmens',
      team_perex: 'Wir setzen auf direkte Kommunikation. Unsere Ansprechpartner stehen Ihnen für technische und kommerzielle Fragen gern zur Verfügung.',
      role_1: 'Geschäftsführer / Managing Director',
      role_2: 'Produktionsleiter / Production Director',
      role_3: 'Vertriebs- & Betriebsleiter / Sales & Operations',
      role_4: 'Arbeitsvorbereitung & Konstruktion / Design',
      role_5: 'Fertigungskoordinator / Manufacturing Coordinator',
      doc_title: 'Offizielles Dokument: Qualitätspolitik Metaliko industry',
      doc_desc: 'Verpflichtung der Geschäftsleitung zu kontinuierlicher Qualitätssteigerung, metallurgischer Reinheit und Kundenzufriedenheit nach ISO-Normen.',
      doc_btn: 'Dokument herunterladen (PDF)',
      contact_kicker: 'Kontakt aufnehmen',
      contact_title: 'Schweißanfragen & Kontakte',
      contact_perex: 'Senden Sie uns Zeichnungen oder besuchen Sie direkt unsere Produktionsstätte in Šebetov.',
      addr_plant_title: 'Produktionswerk:',
      addr_seat_title: 'Firmensitz:',
      btn_copy: 'Kopieren',
      reg_court: 'Eingetragen beim Kreisgericht Brno, Abteilung C, Einlage 101077',
      group_title: 'Muttergruppe:',
      group_member: 'Mitglied der',
      form_title: 'Schnelles Anfrageformular',
      form_note: 'Wir antworten in der Regel innerhalb von 24 Stunden mit einem technischen Angebot.',
      form_name_lbl: 'Vor- und Nachname *',
      form_name_ph: 'Max Mustermann',
      form_comp_lbl: 'Firma',
      form_comp_ph: 'Industriebau GmbH',
      form_email_lbl: 'E-Mail *',
      form_email_ph: 'mustermann@firma.de',
      form_tel_lbl: 'Telefon *',
      form_tel_ph: '+49 170 1234567',
      form_mat_lbl: 'Gewünschte Schweißteilart',
      opt_1: 'Edelstahl-Schweißteile TIG/MIG',
      opt_2: 'Aluminium-Schweißteile AlMg/AlSi',
      opt_3: 'Lebensmittel- & Sanitärwannen',
      opt_4: 'Rahmen für Medizintechnik',
      opt_5: 'Sonstiger Maschinenbau',
      form_note_lbl: 'Beschreibung, Wandstärken, Lieferziel *',
      form_note_ph: 'Geben Sie Abmessungen, Toleranzen, Oberflächengüte oder Lieferort an...',
      form_submit_btn: 'Technische Anfrage absenden',
      map_bar_text: 'Werk: Šebetov 258, CZ-679 35 Šebetov',
      map_open_btn: 'In Mapy.cz öffnen →',
      footer_desc: 'Führendes tschechisches Maschinenbauunternehmen für kundenspezifisches Schweißen von Edelstahl- und Aluminiumbaugruppen.',
      footer_rights: 'Alle Rechte vorbehalten.',
      footer_nav_title: 'Schnellnavigation',
      footer_contact_title: 'Werk & Kontakt',
      footer_part_of: 'Mitglied der Metaliko Group'
    }
  };

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'cs';
    localStorage.setItem('metaliko_lang', lang);
    document.documentElement.lang = lang;

    var langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    var dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    updateRozcestnik();
  }

  var langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var selected = btn.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });

  var initialLang = localStorage.getItem('metaliko_lang') || 'cs';
  applyLanguage(initialLang);

  var copyBtns = document.querySelectorAll('.btn-copy-ico');
  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var val = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(function () {
          var orig = btn.textContent;
          btn.textContent = '✓ OK';
          setTimeout(function () { btn.textContent = orig; }, 1800);
        });
      }
    });
  });

  var inquiryForm = document.getElementById('inquiryForm');
  var formAlert = document.getElementById('formAlert');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('userName').value.trim();
      var comp = document.getElementById('userCompany').value.trim();
      var email = document.getElementById('userEmail').value.trim();
      var phone = document.getElementById('userPhone').value.trim();
      var mat = document.getElementById('userMaterial').value;
      var note = document.getElementById('userNote').value.trim();

      var subject = encodeURIComponent('Poptávka svařování nerezi/hliníku - ' + (comp || name));
      var body = encodeURIComponent(
        'Jméno: ' + name + '\n' +
        'Firma: ' + comp + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefon: ' + phone + '\n' +
        'Materiál: ' + mat + '\n\n' +
        'Zpráva a specifikace:\n' + note
      );

      var mailtoUrl = 'mailto:janicek@metaliko-industry.cz?subject=' + subject + '&body=' + body;
      window.location.href = mailtoUrl;

      if (formAlert) {
        formAlert.textContent = 'Váš e-mailový klient byl otevřen. Děkujeme za vaši poptávku!';
        formAlert.classList.add('is-shown');
      }
    });
  }
})();