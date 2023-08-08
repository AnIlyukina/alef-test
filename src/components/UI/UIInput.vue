<script setup lang="ts">

defineProps<{
  modelValue: String,
  label: String,
}>();

</script>

<template>
  <div class="input-box">
    <label class="input-box__label">
      {{ label}}
    </label>
    <input
      :value="modelValue"
      class="input-box__input"
    >
  </div>
</template>

<style scoped>
@import '../../assets/style/u-i-input.css';
</style>