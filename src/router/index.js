import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import AdminScreen from '../views/AdminScreen.vue'
import LoginScreen from '../views/auth/LoginScreen.vue'
import SignUpScreen from '../views/auth/SignUpScreen.vue'
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'LoginScreen',
    component: LoginScreen
},
{
    path: '/register',
    name: 'Sign Up Screen',
    component: SignUpScreen
},
{
    path: '/admin',
    name: 'Admin Dashboard',
    component: AdminScreen
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
