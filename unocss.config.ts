import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      btn: 'bg-neutral-900 hover:bg-neutral-700 text-white py-2 px-4 rounded mt-2',
    },
  ],
  rules: [
    [
      /^form-select$/,
      () => ({
        'background-image': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        'background-size': '1.5rem 1.5rem',
        'background-position': 'right 0.55rem center',
      }),
    ],
  ],
  variants: [
    // href: hover:
    (matcher) => {
      if (!matcher.startsWith('href:')) return matcher
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(5),
        selector: (s) => `${s} a`,
      }
    },
  ],
  presets: [presetUno(), presetIcons()],
})
