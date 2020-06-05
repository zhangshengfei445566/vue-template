import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import modulesA from "./modules/modulesA";

Vue.use(Vuex)

const state={

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    a: modulesA
  },
  getters
})
