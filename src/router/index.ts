import { createRouter, createWebHistory } from 'vue-router'

import IndexIndex from '@/pages/index/IndexIndex.vue'
import CounterIndex from '@/pages/counter/CounterIndex.vue'
import RFLTranslatorIndex from '@/pages/rfl-translator/RFLTranslatorIndex.vue'

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
    },
    {
      name: 'RFLTranslator',
      component: RFLTranslatorIndex,
      path: '/rfl-translator',
    },
  ],
})

export default router
