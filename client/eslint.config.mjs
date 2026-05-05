import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      // Запрет any типов
      '@typescript-eslint/no-explicit-any': 'error',
      // Требование явных возвращаемых типов
      '@typescript-eslint/explicit-function-return-type': 'error',
      // Требование типов для параметров
      '@typescript-eslint/explicit-module-boundary-types': 'error',
    },
  },
]);

export default eslintConfig;
