var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var moment = require('moment');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('html', function () {
    return gulp.src('templates/main.pug')
        .pipe(pug({
            locals: {
                date: moment().format('HH:MM MM/DD/YYYY')
            }
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['sass', 'html']);