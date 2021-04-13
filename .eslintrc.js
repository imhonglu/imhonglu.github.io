module.exports = {
    extends: ['airbnb-typescript-prettier'],
    parserOptions: {
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'simple-import-sort',
        'sort-keys-fix',
        'sort-destructure-keys',
        'typescript-sort-keys',
    ],
    root: true,
    rules: {
        // 취향대로 변경하세요.
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-props': 2,
        'react/prop-types': 0,
        'react/self-closing-comp': [
            2,
            {
                component: true,
                html: true,
            },
        ],
        'react/sort-comp': 2,
        'simple-import-sort/exports': 2,
        'simple-import-sort/imports': 2,
        'sort-destructure-keys/sort-destructure-keys': 2,
        'sort-keys-fix/sort-keys-fix': 1,
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    },
};
