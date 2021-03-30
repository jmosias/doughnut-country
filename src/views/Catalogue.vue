<template>
  <app-icons></app-icons>
  <main class="wrapper sm:flex-row">
    <div
      class="bg-c-white w-full flex-1 flex flex-col sm:w-auto sm:h-full sm:flex-row"
    >
      <div class="flex-1"></div>
      <div class="w-full flex sm:w-auto sm:h-full sm:flex-col">
        <div
          v-for="category in categories"
          :key="category.id"
          @click="changeCurrentCategoryName(category.name)"
          class="category py-4 px-8 flex-1 flex flex-col justify-center items-center sm:py-8 sm:px-4"
          :class="{
            selected: currentCategoryName == category.name,
            'not-selected': currentCategoryName !== category.name,
          }"
        >
          <svg class="w-12 h-12 fill-current">
            <use :xlink:href="`#${category.icon}`" />
          </svg>
          <p class="text-sm font-head font-bold">{{ category.name }}</p>
        </div>
      </div>
    </div>
    <nav
      class="bg-gradient-primary w-full py-4 px-8 flex justify-between items-center sm:w-auto sm:h-full sm:py-8 sm:px-4 sm:flex-col sm:justify-start sm:gap-8"
    >
      <i class="fas fa-bars sm:cursor-pointer"></i>
      <p class="font-head font-bold sm:hidden">Catalogue</p>
      <svg class="w-8 h-8 fill-current sm:cursor-pointer">
        <use :xlink:href="'#box'" />
      </svg>
    </nav>
  </main>
</template>

<script>
import AppIcons from '../components/AppIcons.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  name: 'Catalogue',
  components: {
    AppIcons,
  },
  setup() {
    const store = useStore();

    const currentCategoryName = ref('Doughnuts');

    const changeCurrentCategoryName = (categoryName) => {
      currentCategoryName.value = categoryName;
    };

    return {
      categories: computed(() => store.state.catalogue.categories),
      currentCategoryName,
      changeCurrentCategoryName,
    };
  },
};
</script>

<style lang="postcss" scoped>
.category,
.category p,
.category svg {
  @apply transition-all;
}

.category {
  @apply border-c-tertiary;
}

.category.selected {
  @apply border-b border-l border-r;
}

.category.selected:first-child {
  @apply border-l-0;
}

.category.selected:last-child {
  @apply border-r-0;
}

.category.not-selected {
  @apply bg-c-secondary border-t;
}

@media (min-width: 640px) {
  .category {
    @apply cursor-pointer;
  }

  .category.selected {
    @apply border-b border-t border-r border-l-0;
  }

  .category.not-selected {
    @apply border-l border-t-0;
  }

  .category.selected:first-child {
    @apply border-t-0;
  }

  .category.selected:last-child {
    @apply border-r border-b-0;
  }
}
</style>