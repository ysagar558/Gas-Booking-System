const path = require('path')

module.exports = {
    mode:'development',
  entry: './src/Admin.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}