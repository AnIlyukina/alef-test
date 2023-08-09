import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserForm from "../components/UserForm.vue";
import PreviewUser from "../components/PreviewUser.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "UserForm",
    component: UserForm,
  },
  {
    path: "/preview",
    name: "Preview",
    component: PreviewUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
