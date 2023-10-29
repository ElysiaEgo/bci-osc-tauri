import layouts from 'vite-plugin-vue-layouts'

export function createLayouts () {
  // cannot figure out why layouts is any in eslint ast
  // in vscode it is correct
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return layouts({
    layoutsDirs: './src/layouts',
    defaultLayout: 'index',
  })
}
