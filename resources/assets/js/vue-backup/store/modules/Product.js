import * as types from '../mutation-types'

const state = {
  products: []
}

const getters = {
  products: state => state.products
}

const actions = {
  getAllProducts ({ commit }, products) {},
  findProducyById ({ commit }, products) {}
}

const mutations = {
  [types.IS_FETCHING_PRODUCTS] (state) {},
  [types.PRODUCTS_FETCH] (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
