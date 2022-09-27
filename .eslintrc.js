module.exports = {
    parser: '@typescript-eslint/parser',
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ['standard-with-typescript', 'airbnb', 'prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension

            // As mentioned in the comments, you should extend TypeScript plugins here,
            // instead of extending them outside the `overrides`.
            // If you don't want to extend any rules, you don't need an `extends` attribute.
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],

            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/await-thenable': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
    },
};
