module.exports = function(grunt) {
  var theme_path = 'sites/all/themes/projec_name';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // GruntIcon
    grunticon: {
      myIcons: {
        files: [{
          expand: true,
          cwd: theme_path + '/src/img/icons/svg/',
          src: ['*.svg', '*.png'],
          dest: theme_path + '/build/img/grunticon/'
        }],
        options: {
          colors: {},
          cssprefix: '.',
          customselectors: {}
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task(s).
  grunt.registerTask('default', 'grunticon');
};
