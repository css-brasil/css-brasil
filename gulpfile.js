// Modules
// ===========================================
const gulp = require('gulp');
const connect = require('gulp-connect');
const stylus = require('gulp-stylus');
const metalsmith = require('./build.js');

// Compile Stylus
// ===========================================
gulp.task('css', () => {
  gulp.src(['./stylus/main.styl'])
    .pipe(stylus())
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

// Build static pages with metalsmith
// ===========================================
gulp.task('metalsmith', () => {
  metalsmith();
});

// Watch for changes
// ===========================================
gulp.task('watch', () => {
  gulp.watch('./stylus/**/*.*', ['css']);
  gulp.watch(['./src/**/*.*','./templates/**/*.*'], ['metalsmith']);
});

// Static server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: './build/',
		livereload: true
	});
});

// More Tasks
// ===========================================
gulp.task('build', ['metalsmith', 'css']);
gulp.task('serve', ['connect', 'watch']);
