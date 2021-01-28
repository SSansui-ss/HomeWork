import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home',
    children:[
      {
        path:'/home',
        name:'Home',
        component:()=>import('@/views/one'),
        meta:{
          bread:[{name:'Hello'}]
        }
      },
      {
        path:'/shopAdmin',
        name:'ShopAdmin',
        component:()=>import('@/views/shopAdmin'),
        meta:{
          bread:[{name:'商品管理'}]
        }
      },
      {
        path:'/classAdmin',
        name:'ClassAdmin',
        component:()=>import('@/views/classAdmin'),
        meta:{
          bread:[{name:'品类管理'}]
        }
      },
      {
        path:'/orderAdmin',
        name:'OrderAdmin',
        component:()=>import('@/views/orderAdmin'),
        meta:{
          bread:[{name:'订单管理'}]
        }
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('@/views/login'),
    meta:{
      Router:true
    }
  }
]


const router = new VueRouter({
  routes
})




export default router
