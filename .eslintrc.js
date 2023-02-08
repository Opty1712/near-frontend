module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  parserOptions: {
    "warnOnUnsupportedTypeScriptVersion": false,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: ["./tsconfig.eslint.json", "./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-mixed-spaces-and-tabs': 'error',
    '@typescript-eslint/indent': 'off',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'yield-star-spacing': 'error',
    'no-eq-null': 'error',
    eqeqeq: 'error',
    yoda: 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-var': 'error',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'no-fallthrough': 'off',
        'valid-typeof': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-dupe-class-members': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            variables: false,
            enums: false,
            typedefs: false,
            ignoreTypeReferences: false,
          },
        ],
      },
    },
  ],
  globals: {
    nameof: 'readonly',
  },
};
