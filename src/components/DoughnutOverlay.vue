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
    v-for="(box, index) in doughnutBoxes"
    :key="index"
    v-model="box.value"
    :group="{ name: 'doughnuts', put: isBoxFillable(index) }"
    :disabled="!isCurrentIndex(index)"
    @change="addFlavour"
    item-key="box"
    ghost-class="doughnut-icon-ghost"
    class="flex doughnut-box"
    :class="{ active: isCurrentIndex(index) }"
    @start="isTrashOpen = true"
    @end="isTrashOpen = false"
  >
    <template #item="{ element }">
      <div>
        <img :src="element.img" :alt="element.name" class="doughnut-icon" />
      </div>
    </template>
    <template #footer v-if="isCurrentIndex(index)">
      <div>
        <p>Box {{ index + 1 }}</p>
        <select id="boxesCapacities" v-model.number="currentBoxCapacity">
          <option disabled>---</option>
          <option
            v-for="(boxCapacity, index) in boxesCapacities"
            :key="index"
            :value="boxCapacity"
            :selected="boxCapacity == currentBoxCapacity"
          >
            {{ boxCapacity }}
          </option>
        </select>
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
    @click="addNewBox"
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
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DoughnutOverlay',
  components: {
    draggable,
  },
  data() {
    return {
      trash: [],
      isTrashOpen: false,
    };
  },
  methods: {
    ...mapMutations('doughnuts', [
      'SET_BOXES',
      'ADD_NEW_BOX',
      'CLEAR_BOXES_CURRENT_BOX',
      'REMOVE_BOXES_CURRENT_BOX',
      'SET_BOXES_CURRENT_BOX_INDEX',
      'ADD_FLAVOUR',
      'SET_CURRENT_BOX_CAPACITY',
    ]),
    emptyTrash() {
      this.trash.value = [];
    },
    isCurrentIndex(index) {
      return index == this.boxesCurrentBoxIndex;
    },
    isBoxFillable(index) {
      return (
        index == this.boxesCurrentBoxIndex &&
        this.currentBox.value.length < this.currentBox.capacity
      );
    },
    addFlavour({ added }) {
      if (added) {
        this.ADD_FLAVOUR({
          index: added.newIndex,
          flavour: added.element,
        });
      }
    },
    addToBoxButton(flavour) {
      const bool = this.currentBox.value.length < this.currentBox.capacity;
      if (bool) {
        const index = this.currentBox.value.length;
        this.ADD_FLAVOUR({ index, flavour });
      }
    },
    addNewBox() {
      this.ADD_NEW_BOX();
    },
    previousBox() {
      this.SET_BOXES_CURRENT_BOX_INDEX('previous');
    },
    nextBox() {
      this.SET_BOXES_CURRENT_BOX_INDEX('next');
    },
    cloneBox() {
      this.ADD_NEW_BOX(this.currentBox.value);
    },
    clearBox() {
      this.CLEAR_BOXES_CURRENT_BOX();
    },
    removeBox() {
      this.REMOVE_BOXES_CURRENT_BOX();
      if (this.boxesCurrentBoxIndex == this.boxes.length) {
        this.SET_BOXES_CURRENT_BOX_INDEX('previous');
      }
    },
  },
  computed: {
    ...mapState('doughnuts', [
      'flavours',
      'boxes',
      'boxesCurrentBoxIndex',
      'boxesCapacities',
    ]),
    isLastBox() {
      return this.boxes.length == 1 ? true : false;
    },
    currentBox() {
      return this.boxes[this.boxesCurrentBoxIndex];
    },
    currentBoxCapacity: {
      get() {
        return this.currentBox.capacity;
      },
      set(value) {
        this.SET_CURRENT_BOX_CAPACITY(value);
      },
    },
    doughnutBoxes: {
      get() {
        return this.boxes;
      },
      set(value) {
        this.SET_BOXES(value);
      },
    },
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