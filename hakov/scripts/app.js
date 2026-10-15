

let allReferences = [];
let allGallery = [];
let currentLightboxIndex = 0;
let currentSlideIndex = 0;
let heroSlideTimer = null;

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initMobileMenu();
  initHeaderScroll();
  initCopyButtons();
  initContactForm();

  if (window.HAKOV_DATA) {
    allReferences = window.HAKOV_DATA.references || [];
    allGallery = window.HAKOV_DATA.gallery || [];
  } else {
    try {
      const res = await fetch('data.json');
      if (res.ok) {
        const data = await res.json();
        allReferences = data.references || [];
        allGallery = data.gallery || [];
      }
    } catch (e) {
      console.warn('Fallback data loading:', e);
    }
  }

  initHeroSlider();
  initReferences();
  initGallery();
  initBranchTabs();
  initCertModal();
});


function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('hakov-theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('hakov-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}


function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });
}


function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('slidePrev');
  const nextBtn = document.getElementById('slideNext');

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlideIndex = index;
  }

  function nextSlide() {
    let next = (currentSlideIndex + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function startAutoPlay() {
    stopAutoPlay();
    heroSlideTimer = setInterval(nextSlide, 5500);
  }

  function stopAutoPlay() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  const heroElem = document.querySelector('.hero');
  if (heroElem) {
    heroElem.addEventListener('mouseenter', stopAutoPlay);
    heroElem.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}


function initReferences() {
  const gridContainer = document.getElementById('refGridContainer');
  const tableBody = document.getElementById('refTableBody');
  const searchInput = document.getElementById('refSearch');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewTableBtn = document.getElementById('viewTableBtn');
  const refCount = document.getElementById('refCount');

  let activeFilter = 'all';
  let activeQuery = '';
  let viewMode = 'grid';

  function render() {
    const filtered = allReferences.filter(item => {
      const q = activeQuery.toLowerCase().trim();
      const matchQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.completionDate.includes(q);

      let matchTag = true;
      if (activeFilter === 'municipal') {
        matchTag = item.title.toLowerCase().includes('obec') || item.title.toLowerCase().includes('měst') || !item.client.toLowerCase().includes('a.s.');
      } else if (activeFilter === 'industry') {
        matchTag = item.title.toLowerCase().includes('pivovar') || item.title.toLowerCase().includes('masokombinát') || item.title.toLowerCase().includes('koželužna') || item.title.toLowerCase().includes('důlních') || item.client.toLowerCase().includes('prazdroj');
      } else if (activeFilter === 'intensification') {
        matchTag = item.title.toLowerCase().includes('intenzifikace') || item.title.toLowerCase().includes('rekonstrukce') || item.title.toLowerCase().includes('modernizace');
      } else if (activeFilter === 'sludge') {
        matchTag = item.title.toLowerCase().includes('odvodnění') || item.title.toLowerCase().includes('kal');
      }

      return matchQuery && matchTag;
    });

    if (refCount) {
      refCount.textContent = `Zobrazeno ${filtered.length} z ${allReferences.length} referenčních staveb`;
    }

    if (gridContainer) {
      if (filtered.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">Žádné zakázky neodpovídají zadanému filtru.</div>`;
      } else {
        gridContainer.innerHTML = filtered.map(r => `
          <div class="ref-card">
            <div class="ref-card-header">
              <span class="ref-badge-year">${r.completionDate}</span>
              <span class="ref-badge-loc">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${r.location}
              </span>
            </div>
            <h4 class="ref-card-title">${r.title}</h4>
            <div class="ref-card-client">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>${r.client}</span>
            </div>
          </div>
        `).join('');
      }
    }

    if (tableBody) {
      if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem;">Nenalezeny žádné záznamy.</td></tr>`;
      } else {
        tableBody.innerHTML = filtered.map(r => `
          <tr>
            <td><strong>${r.title}</strong></td>
            <td>${r.location}</td>
            <td>${r.client}</td>
            <td><span class="ref-badge-year">${r.completionDate}</span></td>
          </tr>
        `).join('');
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeQuery = e.target.value;
      render();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  if (viewGridBtn && viewTableBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewGridBtn.classList.add('active');
      viewTableBtn.classList.remove('active');
      document.getElementById('refGridContainer').style.display = 'grid';
      document.getElementById('refTableWrapper').style.display = 'none';
    });

    viewTableBtn.addEventListener('click', () => {
      viewTableBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      document.getElementById('refGridContainer').style.display = 'none';
      document.getElementById('refTableWrapper').style.display = 'block';
    });
  }

  render();
}


function initGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (!galleryGrid || !allGallery.length) return;

  galleryGrid.innerHTML = allGallery.map((item, index) => `
    <div class="gallery-item" data-index="${index}">
      <img src="${item.full || item.thumb}" alt="${item.title}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        <div class="gallery-item-title">${item.title}</div>
      </div>
    </div>
  `).join('');

  function openLightbox(index) {
    currentLightboxIndex = index;
    const item = allGallery[index];
    if (!item) return;

    lightboxImg.src = item.full;
    lightboxCaption.textContent = `${item.title} (${index + 1} / ${allGallery.length})`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % allGallery.length;
    openLightbox(currentLightboxIndex);
  }

  function showPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + allGallery.length) % allGallery.length;
    openLightbox(currentLightboxIndex);
  }

  galleryGrid.querySelectorAll('.gallery-item').forEach(el => {
    el.addEventListener('click', () => {
      openLightbox(parseInt(el.dataset.index));
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNext);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}


function initCertModal() {
  const certImg = document.getElementById('certPreviewImg');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (certImg && lightbox) {
    certImg.addEventListener('click', () => {
      lightboxImg.src = 'assets/cert/certifikat.jpg';
      lightboxCaption.textContent = 'Certifikace ISO EN 9001 / ISO EN 14001 / ISO OHSAS 18001 - Hakov, a.s.';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
}


function initBranchTabs() {
  const tabs = document.querySelectorAll('.branch-tab-btn');
  const panels = document.querySelectorAll('.branch-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const target = document.getElementById(`panel-${tab.dataset.branch}`);
      if (target) target.classList.add('active');
    });
  });
}


function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        showToast(`Zkopírováno do schránky: ${text}`);
      } catch (err) {
        showToast('Kopírování se nezdařilo');
      }
    });
  });
}


function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#formName').value;
    const email = form.querySelector('#formEmail').value;
    const msg = form.querySelector('#formMsg').value;

    if (!name || !email || !msg) {
      showToast('Vyplňte prosím všechna povinná pole.');
      return;
    }

    showToast(`Děkujeme, pane/paní ${name}. Vaše poptávka byla úspěšně odeslána.`);
    form.reset();
  });
}


function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}