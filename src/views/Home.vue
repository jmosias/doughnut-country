<template>
  <div class="home">
    <menu-doughnuts></menu-doughnuts>
    <menu-catalogue></menu-catalogue>
  </div>
</template>

<script>
import MenuDoughnuts from '../components/MenuDoughnuts.vue';
import MenuCatalogue from '../components/MenuCatalogue.vue';

export default {
  name: 'Home',
  components: {
    MenuDoughnuts,
    MenuCatalogue,
  },
};
</script>