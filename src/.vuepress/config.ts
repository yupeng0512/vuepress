import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // 此处放置配置

  base: "/vuepress/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
