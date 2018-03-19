import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import detail from '@/components/detail/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/good',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})
