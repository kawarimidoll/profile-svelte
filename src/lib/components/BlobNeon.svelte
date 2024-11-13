<!-- https://freefrontend.com/css-blob-effects/ -->
<!-- https://codepen.io/arindam404/pen/qBLVwPd -->
<div uno-w-72></div>

<style>
div {
  position: absolute;
  opacity: 0.5;
  aspect-ratio: 1/1;
  animation: animate 10s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite
    alternate forwards;
  filter: blur(40px);
  z-index: -1;
  background: linear-gradient(
    47deg,
    rgba(255, 88, 139, 1) 21%,
    rgb(0 164 173) 67%,
    rgba(118, 74, 166, 1) 81%
  );

  /*  Optional  */
  /*   box-shadow: inset 50px 50px 17px 0px #ff588b,
    inset 100px 100px 17px 0px #66319f; */
}

@keyframes animate {
  0% {
    translate: 10% -7%;
    border-radius: 60% 40% 30% 70% / 100% 85% 92% 74%;
  }
  50% {
    translate: 0% 4%;
    border-radius: 20% 71% 47% 70% / 81% 15% 22% 54%;
    rotate: 41deg;
    scale: 1.15;
  }
  100% {
    translate: -11% 8%;
    border-radius: 100% 75% 92% 74% / 60% 80% 30% 70%;
    rotate: -60deg;
    scale: 1.05;
  }
}
</style>
