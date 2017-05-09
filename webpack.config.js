var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: 'inline-source-map',
	entry: './app.jsx',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modules: ['node_modules', 'src'],
        extensions: ['.js']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(), 
		// (already handling hot reload with --hot in dev)
		new webpack.NoEmitOnErrorsPlugin()
	],
};