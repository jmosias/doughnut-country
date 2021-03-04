<template>
  <div
    class="w-full h-1/2 p-3 sm:w-1/2 gap-y-1 sm:h-full sm:p-6 sm:gap-y-3 bg-c-primary flex flex-col items-center"
  >
    <h3 class="py-1 text-xl sm:py-3 sm:text-2xl text-c-tertiary font-head font-bold">
      Flavours
    </h3>
    <div
      class="scrollbar overflow-y-auto overflow-x-hidden flex-grow grid grid-cols-5 grid-rows-3 gap-1"
    >
      <draggable
        v-for="(flavour, index) in flavours"
        :key="index"
        v-model="flavour.value"
        :group="{ name: 'doughnuts', pull: 'clone', put: false }"
        :sort="false"
        item-key="flavours"
        class="box-border flex flex-col items-center"
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
          <p
            class="text-xs sm:text-sm text-c-tertiary font-extra-light text-center"
          >
            {{ flavour.value[0].name }}
          </p>
          <button
            v-if="isScreenBig"
            @click="addToBoxButton(flavour.value[0])"
            class="btn-add w-3/5 bg-c-secondary text-c-tertiary font-bold px-2 rounded-lg text-xs uppercase"
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
  data() {
    return {
      windowWidth: window.innerWidth,
      isScreenBig: window.innerWidth > 640,
    };
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
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  computed: {
    ...mapState('doughnuts', ['flavours', 'boxes', 'current_box_index']),
  },
  watch: {
    windowWidth: function () {
      this.isScreenBig = this.windowWidth > 640;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
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