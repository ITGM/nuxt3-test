// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@vant/nuxt", "@unocss/nuxt", "@vueuse/nuxt", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  pinia: {
    autoImports: [["defineStore", "definePiniaStore"]],
  },
  postcss: {
    plugins: {
      "postcss-px-to-viewport-8-plugin": {
        viewportWidth: 750,
        exclude: [/node_modules/],
      },
    },
  },
});
