<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const goToUserForm = () => {
  router.push({
    name: 'UserForm'
  })
}

const goToPreview = () => {
  router.push({
    name: 'Preview'
  })
}


</script>

<template>
  <header class="main-header">
    <img src="/src/assets/logo.png" alt="logo">
    <ul class="menu-list">
      <li class="menu-list__item" @click="goToUserForm">
        <a href="#">
          Форма
        </a>
      </li>
      <li class="menu-list__item" @click="goToPreview">
        <a href="#">
          Превью
        </a>
      </li>
    </ul>
  </header>

  <slot></slot>

  <footer class="main-footer">
    <p>
      all rights reserved
    </p>
  </footer>
</template>

<style scoped>
@import '../assets/style/main-view.css';
</style>