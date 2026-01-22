import { createRouter, createWebHistory } from 'vue-router'

import IndexIndexIndexIndex from '@/pages/index/IndexIndex.vue';
import CounterIndexIndex from '@/pages/counter/CounterIndex.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      component: IndexIndexIndexIndex,
      path: '/',
    },
    {
      name: 'counter',
      component: CounterIndexIndex,
      path: '/counter',
    }
  ],
})

export default router
