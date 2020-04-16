const get = require('get-value');
const colors = require('colors/safe');
const projectConfig = require('../pregular.json');

const patternPath = 'test.browser.pattern';
const filePatterns = get(projectConfig, patternPath, null);
if (!filePatterns) {
  throw new Error(colors.red(`Could not find "${patternPath}" in pregular.json`));
}

const excludeFromCompilation = ['**/node_modules/**/*.js', '**/node_modules/**/*.ts'];

const file = (filePattern, config) => ({
  pattern: config.grep ? config.grep : filePattern,
  type: 'module',
});

const customPolyfills = [
  {
    name: 'document-register-element',
    path: require.resolve('document-register-element'),
    test: '!("customElements" in window)',
  },
];

const createFilePatterns = (patterns, config = {}) => {
  return patterns.map(pattern => file(pattern, config));
};

// karma.conf
module.exports = config => {
  config.set({
    basePath: '../',
    frameworks: ['esm', 'jasmine'],
    files: [...createFilePatterns(filePatterns, config)],
    browsers: [
      'Chrome',
      'Firefox',
      // 'Safari', // Note: strange behavior, it tries to open file with redirection
      // 'Opera',  // Error compiling: [BABEL] Unknown version 67 of Opera
    ],
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
    },
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
      customBabelConfig: {
        presets: ['@babel/preset-typescript'],
      },
      babelExclude: excludeFromCompilation,
      babelModernExclude: excludeFromCompilation,
      babelModuleExclude: excludeFromCompilation,

      nodeResolve: true,
      fileExtensions: ['.js'],
      preserveSymlinks: true,

      polyfills: {
        custom: customPolyfills,
      },
    },
  });
  return config;
};
