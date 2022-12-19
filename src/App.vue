<template>
  <div class="app">
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app {
  padding: 20px 20px 50px;
  box-sizing: border-box;
  min-height: 100vh;
  background: url("./assets/img/bg.jpg");
  background-size: 200% 100%
}
.main {
  max-width: 600px;
  margin: 0 auto;
}
</style>
