<template>
  <div class="w-1/2 p-6 bg-c-black flex flex-col items-center gap-y-6">
    <div class="w-4/5 flex justify-between items-center">
      <h3 class="py-3 text-c-white text-3xl font-extralight">Boxes</h3>
      <button
        @click="addNewBox"
        class="bg-c-primary hover:opacity-80 text-c-black font-bold text-sm py-1 px-6 rounded uppercase"
      >
        + Add new box
      </button>
    </div>

    <div class="w-full flex flex-grow">
      <button
        @click="previousBox"
        class="p-4 hover:opacity-80 text-c-primary text-4xl"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <div
        class="p-6 h-full flex flex-grow flex-col justify-between border border-dashed border-c-white rounded-xl gap-y-6"
      >
        <div
          class="h-full flex justify-center items-center border border-dashed border-c-primary rounded-xl"
        >
          <draggable
            v-for="(box, index) in doughnutBoxes"
            :key="index"
            v-model="box.value"
            :group="{ name: 'doughnuts', put: isBoxFillable(index) }"
            :disabled="!isCurrentIndex(index)"
            @change="addFlavour"
            item-key="box"
            @start="isTrashOpen = true"
            @end="isTrashOpen = false"
            v-show="isCurrentIndex(index)"
            ghost-class="ghost-doughnut"
            class="w-full h-full grid grid-cols-4 grid-rows-3 border border-dashed border-c-white rounded-xl"
          >
            <!-- flex flex-wrap justify-center -->
            <template #item="{ element }">
              <img
                :src="element.img"
                :alt="element.name"
                class="cursor-pointer w-full h-auto border border-dashed border-c-primary rounded-xl"
              />
            </template>
          </draggable>
        </div>

        <div class="w-full flex justify-between items-center">
          <p class="text-c-white font-extralight text-center">
            Box no. {{ boxesCurrentBoxIndex + 1 }}
          </p>
          <select
            id="boxesCapacities"
            v-model.number="currentBoxCapacity"
            class="text-xs px-3"
          >
            <option
              v-for="(boxCapacity, index) in boxesCapacities"
              :key="index"
              :value="boxCapacity"
              :selected="boxCapacity == currentBoxCapacity"
            >
              Box of {{ boxCapacity }}
            </option>
          </select>
          <div class="flex gap-x-4 items-center">
            <i
              @click="cloneBox"
              class="cursor-pointer fas fa-clone hover:opacity-80 text-yellow-400 text-lg"
            ></i>
            <i
              @click="clearBox"
              class="cursor-pointer fas fa-undo-alt hover:opacity-80 text-yellow-600 text-lg"
            ></i>
            <i
              @click="removeBox"
              :disabled="isLastBox"
              class="cursor-pointer fas fa-times hover:opacity-80 text-red-400 text-2xl disabled:opacity-40"
            ></i>
          </div>
        </div>
      </div>

      <button
        @click="nextBox"
        class="p-4 hover:opacity-80 text-c-primary text-4xl"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    <!-- <h3>Trash</h3> -->
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
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MenuDoughnutsBoxes',
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
    addNewBox() {
      this.ADD_NEW_BOX();
      this.SET_BOXES_CURRENT_BOX_INDEX(this.boxes.length - 1);
    },
    previousBox() {
      this.SET_BOXES_CURRENT_BOX_INDEX('previous');
    },
    nextBox() {
      this.SET_BOXES_CURRENT_BOX_INDEX('next');
    },
    cloneBox() {
      this.ADD_NEW_BOX(this.currentBox.value);
      this.SET_BOXES_CURRENT_BOX_INDEX(this.boxesCurrentBoxIndex + 1);
    },
    clearBox() {
      this.CLEAR_BOXES_CURRENT_BOX();
    },
    removeBox() {
      this.REMOVE_BOXES_CURRENT_BOX();
      if (
        this.boxesCurrentBoxIndex <= this.boxes.length &&
        this.boxes.length !== 0
      ) {
        this.SET_BOXES_CURRENT_BOX_INDEX('previous');
      } else {
        this.ADD_NEW_BOX();
      }
    },
  },
  computed: {
    ...mapState('doughnuts', [
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
        console.log(this.currentBox);
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

<style lang='postcss' scoped>
.c-minimum {
  min-width: 80%;
  min-height: 20%;
}

.ghost-doughnut {
  @apply opacity-80;
}
</style>