import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Firebase Hosting / Netlify 모두 루트 경로 사용
const base = '/'

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('firebase/firestore') || id.includes('@firebase/firestore')) return 'vendor-firestore';
          if (id.includes('firebase/messaging') || id.includes('@firebase/messaging')) return 'vendor-messaging';
          if (id.includes('firebase') || id.includes('@firebase')) return 'vendor-firebase';
          if (id.includes('react-router')) return 'vendor-router';
          if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
          return 'vendor';
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'firebase-messaging-sw.js'],
      manifest: {
        name: '함께할 일',
        short_name: '함께할 일',
        description: '둘이 함께하는 집안일 협업 앱',
        theme_color: '#6366f1',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        scope: base,
        start_url: base,
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: null,
      },
    }),
  ],
})
