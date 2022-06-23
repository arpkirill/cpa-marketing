import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../components/Layout/Layout'
import HelloWorld from '../components/HelloWorld'

const routes = [
  { path: '/', redirect: { name: 'HelloWorld' } },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'HelloWorld' },
    children: [
      {
        path: 'hello',
        name: 'HelloWorld',
        component: HelloWorld,
      },
    ],
  },
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} )

export default router
