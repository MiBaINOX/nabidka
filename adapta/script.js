document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_adapta")) {
      sessionStorage.setItem("ping_sent_adapta", "1");
      const record = {
        slug: "adapta",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_adapta", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=adapta&t=" + encodeURIComponent(record.time);
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

  const facadeAreaRange = document.getElementById("facadeAreaRange");
  const facadeAreaVal = document.getElementById("facadeAreaVal");
  const buildingTypeSelect = document.getElementById("buildingTypeSelect");
  const insulationTypeSelect = document.getElementById("insulationTypeSelect");
  const calcEnergySavings = document.getElementById("calcEnergySavings");
  const calcSubsidyRate = document.getElementById("calcSubsidyRate");
  const calcThickness = document.getElementById("calcThickness");
  const calcLambdaLabel = document.getElementById("calcLambdaLabel");
  const btnApplyInsulation = document.getElementById("btnApplyInsulation");
  const cMsg = document.getElementById("cMsg");

  function updateInsulationCalc() {
    if (!facadeAreaRange || !facadeAreaVal) return;
    const area = parseInt(facadeAreaRange.value, 10);
    facadeAreaVal.innerText = area;

    const bType = buildingTypeSelect ? buildingTypeSelect.value : "bytovy";
    const iType = insulationTypeSelect ? insulationTypeSelect.value : "grafit";

    let savings = "45 %";
    let subsidy = "až 50 %";
    let thickness = "160 mm";
    let lambda = "lambda 0,031 W/(m·K)";

    if (iType === "grafit") {
      thickness = "140 - 180 mm";
      lambda = "lambda 0,031 W/(m·K)";
      savings = bType === "rodinny" ? "až 52 %" : "až 48 %";
    } else if (iType === "vata") {
      thickness = "160 - 220 mm";
      lambda = "lambda 0,036 W/(m·K) (A1)";
      savings = "až 46 %";
    } else if (iType === "bily") {
      thickness = "180 - 240 mm";
      lambda = "lambda 0,039 W/(m·K)";
      savings = "až 42 %";
    } else if (iType === "xps") {
      thickness = "120 - 160 mm";
      lambda = "lambda 0,034 W/(m·K)";
      savings = "soklová zóna";
    }

    if (bType === "bytovy" || bType === "panelak") {
      subsidy = "až 55 %";
    } else if (bType === "rodinny") {
      subsidy = "až 50 %";
    } else {
      subsidy = "dle výzvy OP TAK";
    }

    if (calcEnergySavings) calcEnergySavings.innerText = savings;
    if (calcSubsidyRate) calcSubsidyRate.innerText = subsidy;
    if (calcThickness) calcThickness.innerText = thickness;
    if (calcLambdaLabel) calcLambdaLabel.innerText = lambda;
  }

  if (facadeAreaRange) facadeAreaRange.addEventListener("input", updateInsulationCalc);
  if (buildingTypeSelect) buildingTypeSelect.addEventListener("change", updateInsulationCalc);
  if (insulationTypeSelect) insulationTypeSelect.addEventListener("change", updateInsulationCalc);
  updateInsulationCalc();

  if (btnApplyInsulation && cMsg && facadeAreaRange && buildingTypeSelect && insulationTypeSelect) {
    btnApplyInsulation.addEventListener("click", () => {
      const area = facadeAreaRange.value;
      const bText = buildingTypeSelect.options[buildingTypeSelect.selectedIndex].text;
      const iText = insulationTypeSelect.options[insulationTypeSelect.selectedIndex].text;
      const sRate = calcSubsidyRate ? calcSubsidyRate.innerText : "";
      cMsg.value = "Poptávka zateplení: " + bText + ", plocha fasády " + area + " m2. Požadovaný systém: " + iText + ". Odhadovaná dotace NZÚ: " + sRate + ". Prosíme o předběžnou nabídku a energetické posouzení.";
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
      "<h4 class='modal-sec-title'>Technické parametry a normy</h4>" +
      tableHtml +
      "<h4 class='modal-sec-title'>Výhody a garance jakosti</h4>" +
      "<ul class='modal-feats-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalAction()'>Poptat tuto technologii</a>" +
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

  const form = document.getElementById("adaptaInquiryForm");
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
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));
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
