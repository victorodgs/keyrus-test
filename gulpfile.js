var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');


gulp.task('minify', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./production'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./production/css'));
});


gulp.task('copy-css', function() {
    reutrn .src(cssSourceFiles)
    .pipe(gulpCopy(outputPath, options))
    .dest(cssDestination);
});
   