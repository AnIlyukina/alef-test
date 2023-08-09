<script setup lang="ts">

import { toRefs } from "vue";

const emit = defineEmits<{
  update: [value: string],
}>();

const props = defineProps<{
  modelValue: String,
  label: String,
  prop: String | Number,
}>();

const { prop } = toRefs(props)

const changeValue = (event: Event): void => {
  emit('update', { prop: prop.value, value: (event.target as HTMLInputElement).value})
}

</script>

<template>
  <div class="input-box">
    <input
      :value="modelValue"
      class="input-box__input"
      required
      @input="changeValue"
    >
    <label class="input-box__label">
      {{ label}}
    </label>
  </div>
</template>

<style scoped>
@import '../../assets/style/u-i-input.css';
</style>
