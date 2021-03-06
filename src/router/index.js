import { createRouter, createWebHistory } from 'vue-router'

import { isAuthenticated } from '../use/Auth'

import Layout from '@/components/Layout/Layout'

import Auth from '@/pages/Auth/Auth'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Profile from '@/pages/Profile/Profile'
import Finance from '@/pages/Finance/Finance'
import Clients from '@/pages/Clients/Clients'
import Partners from '@/pages/Partners/Partners'
import Partner from '@/pages/Partner/Partner'
import Support from '@/pages/Support/Support'
import Contacts from '@/pages/Contacts/Contacts'
import Offer from '@/pages/Offer/Offer'
import Error from '@/pages/Error/Error'
import Faq from '@/pages/FAQ/FAQ'

const routes = [
  {
    path: '/',
    redirect: { name: 'Dashboard' },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      title: 'Авторизация',
    },
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Dashboard' },
    beforeEnter: ( to, from, next ) => {
      isAuthenticated() ? next() : next( { name: 'Auth' } )
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: 'Главная',
          isBreadcrumbs: false,
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
      {
        path: 'clients',
        name: 'Clients',
        component: Clients,
        meta: {
          title: 'Клиенты',
        },
      },
      {
        path: 'partners',
        name: 'Partners',
        component: Partners,
        meta: {
          title: 'Агенты',
        },
      },
      {
        path: 'partners/:id',
        name: 'Partner',
        component: Partner,
        meta: {
          title: 'Агент',
        },
      },
      {
        path: 'support',
        name: 'Support',
        component: Support,
        meta: {
          title: 'Помощь',
        },
        children: [
          {
            path: 'contacts',
            name: 'Contacts',
            component: Contacts,
            meta: {
              title: 'Контакты',
            },
          },
          {
            path: 'offer',
            name: 'Offer',
            component: Offer,
            meta: {
              title: 'Правила',
            },
          },
          {
            path: 'faq',
            name: 'Faq',
            component: Faq,
            meta: {
              title: 'Частые вопросы',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/error-404',
    name: 'Error-404',
    component: Error,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'error-404',
  },
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} )

router.beforeEach( ( to, from, next ) => {
  if ( to.meta.title ) {
    document.title = to.meta.title
  }
  next()
} )

export default router
