<template>
  <div class="hero w-full h-screen">
    <div
      class="hero-content h-full flex flex-col justify-between items-center text-c-white"
    >
      <div to="/" class="logo flex justify-center">
        <p class="logo-text float-left">D<br />C</p>
        <img
          src="../assets/images/app_logo_white.png"
          class="logo-image float-left"
        />
        <p class="logo-text">UGHNUT<br />UNTRY</p>
      </div>
      <div class="text-center">
        <h3 class="text-xl sm:text-3xl font-head font-bold">
          choose your flavours!
        </h3>
        <a href="#menu" class="cursor-pointer" v-smooth-scroll
          ><i class="text-3xl fas fa-chevron-down animate-bounce"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHero',
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/hero.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-content {
  padding: 24vh 0 8vh;
}

.logo {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  border-top: 0.42vh solid #fff;
  border-bottom: 0.42vh solid #fff;
  padding: 1vh 1vh 0 1vh;
}

.logo-text {
  font-weight: bold;
  font-size: 5vh;
  line-height: 5vh;
}

.logo-image {
  height: 9vh;
  width: auto;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media (min-width: 640px) {
  .logo-text {
    font-size: 10vh;
    line-height: 10vh;
  }

  .logo-image {
    height: 18vh;
  }
}
</style>