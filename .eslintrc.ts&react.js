/**
* .eslintrc.js
* @author gya747
* @description 
* @date 2020-06-16T15:17:41.905Z+08:00
* @lastModifier gya747
* @lastModified 2020-06-16T15:17:41.905Z+08:00
* @NOTES 安装以下依赖
1. @typescript-eslint/parser
2. @typescript-eslint/eslint-plugin
3. react-hooks
* @TODOS 
*/

module.exports = {
  parser:  '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: [
    // "airbnb-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // @gya-todos:为什么一加入下面两项，eslint检查就无法响应了，好像卡死了一样
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    "react-hooks"
  ],
  env: {
    browser: true,
    // node: true,
    es6: true,
    // mocha: true,
    // jest: true,
    // jasmine: true,
  },
  globals: {
  },
  rules: {
    // 'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    // 'react/jsx-wrap-multilines': 0,
    // 'react/prop-types': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // // react无状态的纯函数：从Error改为Warning
    // 'react/prefer-stateless-function': 1,
    // 'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    // 'import/no-extraneous-dependencies': [
    //   2,
    //   {
    //     optionalDependencies: true,
    //     devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
    //   },
    // ],
    // 'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'jsx-a11y/anchor-is-valid': 0,
    // 'linebreak-style': 0,

    // "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],

    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "error"

    // note you must disable the base rule as it can report incorrect errors
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error", {
    //   "vars": "all",
    //   "args": "after-used",
    //   "ignoreRestSiblings": false
    // }],
    '@typescript-eslint/no-array-constructor': 'warn',
    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "overrides": [
    {
      // enable the rule specifically for TypeScript files
      // disable the rule for tsx because tsx exports React Component
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["warn"]
      }
    }
  ]
};
