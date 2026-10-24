import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductListPage from '../pages/ProductListPage.vue'
import ProductDetailPage from '../pages/ProductDetailPage.vue' // <-- Добавили

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { 
    path: '/products', 
    name: 'Products', 
    component: ProductListPage,
    meta: { requiresAuth: false }
  },
  { 
    path: '/products/:id', 
    name: 'ProductDetail', 
    component: ProductDetailPage,
    props: true, // <-- ВАЖНО: передаем id как props
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router