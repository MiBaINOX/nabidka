# HAKOV, a.s. – Zmodernizovaný web a lokální aplikace

Moderní, plně responzivní a interaktivní webová prezentace pro společnost **HAKOV, a.s.** (specialista na čistírny odpadních vod a vodohospodářské technologie).

---

## 🌟 Klíčová vylepšení oproti původní verzi

1. **Moderní vizuální design a typografie**:
   - Čistý inženýrský styl s vodohospodářskou tématikou (hluboká modř, azurová, smaragdové akcenty).
   - 100% responzivní rozhraní optimalizované pro mobily, tablety i 4K monitory.
   - Podpora **Světlého i Tmavého režimu (Dark mode)** s ukládáním preference.

2. **Dynamický Hero slider**:
   - Automatický i manuální přechod snímků z autentických realizací.
   - Plynulé animace a moderní CTA tlačítka pro okamžité poptávky.

3. **Interaktivní katalog referenčních staveb (62+ projektů)**:
   - Okamžité fulltextové vyhledávání podle názvu obce, investora nebo stavby.
   - Filtrování podle kategorií (*Intenzifikace a rekonstrukce, Obecní ČOV, Průmyslové ČOV, Odvodnění kalů*).
   - Přepínání mezi moderním **Katalogem karet (Grid)** a přehlednou **Datovou tabulkou**.

4. **Interaktivní fotogalerie a Lightbox**:
   - Všech 22 autentických fotografií realizovaných čistíren (aktivační nádrže, dosazovací nádrže, kalové hospodářství, plynojemy, odvodňovací linky).
   - Celoobrazovkový Lightbox s ovládáním klávesnicí (šipky, Escape), popisem a počítadlem.

5. **Pobočky a kontakty s mapami**:
   - Přepínání mezi centrálou v **Hranicích** a projekční kanceláří v **Brně**.
   - Integrované interaktivní OpenStreetMap mapy.
   - Karty členů týmu s přímým voláním na jedno kliknutí (`tel:`) a odesláním e-mailu (`mailto:`).
   - Tlačítka pro rychlé kopírování IČO, DIČ a čísla bankovního účtu do schránky.

6. **Poptávkový formulář**:
   - Moderní formulář s validací a okamžitou notifikací (Toast notification).

7. **Zpětná kompatibilita URL**:
   - Zachovány odkazy z původního webu (`profil-spolecnosti.html`, `certifikace.html`, `identifikacni-udaje.html`, `kontakty.html`).

---

## 🚀 Jak spustit lokální verzi

Projekt je navržen tak, aby fungoval **zcela samostatně a offline bez nutnosti instalace externích balíčků**.

### Možnost A: Otevření přímo v prohlížeči (Bez serveru)
Stačí dvakrát kliknout na soubor:
`index.html` v této složce a web se otevře v jakémkoliv moderním prohlížeči (Chrome, Edge, Firefox, Safari).

### Možnost B: Spuštění lokálního HTTP serveru
V této složce spusťte v terminálu:
```bash
node server.js
```
nebo
```bash
npm start
```
A v prohlížeči otevřete adresu:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Struktura složek a souborů

```
hakov-web/
├── index.html                   # Hlavní moderní jednostránková aplikace
├── profil-spolecnosti.html      # Zpětně kompatibilní přesměrování
├── certifikace.html             # Zpětně kompatibilní přesměrování
├── identifikacni-udaje.html     # Zpětně kompatibilní přesměrování
├── kontakty.html                # Zpětně kompatibilní přesměrování
├── data.json                    # Strukturovaná data referencí, týmu a fotek
├── server.js                    # Lehký lokální HTTP server (bez závislostí)
├── package.json                 # Konfigurace projektu
├── README.md                    # Dokumentace k projektu
├── styles/
│   └── main.css                 # Kompletní CSS design systém a styly
├── scripts/
│   └── app.js                   # Interaktivní skripty (vyhledávání, filtry, lightbox, téma)
└── assets/
    ├── brand/                   # Loga a favicon společnosti
    ├── slides/                  # Snímky pro Hero banner
    ├── gallery/                 # Fotografie z realizací ČOV (plné i náhledy)
    └── cert/                    # Certifikáty ISO 9001 / 14001 / OHSAS
```
