const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
	plugins: [new HtmlWebpackPlugin({
		title: 'Skilling',
		template: './index.dev.ejs',
		filename: 'index.html'
	}),
	new CopyPlugin([
		{from: './manifest.json', to: 'manifest.json'},
		{from: './serviceWorker.js', to: 'serviceWorker.js'},
		{from: './images', to: 'images/'},
	])
	],
	resolve: {
		extensions: ['.ejs', '.js', '.jsx']
	},

	entry: {
		app: './src/index.js'
	},

	devtool: 'source-map',

	output: {
		filename: '[name].dev.js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'development',

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
