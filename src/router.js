import { createWebHistory, createRouter } from "vue-router";
import Login from './pages/Login.vue'
import Sidebar from './components/Sidebar.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/sidebar', component: Sidebar },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router