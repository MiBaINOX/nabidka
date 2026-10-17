document.addEventListener('DOMContentLoaded', () => {
  let catalogData = [];

  fetch('assets/tech_catalog.json')
    .then(r => r.json())
    .then(data => {
      catalogData = data;
    })
    .catch(() => {});

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  const searchInput = document.getElementById('catalogSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catalogCards = document.querySelectorAll('.cat-card');
  const counterVal = document.getElementById('searchCounter');

  let activeFilter = 'all';
  let searchQuery = '';

  function updateCatalog() {
    let visibleCount = 0;
    catalogCards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const text = (card.textContent || '').toLowerCase();
      const matchesFilter = (activeFilter === 'all') || (category === activeFilter);
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (counterVal) {
      counterVal.textContent = String(visibleCount);
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = (e.target.value || '').trim().toLowerCase();
      updateCatalog();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      updateCatalog();
    });
  });

  const modal = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalCloseSec = document.getElementById('btnModalCloseSecondary');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalLocation = document.getElementById('modalLocation');
  const modalClient = document.getElementById('modalClient');
  const modalStage = document.getElementById('modalStage');
  const modalStandards = document.getElementById('modalStandards');
  const modalImg = document.getElementById('modalImg');
  const modalSpecsBody = document.getElementById('modalSpecsBody');

  function openModal(item) {
    if (!modal) return;
    if (modalCategory) modalCategory.textContent = item.category || 'Projekt';
    if (modalTitle) modalTitle.textContent = item.name || '';
    if (modalDesc) modalDesc.textContent = item.short_desc || '';
    if (modalLocation) modalLocation.textContent = item.location || '-';
    if (modalClient) modalClient.textContent = item.client || '-';
    if (modalStage) modalStage.textContent = item.stage || '-';
    if (modalStandards) modalStandards.textContent = item.standards || '-';
    if (modalImg && item.image) modalImg.src = item.image;

    if (modalSpecsBody && item.specs) {
      modalSpecsBody.innerHTML = '';
      Object.entries(item.specs).forEach(([k, v]) => {
        const tr = document.createElement('tr');
        const tdK = document.createElement('td');
        tdK.textContent = k;
        const tdV = document.createElement('td');
        tdV.textContent = String(v);
        tr.appendChild(tdK);
        tr.appendChild(tdV);
        modalSpecsBody.appendChild(tr);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseSec) modalCloseSec.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  document.querySelectorAll('[data-open-tech]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.getAttribute('data-open-tech') || el.getAttribute('data-id');
      const item = catalogData.find(d => d.id === id);
      if (item) {
        openModal(item);
      } else {
        const card = el.closest('.cat-card') || el;
        const fallbackTitle = card.querySelector('.item-title')?.textContent || 'Projekt';
        const fallbackDesc = card.querySelector('.item-desc')?.textContent || '';
        const fallbackCat = card.querySelector('.item-cat-badge')?.textContent || '';
        const fallbackImg = card.querySelector('.item-img')?.getAttribute('src') || 'assets/renocar_1.jpg';
        openModal({
          name: fallbackTitle,
          category: fallbackCat,
          short_desc: fallbackDesc,
          image: fallbackImg,
          location: 'Česká republika',
          client: 'Objednatel projektu',
          stage: 'Projektová dokumentace (DPS/DD)',
          standards: 'ČSN EN Eurokódy',
          specs: {
            'Statický systém': 'Prostorový nosný skelet',
            'Normový rámec': 'ČSN EN 1990 až ČSN EN 1999',
            'Výpočetní software': 'SCIA Engineer, GEO5'
          }
        });
      }
    });
  });

  const quoteForm = document.getElementById('quoteForm');
  const formStatus = document.getElementById('formStatus');
  if (quoteForm && formStatus) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      formStatus.textContent = 'Děkujeme za poptávku. Váš požadavek byl úspěšně zaevidován. Ozveme se vám do 24 hodin.';
      formStatus.className = 'form-status success';
      quoteForm.reset();
    });
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    let countersStarted = false;
    const statsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          statsObserver.unobserve(entry.target);
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target') || '0', 10);
            num.textContent = '0';
            const duration = 1500;
            const startTime = performance.now();
            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(progress * target);
              num.textContent = String(current);
              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                num.textContent = String(target);
              }
            }
            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.2 });

    const statsSec = document.querySelector('.stats-section');
    if (statsSec) {
      statsObserver.observe(statsSec);
    }
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const heroBadge = document.querySelector('.hero-badge .badge-text');
    if (heroBadge) {
      heroBadge.textContent = 'INTERAKTIVNÍ PREZENTACE PROJEKTŮ &bull; ČSN EN EUROKÓDY';
    }
  }
});
