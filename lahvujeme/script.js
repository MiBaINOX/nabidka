document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_lahvujeme")) {
      sessionStorage.setItem("ping_sent_lahvujeme", "1");
      const record = {
        slug: "lahvujeme",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_lahvujeme", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=lahvujeme&t=" + encodeURIComponent(record.time);
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

  const techTabs = document.querySelectorAll(".tech-tab-btn");
  const stepCards = document.querySelectorAll(".step-card");

  techTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      techTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const step = tab.getAttribute("data-step");

      stepCards.forEach(card => {
        if (card.id === "step" + step) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const volumeSlider = document.getElementById("volumeSlider");
  const volumeValue = document.getElementById("volumeValue");
  const closureType = document.getElementById("closureType");
  const labelingType = document.getElementById("labelingType");
  const calcBottles = document.getElementById("calcBottles");
  const calcTime = document.getElementById("calcTime");
  const calcStaff = document.getElementById("calcStaff");
  const btnApplyWine = document.getElementById("btnApplyWine");
  const cNotes = document.getElementById("cNotes");

  function updateWineCalc() {
    if (!volumeSlider || !volumeValue) return;
    const vol = parseInt(volumeSlider.value, 10);
    volumeValue.innerText = vol.toLocaleString("cs-CZ");

    const bottles = Math.round(vol / 0.75);
    const cartons = Math.round(bottles / 6);

    let speedPerHour = 2000;
    const cType = closureType ? closureType.value : "korek";
    if (cType === "vinolok") {
      speedPerHour = 1600;
    } else if (cType === "bvs") {
      speedPerHour = 2200;
    }

    const hours = (bottles / speedPerHour).toFixed(1);

    if (calcBottles) {
      calcBottles.innerText = bottles.toLocaleString("cs-CZ") + " lahví";
      const sub = calcBottles.nextElementSibling;
      if (sub) sub.innerText = "cca " + cartons.toLocaleString("cs-CZ") + " kartonů po 6 kusech";
    }

    if (calcTime) {
      calcTime.innerText = "cca " + hours.replace(".", ",") + " hodiny";
    }

    if (calcStaff) {
      calcStaff.innerText = vol > 6000 ? "4–5 osob" : "3–4 osoby";
    }
  }

  if (volumeSlider) volumeSlider.addEventListener("input", updateWineCalc);
  if (closureType) closureType.addEventListener("change", updateWineCalc);
  if (labelingType) labelingType.addEventListener("change", updateWineCalc);
  updateWineCalc();

  if (btnApplyWine && cNotes && volumeSlider && closureType && labelingType) {
    btnApplyWine.addEventListener("click", () => {
      const vol = volumeSlider.value;
      const cText = closureType.options[closureType.selectedIndex].text;
      const lText = labelingType.options[labelingType.selectedIndex].text;
      const bText = calcBottles ? calcBottles.innerText : "";
      const tText = calcTime ? calcTime.innerText : "";
      cNotes.value = "Poptávka lahvování: " + vol + " litrů (" + bText + "). Uzávěr: " + cText + ". Adjustáž: " + lText + ". Doba chodu: " + tText + ". Prosíme o nabídku volných termínů.";
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
      "<h4 class='modal-sec-title'>Technické parametry modulu</h4>" +
      tableHtml +
      "<h4 class='modal-sec-title'>Přednosti a enologické záruky</h4>" +
      "<ul class='modal-feats-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalAction()'>Poptat tento modul</a>" +
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

  const form = document.getElementById("wineInquiryForm");
  const formSuccess = document.getElementById("cSuccess");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.style.display = "block";
      form.reset();
    });
  }

  const counters = document.querySelectorAll("[data-target]");
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
