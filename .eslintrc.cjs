module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/no-absolute-path': ['off']
  },
  overrides: [{
    files: ['**/*.vue', '**/*.ts']
  }, {
    files: ['*.config.cjs'],
    env: {
      node: true
    }
  }],
  ignorePatterns: ['docs', 'dist', 'node_modules']
}
