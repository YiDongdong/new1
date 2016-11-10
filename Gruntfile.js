module.exports = function(grunt) {
  //当前对外输出的模块


  // Project configuration.
  grunt.initConfig({//配置
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
     
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    htmlmin: { // Task 
      dist: { // Target 
        options: { // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: { // Dictionary of files 
          'build/index.html': 'src/index.html', // 'destination': 'source' 
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/css.css':'src/css/css.css',
        }
      }
  }





  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 /* grunt.loadNpmTasks('grunt-contrib-imagemin');*/

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','htmlmin','cssmin'/*,'imagemin'*/]);

};