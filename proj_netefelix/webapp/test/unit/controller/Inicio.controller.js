/*global QUnit*/

sap.ui.define([
	"proj_netefelix/controller/Inicio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Inicio Controller");

	QUnit.test("I should test the Inicio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
