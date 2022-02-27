module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  let presets = [
    [
      require('@babel/preset-env').default,
       {
         useBuiltIns: "usage", // or "entry"
         corejs: 3
       }
    ],
    [
      require('@babel/preset-react').default,
      {
        development: isDevelopmentEnv || isTestEnv,
      }
    ],
  ].filter(Boolean);

  let plugins = [
    isProductionEnv && [
      require('babel-plugin-transform-react-remove-prop-types').default,
      {
        removeImport: true
      }
    ],
  ].filter(Boolean)

  return {
    plugins,
    presets,
  }
}
