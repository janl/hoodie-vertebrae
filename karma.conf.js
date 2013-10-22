// Karma configuration
// Generated on Tue Oct 22 2013 12:40:42 GMT+0200 (CEST)

module.exports = function (config) {

  'use strict';

  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      // put all components in requirejs 'paths' config here (included: false)
      { pattern: 'www/app/**/*.js', watched: true, included: false },
      { pattern: 'www/app/**/*.html', watched: true, included: false },

      // all src and test modules (included: false)
      { pattern: 'tests/app/support/helper.js', watched: true, included: false },
      { pattern: 'tests/app/fixtures/**/*.js', watched: true, included: false },
      { pattern: 'tests/app/helpers/**/*.js', watched: true, included: false },

      { pattern: 'tests/app/models/*.js', watched: true, included: false },
      { pattern: 'tests/app/components/**/*.js', watched: true, included: false },

      // libs required for test framework
      { pattern: 'www/lib/sinonjs/sinon.js', watched: false, included: true },
      { pattern: 'www/lib/expect/expect.js', watched: false, included: true},

      // app config require module last
      { pattern: 'www/lib/requirejs-text/text.js', watched: false, included: false },
      { pattern: 'www/lib/jquery/jquery.js', watched: false, included: false },
      { pattern: 'www/lib/lodash/dist/lodash.js', watched: false, included: false },
      { pattern: 'www/lib/backbone/backbone.js', watched: false, included: false },
      { pattern: 'www/lib/backbone.marionette/lib/backbone.marionette.js', watched: false, included: false },
      { pattern: 'www/lib/handlebars/handlebars.js', watched: false, included: false },
      { pattern: 'www/lib/backbone.marionette.hbs/backbone.marionette.hbs.js', watched: false, included: false },
      { pattern: 'www/lib/backbone.uniquemodel/backbone.uniquemodel.js', watched: false, included: false },
      { pattern: 'www/lib/backbone.localStorage/backbone.localStorage.js', watched: false, included: false },
      { pattern: 'www/lib/q/q.js', watched: false, included: false },
      { pattern: 'www/lib/cocktail/Cocktail.js', watched: false, included: false },

      'tests/app/config.js'

    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    preprocessors: [],


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
