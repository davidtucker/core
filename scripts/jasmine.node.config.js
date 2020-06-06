const Jasmine = require('jasmine');
const get = require('get-value');
const colors = require('colors/safe');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const projectConfig = require('../pregular.json');

const patternPath = 'test.node.pattern';
const filePatterns = get(projectConfig, patternPath);
if (!filePatterns) {
  throw new Error(colors.red(`Could not find "${patternPath}" in pregular.json`));
}

// setup Jasmine
const jasmine = new Jasmine({});
jasmine.loadConfig({
  spec_files: [...filePatterns],
  random: false,
  seed: undefined,
  stopSpecOnExpectationFailure: false,
});

jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

// setup console reporter
const reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: 'indent',
  timeUnit: 'ms',
  timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
  activity: true,
  emoji: true,
  beep: true,
});

jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();

// Bonus: https://tutel.me/c/programming/questions/47832603/running+tests+mjs++esm+on+node+using+jasmine+or+any+other+alternative
