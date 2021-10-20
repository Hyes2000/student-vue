// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import VueAxios from 'vue-axios'
// eslint-disable-next-line no-unused-vars
import VueCookies from 'vue-cookies'

Vue.use(ElementUI)
Vue.use(router)
Vue.use(VueAxios, axios)
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
