<template>
  <div
    id="flavours"
    class="container w-full flex justify-center items-center bg-c-transparent"
  >
    <div class="menu-doughnuts flex flex-col sm:flex-row-reverse">
      <menu-doughnuts-flavours></menu-doughnuts-flavours>
      <menu-doughnuts-boxes></menu-doughnuts-boxes>
    </div>
  </div>
</template>

<script>
import MenuDoughnutsFlavours from './MenuDoughnutsFlavours';
import MenuDoughnutsBoxes from './MenuDoughnutsBoxes';

export default {
  name: 'MenuDoughnuts',
  components: {
    MenuDoughnutsFlavours,
    MenuDoughnutsBoxes,
  },
};
</script>

<style scoped>
.menu-doughnuts {
  width: 100%;
  height: 90vh;
}

@media (min-width: 640px) {
  .menu-doughnuts {
    width: 180vh;
  }
}
</style>