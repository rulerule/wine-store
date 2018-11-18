const state = {
  wineList: [{
    id: '0',
    name: 'wine-1',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '1',
    name: 'wine-2',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '2',
    name: 'wine-3',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '3',
    name: 'wine-4',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '4',
    name: 'wine-5',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '5',
    name: 'wine-6',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }, {
    id: '6',
    name: 'wine-7',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    price: '10',
    description: 'very good wine',
    grade: '4/5'
  }]
}

const getters = {
  listWines: state => {
    return state.wineList
  }
}

const mutations = {
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
