let catalogData = [];

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCounters();
  loadCatalogData();
  initSearchAndFilter();
  initRefTracking();
});

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);

      const target = parseInt(el.getAttribute('data-target') || el.textContent, 10);
      if (isNaN(target)) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = target;
        return;
      }

      el.textContent = '0';
      const duration = 1400;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(easeOut * target);

        el.textContent = currentVal;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }, { threshold: 0.2 });

  counters.forEach(c => observer.observe(c));
}

function loadCatalogData() {
  fetch('assets/tech_catalog.json')
    .then(r => r.json())
    .then(data => {
      catalogData = data;
    })
    .catch(() => {
      catalogData = [];
    });
}

function initSearchAndFilter() {
  const searchInput = document.getElementById('machineSearch');
  const tabBtns = document.querySelectorAll('#catalogTabs .tab-btn');
  const cards = document.querySelectorAll('.cat-card');
  const counterEl = document.getElementById('searchCounter');

  let currentFilter = 'all';
  let searchQuery = '';

  function applyFilter() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cat = card.getAttribute('data-cat') || '';
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const text = card.textContent.toLowerCase();

      const matchesCat = (currentFilter === 'all') || (cat === currentFilter);
      const matchesSearch = !searchQuery || title.includes(searchQuery) || text.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (counterEl) {
      if (visibleCount === 1) {
        counterEl.textContent = '1 položka';
      } else if (visibleCount >= 2 && visibleCount <= 4) {
        counterEl.textContent = visibleCount + ' položky';
      } else {
        counterEl.textContent = visibleCount + ' položek';
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilter();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      applyFilter();
    });
  });
}

function openTechModal(id) {
  const modal = document.getElementById('techModalBackdrop');
  if (!modal) return;

  const item = catalogData.find(x => x.id === id);
  if (!item) {
    modal.classList.add('active');
    return;
  }

  const badgeEl = document.getElementById('modalBadge');
  const titleEl = document.getElementById('modalTitle');
  const perexEl = document.getElementById('modalPerex');
  const specsBody = document.getElementById('modalSpecsBody');
  const scopeList = document.getElementById('modalScopeList');
  const standardsDiv = document.getElementById('modalStandards');

  if (badgeEl) badgeEl.textContent = item.badge;
  if (titleEl) titleEl.textContent = item.title;
  if (perexEl) perexEl.textContent = item.perex;

  if (specsBody) {
    specsBody.innerHTML = '';
    for (const [key, val] of Object.entries(item.specs || {})) {
      const tr = document.createElement('tr');
      const tdKey = document.createElement('td');
      tdKey.textContent = key;
      const tdVal = document.createElement('td');
      tdVal.textContent = val;
      tr.appendChild(tdKey);
      tr.appendChild(tdVal);
      specsBody.appendChild(tr);
    }
  }

  if (scopeList) {
    scopeList.innerHTML = '';
    (item.scope || []).forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      scopeList.appendChild(li);
    });
  }

  if (standardsDiv) {
    standardsDiv.innerHTML = '';
    (item.standards || []).forEach(std => {
      const span = document.createElement('span');
      span.className = 'cert-pill';
      span.textContent = std;
      standardsDiv.appendChild(span);
    });
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTechModal() {
  const modal = document.getElementById('techModalBackdrop');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function handleBackdropClick(event) {
  if (event.target.id === 'techModalBackdrop') {
    closeTechModal();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTechModal();
  }
});

function inquireMachineFromModal() {
  const titleEl = document.getElementById('modalTitle');
  const machineSelect = document.getElementById('formMachine');
  closeTechModal();
  if (machineSelect && titleEl) {
    const title = titleEl.textContent;
    for (let i = 0; i < machineSelect.options.length; i++) {
      if (title.includes(machineSelect.options[i].text.replace(/^[A-Za-z0-9\-]+\s+/, '')) || title.includes(machineSelect.options[i].value)) {
        machineSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');

  if (btn) btn.disabled = true;
  if (status) {
    status.className = 'form-status-msg success';
    status.textContent = 'Děkujeme. Vaše servisní poptávka byla úspěšně zaznamenána. Náš dispečer vás bude obratem kontaktovat.';
  }
  form.reset();
  setTimeout(() => {
    if (btn) btn.disabled = false;
  }, 4000);
}

function initRefTracking() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('ref') === 'nabidka') {
    const bar = document.querySelector('.top-announcement-bar');
    if (bar) {
      bar.style.borderColor = 'rgba(56, 189, 248, 0.4)';
    }
  }
}