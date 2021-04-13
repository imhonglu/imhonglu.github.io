/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
    workspaceRoot: '../../',
    mount: {
        src: { url: '/dist' },
        public: { url: '/', static: true },
    },
    alias: {
        '~': './src',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        [
            '@snowpack/plugin-babel',
            {
                transformOptions: {
                    // babel transform options
                    // configFile: path.resolve('../../', '.babelrc'),
                    rootMode: 'upward',
                },
            },
        ],
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        { match: 'routes', src: '.*', dest: '/index.html' },
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};
