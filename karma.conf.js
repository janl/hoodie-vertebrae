// Karma configuration
// Generated on Thu Jul 11 2013 21:44:57 GMT+0100 (BST)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  // put all components in requirejs 'paths' config here (included: false)
  //{ pattern: 'lib/**/*.js', watched: false, included: false},
  { pattern: 'www/app/**/*.js', watched: true, included: false},

  // all src and test modules (included: false)
  { pattern: 'tests/app/collections/*.js', watched: true, included: false },
  { pattern: 'tests/app/models/*.js', watched: true, included: false },
  { pattern: 'tests/app/views/*.js', watched: true, included: false },

  // libs required for test framework
  { pattern: 'www/lib/sinonjs/sinon.js', watched: false, included: true },
  { pattern: 'www/lib/expect/expect.js', watched: false, included: true},

  // app config require module last
  { pattern: 'www/lib/requirejs-text/text.js', watched: false, included: false},
  { pattern: 'www/lib/jquery/jquery.js', watched: false, included: false},
  { pattern: 'www/lib/lodash/lodash.js', watched: false, included: false},
  { pattern: 'www/lib/backbone/backbone.js', watched: false, included: false},
  { pattern: 'www/lib/backbone.marionette/lib/backbone.marionette.js', watched: false, included: false},
  { pattern: 'www/lib/handlebars/handlebars.js', watched: false, included: false},
  { pattern: 'www/lib/backbone.marionette.hbs/backbone.marionette.hbs.js', watched: false, included: false},

  'tests/app/config.js'
];


// list of files to exclude
exclude = [
  'www/app/config.js'
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
