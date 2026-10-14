document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    let countersStarted = false;
    const statSection = document.getElementById('stats');
    if (statSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    runCounters();
                }
            });
        }, { threshold: 0.2 });
        counterObserver.observe(statSection);
    }

    function runCounters() {
        document.querySelectorAll('.stat-counter').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 1600;
            const startTime = performance.now();
            function update(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);
                counter.textContent = current.toLocaleString('cs-CZ');
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString('cs-CZ');
                }
            }
            requestAnimationFrame(update);
        });
    }

    let activeFilter = 'all';
    let activeType = 'all';

    const filterBtns = document.querySelectorAll('.filter-btn');
    const typeBtns = document.querySelectorAll('.filter-type-btn');
    const cards = document.querySelectorAll('.listing-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeType = btn.getAttribute('data-type');
            applyFilters();
        });
    });

    function applyFilters() {
        cards.forEach(card => {
            const cardMode = card.getAttribute('data-mode');
            const cardType = card.getAttribute('data-type');

            const matchMode = (activeFilter === 'all') || (cardMode === activeFilter);
            const matchType = (activeType === 'all') || (cardType === activeType);

            if (matchMode && matchType) {
                card.style.display = 'flex';
                card.classList.add('active');
            } else {
                card.style.display = 'none';
            }
        });
    }

    const propModal = document.getElementById('propModal');
    const propModalClose = document.getElementById('propModalClose');
    const propModalContent = document.getElementById('propModalContent');

    function getDatabase() {
        if (typeof window !== 'undefined' && window.PKR_DATABASE && Array.isArray(window.PKR_DATABASE)) {
            return window.PKR_DATABASE;
        }
        if (typeof PKR_DATABASE !== 'undefined' && Array.isArray(PKR_DATABASE)) {
            return PKR_DATABASE;
        }
        return [];
    }

    function closeModal() {
        if (propModal) {
            propModal.classList.remove('active');
        }
        document.body.style.overflow = '';
    }

    function openPropertyModal(id) {
        const db = getDatabase();
        const prop = db.find(p => String(p.id) === String(id));
        if (!prop) return;

        const ribbonCls = prop.mode === 'prodej' ? 'ribbon-sale' : 'ribbon-rent';
        const ribbonTxt = prop.mode === 'prodej' ? 'PRODEJ' : 'PRONÁJEM';
        const photos = prop.photos && prop.photos.length ? prop.photos : (prop.saved_photos && prop.saved_photos.length ? prop.saved_photos : ['filename_17058.jpg']);
        const mainPhoto = 'images/' + photos[0];

        let thumbsHtml = '';
        photos.forEach((ph, idx) => {
            const activeCls = idx === 0 ? 'active' : '';
            thumbsHtml += `<div class="modal-thumb ${activeCls}" data-img-src="images/${ph}"><img src="images/${ph}" alt="Foto"></div>`;
        });

        let specsHtml = '';
        if (prop.params) {
            for (const [k, v] of Object.entries(prop.params)) {
                specsHtml += `<tr><td>${k}</td><td>${v}</td></tr>`;
            }
        }

        const mapQuery = encodeURIComponent(prop.location);
        const mapUrl = 'https://mapy.cz/zakladni?q=' + mapQuery;

        propModalContent.innerHTML = `
            <div class="modal-header-hero">
                <img src="${mainPhoto}" alt="${prop.title}" class="modal-main-img" id="modalMainImg">
                <span class="badge-ribbon ${ribbonCls}">${ribbonTxt}</span>
            </div>
            <div class="modal-gallery-strip" id="modalThumbStrip">
                ${thumbsHtml}
            </div>
            <div class="modal-body">
                <div class="modal-meta-top">
                    <span class="badge-ribbon ${ribbonCls}" style="position:static;">${ribbonTxt}</span>
                    <span class="listing-id" style="position:static;">číslo nabídky: ${prop.id}</span>
                    <span style="font-weight:700; color:var(--primary); font-size:0.85rem;">${prop.type_label}</span>
                </div>
                <h2 class="modal-title">${prop.title}</h2>
                <div class="modal-loc"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${prop.location}</div>
                
                <div class="modal-grid">
                    <div class="modal-desc-col">
                        <h4>Podrobný popis nemovitosti</h4>
                        <p>${prop.desc.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
                    </div>
                    <div class="modal-specs-col">
                        <h4>Parametry a specifikace nabídky</h4>
                        <table class="modal-specs-table">
                            ${specsHtml}
                        </table>
                        <div style="margin-top:16px;">
                            <a href="${mapUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%; text-decoration:none; display:inline-flex; justify-content:center; align-items:center; gap:6px; font-size:0.85rem;">
                                Zobrazit lokalitu na Mapy.cz ↗
                            </a>
                        </div>
                    </div>
                </div>

                <div class="modal-actions">
                    <a href="#kontakt" class="btn btn-primary modal-inquire-btn" data-inquire-id="${prop.id}">Poptat tuto nemovitost makléři →</a>
                    <button type="button" class="btn btn-secondary modal-close-action">Zavřít kartu nabídky</button>
                </div>
            </div>
        `;

        const mainImgEl = document.getElementById('modalMainImg');
        const thumbEls = document.querySelectorAll('.modal-thumb');
        thumbEls.forEach(th => {
            th.addEventListener('click', () => {
                thumbEls.forEach(t => t.classList.remove('active'));
                th.classList.add('active');
                if (mainImgEl) mainImgEl.src = th.getAttribute('data-img-src');
            });
        });

        document.querySelectorAll('.modal-inquire-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal();
                const msgEl = document.getElementById('msg');
                if (msgEl) {
                    msgEl.value = 'Dobrý den, mám zájem o prohlídku nabídky č. ' + prop.id + ' (' + prop.title + ').';
                    msgEl.focus();
                }
            });
        });

        document.querySelectorAll('.modal-close-action').forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        propModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.listing-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-inquire-quick')) {
                return;
            }
            const propId = card.getAttribute('data-id');
            if (propId) {
                openPropertyModal(propId);
            }
        });
    });

    document.querySelectorAll('.btn-inquire-quick').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const propId = btn.getAttribute('data-inquire-id');
            const propTitle = btn.getAttribute('data-inquire-title');
            const msgEl = document.getElementById('msg');
            if (msgEl) {
                msgEl.value = 'Dobrý den, mám zájem o bližší informace k nabídce č. ' + propId + ' (' + propTitle + ').';
                msgEl.focus();
            }
        });
    });

    if (propModalClose) {
        propModalClose.addEventListener('click', closeModal);
    }
    if (propModal) {
        propModal.addEventListener('click', (e) => {
            if (e.target === propModal) closeModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && propModal && propModal.classList.contains('active')) {
            closeModal();
        }
    });

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const msg = document.getElementById('msg').value;

            if (formStatus) {
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                formStatus.textContent = 'Děkujeme za odeslání zprávy. Makléř vás bude obratem kontaktovat.';
            }
            contactForm.reset();
            const mailSubject = encodeURIComponent('Poptávka nemovitosti / konzultace: ' + interest);
            const mailBody = encodeURIComponent('Jméno: ' + name + '\nTelefon: ' + phone + '\nE-mail: ' + email + '\nPožadavek: ' + interest + '\nZpráva: ' + msg);
            window.location.href = 'mailto:m.danielis@pkr.cz?subject=' + mailSubject + '&body=' + mailBody;
        });
    }
});
