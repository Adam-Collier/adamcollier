import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  shortcuts: [
    {
      btn: "bg-neutral-900 hover:bg-neutral-700 text-white py-2 px-4 rounded mt-2",
    },
  ],
  presets: [presetUno(), presetIcons()],
});
