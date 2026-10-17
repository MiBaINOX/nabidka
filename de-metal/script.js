document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('.nav-item').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
        if (isNaN(target)) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          observer.unobserve(el);
          return;
        }

        el.textContent = '0';
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeOut * target);
          el.textContent = currentVal;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      });
    }, { threshold: 0.2 });

    counters.forEach(function (c) {
      counterObserver.observe(c);
    });
  }

  let catalogData = [];
  const catalogGrid = document.getElementById('catalogGrid');
  const catalogSearch = document.getElementById('catalogSearch');
  const searchCounter = document.getElementById('searchCounter');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const filterTriggers = document.querySelectorAll('.filter-trigger');

  fetch('assets/tech_catalog.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      catalogData = data;
    })
    .catch(function () {
      catalogData = [];
    });

  let currentCategory = 'all';
  let currentSearch = '';

  function filterCatalog() {
    const cards = document.querySelectorAll('.catalog-item');
    let visibleCount = 0;

    cards.forEach(function (card) {
      const cat = card.getAttribute('data-cat');
      const text = card.textContent.toLowerCase();
      const matchesCat = (currentCategory === 'all' || cat === currentCategory);
      const matchesSearch = (currentSearch === '' || text.includes(currentSearch));

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      if (currentCategory === 'all' && currentSearch === '') {
        searchCounter.textContent = 'Zobrazeno ' + visibleCount + ' položek sortimentu';
      } else {
        searchCounter.textContent = 'Nalezeno ' + visibleCount + ' položek sortimentu';
      }
    }
  }

  filterTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterTabs.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      filterCatalog();
    });
  });

  filterTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const targetCat = trigger.getAttribute('data-filter');
      currentCategory = targetCat;
      filterTabs.forEach(function (b) {
        if (b.getAttribute('data-filter') === targetCat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      filterCatalog();
    });
  });

  if (catalogSearch) {
    catalogSearch.addEventListener('input', function (e) {
      currentSearch = e.target.value.trim().toLowerCase();
      filterCatalog();
    });
  }

  const modalBackdrop = document.getElementById('techModalBackdrop');
  const modalClose = document.getElementById('techModalClose');
  const modalCloseSecondary = document.getElementById('modalCloseSecondary');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalCat = document.getElementById('modalProductCategory');
  const modalImg = document.getElementById('modalProductImg');
  const modalPerex = document.getElementById('modalProductPerex');
  const modalParamsList = document.getElementById('modalParamsList');
  const modalTableHead = document.getElementById('modalTableHead');
  const modalTableBody = document.getElementById('modalTableBody');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  function openTechModal(itemId) {
    const item = catalogData.find(function (p) { return p.id === itemId; });
    if (!item) return;

    if (modalTitle) modalTitle.textContent = item.nazev;
    if (modalCat) modalCat.textContent = item.kategorie_nazev || (item.kategorie === 'drevo' ? 'Dřevařská výroba' : 'Hutní materiály');
    if (modalImg) {
      modalImg.src = item.obrazek;
      modalImg.alt = item.nazev;
    }
    if (modalPerex) modalPerex.textContent = item.perex;

    if (modalParamsList) {
      modalParamsList.innerHTML = '';
      if (item.parametry) {
        Object.entries(item.parametry).forEach(function (entry) {
          const row = document.createElement('div');
          row.className = 'modal-spec-row';
          const lbl = document.createElement('span');
          lbl.className = 'modal-spec-label';
          lbl.textContent = entry[0] + ':';
          const val = document.createElement('span');
          val.className = 'modal-spec-val';
          val.textContent = entry[1];
          row.appendChild(lbl);
          row.appendChild(val);
          modalParamsList.appendChild(row);
        });
      }
    }

    if (modalTableHead && modalTableBody) {
      modalTableHead.innerHTML = '';
      modalTableBody.innerHTML = '';

      if (item.tabulka && item.tabulka.length > 0) {
        const columns = Object.keys(item.tabulka[0]);
        const trHead = document.createElement('tr');
        columns.forEach(function (col) {
          const th = document.createElement('th');
          th.textContent = col;
          trHead.appendChild(th);
        });
        modalTableHead.appendChild(trHead);

        item.tabulka.forEach(function (row) {
          const tr = document.createElement('tr');
          columns.forEach(function (col) {
            const td = document.createElement('td');
            td.textContent = row[col] || '-';
            tr.appendChild(td);
          });
          modalTableBody.appendChild(tr);
        });
      }
    }

    if (modalInquireBtn) {
      modalInquireBtn.onclick = function () {
        closeModal();
        const matSelect = document.getElementById('formMaterial');
        if (matSelect) {
          for (let i = 0; i < matSelect.options.length; i++) {
            if (item.nazev.toLowerCase().includes(matSelect.options[i].text.toLowerCase().substring(0, 10))) {
              matSelect.selectedIndex = i;
              break;
            }
          }
        }
      };
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('is-open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (catalogGrid) {
    catalogGrid.addEventListener('click', function (e) {
      const card = e.target.closest('.catalog-item');
      if (!card) return;
      const itemId = card.getAttribute('data-id');
      if (itemId) {
        openTechModal(itemId);
      }
    });
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseSecondary) modalCloseSecondary.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });

  const inquiryForm = document.getElementById('inquiryForm');
  const formStatus = document.getElementById('formStatus');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = 'Děkujeme za poptávku. Váš požadavek byl úspěšně zaznamenán a specialista naší divize vás bude kontaktovat.';
        formStatus.className = 'form-status success';
      }
      inquiryForm.reset();
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref');
  const refBanner = document.getElementById('refBanner');

  if (refBanner) {
    if (refParam === 'nabidka') {
      refBanner.style.display = 'block';
    } else {
      refBanner.style.display = 'none';
    }
  }
});
