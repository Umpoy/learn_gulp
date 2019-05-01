const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('message', () => {
    return console.log('Hello World');
});

// Copy HTML files
gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

// Optimize Images
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

gulp.task('default', () => {
    return console.log('Running gulp...');
})