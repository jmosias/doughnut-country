<template>
  <main class="flex flex-col justify-center items-center">
    <app-hero></app-hero>
    <menu-doughnuts></menu-doughnuts>
    <menu-catalogue></menu-catalogue>
    <shopping-cart></shopping-cart>
    <floating-notifications></floating-notifications>
  </main>
</template>

<script>
import AppHero from '../components/AppHero.vue';
import MenuDoughnuts from '../components/MenuDoughnuts.vue';
import MenuCatalogue from '../components/MenuCatalogue.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import FloatingNotifications from '../components/FloatingNotifications.vue';

export default {
  name: 'Home',
  components: {
    AppHero,
    MenuDoughnuts,
    MenuCatalogue,
    ShoppingCart,
    FloatingNotifications,
  },
};
</script>