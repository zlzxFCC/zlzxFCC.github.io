'use strict';
// 引入 gulp
var gulp = require('gulp');
// 引入组件
var gutil = require('gulp-util'); //gulp工具类
var sprite = require("gulp-spriter");

//处理图片
gulp.task("sprite", function() {
		return gulp.src("src/css/style.css")
			.pipe(sprite({
				sprite: "test.png",
				slice: "./src/slice",
				outpath: "./src/debug-css/test"
			}))
			.pipe(gulp.dest("./src/debug-css"));
	})
	// 默认任务
gulp.task('default', ["sprite"], function(cb) {
	gutil.log("[INFO] :")
	gutil.log("Done ---- task has been compiled!")
});