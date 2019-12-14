var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

// Gulp task for starting browser sync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

// Gulp task for compiling scss
gulp.task('sass-compile', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({ 
            stream: true 
        }))
});

// Gulp task for bundling JavaScript files
gulp.task('pack-js', function() {
    return gulp.src(['assets/js/vendor/*.js', 'assets/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/production-build/js'));
});

// Gulp task for watching the changes that happen in files with .scss extension
gulp.task('watch', gulp.parallel('sass-compile', 'browserSync', 'pack-js', function() {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass-compile'));
    gulp.watch('*.html').on('change', browserSync.reload);
}));

// One task to rule them all.
gulp.task('run', gulp.series('watch', function() {
    return console.log('Gulp build successful!');
}));
