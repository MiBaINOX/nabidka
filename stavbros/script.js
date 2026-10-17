document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
          if (isNaN(target)) return;
          el.textContent = '0';
          const duration = 1600;
          const startTime = performance.now();
          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);
            el.textContent = current;
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = target;
            }
          }
          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    counters.forEach(c => counterObserver.observe(c));
  }

  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.querySelector('.main-nav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('active');
      });
    });
  }

  const catalogGrid = document.getElementById('catalogGrid');
  const cards = catalogGrid ? Array.from(catalogGrid.querySelectorAll('.catalog-card')) : [];
  const searchInput = document.getElementById('catalogSearch');
  const searchCounter = document.getElementById('searchCounter');
  const tabBtns = document.querySelectorAll('.tab-btn');

  let activeCategory = 'all';
  let activeSearchQuery = '';

  function filterCards() {
    let visibleCount = 0;
    const q = activeSearchQuery.toLowerCase().trim();

    cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      const cardText = card.textContent.toLowerCase();
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = (!q || cardText.includes(q));

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

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      activeSearchQuery = e.target.value;
      filterCards();
    });
  }

  let projectsData = [];
  fetch('assets/tech_catalog.json')
    .then(res => res.json())
    .then(data => {
      projectsData = Array.isArray(data) ? data : (data.projekty || []);
    })
    .catch(() => {});

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const tmCategory = document.getElementById('tmCategory');
  const tmTitle = document.getElementById('tmTitle');
  const tmLocation = document.getElementById('tmLocation');
  const tmDescription = document.getElementById('tmDescription');
  const tmGallery = document.getElementById('tmGallery');
  const tmSpecsBody = document.getElementById('tmSpecsBody');

  window.openTechModal = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    if (tmCategory) tmCategory.textContent = project.category || 'Pozemní stavitelství';
    if (tmTitle) tmTitle.textContent = project.title || 'Referenční stavba';
    if (tmLocation) tmLocation.textContent = project.location || 'Haná / Morava';
    if (tmDescription) tmDescription.textContent = project.description || 'Komplexní realizace pozemních a renovačních prací kmenovými kapacitami STAVBROS s.r.o.';

    if (tmGallery) {
      tmGallery.innerHTML = '';
      const photos = project.photos && project.photos.length > 0 ? project.photos.slice(0, 6) : ['logo.png'];
      photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = 'assets/' + photo;
        img.alt = project.title || 'Foto realizace';
        img.className = 'tm-gallery-img';
        img.loading = 'lazy';
        img.width = 240;
        img.height = 160;
        tmGallery.appendChild(img);
      });
    }

    if (tmSpecsBody) {
      tmSpecsBody.innerHTML = '';
      const specs = project.specs || {};
      const rows = [
        ['Lokalita a okres', project.location || 'Okres Prostějov / Olomoucký kraj'],
        ['Kategorie výstavby', project.category || 'Pozemní stavitelství'],
        ['Stavební normy', specs.norma || 'ČSN EN / ČSN 73 0540 (Tepelná ochrana budov)'],
        ['Kmenové kapacity', 'STAVBROS s.r.o. (stavbyvedoucí, mistři, 48 kmenových řemeslníků)'],
        ['Technologické zázemí', 'Vlastní doprava, zemní stroje, lešení a areál v Brodku u Prostějova']
      ];

      if (specs.zateplovaci_system) {
        rows.push(['Fasádní systém', specs.zateplovaci_system]);
      }
      if (specs.charakter_praci) {
        rows.push(['Charakter prací', specs.charakter_praci]);
      }
      if (specs.bezbarierovost) {
        rows.push(['Bezbariérovost', specs.bezbarierovost]);
      }
      if (specs.typ_vyuziti) {
        rows.push(['Účel využití', specs.typ_vyuziti]);
      }

      rows.forEach(([label, val]) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = label;
        td2.textContent = val;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tmSpecsBody.appendChild(tr);
      });
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeTechModal = function() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', window.closeTechModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        window.closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      window.closeTechModal();
    }
  });

  if (catalogGrid) {
    catalogGrid.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn-detail');
      if (btn) {
        const refId = btn.getAttribute('data-ref');
        if (refId) {
          window.openTechModal(refId);
        }
      }
    });
  }

  if (window.location.search.includes('ref=nabidka')) {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.style.textShadow = '0 0 20px rgba(234, 88, 12, 0.4)';
    }
  }
});
