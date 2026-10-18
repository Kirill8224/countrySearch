
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/countrySearch/',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  server: {
    proxy: {
      '/api': {
        target: 'https://api.cityapi.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})