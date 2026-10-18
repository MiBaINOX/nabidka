document.addEventListener('DOMContentLoaded', function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var counters = document.querySelectorAll('.counter[data-target]');
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          if (isNaN(target)) return;
          el.textContent = '0';
          var startTime = null;
          var duration = 1600;
          function animateCount(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var easeOut = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(easeOut * target);
            el.textContent = current;
            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              el.textContent = target;
            }
          }
          requestAnimationFrame(animateCount);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(function (c) {
      counterObserver.observe(c);
    });
  }

  var mobileNavToggle = document.getElementById('mobileNavToggle');
  var mainNav = document.getElementById('mainNav');
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
    });
    var navLinks = mainNav.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
      });
    });
  }

  var catalogSearch = document.getElementById('catalogSearch');
  var catalogSearchClear = document.getElementById('catalogSearchClear');
  var filterTabs = document.querySelectorAll('#catalogFilterTabs .tab-btn');
  var catalogCards = document.querySelectorAll('.cat-card');
  var searchCounter = document.getElementById('searchCounter');
  var currentCategory = 'all';
  var currentSearchQuery = '';

  function filterCatalog() {
    var visibleCount = 0;
    var query = currentSearchQuery.trim().toLowerCase();

    catalogCards.forEach(function (card) {
      var cardCat = card.getAttribute('data-category');
      var cardText = card.textContent.toLowerCase();

      var matchesCat = (currentCategory === 'all' || cardCat === currentCategory);
      var matchesSearch = (!query || cardText.indexOf(query) !== -1);

      if (matchesCat && matchesSearch) {
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

  filterTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterTabs.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter') || 'all';
      filterCatalog();
    });
  });

  if (catalogSearch) {
    catalogSearch.addEventListener('input', function () {
      currentSearchQuery = catalogSearch.value;
      if (catalogSearchClear) {
        catalogSearchClear.style.display = currentSearchQuery ? 'block' : 'none';
      }
      filterCatalog();
    });
  }

  if (catalogSearchClear) {
    catalogSearchClear.addEventListener('click', function () {
      catalogSearch.value = '';
      currentSearchQuery = '';
      catalogSearchClear.style.display = 'none';
      catalogSearch.focus();
      filterCatalog();
    });
  }

  var jumpPills = document.querySelectorAll('[data-jump-cat]');
  jumpPills.forEach(function (pill) {
    pill.addEventListener('click', function (e) {
      var cat = pill.getAttribute('data-jump-cat');
      if (!cat) return;
      var targetTab = document.querySelector('#catalogFilterTabs [data-filter="' + cat + '"]');
      if (targetTab) {
        filterTabs.forEach(function (b) { b.classList.remove('active'); });
        targetTab.classList.add('active');
        currentCategory = cat;
        if (catalogSearch) {
          catalogSearch.value = '';
          currentSearchQuery = '';
          if (catalogSearchClear) catalogSearchClear.style.display = 'none';
        }
        filterCatalog();
      }
    });
  });

  var modalBackdrop = document.getElementById('techModalBackdrop');
  var modalCloseBtn = document.getElementById('techModalClose');
  var modalSecondaryClose = document.getElementById('modalSecondaryClose');
  var modalTitle = document.getElementById('modalTitle');
  var modalBadge = document.getElementById('modalBadge');
  var modalPerex = document.getElementById('modalPerex');
  var modalImg = document.getElementById('modalImg');
  var modalCategory = document.getElementById('modalCategory');
  var modalTable = document.getElementById('modalTable');
  var modalInquireBtn = document.getElementById('modalInquireBtn');
  var formCategorySelect = document.getElementById('formCategory');

  function openTechModal(card) {
    if (!modalBackdrop || !card) return;
    var rawTitle = card.querySelector('.raw-title');
    var rawBadge = card.querySelector('.raw-badge');
    var rawPerex = card.querySelector('.raw-perex');
    var rawImg = card.querySelector('.raw-img');
    var rawCategory = card.querySelector('.raw-category');
    var rawTable = card.querySelector('.raw-table');

    if (modalTitle && rawTitle) modalTitle.textContent = rawTitle.textContent;
    if (modalBadge && rawBadge) modalBadge.textContent = rawBadge.textContent;
    if (modalPerex && rawPerex) modalPerex.textContent = rawPerex.textContent;
    if (modalImg && rawImg) {
      modalImg.src = rawImg.textContent.trim();
      modalImg.alt = rawTitle ? rawTitle.textContent : '';
    }
    if (modalCategory && rawCategory) modalCategory.textContent = rawCategory.textContent;
    if (modalTable && rawTable) {
      var tbody = modalTable.querySelector('tbody') || modalTable;
      tbody.innerHTML = rawTable.innerHTML;
    }

    var cardCat = card.getAttribute('data-category');
    if (modalInquireBtn) {
      modalInquireBtn.onclick = function () {
        closeTechModal();
        if (formCategorySelect && cardCat) {
          for (var i = 0; i < formCategorySelect.options.length; i++) {
            if (formCategorySelect.options[i].value === cardCat) {
              formCategorySelect.selectedIndex = i;
              break;
            }
          }
        }
      };
    }

    modalBackdrop.style.display = 'flex';
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = 'none';
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.btn-detail-trigger, [data-tech-target], [data-open-tech]');
    if (trigger) {
      e.preventDefault();
      var card = trigger.closest('.cat-card');
      if (card) {
        openTechModal(card);
      }
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTechModal);
  }
  if (modalSecondaryClose) {
    modalSecondaryClose.addEventListener('click', closeTechModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.style.display !== 'none') {
      closeTechModal();
    }
  });

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    var heroBadge = document.querySelector('.hero-badge span:last-child');
    if (heroBadge) {
      heroBadge.textContent = 'PŘIPRAVENÁ NABÍDKA MODERNIZACE WEBU PRO TAURO, A.S.';
    }
  }
});
