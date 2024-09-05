// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2021: true },
  settings: {
    react: {
      version: 'detect',
    },
    extends: [
      'plugin:react/jsx-runtime',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: { 'prettier/prettier': 0, },
};
