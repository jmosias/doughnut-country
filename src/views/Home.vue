<template>
  <main class="flex flex-col justify-center items-center">
    <app-hero></app-hero>
    <menu-doughnuts></menu-doughnuts>
  </main>
</template>

<script>
import AppHero from '../components/AppHero.vue';
import MenuDoughnuts from '../components/MenuDoughnuts.vue';

export default {
  name: 'Home',
  components: {
    MenuDoughnuts,
    AppHero
  },
};
</script>