(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_metaliko-industry')) {
    sessionStorage.setItem('nabidka_ping_metaliko-industry', '1');
    var rec = {
      slug: 'metaliko-industry',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_metaliko-industry', JSON.stringify(rec));
    } catch (e) {}

    if (window.NABIDKA_PING_URL) {
      var pingUrl = window.NABIDKA_PING_URL + '?slug=metaliko-industry&t=' + encodeURIComponent(rec.time);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(pingUrl);
      } else {
        var im = new Image();
        im.src = pingUrl;
      }
    }
  }

  var yearEl = document.getElementById('yearVal');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var mobileToggle = document.getElementById('mobileToggle');
  var siteNav = document.getElementById('siteNav');
  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener('click', function () {
      siteNav.classList.toggle('is-open');
    });

    var navItems = siteNav.querySelectorAll('.nav-item');
    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  var counters = document.querySelectorAll('.counter-val');
  var countersStarted = false;

  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      var current = 0;
      var step = Math.max(1, Math.floor(target / 40));
      if (target > 1900) {
        current = 1970;
        step = 2;
      }
      var timer = setInterval(function () {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = current;
        }
      }, 30);
    });
  }

  var stripSection = document.querySelector('.counters-strip');
  if (stripSection && 'IntersectionObserver' in window) {
    var stripObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startCounters();
          stripObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    stripObserver.observe(stripSection);
  } else {
    startCounters();
  }

  var techTabs = document.querySelectorAll('.tech-tab');
  var techMethods = document.getElementById('techMethods');
  var techGas = document.getElementById('techGas');
  var techClean = document.getElementById('techClean');
  var techFinish = document.getElementById('techFinish');
  var techNote = document.getElementById('techNote');

  var techData = {
    nerez: {
      methods: 'TIG (141) pulzní oblouk, MIG (131) s jemným podáváním',
      gas: 'Čistý Argon 4.8 / směsi Argon + He s formováním kořene',
      clean: '100% bezuhlíková hala, dedikované nerezové nářadí',
      finish: 'Moření, pasivace, balotinování nerezovými kuličkami',
      note: 'Ideální pro potravinářské provozy, farmaceutické linky, chemické reaktory a ekologická zařízení s vysokými nároky na hygienu a korozní odolnost.'
    },
    hlinik: {
      methods: 'TIG AC/DC se střídavým proudem, MIG Pulse s dvojitým pulzem',
      gas: 'Argon 5.0 (99.999% čistota) pro dokonalé rozbití oxidické vrstvy',
      clean: 'Oddělené pracoviště pro broušení hliníku, bezprašná zóna',
      finish: 'Příprava pro eloxování, jemné kartáčování, lakování práškem',
      note: 'Využíváno u lehkých nosných rámů, kolejových vozidel, elektrotechnických skříní a transportních kontejnerů s důrazem na nízkou hmotnost.'
    },
    special: {
      methods: 'Mikro-TIG s přesnou regulací proudu, orbitální svařování trubek',
      gas: 'Vysoce čistý Argon s příměsí vodíku pro hluboký průvar',
      clean: 'Přísný režim čistých prostor s kontrolou teploty a vlhkosti',
      finish: 'Elektrochemické leštění, pasivační lázně dle norem ASTM',
      note: 'Určeno pro vysoce namáhané díly energetických turbín, jaderné a vakuové technologie a vysokotlaké aparatury.'
    }
  };

  techTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      techTabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');
      var mat = tab.getAttribute('data-mat');
      if (techData[mat] && techMethods) {
        techMethods.textContent = techData[mat].methods;
        techGas.textContent = techData[mat].gas;
        techClean.textContent = techData[mat].clean;
        techFinish.textContent = techData[mat].finish;
        techNote.textContent = techData[mat].note;
      }
    });
  });

  var prodCards = document.querySelectorAll('.prod-card');
  var modalLightbox = document.getElementById('modalLightbox');
  var modalImg = document.getElementById('modalImg');
  var modalCaption = document.getElementById('modalCaption');
  var modalClose = document.getElementById('modalClose');
  var modalBackdrop = document.getElementById('modalBackdrop');

  function openModal(src, text) {
    if (!modalLightbox) return;
    modalImg.src = src;
    modalCaption.textContent = text || '';
    modalLightbox.classList.add('is-open');
    modalLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalLightbox) return;
    modalLightbox.classList.remove('is-open');
    modalLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  prodCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var img = card.querySelector('.prod-img');
      var title = card.querySelector('.prod-title');
      if (img) {
        var src = img.getAttribute('data-full') || img.src;
        var text = title ? title.textContent : '';
        openModal(src, text);
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  var copyBtns = document.querySelectorAll('.btn-copy-ico');
  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var val = btn.getAttribute('data-copy');
      if (navigator.clipboard && val) {
        navigator.clipboard.writeText(val).then(function () {
          var originalText = btn.textContent;
          btn.textContent = 'Zkopírováno!';
          setTimeout(function () {
            btn.textContent = originalText;
          }, 2000);
        });
      }
    });
  });

  var inquiryForm = document.getElementById('inquiryForm');
  var formAlert = document.getElementById('formAlert');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('userName').value;
      var company = document.getElementById('userCompany').value;
      var email = document.getElementById('userEmail').value;
      var phone = document.getElementById('userPhone').value;
      var material = document.getElementById('userMaterial').value;
      var note = document.getElementById('userNote').value;

      var mailSubject = encodeURIComponent('Poptávka svařování: ' + material);
      var mailBody = encodeURIComponent(
        'Kontaktní osoba: ' + name + '\n' +
        'Společnost: ' + company + '\n' +
        'E-mail: ' + email + '\n' +
        'Telefon: ' + phone + '\n' +
        'Materiál / technologie: ' + material + '\n\n' +
        'Specifikace zadání:\n' + note
      );

      window.location.href = 'mailto:janicek@metaliko-industry.cz?subject=' + mailSubject + '&body=' + mailBody;

      if (formAlert) {
        formAlert.textContent = 'Poptávka byla připravena k odeslání. Děkujeme, obratem vás budeme kontaktovat.';
        formAlert.classList.add('is-shown');
      }
      inquiryForm.reset();
    });
  }
})();
