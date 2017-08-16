sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History"
	], function (Controller, History) {
	"use strict";

	return Controller.extend("sapui5.demo.routing.controller.customer", {
	    onInit : function () {
	        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("toCustomer").attachPatternMatched(this._onCustomerMatched, this);
		},
		
		_onCustomerMatched : function (oEvent) {
			var sPath = "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')";
			var oView = this.getView();
			oView.bindElement(sPath);
			/*
			oView.bindElement({
				path: sPath,
				model: "Northwind" });
			*/
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