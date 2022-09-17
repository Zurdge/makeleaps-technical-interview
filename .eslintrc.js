module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ['standard-with-typescript', 'airbnb', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
