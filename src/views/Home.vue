<template>
  <main class="flex flex-col justify-center items-center">
    <menu-doughnuts></menu-doughnuts>
  </main>
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