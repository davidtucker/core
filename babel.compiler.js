const watch = require('node-watch');
const shell = require('shelljs');

const watchOptions = {
  recursive: true,
  filter: /^((?!(node_modules|\.cjs|\.js)).)*$/,
};

const babel = './node_modules/.bin/babel';
const babelPlugins = '--plugins @babel/plugin-transform-modules-commonjs';
const babelOptions = '--source-maps inline';
const execBabelCjsModule = `${babel} ./packages --out-dir ./packages -x .ts --out-file-extension .cjs  ${babelPlugins} ${babelOptions}`;
const execBabelJsModule = `${babel} ./packages --out-dir ./packages -x .ts --out-file-extension .js ${babelOptions}`;
const execBabel = [execBabelCjsModule, execBabelJsModule].join('& '); // '& ' => run in shell parallel

// First compile all files
shell.exec(execBabel, (code, stdout, stderr) => {
  // Then compile particular file on change
  const compiledMessage = name => console.log('Successfully compiled 1 file with Babel: %s', name);
  const replaceToJs = name => name.replace('.ts', '.js');
  const replaceToCJs = name => name.replace('.ts', '.cjs');

  watch('./packages', watchOptions, (_, name) => {
    shell.exec(`${babel} ${name} --out-file ${replaceToJs(name)}`,
      _ => code !== 0 && stderr ? null : compiledMessage(replaceToJs(name)),
    );
    shell.exec(`${babel} ${name} --out-file ${replaceToCJs(name)} ${babelPlugins}`,
      _ => code !== 0 && stderr ? null : compiledMessage(replaceToCJs(name)),
    );
  });
});

// Bonus: write whole file in bash!
// Bonus: move this to pg-karma-babel-plugin
