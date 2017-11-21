import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../components/main.vue') },
      { path: '/one', component: () => import('../components/one.vue') },
      { path: '/two', component: () => import('../components/two.vue') },
      { path: '/three', component: () => import('../components/three.vue') }
    ]
  })
}
