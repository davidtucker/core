import watch from 'node-watch'
import shell from 'shelljs';

// Bonus: write this in bash!

const watchOptions = {
  recursive: true,
  filter: f => !/node_modules/.test(f),
};

const babel = './node_modules/.bin/babel';
const babelPlugins = '--plugins @babel/plugin-transform-modules-commonjs';
const execBabelCjsModule = `${babel} ./packages --out-dir ./packages -x .ts --out-file-extension .cjs  ${babelPlugins}`;
const execBabelJsModule = `${babel} ./packages --out-dir ./packages -x .ts --out-file-extension .js`;
const execBabel = [execBabelCjsModule, execBabelJsModule].join('& ');

// Compile all files first
shell.exec(execBabel, (code, stdout, stderr) => {
  if (code !== 0 && stderr) {
    return shell.exec(`npm run clean`, _ => shell.exit(1));
  }

  // Compile particular file on change
  watch('./packages', watchOptions, (_, name) => {
    console.log('%s changed', name);
    shell.exec(`${babel} ${name} --out-file ${name.replace('.ts', '.js')}`);
    shell.exec(`${babel} ${name} --out-file ${name.replace('.ts', '.cjs')} ${babelPlugins}`);
  });
});
