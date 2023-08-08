import { ref } from 'vue';

import { defineStore } from "pinia";

export const useAuthStore = defineStore("user", () => {

  let isAuth = ref(true);

  return {
    isAuth,
  }
})