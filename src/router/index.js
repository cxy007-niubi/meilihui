import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import Crossborder from '@/views/Crossborder'
import Women from '@/views/Women'
import Men from '@/views/Men'
import Cosmetics from '@/views/Cosmetics'
import Lifestyle from '@/views/Lifestyle'
import Kids from '@/views/Kids'
import Upcoming from '@/views/Upcoming'
import Login from '@/views/Login'
import Error from '@/views/Error'
import Shoppingcart from '@/views/Shoppingcart'
import Qingcang from '@/views/Qingcang'
import Dailynew from '@/views/Dailynew'
Vue.use(VueRouter)
const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/act/qingcang',
    component: Qingcang
  }, {
    path: '/act/Dailynew',
    component: Dailynew
  },
  {
    // 海外
    path: '/silo/crossborder',
    component: Crossborder
  },
  {
    // 女士
    path: '/silo/women',
    component: Women
  },
  {
    // 男士
    path: '/silo/men',
    component: Men
  },
  {
    // 美妆
    path: '/silo/cosmetics',
    component: Cosmetics
  },
  {
    // 家居
    path: '/silo//silo/lifestyle',
    component: Lifestyle
  },
  {
    // 婴童
    path: '/silo/kids',
    component: Kids
  },
  {
    // 即将上新
    path: '/upcoming',
    component: Upcoming
  },
  {
    // 登陆注册
    path: '/login/mobile',
    component: Login
  },
  {
    // 重定向
    path: '/',
    redirect: '/index'
  },
  {
    // 错误路径
    path: '*',
    component: Error
  },
  {
    path: '/shoppingcart',
    component: Shoppingcart
  }

]

const router = new VueRouter({
  routes
})

export default router
