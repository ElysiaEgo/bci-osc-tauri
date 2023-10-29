<script lang="ts" setup>
import Footer from './footer.vue'
import Header from './header.vue'
import Sidebar from './sidebar.vue'
</script>

<template>
  <n-layout has-sider position="absolute">
    <Sidebar />
    <n-layout class="main-container">
      <Header />
      <n-layout-content style="flex-grow: 1;" content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
      <Footer />
    </n-layout>
  </n-layout>
</template>

<style>
.main-container > .n-layout-scroll-container {
  display: flex;
  flex-direction: column;
}
</style>
