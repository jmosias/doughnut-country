import { v4 as uuidv4 } from 'uuid';

const namespaced = true;
const state = {
  categories: [
    {
      id: uuidv4(),
      name: 'Doughnuts',
      icon: 'donuts'
    },
    {
      id: uuidv4(),
      name: 'Pastries',
      icon: 'pastry'
    },
    {
      id: uuidv4(),
      name: 'Beverages',
      icon: 'coffee'
    }
  ],
  items: [
    {
      id: uuidv4(),
      categoryName: 'Bundles',
      name: 'Cinnamon Rolls',
      description: '10 pcs',
      price: 209,
      img: require('@/assets/images/catalogue/bundles/cinnamon.png'),
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Coffee',
      description: '',
      price: 79,
      img: require('@/assets/images/catalogue/beverages/white_paper_cup_white_lid.jpg'),
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Iced Coffee',
      description: '',
      price: 79,
      img: require('@/assets/images/catalogue/beverages/white_paper_cup_black_lid.jpg'),
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Hot Chocolate',
      description: '',
      price: 79,
      img: require('@/assets/images/catalogue/beverages/black_paper_cup_white_lid.jpg'),
      isAvailable: true
    },
    {
      id: uuidv4(),
      categoryName: 'Beverages',
      name: 'Iced Milk',
      description: '',
      price: 79,
      img: require('@/assets/images/catalogue/beverages/white_paper_cup_black_lid.jpg'),
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