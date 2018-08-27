import Vue from 'vue'
import Router from 'vue-router'

import layout from 'components/app'
import index from 'components/index'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: layout
      },
      {
        path: '/index',
        component: index
      }
    ]
  })

  return router
}
