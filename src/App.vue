<template>
  <router-view />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('doughnuts/ADD_NEW_BOX');
  },
};
</script>

<style>
</style>
