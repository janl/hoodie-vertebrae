define([
  'backbone'
],

function (Backbone) {

  'use strict';

  return Backbone.Router.extend({

    initialize: function () {
      require(['components/app/index']);
    },

    routes: {
      'index'                 : 'index',
      'index/:id'             : 'index',
      'index/:id/:action'     : 'index',
      ''                      : 'index'
    },

    index: function (id, action) {
      require(['components/index/index'], function (module) {
        module.trigger('route:index', id, action);
      });
    }

  });

});
