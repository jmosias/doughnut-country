<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
</script>

<style lang="postcss">
.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  @apply bg-c-white;
}

.scrollbar::-webkit-scrollbar {
  width: 0.3rem;
  @apply bg-c-white;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0.3rem;
  @apply bg-c-secondary;
}

.disable-select {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 40%;
}

.wrapper {
  @apply h-full w-full overflow-hidden flex flex-col justify-center items-center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
