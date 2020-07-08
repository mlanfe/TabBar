import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import("views/Home.vue")
const category = () => import("views/Category.vue")
const cart = () => import("views/Cart.vue")
const profile = () => import("views/Profile.vue")

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component: home
  },
  {
    path:"/category",
    component:  category
  },
  {
    path:"/cart",
    component: cart
  },
  {
    path:"/profile",
    component: profile
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router