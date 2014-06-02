var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('jade', function () {
  var YOUR_LOCALS = {};

  gulp.src('./public/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('stylus', function () {
  gulp.src('./public/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./public/*.jade', ['jade']);
  gulp.watch('./public/stylus/*.styl', ['stylus']);
});

gulp.task('default', ['jade', 'stylus']);
