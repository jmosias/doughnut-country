import { v4 as uuidv4 } from 'uuid';

import honey_glazed from '@/assets/images/doughnut_flavours/honey_glazed.png';
import icy_glazed from '@/assets/images/doughnut_flavours/icy_glazed.png';
import white_choco from '@/assets/images/doughnut_flavours/white_choco.png';
import dark_choco from '@/assets/images/doughnut_flavours/dark_choco.png';
import dark_oreo from '@/assets/images/doughnut_flavours/dark_oreo.png';
import strawberry from '@/assets/images/doughnut_flavours/strawberry.png';
import blueberry from '@/assets/images/doughnut_flavours/blueberry.png';
import cappuccino from '@/assets/images/doughnut_flavours/cappuccino.png';
import almond_butter from '@/assets/images/doughnut_flavours/almond_butter.png';
import smores from '@/assets/images/doughnut_flavours/smores.png';
import nutty_road from '@/assets/images/doughnut_flavours/nutty_road.png';
import caramel from '@/assets/images/doughnut_flavours/caramel.png';
import coconut from '@/assets/images/doughnut_flavours/coconut.png';
import kitkat from '@/assets/images/doughnut_flavours/kitkat.png';
import nutella from '@/assets/images/doughnut_flavours/nutella.png';

const namespaced = true;

const state = {
  flavours: [
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: honey_glazed }] },
    { value: [{ name: 'Icy Glazed', id: uuidv4(), img: icy_glazed }] },
    { value: [{ name: 'White Choco', id: uuidv4(), img: white_choco }] },
    { value: [{ name: 'Dark Choco', id: uuidv4(), img: dark_choco }] },
    { value: [{ name: 'Dark Oreo', id: uuidv4(), img: dark_oreo }] },
    { value: [{ name: 'Strawberry', id: uuidv4(), img: strawberry }] },
    { value: [{ name: 'Blueberry', id: uuidv4(), img: blueberry }] },
    { value: [{ name: 'Cappuccino', id: uuidv4(), img: cappuccino }] },
    { value: [{ name: 'Almond Butter', id: uuidv4(), img: almond_butter }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: smores }] },
    { value: [{ name: 'Nutty Road', id: uuidv4(), img: nutty_road }] },
    { value: [{ name: 'Caramel', id: uuidv4(), img: caramel }] },
    { value: [{ name: 'Coconut', id: uuidv4(), img: coconut }] },
    { value: [{ name: 'Kitkat', id: uuidv4(), img: kitkat }] },
    { value: [{ name: 'Nutella', id: uuidv4(), img: nutella }] },
  ],
  boxes: [],
  boxesCurrentBoxIndex: 0,
  boxesCapacities: [6, 12]
}

const mutations = {
  SET_FLAVOURS: (state, value) => (state.flavours = value),
  SET_BOXES: (state, value) => (state.boxes = value),
  ADD_NEW_BOX: (state, value = []) => {
    const box = {
      value: value,
      capacity: 6
    };
    state.boxes.splice(state.boxesCurrentBoxIndex+1, 0, box);
  },
  CLEAR_BOXES_CURRENT_BOX: (state) => {
    state.boxes[state.boxesCurrentBoxIndex].value = [];
  },
  REMOVE_BOXES_CURRENT_BOX: (state) => {
    state.boxes.splice(state.boxesCurrentBoxIndex, 1);
  },
  SET_BOXES_CURRENT_BOX_INDEX: (state, direction) => {
    if(direction == 'previous') {
      if(state.boxesCurrentBoxIndex > 0) {
        state.boxesCurrentBoxIndex -= 1;
      }
    } else if(direction == 'next') {
      if(state.boxesCurrentBoxIndex < state.boxes.length-1) {
        state.boxesCurrentBoxIndex += 1;
      }
    } else {
      state.boxesCurrentBoxIndex = direction;
    }
  },
  ADD_FLAVOUR: (state, {index, flavour}) => {
    const newFlavour = {
      name: flavour.name,
      id: uuidv4(),
      img: flavour.img
    }
    state.boxes[state.boxesCurrentBoxIndex].value[index] = newFlavour;
  },
  SET_CURRENT_BOX_CAPACITY: (state, capacity) => {
    state.boxes[state.boxesCurrentBoxIndex].capacity = capacity;
  },
  SET_CURRENT_BOX_LENGTH: (state, length) => {
    state.boxes[state.boxesCurrentBoxIndex].value.length = length;
  }
}

export default {
  namespaced,
  state,
  mutations,
}