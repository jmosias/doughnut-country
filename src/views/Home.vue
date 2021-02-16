<template>
  <div class="home">
    <menu-doughnuts></menu-doughnuts>
  </div>
</template>

<script>
import MenuDoughnuts from '../components/MenuDoughnuts.vue';

export default {
  name: 'Home',
  components: {
    MenuDoughnuts,
  },
};
</script>