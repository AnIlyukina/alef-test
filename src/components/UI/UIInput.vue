<script setup lang="ts">
import { toRefs } from "vue";

const emit = defineEmits<{
  update: [data: {prop: string, value: string}],
}>();

const props = defineProps<{
  modelValue: string;
  label: string;
  prop: string;
}>();

const { prop } = toRefs(props);

const changeValue = (event: Event): void => {
  const data = {
    prop: prop.value,
    value: (event.target as HTMLInputElement).value,
  }
  emit("update", data);
};
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
      {{ label }}
    </label>
  </div>
</template>

<style scoped>
@import "../../assets/style/u-i-input.css";
</style>
