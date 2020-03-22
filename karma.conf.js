module.exports = config => {
    config.set({
        basePath: '',
        frameworks: [
            'esm',
            'jasmine',
        ],
        files: [
            {
                pattern: config.grep ? config.grep : 'packages/**/*.ts',
                type: 'module',
            },
            {
                pattern: config.grep ? config.grep : 'test/**/*.ts',
                type: 'module',
            },
            {
                pattern: config.grep ? config.grep : 'src/**/*.ts',
                type: 'module',
            },
        ],
        exclude: [
            'packages/pg-node-compiler-template/**/*.ts'
        ],
        browsers: [
            'Chrome',
            'Firefox',
            'Opera',
            'Safari',
        ],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
            'karma-safari-launcher',
            require.resolve('@open-wc/karma-esm'),
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
        },
    });
    return config;
};
