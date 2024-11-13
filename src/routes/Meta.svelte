<script lang='ts'>
  import { MetaTags } from 'svelte-meta-tags'

  const name = 'kawarimidoll'
  const title = 'kawarimidoll.github.io/profile-svelte'
  const url = 'https://kawarimidoll.github.io/profile-svelte'
  const description = 'after all, kawarimidoll'
  const image = {
    url: 'https://avatars.githubusercontent.com/u/8146876?s=200',
    alt: 'kawarimidoll\'s icon',
    type: 'image/png',
    width: 200,
  }
</script>

<MetaTags
  {title}
  {description}
  canonical={url}
  openGraph={{
    url,
    title,
    description,
    type: 'profile',
    profile: { username: name },
    images: [image],
    siteName: title,
  }}
  twitter={{
    creator: `@${name}`,
    site: `@${name}`,
    cardType: 'summary_large_image',
    title,
    description,
    image: image.url,
    imageAlt: image.alt,
  }}
/>
