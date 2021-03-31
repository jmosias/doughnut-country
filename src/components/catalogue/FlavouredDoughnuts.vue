<template>
  <div class="w-full h-full flex flex-col sm:flex-row-reverse">
    <div
      class="p-4 flex flex-wrap gap-y-2 sm:p-8 sm:w-2/5 sm:gap-y-0 sm:flex-col"
    >
      <draggable
        v-for="flavour in flavours"
        :key="flavour.value[0].id"
        v-model="flavour.value"
        :group="{ name: 'doughnuts', pull: 'clone', put: false }"
        :sort="false"
        item-key="flavours"
        class="w-1/5 h-auto box-border flex flex-col items-center sm:w-1/4 sm:h-1/4 sm:py-4 sm:justify-around"
        ghost-class="ghost-doughnut"
      >
        <template #item="{ element }">
          <img
            :src="element.img"
            :alt="element.name + ' Doughnut Flavour'"
            class="doughnut-icon w-4/5 h-auto sm:transform-gpu sm:hover:scale-125 sm:transition-all"
          />
        </template>
        <template #footer>
          <p
            class="text-2xs sm:text-xs text-c-tertiary font-extra-light text-center"
          >
            {{ flavour.value[0].name }}
          </p>
          <button
            @click="addToBoxButton(flavour.value[0])"
            class="hidden sm:inline-block w-3/5 text-c-tertiary px-2 pt-1 text-2xs uppercase border border-c-secondary hover:border-c-tertiary"
          >
            Add
          </button>
        </template>
      </draggable>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: 'FlavouredDoughnuts',
  components: {
    draggable,
  },
  setup() {
    const store = useStore();

    return {
      flavours: computed(() => store.state.doughnuts.flavours),
    };
  },
};
</script>

<style scoped>
.doughnut-icon {
  cursor: grab;
}
</style>