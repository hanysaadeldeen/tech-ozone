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
  // nitro: {
  //   port: 3001,
  //   host: "127.0.0.1",
  // },
  // devServer: {
  //   port: 3001,
  //   host: "127.0.0.1",
  // },

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
      title: "الشركة السعودية للأوزون :: للمشاريع والحلول البيئي والصحية",
      meta: [
        {
          name: "description",
          content:
            "نحن الشركة السعودية الأولى والرائدة في مجال التعقيم والتطهير بتقنية الأوزون، بخبرة تمتد منذ عام 2011 في تقديم حلول مبتكرة وصديقة للبيئة.",
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
      ogSiteName: "الشركة السعودية للأوزون :: للمشاريع والحلول البيئي والصحية",
      applicationName:
        "الشركة السعودية للأوزون :: للمشاريع والحلول البيئي والصحية",
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
  // build: {
  //   extractCSS: true,
  //   optimizeCSS: true,
  //   postcss: {
  //     plugins: {
  //       tailwindcss: {},
  //       autoprefixer: {},
  //       cssnano: {},
  //     },
  //   },
  // },
});
