/*-------------------- plug-in --------------------------------- */
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task("default", function() {
  return gulp.watch("scss/**/*.scss", function() {
    return (
      gulp
        .src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(
          sass({
            outputStyle: "nested"
          })
          .on("error", sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest("css"))
    );
  });
});
