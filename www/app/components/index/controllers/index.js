//
// # components.index.controllers.index
//

define([
  'helpers/namespace',
  'marionette'
],

function (app, Marionette) {

  'use strict';

  return Marionette.Controller.extend({

    initialize: function (options) {
      this.options = options || {};

      app.vent.on('layout:ready', function () {
        // start showing views
      });
    },

    index: function (data) {
      console.log('index route', data);
    }

  });

});
