const { exec } = require('shelljs');
const { typescriptCompiler } = require('../compiler/typescript.compiler');

typescriptCompiler.subscribe(_ => {
  exec('npm run test:node:watch', { async: true });
  exec('npm run test:browser:watch', { async: true });
});
