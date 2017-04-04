import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { INCREMENT, DECREMENT } from '../store/mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

/* eslint-disable no-unused-vars */
export default new Vuex.Store({
  strict: debug,
  state: {
    count: 0
  },
  getters: getters,
  mutations: {
    [INCREMENT]: (state, payload) => { state.count += payload },
    [DECREMENT]: state => { state.count-- }
  },
  actions: {
    increment ({ commit }) {
      commit({type: INCREMENT, value: 10})
    }
  }
})
