import Vue from 'vue'
import App from '../App.vue'
import 'iview/dist/styles/iview.css'
import { createRouter } from '../router'
import { createStore } from '../store'
import { sync } from 'vuex-router-sync'

export function createApp () {
  // 创建router实例
  const router = createRouter()
  const store  = createStore()

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}