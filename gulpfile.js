// These gulp tasks can be ran using the command: gulp.
// The gulp command will create a build folder, which you'll
// point your server to.
// The build folder will not be minified, but will contain
// things like validated HTML, compiled SASS, vendor-prefixed CSS etc...

// Autobuild on file saves with: gulp watch
// Watch tasks are used to update file changes,
// and will be ran automatically.
// use `ctrl+c` to quit the watch task.

// To build the dist folder use the command: gulp dist
// This will run minification processes and render the code
// unreadalbe.

// Include gulp
var gulp = require('gulp');

// Include Plugins
// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
 
 
 
 

// Minifies JS Files
gulp.task('compress-js', function() {
  gulp.src('build/js/**/*.js')
    .pipe(plugins.minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist/js'))
});
 
 
// Put CSS libs in build
gulp.task('build-vendor-css', function() {
    return gulp.src('src/vendor/**/*.css')
    .pipe(gulp.dest('build/vendor'))
})

// Put CSS libs in dist
gulp.task('dist-vendor-css', function() {
    return gulp.src('build/vendor/**/*.css')
    .pipe(gulp.dest('dist/vendor'))
})

// Put JS in build
gulp.task('build-js', function() {
    return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('build/js'))
})


// Put JS libs in build
gulp.task('build-vendor-js', function() {
    return gulp.src('src/vendor/**/*.js')
    .pipe(gulp.dest('build/vendor'))
})

// Put JS libs in dist
gulp.task('dist-vendor-js', function() {
    return gulp.src('build/vendor/**/*.js')
    .pipe(gulp.dest('dist/vendor'))
})

// Minify CSS
gulp.task('minify-css', function() {
   return gulp.src('build/css/*.css')
    //.pipe(strip({ignore: /url\([\w\s:\/=\-\+;,]*\)/g}))
    .pipe(plugins.cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

 
 
// Minify HTML
gulp.task('minify-html', function () {
  return gulp.src('build/*.html')
    .pipe(plugins.stripComments())
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
 
// Compress Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('build/images'));
});

// Add images to dist
gulp.task('dist-images', function() {
    return gulp.src('build/images/**/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Validate HTML
gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(plugins.html())
  .pipe(gulp.dest('build/'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('build/css/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass', 'html']);
});

// Build Distrobution Folder
gulp.task('dist', [
        'minify-html', 
        'minify-css', 
        'dist-images',
        'dist-vendor-css',
        'dist-vendor-js',
        'compress-js'
    ]);

// Default Task
gulp.task('default', [
        'sass', 
        'html', 
        'images', 
        'build-vendor-css',
        'build-vendor-js',
        'build-js'
    ]);
