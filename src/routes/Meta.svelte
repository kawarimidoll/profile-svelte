<script lang='ts'>
  const title = 'kawarimidoll.github.io/profile-svelte'
  const url = 'https://kawarimidoll.github.io/profile-svelte'
  const description = 'after all, kawarimidoll'
  const image = {
    src: 'https://avatars.githubusercontent.com/u/8146876?s=200',
    alt: 'kawarimidoll\'s icon',
    type: 'image/png',
  }
</script>

{#snippet ogMeta(property: string, content: string)}
  <meta property='og:{property}' content={content} />
{/snippet}

<svelte:head>
  <title>{title}</title>
  <meta name='description' content={description} />

  <!-- Open Graph -->
  {@render ogMeta('url', url)}
  {@render ogMeta('type', 'profile')}
  {@render ogMeta('title', title)}
  {@render ogMeta('description', description)}
  {@render ogMeta('image', image.src)}
  {@render ogMeta('image:alt', image.alt)}
  {@render ogMeta('image:type', image.type)}

  <meta property='profile:username' content='kawarimidoll' />
  <link rel='canonical' href={url} />
</svelte:head>
