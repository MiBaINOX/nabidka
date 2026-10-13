
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
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
    }, { threshold: 0.12 });
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

    const filterBtns = document.querySelectorAll('.gal-filter-btn');
    const galleryCards = Array.from(document.querySelectorAll('.gallery-card'));
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-filter');
            galleryCards.forEach(card => {
                if (cat === 'all' || card.getAttribute('data-category') === cat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.btn-select-service').forEach(btn => {
        btn.addEventListener('click', () => {
            const serviceName = btn.getAttribute('data-service');
            const selectEl = document.getElementById('formService');
            if (selectEl) {
                for (let i = 0; i < selectEl.options.length; i++) {
                    if (selectEl.options[i].value === serviceName) {
                        selectEl.selectedIndex = i;
                        break;
                    }
                }
            }
            const contactSection = document.getElementById('kontakt');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbClose = document.getElementById('lbClose');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');
    const galleryItems = Array.from(document.querySelectorAll('[data-gallery-src]'));
    let currentImgIdx = 0;

    function openLb(idx) {
        if (!galleryItems.length || !lightbox) return;
        currentImgIdx = (idx + galleryItems.length) % galleryItems.length;
        const src = galleryItems[currentImgIdx].getAttribute('data-gallery-src');
        lbImg.src = src;
        lightbox.classList.add('open');
    }

    galleryItems.forEach((item, idx) => {
        item.addEventListener('click', () => openLb(idx));
    });

    if (lbClose) lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
    if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); openLb(currentImgIdx - 1); });
    if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); openLb(currentImgIdx + 1); });
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('open');
        });
    }
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') lightbox.classList.remove('open');
        if (e.key === 'ArrowLeft') openLb(currentImgIdx - 1);
        if (e.key === 'ArrowRight') openLb(currentImgIdx + 1);
    });

    const form = document.getElementById('inquiryForm');
    const successBox = document.getElementById('formSuccess');
    if (form && successBox) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const recipient = form.getAttribute('data-recipient') || '';
            const company = form.getAttribute('data-company') || '';
            const name = (document.getElementById('formName')?.value || '').trim();
            const phone = (document.getElementById('formPhone')?.value || '').trim();
            const email = (document.getElementById('formEmail')?.value || '').trim();
            const service = (document.getElementById('formService')?.value || '').trim();
            const msg = (document.getElementById('formMsg')?.value || '').trim();

            const subject = encodeURIComponent(`Poptávka z webu (${service}) – ${name}`);
            const body = encodeURIComponent(
                `Dobrý den,\n\nzasílám poptávku z webu (${company}):\n\n• Jméno / Firma: ${name}\n• Telefon: ${phone}\n• E-mail: ${email}\n• Vybraná stavební oblast: ${service}\n\nZpráva / Popis:\n${msg}\n`
            );
            const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

            if (window.location.protocol.startsWith('http')) {
                try {
                    const formData = new FormData(form);
                    const resp = await fetch('odeslat-poptavku.php', {
                        method: 'POST',
                        body: formData
                    });
                    if (resp.ok) {
                        const resJson = await resp.json();
                        if (resJson && resJson.success) {
                            successBox.innerHTML = `✓ Děkujeme! Vaše poptávka byla úspěšně odeslána na <strong>${recipient}</strong>.`;
                            successBox.style.display = 'block';
                            form.reset();
                            return;
                        }
                    }
                } catch (_) {}
            }

            successBox.innerHTML = `
                <div style="margin-bottom:8px;">✓ <strong>Poptávka na ${service} je připravena k odeslání</strong>.</div>
                <a href="${mailtoUrl}" style="display:inline-block; background:#166534; color:#FFF; padding:8px 14px; border-radius:6px; font-weight:700; font-size:0.85rem; text-decoration:none;">
                    ✉️ Odeslat přes e-mail na ${recipient} →
                </a>
            `;
            successBox.style.display = 'block';
            window.location.href = mailtoUrl;
            form.reset();
        });
    }
});