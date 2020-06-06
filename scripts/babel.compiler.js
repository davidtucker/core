const watch = require('node-watch');
const { format } = require('util');
const { exec } = require('shelljs');
const projectConfig = require('../pregular.json');
const getConfigByPath = require('../utils/get-config-by-path');

const browserPackages = getConfigByPath(projectConfig, 'compile.browser.packages', 'pregular.json');
const nodePackages = getConfigByPath(projectConfig, 'compile.node.packages', 'pregular.json');

// options
const watchOptions = {
  recursive: true,
  filter: /^((?!(node_modules|\.cjs|\.js|\.d\.ts)).)*$/,
};
const shellOptions = {
  async: true,
};

// npm scripts: compile all files to .d.ts, .js, .cjs
const execBabelJsModuleAll = 'npm run compile:mjs:all';
const execBabelCjsModuleAll = 'npm run compile:cjs:all';
const execTsDeclarationsAll = 'npm run compile:dec:all';

// npm scripts: compile single file to .d.ts, .js, .cjs
const execBabelJsModuleSingle = 'npm run compile:mjs:single --src-file=%s --out-file=%s';
const execBabelCjsModuleSingle = 'npm run compile:cjs:single --src-file=%s --out-file=%s';
const execTsDeclarationsSingle = 'npm run compile:dec:single --src-file=%s';

// npm scripts: combine tasks ('& ' => run in shell parallel)
const execBabel = [execBabelCjsModuleAll, execBabelJsModuleAll, execTsDeclarationsAll].join('& ');

// helper
const replaceExtToJs = name => name.replace('.ts', '.js');
const replaceExtToDTs = name => name.replace('.ts', '.d.ts');
const compiledMessage = name => console.log('Successfully compiled 1 file with Babel: %s', name);
const hasError = (code, stderr) => code !== 0 && stderr;

// @todo: wait for all exec and then start tests
// @solution: combineLatest(mjs, cjs, dts).pipe(take(1), tap(startTests))

// First compile all files to .js and .cjs
exec(execBabel, (code, stdout, stderr) => {
  // watch and compile to esModule
  watch(browserPackages, watchOptions, (_, name) =>
    exec(format(execBabelJsModuleSingle, name, replaceExtToJs(name)), shellOptions, code =>
      hasError(code, stderr) ? undefined : compiledMessage(replaceExtToJs(name)),
    ),
  );

  // watch compile to commonJs
  watch(nodePackages, watchOptions, (_, name) =>
    exec(format(execBabelCjsModuleSingle, name, replaceExtToJs(name)), shellOptions, code =>
      hasError(code, stderr) ? undefined : compiledMessage(replaceExtToJs(name)),
    ),
  );

  // watch compile to definition file
  watch('./packages', watchOptions, (_, name) => {
    exec(format(execTsDeclarationsSingle, name), shellOptions, code =>
      hasError(code, stderr) ? undefined : compiledMessage(replaceExtToDTs(name)),
    );
  });
});
