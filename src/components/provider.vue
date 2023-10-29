<script lang="ts" setup>
import { darkTheme, useOsTheme } from 'naive-ui'
import { computed } from 'vue'

const osTheme = useOsTheme()

const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-loading-bar-provider>
      <n-notification-provider>
        <n-message-provider>
          <n-dialog-provider>
            <slot />
          </n-dialog-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
