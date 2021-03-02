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
        ghost-class="ghost-doughnut"
      >
        <template #item="{ element }">
          <img
            :src="element.img"
            :alt="element.name + ' Doughnut Flavour'"
            class="doughnut-icon w-full h-auto"
          />
        </template>
        <template #footer>
          <p class="text-c-tertiary font-extralight text-center">
            {{ flavour.value[0].name }}
          </p>
          <button
            @click="addToBoxButton(flavour.value[0])"
            class="btn-add bg-c-secondary text-c-tertiary font-bold py-1 px-3 rounded-lg text-xs uppercase"
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
      const currentBox = this.boxes[this.current_box_index];
      const length = currentBox.value.length;
      if (length < currentBox.capacity) {
        this.ADD_FLAVOUR({ length, flavour });
      }
    },
  },
  computed: {
    ...mapState('doughnuts', ['flavours', 'boxes', 'current_box_index']),
  },
};
</script>

<style lang="postcss" scoped>
.doughnut-icon {
  @apply transition-all;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 6%;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.doughnut-icon:hover {
  padding: 0;
}

.ghost-doughnut {
  @apply opacity-60 border border-dashed border-c-tertiary;
}

.btn-add {
  @apply transition-all;
}

.btn-add:hover {
  @apply transform-gpu scale-110;
}
</style>