(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_formy-znojil')) {
    sessionStorage.setItem('nabidka_ping_formy-znojil', '1');
    var rec = {
      slug: 'formy-znojil',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_formy-znojil', JSON.stringify(rec));
    } catch (e) {}

    if (window.NABIDKA_PING_URL) {
      var pingUrl = window.NABIDKA_PING_URL + '?slug=formy-znojil&t=' + encodeURIComponent(rec.time);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(pingUrl);
      } else {
        var im = new Image();
        im.src = pingUrl;
      }
    }
  }

  var currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('is-open');
    });

    var navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  var counters = document.querySelectorAll('.stat-number');
  var countersStarted = false;

  function runCounters() {
    if (countersStarted) return;
    countersStarted = true;
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      var current = 0;
      var stepTime = Math.max(20, Math.floor(1400 / target));
      var timer = setInterval(function () {
        current += 1;
        counter.textContent = current;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        }
      }, stepTime);
    });
  }

  var statsSection = document.querySelector('.stats-bar-section');
  if (statsSection && 'IntersectionObserver' in window) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  var calcMaterial = document.getElementById('calcMaterial');
  var calcCavities = document.getElementById('calcCavities');
  var calcSurface = document.getElementById('calcSurface');
  var calcVzorovani = document.getElementById('calcVzorovani');

  var resTitle = document.getElementById('resTitle');
  var resSteel = document.getElementById('resSteel');
  var resTech = document.getElementById('resTech');
  var resFinish = document.getElementById('resFinish');
  var resPress = document.getElementById('resPress');

  function updateCalculator() {
    if (!calcMaterial || !resTitle) return;

    var mat = calcMaterial.value;
    var cav = calcCavities.value;
    var surf = calcSurface.value;
    var vzor = calcVzorovani.value;

    if (mat === 'rubber') {
      resTitle.textContent = 'Vulkanizační forma pro technickou pryž (' + cav + ' kavit)';
      resSteel.textContent = '1.2312 / 1.2343 kalená (52-54 HRC)';
      resTech.textContent = 'CNC obrábění + vyhřívané kanály';
    } else if (mat === 'pa') {
      resTitle.textContent = 'Otěruvzdorná vstřikovací forma pro plněné polymery';
      resSteel.textContent = '1.2379 / Böhler M390 (vysoká odolnost)';
      resTech.textContent = 'CNC frézování HSM + elektroeroze';
    } else {
      resTitle.textContent = 'Přesná sériová forma pro termoplasty (' + cav + ' kavit)';
      resSteel.textContent = '1.2343 ESR přetavovaná / 1.2083 korozivzdorná';
      resTech.textContent = '3D CAD/CAM HSM frézování + hloubení';
    }

    if (surf === 'mirror') {
      resFinish.textContent = 'Ultrazvukové zrcadlové leštění (Ra < 0.05)';
    } else if (surf === 'dezen') {
      resFinish.textContent = 'Předleštění pro chemický dezén (Ra 0.4)';
    } else {
      resFinish.textContent = 'Technický lesk pro odformování (Ra 0.8)';
    }

    if (vzor === 'arburg') {
      resPress.textContent = 'ARBURG 470 C 1500-400 (150 t síla)';
    } else if (vzor === 'boy') {
      resPress.textContent = 'Kompaktní lis BOY 55 (55 t síla)';
    } else {
      resPress.textContent = 'Bez vzorování (předání k zákazníkovi)';
    }
  }

  [calcMaterial, calcCavities, calcSurface, calcVzorovani].forEach(function (sel) {
    if (sel) {
      sel.addEventListener('change', updateCalculator);
    }
  });

  updateCalculator();

  var galleryCards = document.querySelectorAll('.gallery-card');
  var lightboxModal = document.getElementById('lightboxModal');
  var lightboxImage = document.getElementById('lightboxImage');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxOverlay = document.getElementById('lightboxOverlay');

  function openLightbox(src, caption) {
    if (!lightboxModal) return;
    lightboxImage.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('is-active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galleryCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var img = card.querySelector('.gallery-img');
      var cap = card.querySelector('.gallery-caption');
      if (img) {
        var fullSrc = img.getAttribute('data-full') || img.src;
        var text = cap ? cap.textContent : '';
        openLightbox(fullSrc, text);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  var copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard && text) {
        navigator.clipboard.writeText(text).then(function () {
          var orig = btn.textContent;
          btn.textContent = 'Zkopírováno!';
          setTimeout(function () {
            btn.textContent = orig;
          }, 2000);
        });
      }
    });
  });

  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('formName').value;
      var company = document.getElementById('formCompany').value;
      var email = document.getElementById('formEmail').value;
      var phone = document.getElementById('formPhone').value;
      var service = document.getElementById('formService').value;
      var msg = document.getElementById('formMsg').value;

      var mailtoSubject = encodeURIComponent('Poptávka z webu: ' + service);
      var mailtoBody = encodeURIComponent(
        'Jméno: ' + name + '\n' +
        'Společnost: ' + company + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefon: ' + phone + '\n' +
        'Služba: ' + service + '\n\n' +
        'Zpráva / Specifikace:\n' + msg
      );

      window.location.href = 'mailto:znojil@formy-znojil.cz?subject=' + mailtoSubject + '&body=' + mailtoBody;

      if (formStatus) {
        formStatus.textContent = 'Poptávka byla připravena k odeslání. Děkujeme, brzy se vám ozveme!';
        formStatus.classList.add('is-success');
      }
      contactForm.reset();
    });
  }
})();
