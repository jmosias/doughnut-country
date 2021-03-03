<template>
  <div class="app-header w-full flex justify-center items-center">
    <router-link to="/" class="logo flex justify-center bg-c-primary">
      <p class="logo-text float-left">D<br />C</p>
      <img src="../assets/images/app_logo.png" class="logo-image float-left" />
      <p class="logo-text">UGHNUT<br />UNTRY</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="postcss" scoped>
.app-header {
  height: 8vh;
  background-color: #d8b98b;
  background: linear-gradient(180deg, #49240f 50%, #d8b98b 50%);
}

.logo {
  height: 4vh;
  padding: 0.6vh 2.4vh;
  border-radius: 1vh;
  cursor: pointer;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.logo-text {
  font-weight: bold;
  font-size: 1.8vh;
  line-height: 1.8vh;
}

.logo-image {
  height: 3vh;
  width: auto;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media (min-width: 640px) {
  .app-header {
    height: 16vh;
    margin-bottom: 6vh;
  }

  .logo {
    height: 8vh;
    padding: 1.2vh 4.2vh;
    border-radius: 2vh;
  }

  .logo-text {
    font-size: 3.6vh;
    line-height: 3.6vh;
  }

  .logo-image {
    height: 6vh;
  }
}
</style>