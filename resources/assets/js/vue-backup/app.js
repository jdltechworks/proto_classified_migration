import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import App from './containers/App'
import store from './store'
import routes from './routes'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'

Vue.use(VueRouter)
Vue.use(VeeValidate)



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

sync(store, router)

new Vue({
  store,
  router,
  components: { App }
}).$mount('#main')
