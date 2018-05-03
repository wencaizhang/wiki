var gulp = require('gulp');
var concat = require('gulp-concat');
 
var uglify = require('gulp-uglify');

gulp.task('script0', function() {
	return gulp.src([
		"amWiki/js/gbk.js",
		"amWiki/js/pinyin.js",
		"amWiki/js/jquery-compat-3.1.0.min.js",
	])
	.pipe(concat('all0.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'));
});
gulp.task('script1', function() {
	return gulp.src([
		"amWiki/js/marked.min.js",
		"amWiki/js/highlight.pack.js",
	])
	.pipe(concat('all1.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'));
});
gulp.task('script2', function() {
	return gulp.src([
		"amWiki/js/raphael-min.js",
		"amWiki/js/flowchart.min.js",
	])
	.pipe(concat('all2.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'));
});
gulp.task('script3', function() {
	return gulp.src([
		"amWiki/js/amWiki.tools.js",
		"amWiki/js/amWiki.storage.js",
		"amWiki/js/amWiki.search.js",
		"amWiki/js/amWiki.search.worker.js",
		"amWiki/js/amWiki.docs.js",
		"amWiki/js/amWiki.scrollbar.js",
		"amWiki/js/amWiki.imgsView.js",
		"amWiki/js/amWiki.js"
	])
	.pipe(concat('all3.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/'));
});
gulp.task('default', ['script0', 'script1', 'script2', 'script3' ]);
