const gulp = require('gulp');

gulp.task('message', () => {
    return console.log('Hello World');
});

gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('default', () => {
    return console.log('Running gulp...');
})