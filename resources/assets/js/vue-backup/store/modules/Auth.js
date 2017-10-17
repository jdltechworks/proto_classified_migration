import * as types from '../mutation-types'

const state = {
  user: {}
}

const getters = {
  credentials: state => state.user
}

const actions = {
  Authenticate ({ commit }, credentials) {},
  Logout ({ commit }, credentials) {}
}

const mutations = {
  [types.IS_AUTHENTICATING] (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
