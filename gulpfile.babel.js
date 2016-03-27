import gulp from 'gulp';
import gutil from 'gulp-util';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import concatCss from 'gulp-concat-css';

gulp.task('react', () => {
    return browserify({
            entries: './source/app.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
        })
        .bundle()
        .on('error', function(err){
            gutil.log(gutil.colors.red.bold('[browserify error]'));
            gutil.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('css', () => {
 return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css','css/style.css','node_modules/react-geosuggest/module/geosuggest.css'])
        .pipe(concatCss("/css/style.css"))
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['react', 'css']);

gulp.task('watch', ['build'], () => {
    gulp.watch('./source/**/*.jsx', ['react']);
});

gulp.task('default', ['watch']);
