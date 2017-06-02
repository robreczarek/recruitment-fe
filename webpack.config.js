const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: path.resolve(__dirname),
    disableHostCheck: true,
  },
};
