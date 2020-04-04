// Bonus: https://tutel.me/c/programming/questions/47832603/running+tests+mjs++esm+on+node+using+jasmine+or+any+other+alternative

// setup Jasmine
const Jasmine = require('jasmine');

const jasmine = new Jasmine({});
jasmine.loadConfig({
  spec_dir: 'packages/pkg-node-*',
  spec_files: ['**/*.spec.cjs'],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false,
});

jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

// setup console reporter
const JasmineConsoleReporter = require('jasmine-console-reporter');

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
