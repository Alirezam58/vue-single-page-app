import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView';
import ProfileView from '../views/ProfileView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
