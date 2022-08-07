import {createRouter, createWebHistory} from "vue-router";
// 1.创建路由规则
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/HomePage"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/LoginPage"),
  }
]
// 2.创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;