var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var moment = require('moment');
var fs = require('fs');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('html', function () {
    var pugLocals = JSON.parse(fs.readFileSync('./templates/data/locals.json'));
    pugLocals.date = moment().format('HH:MM MM/DD/YYYY');

    return gulp.src('templates/index.pug')
        .pipe(pug({
            locals: pugLocals
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('default', gulp.series('sass', 'html'));