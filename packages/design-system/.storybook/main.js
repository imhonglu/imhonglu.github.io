/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    babel: async (options) => ({
        ...options,
        rootMode: 'upward',
    }),
    stories: ['../src/**/*stories.mdx', '../src/**/*stories.@(js|jsx|ts|tsx)'],
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, '../src'),
        };
        return config;
    },
};
