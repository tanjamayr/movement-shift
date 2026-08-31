import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // The production site is served from the custom domain tanjamayr.de.
  // A project subpath such as /movement-shift/ would break asset URLs there.
  base: '/',
})
