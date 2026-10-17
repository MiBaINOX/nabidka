window.NABIDKA_PING_URL = "https://script.google.com/macros/s/AKfycbx5uVpVmwOQ260pC8ZNNkRfQg9r-jZZpR-gbfU4SxH_NyOJMAnxm4elQlB8QTWffRpj/exec";

(function() {
    function trackVisit() {
        try {
            if (localStorage.getItem("miba_admin") === "1") return;
            var urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get("ref") !== "nabidka") return;
            var pathParts = window.location.pathname.split("/").filter(Boolean);
            var slug = pathParts[pathParts.length - 1] || "";
            if (slug === "index.html" && pathParts.length >= 2) {
                slug = pathParts[pathParts.length - 2];
            }
            if (!slug) return;
            var sessionKey = "ping_" + slug;
            if (sessionStorage.getItem(sessionKey)) return;
            sessionStorage.setItem(sessionKey, "1");
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            var device = isMobile ? "Mobil" : "Počítač";
            if (window.NABIDKA_PING_URL) {
                var pingUrl = window.NABIDKA_PING_URL + "?slug=" + encodeURIComponent(slug) + "&device=" + encodeURIComponent(device) + "&time=" + encodeURIComponent(new Date().toISOString());
                if (navigator.sendBeacon) {
                    navigator.sendBeacon(pingUrl);
                } else {
                    var img = new Image();
                    img.src = pingUrl;
                }
            }
        } catch(e) {}
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", trackVisit);
    } else {
        trackVisit();
    }
})();
