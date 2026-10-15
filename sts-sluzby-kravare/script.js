document.addEventListener('DOMContentLoaded', function() {
    var tocniceData = [
        {
            model: 'KTK-6-650',
            dia: '650 mm',
            pitch: '590 mm',
            load: '25 kN (2,5 t)',
            weight: '28 kg',
            app: 'Zemědělské malotraktory, lehké přívěsy',
            cat: 'agri'
        },
        {
            model: 'KTK-6-850',
            dia: '850 mm',
            pitch: '790 mm',
            load: '45 kN (4,5 t)',
            weight: '36 kg',
            app: 'Zemědělské jednonápravové a dvounápravové vleky',
            cat: 'agri'
        },
        {
            model: 'KTK-10-850',
            dia: '850 mm',
            pitch: '788 mm',
            load: '65 kN (6,5 t)',
            weight: '44 kg',
            app: 'Střední zemědělské vleky a komunální technika',
            cat: 'agri'
        },
        {
            model: 'KTK-10-1000',
            dia: '1 000 mm',
            pitch: '940 mm',
            load: '100 kN (10,0 t)',
            weight: '58 kg',
            app: 'Nákladní silniční přívěsy, točnicové řízení',
            cat: 'road'
        },
        {
            model: 'KTK-12-1000',
            dia: '1 000 mm',
            pitch: '940 mm',
            load: '120 kN (12,0 t)',
            weight: '62 kg',
            app: 'Silniční dvounápravové přívěsy a kontejnery',
            cat: 'road'
        },
        {
            model: 'KTK-14-1100',
            dia: '1 100 mm',
            pitch: '1 040 mm',
            load: '140 kN (14,0 t)',
            weight: '72 kg',
            app: 'Těžké silniční přívěsy PANAV a nákladní doprava',
            cat: 'road'
        },
        {
            model: 'KTK-16-1100 (Dvouřadá)',
            dia: '1 100 mm',
            pitch: '1 040 mm',
            load: '200 kN (20,0 t)',
            weight: '98 kg',
            app: 'Dvouřadé točnice pro těžké točnicové podvozky',
            cat: 'heavy'
        },
        {
            model: 'KTK-16-1200 (Těžká řada)',
            dia: '1 200 mm',
            pitch: '1 130 mm',
            load: '300 kN (30,0 t)',
            weight: '125 kg',
            app: 'Nadrozměrná přeprava, těžké návěsy a podvalníky',
            cat: 'heavy'
        }
    ];

    var tableBody = document.getElementById('tocniceTableBody');
    var filterBtns = document.querySelectorAll('#tocniceFilterGroup .t-filter-btn');
    var searchInput = document.getElementById('tocniceSearchInput');

    var currentFilter = 'all';
    var currentQuery = '';

    function renderTocnice() {
        if (!tableBody) return;
        var filtered = tocniceData.filter(function(item) {
            var matchCat = (currentFilter === 'all') || (item.cat === currentFilter);
            var q = currentQuery.toLowerCase().trim();
            var matchQ = !q ||
                item.model.toLowerCase().indexOf(q) !== -1 ||
                item.dia.toLowerCase().indexOf(q) !== -1 ||
                item.app.toLowerCase().indexOf(q) !== -1;
            return matchCat && matchQ;
        });

        tableBody.innerHTML = '';
        filtered.forEach(function(t) {
            var tr = document.createElement('tr');
            tr.innerHTML = 
                '<td><strong style="color: #FFFFFF;">' + t.model + '</strong></td>' +
                '<td>' + t.dia + '</td>' +
                '<td>' + t.pitch + '</td>' +
                '<td><span style="color: #FEB2B2; font-weight: 700;">' + t.load + '</span></td>' +
                '<td>' + t.weight + '</td>' +
                '<td><small style="color: #8B949E;">' + t.app + '</small></td>' +
                '<td><button class="btn-poptat-mini" data-model="' + t.model + '">Poptat typ</button></td>';
            tableBody.appendChild(tr);
        });

        tableBody.querySelectorAll('.btn-poptat-mini').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var model = this.getAttribute('data-model');
                var msg = document.getElementById('sMessage');
                if (msg) {
                    msg.value = 'Dobrý den,\n\npoptáváme cenovou nabídku a technické parametry pro kuličkovou točnici: ' + model + '.\n\nPožadovaný počet kusů: [uveďte počet]\nPožadavek na vrtání přírub: [vrtaná / nevrtaná]\nTermín dodání: [uveďte termín]';
                }
                var cSec = document.getElementById('kontakt');
                if (cSec) {
                    cSec.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            renderTocnice();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentQuery = e.target.value;
            renderTocnice();
        });
    }

    renderTocnice();

    var machBtns = document.querySelectorAll('#machineryTabsNav .mach-tab-btn');
    var machPanels = document.querySelectorAll('.mach-tab-panel');

    machBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            machBtns.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            var targetId = 'pane-' + this.getAttribute('data-tab');
            machPanels.forEach(function(p) {
                if (p.id === targetId) {
                    p.style.display = 'block';
                } else {
                    p.style.display = 'none';
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

    var form = document.getElementById('stsForm');
    var formSuccess = document.getElementById('stsSuccess');
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
        var lat = 49.9312;
        var lon = 18.0125;
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
        marker.bindPopup('<strong>STS - služby Kravaře spol. s r.o.</strong><br>Kostelní 3315/2a<br>747 21 Kravaře').openPopup();
    }
});
