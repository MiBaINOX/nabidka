document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('active');
      });
    });
  }

  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
          if (!isNaN(target)) {
            el.textContent = '0';
            const duration = 1200;
            const startTime = performance.now();
            function step(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(easeOut * target);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = target;
              }
            }
            requestAnimationFrame(step);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(function (c) {
      counterObserver.observe(c);
    });
  }

  const searchInput = document.getElementById('searchInput');
  const materialFilter = document.getElementById('materialFilter');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const catalogCards = document.querySelectorAll('.catalog-item-card');
  const itemCountEl = document.getElementById('itemCount');
  const noResultsEl = document.getElementById('noResults');
  const resetFilterBtn = document.getElementById('resetFilterBtn');

  let activeCategory = 'all';

  function filterCatalog() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedMat = materialFilter ? materialFilter.value : 'all';
    let visibleCount = 0;

    catalogCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardMaterial = card.getAttribute('data-material') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesCat = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesMat = (selectedMat === 'all' || cardMaterial.includes(selectedMat) || selectedMat.includes(cardMaterial));
      const matchesQuery = (!query || cardText.includes(query));

      if (matchesCat && matchesMat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (itemCountEl) {
      itemCountEl.textContent = visibleCount;
    }

    if (noResultsEl) {
      noResultsEl.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCatalog);
  }

  if (materialFilter) {
    materialFilter.addEventListener('change', filterCatalog);
  }

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-filter') || 'all';
      filterCatalog();
    });
  });

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      if (materialFilter) materialFilter.value = 'all';
      activeCategory = 'all';
      filterTabs.forEach(function (t) {
        if (t.getAttribute('data-filter') === 'all') {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });
      filterCatalog();
    });
  }

  const modal = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalNorm = document.getElementById('modalNorm');
  const modalBrand = document.getElementById('modalBrand');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsTbody = document.getElementById('modalSpecsTbody');
  const modalFeaturesList = document.getElementById('modalFeaturesList');

  const catalogMap = {};
  if (window.POSGIR_CATALOG && Array.isArray(window.POSGIR_CATALOG)) {
    window.POSGIR_CATALOG.forEach(function (item) {
      catalogMap[item.id] = item;
    });
  }

  function openModalById(id) {
    const item = catalogMap[id];
    if (!item || !modal) return;

    if (modalTitle) modalTitle.textContent = item.name;
    if (modalNorm) modalNorm.textContent = item.norm || 'ČSN EN 847-1';
    if (modalBrand) modalBrand.textContent = item.brand || 'DIMAR GROUP';
    if (modalDesc) modalDesc.textContent = item.desc || '';

    if (modalSpecsTbody) {
      modalSpecsTbody.innerHTML = '';
      if (item.specs) {
        Object.keys(item.specs).forEach(function (key) {
          const tr = document.createElement('tr');
          const tdK = document.createElement('td');
          tdK.textContent = key;
          const tdV = document.createElement('td');
          tdV.textContent = item.specs[key];
          tr.appendChild(tdK);
          tr.appendChild(tdV);
          modalSpecsTbody.appendChild(tr);
        });
      }
    }

    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = '';
      if (item.features && Array.isArray(item.features)) {
        item.features.forEach(function (feat) {
          const li = document.createElement('li');
          li.textContent = feat;
          modalFeaturesList.appendChild(li);
        });
      }
    }

    modal.classList.add('active');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  window.openTechModal = openModalById;
  window.closeTechModal = closeModal;

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn-tech-detail');
    if (btn) {
      const id = btn.getAttribute('data-target-id');
      if (id) {
        openModalById(id);
      }
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeModal();
    }
  });

  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = 'Děkujeme za Vaši poptávku, ' + name + '. Zprávu jsme v pořádku přijali a pan Roman Kaňa Vás bude obratem telefonicky kontaktovat s nabídkou.';
      formFeedback.style.display = 'block';
      contactForm.reset();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const topBadge = document.querySelector('.top-badge');
    if (topBadge) {
      topBadge.textContent = 'SPECIÁLNÍ B2B PREZENTACE PRO PARTNERY';
    }
  }
});
