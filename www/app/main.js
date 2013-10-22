//
// # main
//

define([
  'helpers/namespace',
  'models/config',
  'backbone',
  'hoodieBbn',
  'helpers/storage/store',
  'helpers/handlebars'
],

function (app, Config, Backbone) {

  'use strict';

  // activate Backbone-hoodie plugin
  Backbone.connect();

  app.start(new Config().toJSON());

});

