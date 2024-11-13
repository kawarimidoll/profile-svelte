<script lang='ts'>
  import TypeWriter from '$lib/components/TypeWriter.svelte'
  import { links, talks } from '$lib/data'
  import { toggleMode } from 'mode-watcher'
</script>

{#snippet exLink(url: string, title?: string)}
  <a href={url} target='_blank' class='break-all text-blue-600 dark:text-blue-500'>{title || url}</a>
{/snippet}

<main uno-mx-auto uno-mt-6 uno-mb-6 uno-p-8 uno-border='~ solid' uno-max-w-screen-sm uno-font='normal sans' uno-text-lg>
  <figure uno-flex='~' uno-justify='center' uno-align='center' uno-m-0 uno-mb-2>
    <img src='https://avatars.githubusercontent.com/u/8146876' alt='avatar' class='size-64 rounded-full' />
  </figure>

  <h1 uno-text='center 4xl' uno-font-medium uno-mb-5>kawarimidoll</h1>
  <p uno-text-center>カワリミ人形</p>
  <button onclick={toggleMode}>Toggle Mode</button>

  <blockquote uno-italic uno-m-0 uno-py-0 uno-px-4 uno-border='0 l-4 solid'>
    <TypeWriter text='は〜〜安全圏から他人の恋愛のゴタゴタを観測して楽しみてぇな〜〜〜' />
    <footer uno-m-0 uno-p-0 uno-text='sm right zink-300 dark:zink-400'>
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

<footer uno-text='sm center' uno-pb-4>
  You can find the source code for this page in
  {@render exLink('https://github.com/kawarimidoll/kawarimidoll.github.io', 'this repository')}
  .
</footer>

<style>

:root {
  color-scheme: light dark;

  --light-color: #1a1919;
  --light-gray: #bbbbcb;
  --light-link: #1218ee;
  --light-visited: #551a8b;
  --dark-color: #fbfdfb;
  --dark-gray: #666696;
  --dark-link: #4376ef;
  --dark-visited: #8e40d6;
}

:global(body) {
  color: light-dark(var(--light-color), var(--dark-color));
  background-color: light-dark(var(--dark-color), var(--light-color));
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
}

main, blockquote {
  border-color: light-dark(var(--light-gray), var(--dark-gray));
}

/* a { */
/*   color: light-dark(var(--light-link), var(--dark-link)); */
/*   &:visited { */
/*     color: light-dark(var(--light-visited), var(--dark-visited)); */
/*   } */
/* } */

footer {
 /* zinc-400 dark:slate-400 */
  color: light-dark(var(--light-gray), var(--dark-gray));
}
</style>
