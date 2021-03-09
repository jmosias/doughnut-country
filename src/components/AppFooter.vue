<template>
  <div
    class="app-footer gap-8 sm:gap-16 text-xs bg-c-black text-c-white flex flex-col justify-center items-center"
  >
    <div class="gap-2 sm:gap-4 flex justify-center items-center">
      <h3 class="font-head text-sm">follow us:</h3>
      <a href="https://www.fb.me/doughnutcountry" target="_blank"
        ><i
          class="text-3xl sm:text-4xl cursor-pointer fab fa-facebook hover:text-c-primary transition-all"
        ></i
      ></a>
    </div>
    <div class="flex flex-col justify-center items-center gap-2">
      <a
        href="#top"
        class="logo disable-select flex justify-center v-smooth-scroll"
        v-smooth-scroll
      >
        <p class="logo-text float-left">D<br />C</p>
        <img
          src="../assets/images/app_logo_white.png"
          class="logo-image disable-select float-left"
        />
        <p class="logo-text">UGHNUT<br />UNTRY</p>
      </a>
      <div class="gap-4 flex justify-center items-center font-head">
        <a href="#top" class="link" v-smooth-scroll>home</a>
        <a href="#our-story" class="link" v-smooth-scroll>our story</a>
      </div>
    </div>
    <p>&copy; 2021 Doughnut Country Food House</p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="postcss" scoped>
.app-footer {
  padding: 6vh;
}

.link {
  position: relative;
  @apply transition-all;
}

.link:hover {
  @apply text-c-secondary;
}

.link::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 20%;
  border-bottom: 0.143vh solid #fff;
  @apply border-c-secondary transition-all;
}

.link:hover::before {
  width: 100%;
}

.logo {
  border-top: 0.143vh solid #fff;
  border-bottom: 0.143vh solid #fff;
  padding: 0.8vh;
  padding-bottom: 0;
}

.logo-text {
  font-weight: bold;
  font-size: 3vh;
  line-height: 3vh;
}

.logo-image {
  height: 5.2vh;
  width: auto;
}

@media (min-width: 640px) {
  .app-footer {
    padding: 12vh;
  }

  .logo-text {
    font-size: 6vh;
    line-height: 6vh;
  }

  .logo-image {
    height: 10.4vh;
  }
}
</style>