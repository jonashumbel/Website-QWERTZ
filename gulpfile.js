// Node modules
var fs = require('fs'),
  vm = require('vm'),
  merge = require('deeply'),
  chalk = require('chalk'),
  es = require('event-stream');

// Gulp and plugins
var gulp = require('gulp'),
  rjs = require('gulp-requirejs-bundler'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  replace = require('gulp-replace'),
  uglify = require('gulp-uglify'),
  htmlreplace = require('gulp-html-replace'),
  webserver = require('gulp-webserver');

// Config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('src/app/require.config.js') + '; require;');
requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
  out: 'scripts.js',
  baseUrl: './src',
  name: 'app/startup',
  paths: {
    requireLib: '../node_modules/requirejs/require'
  },
  include: [
    'requireLib',
    'components/app/app',
    'pages/kontakt/kontakt',
    'pages/team/team',
    'pages/shop/shop',
    'pages/home/home',
    'pages/event/event',
    'pages/approval/approval'
  ],
  insertRequire: ['app/startup'],
  bundles: {
    // If you want parts of the site to load on demand, remove them from the 'include' list
    // above, and group them into bundles here.
    // 'bundle-name': [ 'some/module', 'another/module' ],
    // 'another-bundle-name': [ 'yet-another-module' ]
    // 'about-page': [ 'pages/about/about' ]
  }
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', function() {
  return rjs(requireJsOptimizerConfig)
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(gulp.dest('./dist/'));
});

// Concatenates CSS files, rewrites relative paths to Bootstrap fonts
gulp.task('css', function() {
  //Array of all CSS files needed
  var appCss = gulp.src([
      './src/css/*.css'
    ])
    .pipe(replace(/url\((')?\.\.\/fonts\//g, 'url($1fonts/'));
  var combinedCss = es.concat(appCss).pipe(concat('css.css'));
  return es.concat(combinedCss)
    .pipe(gulp.dest('./dist/css/'));
});


// Moves the bootstrap fonts to the dist-folder
gulp.task('fonts', function() {
  return gulp.src('./node_modules/bootstrap/fonts/*', {
      base: './node_modules/bootstrap/components-bootstrap/'
    })
    .pipe(gulp.dest('./dist/fonts'));
});


// Copies index.html, replacing <script> and <link> tags to reference production URLs
gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlreplace({
      'css': 'css/css.css?' + Date.now(),
      'js': 'scripts.js?' + Date.now()
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('img', function() {
  return gulp.src([
      'src/images/*'
    ])
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('video', function() {
  return gulp.src([
      'src/videos/*'
    ])
    .pipe(gulp.dest('./dist/videos/'));
});

// Removes all files from ./dist/
gulp.task('clean', function() {
  return gulp.src('./dist/**/*', {
      read: false
    })
    .pipe(clean());
});

gulp.task('default', ['html', 'js', 'css', 'img', 'video', 'fonts'], function(callback) {
  callback();
  console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});

// Sets up a webserver with live reload for development
gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      port: 8050,
      directoryListing: true,
      open: 'http://localhost:8050/src/index.html'
    }));
});
