const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('lib/modules/apostrophe-assets/public/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('lib/modules/apostrophe-assets/public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function(){
  gulp.watch('lib/modules/apostrophe-assets/public/scss/**/*.scss',  gulp.series(['sass']));
  gulp.watch('lib/modules/*/views/*.html', browserSync.reload);
})
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'lib'
    },
  })
})
