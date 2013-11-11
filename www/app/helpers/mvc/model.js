//
// ## helpers.mvc.model
//

// Sets the Base Models default idAttribute to `id`.
// Other values would be `_id` if you are, for instance dealing
// with data that comes straight out of CouchDB

define([
  'humanModel'
],

function (HumanModel) {

  'use strict';

  var SuperModel = HumanModel.extend({
    idAttribute: 'id'
  });

  return SuperModel;

});
