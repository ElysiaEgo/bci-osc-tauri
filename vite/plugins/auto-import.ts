import autoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export function createAutoImport (): any {
  return autoImport({
    imports: [
      'vue',
      VueRouterAutoImports,
      'pinia',
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [
      './src/utils/composables/**',
    ],
  })
}
