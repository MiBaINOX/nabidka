(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    var stored = localStorage.getItem('nabidka_open_betonika');
    if (!stored) {
      localStorage.setItem('nabidka_open_betonika', JSON.stringify({
        slug: 'betonika',
        time: new Date().toISOString(),
        ua: navigator.userAgent
      }));
      if (window.NABIDKA_PING_URL) {
        var pingUrl = window.NABIDKA_PING_URL + '?slug=betonika&time=' + encodeURIComponent(new Date().toISOString());
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          var img = new Image();
          img.src = pingUrl;
        }
      }
    }
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

  var catButtons = document.querySelectorAll('.cat-btn');
  var catalogCards = document.querySelectorAll('.catalog-card');
  catButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-cat');
      catalogCards.forEach(function (card) {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  var cfgTabs = document.querySelectorAll('.cfg-tab');
  var blockSachta = document.getElementById('cfgBlockSachta');
  var blockZlab = document.getElementById('cfgBlockZlab');
  var blockVpust = document.getElementById('cfgBlockVpust');
  var summaryTitle = document.getElementById('summaryTitle');
  var summaryParts = document.getElementById('summaryParts');
  var summaryWeight = document.getElementById('summaryWeight');
  var currentMode = 'sachta';

  cfgTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      cfgTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      currentMode = tab.getAttribute('data-mode');

      blockSachta.style.display = currentMode === 'sachta' ? 'block' : 'none';
      blockZlab.style.display = currentMode === 'zlab' ? 'block' : 'none';
      blockVpust.style.display = currentMode === 'vpust' ? 'block' : 'none';

      updateConfigSummary();
    });
  });

  function updateConfigSummary() {
    if (currentMode === 'sachta') {
      var bType = document.getElementById('cfgBottomType').value;
      var depth = parseInt(document.getElementById('cfgDepth').value, 10);
      var cover = document.getElementById('cfgCoverClass').value;

      var bTitle = '1× Monolitické dno SOLID (C 35/45)';
      var bCode = 'TBZ-Q.1 1000/1000 SOLID';
      var baseWeight = 2200;

      if (bType === 'vibro400') {
        bTitle = '1× Vibrolisované šachtové dno do DN 400';
        bCode = 'TBZ-Q.1 1000/1000/400';
        baseWeight = 1950;
      } else if (bType === 'vibro600') {
        bTitle = '1× Vibrolisované šachtové dno do DN 600';
        bCode = 'TBZ-Q.1 1000/1000/600';
        baseWeight = 2100;
      } else if (bType === 'vibro1000') {
        bTitle = '1× Vibrolisované šachtové dno do DN 1000';
        bCode = 'TBZ-Q.1 1000/1250/1000';
        baseWeight = 2650;
      } else if (bType === 'gate') {
        bTitle = '1× Šachtové dno se stavítkem nerez';
        bCode = 'TBZ-Q.1 1000/1000 STAV';
        baseWeight = 2300;
      }

      var numRings = Math.max(0, Math.round((depth - 1600) / 1000));
      var ringsWeight = numRings * 980;
      var totalW = baseWeight + 650 + 120 + 160 + ringsWeight;

      summaryTitle.textContent = 'Sestava kanalizační šachty DN 1000 (hloubka ' + (depth / 1000).toFixed(2) + ' m)';
      summaryParts.innerHTML = 
        '<div class="part-row"><span class="part-name">' + bTitle + '</span><span class="part-code">' + bCode + '</span></div>' +
        (numRings > 0 ? '<div class="part-row"><span class="part-name">' + numRings + '× Kanalizační skruž TBS-Q</span><span class="part-code">TBS-Q.1 1000/1000/120 se stupadlem</span></div>' : '') +
        '<div class="part-row"><span class="part-name">1× Přechodový kónus TBR-Q</span><span class="part-code">TBR-Q.1 1000/600/600 se stupadlem</span></div>' +
        '<div class="part-row"><span class="part-name">2× Vyrovnávací prstenec</span><span class="part-code">TBW-Q 600/100 mm (dorovnání nivelety)</span></div>' +
        '<div class="part-row"><span class="part-name">1× Šachtový poklop třídy ' + cover + '</span><span class="part-code">BEGU litinobetonový s tlumením</span></div>';
      summaryWeight.textContent = 'Orientační hmotnost sestavy: ' + totalW.toLocaleString('cs-CZ') + ' kg • Certifikace dle ČSN EN 1917';
    } else if (currentMode === 'zlab') {
      var zType = document.getElementById('cfgZlabType').value;
      var zLen = parseInt(document.getElementById('cfgZlabLength').value, 10);
      var zOut = parseInt(document.getElementById('cfgZlabOut').value, 10);
      var numPieces = Math.round(zLen / 4);

      var zName = 'Štěrbinový žlab velký s průběžnou štěrbinou';
      var zCode = 'SZ-V-4000/30 (Profil I)';
      var pieceW = 3200;

      if (zType === 'rost') {
        zName = 'Štěrbinový žlab velký s litinovým roštem';
        zCode = 'SZ-V-4000-ROST (třída D400)';
        pieceW = 3400;
      } else if (zType === 'obrubnik') {
        zName = 'Štěrbinový žlab velký s obrubníkem';
        zCode = 'SZ-V-4000-OBR120 (Profil II)';
        pieceW = 3600;
      } else if (zType === 'maly') {
        zName = 'Štěrbinový žlab malý pro pěší plochy';
        zCode = 'SZ-M-2000 (třída B125)';
        pieceW = 850;
      } else if (zType === 'f900') {
        zName = 'Velkokapacitní letištní žlab F900';
        zCode = 'SZ-VK-4000-F900 (90 tun)';
        pieceW = 4200;
      }

      var totalZlabW = (numPieces * pieceW) + (zOut * 1200) + 160;
      summaryTitle.textContent = 'Linie štěrbinového odvodnění ' + zLen + ' m';
      summaryParts.innerHTML =
        '<div class="part-row"><span class="part-name">' + numPieces + '× ' + zName + '</span><span class="part-code">' + zCode + ' (délka modulu 4 m)</span></div>' +
        '<div class="part-row"><span class="part-name">' + zOut + '× Čisticí a výtokový dílec</span><span class="part-code">SZ-V-CIST s kalovým košem a odtokem</span></div>' +
        '<div class="part-row"><span class="part-name">2× Čelní betonová záslepka</span><span class="part-code">SZ-V-ZAS pro uzavření konce linie</span></div>';
      summaryWeight.textContent = 'Orientační hmotnost linie: ' + totalZlabW.toLocaleString('cs-CZ') + ' kg • Certifikace dle ČSN EN 1433';
    } else if (currentMode === 'vpust') {
      var vType = document.getElementById('cfgVpustType').value;
      var vDepth = parseInt(document.getElementById('cfgVpustDepth').value, 10);
      var vGrate = document.getElementById('cfgVpustGrate').value;

      var vDno = '1× Uliční vpust dno s kalníkem UVB';
      var vDnoCode = 'UVB 450/450/DN200';
      var numSkruz = Math.max(0, Math.round((vDepth - 900) / 300));
      var totalVpustW = 350 + (numSkruz * 120) + 95;

      summaryTitle.textContent = 'Sestava uliční vpusti DN 450 (hloubka ' + (vDepth / 1000).toFixed(2) + ' m)';
      summaryParts.innerHTML =
        '<div class="part-row"><span class="part-name">' + vDno + '</span><span class="part-code">' + vDnoCode + '</span></div>' +
        (numSkruz > 0 ? '<div class="part-row"><span class="part-name">' + numSkruz + '× Skruž uliční vpusti středová</span><span class="part-code">UVS 450/295 mm</span></div>' : '') +
        '<div class="part-row"><span class="part-name">1× Horní vyrovnávací skruž s rámem</span><span class="part-code">UVH 450/195 mm</span></div>' +
        '<div class="part-row"><span class="part-name">1× Litinová vtoková mříž a kalový koš</span><span class="part-code">' + vGrate + ' (ČSN EN 124)</span></div>';
      summaryWeight.textContent = 'Orientační hmotnost sestavy: ' + totalVpustW.toLocaleString('cs-CZ') + ' kg • Certifikace dle ČSN EN 124';
    }
  }

  ['cfgBottomType', 'cfgDepth', 'cfgCoverClass', 'cfgZlabType', 'cfgZlabLength', 'cfgZlabOut', 'cfgVpustType', 'cfgVpustDepth', 'cfgVpustGrate'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', updateConfigSummary);
    }
  });

  var btnCopyConfig = document.getElementById('btnCopyConfig');
  if (btnCopyConfig) {
    btnCopyConfig.addEventListener('click', function () {
      var msgField = document.getElementById('frmMessage');
      if (msgField) {
        msgField.value = 'Poptávám specifikaci: ' + summaryTitle.textContent + ' (' + summaryWeight.textContent + ')';
      }
    });
  }

  var counters = document.querySelectorAll('.stat-number');
  var speed = 40;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-target'), 10);
        var count = 0;
        var inc = Math.max(1, Math.ceil(target / speed));
        el.textContent = '0';
        var timer = setInterval(function () {
          count += inc;
          if (count >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = count;
          }
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(function (c) { observer.observe(c); });
})();
