document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    if (!sessionStorage.getItem('nabidka_ping_forelv')) {
      sessionStorage.setItem('nabidka_ping_forelv', '1');
      const rec = {
        slug: 'forelv',
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      try {
        localStorage.setItem('nabidka_open_forelv', JSON.stringify(rec));
      } catch (e) {}
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + '?slug=forelv&t=' + encodeURIComponent(rec.time);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
      });
    });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('active');
    });
  }

  const counters = document.querySelectorAll('.counter');
  let countersDone = false;
  function runCounters() {
    counters.forEach(function (c) {
      const target = parseInt(c.getAttribute('data-target'), 10) || 0;
      const duration = 1400;
      const step = 25;
      const steps = Math.ceil(duration / step);
      const inc = target / steps;
      let curr = 0;
      const t = setInterval(function () {
        curr += inc;
        if (curr >= target) {
          c.textContent = target;
          clearInterval(t);
        } else {
          c.textContent = Math.floor(curr);
        }
      }, step);
    });
  }

  const heroSec = document.getElementById('hero');
  if (heroSec && 'IntersectionObserver' in window) {
    const heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersDone) {
          countersDone = true;
          runCounters();
          heroObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    heroObs.observe(heroSec);
  } else {
    runCounters();
  }

  const tabButtons = document.querySelectorAll('.bento-tab-btn');
  const panels = document.querySelectorAll('.catalog-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const cat = btn.getAttribute('data-cat');
      const targetPanel = document.getElementById('panel-' + cat);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    try {
      const lat = 49.467484;
      const lng = 17.118944;
      const map = L.map('map', {
        scrollWheelZoom: false,
        attributionControl: false
      }).setView([lat, lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);

      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup('<strong>FOR ELV s.r.o.</strong><br>Českobratrská 4279, Prostějov');
    } catch (e) {}
  }
});