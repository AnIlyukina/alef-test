<script lang="ts" setup>
import UIInput from "./UI/UIInput.vue";
import ChildForm from "./ChildForm.vue";

import { ref, watch } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

import { User } from "../types/user";

const store = useUserStore();

const { savedUser } = storeToRefs(store);


const initialStateForm = {
  name: "",
  age: "",
  children: [],
};

const isSavedForm = ref(!!savedUser.value)

const currentState = savedUser.value
  ? savedUser.value
  : { ...initialStateForm };

const stateForm = ref<User>(currentState);

watch(stateForm.value, (value) => {
  if (value && isSavedForm.value) {
    isSavedForm.value = false
  }
})

const updateValue = ({ prop, value} : {prop: string, value: string}): void => {
  stateForm.value[prop] = value;
};

const submitForm = () => {
  store.saveUser(stateForm.value);
  isSavedForm.value = true
};
</script>

<template>
  <form
    class="user-form"
    @submit.prevent="submitForm"
  >
    <h2
      class="user-form__title"
    >
      Персональные данные
    </h2>
    <u-i-input
      v-model="stateForm.name"
      :label="'Имя'"
      :prop="'name'"
      :input-type="'text'"
      @update="updateValue"
    />
    <u-i-input
      v-model="stateForm.age"
      :label="'Возраст'"
      :input-type="'number'"
      :prop="'age'"
      @update="updateValue"
    />
    <child-form :state="stateForm.children" />
    <div>
      <button
        type="submit"
        class="user-form__save-button"
      >
        <img 
          v-if="isSavedForm"
          class="icon-saved-form"
          src="/src/assets/icons/check-mark.png">
        <span v-else>
          Сохранить
        </span>
      </button>
    </div>
  </form>
</template>

<style scoped>
@import "../assets/style/user-form.css";
</style>
