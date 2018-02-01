import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import Index from '@/components/Index'
//import Mine from '@/components/Mine'
//import Login from '@/components/Login'
//import Cart from '@/components/Cart'

//import Shop from '@/components/Shop'
//import Diancan from '@/components/Diancan'
//import Pingjia from '@/components/Pingjia'
//import Shangjia from '@/components/Shangjia'

//import Find from '@/components/Find'


Vue.use(Router)

export default new Router({
	mode: "hash",
 	routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components/Index')
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: () => import('@/components/Mine')
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/Shop/:fid',
      name: 'Shop',
      component: () => import('@/components/Shop'),
    },
    {
      path: '/Find',
      name: 'Find',
      component: () => import('@/components/Find')
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('@/components/Cart')
    }
  ]
})
