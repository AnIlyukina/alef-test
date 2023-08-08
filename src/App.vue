<script setup lang="ts">
import MainView from './views/MainView.vue';

</script>

<template>
  <component
    :is="MainView"
  >
    <main class="main-content">
      <router-view></router-view>
    </main>
  </component>
</template>

<style scoped>
</style>
