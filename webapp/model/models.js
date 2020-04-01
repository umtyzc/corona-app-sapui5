sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		// createSocialModel: function () {
		// 	var oModel = new JSONModel("./model/social.json");
		// 	oModel.setDefaultBindingMode("OneWay");
		// 	oModel.setData({
		// 		items: []
		// 	});
		// 	return oModel;
		// },
		createAPIModel: function () {
			var oModel = new JSONModel();
			oModel.setData({
				cols: [{
					name: "Flag"
				}, {
					name: "Country"
				}, {
					name: "Cases"
				}, {
					name: "Today Cases"
				}, {
					name: "Deaths"
				}, {
					name: "Today Deaths"
				}, {
					name: "Recovered"
				}, {
					name: "Critical"
				}, {
					name: "CasesPer1Million"
				}, {
					name: "DeathsPer1Million"
				}],
				items: []
			});
			return oModel;
		}
	};
});