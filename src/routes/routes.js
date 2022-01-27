import MainPage from '../views/MainPage.vue';
import ErrorPage from '../views/ErrorPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/errorPage', name: 'ErrorPage', component: ErrorPage, props: true }  
]

export default routes;
