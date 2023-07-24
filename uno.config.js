import { defineConfig, presetUno, presetIcons } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
export default defineConfig({
  presets: [
    presetRemToPx(), // postcss-px-to-viewport-8-plugin 是px转vw,所以rem转成px使用
    presetUno(), // uno 原子化类 https://tailwindcss.com/docs/installation
    presetIcons({
      // uno 自定义icon
      collections: {
        ass: FileSystemIconLoader("./assets/icons", (svg) => {
          return svg.replace(/(#333333|#333)/, "currentColor");
        }),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
