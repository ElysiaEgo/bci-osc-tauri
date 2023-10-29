<script lang="ts" setup>
import { useSidebarStore } from '@/stores/modules/sidebar'
import { getMenusWithKey, toMenuOption } from '@/router/toMenu'

const sidebarStore = useSidebarStore()
const collapsed = computed(() => sidebarStore.collapsed)

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  sidebarStore.collapsed = true

interface Menu {
  id: string
  label: string
  icon?: string
  name?: string
  children?: Menu[]
  index?: number
}

const data: Menu[] = [
  {
    id: '001-menu',
    label: 'Menu',
    icon: 'MenuOutline',
  },
  ...getMenusWithKey('sidebar'),
]

const options = computed(() => data.map(toMenuOption))

const route = useRoute()
const currentKey = ref<string>(data[0].id)
const expandedKeys = ref<string[]>([])

function updateValue (k: string): void {
  if (k === data[0].id) {
    sidebarStore.toggle()
    return
  }
  currentKey.value = k
}

function routeMatched (menu: Menu): boolean {
  return route.name === menu.name
}

function matchExpanded (items: Menu[]): boolean {
  let matched = false
  for (const item of items) {
    if (item.children != null)
      matchExpanded(item.children) && expandedKeys.value.push(item.id)

    if (routeMatched(item)) {
      currentKey.value = item.id
      matched = true
    }
  }
  return matched
}

watchEffect(() => matchExpanded(data))
</script>

<template>
  <n-layout-sider
    :width="180"
    :collapsed="collapsed"
    default-collapsed
    collapse-mode="width"
    bordered
    show-trigger="arrow-circle"
    @update:collapsed="sidebarStore.toggle"
  >
    <n-menu
      :value="currentKey"
      :default-expanded-keys="expandedKeys"
      :options="options"
      @update:value="updateValue"
    />
  </n-layout-sider>
</template>

<style scoped>
</style>
