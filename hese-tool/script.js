(function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref") === "nabidka") {
        if (!sessionStorage.getItem("ping_sent_hese-tool")) {
            sessionStorage.setItem("ping_sent_hese-tool", "true");
            const payload = {
                slug: "hese-tool",
                time: new Date().toISOString(),
                ua: navigator.userAgent
            };
            localStorage.setItem("nabidka_open_hese-tool", JSON.stringify(payload));
            if (window.NABIDKA_PING_URL) {
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(window.NABIDKA_PING_URL, JSON.stringify(payload));
                } else {
                    new Image().src = window.NABIDKA_PING_URL + "?slug=hese-tool&t=" + Date.now();
                }
            }
        }
    }
})();

function toggleTechNav() {
    const nav = document.querySelector(".tech-nav");
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
                    startHeseCounters(entry.target);
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach(el => observer.observe(el));

    runTechConfigurator();
});

function startHeseCounters(scope) {
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

function switchTechTab(tabId, btn) {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => {
        pane.style.display = "none";
        pane.classList.remove("active");
    });

    const target = document.getElementById("tab-" + tabId);
    if (target) {
        target.style.display = "block";
        setTimeout(() => {
            target.classList.add("active");
        }, 30);
    }
}

function runTechConfigurator() {
    const mat = document.getElementById("cfgMaterial") ? document.getElementById("cfgMaterial").value : "";
    const weight = document.getElementById("cfgWeight") ? document.getElementById("cfgWeight").value : "";
    const crane = document.getElementById("cfgCrane") ? document.getElementById("cfgCrane").value : "";

    const titleEl = document.getElementById("resTitle");
    const descEl = document.getElementById("resDesc");
    const mailtoBtn = document.getElementById("cfgMailtoBtn");

    let recTitle = "Elektropermanentní břemenový magnet";
    let recDesc = "Vhodný pro rychlou manipulaci s břemeny bez rizika odpadnutí.";

    if (mat.indexOf("svitky") !== -1 || mat.indexOf("Svitky") !== -1) {
        recTitle = "Motorické kleště na svitky nebo C-hák s protiváhou";
        recDesc = "Umožňují šetrné uchopení svitků plechů bez deformace okrajů. Navrženo pro nosnost " + weight + " s přímým zavěšením na " + crane + ".";
    } else if (mat.indexOf("profily") !== -1 || mat.indexOf("trubek") !== -1) {
        recTitle = "Lineární jeřábová traverza s nastavitelným roztečem háků";
        recDesc = "Zajišťuje rovnoměrné podepření dlouhého břemene bez průhybu. Kapacita dimenzována na " + weight + " pro " + crane + ".";
    } else if (mat.indexOf("celky") !== -1 || mat.indexOf("konstrukce") !== -1) {
        recTitle = "Rámová prostorová H-traverza s bezpečnostními háky";
        recDesc = "Čtyřbodové uchycení technologických celků a rámů pro " + crane + " s nosností " + weight + ".";
    } else {
        recTitle = "Elektropermanentní magnetický nosič plechů a výpalků";
        recDesc = "Bezpečné uchycení ocelových tabulí a dílců do " + weight + ". Břemeno je drženo i při výpadku napájení jeřábu (" + crane + ").";
    }

    if (titleEl) titleEl.textContent = recTitle;
    if (descEl) descEl.textContent = recDesc;

    if (mailtoBtn) {
        const subject = encodeURIComponent("Poptávka zařízení: " + recTitle);
        const body = encodeURIComponent(
            "Dobrý den pane Kešeláku,\n\npoptáváme u společnosti HESE tool s.r.o. manipulační zařízení dle následujících provozních parametrů:\n\n" +
            "• Typ materiálu: " + mat + "\n" +
            "• Požadovaná nosnost: " + weight + "\n" +
            "• Používaný jeřáb: " + crane + "\n" +
            "• Doporučené řešení: " + recTitle + "\n\n" +
            "Prosíme o nezávaznou technickou konzultaci a cenovou specifikaci.\n\nS pozdravem,"
        );
        mailtoBtn.href = "mailto:info@hese-tool.cz?subject=" + subject + "&body=" + body;
    }
}

function copyTechIco(ico, btn) {
    navigator.clipboard.writeText(ico).then(() => {
        const orig = btn.textContent;
        btn.textContent = "Zkopírováno!";
        setTimeout(() => {
            btn.textContent = orig;
        }, 2000);
    });
}

function handleTechSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("techName").value;
    const email = document.getElementById("techEmail").value;
    const phone = document.getElementById("techPhone").value;
    const msg = document.getElementById("techMessage").value;

    const subject = encodeURIComponent("Poptávka z webu: " + name);
    const body = encodeURIComponent(
        "Dobrý den pane Kešeláku,\n\nzasílám poptávku na manipulační techniku / servis jeřábu:\n\n" +
        "Firma / Jméno: " + name + "\n" +
        "E-mail: " + email + "\n" +
        "Telefon: " + phone + "\n\n" +
        "Specifikace požadavku:\n" + msg + "\n"
    );

    window.location.href = "mailto:info@hese-tool.cz?subject=" + subject + "&body=" + body;
}
