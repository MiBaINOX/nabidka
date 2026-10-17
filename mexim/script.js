document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("ref") === "nabidka") {
    if (!sessionStorage.getItem("ping_sent_mexim")) {
      sessionStorage.setItem("ping_sent_mexim", "1");
      const record = {
        slug: "mexim",
        time: new Date().toISOString(),
        ua: navigator.userAgent
      };
      localStorage.setItem("nabidka_open_mexim", JSON.stringify(record));
      if (window.NABIDKA_PING_URL) {
        const pingUrl = window.NABIDKA_PING_URL + "?slug=mexim&t=" + encodeURIComponent(record.time);
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

  const I18N = {
    cs: {
      top_badge: "Distribuce ložisek od roku 1991",
      top_claim: "SKF • FAG • INA • TIMKEN • ZKL • TOTAL • LOCTITE",
      nav_sortiment: "Katalog ložisek",
      nav_znacky: "Značky & Maziva",
      nav_vyhledavac: "Vyhledávač řad",
      nav_onas: "O společnosti",
      nav_poptat: "Poptat díly",
      hero_title: "Průmyslová ložiska, lineární vedení a technická maziva",
      hero_desc: "Kompletní dodávky kuličkových, válečkových i nadrozměrných ložisek, kloubových hlav a těsnění od předních světových výrobců. Expresní expedice ze skladových zásob v České republice.",
      btn_sortiment: "Prohlédnout sortiment",
      btn_vyhledavac: "Vyhledat parametry",
      stat_let: "let v distribuci ložisek",
      stat_expedice: "expedice skladových položek",
      stat_partneri: "originální certifikované produkty",
      sec_sortiment_tag: "Výrobní a prodejní program",
      sec_sortiment_title: "Komplexní portfolio komponentů pro strojírenství",
      sec_sortiment_desc: "Dodáváme standardní i zakázková ložiska, lineární vedení a chemii pro údržbu výrobních závodů i prvovýrobu strojů.",
      cat_1_title: "Valivá, kuličková a soudečková ložiska",
      cat_1_desc: "Kompletní sortiment kuličkových, válečkových, soudečkových, jehlových a kuželíkových ložisek renomovaných světových značek.",
      cat_1_specs: "Kuličková • Válečková • Soudečková • Kuželíková • Nadrozměrná",
      cat_2_title: "Kloubové hlavy, oka a kluzná kloubová ložiska",
      cat_2_desc: "Přesné kloubové hlavy s vnitřním i vnějším závitem, bezúdržbové kluzné plochy PTFE i provedení ocel/ocel s maznicí.",
      cat_2_specs: "Závity M5 až M42 • Pravý i levý závit • Provedení ocel/bronz a PTFE",
      cat_3_title: "Valivá lineární vedení a profilové kolejnice",
      cat_3_desc: "Profilová lineární vedení, vozíky, vodicí tyče a kuličková pouzdra pro přesný přímočarý pohyb v CNC strojích a robotice.",
      cat_3_specs: "Kolejnice vel. 15 až 55 • Čtyřřadé kuličkové uspořádání • Vodicí tyče",
      cat_4_title: "Hřídelová gufera, průmyslová maziva a technické tmely",
      cat_4_desc: "Tuzemská i zahraniční gufera NBR / FKM (Viton), průmyslové oleje TOTAL, mazací tuky MOGUL a zajišťovací tmely LOCTITE.",
      cat_4_specs: "Gufera dle DIN 3760 • Průmyslové oleje ISO VG 32-460 • Lepidla",
      btn_detail: "Technická specifikace",
      finder_tag: "Interaktivní asistent",
      finder_title: "Vyhledávač a konfigurátor ložiskových uložení",
      finder_desc: "Zadejte požadovaný průměr hřídele a provozní podmínky. Systém navrhne optimální typovou řadu ložiska a doporučené mazivo.",
      lbl_btype: "Kategorie ložiskového uložení",
      opt_rad_kul: "Kuličkové radiální ložisko (vysoké otáčky)",
      opt_soud: "Soudečkové ložisko (vysoká zátěž a ráz)",
      opt_kuzel: "Kuželíkové ložisko (kombinované síly)",
      opt_kloub: "Kloubová hlava (kyvný pohyb a táhlo)",
      opt_linear: "Lineární vedení (přímočarý posuv)",
      lbl_shaft: "Průměr hřídele d:",
      res_lbl_rada: "Doporučená výrobní řada",
      res_lbl_mazivo: "Doporučené mazivo / tmel",
      res_lub_sub: "univerzální vysokotlaké mazivo EP",
      res_lbl_dostup: "Dostupnost ve skladu Brno",
      res_stock: "Skladem k okamžité expedici",
      res_stock_sub: "odeslání přepravní službou dnes",
      btn_apply_bearing: "Přenést ložisko do poptávky",
      sec_brands_tag: "Průmyslová partnerství",
      sec_brands_title: "Autorizovaní výrobci ložisek a chemie",
      sec_brands_desc: "Odebíráme výhradně certifikované zboží s plnou garancí původu, technickými listy a atesty jakosti.",
      p_skf_desc: "Světová jednička ve valivých ložiskách a těsněních pro náročný provoz.",
      p_schaeffler_desc: "Přesná vřetenová, kuličková a lineární vedení nejvyšší přesnosti.",
      p_timken_desc: "Specialista na kuželíková a těžká soudečková ložiska pro průmysl.",
      p_chem_desc: "Průmyslové oleje, plastická maziva a lepidla pro jištění a montáž.",
      sec_contact_tag: "Přímé spojení",
      sec_contact_title: "Poptávky a technické poradenství",
      sec_contact_desc: "Potřebujete ověřit skladovou dostupnost konkrétního označení ložiska, nahradit zastaralý typ nebo poptat pravidelné dodávky maziv? Náš tým specialistů je vám plně k dispozici.",
      contact_exec_role: "Obchodní zastoupení a expedice",
      lbl_phone: "Mobil:",
      lbl_phone2: "Telefon:",
      lbl_sidlo: "Sídlo společnosti:",
      form_title: "Rychlá poptávka dílů",
      form_name: "Jméno a příjmení / Firma *",
      form_phone: "Telefonní číslo *",
      form_email: "E-mailová adresa *",
      form_sortiment: "Požadovaný sortiment",
      form_opt_loziska: "Valivá a kuličková ložiska",
      form_opt_klouby: "Kloubové hlavy a hydraulická oka",
      form_opt_vedeni: "Lineární profilová vedení a tyče",
      form_opt_gufera: "Gufera, těsnění a O-kroužky",
      form_opt_maziva: "Průmyslová maziva a tmely LOCTITE",
      form_msg: "Specifikace dílů (označení, počet kusů)",
      form_submit: "Odeslat poptávku ložisek",
      form_success: "Děkujeme za poptávku. Obchodní oddělení MEXIM vás bude kontaktovat s nabídkou dostupnosti.",
      map_title: "Sídlo společnosti na Kounicově ulici v centru Brna",
      map_open: "Otevřít na Mapy.cz",
      footer_perex: "MEXIM spol. s r.o. Brno – Velkoobchod a distribuce průmyslových ložisek, kloubových hlav, valivých vedení a technické chemie od roku 1991.",
      footer_sortiment: "Sortiment",
      footer_kontakt: "Kontakt",
      footer_copy: "© 1991–2026 MEXIM spol. s r.o. Všechna práva vyhrazena."
    },
    en: {
      top_badge: "Bearing Distribution Since 1991",
      top_claim: "SKF • FAG • INA • TIMKEN • ZKL • TOTAL • LOCTITE",
      nav_sortiment: "Bearings Catalog",
      nav_znacky: "Brands & Lubricants",
      nav_vyhledavac: "Series Finder",
      nav_onas: "About Company",
      nav_poptat: "Inquire Parts",
      hero_title: "Industrial Bearings, Linear Guides and Technical Lubricants",
      hero_desc: "Full supply of ball, roller and oversized bearings, rod ends and seals from leading global manufacturers. Express delivery from warehouse stock in the Czech Republic.",
      btn_sortiment: "Explore Products",
      btn_vyhledavac: "Search Specifications",
      stat_let: "years in bearing distribution",
      stat_expedice: "dispatch of in-stock items",
      stat_partneri: "certified genuine components",
      sec_sortiment_tag: "Product & Sales Program",
      sec_sortiment_title: "Comprehensive Portfolio for Mechanical Engineering",
      sec_sortiment_desc: "We supply standard and specialized bearings, linear guides, and maintenance chemicals for industrial plants and machine builders.",
      cat_1_title: "Rolling, Ball and Spherical Roller Bearings",
      cat_1_desc: "Complete range of ball, cylindrical, spherical, needle, and tapered roller bearings of world-renowned brands.",
      cat_1_specs: "Ball • Cylindrical • Spherical • Tapered • Extra-large",
      cat_2_title: "Rod Ends, Ball Joint Heads and Spherical Plain Bearings",
      cat_2_desc: "Precision rod ends with female and male threads, maintenance-free PTFE surfaces and steel/steel greaseable versions.",
      cat_2_specs: "Threads M5 to M42 • Right & Left • Steel/Bronze & PTFE",
      cat_3_title: "Linear Profile Guides and Precision Rails",
      cat_3_desc: "Profile linear guideways, carriages, guide shafts, and linear ball bushings for precise motion in CNC and automation.",
      cat_3_specs: "Rails size 15 to 55 • 4-row ball recirculating • Shafts",
      cat_4_title: "Shaft Oil Seals, Industrial Greases and Technical Sealants",
      cat_4_desc: "Domestic and imported NBR / Viton oil seals, TOTAL industrial oils, MOGUL greases and LOCTITE threadlockers.",
      cat_4_specs: "DIN 3760 oil seals • ISO VG 32-460 oils • Sealants",
      btn_detail: "Technical Specifications",
      finder_tag: "Interactive Assistant",
      finder_title: "Bearing Selection & Specification Tool",
      finder_desc: "Select shaft diameter and operating conditions. The system suggests optimal series and recommended lubricants.",
      lbl_btype: "Bearing Category",
      opt_rad_kul: "Radial deep groove ball bearing (high speed)",
      opt_soud: "Spherical roller bearing (heavy loads)",
      opt_kuzel: "Tapered roller bearing (combined loads)",
      opt_kloub: "Rod end / ball joint (oscillating links)",
      opt_linear: "Linear guideway (straight motion)",
      lbl_shaft: "Shaft Diameter d:",
      res_lbl_rada: "Recommended Bearing Series",
      res_lbl_mazivo: "Recommended Lubricant / Sealant",
      res_lub_sub: "universal high-pressure EP grease",
      res_lbl_dostup: "Brno Warehouse Availability",
      res_stock: "In Stock for Immediate Dispatch",
      res_stock_sub: "shipped via express courier today",
      btn_apply_bearing: "Transfer to Parts Inquiry",
      sec_brands_tag: "Industrial Partnerships",
      sec_brands_title: "Authorized Bearing & Chemical Manufacturers",
      sec_brands_desc: "We supply exclusively certified parts with full origin warranty, technical sheets, and quality certificates.",
      p_skf_desc: "Global leader in rolling bearings and seals for demanding applications.",
      p_schaeffler_desc: "High precision spindle, ball, and linear technology products.",
      p_timken_desc: "Specialist in tapered and heavy spherical roller bearings.",
      p_chem_desc: "Industrial oils, specialty greases, and retaining compounds.",
      sec_contact_tag: "Direct Contact",
      sec_contact_title: "Inquiries & Technical Consulting",
      sec_contact_desc: "Need to verify stock of a specific bearing code, find a replacement, or request regular lubricant supply? Our specialists are at your disposal.",
      contact_exec_role: "Sales & Dispatch",
      lbl_phone: "Mobile:",
      lbl_phone2: "Phone:",
      lbl_sidlo: "Company Headquarters:",
      form_title: "Quick Parts Inquiry",
      form_name: "Full Name / Company *",
      form_phone: "Phone Number *",
      form_email: "E-mail Address *",
      form_sortiment: "Requested Product Range",
      form_opt_loziska: "Rolling & Ball Bearings",
      form_opt_klouby: "Rod Ends & Hydraulic Lugs",
      form_opt_vedeni: "Linear Guideways & Shafts",
      form_opt_gufera: "Oil Seals, Gaskets & O-Rings",
      form_opt_maziva: "Industrial Greases & LOCTITE",
      form_msg: "Part Specifications (code, quantity)",
      form_submit: "Submit Bearing Inquiry",
      form_success: "Thank you for your inquiry. MEXIM sales will contact you shortly with availability.",
      map_title: "Headquarters on Kounicova Street, Brno Center",
      map_open: "Open on Mapy.cz",
      footer_perex: "MEXIM spol. s r.o. Brno – Wholesale and distribution of industrial bearings, rod ends, linear guides, and lubricants since 1991.",
      footer_sortiment: "Products",
      footer_kontakt: "Contact",
      footer_copy: "© 1991–2026 MEXIM spol. s r.o. All rights reserved."
    },
    de: {
      top_badge: "Lagerdistribution seit 1991",
      top_claim: "SKF • FAG • INA • TIMKEN • ZKL • TOTAL • LOCTITE",
      nav_sortiment: "Lagerkatalog",
      nav_znacky: "Marken & Schmierstoffe",
      nav_vyhledavac: "Typen-Finder",
      nav_onas: "Über uns",
      nav_poptat: "Teile anfragen",
      hero_title: "Industrielager, Linearführungen und technische Schmierstoffe",
      hero_desc: "Komplette Belieferung mit Kugel-, Rollen- und Großlagern, Gelenkköpfen und Dichtungen führender Weltmarken. Expressversand direkt ab Lager in der Tschechischen Republik.",
      btn_sortiment: "Sortiment ansehen",
      btn_vyhledavac: "Spezifikationen suchen",
      stat_let: "Jahre Lagerdistribution",
      stat_expedice: "Versand ab Lager",
      stat_partneri: "zertifizierte Originalteile",
      sec_sortiment_tag: "Lieferprogramm",
      sec_sortiment_title: "Umfassendes Komponentenportfolio für den Maschinenbau",
      sec_sortiment_desc: "Wir liefern Standard- und Speziallager, Linearführungen und Industriechemie für Instandhaltung und Erstausrüstung.",
      cat_1_title: "Wälz-, Kugel- und Pendelrollenlager",
      cat_1_desc: "Vollständiges Sortiment an Rillen-, Zylinder-, Pendel-, Nadel- und Kegelrollenlagern renommierter Weltmarken.",
      cat_1_specs: "Kugellager • Zylinderrollen • Pendellager • Kegelrollen",
      cat_2_title: "Gelenkköpfe, Gelenkaugen und Gelenklager",
      cat_2_desc: "Präzisions-Gelenkköpfe mit Innen- und Außengewinde, wartungsfreie PTFE-Gleitflächen und nachschmierbare Ausführungen.",
      cat_2_specs: "Gewinde M5 bis M42 • Rechts & Links • Stahl/Bronze & PTFE",
      cat_3_title: "Linearführungen und Profilschienen",
      cat_3_desc: "Profillinearschienen, Führungswagen, Führungswellen und Kugelbüchsen für präzise Linearbewegungen in CNC und Robotik.",
      cat_3_specs: "Schienengrößen 15 bis 55 • 4-reihig kugelgeführt • Wellen",
      cat_4_title: "Wellendichtringe (Simmerringe), Schmierstoffe und LOCTITE",
      cat_4_desc: "NBR- und FKM-Wellendichtringe, TOTAL Industrieöle, MOGUL Schmierfette und LOCTITE Schraubensicherungen.",
      cat_4_specs: "DIN 3760 Dichtringe • ISO VG 32-460 Öle • Klebstoffe",
      btn_detail: "Technische Spezifikation",
      finder_tag: "Interaktiver Assistent",
      finder_title: "Lagerkonfigurator & Typen-Finder",
      finder_desc: "Wählen Sie Wellendurchmesser und Betriebsbedingungen. Das System schlägt die optimale Baureihe und Schmierstoffe vor.",
      lbl_btype: "Lagerkategorie",
      opt_rad_kul: "Radial-Rillenkugellager (hohe Drehzahlen)",
      opt_soud: "Pendelrollenlager (schwere Stoßlasten)",
      opt_kuzel: "Kegelrollenlager (kombinierte Kräfte)",
      opt_kloub: "Gelenkkopf (Schwenkbewegungen)",
      opt_linear: "Linearführung (Geradführung)",
      lbl_shaft: "Wellendurchmesser d:",
      res_lbl_rada: "Empfohlene Baureihe",
      res_lbl_mazivo: "Empfohlener Schmierstoff",
      res_lub_sub: "universelles Hochdruck-EP-Fett",
      res_lbl_dostup: "Verfügbarkeit im Lager Brünn",
      res_stock: "Sofort ab Lager lieferbar",
      res_stock_sub: "Versand per Kurier noch heute",
      btn_apply_bearing: "In Anfrage übernehmen",
      sec_brands_tag: "Industriepartnerschaften",
      sec_brands_title: "Autorisierte Hersteller von Lagern und Chemie",
      sec_brands_desc: "Wir vertreiben ausschließlich zertifizierte Originalware mit voller Herkunftsgarantie und Datenblättern.",
      p_skf_desc: "Weltmarktführer für Wälzlager und Dichtungstechnik.",
      p_schaeffler_desc: "Präzisions-Spindellager und Lineartechnik von FAG und INA.",
      p_timken_desc: "Spezialist für Kegel- und schwere Pendelrollenlager.",
      p_chem_desc: "Industrieöle, Spezialfette und Befestigungsklebstoffe.",
      sec_contact_tag: "Direkter Kontakt",
      sec_contact_title: "Anfragen und technische Beratung",
      sec_contact_desc: "Benötigen Sie die Verfügbarkeit einer Lagernummer oder Ersatztypen? Unsere Spezialisten stehen Ihnen gerne zur Verfügung.",
      contact_exec_role: "Vertrieb und Versand",
      lbl_phone: "Mobil:",
      lbl_phone2: "Telefon:",
      lbl_sidlo: "Firmensitz:",
      form_title: "Schnelle Teileanfrage",
      form_name: "Name / Firma *",
      form_phone: "Telefonnummer *",
      form_email: "E-Mail-Adresse *",
      form_sortiment: "Gewünschtes Sortiment",
      form_opt_loziska: "Wälz- und Kugellager",
      form_opt_klouby: "Gelenkköpfe & Hydraulikaugen",
      form_opt_vedeni: "Linearschienen & Wellen",
      form_opt_gufera: "Wellendichtringe & O-Ringe",
      form_opt_maziva: "Industriefette & LOCTITE",
      form_msg: "Teilespezifikation (Bezeichnung, Menge)",
      form_submit: "Lageranfrage absenden",
      form_success: "Vielen Dank für Ihre Anfrage. Der MEXIM-Vertrieb meldet sich umgehend mit einem Angebot.",
      map_title: "Firmensitz Kounicova-Straße im Zentrum von Brünn",
      map_open: "Auf Mapy.cz öffnen",
      footer_perex: "MEXIM spol. s r.o. Brno – Großhandel und Distribution von Wälzlagern, Gelenkköpfen, Linearführungen und Chemie seit 1991.",
      footer_sortiment: "Sortiment",
      footer_kontakt: "Kontakt",
      footer_copy: "© 1991–2026 MEXIM spol. s r.o. Alle Rechte vorbehalten."
    }
  };

  const shaftDiameter = document.getElementById("shaftDiameter");
  const shaftVal = document.getElementById("shaftVal");
  const bearingTypeSelect = document.getElementById("bearingTypeSelect");
  const resBearingSeries = document.getElementById("resBearingSeries");
  const resBearingDims = document.getElementById("resBearingDims");
  const resLubricant = document.getElementById("resLubricant");
  const btnApplyBearing = document.getElementById("btnApplyBearing");
  const cMessage = document.getElementById("cMessage");

  function updateBearingFinder() {
    if (!shaftDiameter || !shaftVal) return;
    const d = parseInt(shaftDiameter.value, 10);
    shaftVal.innerText = d;

    const bType = bearingTypeSelect ? bearingTypeSelect.value : "rad_kul";
    let series = "Řada 62" + (d < 100 ? (d < 50 ? "08" : "12") : "20") + " (SKF / FAG)";
    let dims = "d = " + d + " mm, D = " + (d * 2) + " mm, B = " + Math.round(d * 0.45) + " mm";
    let lub = "TOTAL Ceran XM / MOGUL LV 2-3";

    if (bType === "soud") {
      series = "Řada 222" + (d < 100 ? "10" : "24") + " E (TIMKEN / SKF)";
      dims = "d = " + d + " mm, D = " + Math.round(d * 1.9) + " mm, B = " + Math.round(d * 0.6) + " mm";
      lub = "TOTAL Ceran MS / MOGUL LA 2";
    } else if (bType === "kuzel") {
      series = "Řada 302" + (d < 100 ? "08" : "18") + " (TIMKEN / FAG)";
      dims = "d = " + d + " mm, D = " + Math.round(d * 1.85) + " mm, T = " + Math.round(d * 0.48) + " mm";
      lub = "TOTAL Multis Complex EP 2";
    } else if (bType === "kloub") {
      series = "Kloubová hlava PHS / SI " + d + " E (ocel/bronz)";
      dims = "Závit M" + d + "x1.5, vnitřní otvor d = " + Math.round(d * 0.6) + " mm";
      lub = "LOCTITE LB 8101 / MOGUL G3";
    } else if (bType === "linear") {
      series = "Lineární kolejnice HGR " + (d < 30 ? "15" : (d < 50 ? "25" : "35")) + " + vozíky HGH";
      dims = "Šířka kolejnice " + (d < 30 ? "15" : (d < 50 ? "25" : "35")) + " mm, délka na míru";
      lub = "Klüber Microlube GL 261 / TOTAL";
    }

    if (resBearingSeries) resBearingSeries.innerText = series;
    if (resBearingDims) resBearingDims.innerText = dims;
    if (resLubricant) resLubricant.innerText = lub;
  }

  function setLanguage(lang) {
    const dict = I18N[lang] || I18N.cs;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    localStorage.setItem("mexim_lang", lang);
    updateBearingFinder();
  }
  window.setLanguage = setLanguage;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem("mexim_lang") || "cs";
  if (savedLang !== "cs") {
    setLanguage(savedLang);
  }

  if (shaftDiameter) shaftDiameter.addEventListener("input", updateBearingFinder);
  if (bearingTypeSelect) bearingTypeSelect.addEventListener("change", updateBearingFinder);
  updateBearingFinder();

  if (btnApplyBearing && cMessage && shaftDiameter && bearingTypeSelect) {
    btnApplyBearing.addEventListener("click", () => {
      const d = shaftDiameter.value;
      const bText = bearingTypeSelect.options[bearingTypeSelect.selectedIndex].text;
      const sText = resBearingSeries ? resBearingSeries.innerText : "";
      const dText = resBearingDims ? resBearingDims.innerText : "";
      cMessage.value = "Poptávka ložisek: " + bText + ", průměr d = " + d + " mm (" + sText + ", " + dText + "). Poptáváme skladovou dostupnost a cenovou kalkulaci pro 4 ks.";
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
      "<h4 class='modal-sec-title'>Technické parametry a řady</h4>" +
      tableHtml +
      "<h4 class='modal-sec-title'>Přednosti a garance originality</h4>" +
      "<ul class='modal-feats-list'>" + featsHtml + "</ul>" +
      "<div class='modal-actions'>" +
        "<a href='#kontakt' class='btn-primary' onclick='closeModalAction()'>Poptat tuto položku</a>" +
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

  const form = document.getElementById("meximInquiryForm");
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
