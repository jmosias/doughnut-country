<template>
  <div class="w-1/2 p-6 bg-c-primary flex flex-col items-center gap-y-6">
    <h3 class="py-3 text-c-tertiary text-3xl font-extralight text-center">
      Flavours
    </h3>
    <div class="flex-grow grid grid-cols-5 grid-rows-3 gap-2">
      <draggable
        v-for="(flavour, index) in flavours"
        :key="index"
        v-model="flavour.value"
        :group="{ name: 'doughnuts', pull: 'clone', put: false }"
        :sort="false"
        item-key="flavours"
        class="box-border flex flex-col justify-center items-center"
      >
        <template #item="{ element }">
          <img
            :src="element.img"
            :alt="element.name + ' Doughnut Flavour'"
            class="cursor-pointer w-full h-auto doughnut-icon--scale"
          />
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

<style lang="postcss" scoped>
.doughnut-icon--scale {
  @apply p-2 transition-all;
}

.doughnut-icon--scale:hover {
  @apply p-0;
}
</style>