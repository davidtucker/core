module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-opera-launcher',
        ],
        browsers: [
            'Chrome',
            'Firefox',
            'Opera',
        ],
        files: [
            { pattern: "src/**/*.ts" }
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["dots", "karma-typescript"],
        autoWatch: true,
        singleRun: false,
        colors: true,
    });
};
