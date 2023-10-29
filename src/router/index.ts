import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import '@/stores'

const history = createWebHashHistory()

export const router = createRouter({
  history,
  extendRoutes: routes => setupLayouts(routes),
})

router.beforeEach((to, _from) => {
  if (to.path === '/') {
    return {
      path: '/home',
      replace: true,
    }
  }
  return true
})

router.afterEach((to) => {
  const items = [import.meta.env.VITE_APP_TITLE]
  to.meta.title != null && items.unshift(to.meta.title)
  document.title = items.join(' · ')
})
