var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");


var onError = function(err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});


gulp.task('build', function() {
    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('assets/lib'))
});


gulp.task('server', ['browser-sync'], function(){
    gulp.watch('./assets/js/*.js', ['build']);
    gulp.watch(['./assets/lib/*.js']).on('change', browserSync.reload);
})

gulp.task('watch', function() { //
    gulp.watch('./assets/js/*.js', ['build']);
});

gulp.task('default', ['watch']);