import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export function createComponents () {
  return components({
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
    resolvers: [NaiveUiResolver()],
  })
}
