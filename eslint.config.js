// ESLint Flat Config para Vue 3 + JavaScript ESM
// Ejecuta: npm run lint  |  npm run lint:fix

import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Ignorar carpetas generadas
  { ignores: ['dist/**', 'node_modules/**', 'public/**'] },

  // Reglas JS recomendadas
  js.configs.recommended,

  // Config recomendada de Vue con parser para .vue
  ...pluginVue.configs['flat/recommended'],

  // Desactiva reglas que chocan con el formato de Prettier
  // (debe ir después de los presets y antes de nuestras reglas para poder reactivar selectivamente lo que queramos)
  eslintConfigPrettier,

  // Ajustes del proyecto + reglas personalizadas
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
    plugins: { vue: pluginVue },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // Estilo: sin punto y coma
      semi: ['error', 'never'],
      // Espacios tras palabras clave (if (), for (), etc.)
      'keyword-spacing': ['error', { before: true, after: true }],
      // Espacios alrededor de operadores infijos (=, +, -, etc.)
      'space-infix-ops': ['error', { int32Hint: false }],
      'vue/no-mutating-props': 'error',
      'vue/no-unused-vars': 'warn',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
    },
  },
]
