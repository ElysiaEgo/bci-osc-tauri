// @ts-check
/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-recommended',
    '@antfu',
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
    'simple-import-sort',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: [
      'tsconfig.node.json',
      'tsconfig.json',
    ],
  },
  ignorePatterns: [
    'index.html',
  ],
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@stylistic/ts/space-before-function-paren': 'off',
    '@stylistic/ts/brace-style': 'off',
    '@stylistic/js/operator-linebreak': 'off',
    'antfu/top-level-function': 'off',
  },
}
