<script lang='ts'>
  import BlobNeon from '$lib/components/BlobNeon.svelte'
  import TypeWriter from '$lib/components/TypeWriter.svelte'
  import { links, talks } from '$lib/data'
  import { toggleMode } from 'mode-watcher'
</script>

{#snippet exLink(url: string, title?: string)}
  <a href={url} target='_blank' class='break-all text-blue-600 hover:animate-pulse dark:text-blue-500'>{title || url}</a>
{/snippet}

<main uno-mx-auto uno-mt-6 uno-mb-2 uno-p-8 uno-border='~ solid color-zinc-400 dark:color-slate-400' uno-max-w-screen-sm uno-font='normal sans' uno-text-lg>
  <div uno-flex='~' uno-justify='center' uno-align='center' uno-m-0 uno-mb-2>
    <button aria-label='avatar image' onclick={toggleMode} uno-border-none
            uno-size-64 uno-rounded-full uno-bg='center cover'
            class="bg-[url('https://avatars.githubusercontent.com/u/8146876')]">
    </button>
    <BlobNeon />
  </div>

  <h1 uno-text='center 4xl' uno-font-medium uno-mb-5>kawarimidoll</h1>
  <p uno-text-center>カワリミ人形</p>

  <blockquote uno-italic uno-m-0 uno-py-0 uno-px-4 uno-border='0 l-4 solid color-zinc-400 dark:color-slate-400'>
    <TypeWriter text='は〜〜安全圏から他人の恋愛のゴタゴタを観測して楽しみてぇな〜〜〜' />
    <footer uno-m-0 uno-p-0 uno-text='sm right zinc-400 dark:zinc-400'>
      - kawarimidoll,
      {@render exLink('https://bsky.app/profile/kawarimidoll.bsky.social/post/3l5tr342umc2o', '2024-10-06')}
    </footer>
  </blockquote>

  <h2 id='links' uno-text-2xl uno-font-normal uno-mb-5>Links</h2>
  <dl uno-px-4 uno-py-0>
    {#each links as { name, url }}
      <dt uno-font-medium>{name}</dt>
      <dd uno-m-0 uno-pb-2>{@render exLink(url)}</dd>
    {/each}
  </dl>

  <h2 id='talks' uno-text-2xl uno-font-normal uno-mb-5>Talks</h2>
  <dl uno-px-4 uno-py-0>
    {#each talks as { name, event, slides }}
      <dt uno-font-medium>{name}</dt>
      <dd uno-m-0 uno-pb-2>
        {@render exLink(event, 'event details')}
        {@render exLink(slides, 'slides')}
      </dd>
    {/each}
  </dl>
</main>

<footer uno-text='sm center zinc-400 dark:slate-400' uno-pb-4>
  You can find the source code for this page in
  {@render exLink('https://github.com/kawarimidoll/profile-svelte', 'this repository')}
  .
</footer>
