module.exports = {
	mode: 'production',
	entry: "./app/assets/scripts/App.js",
	output: {
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
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
		    }
		]
	}
}