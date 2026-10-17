(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_ferrum-company')) {
    sessionStorage.setItem('nabidka_ping_ferrum-company', '1');
    var payload = {
      slug: 'ferrum-company',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_ferrum-company', JSON.stringify(payload));
    } catch (e) {}
    if (window.NABIDKA_PING_URL) {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
      } else {
        new Image().src = window.NABIDKA_PING_URL + '?slug=ferrum-company&t=' + Date.now();
      }
    }
  }

  var reveals = document.querySelectorAll('.bento-card, .service-bento-card, .gallery-item, .team-card, .contact-info-panel, .contact-form-panel');
  reveals.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

  var counters = document.querySelectorAll('.bento-num');
  var countersDone = false;

  function runCounters() {
    if (countersDone) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    counters.forEach(function (c) {
      var target = parseInt(c.getAttribute('data-target'), 10);
      c.textContent = '0';
      var current = 0;
      var increment = Math.max(1, Math.ceil(target / 35));
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          c.textContent = target;
          clearInterval(timer);
        } else {
          c.textContent = current;
        }
      }, 30);
    });
    countersDone = true;
  }

  var heroBento = document.querySelector('.hero-bento');
  if (heroBento) {
    var heroObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        runCounters();
        heroObserver.disconnect();
      }
    }, { threshold: 0.2 });
    heroObserver.observe(heroBento);
  }

  var filterPills = document.querySelectorAll('.filter-pill');
  var serviceCards = document.querySelectorAll('.service-bento-card');

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      filterPills.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var cat = this.getAttribute('data-filter');
      serviceCards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  var btnCopyIco = document.getElementById('btnCopyIco');
  if (btnCopyIco) {
    btnCopyIco.addEventListener('click', function () {
      var ico = this.getAttribute('data-ico');
      navigator.clipboard.writeText(ico).then(function () {
        btnCopyIco.textContent = 'Zkopírováno!';
        setTimeout(function () {
          btnCopyIco.textContent = 'Kopírovat IČO';
        }, 2000);
      });
    });
  }
})();
