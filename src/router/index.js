import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/components/Layout/Layout'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Auth from '@/pages/Auth/Auth'
import Profile from '@/pages/Profile/Profile'
import Finance from '@/pages/Finance/Finance'

const routes = [
  { path: '/', redirect: { name: 'Dashboard' } },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: 'Главная',
        },
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
          title: 'Профиль',
        },
      },
      {
        path: 'finance',
        name: 'Finance',
        component: Finance,
        meta: {
          title: 'Финансы',
        },
      },
    ],
  },
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} )

export default router
