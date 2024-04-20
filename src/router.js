import { createWebHistory, createRouter } from "vue-router";
import Login from './pages/Login.vue'
import Sidebar from './components/Sidebar.vue'
import Master from './pages/Master.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/sidebar', component: Sidebar },
  { path: '/master', component: Master },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router