var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  path = require('path'),
  requireDir = require('require-dir');

var config = require('./resources/gulp/config'),
  dir = requireDir('./resources/gulp/tasks');

/**
 * Default task
 */
gulp.task('default', function () {
  gulp.watch(config.paths.theme_source_css, ['styles']).on('change', livereload.changed);
  gulp.watch(config.paths.theme_source_js, ['scripts']).on('change', livereload.changed);
  gulp.watch(config.paths.theme_bundle_js, ['scripts']).on('change', livereload.changed);
});

/**
 * Dev task
 */
gulp.task('dev', function () {
  gulp.watch(config.paths.theme_source_css, ['styles']).on('change', livereload.changed);
  gulp.watch([
      config.paths.theme_source_js,
      config.paths.theme_source_templates,
      config.paths.theme_bundle_js
    ],
    ['bundle']
  ).on('change', livereload.changed);
});
