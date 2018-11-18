const state = {
  winePromotions: [{
    id: '0',
    name: 'wine-1',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    oldPrice: '10',
    newPrice: '5',
    promotionTag: 'https://i.pinimg.com/564x/80/4d/b9/804db9cf4a77aba1bd90fc94efe107a0.jpg'
  }, {
    id: '1',
    name: 'wine-2',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    oldPrice: '20',
    newPrice: '10',
    promotionTag: 'https://i.pinimg.com/564x/80/4d/b9/804db9cf4a77aba1bd90fc94efe107a0.jpg'
  }, {
    id: '2',
    name: 'wine-3',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    oldPrice: '80',
    newPrice: '20',
    promotionTag: 'https://i.pinimg.com/564x/80/4d/b9/804db9cf4a77aba1bd90fc94efe107a0.jpg'
  }, {
    id: '3',
    name: 'wine-4',
    image: 'https://i.pinimg.com/564x/96/ba/7a/96ba7a590e07e98a114ecff399ea813e.jpg',
    oldPrice: '30',
    newPrice: '10',
    promotionTag: 'https://i.pinimg.com/564x/80/4d/b9/804db9cf4a77aba1bd90fc94efe107a0.jpg'
  }]
}

const getters = {
  listPromotionWines: state => {
    return state.winePromotions
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
