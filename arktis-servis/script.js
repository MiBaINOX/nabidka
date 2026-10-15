document.addEventListener('DOMContentLoaded', function() {
    var dualButtons = document.querySelectorAll('#heroDualSwitch .dual-btn');
    var heroTitle = document.getElementById('heroTitle');
    var heroDesc = document.getElementById('heroDesc');
    var heroBadgeText = document.getElementById('heroBadgeText');

    dualButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            dualButtons.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var mode = this.getAttribute('data-mode');
            if (mode === 'commercial') {
                heroTitle.innerHTML = 'Komerční VRF systémy a <span>průmyslové chlazení pro firmy</span>';
                heroDesc.textContent = 'Centrální klimatizační soustavy budov, chlazení serveroven s tolerancí ±0,5 °C a mrazicí boxy s plynulou regulací výkonu Digital Scroll.';
                heroBadgeText.textContent = 'Certifikace F-plyny & Havarijní servis 24/7 pro provozy';
            } else {
                heroTitle.innerHTML = 'Špičková klimatizace a tepelná čerpadla <span>s tichým chodem A+++</span>';
                heroDesc.textContent = 'Dodáváme prémiové klimatizace Daikin, Toshiba a LG pro byty, rodinné domy i komerční sféru. Od přesného výpočtu chladicího výkonu přes čistou montáž bez prachu až po záruční a pozáruční revize.';
                heroBadgeText.textContent = 'Autorizovaný prodejce a certifikovaný servis v celém MSK';
            }
        });
    });

    var areaSlider = document.getElementById('areaSlider');
    var areaDisplay = document.getElementById('areaDisplay');
    var outKw = document.getElementById('outKw');
    var outBtu = document.getElementById('outBtu');
    var outModelName = document.getElementById('outModelName');
    var roomChips = document.querySelectorAll('#calcRoomChips .chip-btn');
    var chkSun = document.getElementById('chkSun');
    var chkAttic = document.getElementById('chkAttic');
    var chkElectronics = document.getElementById('chkElectronics');

    var currentCoef = 0.10;
    var currentRoomLabel = 'Ložnice / Byt';

    function recalculatePower() {
        var area = parseInt(areaSlider.value, 10);
        var vol = Math.round(area * 2.6);
        areaDisplay.textContent = area + ' m² (cca ' + vol + ' m³)';

        var baseKw = area * currentCoef;
        if (chkSun && chkSun.checked) baseKw *= 1.15;
        if (chkAttic && chkAttic.checked) baseKw *= 1.20;
        if (chkElectronics && chkElectronics.checked) baseKw *= 1.25;

        var finalKw = Math.max(2.0, baseKw);
        var btu = Math.round(finalKw * 3412);

        outKw.textContent = finalKw.toFixed(1) + ' kW';
        outBtu.textContent = '(cca ' + btu.toLocaleString() + ' BTU/h)';

        if (finalKw <= 2.7) {
            outModelName.textContent = 'Daikin Perfera / Comfora 2,5 kW nebo Toshiba Seiya';
        } else if (finalKw <= 4.0) {
            outModelName.textContent = 'Toshiba Daiseikai 9 / Haori 3,5 kW nebo Daikin Stylish 3,5 kW';
        } else if (finalKw <= 6.0) {
            outModelName.textContent = 'LG Air Purification 5,0 kW nebo Daikin Perfera Multi-split';
        } else {
            outModelName.textContent = 'Komerční split / Skříňová jednotka od 6,0 kW výše';
        }
    }

    roomChips.forEach(function(chip) {
        chip.addEventListener('click', function() {
            roomChips.forEach(function(c) { c.classList.remove('active'); });
            this.classList.add('active');
            currentCoef = parseFloat(this.getAttribute('data-coef'));
            currentRoomLabel = this.textContent;
            recalculatePower();
        });
    });

    if (areaSlider) {
        areaSlider.addEventListener('input', recalculatePower);
    }
    if (chkSun) chkSun.addEventListener('change', recalculatePower);
    if (chkAttic) chkAttic.addEventListener('change', recalculatePower);
    if (chkElectronics) chkElectronics.addEventListener('change', recalculatePower);

    recalculatePower();

    var applyCalcBtn = document.getElementById('applyCalcBtn');
    if (applyCalcBtn) {
        applyCalcBtn.addEventListener('click', function() {
            var area = areaSlider.value;
            var kw = outKw.textContent;
            var model = outModelName.textContent;
            var msg = document.getElementById('aMessage');
            if (msg) {
                msg.value = 'Dobrý den,\n\nmám zájem o nabídku klimatizace podle kalkulátoru:\n- Účel místnosti: ' + currentRoomLabel + '\n- Plocha: ' + area + ' m²\n- Vypočtený výkon: ' + kw + '\n- Doporučený model: ' + model + '\n\nProsím o kontaktování za účelem nezávazné obhlídky na místě.';
            }
            var contactSec = document.getElementById('kontakt');
            if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    var techTabBtns = document.querySelectorAll('#techTabsNav .tech-tab-btn');
    var techTabContents = document.querySelectorAll('.tech-tab-content');

    techTabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            techTabBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var tabId = 'tab-' + this.getAttribute('data-tab');
            techTabContents.forEach(function(content) {
                if (content.id === tabId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    var mobileToggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    document.querySelectorAll('.copy-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var val = this.getAttribute('data-copy');
            if (val) {
                navigator.clipboard.writeText(val);
                var orig = this.textContent;
                this.textContent = 'Zkopírováno!';
                var self = this;
                setTimeout(function() {
                    self.textContent = orig;
                }, 1800);
            }
        });
    });

    var form = document.getElementById('arktisForm');
    var formSuccess = document.getElementById('arktisSuccess');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (formSuccess) {
                formSuccess.style.display = 'block';
                form.reset();
            }
        });
    }

    var mapEl = document.getElementById('map');
    if (mapEl && typeof L !== 'undefined') {
        var lat = 49.7915;
        var lon = 18.2582;
        var map = L.map('map', { scrollWheelZoom: false }).setView([lat, lon], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        var redPinSvg = '<svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M17 0C7.61 0 0 7.61 0 17C0 29.75 17 46 17 46C17 46 34 29.75 34 17C34 7.61 26.39 0 17 0Z" fill="#DC2626"/>' +
            '<circle cx="17" cy="17" r="7" fill="#FFFFFF"/>' +
            '<circle cx="17" cy="17" r="4" fill="#DC2626"/>' +
            '</svg>';

        var pinIcon = L.divIcon({
            html: redPinSvg,
            className: 'custom-map-pin',
            iconSize: [34, 46],
            iconAnchor: [17, 46],
            popupAnchor: [0, -42]
        });

        var marker = L.marker([lat, lon], { icon: pinIcon }).addTo(map);
        marker.bindPopup('<strong>Arktis Servis, s.r.o.</strong><br>Horní 1634/46<br>700 30 Ostrava - Hrabůvka').openPopup();
    }
});
