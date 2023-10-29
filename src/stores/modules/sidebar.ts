export const useSidebarStore = defineStore('sidebarCollapsed', {
  state: () => ({
    collapsed: true,
  }),
  actions: {
    toggle () {
      this.collapsed = !this.collapsed
    },
  },
})
