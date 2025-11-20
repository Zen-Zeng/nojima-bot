import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for Project N‑Bot. This config sets a base of "./" so that the
// output can be hosted under any path (e.g. GitHub Pages). It also enables the
// SWC-based React plugin for fast compilation.
export default defineConfig({
  base: './',
  plugins: [react()]
});
