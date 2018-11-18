const state = {
  winePromotions: [{
    id: '0',
    name: 'wine-1',
    image: 'https://cdn.pixabay.com/photo/2011/03/25/08/27/wine-5884_960_720.jpg',
    oldPrice: '10',
    newPrice: '5',
    promotionTag: 'http://chittagongit.com//images/promotion-icon/promotion-icon-8.jpg'
  }, {
    id: '1',
    name: 'wine-2',
    image: 'https://cdn.pixabay.com/photo/2011/03/25/08/27/wine-5884_960_720.jpg',
    oldPrice: '20',
    newPrice: '10',
    promotionTag: 'http://chittagongit.com//images/promotion-icon/promotion-icon-8.jpg'
  }, {
    id: '2',
    name: 'wine-3',
    image: 'https://cdn.pixabay.com/photo/2011/03/25/08/27/wine-5884_960_720.jpg',
    oldPrice: '80',
    newPrice: '20',
    promotionTag: 'http://chittagongit.com//images/promotion-icon/promotion-icon-8.jpg'
  }, {
    id: '3',
    name: 'wine-4',
    image: 'https://cdn.pixabay.com/photo/2011/03/25/08/27/wine-5884_960_720.jpg',
    oldPrice: '30',
    newPrice: '10',
    promotionTag: 'http://chittagongit.com//images/promotion-icon/promotion-icon-8.jpg'
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
