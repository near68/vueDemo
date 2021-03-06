import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import New from '@/components/NewContact'
import NewContact from '@/components/NewContact'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/new',
      component: New,
      path: '/newcontact',
      name: 'NewContact',
      component: NewContact

    }
  ]
})
