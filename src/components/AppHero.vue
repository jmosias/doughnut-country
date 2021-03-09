<template>
  <div id="top" class="hero-image w-full h-screen">
    <div
      class="hero-content h-full flex flex-col justify-between items-center text-c-white"
    >
      <div class="gap-10 sm:gap-12 flex flex-col items-center">
        <div
          class="text-xs gap-5 sm:text-base sm:gap-10 flex justify-center uppercase"
        >
          <a href="#flavours" class="hero-link" v-smooth-scroll>flavours</a>
          <a href="#catalogue" class="hero-link" v-smooth-scroll>catalogue</a>
          <a href="#our-story" class="hero-link" v-smooth-scroll>our story</a>
        </div>
        <div
          class="logo disable-select inline-flex justify-center text-c-black"
          v-smooth-scroll
        >
          <p class="logo-text float-left">D<br />C</p>
          <img
            src="../assets/images/app_logo.png"
            class="logo-image disable-select float-left"
          />
          <p class="logo-text">UGHNUT<br />UNTRY</p>
        </div>
      </div>
      <a
        href="#flavours"
        class="cursor-pointer text-center hover:text-c-secondary transition-all"
        v-smooth-scroll
      >
        <h3 class="disable-select text-xl sm:text-2xl font-head font-bold">
          choose your flavours!
        </h3>
        <i class="text-3xl sm:text-4xl fas fa-chevron-down animate-bounce"></i>
      </a>
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
  padding: 6vh 0 12vh;
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
  width: 20%;
  border-bottom: 0.143vh solid #fff;
  @apply border-c-secondary transition-all;
}

.hero-link:hover::before {
  width: 100%;
}

.logo {
  @apply bg-c-primary bg-opacity-70;
  border-radius: 50% 50%;
  padding: 3.5vh 6vh 2.5vh;
}

.logo-text {
  font-weight: bold;
  font-size: 3vh;
  line-height: 3vh;
}

.logo-image {
  height: 5.5vh;
  width: auto;
}

@media (min-width: 640px) {
  .hero-image {
    background-position: center;
  }

  .hero-content {
    padding: 12vh 0 6vh;
  }

  .logo {
    padding: 7vh 12vh 5vh;
  }

  .logo-text {
    font-size: 6vh;
    line-height: 6vh;
  }

  .logo-image {
    height: 11vh;
  }
}
</style>