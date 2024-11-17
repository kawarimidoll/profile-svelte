<script lang='ts'>
  import { i18n } from '$lib/i18n'
  import { ParaglideJS } from '@inlang/paraglide-sveltekit'
  import { ModeWatcher } from 'mode-watcher'
  import { Body } from 'svelte-body'
  import Meta from './Meta.svelte'
  import 'uno.css'

  const { children } = $props()
</script>

<Meta />
<ModeWatcher />

<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>

<Body class='mx-4 bg-slate-50 text-slate-800 font-sans transition-colors dark:bg-slate-900 dark:text-slate-50' />
