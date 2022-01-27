import Dashboard from '../views/Dashboard.vue';
import ErrorPage from '../views/ErrorPage.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: () => Dashboard },
  { path: '/errorPage', name: 'ErrorPage', component: () => ErrorPage, props: true }  
]

export default routes;
