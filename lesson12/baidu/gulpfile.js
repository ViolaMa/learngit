/**
 * Created by admin on 2017/3/15.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('htmlmin', function () {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./app'));
});

gulp.task('uglify', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./app/js'));
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./src/*html', ['htmlmin']);
    gulp.watch('./src/js/*.js', ['uglify']);
});

gulp.task('default', ['sass', 'htmlmin', 'uglify', 'watch'], function () {
    console.log('gulp succeed');
});