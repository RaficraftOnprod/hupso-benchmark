module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'import'
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'no-unused-vars': 'off',
    'react/require-default-props': 0,
    'unused-imports/no-unused-imports': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
    // 'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-unused-expressions': ['error',
      { allowShortCircuit: true
      }
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.ts', '.tsx'
        ]
      },
    ],
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/extensions': ['error', 'never',
      { svg: 'always'
      }
    ],
    'react/no-unescaped-entities': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unused-prop-types': 0,
    'no-underscore-dangle': 0,
    'react/jsx-no-useless-fragment': 0,
    'no-shadow': 0,
    'react/no-array-index-key': 0,
    'import/no-extraneous-dependencies': ['error',
      { devDependencies: true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      0,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      2,
      {
        allow: ['warn', 'error'
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'
        ],
        paths: ['src'
        ],
      },
      typescript: {},
    },
  },
};
