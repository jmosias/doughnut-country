<template>
  <div
    class="app-footer text-xs sm:text-sm bg-c-black text-c-secondary flex flex-col justify-center items-center gap-1"
  >
    <p>&copy; 2021 Doughnut Country Food House</p>
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