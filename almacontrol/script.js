document.addEventListener('DOMContentLoaded', function () {
  initCounters();
  initMobileNav();
  initCatalog();
  initForm();
  initSmoothScroll();
  initRefTracking();
});

function initCounters() {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
      if (isNaN(target)) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = target;
        observer.unobserve(el);
        return;
      }

      el.textContent = '0';
      var startTime = null;
      var duration = 1400;

      function step(now) {
        if (!startTime) startTime = now;
        var progress = Math.min((now - startTime) / duration, 1);
        var easeOut = 1 - Math.pow(1 - progress, 3);
        var current = Math.floor(easeOut * target);
        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(function (c) {
    observer.observe(c);
  });
}

function initMobileNav() {
  var toggle = document.getElementById('mobileToggle');
  var nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  var links = nav.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
}

var techCatalogData = null;

function initCatalog() {
  var searchInput = document.getElementById('techSearch');
  var filterBtns = document.querySelectorAll('.filter-btn');
  var counterEl = document.getElementById('searchCounter');
  var grid = document.getElementById('techGrid');
  var modalBackdrop = document.getElementById('techModalBackdrop');
  var modalClose = document.getElementById('techModalClose');
  var modalBody = document.getElementById('modalBody');

  fetch('assets/tech_catalog.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      techCatalogData = data;
    })
    .catch(function () {
      techCatalogData = [];
    });

  var activeFilter = 'all';

  function applyFilters() {
    var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    var cards = grid ? grid.querySelectorAll('.cat-card') : [];
    var visibleCount = 0;

    cards.forEach(function (card) {
      var cat = card.getAttribute('data-category');
      var cardText = card.textContent.toLowerCase();
      var matchesCat = (activeFilter === 'all') || (cat === activeFilter);
      var matchesQuery = !query || cardText.indexOf(query) !== -1;

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      var label = 'položek';
      if (visibleCount === 1) {
        label = 'položka';
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        label = 'položky';
      }
      counterEl.textContent = visibleCount + ' ' + label;
    }
  }

  if (filterBtns) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-filter') || 'all';
        applyFilters();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  document.addEventListener('click', function (e) {
    var card = e.target.closest('.cat-card');
    if (card) {
      var techId = card.getAttribute('data-id');
      if (techId) {
        openModal(techId);
      }
    }
  });

  function openModal(id) {
    if (!modalBackdrop || !modalBody) return;
    var item = null;
    if (techCatalogData && Array.isArray(techCatalogData)) {
      item = techCatalogData.find(function (t) { return t.id === id; });
    }

    if (!item) {
      var card = document.querySelector('.cat-card[data-id="' + id + '"]');
      if (card) {
        var title = card.querySelector('.cat-card-title');
        var desc = card.querySelector('.cat-card-desc');
        item = {
          name: title ? title.textContent : 'Validační specifikace',
          category_title: 'Čisté prostory a validace',
          description: desc ? desc.textContent : '',
          norm: 'ČSN EN ISO 14644 / GMP'
        };
      }
    }

    if (!item) return;

    var tableHtml = '';
    if (item.table && item.table.rows && item.table.rows.length) {
      var headers = item.table.headers || ['Parametr', 'Hodnota'];
      var ths = headers.map(function (h) { return '<th>' + h + '</th>'; }).join('');
      var trs = item.table.rows.map(function (r) {
        var tds = r.map(function (col) { return '<td>' + col + '</td>'; }).join('');
        return '<tr>' + tds + '</tr>';
      }).join('');
      tableHtml = '<div class="table-responsive"><table class="modal-table"><thead><tr>' + ths + '</tr></thead><tbody>' + trs + '</tbody></table></div>';
    }

    var normBadge = item.norm ? '<span class="modal-badge">' + item.norm + '</span>' : '';

    modalBody.innerHTML =
      normBadge +
      '<h2 class="modal-title" id="modalTitle">' + item.name + '</h2>' +
      '<p class="modal-desc">' + (item.description || '') + '</p>' +
      (item.method ? '<div class="modal-block"><div class="modal-block-title">Zkušební metodika</div><p class="modal-block-text">' + item.method + '</p></div>' : '') +
      (item.equipment ? '<div class="modal-block"><div class="modal-block-title">Měřicí aparatura a technika</div><p class="modal-block-text">' + item.equipment + '</p></div>' : '') +
      (item.scope ? '<div class="modal-block"><div class="modal-block-title">Rozsah měření a platnost</div><p class="modal-block-text">' + item.scope + '</p></div>' : '') +
      tableHtml +
      '<div class="modal-actions"><a href="#kontakt" class="btn btn-primary" onclick="closeTechModal()">Poptat validační měření</a><button type="button" class="btn btn-secondary" onclick="closeTechModal()">Zavřít okno</button></div>';

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  window.closeTechModal = function () {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      modalBackdrop.classList.remove('active');
      modalBackdrop.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', window.closeTechModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop) {
        window.closeTechModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalBackdrop && (modalBackdrop.classList.contains('open') || modalBackdrop.classList.contains('active'))) {
      window.closeTechModal();
    }
  });
}

function initForm() {
  var form = document.getElementById('inquiryForm');
  var successMsg = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    if (successMsg) {
      successMsg.style.display = 'block';
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initRefTracking() {
  if (window.location.search.indexOf('ref=nabidka') !== -1) {
    var banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;bottom:16px;left:16px;background:#0F172A;color:#FFFFFF;padding:10px 16px;border-radius:8px;font-size:13px;z-index:9999;box-shadow:0 10px 15px -3px rgba(0,0,0,0.3);border:1px solid #0EA5E9;display:flex;align-items:center;gap:10px;';
    banner.innerHTML = '<span>Modernizovaný koncept webu pro <strong>ALMAcontrol s.r.o.</strong></span><button style="background:none;border:none;color:#94A3B8;cursor:pointer;font-size:16px;line-height:1;" onclick="this.parentElement.remove()">&times;</button>';
    document.body.appendChild(banner);
  }
}