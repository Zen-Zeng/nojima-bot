import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite configuration for Project N‑Bot. This config sets a base of "/nojima-bot/" for
// GitHub Pages deployment. It also enables the SWC-based React plugin for fast compilation.
export default defineConfig({
  base: '/nojima-bot/',
  plugins: [react()]
});
