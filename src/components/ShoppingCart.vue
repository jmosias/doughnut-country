<template>
  <transition name="fade">
    <div
      v-show="windowScrollY > 300"
      class="z-50 fixed bottom-0 right-0 w-full bg-c-black text-c-white flex flex-col text-sm sm:text-base border-t border-c-white rounded-t-3xl sm:w-1/3 transition-all"
    >
      <div
        @click="toggleActive()"
        class="py-2 sm:py-3 px-6 cursor-pointer flex justify-between items-center"
      >
        <h3 class="font-head font-bold">Your Orders</h3>
        <i
          class="text-3xl fas"
          :class="{ 'fa-chevron-up': !active, 'fa-chevron-down': active }"
        ></i>
      </div>
      <transition name="slide">
        <div
          v-if="active"
          class="shopping-cart flex flex-col justify-between bg-c-white text-c-tertiary"
        >
          <div
            v-if="!grandTotal"
            class="flex-grow p-6 scrollbar overflow-y-auto overflow-x-hidden italic sm:border-l border-c-black"
          >
            <p>It's empty.</p>
            <br />
            <p>Press the button under the catalogue items to add them here.</p>
            <br />
            <p>
              Doughnut boxes with 6 doughnuts are automatically added here.
              (soon)
            </p>
          </div>
          <div
            v-else
            class="flex-grow p-6 scrollbar overflow-y-auto overflow-x-hidden flex flex-col sm:border-l border-c-black"
          >
            <div
              v-for="(order, index) in orders"
              :key="order.id"
              class="flex mb-16 pb-6 border-b border-c-tertiary border-opacity-10"
            >
              <img
                :src="order.item.img"
                :alt="order.item.name"
                class="w-20 h-20 mr-4"
              />
              <div class="flex-grow flex flex-col gap-6">
                <div class="flex justify-between">
                  <div>
                    <h4 class="font-head font-bold">
                      {{ order.item.name }}
                      <span
                        v-if="order.item.description"
                        class="text-xs font-body text-c-secondary"
                        >({{ order.item.description }})</span
                      >
                    </h4>
                    <p class="italic font-extralight">
                      &#8369;
                      {{ new Intl.NumberFormat().format(order.item.price) }}
                    </p>
                  </div>
                  <i
                    @click="REMOVE_ITEM(index)"
                    class="cursor-pointer p-2 fas fa-times"
                  ></i>
                </div>
                <div class="flex justify-between items-center text-xs">
                  <p class="uppercase not-italic">
                    Subtotal: &#8369;
                    {{ new Intl.NumberFormat().format(order.price) }}
                  </p>
                  <div class="flex items-center">
                    <i
                      @click="REDUCE_QUANTITY(index)"
                      class="cursor-pointer p-2 fas fa-minus"
                    ></i>
                    <p class="px-2">{{ order.quantity }}</p>
                    <i
                      @click="INCREASE_QUANTITY(index)"
                      class="cursor-pointer p-2 fas fa-plus"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="p-6 flex justify-between items-center bg-c-black text-c-white"
          >
            <div>
              <p class="uppercase text-xs">Grand Total:</p>
              <h4 class="font-extralight uppercase text-3xl text-c-primary">
                &#8369; {{ new Intl.NumberFormat().format(grandTotal) }}
              </h4>
            </div>
            <button
              class="px-6 py-2 font-bold text-base uppercase bg-c-primary text-c-tertiary hover:bg-c-white rounded transition-all"
            >
              Place Order
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ShoppingCart',
  data() {
    return {
      active: false,
      windowScrollY: 0,
    };
  },
  methods: {
    ...mapMutations('cart', [
      'INCREASE_QUANTITY',
      'REDUCE_QUANTITY',
      'REMOVE_ITEM',
    ]),
    toggleActive() {
      this.active = !this.active;
    },
    onScroll() {
      this.windowScrollY = window.scrollY;
    },
  },
  computed: {
    ...mapState('cart', ['orders']),
    grandTotal() {
      let total = 0;
      this.orders.forEach((order) => {
        total += order.price;
      });
      return total;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="postcss" scoped>
.shopping-cart {
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
}

.slide-enter-active,
.slide-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  height: 0;
  min-height: 0;
  max-height: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>