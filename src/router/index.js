import { createRouter, createWebHistory } from 'vue-router'
import assetList from '../components/AssetList.vue'
import assetDetail from '../components/AssetDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'asset-list',
      component: assetList
    },
    {
      path: '/asset/:id',
      name: 'asset',
      component: assetDetail
    }
  ]
})

export default router
