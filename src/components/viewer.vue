<script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'
import { RouterView } from 'vue-router'
import { router } from '@/router'

// todo: route transtion

const loadingBar = useLoadingBar()

router.beforeEach(() => {
  loadingBar?.start()
})

router.afterEach(() => {
  loadingBar?.finish()
})
</script>

<template>
  <RouterView />
</template>
