<template>
  <main class="wrapper gradient-bg bg-c-primary">
    <div class="disable-select inline-flex justify-center text-c-black">
      <p class="logo-text float-left">D<br />C</p>
      <img
        src="../assets/images/app_logo.png"
        class="logo-image disable-select float-left"
      />
      <p class="logo-text">UGHNUT<br />UNTRY</p>
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        router.push({ name: 'Catalogue' });
      }, 3000);
    });
  },
};
</script>

<style lang="postcss" scoped>
.gradient-bg {
  background-image: linear-gradient(
    to right top,
    #ffd270,
    #ffd885,
    #ffdd91,
    #ffe5ad,
    #ffecc2
  );
}

.logo-text {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
}
.logo-image {
  height: 2rem;
  width: auto;
}

@media (min-width: 640px) {
  .logo-text {
    font-size: 2rem;
    line-height: 2rem;
  }
  .logo-image {
    height: 4rem;
  }
}
</style>