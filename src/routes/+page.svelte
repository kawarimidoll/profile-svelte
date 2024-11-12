<script>
  import TypeWriter from '$lib/components/TypeWriter.svelte'
  import { links, talks } from '$lib/data.ts'
</script>

<figure>
  <img src='https://avatars.githubusercontent.com/u/8146876' alt='avatar' class='size-64 rounded-full' />
</figure>

<h1 text='center'>kawarimidoll</h1>
<p text='center'>カワリミ人形</p>

<blockquote>
  <TypeWriter text='は〜〜安全圏から他人の恋愛のゴタゴタを観測して楽しみてぇな〜〜〜' />
  <footer>
    - kawarimidoll,
    <a href='https://bsky.app/profile/kawarimidoll.bsky.social/post/3l5tr342umc2o' target='_blank'>2024-10-06</a>
  </footer>
</blockquote>

<h2 id='links'>Links</h2>
<dl>
  {#each links as { name, url }}
    <dt>{name}</dt>
    <dd><a href={url} target='_blank'>{url}</a></dd>
  {/each}
</dl>

<h2 id='talks'>Talks</h2>
<dl>
  {#each talks as { name, event, slides }}
    <dt>{name}</dt>
    <dd>
      <a href={event} target='_blank'>event details</a>
      <a href={slides} target='_blank'>slides</a>
    </dd>
  {/each}
</dl>
