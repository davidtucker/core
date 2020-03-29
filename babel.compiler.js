import watch from 'node-watch'
import shell from 'shelljs';

const watchOptions = {
    recursive: true,
    filter: f => !/node_modules/.test(f),
};
const babel = './node_modules/.bin/babel';
const files = `
    for script in $(find packages/ -iname '*.ts' -not -path 'node_modules' | sed -e 's|.ts||g'); do
        ${babel} $script.ts --out-file $script.js;
        ${babel} $script.ts --out-file $script.cjs --plugins @babel/plugin-transform-modules-commonjs
    done
`;

const onDone = code => code !== 0 ? shell.exit() : null;
shell.exec(files, (code, stdout, stderr) => {
  // Log result
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);

  watch('packages', watchOptions, (_, name) => {
    const shellOption = {async:true};
    // shell.exec('echo ".js"', shellOption, onDone);
    // shell.exec('echo ".cjs"', shellOption, onDone);
    console.log('%s changed', name);
  });
});
