
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
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    let countersStarted = false;
    const heroStats = document.getElementById('heroStats');
    if (heroStats) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted) {
                    countersStarted = true;
                    runCounters();
                }
            });
        }, { threshold: 0.2 });
        counterObserver.observe(heroStats);
    }

    function runCounters() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        document.querySelectorAll('.stat-num').forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            const isYear = target > 1900 && target < 2050 && suffix === '';
            const duration = 1400;
            const startTime = performance.now();
            function update(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = isYear ? Math.floor(1990 + easeOut * (target - 1990)) : Math.floor(easeOut * target);
                counter.textContent = current + suffix;
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target + suffix;
                }
            }
            counter.textContent = (isYear ? \'1990\' : \'0\') + suffix;
            requestAnimationFrame(update);
        });
    }

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (lightbox && lightboxImg && img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            }
        });
    });

    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const msg = document.getElementById('msg').value;

            const mailSubject = encodeURIComponent("Poptávka služeb z webu: JOMAKOV-STAV s.r.o.");
            const mailBody = encodeURIComponent("Jméno: " + name + "\nTelefon: " + phone + "\nE-mail: " + email + "\nZpráva: " + msg);

            if (formStatus) {
                formStatus.style.display = 'block';
                formStatus.textContent = "Děkujeme za odeslání. Zpráva byla připravena k odeslání na obchod@jomakovstav.cz.";
            }
            contactForm.reset();
            window.location.href = "mailto:obchod@jomakovstav.cz?subject=" + mailSubject + "&body=" + mailBody;
        });
    }

    const mapEl = document.getElementById('mapEmbed');
    if (mapEl && typeof L !== 'undefined') {
        const coords = [49.9018, 18.3758];
        const map = L.map('mapEmbed', { scrollWheelZoom: false }).setView(coords, 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap | <a href="https://mapy.cz/zakladni?q=1.+m%C3%A1je+124%2C+Sk%C5%99e%C4%8Do%C5%88%2C+735+31+Bohum%C3%ADn" target="_blank" rel="noopener">Mapy.cz</a>'
        }).addTo(map);

        const redPin = L.divIcon({
            className: 'custom-pin-marker',
            html: '<div style="width:36px; height:48px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.35));"><svg width="36" height="48" viewBox="0 0 36 48" fill="none"><path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z" fill="#E11D48"/><circle cx="18" cy="18" r="7" fill="#FFFFFF"/><circle cx="18" cy="18" r="3.5" fill="#E11D48"/></svg></div>',
            iconSize: [36, 48],
            iconAnchor: [18, 48],
            popupAnchor: [0, -44]
        });
        const marker = L.marker(coords, { icon: redPin }).addTo(map);
        marker.bindPopup('<div style="font-family:sans-serif; font-size:13px; line-height:1.4;"><strong>JOMAKOV-STAV s.r.o.</strong><br>1. máje 124, Skřečoň, 735 31 Bohumín<br><a href="https://mapy.cz/zakladni?q=1.+m%C3%A1je+124%2C+Sk%C5%99e%C4%8Do%C5%88%2C+735+31+Bohum%C3%ADn" target="_blank" rel="noopener" style="color:#2563EB; font-weight:700; text-decoration:underline; display:inline-block; margin-top:4px;">Navigovat na Mapy.cz ↗</a></div>').openPopup();
    }
});