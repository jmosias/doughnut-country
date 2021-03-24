import { createStore } from 'vuex'
import doughnuts from './modules/menu/doughnuts'
import catalogue from './modules/menu/catalogue'
import cart from './modules/cart'

export default createStore({
  modules: {
    doughnuts,
    catalogue,
    cart
  }
})
