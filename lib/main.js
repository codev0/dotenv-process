const dotenvProcess = function (config, processCallback) {
  // if ignoring process.env, use a blank object
  const environment = config.ignoreProcessEnv ? {} : process.env

  for (let configKey in config.parsed) {
    const value = environment.hasOwnProperty(configKey) ? environment[configKey] : config.parsed[configKey]
    const result = processCallback(configKey, value)
    config.parsed[result.key] = result.value;
  }

  return config
}

module.exports = dotenvProcess