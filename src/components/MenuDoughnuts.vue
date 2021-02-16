<template>
  <menu-doughnuts-flavours></menu-doughnuts-flavours>
  <menu-doughnuts-boxes></menu-doughnuts-boxes>
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