import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import UserForm from '../components/UserForm.vue';
import Preview from '../components/Preview.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'UserForm',
        component: UserForm,
    },
    {
        path: '/preview',
        name: 'Preview',
        component: Preview,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;