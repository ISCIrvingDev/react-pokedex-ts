module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-use-before-define': 'off', // Pare el import de React
    '@typescript-eslint/no-use-before-define': ['error'] // Pare el import de React
  }
}
