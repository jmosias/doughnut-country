<template>
  <div
    id="menu"
    class="container flex justify-center items-center bg-transparent"
  >
    <div
      class="menu-doughnuts flex flex-col-reverse sm:flex-row border border-c-tertiary"
    >
      <menu-doughnuts-boxes></menu-doughnuts-boxes>
      <menu-doughnuts-flavours></menu-doughnuts-flavours>
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
.container {
  width: 98%;
}

.menu-doughnuts {
  width: 100%;
  height: 90vh;
  margin: 2vh 0;
}

@media (min-width: 640px) {
  .container {
    width: 100%;
  }

  .menu-doughnuts {
    width: 180vh;
    margin: 5vh 0;
  }
}
</style>