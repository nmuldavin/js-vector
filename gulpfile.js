const gulp = require('gulp');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

gulp.task('lint', () => {
  return gulp.src('src/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
});

gulp.task('babel', () => {
  return gulp.src('src/*.js')
          .pipe(babel({
            presets: ['es2015']
          }))
          .pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint', 'babel']);

gulp.task('watch',() => {
  gulp.watch('src/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
