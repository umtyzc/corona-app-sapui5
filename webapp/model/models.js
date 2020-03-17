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
		createAPIModel: function () {
			var oModel = new JSONModel();
			oModel.setData({
				cols: [{
					name: "country"
				}, {
					name: "cases"
				}, {
					name: "todayCases"
				}, {
					name: "deaths"
				}, {
					name: "todayDeaths"
				}, {
					name: "recovered"
				}, {
					name: "critical"

				}],

				items: []
			});
			return oModel;
		}

	};
});