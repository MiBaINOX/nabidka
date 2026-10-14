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
    const lightboxImg = document.getElementById('lbImg');
    const lightboxClose = document.getElementById('lbClose');

    document.querySelectorAll('[data-gallery-src]').forEach(item => {
        item.addEventListener('click', () => {
            const src = item.getAttribute('data-gallery-src');
            if (lightbox && lightboxImg && src) {
                lightboxImg.src = src;
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

    const inquiryForm = document.getElementById('inquiryForm');
    const formSuccess = document.getElementById('formSuccess');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('formName').value;
            const phone = document.getElementById('formPhone').value;
            const email = document.getElementById('formEmail').value;
            const service = document.getElementById('formService').value;
            const msg = document.getElementById('formMsg').value;

            if (formSuccess) {
                formSuccess.style.display = 'block';
                formSuccess.textContent = 'Děkujeme za odeslání poptávky. Náš revizní technik vás bude obratem kontaktovat.';
            }
            inquiryForm.reset();
            const mailSubject = encodeURIComponent('Poptávka revize / školení: ' + service);
            const mailBody = encodeURIComponent('Jméno/Firma: ' + name + '\nTelefon: ' + phone + '\nE-mail: ' + email + '\nSlužba: ' + service + '\nZpráva: ' + msg);
            window.location.href = 'mailto:info@revizebagru.cz?subject=' + mailSubject + '&body=' + mailBody;
        });
    }
});
