//
// tests/app/models/config
//

define([
  'models/config',
  'fixtures/models/config'
],

function (Config, Fixture) {

  'use strict';

  describe('Config Model', function () {

    beforeEach(function () {
      this.model = new Config();
      this.fixure = new Fixture().toJSON();
    });

    describe('Initialisation', function () {

      it('should be an instance of Config', function () {
        expect(this.model).to.be.an(Config);
      });


      describe('app object', function () {

        beforeEach(function () {
          this.cfgObj = this.model.toJSON();
        });

        afterEach(function () {
          delete this.cfgObj;
        });

        it('should expose n numer of properties', function () {
          expect(_.size(this.cfgObj)).to.eql(3);
        });

        it('should expose a \'debug\' property', function () {
          expect(this.cfgObj).to.have.property('debug');
        });

      });


      describe('ajax object', function () {

        beforeEach(function () {
          this.ajaxCfgObj = this.model.toJSON().ajax;
        });

        afterEach(function () {
          delete this.ajaxCfgObj;
        });

        it('should expose n number of properties', function () {
          expect(_.size(this.ajaxCfgObj)).to.eql(5);
        });

        it('should have a \'async\' property', function () {
          expect(this.ajaxCfgObj).to.have.property('async');
        });

        it('should have its \'ajax.async\' property set', function () {
          expect(this.ajaxCfgObj.async).to.eql(true);
        });

        it('should have a \'cache\' property', function () {
          expect(this.ajaxCfgObj).to.have.property('async');
        });

        it('should have its \'ajax.cache\' property set', function () {
          expect(this.ajaxCfgObj.cache).to.eql(true);
        });

        it('should have a \'contentType\' property', function () {
          expect(this.ajaxCfgObj).to.have.property('async');
        });

        it('should have its \'ajax.contentType\' property set', function () {
          expect(this.ajaxCfgObj.contentType).to.eql('application/json; charset=utf-8');
        });

        it('should have a \'dataType\' property', function () {
          expect(this.ajaxCfgObj).to.have.property('dataType');
        });

        it('should have its \'ajax.dataType\' property set', function () {
          expect(this.ajaxCfgObj.dataType).to.eql('json');
        });

        it('should have a \'timeout\' property', function () {
          expect(this.ajaxCfgObj).to.have.property('timeout');
        });

        it('should have its \'ajax.timeout\' property set', function () {
          expect(this.ajaxCfgObj.timeout).to.eql(10000);
        });

      });

      describe('app object', function () {

        beforeEach(function () {
          this.appCfgObj = this.model.toJSON().app;
        });

        afterEach(function () {
          delete this.appCfgObj;
        });

        it('should expose n number of properties', function () {
          expect(_.size(this.appCfgObj)).to.eql(2);
        });

        it('should have a \'components\' property', function () {
          expect(this.appCfgObj).to.have.property('components');
        });

        it('should have its \'app.components\' property set', function () {
          expect(this.appCfgObj.components).to.eql(this.fixure.app.components);
        });

        it('should have a \'name\' property', function () {
          expect(this.appCfgObj).to.have.property('name');
        });

        it('should have its \'app.name\' property set', function () {
          expect(this.appCfgObj.name).to.eql('app');
        });

      });

    });

  });

});

