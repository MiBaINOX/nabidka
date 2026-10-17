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
    const filterPills = document.querySelectorAll('.filter-pill');
    const catalogCards = document.querySelectorAll('.catalog-item-card');
    const itemCountEl = document.getElementById('searchCounter') || document.getElementById('itemCount');
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

            let matchesCat = (currentCategory === 'all');
            if (!matchesCat) {
                if (currentCategory === 'Frézování') {
                    matchesCat = (cardCat === 'Frézování' || cardCat === 'Konvenční obrábění' || cardCat === 'Dělení materiálu');
                } else {
                    matchesCat = (cardCat === currentCategory);
                }
            }

            const matchesQuery = query === '' || cardText.includes(query);

            if (matchesCat && matchesQuery) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (itemCountEl) {
            if (visibleCount === 14) {
                itemCountEl.innerText = 'Zobrazeno 14 kapacit a referencí';
            } else if (visibleCount === 1) {
                itemCountEl.innerText = 'Nalezena 1 kapacita';
            } else if (visibleCount >= 2 && visibleCount <= 4) {
                itemCountEl.innerText = 'Nalezeny ' + visibleCount + ' kapacity';
            } else {
                itemCountEl.innerText = 'Nalezeno ' + visibleCount + ' kapacit z 14';
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

    filterPills.forEach(function (pill) {
        pill.addEventListener('click', function () {
            filterPills.forEach(function (p) { p.classList.remove('active'); });
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
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    const modalSpecsTableBody = document.getElementById('modalSpecsTableBody');
    const modalInquiryBtn = document.getElementById('modalInquiryBtn');

    function openModal(id) {
        let item = catalogData.find(function (it) { return it.id === id; });
        if (!item) {
            const card = document.querySelector('.catalog-item-card[data-id="' + id + '"]');
            if (card) {
                const title = card.querySelector('.card-title') ? card.querySelector('.card-title').innerText : '';
                const cat = card.getAttribute('data-category') || '';
                const img = card.querySelector('.item-img') ? card.querySelector('.item-img').getAttribute('src') : '';
                const desc = card.querySelector('.card-desc') ? card.querySelector('.card-desc').innerText : '';
                const badge = card.querySelector('.card-sub-badge') ? card.querySelector('.card-sub-badge').innerText : '';
                item = {
                    id: id,
                    title: title,
                    category: cat,
                    image: img,
                    badge: badge,
                    short_desc: desc,
                    features: ['Ověřená výrobní přesnost dle platných strojírenských norem', 'Kompletní technologická příprava a měření', 'Kusová i malosériová produkce'],
                    specs: [{ label: 'Strojírenská kategorie', value: cat }, { label: 'Výrobní režim', value: 'Zakázkový provoz Topolná' }]
                };
            }
        }

        if (item && modalBackdrop) {
            if (modalCatBadge) modalCatBadge.innerText = item.category || '';
            if (modalTitle) modalTitle.innerText = item.title || '';
            if (modalImg) {
                modalImg.src = item.image || '';
                modalImg.alt = item.title || '';
            }
            if (modalHlBadge) modalHlBadge.innerText = item.badge || item.category || '';
            if (modalShortDesc) modalShortDesc.innerText = item.short_desc || '';

            if (modalFeaturesList) {
                modalFeaturesList.innerHTML = '';
                const features = item.features || [];
                features.forEach(function (feat) {
                    const li = document.createElement('li');
                    li.innerText = feat;
                    modalFeaturesList.appendChild(li);
                });
            }

            if (modalSpecsTableBody) {
                modalSpecsTableBody.innerHTML = '';
                const specs = item.specs || [];
                specs.forEach(function (s) {
                    const tr = document.createElement('tr');
                    const tdLabel = document.createElement('td');
                    tdLabel.innerText = s.label;
                    const tdVal = document.createElement('td');
                    tdVal.innerText = s.value;
                    tr.appendChild(tdLabel);
                    tr.appendChild(tdVal);
                    modalSpecsTableBody.appendChild(tr);
                });
            }

            if (modalInquiryBtn) {
                modalInquiryBtn.setAttribute('href', '#poptavka');
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
        const btn = e.target.closest('[data-open-tech]');
        if (btn) {
            e.preventDefault();
            const techId = btn.getAttribute('data-open-tech') || btn.getAttribute('data-id');
            if (techId) openModal(techId);
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
            const isPercent = el.innerText.includes('%');
            const hasPlus = el.innerText.includes('+');
            let current = 0;
            const duration = 1500;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(function () {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                let formatted = Math.floor(current).toString();
                if (hasPlus) formatted += '+';
                if (isPercent) formatted += '%';
                el.innerText = formatted;
            }, stepTime);
        });
    }

    const revealCards = document.querySelectorAll('.reveal-card');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.querySelector('.stat-num') || entry.target.classList.contains('stat-box')) {
                        animateCounters();
                    }
                }
            });
        }, { threshold: 0.15 });

        revealCards.forEach(function (card) {
            revealObserver.observe(card);
        });

        const statsSection = document.querySelector('.hero-stats-grid');
        if (statsSection) {
            const statObserver = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    animateCounters();
                }
            }, { threshold: 0.2 });
            statObserver.observe(statsSection);
        }
    } else {
        revealCards.forEach(function (card) {
            card.classList.add('revealed');
        });
        animateCounters();
    }
});
