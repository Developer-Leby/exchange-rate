import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main.vue';
import Error from '../components/Error.vue';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/error',
    component: Error
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
});