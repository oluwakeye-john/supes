<template>
  <div class="container">
    <!-- <Navbar /> -->
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  @apply bg-bgColor;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
}

@keyframes glow {
  to {
    filter: drop-shadow(0 -6mm 4mm rgb(160, 0, 210));
  }
}

@keyframes explode {
  0% {
    transform: translateX(10px);
  }
  2% {
    transform: translateX(-10px);
  }
  4% {
    transform: translateX(10px);
  }
  5% {
    transform: translateX(-10px);
  }
  8% {
    transform: translateX(10px);
  }
  10% {
    transform: translateX(-10px);
  }
  12% {
    transform: translateX(10px);
  }
  14% {
    transform: translateX(-10px);
  }
  16% {
    transform: translateX(10px);
  }
  18% {
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(10px);
  }
  22% {
    transform: translateX(-10px);
  }
  24% {
    transform: translateX(10px);
  }
  30% {
    transform: scale(20);
  }
}
</style>
