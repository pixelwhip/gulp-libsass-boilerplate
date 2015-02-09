var gulp = require('gulp'),
  changed = require('gulp-changed'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  es = require('event-stream'),
  debug = require('gulp-debug'),
  filter = require('gulp-filter');

var config = require('../config');

/**
 * Shortcut funtion to uglify JS files
 *
 * @param array glob The glob
 * @param string dest File destination
 * @param function glob_filter Optional filter for the JS files
 */
function uglify_modules_dir(glob, dest, glob_filter) {
  var stream = gulp.src(glob);

  // return the stream
  return stream
    // ignore jquery_update
    .pipe(filter(function(file) {
      return !(/jquery_update/.test(file.path)) && !(/\.min\.js/.test(file.path));
    }))
    // .pipe(debug())
    .pipe(changed(dest))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
}

/**
 * Compress JS files
 */
gulp.task('compress', ['bundle'], function() {
  return es.concat(
    // core JS
    gulp.src(config.paths.js_core)
      .pipe(changed(config.base + 'build/js/misc/'))
      .pipe(uglify())
      .pipe(gulp.dest(config.base + 'build/js/misc/')),

    // process core modules JS
    gulp.src(config.paths.js_core_modules)
      .pipe(changed(config.base + 'build/js/modules/'))
      .pipe(uglify())
      .pipe(gulp.dest(config.base + 'build/js/modules/')),

    // contrib modules
    uglify_modules_dir(
      config.paths.js_contrib,
      config.base + 'build/js/sites/all/modules/contrib/'
    ),

    // custom modules
    uglify_modules_dir(
      config.paths.js_custom,
      config.base + 'build/js/sites/all/modules/custom/'
    ),

    // process patched modules JS
    uglify_modules_dir(
      config.paths.js_patched,
      config.base + 'build/js/sites/all/modules/patched/'
    ),

    // process patched libraries JS
    uglify_modules_dir(
      config.paths.js_libraries,
      config.base + 'build/js/sites/all/libraries/'
    ),

    // process theme JS
    gulp.src(config.paths.js_theme)
      .pipe(changed(config.base + 'build/js/' + config.theme))
      .pipe(uglify())
      .pipe(gulp.dest(config.base + 'build/js/' + config.theme)),

    // copy the jquery distribution over
    gulp.src(config.base + 'node_modules/jquery/dist/jquery.min.js')
      .pipe(changed(config.base + 'build/js/'))
      .pipe(rename(config.base + 'misc/jquery.js'))
      .pipe(gulp.dest(config.base + 'build/js/'))
  );
});

gulp.task('scripts', ['bundle', 'compress']);
