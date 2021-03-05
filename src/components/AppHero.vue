<template>
  <div class="hero-image w-full h-screen">
    <div
      class="hero-content h-full flex flex-col justify-between items-center text-c-white"
    >
      <div class="flex flex-col gap-4">
        <div
          class="text-base gap-5 sm:text-lg sm:gap-10 flex justify-center font-head"
        >
          <a href="#flavours" class="hero-link" v-smooth-scroll>flavours</a>
          <a href="#catalogue" class="hero-link" v-smooth-scroll>catalogue</a>
          <a href="#about-us" class="hero-link" v-smooth-scroll>about us</a>
        </div>
        <div to="/" class="logo disable-select flex justify-center">
          <p class="logo-text float-left">D<br />C</p>
          <img
            src="../assets/images/app_logo_white.png"
            class="logo-image disable-select float-left"
          />
          <p class="logo-text">UGHNUT<br />UNTRY</p>
        </div>
      </div>
      <div class="text-center">
        <h3 class="disable-select text-xl sm:text-2xl font-head font-bold">
          choose your flavours!
        </h3>
        <a href="#flavours" class="cursor-pointer" v-smooth-scroll
          ><i
            class="text-3xl fas fa-chevron-down animate-bounce text-c-secondary"
          ></i
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
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../assets/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-content {
  padding: 24vh 0 12vh;
}

.hero-link {
  position: relative;
  @apply transition-all;
}

.hero-link:hover {
  @apply text-c-secondary;
}

.hero-link::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 21%;
  border-bottom: 0.15vh solid #fff;
  @apply border-c-secondary;
}

.hero-link:hover::before {
  width: 100%;
}

.logo {
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
}

@media (min-width: 640px) {
  .hero-image {
    background-position: center;
  }

  .hero-content {
    padding-bottom: 6vh;
  }

  .logo-text {
    font-size: 10vh;
    line-height: 10vh;
  }

  .logo-image {
    height: 18vh;
  }
}
</style>