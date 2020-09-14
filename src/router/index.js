import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/login',
    name: 'About',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/home.vue'),
    children:[
      {
        //用户列表
        path:'users',
        component:()=>import("../components/users.vue")
      },
      {
        //角色列表
        path:"roles",
        component:()=>import("../components/roles.vue")
      },
      {
        //权限列表
        path:"rights",
        component:()=>import("../components/rights.vue")
      },
      {
        //商品列表
        path:"goods",
        component:()=>import("../components/goods.vue")
      },
      {
        //分类参数
        path:"params",
        component:()=>import("../components/params.vue")
      },
      {
        //商品分类
        path:"categories",
        component:()=>import("../components/categories.vue")
      },
      {
        //订单列表
        path:"orders",
        component:()=>import("../components/orders.vue")
      },
      {
        //数据列表
        path:"reports",
        component:()=>import("../components/reports.vue")
      }
      

    ]
  }
 
]

const router = new VueRouter({
  routes
})

export default router
