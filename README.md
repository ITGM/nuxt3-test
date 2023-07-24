# Nuxt 3 web template

以 h5 为模板

## 需求和解决方案

- 服务端渲染 SSR
  - [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- 工具函数
  - [vueUse](https://vueuse.org/)
- css 预处理
  - sass
- 原子化 css,本地 svg 转 icon
  - [unocss](https://unocss.dev/)
  - pnpm add @iconify/utils @unocss/nuxt unocss -D
- 状态管理和持久化
  - [pinia](https://pinia.vuejs.org/) + [Pinia-Plugin-Persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/)
- 多语言
  - [i18n](https://i18n.nuxtjs.org/)
- H5 UI 框架和适配解决方案
  - [vant 4](https://vant-ui.github.io/vant/#/zh-CN) + [postcss-px-to-viewport-8-plugin ](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin)
