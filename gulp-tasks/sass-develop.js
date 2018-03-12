module.exports = function (gulp, plugins, config, errorHandler) {
	gulp.task('sass-develop', ['scss-lint'], function() {
		return gulp.src(config.paths.input.styles)
			.pipe(plugins.plumber(errorHandler))
			.pipe(plugins.sass())
			.pipe(gulp.dest(config.paths.output.styles));
	});
};
