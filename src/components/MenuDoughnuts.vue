<template>
  <div class="flex h-screen">
    <menu-doughnuts-boxes></menu-doughnuts-boxes>
    <menu-doughnuts-flavours></menu-doughnuts-flavours>
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

<style>
</style>