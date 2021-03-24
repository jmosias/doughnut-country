<template>
  <main class="flex flex-col justify-center items-center">
    <app-hero></app-hero>
    <menu-doughnuts></menu-doughnuts>
    <menu-catalogue></menu-catalogue>
    <shopping-cart></shopping-cart>
  </main>
</template>

<script>
import AppHero from '../components/AppHero.vue';
import MenuDoughnuts from '../components/MenuDoughnuts.vue';
import MenuCatalogue from '../components/MenuCatalogue.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
  name: 'Home',
  components: {
    AppHero,
    MenuDoughnuts,
    MenuCatalogue,
    ShoppingCart,
  },
};
</script>