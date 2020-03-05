import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true
  },
  mutations: {
    show (state) {
      state.isShow = true
      console.log(state.isShow)
    },
    hide (state) {
      state.isShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
