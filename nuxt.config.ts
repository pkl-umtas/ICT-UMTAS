// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  modules: ['@nuxtjs/google-fonts'],
  devtools: { enabled: false },
  app:{
    head:{
      script:[{
        src:'https://cdn.jsdelivr.net/npm/bootstrap@5.2/dist/js/bootstrap.bundle.min.js'
      }]
    }
  }
})
