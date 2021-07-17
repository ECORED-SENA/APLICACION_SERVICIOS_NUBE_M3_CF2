import Vue from 'ecored-base-pkg/src/vue.js'
import App from './App.vue'
import router from './router'
import store from 'ecored-base-pkg/src/store/index.js'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import './styles/_styles.sass'

import config from './config/global'
Vue.prototype.$config = config

const packageJson = require('../package.json')
Vue.prototype.$package = packageJson

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
