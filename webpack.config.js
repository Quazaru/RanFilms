const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const pug = require('pug');

const isDev = process.env.NODE_ENV === 'development';
const optimize = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: "./js/index",
    react: ['@babel/polyfill', './React/script'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : 'static/js/[name].js',
    //     filename: 'static/js/[name].js'     - build,
    //     filename: '[name].js'     - watch,
  },
  optimization: optimize(),

  devServer: {
    historyApiFallback: true,
    port: 3800,
    hot: isDev,
  },
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          { loader: 'css-loader' },

        ],

      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'static/img', // outputPath: 'static/img',
        },
      },
      {
        test: /\.(ttf|woff|woff2|txt|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to '<template lang="pug">' in Vue components

          {
            use: ['pug-loader']
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pug/pages/index.pug',
      filename: isDev ? 'index.html': 'templates/index.html',
       // filename: 'templates/index.html', - build
        // filename: 'index.html', - watch
      chunks: ["react", "index"]
    }),

    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/**/*', to: isDev ? '' : 'static/' },
      ]
    }),
    new MiniCssExtractPlugin({
      exclude: '/\.map$/',
      filename: isDev ? '[name].css' : 'static/[name].css'

    }),
  ],
  resolve: {
    extensions: [ ".jsx", ".js"]
  }
};
