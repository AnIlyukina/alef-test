<script setup lang="ts">

import { useUserStore} from '../stores/user.ts';
import { storeToRefs } from 'pinia'

const store = useUserStore()

const { savedUser } = storeToRefs(store)

</script>

<template>
  <div class="preview">
    <div v-if="savedUser">
      <h2 class="preview__title">Персональные данные</h2>
      <p class="preview__user"> {{ savedUser.name}}, {{ savedUser.age }} лет </p>
      <div class="preview__child">
        <h2 class="preview__title">Дети</h2>
        <ul v-if="savedUser.children.length">
          <li
            v-for="child in savedUser.children"
            class="preview__child-item"
          >
            <p>{{ child.name}}, {{ child.age }} лет</p>
          </li>
        </ul>
        <p v-else>
          Нет
        </p>
      </div>
    </div>
    <p
      v-else
      class="preview__empty"
    >
      Данные о пользователе не сохранены
    </p>
  </div>
</template>

<style scoped>
@import '../assets/style/preview.css';
</style>
