# LogicLabs Network

Profesionalni marketinški i portfolio sajt za LogicLabs Network, izrađen uz **Astro 5** i **Tailwind CSS 4**. Projekat je optimizovan za statičku isporuku, brz učitavanje stranica i jasan prikaz usluga, portfolija i kontakt kanala.

## Tehnologije

- **Astro 5** za statički rendering i organizaciju stranica.
- **Tailwind CSS 4** za dizajn sistem i utility-first stilizovanje.
- **AOS** za diskretne scroll animacije.
- **Sentry** integracija za produkcijski monitoring.
- **GitHub Pages** deploy kroz `gh-pages` skriptu.

## Struktura projekta

```text
/
├── public/                 # Statički asset-i
├── src/
│   ├── assets/             # Logo i interni asset-i
│   ├── components/         # UI sekcije i reusable komponente
│   ├── layouts/            # Globalni layout i SEO meta podaci
│   ├── pages/              # Astro i Markdown stranice
│   └── styles/             # Globalni stilovi
├── astro.config.mjs        # Astro konfiguracija i base path
├── stress-test.js          # K6 skripta za load test
└── package.json            # Skripte i zavisnosti
```

## Pokretanje lokalno

```sh
npm install
npm run dev
```

Podrazumevani development server je dostupan na `http://localhost:8080/` zbog konfiguracije u `astro.config.mjs`.

## Build i preview

```sh
npm run build
npm run preview
```

## Kvalitet i provere

Za proveru tipova i Astro validaciju:

```sh
npm run astro check
```

Za proveru produkcijskog build-a:

```sh
npm run build
```

## Deploy

Deploy na GitHub Pages:

```sh
npm run deploy
```

Aplikacija koristi sledeće vrednosti:

- `site`: `https://UnlimitedEdition.github.io`
- `base`: `/LogicLabs-Network`

## Load test

U repozitorijumu postoji `stress-test.js` za K6 testiranje opterećenja.

Primer toka:

```sh
npm run build
npm run preview
k6 run stress-test.js
```

Po potrebi ažuriraj URL unutar K6 skripte tako da pokazuje na aktivan preview server.
