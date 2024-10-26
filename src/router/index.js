import { createRouter, createWebHistory } from 'vue-router';
import AdminLogin from '../views/AdminLogin.vue';
import AdminRoleSelector from '../views/AdminRoleSelector.vue';

const routes = [
  { path: '/login', name: 'AdminLogin', component: AdminLogin },
  { path: '/role', name: 'AdminRoleSelector', component: AdminRoleSelector },
  { path: '/', redirect: '/role' }, // Redirect to the role selector by default

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
