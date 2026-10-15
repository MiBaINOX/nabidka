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
    const counters = scope.querySelectorAll ? scope.querySelectorAll(".counter") : [scope];
    counters.forEach(counter => {
        if (counter.dataset.counted) return;
        counter.dataset.counted = "true";
        const target = parseInt(counter.dataset.target, 10);
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

function updateValveRecommendation() {
    const medium = document.getElementById("selMedium") ? document.getElementById("selMedium").value : "";
    const pressure = document.getElementById("selPressure") ? document.getElementById("selPressure").value : "";
    const func = document.getElementById("selFunction") ? document.getElementById("selFunction").value : "";

    const titleEl = document.getElementById("recTitle");
    const descEl = document.getElementById("recDetails");
    const mailtoBtn = document.getElementById("recMailto");

    let recTitle = "Přímočinný redukční ventil GEDIP";
    let recDesc = "Vhodný pro páru, vzduch i vodu. Bez nutnosti pomocné energie reguluje výstupní tlak.";

    if (func.indexOf("pojistný") !== -1) {
        recTitle = "Plnozdvižný pojistný ventil POLIX (pružinový)";
        recDesc = "Zajišťuje spolehlivé odfouknutí při překročení otevíracího přetlaku v systému " + medium + " (" + pressure + "). Dodáváno s protokolem o nastavení a seřízení z naší zkušební stolice.";
    } else if (func.indexOf("regulace") !== -1) {
        recTitle = "Regulační dvoucestný ventil VEDA se servopohonem";
        recDesc = "Umožňuje plynulé modulační řízení průtoku média " + medium + " dle signálu nadřazeného systému (0-10V / 4-20mA). Tlaková třída " + pressure + ".";
    } else if (func.indexOf("uzavření") !== -1) {
        recTitle = "Průmyslový kulový kohout nebo šoupátko";
        recDesc = "Spolehlivý obousměrný uzávěr s plným průtokem bez tlakových ztrát pro " + medium + " v tlaku " + pressure + ".";
    } else {
        recTitle = "Přímočinný redukční ventil GEDIP s membránovým ovládáním";
        recDesc = "Samovládací regulátor tlaku pro " + medium + " v soustavě " + pressure + ". Vyznačuje se dlouhou životností, bezúdržbovým chodem a vysokou přesností regulace.";
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
            "Prosíme o zaslání technického listu a informaci o termínu dodání či seřízení.\n\nS pozdravem,"
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
    const msg = document.getElementById("paMessage").value;

    const subject = encodeURIComponent("Zpráva z webu od: " + name);
    const body = encodeURIComponent(
        "Dobrý den pane Dopito,\n\nzasílám poptávku na servis/dodávku armatur:\n\n" +
        "Firma / Jméno: " + name + "\n" +
        "E-mail: " + email + "\n" +
        "Telefon: " + phone + "\n\n" +
        "Požadavek:\n" + msg + "\n"
    );

    window.location.href = "mailto:paservis@paservis.cz?subject=" + subject + "&body=" + body;
}
