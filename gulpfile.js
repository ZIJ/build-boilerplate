'use strict';

//dependencies
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');

// variables
var src = './src/';
var dist = './dist/';
var isProduction = (gutil.env.type === 'production');

// JSHint
gulp.task('lint:scripts', function() {
    return gulp.src([src + '**/*.js', 'gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// browserify, uglify
gulp.task('app:scripts', ['lint:scripts'], function() {
    return gulp.src(src + '**/*/main.js')
        .pipe(browserify({
            debug: !isProduction,
            transform: ['hbsfy']
        }))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(gulp.dest(dist));
});

// less, cssmin
gulp.task('app:styles', function () {
    return gulp.src(src + '**/*/main.less')
        .pipe(less({
            sourceMap: !isProduction
        }))
        .pipe(gulpif(isProduction, cssmin()))
        .pipe(gulp.dest(dist));
});

// html
gulp.task('app:html', function() {
    return gulp.src(src + '**/*.html')
        .pipe(gulp.dest(dist));
});

// Third-party libraries missing in NPM or Bower
gulp.task('vendor:other', function() {
    return gulp.src(src + 'vendor/**/*')
        .pipe(gulp.dest(dist + 'vendor'));
});

// jQuery
gulp.task('vendor:jquery', function() {
    return gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest(dist + 'vendor/jquery'));
});

// Twitter Bootstrap
gulp.task('vendor:bootstrap', function() {
    return gulp.src('bower_components/bootstrap/dist/**/*')
        .pipe(gulp.dest(dist + 'vendor/bootstrap'));
});

gulp.task('vendor', ['vendor:jquery', 'vendor:bootstrap', 'vendor:other']);
gulp.task('app', ['app:html', 'app:styles', 'app:scripts']);
gulp.task('default', ['vendor', 'app']);
