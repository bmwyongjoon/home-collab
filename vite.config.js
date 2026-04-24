import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// firebase-messaging-sw.js에 Firebase 설정 값을 주입하는 플러그인
function injectFirebaseSWConfig(env) {
  return {
    name: 'inject-firebase-sw-config',
    closeBundle() {
      const swPath = resolve('dist', 'firebase-messaging-sw.js')
      try {
        let content = readFileSync(swPath, 'utf-8')
        const replacements = {
          'self.__FIREBASE_API_KEY__': `"${env.VITE_FIREBASE_API_KEY}"`,
          'self.__FIREBASE_AUTH_DOMAIN__': `"${env.VITE_FIREBASE_AUTH_DOMAIN}"`,
          'self.__FIREBASE_PROJECT_ID__': `"${env.VITE_FIREBASE_PROJECT_ID}"`,
          'self.__FIREBASE_STORAGE_BUCKET__': `"${env.VITE_FIREBASE_STORAGE_BUCKET}"`,
          'self.__FIREBASE_MESSAGING_SENDER_ID__': `"${env.VITE_FIREBASE_MESSAGING_SENDER_ID}"`,
          'self.__FIREBASE_APP_ID__': `"${env.VITE_FIREBASE_APP_ID}"`,
        }
        Object.entries(replacements).forEach(([k, v]) => {
          content = content.replaceAll(k, v)
        })
        writeFileSync(swPath, content)
      } catch {
        // SW 파일이 없으면 건너뜀
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/home-collab/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'prompt',
        includeAssets: ['favicon.png', 'firebase-messaging-sw.js'],
        manifest: {
          name: '함께할 일',
          short_name: '함께할 일',
          description: '둘이 함께하는 집안일 협업 앱',
          theme_color: '#6366f1',
          background_color: '#f8fafc',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/home-collab/',
          start_url: '/home-collab/',
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
      injectFirebaseSWConfig(env),
    ],
  }
})
