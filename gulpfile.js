'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('css', function () {
	console.log("Testing");
	return gulp.src(['./src/css/*.scss'])
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('./src/css/'));
});

gulp.task('default', ['css'], function () {
	console.log("All tasks completed");
});
