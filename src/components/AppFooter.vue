<template>
  <div
    class="app-footer bg-c-tertiary text-c-white flex flex-col justify-center items-center gap-1"
  >
    <div class="text-c-primary flex flex-row gap-2">
      <router-link to="/">
        <p class="text-sm sm:text-base">Home</p>
      </router-link>
      <router-link to="/about">
        <p class="text-sm sm:text-base">About</p>
      </router-link>
    </div>
    <p class="text-xs sm:text-sm">Doughnut Country Food House &copy; 2021</p>
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
  margin-top: 3vh;
}

@media (min-width: 640px) {
  .app-footer {
    height: 24vh;
    margin-top: 6vh;
  }
}
</style>