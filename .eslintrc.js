module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': ['error', 3],
        'import/no-cycle': 'off',
        'no-nested-ternary': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/accessible-emoji': 'warn',
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'react/require-default-props': 'off',
        'prettier/prettier': [
            'off',

            {
                endOfLine: 'auto',
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-unresolved': 'off',
        'import/export': 'off',
        'array-callback-return': 'off',
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
