import { v4 as uuidv4 } from 'uuid';
const namespaced = true;

const state = {
  flavours: [
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/honey_glazed.png') }] },
    { value: [{ name: 'Icy Glazed', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/icy_glazed.png') }] },
    { value: [{ name: 'White Choco', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/white_choco.png') }] },
    { value: [{ name: 'Dark Choco', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/dark_choco.png') }] },
    { value: [{ name: 'Dark Oreo', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/dark_oreo.png') }] },
    { value: [{ name: 'Strawberry', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/strawberry.png') }] },
    { value: [{ name: 'Blueberry', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/blueberry.png') }] },
    { value: [{ name: 'Cappuccino', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/cappuccino.png') }] },
    { value: [{ name: 'Almond Butter', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/almond_butter.png') }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/smores.png') }] },
    { value: [{ name: 'Nutty Road', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/nutty_road.png') }] },
    { value: [{ name: 'Caramel', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/caramel.png') }] },
    { value: [{ name: 'Coconut', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/coconut.png') }] },
    { value: [{ name: 'Kitkat', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/kitkat.png') }] },
    { value: [{ name: 'Nutella', id: uuidv4(), img: require('@/assets/images/doughnut_flavours/nutella.png') }] },
  ],
  boxes: [],
  box_of_6_price: 199,
  current_box_index: 0,
}

const mutations = {
  SET_BOXES: (state, value) => state.boxes = value,
  ADD_NEW_BOX: (state, value = []) => {
    const box = {
      value: value,
      capacity: 6
    };
    state.boxes.splice(state.current_box_index+1, 0, box);
  },
  CLEAR_CURRENT_BOX: (state) => state.boxes[state.current_box_index].value = [],
  REMOVE_CURRENT_BOX: (state) => state.boxes.splice(state.current_box_index, 1),
  SET_CURRENT_BOX_INDEX: (state, direction) => {
    if(direction == 'previous') {
      if(state.current_box_index > 0) {
        state.current_box_index -= 1;
      }
    } else if(direction == 'next') {
      if(state.current_box_index < state.boxes.length-1) {
        state.current_box_index += 1;
      }
    } else {
      state.current_box_index = direction;
    }
  },
  ADD_FLAVOUR: (state, {length, flavour}) => {
    const newFlavour = {
      name: flavour.name,
      id: uuidv4(),
      img: flavour.img
    }
    state.boxes[state.current_box_index].value[length] = newFlavour;
  }
}

export default {
  namespaced,
  state,
  mutations,
}