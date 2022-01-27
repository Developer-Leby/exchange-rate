import Main from '@/components/Main.vue';
import Error from '@/components/Error.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/error', name: 'Error', component: Error, props: true },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }  
]

export default routes;
