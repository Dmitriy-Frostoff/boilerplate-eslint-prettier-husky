/**
 * use the commands below when ESLint v9.+ will be released and it will support ESModules!
 *
 * @example
 *  import path from 'path';
 *  const __dirname = import.meta.dirname;
 *
 *  project: path.resolve(__dirname, 'configs/ts/tsconfig.json'),
 */

const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2024: true,
    mocha: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
      parserOptions: {
        project: path.resolve(__dirname, '../ts/tsconfig.json'),
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  noInlineConfig: true,
};
