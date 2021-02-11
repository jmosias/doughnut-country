import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import image1 from '../assets/1.png';
import image12 from '../assets/12.png';

export default createStore({
  state: {
    flavours: [
      { name: 'Honey Glazed', id: uuidv4(), img: image1 },
      { name: 'Smores', id: uuidv4(), img: image12 },
    ],
    box: [],
  },
  mutations: {
    updateFlavours: (state, value) => (state.flavours = value),
    updateBox: (state, box) => (state.box = box),
    addNewFlavour: (state, { newIndex, flavour }) => {
      const newFlavour = {
        name: flavour.name,
        id: uuidv4(),
        img: flavour.img,
      };
      state.box[newIndex] = newFlavour;
    },
  },
  actions: {
  },
  modules: {
  }
})
