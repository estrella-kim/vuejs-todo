import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default store = new Vuex.store({
  state : {
    count : 0
  },
  mutations : {
    increment(state) {
    state.count++
  }
})
