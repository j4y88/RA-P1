var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css');


gulp.task("kitty", function() {
	return gulp.src('css/*.css')
	.pipe(concat('con.css'))
	.pipe(gulp.dest('./dist/'))
});