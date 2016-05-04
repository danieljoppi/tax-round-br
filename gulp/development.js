'use strict';
var file = '*', msg = '**/*-test.js';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    appRoot = process.cwd(),
    paths = {
        js: [
            `${appRoot}/gulp/**/*.js`,
            `${appRoot}/lib/**/*.js`
        ],
        jsTests: [`${appRoot}/test/**/*-test.js`]
    };

gulp.task('env:development', () => {
    process.env.NODE_ENV = 'development';

    process.argv.forEach(function (val, index, array) {
        if (val === '-file' || val === '--f') {
            let env_val = array[index + 1];
            msg = `**/*${env_val}*-test.js`;
            file = `*${env_val}`;
        }
    });
    console.log('use => load tests: ', msg);
});

gulp.task('dev:eslint', () => {
    return gulp.src(paths.js.concat(paths.jsTests))
        .pipe(plugins.plumber())
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format());
});

gulp.task('dev:mocha', ['dev:eslint'], () => {
    return gulp.src(`${appRoot}/test/**/${file}-test.js`)
        .pipe(plugins.plumber())
        .pipe(plugins.mocha({
            reporters: 'spec',
            timeout: 50000
        }));
});

gulp.task('watch', ['dev:mocha'], () => {
    let jsAll = [...paths.js, ...paths.jsTests];
    gulp.watch(jsAll, ['dev:mocha']).on('error', e => console.error(e));
});

var defaultTasks = ['env:development', 'dev:eslint', 'dev:mocha', 'watch'];
gulp.task('development', defaultTasks);