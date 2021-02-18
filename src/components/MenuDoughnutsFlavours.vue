<template>
  <div class="w-1/2 p-6 bg-c-primary">
    <h3 class="py-3 text-c-tertiary text-3xl font-extralight text-center">
      Flavours
    </h3>
    <div class="flex flex-wrap">
      <draggable
        v-for="(flavour, index) in flavours"
        :key="index"
        v-model="flavour.value"
        :group="{ name: 'doughnuts', pull: 'clone', put: false }"
        :sort="false"
        item-key="flavours"
        class="box-border flex flex-col justify-center items-center w-1/5"
      >
        <template #item="{ element }">
          <div class="doughnut-icon--scale">
            <img
              :src="element.img"
              :alt="element.name"
              class="doughnut-icon cursor-pointer w-full h-auto"
            />
          </div>
        </template>
        <template #footer>
          <p class="text-c-tertiary font-extralight text-center">
            {{ flavour.value[0].name }}
          </p>
          <button
            @click="addToBoxButton(flavour.value[0])"
            class="bg-c-secondary hover:bg-opacity-80 text-c-tertiary font-bold py-1 px-3 rounded-lg text-xs uppercase"
          >
            Add
          </button>
        </template>
      </draggable>
    </div>
  </div>
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

<style scoped>
.doughnut-icon {
  max-width: 8rem;
  max-height: 8rem;
}

.doughnut-icon--scale {
  padding: 0.5rem;
  @apply transition-all;
}

.doughnut-icon--scale:hover {
  padding: 0;
}
</style>