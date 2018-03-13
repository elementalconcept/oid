const gulp = require('gulp');
const ts = require("gulp-typescript");
const imprint = require('gulp-imprint');

gulp.task('ts:build', () => {
  const project = ts.createProject('tsconfig.json');
  return gulp
    .src('./src/**/*.ts')
    .pipe(project())
    .js.pipe(gulp.dest(('./dist/out')));
});

gulp.task('ts:buildDefs', () => {
  const project = ts.createProject('tsconfig.json');
  return gulp
    .src('./src/**/*.ts')
    .pipe(project())
    .dts.pipe(gulp.dest('./dist/out'));
});
