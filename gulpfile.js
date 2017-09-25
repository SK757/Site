// Include GULP
var gulp = require('gulp'),
	// Include plugins
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect');
    htmlmin = require('gulp-html-minifier');
	jshint = require('gulp-jshint');
	concat = require('gulp-concat');
	rename = require('gulp-rename');


// Compress html
gulp.task('html', function() {
	return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(htmlmin({removeComments: true}))
    .pipe(gulp.dest('html'))
	.pipe(connect.reload());
});

// Compile sass  into css and compress it
gulp.task('sass', function() {
    return gulp.src('styles/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('styles/css'))
		.pipe(connect.reload());
});

// Ensure no errors in javascript
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate, minify and rename JS
gulp.task('js', function() {
    return gulp.src('js/dev/javascript.js')
        .pipe(concat('javascript.js'))
        .pipe(gulp.dest('js/prod'))
        .pipe(rename('javascript.min.js'))
    	.pipe(uglify())
        .pipe(gulp.dest('js/prod'))
		.pipe(connect.reload());
});

gulp.task('form', function() {
    gulp.src('form.php')
	.pipe(connect.reload());
});

// Watch files for changes and carry out task if changed
gulp.task('watch', function() {
	gulp.watch('*.html', ['html']);
	gulp.watch('styles/sass/*.scss', ['sass']);
	gulp.watch('js/dev/*.js', ['lint', 'js']);
	gulp.watch('form.php', ['form']);
});

// Runs server and enables page reload on changes
gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

// Default taks runs all tasks
gulp.task('default', ['sass', 'js', 'html', 'watch', 'connect']);

