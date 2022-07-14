const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: [
    __dirname + '/src/app/index.js',
    __dirname + '/src/styles/style.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/index.js',
  },
  devServer: {
    port: 5000,
    host: '192.168.8.101',
    watchFiles: ['src/**/*'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'css/', name: '[name].css' },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    })
  ],
};
