(function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref") === "nabidka") {
        if (!sessionStorage.getItem("ping_sent_pa-servis")) {
            sessionStorage.setItem("ping_sent_pa-servis", "true");
            const payload = {
                slug: "pa-servis",
                time: new Date().toISOString(),
                ua: navigator.userAgent
            };
            localStorage.setItem("nabidka_open_pa-servis", JSON.stringify(payload));
            if (window.NABIDKA_PING_URL) {
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
                } else {
                    new Image().src = window.NABIDKA_PING_URL + "?slug=pa-servis&t=" + Date.now();
                }
            }
        }
    }
})();

function toggleNav() {
    const nav = document.querySelector(".editorial-nav");
    if (nav) {
        nav.classList.toggle("open");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                if (entry.target.querySelector(".counter") || entry.target.classList.contains("counter")) {
                    startPaCounters(entry.target);
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));

    updateValveRecommendation();
});

function startPaCounters(scope) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const counters = scope.querySelectorAll ? scope.querySelectorAll(".counter") : [scope];
    counters.forEach(counter => {
        if (counter.dataset.counted) return;
        counter.dataset.counted = "true";
        const target = parseInt(counter.dataset.target, 10);
        counter.textContent = '0';
        const duration = 1600;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.ceil(current);
            }
        }, stepTime);
    });
}

let activeCategory = "all";
let activeMedium = "all";

function setCategoryTab(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    filterCatalog();
}

function setMediumFilter(med, btn) {
    activeMedium = med;
    document.querySelectorAll(".med-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
    filterCatalog();
}

function filterCatalog() {
    const query = document.getElementById("catSearch") ? document.getElementById("catSearch").value.toLowerCase().trim() : "";
    const cards = document.querySelectorAll(".valve-card");

    cards.forEach(card => {
        const cardCat = card.dataset.cat || "";
        const cardMed = card.dataset.medium || "";
        const text = card.textContent.toLowerCase();

        const matchCat = (activeCategory === "all") || (cardCat === activeCategory);
        const matchMed = (activeMedium === "all") || (cardMed.indexOf(activeMedium) !== -1);
        const matchQuery = !query || text.indexOf(query) !== -1;

        if (matchCat && matchMed && matchQuery) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function switchDocTab(tabKey, btn) {
    document.querySelectorAll(".doc-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".doc-tab-pane").forEach(p => p.classList.remove("active"));
    if (btn) btn.classList.add("active");
    const pane = document.getElementById("pane-" + tabKey);
    if (pane) pane.classList.add("active");
}

function updateValveRecommendation() {
    const medium = document.getElementById("selMedium") ? document.getElementById("selMedium").value : "";
    const pressure = document.getElementById("selPressure") ? document.getElementById("selPressure").value : "";
    const func = document.getElementById("selFunction") ? document.getElementById("selFunction").value : "";

    const titleEl = document.getElementById("recTitle");
    const descEl = document.getElementById("recDetails");
    const mailtoBtn = document.getElementById("recMailto");

    let recTitle = "Přímočinný redukční ventil GEDIP";
    let recDesc = "Vhodný pro páru, vzduch i vodu. Bez nutnosti pomocné energie reguluje výstupní tlak na nastavenou hodnotu.";

    if (func.indexOf("pojistn") !== -1) {
        recTitle = "Plnozdvižný pojistný ventil POLIX (pružinový)";
        recDesc = "Zajišťuje spolehlivé odfouknutí při překročení otevíracího přetlaku v systému " + medium + " (" + pressure + "). Dodáváno s protokolem o seřízení z naší zkušební stolice dle ČSN EN 12266-1.";
    } else if (func.indexOf("regulace") !== -1) {
        recTitle = "Regulační dvoucestný ventil VEDA se servopohonem";
        recDesc = "Umožňuje plynulé modulační řízení průtoku média " + medium + " dle signálu nadřazeného systému (0-10V / 4-20mA). Tlaková třída " + pressure + ".";
    } else if (func.indexOf("uzavření") !== -1) {
        recTitle = "Průmyslový kulový kohout KPC nebo víkové šoupátko";
        recDesc = "Spolehlivý obousměrný uzávěr s plným průtokem bez tlakových ztrát pro " + medium + " v tlaku " + pressure + ".";
    } else if (func.indexOf("zpětného") !== -1) {
        recTitle = "Zpětný ventil SOCLA 812 (mezipřírubový nerezový)";
        recDesc = "Zamezuje zpětnému toku média " + medium + " v soustavě " + pressure + ". Vyznačuje se velmi nízkým otevíracím přetlakem a vysokou těsností dosedacích ploch.";
    } else if (func.indexOf("kondenzátu") !== -1) {
        recTitle = "Plovákový odvaděč kondenzátu s odvzdušněním";
        recDesc = "Zajišťuje plynulý odvod parního kondenzátu bez prodlev a bez ztrát ostré páry pro jmenovitý tlak " + pressure + ".";
    } else {
        recTitle = "Přímočinný redukční ventil GEDIP s membránovým ovládáním";
        recDesc = "Samovládací regulátor tlaku pro " + medium + " v soustavě " + pressure + ". Vyznačuje se dlouhou životností, bezúdržbovým chodem a vysokou přesností regulace bez pomocné energie.";
    }

    if (titleEl) titleEl.textContent = recTitle;
    if (descEl) descEl.textContent = recDesc;

    if (mailtoBtn) {
        const subject = encodeURIComponent("Poptávka armatury: " + recTitle);
        const body = encodeURIComponent(
            "Dobrý den pane Dopito,\n\npoptáváme u společnosti P.A. servis spol. s r.o. následující armaturu:\n\n" +
            "• Doporučený typ: " + recTitle + "\n" +
            "• Médium: " + medium + "\n" +
            "• Jmenovitý tlak: " + pressure + "\n" +
            "• Účel: " + func + "\n\n" +
            "Prosíme o zaslání technického listu a cenové/termínové nabídky.\n\nS pozdravem,"
        );
        mailtoBtn.href = "mailto:paservis@paservis.cz?subject=" + subject + "&body=" + body;
    }
}

function copyIco(ico, btn) {
    navigator.clipboard.writeText(ico).then(() => {
        const orig = btn.textContent;
        btn.textContent = "Zkopírováno!";
        setTimeout(() => {
            btn.textContent = orig;
        }, 2000);
    });
}

function handlePaSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("paName").value;
    const email = document.getElementById("paEmail").value;
    const phone = document.getElementById("paPhone").value;
    const cat = document.getElementById("paCategory") ? document.getElementById("paCategory").value : "";
    const msg = document.getElementById("paMessage").value;

    const subject = encodeURIComponent("Zpráva z webu od: " + name + " (" + cat + ")");
    const body = encodeURIComponent(
        "Dobrý den pane Dopito,\n\nzasílám poptávku na servis a dodávku armatur:\n\n" +
        "Firma / Jméno: " + name + "\n" +
        "E-mail: " + email + "\n" +
        "Telefon: " + phone + "\n" +
        "Sortiment: " + cat + "\n\n" +
        "Požadavek:\n" + msg + "\n"
    );

    window.location.href = "mailto:paservis@paservis.cz?subject=" + subject + "&body=" + body;
}

const paTechData = {
    "gedip-17": {
        title: "Přímočinné redukční ventily GEDIP 17-3 a 17-5",
        cat: "Přímočinné ventily",
        desc: "Samočinné regulátory bez pomocné energie pro přesné udržení výstupního tlaku páry a technických plynů.",
        specs: [
            ["Médium", "Pára, technické plyny, voda"],
            ["Tlaková třída", "PN 16 – PN 40"],
            ["Světlost", "DN 15 – DN 100"],
            ["Pracovní teplota", "do 350 °C"],
            ["Norma", "ČSN EN 12266-1"]
        ]
    },
    "polix-s15": {
        title: "Pojistné ventily POLIX S15 plnozdvižné",
        cat: "Pojistné ventily",
        desc: "Pružinové pojistné ventily k jištění kotlů a tlakových nádob s protokolem o seřízení na zkušební stolici.",
        specs: [
            ["Médium", "Pára, stlačený vzduch, plyny, kapaliny"],
            ["Tlaková třída", "PN 16 – PN 63"],
            ["Světlost", "DN 15 – DN 200"],
            ["Pracovní teplota", "-10 °C až +400 °C"],
            ["Norma", "ČSN EN ISO 4126-1"]
        ]
    },
    "socla-812": {
        title: "Mezipřírubové zpětné ventily SOCLA 812",
        cat: "Zpětné ventily",
        desc: "Zamezení zpětného toku v horizontální i vertikální poloze s minimální tlakovou ztrátou.",
        specs: [
            ["Médium", "Pára, kondenzát, agresivní kapaliny"],
            ["Tlaková třída", "PN 16 – PN 40"],
            ["Světlost", "DN 15 – DN 200"],
            ["Materiál tělesa", "Nerez AISI 316"],
            ["Norma", "ČSN EN 12334"]
        ]
    },
    "veda-v30121": {
        title: "Regulační ventily VEDA & V30121 s pohony",
        cat: "Regulační armatury",
        desc: "Plynulá regulace průtoku a teploty s lineární nebo rovnoprocentní charakteristikou a servopohony.",
        specs: [
            ["Médium", "Pára, horká voda, glykol"],
            ["Tlaková třída", "PN 16 – PN 40"],
            ["Světlost", "DN 15 – DN 150"],
            ["Řízení", "Elektrické servopohony 230V / 24V, 4-20 mA"],
            ["Norma", "ČSN EN 60534"]
        ]
    },
    "vlnovcove-ventily": {
        title: "Vlnovcové uzavírací ventily hermetické",
        cat: "Uzavírací ventily",
        desc: "Stoprocentní hermetická těsnost vřetene eliminující úniky parního média do ovzduší.",
        specs: [
            ["Médium", "Pára, termooil, horká voda"],
            ["Tlaková třída", "PN 16 – PN 40"],
            ["Světlost", "DN 15 – DN 250"],
            ["Těsnění vřetene", "Vícevrstvý nerezový vlnovec"],
            ["Norma", "ČSN EN 13709"]
        ]
    },
    "odvadece-kondenzatu": {
        title: "Plovákové a termické odvaděče kondenzátu",
        cat: "Odvaděče kondenzátu",
        desc: "Plynulé automatické odvádění kondenzátu bez ztráty živé páry z parních spotřebičů.",
        specs: [
            ["Médium", "Parní kondenzát"],
            ["Tlaková třída", "PN 16 – PN 40"],
            ["Světlost", "DN 15 – DN 50"],
            ["Provedení", "Plovákový kuličkový, termický kapslový, termodynamický"],
            ["Norma", "ČSN EN 26704"]
        ]
    }
};

const paTechModal = document.getElementById("techModalBackdrop");
const paTechClose = document.getElementById("techModalClose");
const paTechTitle = document.getElementById("techModalTitle");
const paTechCat = document.getElementById("techModalCat");
const paTechRows = document.getElementById("techModalRows");
const paTechDesc = document.getElementById("techModalDesc");

document.querySelectorAll("[data-open-tech]").forEach(function(card) {
    card.addEventListener("click", function() {
        const key = card.getAttribute("data-open-tech");
        const item = paTechData[key];
        if (item && paTechModal) {
            if (paTechTitle) paTechTitle.textContent = item.title;
            if (paTechCat) paTechCat.textContent = item.cat;
            if (paTechDesc) paTechDesc.textContent = item.desc;
            if (paTechRows) {
                paTechRows.innerHTML = "";
                item.specs.forEach(function(s) {
                    const tr = document.createElement("tr");
                    tr.style.borderBottom = "1px solid #1e293b";
                    tr.innerHTML = '<td style="padding:8px; color:#94a3b8;">' + s[0] + '</td><td style="padding:8px; color:#ffffff; font-weight:600;">' + s[1] + '</td>';
                    paTechRows.appendChild(tr);
                });
            }
            paTechModal.style.display = "flex";
            paTechModal.classList.add("active");
        }
    });
});

if (paTechClose) {
    paTechClose.addEventListener("click", function() {
        if (paTechModal) {
            paTechModal.style.display = "none";
            paTechModal.classList.remove("active");
        }
    });
}
if (paTechModal) {
    paTechModal.addEventListener("click", function(e) {
        if (e.target === paTechModal) {
            paTechModal.style.display = "none";
            paTechModal.classList.remove("active");
        }
    });
}
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && paTechModal && paTechModal.classList.contains("active")) {
        paTechModal.style.display = "none";
        paTechModal.classList.remove("active");
    }
});
