<template>
  <div
    class="app-footer text-xs sm:text-sm bg-c-black text-c-white flex flex-col justify-center items-center gap-1"
  >
    <div class="gap-2 sm:gap-4 text-c-primary flex flex-row">
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/about">
        <p>About</p>
      </router-link>
    </div>
    <p>Doughnut Country Food House &copy; 2021</p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.app-footer {
  height: 12vh;
}

@media (min-width: 640px) {
  .app-footer {
    height: 24vh;
  }
}
</style>