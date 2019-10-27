var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

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
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({ 
            stream: true 
        }))
});

// Gulp task for watching the changes that happen in files with .scss extension
gulp.task('watch', gulp.parallel('sass-compile', 'browserSync', function() {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass-compile'));
    //gulp.watch('*.html').on('change', browserSync.reload);
}));

// One task to rule them all.
gulp.task('run', gulp.series('watch', function() {
    console.log("Gulp build successful.");
}));