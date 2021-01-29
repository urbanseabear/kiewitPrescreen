const path = require("path");

const config = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;