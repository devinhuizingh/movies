var gulp = require('gulp');

var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
//var imagemin = require('gulp-imagemin');
//var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
//var rename = require('gulp-rename');
//var source = require('vinyl-source-stream');
//var buffer = require('vinyl-buffer');
var mainbowerfiles = require('main-bower-files');

// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/css'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch(['js/*.js','js/**/*.js'], ['jshint']);
  //gulp.watch('scss/*.scss', ['sass']);
  
});

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

// Minify index
gulp.task('html', function() {
  return gulp.src('source/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('public/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return gulp.src('source/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('source/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('vendor', function(){
  return gulp.src(mainbowerfiles())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

// Build task
gulp.task('build', ['jshint', 'html', 'scripts', 'styles']);