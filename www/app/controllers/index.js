//
// ## controllers.index
//

define([
  'helpers/namespace',
  'marionette',
  'hoodie'
],

function (app, Marionette, Hoodie) {

  "use strict";

  var controller = Marionette.Controller.extend({

    initialize: function (options) {
      this.options = options || {};
      this.index();
    },

    index: function () {
    }
  });

  return controller;

});
