# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🧪 Stress Testing (K6)

Ovaj projekat uključuje skriptu za testiranje opterećenja koristeći [K6](https://k6.io/). Skripta simulira opterećenje do 200 istovremenih virtuelnih korisnika kako bi se proverile performanse sajta.

**Skripta:** `stress-test.js`

**Pokretanje testa:**

1.  **Build produkcijske verzije sajta:**
    ```sh
    npm run build
    ```
2.  **Pokretanje preview servera:**
    *   Ako ste zadržali izmene u `astro.config.mjs` (sa `host: true` i `port: 8080`):
        ```sh
        npm run preview
        ```
        Server bi trebalo da bude dostupan na `http://<VAŠA-LOKALNA-IP>:8080/`. Proverite izlaz terminala za tačnu adresu.
    *   Ako ste vratili `astro.config.mjs` na originalno stanje:
        ```sh
        npm run preview -- --host <VAŠA-LOKALNA-IP> --port <PORT>
        ```
        Zamenite `<VAŠA-LOKALNA-IP>` i `<PORT>` sa adresom na kojoj server radi.
3.  **Ažuriranje K6 skripte:** Uverite se da `stress-test.js` cilja ispravnu adresu servera (npr. `http://192.168.16.1:8080/`).
4.  **Pokretanje K6:**
    ```sh
    k6 run stress-test.js
    ```

**Rezultati poslednjeg testa (200 VU):**

Test je uspešno završen na adresi `http://192.168.16.1:8080/` sa sledećim ključnim metrikama:
*   **Greške (http_req_failed):** 0.00%
*   **Vreme odgovora (http_req_duration p95):** ~2.54ms (95% zahteva brže od ove vrednosti)
*   **Provera statusa (checks):** 100% uspešno

Ovi rezultati pokazuju da sajt odlično podnosi opterećenje od 200 virtuelnih korisnika u testnom okruženju.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
