'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('css', function () {
	return gulp.src(['./src/css/*.scss'])
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.scss', ['css']);
});

gulp.task('default', gulp.series(['css'], function () {
	console.log("All tasks completed");
}));
