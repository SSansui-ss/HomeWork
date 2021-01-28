import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
    bread:{}
  },
	mutations: {
    bread(state,mb){
      state.bread = mb
    }
  },
	actions: {},
	modules: {},
})
