<template>
  <app-icons></app-icons>
  <div
    id="catalogue"
    class="catalogue relative w-full bg-c-white flex flex-col items-center gap-16"
  >
    <div class="gap-12 sm:gap-24 w-4/5 flex justify-center items-center">
      <div
        v-for="category in categories"
        :key="category.id"
        @click="changeCurrentCategoryName(category.name)"
        class="category flex flex-col justify-center items-center cursor-pointer text-c-secondary hover:text-c-tertiary transition-all"
        :class="{
          selected: currentCategoryName == category.name,
          'not-selected': currentCategoryName !== category.name,
        }"
      >
        <svg class="icon fill-current">
          <use :xlink:href="`#${category.icon}`" />
        </svg>
        <h3 class="category-name font-head font-bold">
          {{ category.name }}
        </h3>
      </div>
    </div>

    <div class="w-4/5 flex flex-wrap justify-center gap-y-12 sm:gap-y-24">
      <div
        v-for="item in currentCategoryItems()"
        :key="item.id"
        class="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center"
      >
        <img
          :src="item.img"
          :alt="item.name"
          class="disable-select w-1/2 h-auto max-w-xs pb-4"
        />
        <h4 class="text-base sm:text-lg font-head font-bold text-c-tertiary">
          {{ item.name }}
          <span
            v-if="item.description"
            class="text-sm font-body text-c-secondary"
            >({{ item.description }})</span
          >
        </h4>
        <p class="text-base sm:text-lg pb-2 italic font-extralight">
          &#8369;{{ item.price }}
        </p>
        <button
          @click="addToCart(item)"
          class="text-xs sm:text-sm border border-c-secondary hover:border-c-tertiary text-c-tertiary font-extralight py-1 px-3 rounded uppercase transitions-all"
        >
          Add to order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import AppIcons from './AppIcons';

export default {
  name: 'MenuCatalogue',
  components: {
    AppIcons,
  },
  data() {
    return {
      currentCategoryName: 'Bundles',
    };
  },
  methods: {
    ...mapMutations('cart', ['ADD_ITEM']),
    ...mapMutations('notifications', ['ADD_NOTIFICATION']),
    addNotification(message, timer = 3000) {
      this.ADD_NOTIFICATION({ message, timer });
    },
    currentCategoryItems() {
      return this.items.filter(
        (item) => item.categoryName == this.currentCategoryName
      );
    },
    changeCurrentCategoryName(name) {
      this.currentCategoryName = name;
    },
    addToCart(item) {
      this.ADD_ITEM(item);
      this.addNotification(`${item.name} has been added to your order.`);
    },
  },
  computed: {
    ...mapState('catalogue', ['categories', 'items']),
  },
};
</script>

<style lang="postcss" scoped>
.catalogue {
  padding: 4vh 2vh;
}

.icon {
  @apply w-16 h-16;
}

.category-name {
  position: relative;
}

.category-name::before {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 20%;
  border-bottom: 0.143vh solid #fff;
  @apply border-current transition-all;
}

.category:hover > .category-name::before,
.category.selected > .category-name::before {
  width: 100%;
}

.category.selected {
  @apply text-c-tertiary;
}

.category.not-selected {
  @apply transform-gpu scale-75;
}

@media (min-width: 640px) {
  .icon {
    @apply w-24 h-24;
  }

  .catalogue {
    padding: 8vh 4vh;
  }
}
</style>