const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const projectConfig = require('../../pregular.json');
const getConfigByPath = require('../../utils/get-config-by-path');

const filePatterns = getConfigByPath(projectConfig, 'test.node.pattern', 'pregular.json');

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
