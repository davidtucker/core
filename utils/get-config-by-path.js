const get = require('get-value');
const colors = require('colors/safe');

const getConfigByPath = (config, path, _in) => {
  const extractedConfig = get(config, path);
  if (!extractedConfig) {
    throw new Error(colors.red(`Could not find "${path}" in ${_in}`));
  }
  return extractedConfig;
};

module.exports = getConfigByPath;
