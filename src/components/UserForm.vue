<script  lang="ts" setup>

import { ref } from 'vue';
import { useUserStore } from '../stores/user'
import { storeToRefs } from "pinia";

import UIInput from './UI/UIInput.vue';
import ChildForm from './ChildForm.vue';

import { User } from "../types/user";

const store = useUserStore()

const { savedUser } = storeToRefs(store)

let initialStateForm = {
  name: '',
  age: '',
  children : []
}

let stateForm = ref<User>(savedUser.value ? savedUser.value : {...initialStateForm})

const updateValue = ({prop, value}: {prop: string, value: string}): void => {
  stateForm.value[prop] = value
}

const submitForm = () => {
  store.saveUser(stateForm.value)
}

</script>

<template>
  <form
    class="user-form"
    @submit.prevent="submitForm"
  >
    <h2 class="user-form__title">Персональные данные</h2>
    <u-i-input
      v-model="stateForm.name"
      :label="'Имя'"
      :prop="'name'"
      @update="updateValue"
      />
    <u-i-input
      v-model="stateForm.age"
      :label="'Возраст'"
      :prop="'age'"
      @update="updateValue"
    />
    <child-form
      :state="stateForm.children"
    />
    <div>
      <button
        type="submit"
        class="user-form__save-button"
      >
        Сохранить
      </button>
    </div>
  </form>
</template>

<style scoped>
@import '../assets/style/user-form.css';

</style>
