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

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const cap = item.getAttribute('data-caption') || '';
            if (lightbox && lightboxImg && img) {
                lightboxImg.src = img.src;
                if (lightboxCaption) lightboxCaption.textContent = cap;
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
            const stype = document.getElementById('stype').value;
            const desc = document.getElementById('desc').value;

            const mailSubject = encodeURIComponent("Poptávka inženýrské stavby: " + stype);
            const mailBody = encodeURIComponent("Investor: " + name + "\nTelefon: " + phone + "\nEmail: " + email + "\nDruh stavby: " + stype + "\nPopis: " + desc);
            
            if (formStatus) {
                formStatus.className = "form-status success";
                formStatus.textContent = "Děkujeme za poptávku! Jednatel Ing. Vojtěch Přeja se s vámi spojí.";
            }
            contactForm.reset();
            window.location.href = "mailto:saveko@saveko.cz?subject=" + mailSubject + "&body=" + mailBody;
        });
    }

    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            const cap = card.getAttribute('data-caption') || (card.querySelector('h3') ? card.querySelector('h3').textContent : '');
            if (lightbox && lightboxImg && img) {
                lightboxImg.src = img.src;
                if (lightboxCaption) lightboxCaption.textContent = cap;
                lightbox.classList.add('active');
            }
        });
    });

    const savekoMapEl = document.getElementById('savekoMap');
    if (savekoMapEl && typeof L !== 'undefined') {
        const map = L.map('savekoMap', { scrollWheelZoom: false }).setView([49.596015, 18.139718], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap | <a href="https://mapy.cz/zakladni?q=Z%C3%A1humenn%C3%AD%201346%2C%20742%2021%20Kop%C5%99ivnice" target="_blank" rel="noopener">Mapy.cz</a>'
        }).addTo(map);

        const redPin = L.divIcon({
            className: 'custom-pin-marker',
            html: '<div style="width:36px; height:48px; filter:drop-shadow(0 4px 8px rgba(0,0,0,0.35));"><svg width="36" height="48" viewBox="0 0 36 48" fill="none"><path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z" fill="#E11D48"/><circle cx="18" cy="18" r="7" fill="#FFFFFF"/><circle cx="18" cy="18" r="3.5" fill="#E11D48"/></svg></div>',
            iconSize: [36, 48],
            iconAnchor: [18, 48],
            popupAnchor: [0, -44]
        });
        const marker = L.marker([49.596015, 18.139718], { icon: redPin }).addTo(map);
        marker.bindPopup('<div style="font-family:sans-serif; font-size:13px; line-height:1.4;"><strong>V+V SAVEKO s.r.o.</strong><br>Záhumenní 1346, 742 21 Kopřivnice<br><a href="https://mapy.cz/zakladni?q=Z%C3%A1humenn%C3%AD%201346%2C%20742%2021%20Kop%C5%99ivnice" target="_blank" rel="noopener" style="color:#1E3A8A; font-weight:700; text-decoration:underline; display:inline-block; margin-top:4px;">Navigovat na Mapy.cz ↗</a></div>').openPopup();
    }
});