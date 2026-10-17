document.addEventListener('DOMContentLoaded', function () {
  const catalogData = [
    {
      id: 'ge-fong-g30had',
      title: 'CNC soustruh Ge-Fong G-30HA-D',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: 'Poháněné nástroje',
      image: 'assets/Ge-fong.jpg',
      desc: 'Malý a vysoce dynamický CNC soustruh s poháněnými nástroji pro přesné obrábění tvarově složitých kusů i menších sérií.',
      specs: {
        'Typ stroje': 'CNC horizontální soustruh',
        'Max. soustružený průměr': '32 mm',
        'Max. soustružená délka': '91 mm',
        'Rozjezd osy X': '480 mm',
        'Rozjezd osy Z': '170 mm',
        'Max. otáčky vřetene': '6 000 ot/min',
        'Otáčky poháněných nástrojů': '4 000 ot/min',
        'Počet poháněných nástrojů': '4 ks'
      }
    },
    {
      id: 'ge-fong-g32had',
      title: 'CNC soustruh Ge-Fong G-32HA-D',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: 'Vysoká přesnost',
      image: 'assets/Ge-fong.jpg',
      desc: 'Rychlý CNC soustruh s poháněnými nástroji přizpůsobený pro opakovanou sériovou výrobu s minimálními výrobními časy.',
      specs: {
        'Typ stroje': 'CNC soustružnické centrum',
        'Max. soustružený průměr': '32 mm',
        'Max. soustružená délka': '91 mm',
        'Rozjezd osy X': '480 mm',
        'Rozjezd osy Z': '170 mm',
        'Max. otáčky vřetene': '6 000 ot/min',
        'Otáčky poháněných nástrojů': '4 000 ot/min',
        'Poháněné nástroje': '4 ks'
      }
    },
    {
      id: 'hardinge-talent-645',
      title: 'CNC soustruh Hardinge Talent 6/45-SV',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: 'Řízení FANUC',
      image: 'assets/hardinge.jpg',
      desc: 'Univerzální CNC soustruh s poháněnými nástroji a vysokou přesností. Umožňuje kusové obrábění i efektivní výrobu z tyče.',
      specs: {
        'Max. soustružený průměr': '284 mm',
        'Max. soustružená délka': '406 mm',
        'Průchod vřetenem': '45 mm',
        'Otáčky vřetena': '6 000 ot/min',
        'Nástrojová hlava': '12 pozic / VDI 30',
        'Přesnost najíždění': '± 0,005 mm',
        'Řídicí systém': 'FANUC'
      }
    },
    {
      id: 'hardinge-talent-852',
      title: 'CNC soustruh Hardinge Talent 8/52',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: 'Tyčový materiál',
      image: 'assets/hardinge.jpg',
      desc: 'Tuhý a přesný CNC soustruh pro větší průměry i těžší obráběcí operace s garancí mikronové opakovatelnosti.',
      specs: {
        'Max. soustružený průměr': '284 mm',
        'Max. soustružená délka': '406 mm',
        'Průchod vřetenem': '52 mm',
        'Otáčky vřetena': '5 000 ot/min',
        'Nástrojová hlava': '12 pozic / VDI 30',
        'Přesnost najíždění': '± 0,005 mm',
        'Řídicí systém': 'FANUC'
      }
    },
    {
      id: 'jinn-fa-smart42t8',
      title: 'CNC soustruh JINN FA Smart 42T8',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: 'Revolverová hlava',
      image: 'assets/smart42t8.jpg',
      desc: 'Horizontální soustruh s 8-polohovou revolverovou hlavou a lištou pro další nástroje pro rychlé cykly a nízké seřizovací časy.',
      specs: {
        'Max. soustružený průměr': '200 mm',
        'Průchod vřetenem': '42 mm',
        'Max. soustružená délka': '117 mm',
        'Rozjezd osy X': '215 mm',
        'Rozjezd osy Z': '127 mm',
        'Max. otáčky vřetene': '3 500 ot/min',
        'Kapacita nástrojů': '8 revolver + lišta'
      }
    },
    {
      id: 'plg-42y-automat',
      title: 'Soustružnický automat PLG 42Y',
      category: 'cnc-soustruzeni',
      category_name: 'CNC Soustružení',
      badge: '3 osy X/Z/Y',
      image: 'assets/plg42y.JPG',
      desc: 'CNC automat pro práci z tyče s kompaktním 3-osým suportem umožňující soustružení, vrtání, závitování a boční i čelní frézování.',
      specs: {
        'Max. soustružený průměr': '120 mm',
        'Max. soustružená délka': '200 mm',
        'Průchod vřetenem': '42 mm',
        'Otáčky vřetena': '6 000 ot/min',
        'Řízené osy': 'X, Z a Y',
        'Speciální funkce': 'Mimoosé vrtání a frézování'
      }
    },
    {
      id: 'smtcl-vmc850b',
      title: 'Obráběcí centrum SMTCL VMC850B',
      category: 'cnc-frezovani',
      category_name: 'CNC Frézování',
      badge: '12 000 ot/min',
      image: 'assets/VMC850B-300X200.jpg',
      desc: 'Vysoce tuhé vertikální 3-osé obráběcí centrum se zásobníkem na 24 nástrojů pro tvarově komplexní frézování z kovů i plastů.',
      specs: {
        'Rozměry stolu': '1 000 mm × 500 mm',
        'Max. zatížení stolu': '600 kg',
        'Pojezd v ose X': '850 mm',
        'Pojezd v ose Y': '560 mm',
        'Pojezd v ose Z': '650 mm',
        'Max. otáčky vřetene': '12 000 ot/min',
        'Zásobník nástrojů': '24 pozic'
      }
    },
    {
      id: 'pila-pegas-240x280',
      title: 'Pásová pila Pegas 240x280 A-CNC-R',
      category: 'deleni-materialu',
      category_name: 'Dělení materiálu',
      badge: 'Automatické podávání',
      image: 'assets/pila_pegas.jpg',
      desc: 'Automatická hydraulická pásová pila s vícenásobným podáváním pro sériové dělení tyčí a profilů s úhlovými řezy do 60°.',
      specs: {
        'Řezná oblast kruh 0°': '240 mm',
        'Řezná oblast obdélník 0°': '280 × 220 mm',
        'Řezná oblast kruh 45°': '190 mm',
        'Řezná oblast obdélník 45°': '190 × 170 mm',
        'Řezná oblast kruh 60°': '120 mm',
        'Úhlové řezy': 'Plynule 0° až +60°'
      }
    },
    {
      id: 'pila-opti-s181',
      title: 'Pásová pila na kov Opti S 181',
      category: 'deleni-materialu',
      category_name: 'Dělení materiálu',
      badge: 'Přesné dělení',
      image: 'assets/pila_opti_s181.jpg',
      desc: 'Průmyslová pásová pila pro přesné kolmé i úhlové dělení hutních polotovarů, trubek a plných profilů.',
      specs: {
        'Řezná oblast kruh 0°': '180 mm',
        'Řezná oblast obdélník 0°': '180 × 240 mm',
        'Určení': 'Ocel, barevné kovy, plné profily',
        'Použití': 'Dělení tyčovin před CNC obráběním'
      }
    },
    {
      id: 'klasicke-stroje-r5',
      title: 'Revolverový soustruh R5 a konvenční park',
      category: 'konvencni-vyroba',
      category_name: 'Konvenční obrábění',
      badge: 'Klasické stroje',
      image: 'assets/HLAVNI-CINNOSTI-STRANKA.jpg',
      desc: 'Klasický strojní park zahrnující soustruhy R5 a SV18, horizontální i vertikální frézky FA2H/FA2V a vrtačky SV20/3.',
      specs: {
        'Průchod vřetenem R5': '50 mm',
        'Rozsah otáček': '28 – 1 400 ot/min',
        'Kužel ve vřetenu': 'Morse 6',
        'Pojezdy saní': '680 mm podélný / 250 mm příčný',
        'Doplňkový park': 'Soustruh SV18, FA2H, FA2V, SV20/3'
      }
    },
    {
      id: 'dily-soustruzene-serie',
      title: 'Soustružené přesné kovové dílce',
      category: 'vyrobky',
      category_name: 'Výrobní sortiment',
      badge: 'Zakázková výroba',
      image: 'assets/S1.jpg',
      desc: 'Přesné rotační součásti vyráběné z oceli, nerezi, mosazi, bronzu, duralu i technických plastů pro strojírenství a automotive.',
      specs: {
        'Rozsah průměrů': '5 mm až 284 mm',
        'Přesnost obrábění': '± 0,005 mm',
        'Zpracovávané materiály': 'Ocel, nerez, barevné kovy, plasty',
        'Výrobní dávky': 'Malosériová i velkosériová výroba',
        'Povrchová úprava': 'Zajištění kalení, zinkování, eloxu'
      }
    },
    {
      id: 'dily-kombinovane-tvarove',
      title: 'Soustružené a frézované komponenty',
      category: 'vyrobky',
      category_name: 'Výrobní sortiment',
      badge: 'Komplexní tvary',
      image: 'assets/SF1.jpg',
      desc: 'Složité konstrukční dílce obrobené kombinovanou technologií na jedno upnutí pro maximální souosost a eliminaci chyb.',
      specs: {
        'Technologie': 'Soustružení + frézování (osa Y)',
        'Závity a drážky': 'Metrické, jemné i trapézové závity',
        'Kontrola kvality': '100% mezioperační a výstupní kontrola',
        'Termín nabídky': 'Zpracování poptávky do 3 pracovních dnů',
        'CAD/CAM podpora': 'Zpracování 2D i 3D modelů'
      }
    }
  ];

  const params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    const banner = document.getElementById('proposalBanner');
    if (banner) {
      banner.style.display = 'block';
    }
  }

  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
      });
    });
  }

  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tech-tab-content');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = this.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabContents.forEach(function (c) { c.classList.remove('active'); });
      this.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  const searchInput = document.getElementById('techSearchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.catalog-card');
  const counterEl = document.getElementById('itemCount');

  let currentFilter = 'all';
  let currentSearch = '';

  function filterCatalog() {
    let visibleCount = 0;
    const query = currentSearch.toLowerCase().trim();

    catalogCards.forEach(function (card) {
      const category = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = !query || text.indexOf(query) !== -1;

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      counterEl.textContent = visibleCount;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearch = e.target.value;
      filterCatalog();
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter');
      filterCatalog();
    });
  });

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsTbody = document.getElementById('modalSpecsTbody');
  const modalInquiryBtn = document.getElementById('modalInquiryBtn');
  const formServiceSelect = document.getElementById('formService');

  function openModal(techId) {
    const item = catalogData.find(function (i) { return i.id === techId; });
    if (!item || !modalBackdrop) return;

    if (modalBadge) modalBadge.textContent = item.category_name;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalImg) {
      modalImg.src = item.image;
      modalImg.alt = item.title;
    }

    if (modalSpecsTbody) {
      modalSpecsTbody.innerHTML = '';
      for (const [key, val] of Object.entries(item.specs)) {
        const tr = document.createElement('tr');
        const tdKey = document.createElement('td');
        const tdVal = document.createElement('td');
        tdKey.textContent = key;
        tdVal.textContent = val;
        tr.appendChild(tdKey);
        tr.appendChild(tdVal);
        modalSpecsTbody.appendChild(tr);
      }
    }

    if (modalInquiryBtn) {
      modalInquiryBtn.onclick = function () {
        closeModal();
        if (formServiceSelect) {
          if (item.category === 'cnc-soustruzeni') {
            formServiceSelect.value = 'cnc-soustruzeni';
          } else if (item.category === 'cnc-frezovani') {
            formServiceSelect.value = 'cnc-frezovani';
          } else if (item.category === 'deleni-materialu') {
            formServiceSelect.value = 'deleni-materialu';
          } else {
            formServiceSelect.value = 'kompletni-zakazka';
          }
        }
      };
    }

    modalBackdrop.style.display = 'flex';
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = 'none';
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  catalogCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const techId = this.getAttribute('data-open-tech');
      openModal(techId);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  const statNumbers = document.querySelectorAll('.stat-number');
  if ('IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          statsObserver.unobserve(entry.target);
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-target'), 10);
          if (!isNaN(targetNum)) {
            el.textContent = '0';
            let start = 0;
            const duration = 1200;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = targetNum / steps;
            const timer = setInterval(function () {
              start += increment;
              if (start >= targetNum) {
                el.textContent = targetNum;
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(start);
              }
            }, stepTime);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (s) {
      statsObserver.observe(s);
    });
  }

  const inquiryForm = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = 'Děkujeme za poptávku. Naši technici se vám ozvou s kalkulací do 3 pracovních dnů.';
        formStatus.className = 'form-status success';
      }
      inquiryForm.reset();
    });
  }
});
