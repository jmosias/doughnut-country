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

    <div
      class="overflow-hidden relative w-full flex-grow border border-dashed border-c-white rounded-xl"
    >
      <swiper
        @swiper="setSwiperBoxes"
        :allowTouchMove="false"
        :slidesPerView="3"
        :centeredSlides="true"
        class="swiper-boxes"
      >
        <swiper-slide
          v-for="(box, index) in doughnutBoxes"
          :key="index"
          @click="changeBox(index)"
          class="flex justify-center items-center"
          :class="{
            'slide-is-active': isCurrentIndex(index),
            'slide-not-active': !isCurrentIndex(index),
          }"
        >
          <div class="relative w-full h-auto flex justify-center">
            <img src="../assets/images/doughnut_box.png" class="doughnut-box" />
            <draggable
              v-model="box.value"
              :group="{ name: 'doughnuts', put: isBoxFillable(index) }"
              :disabled="!isCurrentIndex(index)"
              @change="addFlavour"
              item-key="box"
              @start="isTrashOpen = true"
              @end="isTrashOpen = false"
              ghost-class="ghost-doughnut"
              class="draggable-box absolute bottom-0"
            >
              <template #item="{ element }">
                <img
                  :src="element.img"
                  :alt="element.name"
                  class="doughnut-icon cursor-pointer w-full h-auto"
                />
              </template>
            </draggable>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="z-10 absolute bottom-0 p-6 w-full flex justify-center items-center gap-x-16"
      >
        <p class="text-c-white font-extralight text-center">
          Box no. {{ current_box_index + 1 }}
        </p>
        <div class="flex gap-x-4 items-center">
          <i
            @click="cloneBox"
            class="cursor-pointer fas fa-clone hover:opacity-80 text-c-pastel-yellow text-lg"
          ></i>
          <i
            @click="clearBox"
            class="cursor-pointer fas fa-undo-alt hover:opacity-80 text-c-pastel-orange text-lg"
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
        class="z-10 absolute bottom-6 left-6 w-1/5 h-1/5 flex justify-center items-center border border-dashed border-c-pastel-red rounded-xl"
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
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapMutations, mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.min.css';

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
      'CLEAR_CURRENT_BOX',
      'REMOVE_CURRENT_BOX',
      'SET_CURRENT_BOX_INDEX',
      'ADD_FLAVOUR',
    ]),
    setSwiperBoxes(swiper) {
      this.swiperBoxes = swiper;
    },
    emptyTrash() {
      this.trash.value = [];
    },
    isCurrentIndex(index) {
      return index == this.current_box_index;
    },
    isBoxFillable(index) {
      return (
        index == this.current_box_index &&
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
      this.SET_CURRENT_BOX_INDEX('next');
    },
    changeBox(index) {
      this.SET_CURRENT_BOX_INDEX(index);
    },
    cloneBox() {
      this.ADD_NEW_BOX(this.currentBox.value);
      this.SET_CURRENT_BOX_INDEX('next');
    },
    clearBox() {
      this.CLEAR_CURRENT_BOX();
    },
    removeBox() {
      this.REMOVE_CURRENT_BOX();
      if (
        this.current_box_index <= this.boxes.length &&
        this.boxes.length !== 0
      ) {
        this.SET_CURRENT_BOX_INDEX('previous');
      } else {
        this.ADD_NEW_BOX();
      }
    },
  },
  computed: {
    ...mapState('doughnuts', [
      'boxes',
      'current_box_index'
    ]),
    isLastBox() {
      return this.boxes.length == 1 ? true : false;
    },
    currentBox() {
      return this.boxes[this.current_box_index];
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
    current_box_index: function () {
      this.$nextTick(() => {
        this.swiperBoxes.update();
        this.$nextTick(() => {
          this.swiperBoxes.slideTo(this.current_box_index);
        });
      });
    },
  },
};
</script>

<style lang='postcss' scoped>
.swiper-boxes {
  height: 60vh;
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slide-is-active {
  @apply transform scale-150 transition-all duration-500;
}

.slide-not-active {
  opacity: 50%;
  @apply cursor-pointer opacity-50 transform scale-50 transition-all;
}

.slide-not-active:hover {
  @apply opacity-75 scale-75;
}

.doughnut-box {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.draggable-box {
  @apply w-2/3 h-2/5 grid grid-cols-3 grid-rows-2 justify-items-center items-center;
  margin-bottom: 8%;
}

.ghost-doughnut {
  @apply opacity-80;
}

.doughnut-icon {
  @apply transition-all;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 8%;
}

.doughnut-icon:hover {
  padding: 0;
}

.doughnut-icon:nth-child(1),
.doughnut-icon:nth-child(2),
.doughnut-icon:nth-child(3) {
  @apply transform;
  --tw-scale-x: 0.98;
  --tw-scale-y: 0.98;
}

.doughnut-icon:nth-child(4),
.doughnut-icon:nth-child(5),
.doughnut-icon:nth-child(6) {
  @apply transform;
  --tw-scale-x: 1.13;
  --tw-scale-y: 1.13;
}

.doughnut-icon:nth-child(1) {
  --tw-translate-x: 8%;
}

.doughnut-icon:nth-child(3) {
  --tw-translate-x: -8%;
}

.doughnut-icon:nth-child(4) {
  --tw-translate-x: -8%;
}

.doughnut-icon:nth-child(6) {
  --tw-translate-x: 8%;
}
</style>