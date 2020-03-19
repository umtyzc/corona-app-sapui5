sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("corona.corona.controller.coronaView1", {
		onInit: function () {
			this._loadCorona();
		},

		_mapResults: function (results) {
			var oModel = this.getView().getModel();
			var coronaResults = [];

			for (var i = 0; i < results.length; i++) {
				var oTemp = results[i];
				// var totalCases += oTemp.cases;
				coronaResults.push({
					country: oTemp.country,
					cases: oTemp.cases,
					todayCases: oTemp.todayCases,
					deaths: oTemp.deaths,
					todayDeaths: oTemp.todayDeaths,
					recovered: oTemp.recovered,
					critical: oTemp.critical
				});
			}

			oModel.setProperty("/items", coronaResults);
		},
		_loadCorona: function () {
			var oView = this.getView();

			var sUrl = "/corona";
			oView.setBusy(true);

			var self = this;
			$.get(sUrl)
				.done(function (results) {
					oView.setBusy(false);
					self._mapResults(results);
				})
				.fail(function (err) {
					oView.setBusy(false);
					if (err !== undefined) {
						var oErrorResponse = $.parseJSON(err.responseText);
						sap.m.MessageToast.show(oErrorResponse.message, {
							duration: 6000
						});
					} else {
						sap.m.MessageToast.show("Unknown error!");
					}
				});
		}

	});
});