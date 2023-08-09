<script lang="ts" setup>
import type { PropType } from "vue";
import { computed, toRefs } from "vue";
import UIInput from "./UI/UIInput.vue";
import { Child } from "../types/user";

const props = defineProps({
  state: {
    type: Array as PropType<Array<Child>>,
    required: true,
  },
});

const { state } = toRefs(props);

const isShowAddButton = computed<boolean>(() => {
  return state.value.length < 5;
});

const addChild = (): void => {
  if (state.value.length < 5) {
    state.value.push({
      name: "",
      age: "",
    });
  }
};

const deleteChild = (index: number): void => {
  state.value.splice(index, 1);
};

const updateName = ({ prop, value} : {prop: string, value: string}): void => {
  state.value[Number(prop)].name = value;
};

const updateAge = ({ prop, value} : {prop: string, value: string}): void => {
  state.value[Number(prop)].age = value;
};
</script>

<template>
  <div class="child-form">
    <p>Дети (макс.5)</p>
    <button
      class="child-form__add-button"
      :class="[isShowAddButton ? '' : 'hidden']"
      @click.prevent="addChild"
    >
      <img
        class="plus-icon"
        alt="plus"
        src="/src/assets/icons/plus.png"
      >
      Добавить ребенка
    </button>
  </div>
  <di
    class="child-list"
  >
    <transition-group
      name="list"
      tag="ul"
    >
      <li 
        v-for="(child, index) in state" 
        :key="index" 
        class="child-item"
      >
        <u-i-input
          v-model="child.name"
          :label="'Имя'"
          :input-type="'text'"
          :prop="`${index}`"
          @update="updateName"
        />
        <u-i-input
          v-model="child.age"
          :prop="`${index}`"
          :input-type="'number'"
          :label="'Возраст'"
          @update="updateAge"
        />
        <button
          class="child-item__delete-button"
          @click.prevent="deleteChild(index)"
        >
          Удалить
        </button>
      </li>
    </transition-group>
  </di>
</template>

<style scoped>
@import "../assets/style/child-form.css";
</style>
