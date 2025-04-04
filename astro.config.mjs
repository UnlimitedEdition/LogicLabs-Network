// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  // Osnovni domen za GitHub Pages
  site: 'https://UnlimitedEdition.github.io',

  // Vraćena base opcija
  base: '/LogicLabs-Network',

  server: {
    host: true, // Omogućava pristup preko mrežne IP adrese (npr. 192.168.0.40)
    port: 8080, // Postavlja podrazumevani port na 8080
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sentry()]
});