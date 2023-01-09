module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
        // disallow semi-colon
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "array-element-newline": ["error", "consistent"],
        "no-self-assign": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "svelte/indent": ["error", {
            "indentScript": false,
            "indent": 4,
        }],
        "svelte/prefer-style-directive": ["error"],
        "svelte/sort-attributes": ["error"],
        "svelte/shorthand-directive": ["error", {
            "prefer": "always",
        }],
        "svelte/no-spaces-around-equal-signs-in-attribute": ["error"],
        "svelte/html-quotes": ["error", {
            "prefer": "double",
            "dynamic": {
                "quoted": false,
                "avoidInvalidUnquotedInHTML": false
            }
        }],
        "max-params": ["error", {
            "max": 3
        }],
        "max-len": ["error", {
            "code": 120,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
        }],
        "svelte/no-at-html-tags": "warn",
        "svelte/mustache-spacing": ["error", {
            "attributesAndProps": "always",
            "textExpressions": "always", // or "always"
            "attributesAndProps": "never", // or "always"
            "directiveExpressions": "always", // or "always"
            "tags": {
                "openingBrace": "never",
                "closingBrace": "never",
            }
        }],
        "svelte/max-attributes-per-line": [
            "error",
            {
                "multiline": 1,
                "singleline": 1
            }
        ],
        "svelte/first-attribute-linebreak": [
            "error",
            {
              "multiline": "below", // or "beside"
              "singleline": "beside" // "below"
            }
        ]
    }
};
