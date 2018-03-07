var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('html', function () {
    return gulp.src('templates/index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['html']);