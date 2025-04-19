import { createRouter, createWebHashHistory } from 'vue-router'
import Personal from '@/views/personal.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: Personal,
    },
  ],
})

export default router
