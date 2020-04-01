sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"corona/corona/model/models",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("corona.corona.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set models
			this.setModel(models.createDeviceModel(), "device");
			
			this.setModel(models.createAPIModel()); //report raw data covid-19
			
			// this.setModel(models.createSocialModel()); // for covid-19 related best twitter accounts
		
			
		}
	});
});