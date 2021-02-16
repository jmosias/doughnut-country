import { createStore } from 'vuex'
import doughnuts from './modules/menu/doughnuts'
import catalogue from './modules/menu/catalogue'

export default createStore({
  modules: {
    doughnuts,
    catalogue
  }
})
