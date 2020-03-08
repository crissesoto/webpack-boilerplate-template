const path = require('path');

module.exports = {
    entry: "./src/ui-library/index.js", //relative path
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist/assets") //absolute path
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/",
        compress: true,
        port: 9000
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ]
      }
};