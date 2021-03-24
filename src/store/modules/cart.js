import { v4 as uuidv4 } from 'uuid';

const namespaced = true;
const state = {
  orders: [],
}
const mutations = {
  ADD_ITEM: (state, item) => {
    let isOrderNew = true;
    let orderIndex = null;
    
    state.orders.forEach((order, index) => {
      if(order.item.id === item.id) {
        isOrderNew = false;
        orderIndex = index;
      }
    });

    if(isOrderNew) {
      const newOrderItem = {
        id: uuidv4(),
        quantity: 1,
        item: item,
        price: item.price
      }
      state.orders.push(newOrderItem);
    } else {
      state.orders[orderIndex].quantity++;
      state.orders[orderIndex].price = item.price * state.orders[orderIndex].quantity;
    }
  },
  INCREASE_QUANTITY: (state, index) => {
    state.orders[index].quantity++
    state.orders[index].price = state.orders[index].item.price * state.orders[index].quantity;
  },
  REDUCE_QUANTITY: (state, index) => {
    state.orders[index].quantity--
    state.orders[index].price = state.orders[index].item.price * state.orders[index].quantity;
    if(state.orders[index].quantity < 1) {
      state.orders.splice(index, 1)
    }
  },
  REMOVE_ITEM: (state, index) => state.orders.splice(index, 1)
}

export default {
  namespaced,
  state,
  mutations
}