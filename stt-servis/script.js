document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  if (params.get('ref') === 'nabidka') {
    if (!sessionStorage.getItem('nabidka_ping_stt-servis')) {
      sessionStorage.setItem('nabidka_ping_stt-servis', '1');
      const rec = {
        slug: 'stt-servis',
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      try {
        localStorage.setItem('nabidka_open_stt-servis', JSON.stringify(rec));
      } catch (e) {}
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + '?slug=stt-servis&t=' + encodeURIComponent(rec.time);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('active');
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
    }, { threshold: 0.12 });
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('active');
    });
  }

  const counters = document.querySelectorAll('.counter');
  let countersStarted = false;
  function startCounters() {
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 1600;
      const stepTime = 25;
      const steps = Math.ceil(duration / stepTime);
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  }

  const statsSection = document.getElementById('fakta');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          startCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  } else {
    startCounters();
  }

  const tabs = document.querySelectorAll('.fleet-tab');
  const searchInput = document.getElementById('machineSearch');
  const cards = document.querySelectorAll('.machine-card');

  function filterMachines() {
    const activeTab = document.querySelector('.fleet-tab.active');
    const filterCat = activeTab ? activeTab.getAttribute('data-filter') : 'all';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    cards.forEach(function (card) {
      const cat = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();
      const matchCat = (filterCat === 'all' || cat === filterCat);
      const matchQuery = (!query || text.indexOf(query) !== -1);

      if (matchCat && matchQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      filterMachines();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterMachines);
  }

  const mapEl = document.getElementById('map');
  if (mapEl && typeof L !== 'undefined') {
    try {
      const lat = 49.817336;
      const lng = 17.190591;
      const map = L.map('map', {
        scrollWheelZoom: false,
        attributionControl: false
      }).setView([lat, lng], 14);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);

      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup('<strong>STT SERVIS, a.s.</strong><br>Dvorská 245, Dlouhá Loučka');
    } catch (e) {}
  }
});