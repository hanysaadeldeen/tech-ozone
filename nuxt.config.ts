// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-lucide-icons",
    "@nuxtjs/i18n",
    "nuxt-seo-utils",
    "@nuxtjs/sitemap",
  ],
  site: {
    url: "https://o3.saudiozone.com.sa/",
  },
  sitemap: {
    siteUrl: "https://o3.saudiozone.com.sa/",
    sources: ["/__sitemap__/blogs"],
  },
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
      { code: "ar", name: "Arabic" },
      { code: "en", name: "English" },
    ],
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts",
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
      meta: [
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image",
          content: "https://o3.saudiozone.com.sa/LogoTap.png",
        },
        {
          name: "twitter:image",
          content: "https://o3.saudiozone.com.sa/LogoTap.png",
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
  seo: {
    meta: {
      ogSiteName: "الشركة السعودية للأوزون للمشاريع والحلول البيئي والصحية",
      applicationName:
        "الشركة السعودية للأوزون للمشاريع والحلول البيئي والصحية",
    },
  },
  routeRules: {
    "/en/**": {
      seoMeta: {
        ogSiteName: "Tech Ozone",
        applicationName: "Tech Ozone",
      },
    },
  },
});
