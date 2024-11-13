<script lang='ts'>
  import { i18n } from '$lib/i18n'
  import { ParaglideJS } from '@inlang/paraglide-sveltekit'
  import { ModeWatcher } from 'mode-watcher'
  import Meta from './Meta.svelte'
  import 'uno.css'

  const { children } = $props()
</script>

<Meta />
<ModeWatcher />

<ParaglideJS {i18n}>
  {@render children()}
</ParaglideJS>
