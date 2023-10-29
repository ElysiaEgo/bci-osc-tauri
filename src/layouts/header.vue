<script lang="ts" setup>
import { getCurrent } from '@tauri-apps/api/window'

const fullscreenIndicator = ref('ExpandOutline')

const onToggleFullscreen = () => {
  void getCurrent().isFullscreen().then((isFullscreen) => {
    void getCurrent().setFullscreen(!isFullscreen)
    fullscreenIndicator.value = !isFullscreen ? 'ContractOutline' : 'ExpandOutline'
  })
}

setInterval(() => {
  void getCurrent().isFullscreen().then((isFullscreen) => {
    fullscreenIndicator.value = isFullscreen ? 'ContractOutline' : 'ExpandOutline'
  })
}, 1000)
</script>

<template>
  <n-layout-header bordered>
    <n-a
      class="logo"
    >
      <span>BCI-OSC</span>
    </n-a>
    <n-space>
      <Icon :type="fullscreenIndicator" @click.prevent="onToggleFullscreen" />
    </n-space>
  </n-layout-header>
</template>

<style scoped>
.logo {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  /* border-bottom: 1px solid var(--border-color); */
  background: var(--color);
  font-size: 1.6em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  transition: padding 0.3s var(--bezier), font-size 0.3s var(--bezier);
}

.logo svg {
  flex: 0 0 32px;
  height: 32px;
  margin-right: 12px;
  transition: margin 0.3s var(--bezier);
}

.n-layout-header {
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 9px 18px;
}

.n-button {
  margin-right: 15px;
}

.n-space {
  margin-left: auto;
}
</style>
