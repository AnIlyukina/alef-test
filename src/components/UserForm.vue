<script setup lang="ts">

import { reactive } from 'vue';

import UIInput from './UI/UIInput.vue';

let dataUser = reactive({
  name: '',
  age: '',
  children: [{
    name: '',
    age: '',
  },
  {
    name: '',
    age: '',
  }]
})

</script>

<template>
  <form class="user-form">
    <h2 class="user-form__title">Персональные данные</h2>
    <u-i-input
      v-model="dataUser.name"
      label="Имя"
      />
    <u-i-input
      v-model="dataUser.age"
      label="Возраст"
    />
    <div class="user-form__add-child">
      <p>Дети (макс.5)</p>
      <button class="user-form__add-button">+ Добавить ребенка</button>
    </div>
    <div>
      <ul class="child-list">
        <li
          v-for="(child, index) in dataUser.children"
          :key="index"
          class="child-item"
          >
            <u-i-input
              v-model="child.name"
              label="Имя"
            />
            <u-i-input
              v-model="child.age"
              label="Возраст"
            />
            <button class="child-item__delete-button">Удалить</button>
        </li>
      </ul>
    </div>
    <div>
      <button class="user-form__save-button">Сохранить</button>
    </div>
  </form>
</template>

<style scoped>
@import '../assets/style/user-form.css';

</style>