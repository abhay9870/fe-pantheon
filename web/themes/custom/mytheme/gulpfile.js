const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
// const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

gulp.task('styles', done => {
	gulp.src('./src/sass/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
	done();
});

function isFixed(file) {
	// Has ESLint fixed the file contents?
	return file.eslint != null && file.eslint.fixed;
}

gulp.task('lint', done => {
	gulp
		.src(['./src/js/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError())
		.pipe(gulp.dest('./js'))
	done();
});

gulp.task('watch', done => {
	// gulp.watch('./src/images/*', gulp.series('imagemin'));
	gulp.watch('./src/sass/*.scss', gulp.series('styles'));
	// gulp.watch('./src/js/*.js', gulp.series('lint'));
	done();
});