document.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-card').forEach(function (el) {
        observer.observe(el);
    });

    var statsTriggered = false;
    var statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
        var statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !statsTriggered) {
                    statsTriggered = true;
                    runCounters();
                    statsObserver.unobserve(statsBar);
                }
            });
        }, { threshold: 0.2 });
        statsObserver.observe(statsBar);
    }

    function runCounters() {
        document.querySelectorAll('.stat-number').forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var current = 0;
            var step = Math.max(1, Math.floor(target / 40));
            var interval = setInterval(function () {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                el.textContent = current.toLocaleString('cs-CZ');
            }, 30);
        });
    }

    var tabButtons = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var targetId = this.getAttribute('data-tab');

            tabButtons.forEach(function (b) {
                b.classList.remove('is-active');
                b.setAttribute('aria-selected', 'false');
            });
            tabPanes.forEach(function (p) {
                p.classList.remove('is-active');
            });

            this.classList.add('is-active');
            this.setAttribute('aria-selected', 'true');
            var activePane = document.getElementById(targetId);
            if (activePane) {
                activePane.classList.add('is-active');
            }
        });
    });

    var catalogData = {};
    fetch('assets/tech_catalog.json')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            data.forEach(function (item) {
                catalogData[item.id] = item;
            });
        })
        .catch(function () {});

    var modal = document.getElementById('techModalBackdrop');
    var closeBtn = document.getElementById('modalCloseBtn');

    function openModal(id) {
        var item = catalogData[id];
        if (!item) return;

        document.getElementById('modalCatTag').textContent = item.category || '';
        document.getElementById('modalBadgeTag').textContent = item.badge || '';
        document.getElementById('modalTitle').textContent = item.title || '';
        document.getElementById('modalDesc').textContent = item.short_desc || '';

        var tbody = document.getElementById('modalSpecsBody');
        tbody.innerHTML = '';
        if (item.specs) {
            item.specs.forEach(function (s) {
                var tr = document.createElement('tr');
                var tdLabel = document.createElement('td');
                tdLabel.textContent = s.label;
                var tdVal = document.createElement('td');
                tdVal.textContent = s.value;
                tr.appendChild(tdLabel);
                tr.appendChild(tdVal);
                tbody.appendChild(tr);
            });
        }

        var list = document.getElementById('modalFeaturesList');
        list.innerHTML = '';
        if (item.features) {
            item.features.forEach(function (f) {
                var li = document.createElement('li');
                li.textContent = f;
                list.appendChild(li);
            });
        }

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }

    document.querySelectorAll('[data-open]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var id = this.getAttribute('data-open');
            openModal(id);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeModal();
        });
    }

    var inquiryBtn = document.getElementById('modalInquiryBtn');
    if (inquiryBtn) {
        inquiryBtn.addEventListener('click', function () {
            closeModal();
        });
    }

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('ref') === 'nabidka') {
        if (!sessionStorage.getItem('ping_sent_da-swiss')) {
            sessionStorage.setItem('ping_sent_da-swiss', 'true');
            if (typeof window.NABIDKA_PING_URL !== 'undefined') {
                var pingUrl = window.NABIDKA_PING_URL + '?slug=da-swiss&t=' + Date.now();
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(pingUrl);
                } else {
                    new Image().src = pingUrl;
                }
            }
        }
    }
});
