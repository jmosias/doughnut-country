import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import image1 from '../assets/1.png';
import image12 from '../assets/12.png';

export default createStore({
  state: {
    flavours: [
      { name: "Honey Glazed", id: uuidv4(), img: image1 },
      { name: "Smores", id: uuidv4(), img: image12 },
    ],
    boxes: [],
    currentBoxIndex: 0
  },
  mutations: {
    updateFlavours: (state, value) => (state.flavours = value),
    updateBoxes: (state, value) => (state.boxes = value),
    addNewBox: (state, value = []) => {
      const box = {
        value: value
      };
      state.boxes.splice(state.currentBoxIndex+1, 0, box);
    },
    clearBox: (state) => {
      state.boxes[state.currentBoxIndex].value = [];
    },
    removeBox: (state) => {
      state.boxes.splice(state.currentBoxIndex, 1);
    },
    changeCurrentBoxIndex: (state, direction) => {
      if(direction == "previous") {
        if(state.currentBoxIndex > 0) {
          state.currentBoxIndex -= 1;
        }
      } else if(direction == "next") {
        if(state.currentBoxIndex < state.boxes.length-1) {
          state.currentBoxIndex += 1;
        }
      }
    },
    addFlavourToBox: (state, {index, flavour}) => {
      const newFlavour = {
        name: flavour.name,
        id: uuidv4(),
        img: flavour.img
      }
      state.boxes[state.currentBoxIndex].value[index] = newFlavour;
    }
  },
  actions: {
  },
  modules: {
  }
})
