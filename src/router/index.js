import {createRouter, createWebHistory} from "vue-router";
// 1.创建路由规则
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    // 页面结构
    path: '/home',
    name: 'home',
    redirect: "/home/refuge",
    component: () => import("../views/HomePage"),
    children: [
      {
        // refuge的index页面
        path: '/home/refuge',
        component:()=>import("../views/refuge/RefugeContent"),
      }
    ]
  },
  {
    //登陆页面
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