<template>
  <div class="bg-c-secondary">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  created() {
    this.$store.commit('doughnuts/ADD_NEW_BOX');
  },
};
</script>

<style>
.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  @apply bg-c-white;
}

.scrollbar::-webkit-scrollbar {
  width: 0.3rem;
  @apply bg-c-white;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0.3rem;
  @apply bg-c-secondary;
}
</style>
