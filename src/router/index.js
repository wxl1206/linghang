import { createRouter, createWebHistory } from 'vue-router'
// import wustHelper from '../views/wustHelper.vue'
// import works from '../views/works.vue'

import music from 'views/works/music.vue'
import rck from 'views/works/rck.vue'
 


const routes = [
  {
    path: '/',
    name: 'wustHelper',
    component: () => import('views/wustHelper.vue')
  },
  {
    path: '/works',
    name: 'works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('views/works.vue'),
    // works,
      children: [
      {
        path: 'music',
        name: 'music',
        component: () => import('views/works/music.vue')
      }
    ]
  },
  {
    path: '/detail/:id',
    name: 'detail',
  },
  {
    path: '/detail/music',
    name: 'music',
    component: () => import('views/works/music.vue')
  },
  {
    path: '/detail/rck',
    name: 'rck',
    component: () => import('views/works/rck.vue')
  },
  {
    path: '/detail/wt',
    name: 'wt',
    component: () => import('views/works/wt.vue')
  },
  {
    path: '/detail/qxp',
    name: 'qxp',
    component: () => import('views/works/qxp.vue')
  },
  {
    path: '/detail/am',
    name: 'am',
    component: () => import('views/works/am.vue')
  },
  {
    path: '/detail/ep',
    name: 'ep',
    component: () => import('views/works/ep.vue')
  },
  {
    path: '/detail/kdxd',
    name: 'kdxd',
    component: () => import('views/works/kdxd.vue')
  },
  {
    path: '/detail/mind',
    name: 'mind',
    component: () => import('views/works/mind.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('views/helper/download.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
