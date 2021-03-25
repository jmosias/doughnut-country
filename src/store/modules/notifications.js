import { v4 as uuidv4 } from 'uuid';
const namespaced = true;

const state = {
  list: [],
}

const mutations = {
  ADD_NOTIFICATION: (state, {message, timer}) => {
    const newNotification = {
      id: uuidv4,
      message,
      timer
    }
    state.list.unshift(newNotification);
    setTimeout(() => {
      state.list.splice(state.list.length-1, 1)
    }, timer);
  },
  REMOVE_NOTIFICATION: (state, index) => state.list.splice(index, 1)
}

export default {
  namespaced,
  state,
  mutations,
}