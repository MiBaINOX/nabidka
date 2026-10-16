const TECH_CATALOG = [
  {
    id: "chlazeni-prumysl",
    cat: "prumysl",
    title: "Komplexní chladicí a mrazicí technologie pro potravinářství a průmysl",
    perex: "Projektování, dodávka a montáž průmyslových chladicích soustav s kompresory Bitzer, Frascold a Copeland.",
    specs: "Chladicí výkony 5 až 500 kW • Ekologická chladiva R449A, R448A, CO₂",
    table: {
      headers: ["Typ systému", "Rozsah výkonu", "Používaná chladiva", "Aplikace"],
      rows: [
        ["Středněteplotní okruhy (-5 až +5 °C)", "10 – 350 kW", "R449A, R134a, R513A", "Chlazené sklady, bourárny, mlékárny"],
        ["Mrazicí okruhy (-25 až -18 °C)", "5 – 180 kW", "R452A, R404A retro, CO₂", "Mrazicí komory, šokové zchlazovače"],
        ["Ekologické CO₂ transkritické", "20 – 500 kW", "R744 (přírodní CO₂)", "Velká logistická centra a supermarkety"],
        ["Výrobníky ledové vody", "15 – 250 kW", "Voda / propylenglykol", "Pivovary, pekárny, nápojový průmysl"]
      ]
    },
    features: [
      "Energetická úspora až 35 % díky adaptivnímu řízení vypařovacího tlaku",
      "Dálkový 24/7 telemetrický dohled s okamžitou GSM / web signalizací alarmů",
      "Plná certifikace F-plyny dle nařízení EP a Rady EU č. 517/2014",
      "Servisní výjezd do 4 hodin od nahlášení poruchy chlazení"
    ]
  },
  {
    id: "boxy-panely",
    cat: "boxy",
    title: "Výstavba chladicích komor a mrazíren z PUR / PIR panelů",
    perex: "Kompletní dodávka izolovaných komor včetně podlah, posuvných dveří a tlakových vyrovnávacích ventilů.",
    specs: "Tloušťky izolace 60 až 150 mm • Dveře s vyhřívaným rámem",
    table: {
      headers: ["Typ komory", "Teplotní režim", "Tloušťka panelu", "Součinitel prostupu U"],
      rows: [
        ["Chladicí box", "0 až +4 °C", "60 – 80 mm", "0,28 – 0,35 W/m²K"],
        ["Mrazicí box", "-18 až -25 °C", "100 – 120 mm", "0,19 – 0,22 W/m²K"],
        ["Hlubokomrazicí / šokový", "-35 až -40 °C", "150 mm", "0,15 W/m²K"],
        ["Vinařský sklad", "+10 až +14 °C", "50 – 60 mm", "0,38 W/m²K"]
      ]
    },
    features: [
      "Sendvičové panely s perodrážkou pro eliminaci tepelných mostů",
      "Mrazírenská posuvná vrata s vyhříváním těsnění a prahu proti přimrzání",
      "Protiskluzové nerezové nebo slzičkové hliníkové podlahy s vysokou nosností",
      "Splnění přísných hygienických norem HACCP pro styk s potravinami"
    ]
  },
  {
    id: "mereni-regulace",
    cat: "mar",
    title: "Automatizace chlazení, monitoring HACCP a dispečerské řízení",
    perex: "Elektronické řídicí systémy Carel a Danfoss s kontinuálním záznamem teplot dle požadavků hygieny a veterinární správy.",
    specs: "Řídicí automaty Carel / Danfoss • Dálkový webový dohled",
    table: {
      headers: ["Funkce systému MaR", "Technické řešení", "Přínos pro provoz"],
      rows: [
        ["Monitoring teplot HACCP", "Kalibrovaná čidla Pt1000 / NTC", "100% splnění veterinárních auditů"],
        ["Detekce úniku chladiva", "Stacionární infračervené senzory", "Soulad se zákonem o ochraně ovzduší"],
        ["Řízení odtávání výparníků", "Elektrické / horkými parami", "Rychlé odtátí s minimálním oteplením komory"],
        ["Vzdálená správa", "Cloudové rozhraní / mobilní aplikace", "Okamžitý přehled odkudkoliv bez nutnosti fyzické kontroly"]
      ]
    },
    features: [
      "Automatický zápis provozních teplot v intervalech stanovených normou",
      "Plynulá regulace kondenzačního tlaku šetřící opotřebení ventilátorů",
      "Záložní akumulátorové napájení pro hlášení alarmů i při výpadku sítě",
      "Intuitivní dotykový panel přímo na rozvaděči v českém jazyce"
    ]
  },
  {
    id: "servis-revize",
    cat: "servis",
    title: "Pravidelný servis chladicích zařízení, revize těsnosti a čištění",
    perex: "Pravidelné zákonné kontroly těsnosti chladicích okruhů, revize tlakových nádob a rychlý havarijní servis.",
    specs: "Kontroly úniků dle zákona • Vedení evidenčních knih",
    table: {
      headers: ["Ekvi. CO₂ chladiva", "Periodicita kontroly", "Rozsah zásahu"],
      rows: [
        ["5 až 50 tun ekv. CO₂", "1x za 12 měsíců", "Přímá detekce úniku, kontrola funkce"],
        ["50 až 500 tun ekv. CO₂", "1x za 6 měsíců", "Podrobná revize celého okruhu a armatur"],
        ["nad 500 tun ekv. CO₂", "1x za 3 měsíce", "Povinný stacionární detekční systém"],
        ["Čištění výparníků", "Dle znečištění provozu", "Tlakové mytí a antibakteriální dezinfekce"]
      ]
    },
    features: [
      "Vedení zákonných evidenčních knih chladicích zařízení bez starostí pro klienta",
      "Měření přehřátí a podchlazení chladiva pro ověření optimálního režimu",
      "Rychlá dostupnost originálních náhradních dílů a kompresorů skladem",
      "Zkušený tým certifikovaných chladírenských mechaniků s dlouholetou praxí"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_marcooling")) {
      sessionStorage.setItem("ping_sent_marcooling", "1");
      const record = { slug: "marcooling", time: new Date().toISOString(), ua: navigator.userAgent };
      localStorage.setItem("nabidka_open_marcooling", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=marcooling&t=" + Date.now();
        if (navigator.sendBeacon) {
          navigator.sendBeacon(pingUrl);
        } else {
          new Image().src = pingUrl;
        }
      }
    }
  }

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => mobileNav.classList.remove("open"));
    });
  }

  const filterBtns = document.querySelectorAll("#techFilters .t-btn");
  const cards = document.querySelectorAll("#techGrid .cat-card");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      cards.forEach(card => {
        if (f === "all" || card.getAttribute("data-cat") === f) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  const volInput = document.getElementById("boxVolume");
  const volDisplay = document.getElementById("volDisplay");
  const regimeSelect = document.getElementById("tempRegime");
  const commSelect = document.getElementById("commodityType");
  const powerKw = document.getElementById("powerKw");
  const compTip = document.getElementById("compressorTip");
  const panelThick = document.getElementById("panelThickness");

  function calcCooling() {
    const vol = volInput ? parseInt(volInput.value, 10) : 40;
    if (volDisplay) volDisplay.textContent = vol + " m³";

    const reg = regimeSelect ? regimeSelect.value : "chlazeni";
    let wPerM3 = 85;
    let thickness = 80;
    let tip = "Doporučená řada: Bitzer Ecoline 2-válec";

    if (reg === "bourarna") {
      wPerM3 = 60;
      thickness = 60;
      tip = "Doporučená řada: Bitzer Ecoline 2-válec nebo tichá jednotka";
    } else if (reg === "mrazeni") {
      wPerM3 = 135;
      thickness = 100;
      tip = "Doporučená řada: Bitzer Ecoline 4-válec Low-Temp";
    } else if (reg === "sokove") {
      wPerM3 = 190;
      thickness = 140;
      tip = "Doporučená řada: Bitzer 2-stupňový kompresor nebo tandem";
    }

    const comm = commSelect ? commSelect.value : "maso";
    if (comm === "maso") {
      wPerM3 *= 1.15;
    } else if (comm === "pekarna") {
      wPerM3 *= 1.1;
    }

    const totalKw = ((vol * wPerM3) / 1000).toFixed(1);
    if (powerKw) powerKw.textContent = totalKw;
    if (panelThick) panelThick.textContent = thickness;
    if (compTip) compTip.textContent = tip;
  }

  if (volInput) volInput.addEventListener("input", calcCooling);
  if (regimeSelect) regimeSelect.addEventListener("change", calcCooling);
  if (commSelect) commSelect.addEventListener("change", calcCooling);
  calcCooling();

  const modal = document.getElementById("techModalBackdrop");
  const modalContent = document.getElementById("modalDynamicContent");
  const modalClose = document.getElementById("modalCloseBtn");

  function openModal(id) {
    const item = TECH_CATALOG.find(x => x.id === id);
    if (!item) return;

    let tableHtml = "";
    if (item.table) {
      let ths = item.table.headers.map(h => "<th>" + h + "</th>").join("");
      let trs = item.table.rows.map(r => "<tr>" + r.map(c => "<td>" + c + "</td>").join("") + "</tr>").join("");
      tableHtml = "<div class='modal-table-wrap'><table class='modal-table'><thead><tr>" + ths + "</tr></thead><tbody>" + trs + "</tbody></table></div>";
    }

    let featsHtml = item.features.map(f => "<li>" + f + "</li>").join("");

    modalContent.innerHTML = 
      "<div class='modal-header-block'>" +
        "<span class='modal-tag'>Technický list chlazení</span>" +
        "<h3 class='modal-title'>" + item.title + "</h3>" +
        "<p class='modal-perex'>" + item.perex + "</p>" +
      "</div>" +
      "<h4 class='modal-section-title'>Parametry systému</h4>" +
      tableHtml +
      "<h4 class='modal-section-title'>Klíčové technologické přednosti</h4>" +
      "<ul class='modal-features-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-cyan' onclick='closeModalFromBtn()'>Poptat toto řešení</a>" +
      "</div>";

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  }

  window.closeModalFromBtn = function() {
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
      openModal(id);
    });
  });

  const form = document.getElementById("coolingInquiryForm");
  const formSuccess = document.getElementById("cSuccessMsg");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.style.display = "block";
      form.reset();
    });
  }

  const counters = document.querySelectorAll(".h-num[data-target]");
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
