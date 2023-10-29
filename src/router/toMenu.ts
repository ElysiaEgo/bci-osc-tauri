import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router/auto'
import { RouterLink } from 'vue-router'
import { routes } from 'vue-router/auto/routes'
import { Icon } from '@/components'

interface Menu {
  id: string
  label: string
  icon?: string
  name?: string
  children?: Menu[]
  index?: number
}

function RoutesToMenus (key: string, routes?: RouteRecordRaw[]): Menu[] | null {
  if (routes == null)
    return null
  return routes
    .map(
      (route: RouteRecordRaw) => RouteToMenu(route, key),
    )
    .flat()
    .filter(
      (item): item is Menu => item != null,
    )
}

function RouteToMenu (route: RouteRecordRaw, key: string): Menu[] | Menu | null {
  if (route.children?.length !== 0) {
    const meta = route.children?.find(item => item.path === 'meta')
    // workaround for unplugin-vue-router not support meta on no component route
    if (meta != null) {
      if (meta.meta?.popchild === true)
        return RoutesToMenus(key, route.children?.filter(item => item.path !== 'meta'))
      else
        route.meta = meta.meta
      return null
    }
  }
  if (route.meta == null)
    return null
  const prop = route.meta[key] as boolean | undefined
  if (prop == null || !prop)
    return null
  return {
    id: route.path + route.name?.toString() ?? '',
    label: route.meta.title as string ?? route.path,
    icon: route.meta.icon as string ?? '',
    name: route.name?.toString(),
    children: RoutesToMenus(key, route.children) ?? undefined,
    index: route.meta[`${key}index`] as number,
  }
}

export function getMenusWithKey (key: string) {
  return (RoutesToMenus(key, routes) ?? [])
    .sort((a, b) => {
      if (a.index == null && b.index == null)
        return a.label.localeCompare(b.label)
      return (a.index ?? 0) - (b.index ?? 0)
    })
}

export function toMenuOption (item: Menu): MenuOption {
  return {
    ...item,
    key: item.id,
    label: item.name != null
      ? () => h(RouterLink, { to: item }, { default: () => item.label })
      : item.label,
    icon: item.icon != null && item.icon !== ''
      ? () => h(Icon, { type: item.icon })
      : undefined,
    children: item.children != null
      ? item.children.map(toMenuOption)
      : undefined,
  }
}
