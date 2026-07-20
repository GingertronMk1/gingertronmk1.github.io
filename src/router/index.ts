import { createRouter, createWebHashHistory } from "vue-router";

import CounterIndex from '@/pages/counter/CounterIndex.vue'
import IndexIndex from '@/pages/index/IndexIndex.vue'
import RFLTranslatorIndex from '@/pages/rfl-translator/RFLTranslatorIndex.vue'
import MoveIndex from "@/pages/move/MoveIndex.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'counter',
      component: CounterIndex,
      path: '/counter',
    },
    {
      name: 'rfl-translator',
      component: RFLTranslatorIndex,
      path: '/rfl-translator',
    },
    {
      name: 'move',
      component: MoveIndex,
      path: '/move',
    },
    {
      name: 'index',
      component: IndexIndex,
      path: '/',
    },
  ],
});

export default router;
