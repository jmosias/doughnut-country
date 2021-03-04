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
  height: 10vh;
  background-color: #131217;
  background: linear-gradient(180deg, #49240f 50%, #fff 50%);
}

.logo {
  height: 6vh;
  padding: 1.7vh 3vh 1.3vh;
  border-radius: 50% / 50%;
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
  font-size: 1.5vh;
  line-height: 1.5vh;
}

.logo-image {
  height: 2.6vh;
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
    height: 20vh;
  }

  .logo {
    height: 12vh;
    padding: 3.4vh 6vh 2.6vh;
  }

  .logo-text {
    font-size: 3vh;
    line-height: 3vh;
  }

  .logo-image {
    height: 5.2vh;
  }
}
</style>