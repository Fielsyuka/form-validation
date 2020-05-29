/*-------------------- plug-in --------------------------------- */
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task("build", function() {
    return (
      gulp
        .src("public/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(
          sass({
            outputStyle: "nested"
          })
          .on("error", sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest("public/css"))
    );
});

gulp.task('watch', function(){
    return gulp.watch("public/scss/**/*.scss", gulp.series('build'));
});

