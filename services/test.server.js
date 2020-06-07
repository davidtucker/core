const { exec } = require('shelljs');
const { typescriptCompiler } = require('./typescript.compiler.service');

typescriptCompiler.subscribe(_ => {
  exec('npm run test:node:watch', { async: true });
  exec('npm run test:browser:watch', { async: true });
});
