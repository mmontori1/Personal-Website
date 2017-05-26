var webpack = require('webpack');
var path = require('path');
// maybe use later?
// var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        extensions: ['.js'],
        // root: path.resolve(__dirname),
		// alias: {
		// },
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
			},
			{
		          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
		          loader: 'file-loader?name=falco.ico'
		      }
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		// new HtmlWebpackPlugin()
		/* APPLY WHEN IN PRODUCTION
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   }
		}),
		new webpack.optimize.UglifyJsPlugin()
		*/
	],
	devServer: {
	    historyApiFallback: true,
	    hot: true
	},
};