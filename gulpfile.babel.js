import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('test', (callback) => {
  console.log('test done');
  callback();
});

gulp.task('default', (callback) => {
  gulp.src('src/scripts/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./assets/'))
});

