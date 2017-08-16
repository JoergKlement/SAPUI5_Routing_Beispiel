sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.routing.controller.start", {
		 onCustomerSelect : function(oEvent) {
		            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		            var oCustomerItem = oEvent.getSource();
		            oRouter.navTo("toCustomer", {
						CustomerID: oCustomerItem.getBindingContext().getProperty("CustomerID")
					});
		},
		
		onNavPress : function(){ 
		    var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				window.history.go(-1);
			} else {
				// No Navigation history found, navigate via Route toStart
				this._oRouter.navTo("toStart");
			}
		}
	});
});