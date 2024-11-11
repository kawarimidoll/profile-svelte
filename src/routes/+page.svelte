<script>
  import { links, talks } from '$lib/data.ts'
</script>

<h1 text='center'>kawarimidoll</h1>
<p text='center'>カワリミ人形</p>

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
