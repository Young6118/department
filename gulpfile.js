// 引入 gulp 工具
const gulp = require("gulp");
const uglify = require("gulp-uglify");
// babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中
const babel = require("gulp-babel");
// process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()。

// process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
const argv = require('minimist')(process.argv.slice(2));
// 引入 babel 的配置
const babelOptions = require('./babel.config.js');

// gulp 开发时的任务流创建
gulp.task('appboard-dev', () => {
    return gulp.src(argv.filePath || './common/dist/appboard/*.js')
        .pipe(babel(babelOptions))
        .pipe(gulp.dest('./common/dist/appboard'));
});

// 创建gulp编译打包的工作流
gulp.task('appboard-build', () => {
    return gulp.src('./common/dist/appboard/*.js')
        .pipe(babel(babelOptions))
        .pipe(uglify())
        .pipe(gulp.dest('./common/dist/appboard'));
});

// 默认工作流
gulp.task('default', gulp.parallel('appboard-dev'));