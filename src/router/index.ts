import { createRouter, createWebHistory } from 'vue-router'

import IndexIndexIndexIndex from '@/pages/index/IndexIndex.vue'
import CounterIndexIndex from '@/pages/counter/CounterIndex.vue'
import MoveIndex from '@/pages/move/MoveIndex.vue'

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
    },
    {
      name: 'move',
      component: MoveIndex,
      path: '/move',
    }
  ],
})

export default router
