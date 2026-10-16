(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka' && !sessionStorage.getItem('nabidka_ping_betonika')) {
    sessionStorage.setItem('nabidka_ping_betonika', '1');
    var payload = {
      slug: 'betonika',
      time: new Date().toISOString(),
      ua: navigator.userAgent
    };
    try {
      localStorage.setItem('nabidka_open_betonika', JSON.stringify(payload));
    } catch (e) {}
    if (window.NABIDKA_PING_URL) {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
      } else {
        new Image().src = window.NABIDKA_PING_URL + '?slug=betonika&t=' + Date.now();
      }
    }
  }

  var reveals = document.querySelectorAll('.hero-content, .hero-visual, .stat-box, .configurator-card, .catalog-card, .service-box, .cert-card, .team-card, .contact-info, .contact-form-card');
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

  var counters = document.querySelectorAll('.stat-number');
  var countersDone = false;

  function runCounters() {
    if (countersDone) return;
    counters.forEach(function (c) {
      var target = parseInt(c.getAttribute('data-target'), 10);
      var current = 0;
      var increment = Math.max(1, Math.ceil(target / 40));
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          c.textContent = target;
          clearInterval(timer);
        } else {
          c.textContent = current;
        }
      }, 35);
    });
    countersDone = true;
  }

  var statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    var statsObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        runCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  }

  var catButtons = document.querySelectorAll('.cat-btn');
  var catalogCards = document.querySelectorAll('.catalog-card');

  catButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catButtons.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');
      var filter = this.getAttribute('data-cat');
      catalogCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-cat') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  var cfgDiameter = document.getElementById('cfgDiameter');
  var cfgBottomType = document.getElementById('cfgBottomType');
  var cfgDepth = document.getElementById('cfgDepth');
  var cfgCoverClass = document.getElementById('cfgCoverClass');
  var summaryTitle = document.getElementById('summaryTitle');
  var summaryParts = document.getElementById('summaryParts');
  var btnCopyConfig = document.getElementById('btnCopyConfig');

  function updateConfigurator() {
    if (!cfgDiameter || !cfgBottomType || !cfgDepth || !cfgCoverClass) return;

    var dn = cfgDiameter.value;
    var bType = cfgBottomType.value;
    var depth = parseInt(cfgDepth.value, 10);
    var cover = cfgCoverClass.value;

    var bottomName = '1× Šachtové dno SOLID';
    var bottomCode = 'TBZ-Q.1 ' + dn + '/' + dn + ' SOLID';
    if (bType === 'vibro') {
      bottomName = '1× Vibrolisované dno s těsněním';
      bottomCode = 'TBZ-Q.1 ' + dn + '/1000';
    } else if (bType === 'gate') {
      bottomName = '1× Šachtové dno se stavítkem';
      bottomCode = 'TBZ-Q.1 ' + dn + ' STAVÍTKO';
    }

    var skruzCount = Math.max(0, Math.floor((depth - 1500) / 1000));
    var skruzeHtml = '';
    if (skruzCount > 0) {
      skruzeHtml = '<div class="part-row">' +
        '<span class="part-name">' + skruzCount + '× Šachetní skruž</span>' +
        '<span class="part-code">TBS-Q.1 ' + dn + '/1000/120</span>' +
        '</div>';
    }

    summaryTitle.textContent = 'Sestava šachty DN ' + dn + ' (H = ' + (depth / 1000).toFixed(2) + ' m)';
    summaryParts.innerHTML =
      '<div class="part-row">' +
        '<span class="part-name">' + bottomName + '</span>' +
        '<span class="part-code">' + bottomCode + '</span>' +
      '</div>' +
      skruzeHtml +
      '<div class="part-row">' +
        '<span class="part-name">1× Přechodová skruž (kónus)</span>' +
        '<span class="part-code">TBR-Q.1 ' + dn + '/625/600</span>' +
      '</div>' +
      '<div class="part-row">' +
        '<span class="part-name">2× Vyrovnávací prstenec</span>' +
        '<span class="part-code">TBW-Q 625/100</span>' +
      '</div>' +
      '<div class="part-row">' +
        '<span class="part-name">1× Litinový poklop ' + cover + '</span>' +
        '<span class="part-code">BEGU ' + cover + ' / 600</span>' +
      '</div>';
  }

  [cfgDiameter, cfgBottomType, cfgDepth, cfgCoverClass].forEach(function (el) {
    if (el) el.addEventListener('change', updateConfigurator);
  });
  updateConfigurator();

  if (btnCopyConfig) {
    btnCopyConfig.addEventListener('click', function () {
      var msgField = document.getElementById('frmMessage');
      if (msgField) {
        msgField.value = 'Poptávka konfigurace: ' + summaryTitle.textContent + ' s poklopem ' + cfgCoverClass.value;
      }
    });
  }

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
