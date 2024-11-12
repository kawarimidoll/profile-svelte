<script>
  const { text = '', interval = 80, stopTick = 30 } = $props()

  const chars = [...text]
  let typed = $state('')
  let rest = $state(text)
  let typing = $state(true)

  let cnt = $state(chars.length + stopTick)

  $effect(() => {
    const id = setInterval(() => {
      cnt -= 1
      if (cnt <= 0) {
        clearInterval(id)
        typing = false
        return
      }
      if (chars.length > 0) {
        typed += (chars.shift())
        rest = chars.join('')
      }
    }, interval)
    return () => {
      clearInterval(id)
      typing = false
    }
  })
</script>

<span class:typing>{typed}</span>
{#if rest}
  <span class='invisible break-all'>{rest}</span>
{/if}

<style>
.typing {
  animation: caret .5s step-end infinite alternate;
  padding-right: 4px;
  border-right: 2px solid;
}
@keyframes caret {
  50% {
    border-color: transparent
  }
}
</style>
