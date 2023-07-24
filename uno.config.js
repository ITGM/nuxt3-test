import { defineConfig, presetUno, presetIcons } from "unocss";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
export default defineConfig({
  presets: [
    presetUno(), // uno 原子化类
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
