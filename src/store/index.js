import { createStore } from 'vuex'
import doughnuts from './modules/menu/doughnuts'
import catalogue from './modules/menu/catalogue'
import cart from './modules/cart'
import notifications from './modules/notifications'

export default createStore({
  modules: {
    doughnuts,
    catalogue,
    cart,
    notifications
  }
})
