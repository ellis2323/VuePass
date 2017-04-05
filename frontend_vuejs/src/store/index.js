import Vue from 'vue'
import Vuex from 'vuex'
import { SET_KEYBOXES, SELECT_KEYSBOXES, INCREMENT, DECREMENT } from '../store/mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

/* eslint-disable no-unused-vars */
function findKeysBoxbyUID (keysBoxes, uid) {
  if (keysBoxes.uid === uid) {
    return keysBoxes
  }
  // containers
  for (let i = 0; i < keysBoxes.containers.length; i++) {
    let res = findKeysBoxbyUID(keysBoxes.containers[i], uid)
    if (res !== null) return res
  }
  // entries
  for (let i = 0; i < keysBoxes.entries.length; i++) {
    let res = findKeysBoxbyUID(keysBoxes.entries[i], uid)
    if (res !== null) return res
  }
  // otherwise
  return null
}

/* eslint-disable no-unused-vars */
export default new Vuex.Store({
  strict: debug,
  state: {
    keysBoxes: {},
    activeKeysBoxUID: 0,
    activeKeysBox: {},
    count: 0
  },
  getters: {
    keysBoxes: (state) => state.keysBoxes,
    activeKeysBox: (state) => state.activeKeysBox,
    activeKeysBoxUID: (state) => state.activeKeysBoxUID,
    keys: (state) => state.activeKeysBox.keys
  },
  mutations: {
    [SET_KEYBOXES]: (state, keysBoxes) => {
      state.keysBoxes = keysBoxes
      // check active keysBox exists
      let pointer = keysBoxes
      for (let i = 0; i < state.activeKeysBox.length; i++) {
        let current = state.activeKeysBox[i]
        if (current in pointer) {
          pointer = pointer[current]
        } else {
          state.activeKeysBox = []
          break
        }
      }
    },
    [SELECT_KEYSBOXES]: (state, keysBoxUID) => {
      state.activeKeysBoxUID = keysBoxUID
      state.activeKeysBox = findKeysBoxbyUID(state.keysBoxes, keysBoxUID)
    },
    [INCREMENT]: (state, payload) => { state.count += payload },
    [DECREMENT]: state => { state.count-- }
  },
  actions: {
    setkeyboxes ({ commit }, keyBoxes) {
      commit({type: SET_KEYBOXES, value: keyBoxes})
    }
  }
})
