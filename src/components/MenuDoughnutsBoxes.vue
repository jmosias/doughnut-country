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
        class="prevArrow p-4 hover:opacity-80 text-c-primary text-4xl"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <div
        class="overflow-hidden relative p-6 h-full flex flex-grow flex-col justify-between border border-dashed border-c-white rounded-xl gap-y-6"
      >
        <swiper
          grabCursor
          @swiper="setSwiperBoxes"
          :allowSlideNext="true"
          :allowSlidePrev="true"
          :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
          :slidesPerView="1"
          :centeredSlides="true"
          class="slider relative w-full h-full"
        >
          <div class="slider-navigation absolute top-0 z-10">
            <button
              @click="previousBox"
              class="prevArrow p-4 hover:opacity-80 text-c-primary text-4xl"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              @click="nextBox"
              class="nextArrow p-4 hover:opacity-80 text-c-primary text-4xl"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <swiper-slide v-for="(box, index) in doughnutBoxes" :key="index">
            <draggable
              v-model="box.value"
              :group="{ name: 'doughnuts', put: isBoxFillable(index) }"
              :disabled="!isCurrentIndex(index)"
              @change="addFlavour"
              item-key="box"
              @start="isTrashOpen = true"
              @end="isTrashOpen = false"
              ghost-class="ghost-doughnut"
              class="w-full h-full items-center bg-c-white"
              :class="{
                'box-cap-6': currentBoxCapacity == 6,
                'box-cap-12': currentBoxCapacity == 12,
              }"
            >
              <template #item="{ element }">
                <img
                  :src="element.img"
                  :alt="element.name"
                  class="cursor-pointer w-full h-auto doughnut-icon--scale"
                />
              </template>
            </draggable>
          </swiper-slide>
        </swiper>

        <div class="w-full flex justify-between items-center">
          <p
            class="text-c-white font-extralight text-center"
            :class="{ 'opacity-0': isTrashOpen }"
          >
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
              class="cursor-pointer fas fa-clone hover:opacity-80 text-c-pastel-yellow text-lg"
            ></i>
            <i
              @click="clearBox"
              class="cursor-pointer fas fa-undo-alt hover:opacity-80 text-c-pastel-yellow text-lg"
            ></i>
            <i
              @click="removeBox"
              :disabled="isLastBox"
              class="cursor-pointer fas fa-times hover:opacity-80 text-c-pastel-red text-2xl disabled:opacity-40"
            ></i>
          </div>
        </div>

        <div
          v-if="isTrashOpen"
          class="absolute bottom-6 left-6 w-1/5 h-1/5 flex justify-center items-center border border-dashed border-c-pastel-red rounded-xl"
        >
          <div class="absolute w-full h-full flex justify-center items-center">
            <i class="fas fa-trash-alt text-c-pastel-red text-6xl"></i>
          </div>

          <draggable
            v-model="trash.value"
            :group="{ name: 'doughnuts' }"
            @change="emptyTrash"
            item-key="trash"
            class="w-4/5 h-4/5"
            ghost-class="ghost-doughnut"
          >
            <template #item> </template>
          </draggable>
        </div>
      </div>

      <button
        @click="nextBox"
        class="nextArrow p-4 hover:opacity-80 text-c-primary text-4xl"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
SwiperCore.use({ Navigation });

import draggable from 'vuedraggable';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MenuDoughnutsBoxes',
  components: {
    draggable,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperBoxes: null,
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
      'SET_CURRENT_BOX_LENGTH',
    ]),
    setSwiperBoxes(swiper) {
      this.swiperBoxes = swiper;
    },
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
      this.swiperBoxes.slidePrev();
      this.SET_BOXES_CURRENT_BOX_INDEX('previous');
    },
    nextBox() {
      this.swiperBoxes.slideNext();
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
  watch: {
    currentBoxCapacity: function (newCapacity) {
      if (this.currentBox.value.length > newCapacity) {
        this.SET_CURRENT_BOX_LENGTH(newCapacity);
      }
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

.box-cap-6 {
  @apply grid grid-cols-3 grid-rows-2;
}

.box-cap-12 {
  @apply grid grid-cols-4 grid-rows-3;
}

.doughnut-icon--scale {
  @apply p-2 transition-all;
}

.doughnut-icon--scale:hover {
  @apply p-0;
}
</style>