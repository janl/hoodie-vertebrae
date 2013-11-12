/*global module:false*/

module.exports = function (grunt) {

  'use strict';

  // custom tasks
  grunt.loadTasks('build/tasks/');

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-groc');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-lintblame');

  // Project configuration.
  grunt.initConfig({

    lintblame: {
      files: [
        'Gruntfile.js',
        'karma.conf.js',
        'www/app/**/*.js',
        'tests/**/*-spec.js',
        'tests/www/app/config.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['<%= lintblame.files %>', 'www/assets/less/**/*.less', 'www/app/**/*.less', '!www/app/compiled/*'],
      tasks: ['lintblame', 'karma', 'recess', 'dependencies_builder', 'template_builder']
    },

    copy: {
      dist: {
        files: {
          'prod/app/index.html': 'www/app/index.html',
          'prod/': ['www/assets/images/*', 'www/assets/css/*']
        }
      }
    },

    recess: {
      white: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'www/assets/css/app.css' : ['www/assets/less/themes/app.less']
        }
      }
    },

    requirejs: {
      production: {
        options: {
          almond: true,
          replaceRequireScript: [{
            files: ['prod/app/index.html'],
            module: 'main',
            modulePath: 'app/main'
          }],
          insertRequire: ['main'],
          baseUrl: 'www/app',
          optimizeCss: 'none',
          optimize: 'uglify',
          uglify: {
            'beautify': false,
            'no-dead-code': true,
            'reserved-names': 'require'
          },
          inlineText: true,
          useStrict: true,
          findNestedDependencies: true,
          optimizeAllPluginResources: true,
          paths: {
            lib:           '../lib/',
            text:          '../lib/requirejs-text/text',
            hbs:           '../lib/backbone.marionette.hbs/backbone.marionette.hbs',
            jquery:        '../lib/jquery/jquery',
            handlebars:    '../lib/handlebars/handlebars',
            lodash:        '../lib/lodash/dist/lodash',
            backbone:      '../lib/backbone/backbone',
            marionette:    '../lib/backbone.marionette/lib/backbone.marionette',
            cocktail:      '../lib/cocktail/Cocktail',
            q:             '../lib/q/q',
            hoodie:        '../lib/hoodie/dist/hoodie',
            hoodieBbn:     '../lib/backbone-hoodie/index'
          },

          shim: {
            'backbone': {
              deps: ['lodash', 'jquery'],
              exports: 'Backbone'
            },

            'marionette': {
              deps: ['backbone'],
              exports: 'Backbone.Marionette'
            },

            'handlebars': {
              exports: 'Handlebars'
            }

          },
          out: 'prod/app/main.js',
          name: 'main'
        }
      }
    },

    comment_builder: {
      options: {
        src: 'prod/www/app/index.html'
      }
    },

    groc: {
      javascript: [
        'www/app/**/*.js'
      ],
      options: {
        'out': 'docs/',
        'whitespace-after-token': false
      }
    },

    karma: {
      'default': {
        configFile: 'karma.conf.js'
      }
    }

  });

  // Default task.
  grunt.registerTask('default', 'lintblame');

  grunt.registerTask('test', ['lintblame', 'karma']);
  grunt.registerTask('build', ['lintblame', 'karma', 'recess', 'copy', 'requirejs', 'comment_builder']);
  grunt.registerTask('docs', 'groc');

};
