document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => el.classList.add('visible', 'active'));
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible', 'active');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => obs.observe(el));
    }

    const statSection = document.getElementById('stats');
    let counted = false;
    if (statSection) {
        const countObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counted) {
                counted = true;
                countObserver.unobserve(statSection);
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                document.querySelectorAll('.stat-counter').forEach(cnt => {
                    const target = parseInt(cnt.getAttribute('data-target'), 10);
                    cnt.textContent = '0';
                    let current = 0;
                    const step = Math.max(1, Math.ceil(target / 40));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            cnt.textContent = target;
                            clearInterval(timer);
                        } else {
                            cnt.textContent = current;
                        }
                    }, 35);
                });
            }
        }, { threshold: 0.3 });
        countObserver.observe(statSection);
    }

    let activeYear = 'all';
    let activeWork = 'all';
    const yearPills = document.querySelectorAll('#filterYearGroup .f-pill');
    const workPills = document.querySelectorAll('#filterWorkGroup .f-pill');
    const galCards = document.querySelectorAll('#galGrid .gal-card');
    const galCounter = document.getElementById('galCounter');

    function filterGallery() {
        let visibleCount = 0;
        galCards.forEach(card => {
            const cardYear = card.getAttribute('data-year');
            const cardWork = card.getAttribute('data-work');

            let yearMatch = (activeYear === 'all');
            if (!yearMatch) {
                if (activeYear === '2022' && (cardYear === '2022' || cardYear === '2023')) yearMatch = true;
                else if (activeYear === '2018' && (cardYear === '2018' || cardYear === '2019')) yearMatch = true;
                else if (cardYear === activeYear) yearMatch = true;
            }

            let workMatch = (activeWork === 'all');
            if (!workMatch) {
                if (cardWork === activeWork) workMatch = true;
            }

            if (yearMatch && workMatch) {
                card.classList.remove('hidden');
                visibleCount++;
            } else {
                card.classList.add('hidden');
            }
        });

        if (galCounter) {
            galCounter.innerHTML = 'Zobrazeno <strong>' + visibleCount + '</strong> staveb dle vašeho výběru';
        }
    }

    yearPills.forEach(pill => {
        pill.addEventListener('click', () => {
            yearPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeYear = pill.getAttribute('data-year');
            filterGallery();
        });
    });

    workPills.forEach(pill => {
        pill.addEventListener('click', () => {
            workPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeWork = pill.getAttribute('data-work');
            filterGallery();
        });
    });

    filterGallery();

    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');

    let currentZoomCards = [];
    let currentZoomIdx = 0;

    function openLightboxForCard(idx) {
        if (!lightbox || !lbImg || currentZoomCards.length === 0) return;
        currentZoomIdx = idx;
        const card = currentZoomCards[currentZoomIdx];
        const btn = card.querySelector('.btn-gal-zoom');
        if (!btn) return;
        const src = btn.getAttribute('data-img');
        const title = btn.getAttribute('data-title');
        lbImg.src = src;
        lbImg.alt = title;
        lightbox.classList.add('active', 'open');
    }

    document.querySelectorAll('.btn-gal-zoom').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentZoomCards = Array.from(document.querySelectorAll('#galGrid .gal-card:not(.hidden)'));
            const parentCard = btn.closest('.gal-card');
            const idx = currentZoomCards.indexOf(parentCard);
            openLightboxForCard(idx >= 0 ? idx : 0);
        });
    });

    if (lbClose) {
        lbClose.addEventListener('click', () => {
            lightbox.classList.remove('active', 'open');
        });
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active', 'open');
        });
    }
    if (lbPrev) {
        lbPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentZoomCards.length === 0) return;
            currentZoomIdx = (currentZoomIdx - 1 + currentZoomCards.length) % currentZoomCards.length;
            openLightboxForCard(currentZoomIdx);
        });
    }
    if (lbNext) {
        lbNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentZoomCards.length === 0) return;
            currentZoomIdx = (currentZoomIdx + 1) % currentZoomCards.length;
            openLightboxForCard(currentZoomIdx);
        });
    }

    document.querySelectorAll('.btn-select-service').forEach(btn => {
        btn.addEventListener('click', () => {
            const sVal = btn.getAttribute('data-service');
            const selectEl = document.getElementById('formService');
            if (selectEl) {
                let found = false;
                for (let i = 0; i < selectEl.options.length; i++) {
                    if (selectEl.options[i].text.includes(sVal) || selectEl.options[i].value.includes(sVal)) {
                        selectEl.selectedIndex = i;
                        found = true;
                        break;
                    }
                }
                if (!found) selectEl.selectedIndex = 0;
            }
            const contactSec = document.getElementById('kontakt');
            if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const inquiryForm = document.getElementById('inquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('formName').value;
            const phone = document.getElementById('formPhone').value;
            const email = document.getElementById('formEmail').value;
            const service = document.getElementById('formService').value;
            const message = document.getElementById('formMsg').value;

            if (formSuccess) {
                formSuccess.className = 'form-success show';
                formSuccess.textContent = 'Děkujeme za poptávku. Stavbyvedoucí p. Plzák (+420 732 965 974) vás bude kontaktovat pro bezplatnou prohlídku a zaměření.';
            }
            inquiryForm.reset();

            const mailSubject = encodeURIComponent('Poptávka stavebních prací – Štefan Škorvaga s.r.o. (' + service + ')');
            const mailBody = encodeURIComponent('Jméno / Firma: ' + name + '\nTelefon: ' + phone + '\nE-mail: ' + email + '\nSlužba: ' + service + '\nPopis: ' + message);
            window.location.href = 'mailto:info@skorvaga.cz?subject=' + mailSubject + '&body=' + mailBody;
        });
    }

    const skorvagaMapEl = document.getElementById('skorvagaMap');
    if (skorvagaMapEl && typeof L !== 'undefined') {
        const map = L.map('skorvagaMap', { scrollWheelZoom: false }).setView([49.7809483, 18.2702768], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap | <a href="https://mapy.cz/zakladni?q=M%C3%ADsteck%C3%A1%20126/256%2C%20720%2000%20Ostrava%20-%20Hrabov%C3%A1" target="_blank" rel="noopener">Mapy.cz</a>'
        }).addTo(map);

        const redPin = L.divIcon({
            className: 'custom-pin-marker',
            html: '<div style="width:36px; height:48px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.35));"><svg width="36" height="48" viewBox="0 0 36 48" fill="none"><path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z" fill="#E11D48"/><circle cx="18" cy="18" r="7" fill="#FFFFFF"/><circle cx="18" cy="18" r="3.5" fill="#E11D48"/></svg></div>',
            iconSize: [36, 48],
            iconAnchor: [18, 48],
            popupAnchor: [0, -44]
        });
        const marker = L.marker([49.7809483, 18.2702768], { icon: redPin }).addTo(map);
        marker.bindPopup('<div style="font-family:sans-serif; font-size:13px; line-height:1.4;"><strong>Štefan Škorvaga s.r.o.</strong><br>Místecká 126/256, Ostrava - Hrabová<br><a href="https://mapy.cz/zakladni?q=M%C3%ADsteck%C3%A1%20126/256%2C%20720%2000%20Ostrava%20-%20Hrabov%C3%A1" target="_blank" rel="noopener" style="color:#0284C7; font-weight:700; text-decoration:underline; display:inline-block; margin-top:4px;">Navigovat na Mapy.cz ↗</a></div>').openPopup();
    }
});

