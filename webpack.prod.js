const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Skilling',
			template: './index.prod.ejs',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin(),
		new CopyPlugin([
			{from: './manifest.json', to: 'manifest.json'},
			{from: './offline.html', to: 'offline.html'},
			{from: './serviceWorker.js', to: 'serviceWorker.js'},
			{from: './images', to: 'images/'},
		]),

		new webpack.optimize.AggressiveMergingPlugin(),
		new UglifyJSPlugin({
			uglifyOptions: {
				output: {
					comments: false
				}
			}
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	entry: {
		app: './src/index.js'
	},



	output: {
		filename: '[name].prod.js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'production',

	devtool: 'source-map',
	
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	}
};
