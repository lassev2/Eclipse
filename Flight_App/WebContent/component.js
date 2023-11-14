jQuery.sap.declare("flight_app_201.Component");
sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent){
	"use strict";
	
	return UIComponent.extend("flight_app_201.Component",{
		
		
		metadata:{
			manifest:"json"
		}, 
		init: function (){
			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		},
		
		createContent: function() {
			var oViewData = {
					component : this
			};
			return satp-ui.view({
				viewName: "flight_app_201.view.App",
				type: sap.ui.core.mvc.ViewType.XML,
				viewData: oViewData
			});
		}
	})
});
