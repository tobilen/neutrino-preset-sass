const merge = require('deepmerge');

module.exports = ({ config }, options = {}) => {
  config.module.rule('style')
  .test(/\.scss$/)
  .use('sass')
  .loader(require.resolve('sass-loader'))
  .options(options);

  config.module.rule('style')
  .use('css')
  .tap(options => merge(options, { importLoaders: 1 }));
};