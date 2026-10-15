(function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref") === "nabidka") {
        if (!sessionStorage.getItem("ping_sent_az-stavby")) {
            sessionStorage.setItem("ping_sent_az-stavby", "true");
            const payload = {
                slug: "az-stavby",
                time: new Date().toISOString(),
                ua: navigator.userAgent
            };
            localStorage.setItem("nabidka_open_az-stavby", JSON.stringify(payload));
            if (window.NABIDKA_PING_URL) {
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
                } else {
                    new Image().src = window.NABIDKA_PING_URL + "?slug=az-stavby&t=" + Date.now();
                }
            }
        }
    }
})();

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
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
                    startCounters(entry.target);
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));

    updateInquiryPreview();
});

let countersStarted = false;
function startCounters(scope) {
    const counterElements = scope.querySelectorAll ? scope.querySelectorAll(".counter") : [scope];
    counterElements.forEach(counter => {
        if (counter.dataset.counted) return;
        counter.dataset.counted = "true";
        const target = parseInt(counter.dataset.target, 10);
        const duration = 1600;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
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

function filterProjects(cat, btn) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const items = document.querySelectorAll(".project-item");
    items.forEach(item => {
        if (cat === "all" || item.dataset.cat === cat) {
            item.style.display = "block";
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, 50);
        } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(15px)";
            setTimeout(() => {
                item.style.display = "none";
            }, 250);
        }
    });
}

function updateInquiryPreview() {
    const typ = document.getElementById("typStavby") ? document.getElementById("typStavby").value : "";
    const plocha = document.getElementById("rozsahPlochy") ? document.getElementById("rozsahPlochy").value : "";
    const stav = document.getElementById("stavProjektu") ? document.getElementById("stavProjektu").value : "";
    const lokalita = document.getElementById("lokalitaRealizace") ? document.getElementById("lokalitaRealizace").value : "Olomouc a okolí";

    const summaryEl = document.getElementById("summaryText");
    const mailtoBtn = document.getElementById("calcMailtoBtn");

    const summary = "Poptávka realizace: " + typ + " | Rozsah: " + plocha + " | Stav přípravy: " + stav + " | Místo realizace: " + lokalita;
    if (summaryEl) {
        summaryEl.textContent = summary;
    }

    if (mailtoBtn) {
        const subject = encodeURIComponent("Poptávka realizace: " + typ);
        const body = encodeURIComponent(
            "Dobrý den,\n\npoptávám u společnosti A-Z STAVBY s.r.o. realizaci s následujícími parametry:\n\n" +
            "• Typ zakázky: " + typ + "\n" +
            "• Rozsah / plocha: " + plocha + "\n" +
            "• Stav přípravy: " + stav + "\n" +
            "• Lokalita stavby: " + lokalita + "\n\n" +
            "Prosím o kontaktování za účelem nezávazné konzultace a dalšího postupu.\n\nS pozdravem,"
        );
        mailtoBtn.href = "mailto:zdenek@azstavby.cz?subject=" + subject + "&body=" + body;
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

function handleDirectMessage(event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const phone = document.getElementById("contactPhone").value;
    const msg = document.getElementById("contactMsg").value;

    const subject = encodeURIComponent("Zpráva z webu od: " + name);
    const body = encodeURIComponent(
        "Dobrý den,\n\nzasílám Vám zprávu z webových stránek A-Z STAVBY s.r.o.:\n\n" +
        "Jméno: " + name + "\n" +
        "E-mail: " + email + "\n" +
        "Telefon: " + phone + "\n\n" +
        "Zpráva:\n" + msg + "\n"
    );

    window.location.href = "mailto:zdenek@azstavby.cz?subject=" + subject + "&body=" + body;
}
