import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import UserForm from "../components/UserForm.vue";
import PreviewData from "../components/PreviewData.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "UserForm",
    component: UserForm,
  },
  {
    path: "/preview",
    name: "Preview",
    component: PreviewData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
