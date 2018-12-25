const gulp = require("gulp");
const minifycss = require("gulp-minify-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const htmlclean = require("gulp-htmlclean");

gulp.task("minify-css", function() {
  return gulp
    .src("./public/**/*.css")
    .pipe(minifycss())
    .pipe(gulp.dest("./public"));
});

gulp.task("minify-html", function() {
  return gulp
    .src("./public/**/*.html")
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
      })
    )
    .on("error", function(err) {
      console.log("html Error!", err.message);
      this.end();
    })
    .pipe(gulp.dest("./public"));
});

gulp.task("minify-js", function() {
  return gulp
    .src("./public/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./public"));
});

gulp.task("default", ["minify-html", "minify-css", "minify-js"]);
