<template>
  <div class="landing-container">
    <div class="landing-container__image" />
    <div class="px-6 md:px-20">
      <h1 class="text-white text-2xl md:text-5xl font-bold">
        All your supers in one place. Villians and Heroes. DC and Marvel.
      </h1>
      <p>Yikes</p>
      <p>Yikes</p>
      <form>
        <Input placeholder="Search for a superhero. E.g Batman" />
        <Button>Go 🚀 💥</Button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.landing-container {
  position: relative;
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
}

.landing-container__image {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/bg2.jpg'),
    url('../../assets/logo/captain.png');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.3;
}
</style>
