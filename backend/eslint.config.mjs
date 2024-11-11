import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never']
    }
  },
  pluginJs.configs.recommended
]