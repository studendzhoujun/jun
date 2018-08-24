import Vue from 'vue'
import Router from 'vue-router'

import layout from 'components/app'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: layout
      }
    ]
  })

  return router
}
