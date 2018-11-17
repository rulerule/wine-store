import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Wine from './views/Wine.vue'
import Account from './views/Account.vue'
import Cart from './views/Cart.vue'
import Help from './views/Help.vue'
import OtherStuffs from './views/OtherStuffs'
import SpecialOrders from './views/SpecialOrders'
import The4Tag from './views/The4Tag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // component: () => import('./views/Home.vue') //lazy loading
    },
    {
      path: '/Wine',
      name: 'wine',
      component: Wine
    },
    {
      path: '/Account',
      name: 'account',
      component: Account
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/Help',
      name: 'help',
      component: Help
    },
    {
      path: '/OtherStuff',
      name: 'otherstuffs',
      component: OtherStuffs
    },
    {
      path: '/SpecialOrders',
      name: 'specialorders',
      component: SpecialOrders
    },
    {
      path: '/The4Tag',
      name: 'the4tag',
      component: The4Tag
    }
  ]
})
