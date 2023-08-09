<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import UIInput from './UI/UIInput.vue';
import { Child } from "../types/user";

const props = defineProps({
  state: {
    type: Array as PropType<Array<Child>>,
    required: true,
  }
})

const { state } = toRefs(props);

const isShowAddButton = computed<boolean>(() => {
  return state.value.length < 5
})

const addChild = ():void => {
  state.value.push({
    name: '',
    age: '',
  })
}

const deleteChild = (index: number): void => {
  state.value.splice(index, 1)
}

const updateName = ({ prop, value}: {prop: number, value: string}):void => {
  state.value[prop].name = value
}

const updateAge = ({ prop, value }: {prop: number, value: string}):void => {
  state.value[prop].age = value
}

</script>

<template>
  <div class="child-form">
    <p>Дети (макс.5)</p>
    <button
      v-if="isShowAddButton"
      class="child-form__add-button"
      @click.prevent="addChild"
    >
      + Добавить ребенка
    </button>
  </div>
  <ul
    v-if="state.length"
    class="child-list">
    <li
      v-for="(child, index) in state"
      :key="index"
      class="child-item"
    >
      <u-i-input
        v-model="child.name"
        :label="'Имя'"
        :prop="index"
        @update="updateName"
      />
      <u-i-input
        v-model="child.age"
        :prop="index"
        :label="'Возраст'"
        @update="updateAge"
      />
      <button
        class="child-item__delete-button"
        @click="deleteChild(index)"
      >
        Удалить
      </button>
    </li>
  </ul>
</template>

<style scoped>

@import '../assets/style/child-form.css';

</style>
