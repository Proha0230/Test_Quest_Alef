import { createRouter, createWebHistory } from 'vue-router'
import form from '../components/form'
import previos from '../components/previos'

const routes = [
  { path: '/', name: 'form', component: form },
  { path: '/previos', name: 'previos', component: previos }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
