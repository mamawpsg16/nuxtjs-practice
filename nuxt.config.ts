import dotenv from 'dotenv';
dotenv.config();
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    apiUrlv1: process.env.API_URL,
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      apiUrl: process.env.API_URL,
    }
  },
  css: [
    '~/assets/css/main.css', // Path to your CSS file
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/pages',
      },
    },
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  
})
