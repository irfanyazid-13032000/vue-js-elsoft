import { createWebHistory, createRouter } from "vue-router";
import Login from './pages/Login.vue'

const routes = [
  {path:'/login',component:Login}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router