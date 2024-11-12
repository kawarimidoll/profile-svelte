<script lang='ts'>
  import TypeWriter from '$lib/components/TypeWriter.svelte'
  import { links, talks } from '$lib/data'
</script>

{#snippet exLink(url: string, title?: string)}
  <a href={url} target='_blank'>{title || url}</a>
{/snippet}

<figure>
  <img src='https://avatars.githubusercontent.com/u/8146876' alt='avatar' class='size-64 rounded-full' />
</figure>

<h1 uno-text='center'>kawarimidoll</h1>
<p uno-text='center'>カワリミ人形</p>

<blockquote>
  <TypeWriter text='は〜〜安全圏から他人の恋愛のゴタゴタを観測して楽しみてぇな〜〜〜' />
  <footer>
    - kawarimidoll,
    {@render exLink('https://bsky.app/profile/kawarimidoll.bsky.social/post/3l5tr342umc2o', '2024-10-06')}
  </footer>
</blockquote>

<h2 id='links'>Links</h2>
<dl>
  {#each links as { name, url }}
    <dt>{name}</dt>
    <dd>{@render exLink(url)}</dd>
  {/each}
</dl>

<h2 id='talks'>Talks</h2>
<dl>
  {#each talks as { name, event, slides }}
    <dt>{name}</dt>
    <dd>
      {@render exLink(event, 'event details')}
      {@render exLink(slides, 'slides')}
    </dd>
  {/each}
</dl>
