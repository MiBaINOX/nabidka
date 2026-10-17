document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_kolmek")) {
      sessionStorage.setItem("ping_sent_kolmek", "1");
      const record = {
        slug: "kolmek",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_kolmek", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=kolmek&t=" + encodeURIComponent(record.time);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          const img = new Image();
          img.src = pingUrl;
        }
      }
    }
  }

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isVisible = mobileMenu.style.display === "flex";
      mobileMenu.style.display = isVisible ? "none" : "flex";
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      });
    });
  }

  const filterTabs = document.querySelectorAll(".tab-btn");
  const catalogItems = document.querySelectorAll(".catalog-item");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");

      catalogItems.forEach(item => {
        if (filter === "all" || item.getAttribute("data-cat") === filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  const areaRange = document.getElementById("areaRange");
  const areaValue = document.getElementById("areaValue");
  const storeTypeSelect = document.getElementById("storeTypeSelect");
  const calcModules = document.getElementById("calcModules");
  const calcLinear = document.getElementById("calcLinear");
  const calcCheckouts = document.getElementById("calcCheckouts");
  const calcShelfArea = document.getElementById("calcShelfArea");
  const btnApplyCalc = document.getElementById("btnApplyCalc");
  const cMsg = document.getElementById("cMsg");

  function updateCalculator() {
    if (!areaRange || !areaValue) return;
    const area = parseInt(areaRange.value, 10);
    areaValue.innerText = area;

    let moduleFactor = 0.15;
    let checkoutBase = 1;

    const sType = storeTypeSelect ? storeTypeSelect.value : "potraviny";
    if (sType === "supermarket") {
      moduleFactor = 0.18;
      checkoutBase = 2;
    } else if (sType === "hobby") {
      moduleFactor = 0.12;
      checkoutBase = 1;
    } else if (sType === "drogerie") {
      moduleFactor = 0.16;
      checkoutBase = 1;
    }

    const modules = Math.max(4, Math.round(area * moduleFactor));
    const linearMeters = Math.round(modules * 1.1);
    const checkouts = area > 400 ? checkoutBase + 2 : (area > 180 ? checkoutBase + 1 : checkoutBase);
    const shelfSqM = Math.round(modules * 4 * 0.55);

    if (calcModules) calcModules.innerText = modules + " sestav";
    if (calcLinear) calcLinear.innerText = "cca " + linearMeters + " běžných metrů regálů";
    if (calcCheckouts) calcCheckouts.innerText = checkouts + (checkouts === 1 ? " box" : (checkouts < 5 ? " boxy" : " boxů"));
    if (calcShelfArea) calcShelfArea.innerText = "cca " + shelfSqM + " m²";
  }

  if (areaRange) {
    areaRange.addEventListener("input", updateCalculator);
  }
  if (storeTypeSelect) {
    storeTypeSelect.addEventListener("change", updateCalculator);
  }
  updateCalculator();

  if (btnApplyCalc && cMsg && areaRange && storeTypeSelect) {
    btnApplyCalc.addEventListener("click", () => {
      const area = areaRange.value;
      const typeText = storeTypeSelect.options[storeTypeSelect.selectedIndex].text;
      const modText = calcModules ? calcModules.innerText : "";
      const boxText = calcCheckouts ? calcCheckouts.innerText : "";
      cMsg.value = "Poptávka vybavení prodejny: " + typeText + ", plocha " + area + " m2. Orientačně navrženo: " + modText + ", " + boxText + ". Prosíme o cenový a dispoziční návrh.";
    });
  }

  let catalogData = [];
  fetch("assets/tech_catalog.json")
    .then(r => r.json())
    .then(data => {
      catalogData = data;
    })
    .catch(() => {});

  const modal = document.getElementById("techModalBackdrop");
  const modalBody = document.getElementById("techModalBody");
  const modalClose = document.getElementById("techModalClose");

  function openTechModal(itemId) {
    if (!modal || !modalBody) return;
    const item = catalogData.find(x => x.id === itemId);
    if (!item) return;

    let tableHtml = "";
    if (item.table && item.table.headers && item.table.rows) {
      let ths = item.table.headers.map(h => "<th>" + h + "</th>").join("");
      let trs = item.table.rows.map(row => "<tr>" + row.map(c => "<td>" + c + "</td>").join("") + "</tr>").join("");
      tableHtml = "<table class='modal-specs-table'><thead><tr>" + ths + "</tr></thead><tbody>" + trs + "</tbody></table>";
    }

    let featsHtml = "";
    if (item.features) {
      featsHtml = item.features.map(f => "<li>" + f + "</li>").join("");
    }

    modalBody.innerHTML = 
      "<div class='modal-header-sec'>" +
        "<span class='modal-badge'>" + item.badge + "</span>" +
        "<h3 class='modal-title'>" + item.title + "</h3>" +
        "<p class='modal-perex'>" + item.perex + "</p>" +
      "</div>" +
      "<h4 class='modal-sec-title'>Technické specifikace a rozměry</h4>" +
      tableHtml +
      "<h4 class='modal-sec-title'>Konstrukční přednosti a možnosti</h4>" +
      "<ul class='modal-feats-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalAction()'>Poptat toto řešení</a>" +
      "</div>";

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  }

  window.closeModalAction = function() {
    if (modal) {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    }
  };

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.querySelectorAll("[data-open-tech]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-tech");
      openTechModal(id);
    });
  });

  const form = document.getElementById("inquiryForm");
  const formSuccess = document.getElementById("formSuccess");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.style.display = "block";
      form.reset();
    });
  }

  const counters = document.querySelectorAll(".spec-val[data-target]");
  if (counters.length > 0) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          el.innerText = '0';
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.innerText = current;
          }, 35);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }
});
