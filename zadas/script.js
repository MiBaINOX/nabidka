const TECH_CATALOG = [
  {
    id: "cutter-gerber",
    cat: "cuttery",
    title: "Automatické řezací linky GERBER Technology",
    perex: "Vysoce přesné CNC vícevrstvé i jednovrstvé řezací systémy pro textilní, oděvní, kožedělný a automobilový průmysl.",
    specs: "Výška nářezu až 7,2 cm • Šířka stolu 1,8 až 2,4 m",
    table: {
      headers: ["Parametr", "Řada Paragon", "Řada Z1 (Single-ply)"],
      rows: [
        ["Max. výška stlačené vrstvy", "až 72 mm", "do 15 mm"],
        ["Pracovní šířka stolu", "1.800 – 2.400 mm", "1.600 – 2.200 mm"],
        ["Max. rychlost řezu", "až 1,1 m/s", "až 1,5 m/s"],
        ["Systém vakuování", "Plynule řízená turbína", "Zónové vakuové komory"]
      ]
    },
    features: [
      "Automatický kamerový systém pro sesazování vzorů a pruhů",
      "Inteligentní monitoring opotřebení nože s dynamickou korekcí dráhy",
      "Úspora materiálu až 8 % díky optimalizovanému algoritmickému nestingu",
      "Kompletní záruční a pozáruční servis vyškolenými techniky ZADAS"
    ]
  },
  {
    id: "lisy-meyer",
    cat: "fixace",
    title: "Kontinuální fixační a laminovací lisy MEYER",
    perex: "Špičková německá technologie pro fixaci výztužných vložek, lepení a sendvičové kašírování textilií a kompozitů.",
    specs: "Šířka pásu 600 až 1 800 mm • Teploty do 220 °C",
    table: {
      headers: ["Model lisu", "Pracovní šířka [mm]", "Topná zóna [mm]", "Max. tlak [N/cm²]"],
      rows: [
        ["KLF 600", "600", "800", "0 – 50"],
        ["KLF 1000", "1.000", "1.100", "0 – 60"],
        ["KLF 1400", "1.400", "1.400", "0 – 60"],
        ["KLF 1800", "1.800", "1.600", "0 – 80"]
      ]
    },
    features: [
      "Teflonové bezešvé pásy s automatickým pneumatickým centrováním",
      "Samostatně regulovatelné horní a spodní topné zóny",
      "Přesná elektronická regulace přítlaku pro ochranu citlivých vláken",
      "Integrovaná chladicí zóna na výstupu pro okamžitou stabilizaci spoje"
    ]
  },
  {
    id: "termolisy-lotus",
    cat: "potisk",
    title: "Průmyslové transferové termolisy Lotus Transcraft",
    perex: "Robustní ruční, pneumatické i poloautomatické termolisy pro sublimační potisk, transfer fólií a aplikaci emblémů.",
    specs: "Pracovní plochy až 100 x 80 cm • Pneumatický přítlak",
    table: {
      headers: ["Model", "Rozměr desky [cm]", "Max. teplota [°C]", "Typ ovládání"],
      rows: [
        ["LTS 138", "38 x 38", "250 °C", "Manuální s autootvíráním"],
        ["LTS 550 Twin", "2x 40 x 50", "250 °C", "Pneumatické otočné rameno"],
        ["LTS 750", "50 x 70", "250 °C", "Pneumatický výsuvný stůl"],
        ["Maxi 10080", "100 x 80", "250 °C", "Pneumatický velkoformát"]
      ]
    },
    features: [
      "Mikanitová topná tělesa s garancí rovnoměrného prohřátí celé plochy",
      "Výměnné spodní desky pro potisk rukávů, čepic, kapes a tašek",
      "Počítadlo pracovních cyklů a akustická signalizace ukončení přítlaku",
      "Vysoká bezpečnost práce s dvouručním spouštěním u pneumatických modelů"
    ]
  },
  {
    id: "spotrebni-material",
    cat: "material",
    title: "Perforovaný papír, podkladový papír a vakuové fólie",
    perex: "Kompletní sortiment spotřebních materiálů pro automatické řezací stoly, plotry a fixační lisy.",
    specs: "Šíře rolí 90 až 240 cm • Gramáže 40–120 g/m²",
    table: {
      headers: ["Materiál", "Šířka role [cm]", "Návin [m]", "Doporučené použití"],
      rows: [
        ["Plotrový papír bílý", "90, 160, 185, 220", "150 – 300", "Kreslení střihových poloh"],
        ["Perforovaný podklad", "160, 180, 200, 240", "250 – 500", "Spodní vrstva pod nářez"],
        ["Vakuová HDPE fólie", "165, 185, 205, 235", "500 – 1000", "Horní krytí pro vakuování"]
      ]
    },
    features: [
      "Stálá skladová zásoba v Prostějově s expedicí do 24 hodin",
      "Možnost dodání náhradních dílů: nože, brousicí pásky, teflonové potahy",
      "Vysoká pevnost v tahu zamezující přetržení při automatickém odvíjení",
      "Množstevní slevy pro výrobní provozy a stálé odběratele"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_zadas")) {
      sessionStorage.setItem("ping_sent_zadas", "1");
      const record = { slug: "zadas", time: new Date().toISOString(), ua: navigator.userAgent };
      localStorage.setItem("nabidka_open_zadas", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=zadas&t=" + Date.now();
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

  const filterBtns = document.querySelectorAll("#catalogFilters .tab-btn");
  const cards = document.querySelectorAll("#catalogGrid .cat-card");
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
        "<span class='modal-tag'>Technický list</span>" +
        "<h3 class='modal-title'>" + item.title + "</h3>" +
        "<p class='modal-perex'>" + item.perex + "</p>" +
      "</div>" +
      "<h4 class='modal-section-title'>Klíčové parametry</h4>" +
      tableHtml +
      "<h4 class='modal-section-title'>Technologické přednosti</h4>" +
      "<ul class='modal-features-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalFromBtn()'>Poptat tento systém</a>" +
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

  const form = document.getElementById("techInquiryForm");
  const formSuccess = document.getElementById("formSuccess");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formSuccess) formSuccess.style.display = "block";
      form.reset();
    });
  }

  const counters = document.querySelectorAll(".stat-number[data-target]");
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
