import { createRouter, createWebHistory } from 'vue-router'
import Personal from '@/views/personal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: Personal,
    },
  ],
})

export default router
