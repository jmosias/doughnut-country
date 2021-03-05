<template>
  <menu-catalogue-icons></menu-catalogue-icons>
  <div
    id="catalogue"
    class="catalogue w-full bg-c-white flex flex-col items-center gap-20"
  >
    <div
      class="gap-12 sm:gap-24 pb-4 w-4/5 flex justify-center items-center border-b border-dashed border-c-secondary"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        @click="changeCurrentCategoryName(category.name)"
        class="category flex flex-col justify-center items-center cursor-pointer text-c-tertiary hover:text-c-secondary transition-all"
        :class="{ selected: currentCategoryName == category.name }"
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
            class="text-sm sm:text-xs font-body text-c-secondary"
            >({{ item.description }})</span
          >
        </h4>
        <p class="text-base sm:text-lg pb-2 italic font-extralight">
          &#8369;{{ item.price }}
        </p>
        <button
          class="text-xs sm:text-sm border border-c-secondary hover:border-c-tertiary text-c-tertiary font-extralight py-1 px-3 rounded uppercase transitions-all"
        >
          Add to order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MenuCatalogueIcons from './MenuCatalogueIcons';

export default {
  name: 'MenuCatalogue',
  components: {
    MenuCatalogueIcons,
  },
  data() {
    return {
      currentCategoryName: 'Bundles',
    };
  },
  methods: {
    currentCategoryItems() {
      return this.items.filter(
        (item) => item.categoryName == this.currentCategoryName
      );
    },
    changeCurrentCategoryName(name) {
      this.currentCategoryName = name;
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
  width: 21%;
  border-bottom: 0.15vh solid #fff;
  @apply border-c-secondary;
}

.category:hover > .category-name::before,
.category.selected > .category-name::before {
  width: 100%;
}

.category.selected {
  @apply text-c-secondary;
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