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
    }
  ]
}

export default playersRouter
