document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'nabidka') {
        const banner = document.getElementById('proposalBanner');
        if (banner) banner.style.display = 'block';
    }

    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });
    }

    const searchInput = document.getElementById('catalogSearch');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterTabs = document.querySelectorAll('.filter-tab-btn');
    const catalogCards = document.querySelectorAll('.catalog-item-card');
    const itemCountEl = document.getElementById('itemCount');
    let currentCategory = 'all';

    function filterCatalog() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        if (clearSearchBtn) {
            clearSearchBtn.style.display = query.length > 0 ? 'block' : 'none';
        }

        catalogCards.forEach(function (card) {
            const cardCat = card.getAttribute('data-category') || '';
            const cardText = card.innerText.toLowerCase();

            const matchesCat = (currentCategory === 'all') || (cardCat === currentCategory);
            const matchesQuery = (query === '') || cardText.includes(query);

            if (matchesCat && matchesQuery) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (itemCountEl) {
            if (visibleCount === 24) {
                itemCountEl.innerText = 'Zobrazeno 24 výrobních programů a strojů';
            } else if (visibleCount === 1) {
                itemCountEl.innerText = 'Nalezen 1 výrobní program';
            } else if (visibleCount >= 2 && visibleCount <= 4) {
                itemCountEl.innerText = 'Nalezeny ' + visibleCount + ' výrobní programy';
            } else {
                itemCountEl.innerText = 'Nalezeno ' + visibleCount + ' výrobních programů z 24';
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterCatalog);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', function () {
            searchInput.value = '';
            filterCatalog();
            searchInput.focus();
        });
    }

    filterTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            filterTabs.forEach(function (t) { t.classList.remove('active'); });
            this.classList.add('active');
            currentCategory = this.getAttribute('data-filter') || 'all';
            filterCatalog();
        });
    });

    let catalogData = [];
    fetch('assets/tech_catalog.json')
        .then(function (res) { return res.json(); })
        .then(function (data) { catalogData = data; })
        .catch(function () { catalogData = []; });

    const modalBackdrop = document.getElementById('techModalBackdrop');
    const modalCloseBtn = document.getElementById('techModalClose');
    const modalCatBadge = document.getElementById('modalCategoryBadge');
    const modalTitle = document.getElementById('modalMachineTitle');
    const modalImg = document.getElementById('modalMachineImg');
    const modalHlBadge = document.getElementById('modalHighlightBadge');
    const modalShortDesc = document.getElementById('modalShortDesc');
    const modalSpecsTableBody = document.getElementById('modalSpecsTableBody');
    const modalInquiryBtn = document.getElementById('modalInquiryBtn');

    function openModal(id) {
        let item = catalogData.find(function (it) { return it.id === id; });
        if (!item) {
            const card = document.querySelector('.catalog-item-card[data-id="' + id + '"]');
            if (card) {
                const title = card.querySelector('.item-title') ? card.querySelector('.item-title').innerText : '';
                const catLbl = card.querySelector('.card-category-lbl') ? card.querySelector('.card-category-lbl').innerText : '';
                const cat = card.getAttribute('data-category') || '';
                const img = card.querySelector('.item-img') ? card.querySelector('.item-img').getAttribute('src') : '';
                const desc = card.querySelector('.item-desc') ? card.querySelector('.item-desc').innerText : '';
                const badge = card.querySelector('.card-tag') ? card.querySelector('.card-tag').innerText : '';
                item = {
                    id: id,
                    title: title,
                    category_name: catLbl,
                    category: cat,
                    image: img,
                    badge: badge,
                    perex: desc,
                    params: {
                        'Výrobní kategorie': catLbl,
                        'Přesnost výroby': 'Dle ČSN ISO 2768, garance až 0,005 mm',
                        'Provozní zázemí': 'Spytihněv, klimatizované CNC centrum'
                    }
                };
            }
        }

        if (item && modalBackdrop) {
            if (modalCatBadge) modalCatBadge.innerText = item.category_name || item.category || 'TECHNOLOGIE';
            if (modalTitle) modalTitle.innerText = item.title || '';
            if (modalImg) {
                modalImg.src = item.image || '';
                modalImg.alt = item.title || '';
            }
            if (modalHlBadge) modalHlBadge.innerText = item.badge || 'OVĚŘENÝ STANDARD';
            if (modalShortDesc) modalShortDesc.innerText = item.perex || '';

            if (modalSpecsTableBody) {
                modalSpecsTableBody.innerHTML = '';
                const params = item.params || {};
                for (const key in params) {
                    if (Object.prototype.hasOwnProperty.call(params, key)) {
                        const tr = document.createElement('tr');
                        const tdName = document.createElement('td');
                        tdName.innerText = key;
                        const tdVal = document.createElement('td');
                        tdVal.innerText = params[key];
                        tr.appendChild(tdName);
                        tr.appendChild(tdVal);
                        modalSpecsTableBody.appendChild(tr);
                    }
                }
            }

            if (modalInquiryBtn) {
                modalInquiryBtn.setAttribute('href', '#kontakt');
            }

            modalBackdrop.classList.add('active');
            modalBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modalBackdrop) {
            modalBackdrop.classList.remove('active');
            modalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    document.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-modal-target]');
        if (btn) {
            e.preventDefault();
            const id = btn.getAttribute('data-modal-target');
            if (id) openModal(id);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
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

    const statNums = document.querySelectorAll('.stat-num[data-target]');
    let statsAnimated = false;

    function animateCounters() {
        if (statsAnimated) return;
        statsAnimated = true;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        statNums.forEach(function (el) {
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            const isYear = target > 1900;
            const duration = 1400;
            const startTime = performance.now();
            el.textContent = '0';

            function step(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);

                el.textContent = current.toString();

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target.toString();
                }
            }
            requestAnimationFrame(step);
        });
    }

    if ('IntersectionObserver' in window) {
        const statObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statObserver.observe(statsSection);
        }

        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-card').forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        animateCounters();
    }
});
