// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-lucide-icons", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "ar", name: "Arabic", file: "ar.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      script: [],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
      ],
      title: "",
      meta: [
        {
          name: "description",
          content: "",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
