var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');
/*
function styles() {
	return gulp.src('./app/assets/styles/main.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
};
*/
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/main.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});