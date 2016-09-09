var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat');

// Settings tasks
gulp.task('watch', function() {
  gulp.watch('stylus/**/*.*', ['css']);
});

gulp.task('css', function() {
  gulp.src(['./stylus/main.styl'])
    .pipe(stylus())
	.pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['css', 'watch']);
