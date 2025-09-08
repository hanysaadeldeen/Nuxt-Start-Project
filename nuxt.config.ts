// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-lucide-icons", "@nuxtjs/i18n"],
    components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: "ar",
    strategy: "prefix_except_default",
    locales: [
      { code: "ar", name: "Arabic", file: "ar.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    detectBrowserLanguage: false,
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
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
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
