import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Mine from '@/components/Mine'
import Login from '@/components/Login'

import Shop from '@/components/Shop'
import Diancan from '@/components/Diancan'
import Pingjia from '@/components/Pingjia'
import Shangjia from '@/components/Shangjia'

import Find from '@/components/Find'


Vue.use(Router)

export default new Router({
	mode: "hash",
 	routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      children : [
        {
          path: '/',
          name: 'Diancan',
          component: Diancan
        },
        {
          path: 'Diancan',
          name: 'Diancan',
          component: Diancan
        },
        {
          path: 'Pingjia',
          name: 'Pingjia',
          component: Pingjia
        },
        {
          path: 'Shangjia',
          name: 'Shangjia',
          component: Shangjia
        }
      ]
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    }
  ]
})
