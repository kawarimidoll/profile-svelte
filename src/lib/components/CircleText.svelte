<div uno-size-64 uno-pointer-events-none>
  <svg viewBox='0 0 100 100'>
    <path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle-path' />
    <text uno-fill='zinc-400 dark:zinc-400'>
      <textPath xlink:href='#circle-path'>
        Tap icon to toggle light / dark.
      </textPath>
    </text>
  </svg>
</div>

<style>

/* https://scrapbox.io/teamlab-frontend/CSS+SVG%E3%81%A7%E5%86%86%E4%B8%8A%E3%81%AB%E6%96%87%E5%AD%97%E3%82%92%E9%85%8D%E7%BD%AE%E3%81%99%E3%82%8B */
div {
  position: absolute;
  scale: 1.1;
  aspect-ratio: 1/1;
  animation: rotateAppear 2s forwards;
  svg {
    overflow: visible;
  }
  path {
    fill: none;
  }
  text {
    font-size: 0.3rem;
  }
}

@keyframes rotateAppear {
  from {
    transform: rotate(130deg);
    opacity: 0;
  }
  to {
    transform: rotate(110deg);
    opacity: 1;
  }
}
</style>
