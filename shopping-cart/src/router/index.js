import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shoppingcart from '@/components/shoppingcart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    }
  ]
})
