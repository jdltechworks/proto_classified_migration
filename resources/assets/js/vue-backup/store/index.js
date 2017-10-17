import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/Auth'
import product from './modules/Product'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    a: '',
    b: []
  },
  getters: {},
  modules: {
    auth,
    product
  },
  strict: debug
})
