const watch = require('node-watch');
const shell = require('shelljs');

// options
const watchOptions = {
  recursive: true,
  filter: /^((?!(node_modules|\.cjs|\.js|\.d\.ts)).)*$/,
};
const shellOptions = {
  async: true
};

// bins
const babel = './node_modules/.bin/babel';
const tsc = './node_modules/.bin/tsc';
const babelPlugins = '--plugins @babel/plugin-transform-modules-commonjs';

// npm scripts
const exeClean = 'npm run clean';
const execBabelCjsModuleAll = 'npm run compile:cjs:all';
const execBabelJsModuleAll = 'npm run compile:mjs:all';
const execTsDeclarationsAll = 'npm run compile:dec:all';
const execBabel = [exeClean, execBabelCjsModuleAll, execBabelJsModuleAll, execTsDeclarationsAll].join('&& '); // '&& ' => run in shell sequentially

// helper
const compiledMessage = name => console.log('Successfully compiled 1 file with Babel: %s', name);
const replaceToJs = name => name.replace('.ts', '.js');
const replaceToCJs = name => name.replace('.ts', '.cjs');
const replaceToDTs = name => name.replace('.ts', '.d.ts');

// First compile all files to .js and .cjs
shell.exec(execBabel, (code, stdout, stderr) => {

  // Then compile particular file on change
  watch('./packages', watchOptions, (_, name) => {

    // to esModule
    shell.exec(`${babel} ${name} --out-file ${replaceToJs(name)} --source-maps inline`, shellOptions,
      _ => code !== 0 && stderr ? null : compiledMessage(replaceToJs(name)),
    );

    // to commonjs
    shell.exec(`${babel} ${name} --out-file ${replaceToCJs(name)} ${babelPlugins} --source-maps inline`, shellOptions,
      _ => code !== 0 && stderr ? null : compiledMessage(replaceToCJs(name)),
    );

    // to definition file
    shell.exec(`${tsc} ${name} --emitDeclarationOnly --declaration`, shellOptions,
      _ => code !== 0 && stderr ? null : compiledMessage(replaceToDTs(name)),
    );
  });
});
