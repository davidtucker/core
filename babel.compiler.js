const watch = require('node-watch');
const shell = require('shelljs');
const util = require('util');

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
const replaceExtToCJs = name => name.replace('.ts', '.cjs');
const replaceExtToDTs = name => name.replace('.ts', '.d.ts');
const compiledMessage = name => console.log('Successfully compiled 1 file with Babel: %s', name);
const hasError = (code, stderr) => code !== 0 && stderr;

// First compile all files to .js and .cjs
shell.exec(execBabel, (code, stdout, stderr) => {
  // Then compile particular file on change
  watch('./packages', watchOptions, (_, name) => {
    // compile to esModule
    shell.exec(util.format(execBabelJsModuleSingle, name, replaceExtToJs(name)), shellOptions, code =>
      hasError(code, stderr) ? null : compiledMessage(replaceExtToJs(name)),
    );
    // compile to commonJs
    shell.exec(util.format(execBabelCjsModuleSingle, name, replaceExtToCJs(name)), shellOptions, code =>
      hasError(code, stderr) ? null : compiledMessage(replaceExtToCJs(name)),
    );
    // compile to definition file
    shell.exec(util.format(execTsDeclarationsSingle, name), shellOptions, code =>
      hasError(code, stderr) ? null : compiledMessage(replaceExtToDTs(name)),
    );
  });
});

// bonus: write scripts/babel.compiler.js in golang
// https://github.com/urfave/cli/blob/master/docs/v2/manual.md
// https://golang.org/pkg/os/exec/
// https://github.com/fsnotify/fsnotify
