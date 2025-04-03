// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://UnlimitedEdition.github.io', // Osnovni domen za GitHub Pages
  base: '/LogicLabs-Network', // Vraćena base opcija
  server: {
    host: true, // Omogućava pristup preko mrežne IP adrese (npr. 192.168.0.40)
    port: 8080, // Postavlja podrazumevani port na 8080
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
