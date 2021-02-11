<template>
  <h3>Flavours</h3>
  <draggable
    v-model="flavours"
    :group="{ name: 'doughnuts', pull: 'clone', put: false }"
    :sort="false"
    item-key="id"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
  </draggable>

  <h3>Box</h3>
  <draggable
    v-model="box"
    group="doughnuts"
    @change="changeID"
    item-key="id"
    ghost-class="opacity-60"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import { useStore } from 'vuex';

export default {
  name: 'DoughnutOverlay',
  components: {
    draggable,
  },
  setup() {
    const store = useStore();

    function changeID({ added }) {
      if (added) {
        store.commit('addNewFlavour', {
          newIndex: added.newIndex,
          flavour: added.element,
        });
      }
    }

    return { changeID };
  },
  computed: {
    flavours: {
      get() {
        return this.$store.state.flavours;
      },
      set(value) {
        this.$store.commit('updateFlavours', value);
      },
    },
    box: {
      get() {
        return this.$store.state.box;
      },
      set(value) {
        this.$store.commit('updateBox', value);
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.doughnut-icon {
  @apply cursor-pointer w-16 h-auto;
}

.doughnut-ghost {
  opacity: 0.75;
}
</style>