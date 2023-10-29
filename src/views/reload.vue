<route lang="yaml">
meta:
  layout: none
</route>

<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  router.go(-1)
})
</script>

<template>
  <div />
</template>
