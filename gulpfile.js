'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("libs/*.css").on('change', browserSync.reload);
  gulp.watch("libs/*.js").on('change', browserSync.reload);
});


/////////////// tasks ////////////////
gulp.task('connect', function() {
  connect.server();
});

gulp.task('sass', function() {
  return gulp.src('./libs/css/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./libs/css/'));
});

// CSS concat minify
gulp.task('styles', function() {
  return gulp.src(['./libs/css/*.css'])
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./libs/'))
    .pipe(browserSync.stream());
});

// JSHint
gulp.task('jshint', function() {
  gulp.src('./libs/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// JS concat and minify
gulp.task('scripts', function() {
  gulp.src(['./libs/js/plugins/*.js', './libs/js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./libs/'));
});

gulp.task('default', ['sass', 'styles', 'jshint', 'scripts', 'connect'], function() {

});

gulp.task('gulp-dev', ['sass', 'jshint', 'connect'], function() {

});

gulp.watch('./libs/css/scss/**/*.scss', function() {
  gulp.run('sass');
});

gulp.watch('./libs/css/*.css', function() {
  gulp.run('styles');
});

gulp.watch('./libs/js/**/*.js', function() {
  gulp.run('scripts');
});
