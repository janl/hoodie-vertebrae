//
// ## app/config
//

require.config({
  deps:            ['main'],
  paths: {
    app:           '.',
    text:          '../lib/requirejs-text/text',
    hbs:           '../lib/backbone.marionette.hbs/backbone.marionette.hbs',
    jquery:        '../lib/jquery/jquery',
    handlebars:    '../lib/handlebars/handlebars',
    lodash:        '../lib/lodash/dist/lodash',
    backbone:      '../lib/backbone/backbone',
    marionette:    '../lib/backbone.marionette/lib/backbone.marionette',
    q:             '../lib/q/q',
    cocktail:      '../lib/cocktail/Cocktail',
    hoodie:        '/_api/_files/hoodie',
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

  }

});

//
// requirejs error reporting
//
window.requirejs.onError = function (err) {
  'use strict';

  console.warn('require error: ', err.requireType);
  if (err.requireType === 'timeout') {
    console.warn('modules: ' + err.requireModules);
  }

  throw err;
};
