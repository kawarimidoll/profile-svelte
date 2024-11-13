import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // https://svelte.dev/docs/kit/adapter-static#GitHub-Pages
    adapter: adapter({ fallback: '404.html' }),
    paths: {
      // eslint-disable-next-line node/prefer-global/process
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
    },
  },
}

export default config
