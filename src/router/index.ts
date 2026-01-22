import { createRouter, createWebHistory } from 'vue-router'

import IndexIndex from '@/pages/index/index.vue';
import CounterIndex from '@/pages/counter/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      component: IndexIndex,
      path: '/',
    },
    {
      name: 'counter',
      component: CounterIndex,
      path: '/counter',
    }
  ],
})

export default router
