const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const minify = require('gulp-minify');
const server = require('browser-sync').create();
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('çss', function () {
    return gulp.src('source/scss/style.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('source/'))
})

gulp.task('js', function () {
    return gulp.src('source/script.js')
        .pipe(minify())
        .pipe(rename('script.min.css'))
        .pipe(gulp.dest('source/'))
})

gulp.task('serve', function() {

    server.init({
        server: "source/"
    });

    gulp.watch("source/scss/*.scss", gulp.series('çss'));
    gulp.watch("source/script.js", gulp.series('js'));
    gulp.watch("source/*.html").on('change', server.reload);
});

gulp.task('dev', gulp.series('css'));