<script lang="ts" setup>
import {
  ContractOutline,
  ExpandOutline,
  HomeOutline,
  MenuOutline,
  SettingsOutline,
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback',
  },
})

const icons = {
  ContractOutline,
  ExpandOutline,
  HomeOutline,
  MenuOutline,
  SettingsOutline,
}

type IconTypes = keyof typeof icons
</script>

<template>
  <NIcon v-bind="props">
    <component :is="icons[props.type as IconTypes]" />
  </NIcon>
</template>
