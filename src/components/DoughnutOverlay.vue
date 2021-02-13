<template>
  <h3>Flavours</h3>
  <draggable
    v-model="flavours"
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
  </draggable>

  <h3>Boxes</h3>
  <draggable
    v-for="(box, index) in boxes"
    :key="index"
    v-model="box.value"
    :group="{ name: 'doughnuts', put: index == currentBoxIndex }"
    :disabled="!index == currentBoxIndex"
    @change="addFlavour"
    item-key="box"
    ghost-class="doughnut-icon-ghost"
    class="flex doughnut-box"
    :class="{ active: index == currentBoxIndex }"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
  </draggable>

  <button
    @click="addBox"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
  >
    Add
  </button>

  <button
    @click="previousBox"
    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
  >
    &lt;
  </button>

  <button
    @click="nextBox"
    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
  >
    &gt;
  </button>
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
    store;

    function addFlavour({ added }) {
      if (added) {
        store.commit('addFlavourToBox', {
          index: added.newIndex,
          flavour: added.element,
        });
      }
    }

    function addBox() {
      store.commit('addNewBox');
    }

    function previousBox() {
      store.commit('changeCurrentBoxIndex', 'previous');
    }

    function nextBox() {
      store.commit('changeCurrentBoxIndex', 'next');
    }

    return { addFlavour, addBox, previousBox, nextBox };
  },
  computed: {
    currentBoxIndex() {
      return this.$store.state.currentBoxIndex;
    },
    flavours: {
      get() {
        return this.$store.state.flavours;
      },
      set(value) {
        this.$store.commit('updateFlavours', value);
      },
    },
    boxes: {
      get() {
        return this.$store.state.boxes;
      },
      set(value) {
        this.$store.commit('updateBoxes', value);
      },
    },
  },
  created() {
    this.$store.commit('addNewBox');
  },
};
</script>

<style lang="postcss" scoped>
.doughnut-box.active .doughnut-icon,
.flavours .doughnut-icon {
  cursor: pointer;
}

.doughnut-icon {
  @apply w-16 h-auto;
}

.doughnut-icon-ghost {
  opacity: 0.75;
}

.doughnut-box {
  min-height: 5rem;
  border: 1px solid #424242;
  @apply bg-green-100;
}

.doughnut-box.active {
  @apply bg-green-200;
}
</style>