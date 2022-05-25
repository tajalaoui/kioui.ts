import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { isToken } from "../composables/token.composable"

declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean
    requiresAuth: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isToken()) next({ name: "Login" })
  else next()
})

export default router
