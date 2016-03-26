var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');
 
gulp.task('connect', function() {
  connect.server({}, function (){
    browserSync({
      proxy: 'linkr.md'
    });
  });
 
  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('default', ['connect']);