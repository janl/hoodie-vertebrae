//
// # index.index
//

define([
  'helpers/namespace',
  'marionette',
  './controllers/index'
],

function (app, Marionette, AppController) {

  'use strict';
  return app.module('index', function () {

    this.on('route:index', function () {
      new AppController();
    });

  });

});
