var jade = require('gulp-jade');

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./public/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('default', ['jade']);
