const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(require('./config.js'), {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, '../build'),
    port: 8090,
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: '/build/index.html' }],
    },
  },
});
