<template>
  <div class="bg-c-black">
    <router-view />
  </div>
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
</style>
