import { defineConfig, presetAttributify, presetTypography, presetUno, presetWebFonts, presetIcons } from "unocss";

export default defineConfig({
  shortcuts: [
    {
      "border~": "border-2 border-gray-100",
      "flex~": "flex justify-center items-center",
      "flex-col~": "flex flex-col justify-center items-center",
      "bg~": "bg-cover bg-center bg-no-repeat",
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        carbon: () => import("@iconify-json/carbon").then((i) => i.icons as any),
      },
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
});
