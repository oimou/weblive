var jade = require('gulp-jade');

gulp.task('jade', function () {
  var YOUR_LOCALS = {};

  gulp.src('./public/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('watch', function () {
  gulp.watch('./public/*.jade', ['jade']);
});

gulp.task('default', ['jade']);
