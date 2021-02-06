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

@keyframes slide {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(15px);
  }
}

@keyframes spin2 {
  to {
    transform: rotate(360deg) scale(1.1);
  }
}
</style>
