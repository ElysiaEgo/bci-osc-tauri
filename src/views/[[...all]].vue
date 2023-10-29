<route lang="yaml">
meta:
  layout: none
</route>

<script setup lang="ts">
const router = useRouter()

const data = ref({
  intervalId: Number.NaN,
  countdown: 10,
})

onBeforeRouteLeave(() => {
  if (!Number.isNaN(data.value.intervalId))
    clearInterval(data.value.intervalId)
})

onMounted(() => {
  data.value.intervalId = setInterval(() => {
    data.value.countdown--
    if (data.value.countdown === 0) {
      if (!Number.isNaN(data.value.intervalId))
        clearInterval(data.value.intervalId)
      goBack()
    }
  }, 1000)
})

function goBack () {
  void router.push('/')
}
</script>

<template>
  <NResult
    class="notfound"
    status="404"
    title="404 资源不存在"
    description="生活总归带点荒谬"
  >
    <template #footer>
      <NButton
        type="primary"
        @click.prevent="goBack"
      >
        {{ data.countdown }} 秒后，返回首页
      </NButton>
    </template>
  </NResult>
</template>

<style lang="scss" scoped>
.notfound {
  position: absolute;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
