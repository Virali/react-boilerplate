const { merge } = require('webpack-merge');

module.exports = merge(require('./config.js'), {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
  },
});
