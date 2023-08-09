<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const goToUserForm = () => {
  router.push({
    name: "UserForm",
  });
};

const goToPreview = () => {
  router.push({
    name: "Preview",
  });
};
</script>

<template>
  <header class="main-header">
    <img
      src="/src/assets/logo.png"
      alt="logo"
    >
    <ul class="menu-list">
      <li
        class="menu-list__item"
        :class="route.name === 'UserForm' ? 'active-link' : ''"
        @click="goToUserForm"
      >
        <a href="#"> Форма </a>
      </li>
      <li
        class="menu-list__item"
        :class="route.name === 'Preview' ? 'active-link' : ''"
        @click="goToPreview"
      >
        <a href="#"> Превью </a>
      </li>
    </ul>
  </header>

  <slot />

  <footer class="main-footer">
    <p>all rights reserved</p>
  </footer>
</template>

<style scoped>
@import "../assets/style/main-view.css";
</style>
