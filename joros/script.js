document.addEventListener('DOMContentLoaded', function() {
    var references = (typeof allJorosReferences !== 'undefined') ? allJorosReferences : [];
    
    var cardsContainer = document.getElementById('refCardsContainer');
    var tableBody = document.getElementById('refTableBody');
    var tableWrapper = document.getElementById('refTableContainer');
    var searchInput = document.getElementById('refSearchInput');
    var filterPills = document.querySelectorAll('#refFilterPills .pill-btn');
    var counterEl = document.getElementById('refCounter');
    var viewGridBtn = document.getElementById('viewGridBtn');
    var viewTableBtn = document.getElementById('viewTableBtn');

    var currentFilter = 'all';
    var currentQuery = '';
    var currentView = 'grid';

    function renderReferences() {
        var filtered = references.filter(function(r) {
            var matchCat = (currentFilter === 'all') || (r.category === currentFilter);
            var q = currentQuery.toLowerCase().trim();
            var matchQ = !q ||
                r.title.toLowerCase().indexOf(q) !== -1 ||
                r.investor.toLowerCase().indexOf(q) !== -1 ||
                r.scope.toLowerCase().indexOf(q) !== -1 ||
                r.category_label.toLowerCase().indexOf(q) !== -1;
            return matchCat && matchQ;
        });

        if (counterEl) {
            counterEl.textContent = 'Zobrazeno ' + filtered.length + ' z ' + references.length + ' referenčních staveb';
        }

        if (cardsContainer) {
            cardsContainer.innerHTML = '';
            filtered.forEach(function(r) {
                var card = document.createElement('div');
                card.className = 'ref-card';
                card.innerHTML = 
                    '<div class="ref-card-img">' +
                        '<img src="' + r.img + '" alt="' + r.title + '" loading="lazy">' +
                        '<span class="ref-card-badge">' + r.category_label + '</span>' +
                    '</div>' +
                    '<div class="ref-card-body">' +
                        '<h3 class="ref-card-title">' + r.title + '</h3>' +
                        '<div class="ref-card-investor">🏛️ ' + r.investor + '</div>' +
                        '<p class="ref-card-scope">' + r.scope + '</p>' +
                        '<div class="ref-card-footer">' +
                            '<span>Ostrava a MSK</span>' +
                            '<span>✓ ' + r.year + '</span>' +
                        '</div>' +
                    '</div>';
                cardsContainer.appendChild(card);
            });
        }

        if (tableBody) {
            tableBody.innerHTML = '';
            filtered.forEach(function(r) {
                var tr = document.createElement('tr');
                tr.innerHTML = 
                    '<td><strong>' + r.title + '</strong><br><small style="color: #94A3B8;">' + r.scope + '</small></td>' +
                    '<td><span style="color: #F59E0B; font-weight: 600;">' + r.investor + '</span></td>' +
                    '<td><span class="badge-cert">' + r.category_label + '</span></td>' +
                    '<td><span style="color: #4ADE80; font-weight: 600;">✓ ' + r.year + '</span></td>';
                tableBody.appendChild(tr);
            });
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentQuery = e.target.value;
            renderReferences();
        });
    }

    filterPills.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterPills.forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.getAttribute('data-category');
            renderReferences();
        });
    });

    if (viewGridBtn && viewTableBtn) {
        viewGridBtn.addEventListener('click', function() {
            viewGridBtn.classList.add('active');
            viewTableBtn.classList.remove('active');
            cardsContainer.style.display = 'grid';
            tableWrapper.style.display = 'none';
        });
        viewTableBtn.addEventListener('click', function() {
            viewTableBtn.classList.add('active');
            viewGridBtn.classList.remove('active');
            cardsContainer.style.display = 'none';
            tableWrapper.style.display = 'block';
        });
    }

    renderReferences();

    var wizScope = 'Inženýrské sítě a přípojky';
    var wizBuilding = 'Bytový dům / SVJ';
    var wizLoc = 'Ostrava a okolí';
    var wizResultText = document.getElementById('wizResultText');

    function updateWizSummary() {
        if (wizResultText) {
            wizResultText.textContent = 'Poptávka: ' + wizScope + ' • ' + wizBuilding + ' • ' + wizLoc;
        }
    }

    document.querySelectorAll('#wizScopeGroup .wiz-pill').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#wizScopeGroup .wiz-pill').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            wizScope = this.getAttribute('data-val');
            updateWizSummary();
        });
    });

    document.querySelectorAll('#wizBuildingGroup .wiz-pill').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#wizBuildingGroup .wiz-pill').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            wizBuilding = this.getAttribute('data-val');
            updateWizSummary();
        });
    });

    document.querySelectorAll('#wizLocGroup .wiz-pill').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#wizLocGroup .wiz-pill').forEach(function(b) { b.classList.remove('active'); });
            this.classList.add('active');
            wizLoc = this.getAttribute('data-val');
            updateWizSummary();
        });
    });

    var wizApplyBtn = document.getElementById('wizApplyBtn');
    if (wizApplyBtn) {
        wizApplyBtn.addEventListener('click', function() {
            var msg = document.getElementById('formMessage');
            if (msg) {
                msg.value = 'Dobrý den,\n\nmáme zájem o cenovou nabídku a konzultaci pro stavební projekt:\n- Obor: ' + wizScope + '\n- Typ objektu: ' + wizBuilding + '\n- Lokalita: ' + wizLoc + '\n\nProsíme o kontaktování za účelem domluvy prohlídky a předání podkladů.';
            }
            var contactSec = document.getElementById('kontakt');
            if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

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

    var form = document.getElementById('jorosForm');
    var formSuccess = document.getElementById('formSuccess');
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
        var lat = 49.8038;
        var lon = 18.2917;
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
        marker.bindPopup('<strong>JOROS s.r.o.</strong><br>Přibylova 713/15<br>719 00 Ostrava - Kunčice').openPopup();
    }
});
