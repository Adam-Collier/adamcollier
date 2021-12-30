import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  shortcuts: [
    {
      btn: "bg-neutral-900 hover:bg-neutral-700 text-white py-2 px-4 rounded mt-2",
    },
  ],
  variants: [
    // href: hover:
    (matcher) => {
      if (!matcher.startsWith("href:")) return matcher;
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(5),
        selector: (s) => `${s} a`,
      };
    },
  ],
  presets: [presetUno(), presetIcons()],
});
