<template>
  <h2>Catalogue</h2>

  <div v-for="category in categories" :key="category.id">
    <h3>{{ category.name }}</h3>

    <div v-for="item in currentCategoryItems(category)" :key="item.id">
      <img :src="item.img" :alt="item.name" class="w-32 h-auto" />
      <h4>{{ item.name }}</h4>
      <p>{{ item.description }}</p>
      <p>Price: {{ item.price }}</p>
      <p>Available: {{ item.isAvailable }}</p>
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        ADD TO ORDER
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MenuCatalogue',
  methods: {
    currentCategoryItems(category) {
      return this.items.filter((item) => item.categoryName == category.name);
    },
  },
  computed: {
    ...mapState('catalogue', ['categories', 'items']),
  },
};
</script>

<style>
</style>