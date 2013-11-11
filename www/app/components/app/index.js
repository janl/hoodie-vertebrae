//
// # app.index
//

define([
  'helpers/namespace',
  'marionette',
  './controllers/index'
],

function (app, Marionette, AppController) {

  'use strict';

  return app.module('app', function () {

    this.addInitializer(function (options) {

      // start you applications main controller
      //
      this._controller = new AppController(options);

      // put together basic layout
      app.regions = app.rm.addRegions({
        header: 'header',
        section: 'section'
      });

    });

  });

});
