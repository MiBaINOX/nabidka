document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_boos")) {
      sessionStorage.setItem("ping_sent_boos", "1");
      const record = {
        slug: "boos",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_boos", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=boos&t=" + encodeURIComponent(record.time);
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

  const bldCategory = document.getElementById("bldCategory");
  const projectStage = document.getElementById("projectStage");
  const floorArea = document.getElementById("floorArea");
  const floorAreaVal = document.getElementById("floorAreaVal");
  const recAction = document.getElementById("recAction");
  const recActionSub = document.getElementById("recActionSub");
  const recTime = document.getElementById("recTime");
  const recDoss = document.getElementById("recDoss");
  const btnApplyRoadmap = document.getElementById("btnApplyRoadmap");
  const cNotes = document.getElementById("cNotes");

  function updateRoadmapCalc() {
    if (!floorArea || !floorAreaVal) return;
    const area = parseInt(floorArea.value, 10);
    floorAreaVal.innerText = area;

    const bCat = bldCategory ? bldCategory.value : "rd";
    const pStg = projectStage ? projectStage.value : "koncept";

    let act = "Studie + Projekt DSP";
    let sub = "ověření území a povolovací dokumentace";
    let time = "4 - 6 měsíců";
    let doss = "HZS, KHS, OŽP";

    if (bCat === "prumysl" || bCat === "komerce") {
      doss = "HZS, KHS, OŽP, TIČR, KÚ";
      time = area > 1000 ? "6 - 10 měsíců" : "5 - 8 měsíců";
    } else if (bCat === "bd") {
      doss = "HZS, KHS, OŽP, Doprava";
      time = "5 - 8 měsíců";
    }

    if (pStg === "dsp_hotovo") {
      act = "Prováděcí projekt (DPS)";
      sub = "položkový rozpočet a detaily 1:50 pro tendr";
      time = "2 - 3 měsíce";
    } else if (pStg === "dozor") {
      act = "Technický dozor stavebníka";
      sub = "kontrola kvality a přejímky na stavbě";
      time = "po dobu výstavby";
    } else if (pStg === "studie") {
      act = "Dokumentace pro povolení záměru";
      sub = "projednání s DOSS a podání na úřad";
    }

    if (recAction) recAction.innerText = act;
    if (recActionSub) recActionSub.innerText = sub;
    if (recTime) recTime.innerText = time;
    if (recDoss) recDoss.innerText = doss;
  }

  if (floorArea) floorArea.addEventListener("input", updateRoadmapCalc);
  if (bldCategory) bldCategory.addEventListener("change", updateRoadmapCalc);
  if (projectStage) projectStage.addEventListener("change", updateRoadmapCalc);
  updateRoadmapCalc();

  if (btnApplyRoadmap && cNotes && floorArea && bldCategory && projectStage) {
    btnApplyRoadmap.addEventListener("click", () => {
      const area = floorArea.value;
      const bText = bldCategory.options[bldCategory.selectedIndex].text;
      const sText = projectStage.options[projectStage.selectedIndex].text;
      const aText = recAction ? recAction.innerText : "";
      const tText = recTime ? recTime.innerText : "";
      cNotes.value = "Poptávka projektu: " + bText + ", plocha cca " + area + " m2. Fáze: " + sText + ". Požadovaný rozsah: " + aText + " (odhad: " + tText + "). Prosíme o nezávaznou konzultaci.";
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
      "<h4 class='modal-sec-title'>Technické parametry a výstupy</h4>" +
      tableHtml +
      "<h4 class='modal-sec-title'>Garantované výhody autorizace ČKAIT</h4>" +
      "<ul class='modal-feats-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalAction()'>Poptat tuto službu</a>" +
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

  const form = document.getElementById("boosInquiryForm");
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
