/*global QUnit*/

sap.ui.define([
	"corona/corona/controller/coronaView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("coronaView1 Controller");

	QUnit.test("I should test the coronaView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});