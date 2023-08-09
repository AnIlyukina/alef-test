import { ref } from "vue";

import { defineStore } from "pinia";

import { User } from "../types/user";

export const useUserStore = defineStore("user", () => {
  const savedUser = ref<User | null>(null);

  const saveUser = (userData: User) => {
    savedUser.value = userData;
  };

  return {
    savedUser,
    saveUser,
  };
});
