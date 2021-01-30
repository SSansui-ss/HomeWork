import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

Vue.config.productionTip = false

// element-ui 按需引入
import '@/plugins/element'

// axios 配置
import axios from './http/api'
import { nextTick } from 'q';
Vue.prototype.$axios = axios 

// 全局路由守卫
router.beforeEach((to,form,next) =>{
  store.commit('bread',to.meta.bread)
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
