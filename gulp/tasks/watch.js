var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function () {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function () {
		//gulp.start('html');
		//html();
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'));

	watch('./app/assets/scripts/**/*.js', gulp.series('scripts', 'scriptsRefresh'));

});
/*
function cssInject() {
	return gulp.src('./app/temp/styles/main.css')
	.pipe(browserSync.stream());
};
*/
gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/main.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function() {
	browserSync.reload();
})