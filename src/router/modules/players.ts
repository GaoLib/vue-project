import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const playersRouter: RouteConfig = {
  path: '/players',
  component: Layout,
  meta: {
    title: 'playerMgt',
    icon: 'peoples'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/player/list.vue'),
      meta: {
        title: 'playerList',
        icon: 'list'
      }
    },
    {
      path: 'create',
      component: () => import('@/views/player/create.vue'),
      meta: {
        title: 'createPlayer',
        icon: 'edit'
      }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/player/edit.vue'),
      meta: {
        title: 'editPlayer',
        hidden: true,
        noCache: true, // tags 页签多个，不缓存
        activeMenu: '/players/list' // 左侧导航激活url
      }
    }
  ]
}

export default playersRouter
