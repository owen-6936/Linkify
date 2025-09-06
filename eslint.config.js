import eslint from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
