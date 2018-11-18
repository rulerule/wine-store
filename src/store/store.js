import Vue from 'vue'
import Vuex from 'vuex'

import winePromotions from './modules/winePromotions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    winePromotions
  }
})
