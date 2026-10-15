document.addEventListener('DOMContentLoaded', function() {

  (function initClientPing() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('ref') === 'nabidka') {
      var slug = 'forelv';
      var storageKey = 'nabidka_open_' + slug;
      if (!sessionStorage.getItem(storageKey)) {
        var pingData = {
          slug: slug,
          time: new Date().toISOString(),
          ua: navigator.userAgent
        };
        try {
          localStorage.setItem(storageKey, JSON.stringify(pingData));
          sessionStorage.setItem(storageKey, 'true');
        } catch(e) {}
        if (window.NABIDKA_PING_URL) {
          var payload = JSON.stringify(pingData);
          if (navigator.sendBeacon) {
            navigator.sendBeacon(window.NABIDKA_PING_URL, payload);
          } else {
            var img = new Image();
            img.src = window.NABIDKA_PING_URL + '?data=' + encodeURIComponent(payload);
          }
        }
      }
    }
  })();

  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('.nav-link, .nav-cta').forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }

  var reveals = document.querySelectorAll('.reveal');
  function checkInitialReveals() {
    reveals.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('active');
      }
    });
  }
  checkInitialReveals();

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });
    reveals.forEach(function(el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function(el) {
      el.classList.add('active');
    });
  }

  var counters = document.querySelectorAll('.counter');
  var countersStarted = false;
  function runCounters() {
    if (countersStarted) return;
    countersStarted = true;
    if (window.location.search.indexOf('ref=capture') !== -1) return;
    counters.forEach(function(counter) {
      var target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      var duration = 1600;
      var start = 0;
      var startTime = null;
      function animateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        var progress = Math.min((currentTime - startTime) / duration, 1);
        var current = Math.floor(progress * target);
        counter.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          counter.textContent = target;
        }
      }
      requestAnimationFrame(animateCounter);
    });
    countersStarted = true;
  }

  var heroSection = document.querySelector('.hero-bento');
  if (heroSection && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        runCounters();
        counterObserver.disconnect();
      }
    }, { threshold: 0.2 });
    counterObserver.observe(heroSection);
  } else {
    runCounters();
  }

  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function(item) {
        var cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  var lightbox = document.getElementById('imageLightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxTitle = document.getElementById('lightboxTitle');
  var lightboxSub = document.getElementById('lightboxSub');
  var lightboxClose = document.getElementById('lightboxClose');
  var lightboxBackdrop = document.getElementById('lightboxBackdrop');

  galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var img = item.querySelector('img');
      var title = item.querySelector('.gallery-item-title');
      var sub = item.querySelector('.gallery-item-sub');
      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        if (lightboxTitle) lightboxTitle.textContent = title ? title.textContent : '';
        if (lightboxSub) lightboxSub.textContent = sub ? sub.textContent : '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightboxModal() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightboxModal);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightboxModal);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightboxModal();
    }
  });

  var mapEl = document.getElementById('mapContainer');
  if (mapEl && typeof L !== 'undefined') {
    try {
      var map = L.map('mapContainer', {
        scrollWheelZoom: false
      }).setView([49.4674, 17.1185], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);
      var marker = L.marker([49.4674, 17.1185]).addTo(map);
      marker.bindPopup('<strong>FOR ELV s.r.o.</strong><br>Českobratrská 4279, Prostějov').openPopup();
    } catch(e) {}
  }

  var poptavkaForm = document.getElementById('poptavkaForm');
  if (poptavkaForm) {
    poptavkaForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var tech = document.getElementById('fTechnology').value;
      var typ = document.getElementById('fTypVyrobku').value;
      var rozmer = document.getElementById('fRozmer').value;
      var material = document.getElementById('fMaterial').value;
      var jmeno = document.getElementById('fJmeno').value;
      var telefon = document.getElementById('fTelefon').value;
      var zprava = document.getElementById('fZprava').value;

      var recipient = 'info@forelv.cz';
      var specialist = 'Obchodní oddělení';
      if (tech === 'stozary') {
        specialist = 'Václav Kadlčík (Stožáry)';
      } else {
        specialist = 'Václav Lošťák (Laser & Plechy)';
      }

      var subject = encodeURIComponent('Poptávka výroby: ' + tech.toUpperCase() + ' - ' + jmeno);
      var bodyText = 'Dobrý den,

'
        + 'zasílám poptávku prostřednictvím webového formuláře:
'
        + 'Určeno pro: ' + specialist + '
'
        + 'Technologie: ' + tech + '
'
        + 'Kategorie/typ: ' + typ + '
'
        + 'Požadovaný rozměr/výška: ' + rozmer + '
'
        + 'Materiál a úprava: ' + material + '

'
        + 'Kontaktní osoba: ' + jmeno + '
'
        + 'Telefon: ' + telefon + '

'
        + 'Specifikace zadání:
' + zprava + '

'
        + '(Výkresovou dokumentaci přikládám v příloze e-mailu)
';

      var mailtoUrl = 'mailto:' + recipient + '?subject=' + subject + '&body=' + encodeURIComponent(bodyText);
      window.location.href = mailtoUrl;
    });
  }

});

window.setTechnology = function(techValue) {
  var select = document.getElementById('fTechnology');
  if (select) {
    select.value = techValue;
    window.updateFormTechnology();
  }
};

window.updateFormTechnology = function() {
  var tech = document.getElementById('fTechnology').value;
  var labelTyp = document.getElementById('labelTypVyrobku');
  var selectTyp = document.getElementById('fTypVyrobku');
  var labelRozmer = document.getElementById('labelRozmer');
  var selectRozmer = document.getElementById('fRozmer');

  if (tech === 'stozary') {
    labelTyp.textContent = 'Kategorie stožáru:';
    selectTyp.innerHTML = '<option value="osvetlovaci_do_20m">Osvětlovací stožár do 20 m</option>'
      + '<option value="stadion_20_40m">Fotbalový stadion 20–40 m</option>'
      + '<option value="vyloznil_pevny">Stožár s pevným výložníkem</option>'
      + '<option value="trakcni_sloup">Trakční stožár pro MHD</option>'
      + '<option value="vlajkovy_stozar">Vlajkový stožár reprezentativní</option>';
    labelRozmer.textContent = 'Výška stožáru:';
    selectRozmer.innerHTML = '<option value="do_6m">Výška do 6 m</option>'
      + '<option value="6_az_12m">Výška 6 až 12 m</option>'
      + '<option value="12_az_20m">Výška 12 až 20 m</option>'
      + '<option value="20_az_30m">Výška 20 až 30 m</option>'
      + '<option value="30_az_40m">Výška 30 až 40 m</option>';
  } else if (tech === 'trubky') {
    labelTyp.textContent = 'Druh profilu pro 3D dělení:';
    selectTyp.innerHTML = '<option value="kruhova_trubka">Kruhová trubka do Ø 414 mm</option>'
      + '<option value="jekl">Čtvercový / obdélníkový jekl</option>'
      + '<option value="prunik_nosnik">Průnik příhradového nosníku</option>'
      + '<option value="profil_he_ie">Profil HE / IE / U / T</option>';
    labelRozmer.textContent = 'Tloušťka stěny & průměr:';
    selectRozmer.innerHTML = '<option value="stena_do_5mm">Stěna do 5 mm</option>'
      + '<option value="stena_5_az_10mm">Stěna 5 až 10 mm</option>'
      + '<option value="stena_10_az_15mm">Stěna 10 až 15 mm</option>'
      + '<option value="delka_do_9m">Délka obrobku do 9 m</option>';
  } else if (tech === 'laser') {
    labelTyp.textContent = 'Materiál pro pálení:';
    selectTyp.innerHTML = '<option value="ocel_fe">Ocel Fe do tl. 20 mm</option>'
      + '<option value="nerez_fecr">Nerez Fe-Cr do tl. 12 mm</option>'
      + '<option value="hlinik_al">Hliník Al do tl. 8 mm</option>'
      + '<option value="ocel_14260">Pérová ocel jakosti 14 260</option>'
      + '<option value="rotorove_plechy">Rotorové plechy / ozubení</option>';
    labelRozmer.textContent = 'Rozměr tabule / série:';
    selectRozmer.innerHTML = '<option value="format_1500_3000">Formát 1500 × 3000 mm</option>'
      + '<option value="kusova_vyroba">Kusová výroba / vzorek</option>'
      + '<option value="serie_do_500ks">Série do 500 ks</option>'
      + '<option value="velka_serie">Velká série nad 500 ks</option>';
  } else if (tech === 'plechy') {
    labelTyp.textContent = 'Operace tváření:';
    selectTyp.innerHTML = '<option value="ohranovani_hap">Ohraňování lis CNC HAP 120t</option>'
      + '<option value="strihani_plechu">Stříhání do 3 mm / 2500 mm</option>'
      + '<option value="staceni_trubek">Ohýbání trubek do Ø 60 mm</option>'
      + '<option value="staceni_valcu">Stáčení plechu do 3 mm / 1m</option>'
      + '<option value="svarovani_mig_tig">Svařování MIG / TIG / Cu / Al</option>';
    labelRozmer.textContent = 'Tloušťka a délka ohybu:';
    selectRozmer.innerHTML = '<option value="tloustka_do_3mm">Tloušťka do 3 mm</option>'
      + '<option value="tloustka_3_az_6mm">Tloušťka 3 až 6 mm</option>'
      + '<option value="delka_do_1500mm">Délka ohybu do 1500 mm</option>'
      + '<option value="delka_do_3050mm">Délka ohybu do 3050 mm</option>';
  }
};

window.copyIcoToClipboard = function() {
  var ico = '05228042';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(ico).then(function() {
      showCopiedFeedback();
    });
  } else {
    var tempInput = document.createElement('input');
    tempInput.value = ico;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showCopiedFeedback();
  }
};

function showCopiedFeedback() {
  var textEl = document.getElementById('copyText');
  if (textEl) {
    var orig = textEl.textContent;
    textEl.textContent = 'Zkopírováno!';
    textEl.style.color = '#16a34a';
    setTimeout(function() {
      textEl.textContent = orig;
      textEl.style.color = '';
    }, 2000);
  }
}
