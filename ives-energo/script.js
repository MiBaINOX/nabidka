document.addEventListener('DOMContentLoaded', function() {
  var mobileBtn = document.getElementById('mobileMenuBtn');
  var mainNav = document.getElementById('mainNav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', function() {
      mainNav.classList.toggle('open');
    });
    var navLinks = mainNav.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        mainNav.classList.remove('open');
      });
    }
  }

  var revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function(el) {
      el.classList.add('revealed');
    });
  }

  var statsAnimated = false;
  var statCards = document.querySelectorAll('.stat-num');
  function animateStats() {
    if (statsAnimated) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    statCards.forEach(function(stat) {
      var target = parseInt(stat.getAttribute('data-target'), 10) || 0;
      stat.textContent = '0';
      var current = 0;
      var step = Math.max(1, Math.floor(target / 30));
      var timer = setInterval(function() {
        current += step;
        if (current >= target) {
          stat.textContent = target;
          clearInterval(timer);
        } else {
          stat.textContent = current;
        }
      }, 40);
    });
    statsAnimated = true;
  }

  var heroStats = document.querySelector('.hero-stats');
  if (heroStats && 'IntersectionObserver' in window) {
    var statObs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        animateStats();
        statObs.unobserve(heroStats);
      }
    }, { threshold: 0.2 });
    statObs.observe(heroStats);
  } else {
    animateStats();
  }

  var catalogData = {};
  var modalBackdrop = document.getElementById('techModalBackdrop');
  var modalCloseBtn = document.getElementById('techModalClose');
  var modalSecondaryClose = document.getElementById('modalCloseBtn');
  var modalCategory = document.getElementById('modalCategory');
  var modalTitle = document.getElementById('modalTitle');
  var modalPerex = document.getElementById('modalPerex');
  var modalPartner = document.getElementById('modalPartner');
  var modalRealizace = document.getElementById('modalRealizace');
  var modalSpecsBody = document.getElementById('modalSpecsBody');
  var modalInquireBtn = document.getElementById('modalInquireBtn');

  fetch('assets/tech_catalog.json')
    .then(function(resp) { return resp.json(); })
    .then(function(data) {
      data.forEach(function(item) {
        catalogData[item.id] = item;
      });
    })
    .catch(function(err) {});

  function openTechModal(techId) {
    var item = catalogData[techId];
    if (!item) return;

    modalCategory.textContent = item.category_name;
    modalTitle.textContent = item.title;
    modalPerex.textContent = item.perex;
    modalPartner.textContent = item.partner;
    modalRealizace.textContent = item.realizace;

    modalSpecsBody.innerHTML = '';
    var specs = item.tech_specs || {};
    for (var key in specs) {
      if (specs.hasOwnProperty(key)) {
        var tr = document.createElement('tr');
        var tdKey = document.createElement('td');
        tdKey.textContent = key;
        var tdVal = document.createElement('td');
        tdVal.textContent = specs[key];
        tr.appendChild(tdKey);
        tr.appendChild(tdVal);
        modalSpecsBody.appendChild(tr);
      }
    }

    if (modalInquireBtn) {
      modalInquireBtn.setAttribute('href', '#kontakt');
    }

    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTechModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTechModal);
  if (modalSecondaryClose) modalSecondaryClose.addEventListener('click', closeTechModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function(e) {
      if (e.target === modalBackdrop) {
        closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeTechModal();
    }
  });

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.tech-detail-btn');
    if (btn) {
      var tid = btn.getAttribute('data-tech-id');
      if (tid) {
        openTechModal(tid);
      }
    }
  });

  var filterBtns = document.querySelectorAll('.filter-btn');
  var catalogCards = document.querySelectorAll('.catalog-item');
  var searchInput = document.getElementById('searchCatalog');
  var searchCounter = document.getElementById('searchCounter');

  var currentFilter = 'all';
  var currentSearch = '';

  function updateCatalog() {
    var visibleCount = 0;
    catalogCards.forEach(function(card) {
      var cat = card.getAttribute('data-category');
      var text = card.textContent.toLowerCase();
      var matchesCat = (currentFilter === 'all' || cat === currentFilter);
      var matchesSearch = (currentSearch === '' || text.indexOf(currentSearch) !== -1);

      if (matchesCat && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchCounter) {
      searchCounter.textContent = 'Zobrazeno ' + visibleCount + ' technologických položek';
    }
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      updateCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearch = searchInput.value.toLowerCase().trim();
      updateCatalog();
    });
  }

  var contactForm = document.getElementById('contactForm');
  var formFeedback = document.getElementById('formFeedback');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var submitBtn = document.getElementById('formSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Odesílám poptávku...';
      }
      setTimeout(function() {
        if (formFeedback) {
          formFeedback.textContent = 'Děkujeme. Vaše poptávka byla úspěšně předána vedení IVES ENERGO s.r.o. Brzy se s vámi spojíme.';
          formFeedback.className = 'form-feedback success';
          formFeedback.style.display = 'block';
        }
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Poptávka byla odeslána';
        }
      }, 700);
    });
  }

  var urlParams = new URLSearchParams(window.location.search);
  var ref = urlParams.get('ref');
  if (ref && window.PingConfig && typeof window.PingConfig.send === 'function') {
    window.PingConfig.send({
      slug: 'ives-energo',
      ref: ref,
      timestamp: new Date().toISOString()
    });
  }
});
