//------------------------------------------------------------------------------
// CONFIGURATION
//------------------------------------------------------------------------------
var config = {};

// base path
config.base = './';

// theme path
config.theme = 'sites/all/themes/theme_name';

// paths
config.paths = {
  bower: 'bower_components',
  theme: config.base + config.theme,
  js_core: [config.base + 'misc/**/*.js', '!' + config.base + 'misc/*.min.js', '!' + config.base + 'misc/jquery.js'],
  js_core_modules: [config.base + 'modules/**/*.js', '!' + config.base + 'modules/**/*.min.js'],
  js_contrib: [config.base + 'sites/all/modules/contrib/**/*.js'],
  js_custom: [config.base + 'sites/all/modules/custom/**/*.js'],
  js_patched: [config.base + 'sites/all/modules/patched/**/*.js'],
  js_libraries: [config.base + 'sites/all/libraries/**/*.js'],

  // the theme JS files for compression
  js_theme: [
    config.base + config.theme + '/build/js/*.js'
  ],

  // path to bundle js
  theme_bundle_js: config.base + config.theme + '/src/js/*.js',
  theme_source_templates: config.base + config.theme + '/src/js/**/*.nunj',
  theme_source_js: config.base + config.theme + '/src/js/**/*.js',

  // where it builds to
  theme_built_js: config.base + config.theme + '/build/js',

  // the theme SCSS files for compiling.
  theme_bundle_css: config.base + config.theme + '/src/scss/*.scss',
  theme_source_css: config.base + config.theme + '/src/scss/**/*.scss',
  theme_built_css: config.base + config.theme + '/build/css'
};

module.exports = config;
