import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css' // 👈 добавили Font Awesome
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/icon'
  ]
});
