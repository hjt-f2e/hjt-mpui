module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
    // 'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-multiple-template-root': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state', 'config'],
            },
        ],
        indent: ['error', 4],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'linebreak-style': ['off', 'windows'],
        'max-len': ['error', { code: 120 }],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    globals: {
        uni: true,
    },
};
