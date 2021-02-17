import { v4 as uuidv4 } from 'uuid';
import image1 from '@/assets/1.png';
import image12 from '@/assets/12.png';

const namespaced = true;

const state = {
  flavours: [
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
    { value: [{ name: 'Smores', id: uuidv4(), img: image12 }] },
    { value: [{ name: 'Honey Glazed', id: uuidv4(), img: image1 }] },
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
      capacity: 12
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
  }
}

export default {
  namespaced,
  state,
  mutations,
}