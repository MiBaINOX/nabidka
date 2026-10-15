document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    if (!sessionStorage.getItem('nabidka_ping_pekr-metax')) {
      sessionStorage.setItem('nabidka_ping_pekr-metax', '1');
      const rec = {
        slug: 'pekr-metax',
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      try {
        localStorage.setItem('nabidka_open_pekr-metax', JSON.stringify(rec));
      } catch (e) {}
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + '?slug=pekr-metax&t=' + encodeURIComponent(rec.time);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const navHamburger = document.getElementById('navHamburger');
  const storyNav = document.getElementById('storyNav');
  if (navHamburger && storyNav) {
    navHamburger.addEventListener('click', function () {
      storyNav.classList.toggle('active');
    });
    storyNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        storyNav.classList.remove('active');
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

  const statsSec = document.querySelector('.editorial-stats');
  if (statsSec && 'IntersectionObserver' in window) {
    const statsObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersDone) {
          countersDone = true;
          runCounters();
          statsObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    statsObs.observe(statsSec);
  } else {
    runCounters();
  }

  const filterButtons = document.querySelectorAll('.chronicle-filter-btn');
  const chronicleItems = document.querySelectorAll('.chronicle-item');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      chronicleItems.forEach(function (item) {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    try {
      const lat = 49.359866;
      const lng = 16.645031;
      const map = L.map('map', {
        scrollWheelZoom: false,
        attributionControl: false
      }).setView([lat, lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);

      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup('<strong>PEKR METAX s.r.o. – Lakovna Blansko</strong><br>Svitavská 500/7, Blansko');
    } catch (e) {}
  }
});