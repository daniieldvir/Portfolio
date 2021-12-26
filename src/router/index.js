import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home-page.vue';
import About from '../cmps/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
