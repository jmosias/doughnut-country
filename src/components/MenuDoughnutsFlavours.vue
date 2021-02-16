<template>
  <h3>Flavours</h3>
  <draggable
    v-for="(flavour, index) in flavours"
    :key="index"
    v-model="flavour.value"
    :group="{ name: 'doughnuts', pull: 'clone', put: false }"
    :sort="false"
    item-key="flavours"
    class="flex flavours"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
    <template #footer>
      {{ flavour.value[0].name }}
      <button
        @click="addToBoxButton(flavour.value[0])"
        class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MenuDoughnutsFlavours',
  components: {
    draggable,
  },
  methods: {
    ...mapMutations('doughnuts', ['ADD_FLAVOUR']),
    addToBoxButton(flavour) {
      const bool = this.currentBox.value.length < this.currentBox.capacity;
      if (bool) {
        const index = this.currentBox.value.length;
        this.ADD_FLAVOUR({ index, flavour });
      }
    },
  },
  computed: {
    ...mapState('doughnuts', ['flavours', 'boxes', 'boxesCurrentBoxIndex']),
    currentBox() {
      return this.boxes[this.boxesCurrentBoxIndex];
    },
  },
};
</script>

<style lang="postcss" scoped>
.doughnut-icon {
  @apply w-16 h-auto;
  cursor: pointer;
}
</style>