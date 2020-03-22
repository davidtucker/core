const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

/**
 * filter / config.grep: npm run test -- --grep test/bar/*
 */
module.exports = config => {
    config.set(merge(createDefaultConfig(config), {
        basePath: '',
        frameworks: [
            'esm'
        ],
        files: [
            {
                pattern: config.grep ? config.grep : 'packages/**/*.spec.ts',
                type: 'module',
            },
            {
                pattern: config.grep ? config.grep : 'test/**/*.spec.ts',
                type: 'module',
            },
        ],
        browsers: [
            'Chrome',
            'Firefox',
            'Opera',
            // 'Safari',
        ],
        plugins: [
            require.resolve('@open-wc/karma-esm'),
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
            'karma-safari-launcher',
        ],
        esm: {
            babel: true,
            nodeResolve: true,
            fileExtensions: ['.ts'],
            preserveSymlinks: true,
            customBabelConfig: {
                presets: [
                    "@babel/preset-typescript",
                ],
            },
            babelModernExclude: [
                'node_modules/*/**.js'
            ],
            babelExclude: [
                'node_modules/*/**.js'
            ],
        },
    }));
    return config;
};
