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
    @start="isTrashOpen = true"
    @end="isTrashOpen = false"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
    <template #footer v-if="index == currentBoxIndex">
      <div>
        <p>Box {{ index + 1 }}</p>
        <button
          @click="cloneBox"
          class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          Clone
        </button>
        <button
          @click="clearBox"
          class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
        <button
          @click="removeBox"
          :disabled="isLastBox"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          Remove
        </button>
      </div>
    </template>
  </draggable>

  <h3>Trash</h3>
  <draggable
    v-if="isTrashOpen"
    v-model="trash.value"
    :group="{ name: 'doughnuts' }"
    @change="emptyTrash"
    item-key="trash"
    class="flex doughnut-box"
  >
    <template #item> </template>
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
import { ref } from 'vue';
import draggable from 'vuedraggable';
import { useStore } from 'vuex';

export default {
  name: 'DoughnutOverlay',
  components: {
    draggable,
  },
  setup() {
    const store = useStore();

    const trash = ref([]);
    const isTrashOpen = ref(false);

    function emptyTrash() {
      trash.value = [];
    }

    function addFlavour({ added }) {
      if (added) {
        store.commit('addFlavourToBox', {
          index: added.newIndex,
          flavour: added.element,
        });
      }
    }

    function addToBoxButton(flavour) {
      const index = store.state.boxes[store.state.currentBoxIndex].value.length;
      store.commit('addFlavourToBox', { index, flavour });
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

    function cloneBox() {
      const box = store.state.boxes[store.state.currentBoxIndex];
      store.commit('addNewBox', box.value);
    }

    function clearBox() {
      store.commit('clearBox');
    }

    function removeBox() {
      store.commit('removeBox');
      if (store.state.currentBoxIndex == store.state.boxes.length) {
        store.commit('changeCurrentBoxIndex', 'previous');
      }
    }

    return {
      trash,
      isTrashOpen,
      emptyTrash,
      addFlavour,
      addToBoxButton,
      addBox,
      previousBox,
      nextBox,
      cloneBox,
      clearBox,
      removeBox,
    };
  },
  computed: {
    currentBoxIndex() {
      return this.$store.state.currentBoxIndex;
    },
    isLastBox() {
      return this.$store.state.boxes.length == 1 ? true : false;
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