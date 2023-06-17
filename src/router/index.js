import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sppd-type',
      name: 'sppd-type',
      // component: () => import('../components/BottomSheet.vue')
      component: () => import('../views/SppdType.vue')
    }
  ],
  mode: 'out-in',
})

export default router
