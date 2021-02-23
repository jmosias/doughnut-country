import { v4 as uuidv4 } from 'uuid';
import image12 from '@/assets/images/doughnut_flavours/cappuccino.png';

const namespaced = true;
const state = {
  categories: [
    {
      id: uuidv4(),
      name: 'Bundles'
    },
    {
      id: uuidv4(),
      name: 'Beverages'
    }
  ],
  items: [
    {
      id: uuidv4(),
      categoryName: 'Bundles',
      name: 'Cinnamon Rolls',
      description: '10 pcs',
      price: 209,
      img: image12,
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Coffee',
      description: '',
      price: 79,
      img: image12,
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Hot Chocolate',
      description: '',
      price: 79,
      img: image12,
      isAvailable: true
    }
  ]
}
const mutations = {}

export default {
  namespaced,
  state,
  mutations
}