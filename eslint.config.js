import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  svelte: true,
}, {
  rules: {
    // To use `process` for GitHub Pages
    'node/prefer-global/process': ['off'],
  },
})
