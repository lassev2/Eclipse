sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/Button",
   "sap/m/Dialog",
   "sap/m/VBox",
   "sap/m/Input",
   "sap/m/Bar"
], function (Controller, Button, Dialog, VBox, Input, Bar) {
   "use strict";
   return Controller.extend("flight_app_201.controller.main", {
      getRouter: function () {
         return sap.ui.core.UIComponent.getRouterFor(this);
      },
      onInit: function () {
         var sPath = $.sap.getModulePath("flight_app_201", "/model/applicationProperties.json");
         var that = this;

         var oSettingsModel = new sap.ui.model.json.JSONModel();
         oSettingsModel.loadData(sPath);
         oSettingsModel.attachRequestCompleted(function () {
            that.getView().setModel(this, "Settings");
            var serviceURL = that.getView().getModel("Settings").getProperty("/oDataUrl");
            var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
            that.getView().setModel(oModel);
         });
      },

      createPopup: function () {
         // Insert functionality here
         var cancelButton = new sap.m.Button({
            text: "cancel",
            type: sap.m.ButtonType.Reject,
            press: function () {
               sap.ui.getCore().byId("Popup").destroy();
               
            
            }
       
         });
         var saveButton = new sap.m.Button({
        	 text : "save", 
        	 type : sap.m.ButtonType.Accept,
        	 press : function (){
        		 var serviceURL = that.getView().getModel("Settings").getProperty("/oDataURL");
        		 var oModel = new sap.uii.model.odata.v2.ODataModel (ServiceURL);
        		 var oNewFlight = {
        				 Carrid : sap.ui.getCore().byId("carrid").getValue(),
        				 Connid : sap.ui.getCore().byId("connid").getValue(),
        				 Fldate : sap.ui.getCore().byId("fldate").getDateValue(),
        				 Price : sap.ui.getCore().byId("price").getValue(),
        				 Currency : sap.ui.getCore().byId("currency").getValue(),
        				 Planetyoe : sap.ui.getCore().byId("planetype").getValue(),
        				 Seatsmax : parseInt(sap.ui.getCore().byId("seatsmax").getValue()),
        				 Seatsocc : parseInt(sap.ui.getCore().byId("seatsocc").getValue()),
        				 Paymentsum : sap.ui.getCore().byId("paymentsum").getValue(),
        		 };
        		 oModel.creat('/FlightSet',oNewFlight, {
        			 success: function(oData, oResponse){
        				 sap.m.MessageToast.show("Flight successfully created!");
        				 
        				 sap.ui.getCore().byId("Popup").destroy();
        			 },
        			 error : function(oError) {
        				 sap.m.MessageToast.show("Error during flight creation")
        			 }
        		 })
        	 }
         })
         	var oDialog = new sap.m.Dialog("Popup",{
         		title : "Create flight",
         		modal : true,
         		contentWitdh : "1em",
         		buttons : [saveButton, cancelButton],
         		content : [new sap.m.Label({text : "Airline ID"}), new sap.m.Input({ maxLenght : 20, id : "carrid", placeholder : "e.g.LH"}), 
         			new sap.m.Label({ text : "Connection ID"}), new sap.m.Input({ maxLengt : 20, id : "connid", placeholder : "e.g. 11"}), 
         			new sap.m.Label({ text : "date"}), new sap.m.DateTimeInput({ id : "fldate", placeholder : "e.g. Jul 15, 2016"}), 
         			new sap.m.Label({ text : "Price"}), new sap.m.Input({ maxLenght : 20, id: "price", placeholder : "e.g. 111.11"}), 
         			new sap.m.Label({ text : "Currency" }), new sap.m.Input({ maxLenght: 20, id : "currency", placeholder : "USD"}),
         			
         			new sap.m.Label({ text : "Plane Type"}), new sap.m.Input ({ maxLenght : 20, id : "planetype", placeholder : "e.g. 747-300"}),
         			new sap.m.Label({ text : "Max. Seats"}), new sap.m.Input({maxLenght : 20, id: "seatsmax", placeholder : "e.g. 300"}),
         			new sap.m.Label({ text : "Booked Seats"}), new sap.m.Input({ maxLenght : 20, id : "seatsocc", placeholder : "e.g.250"}),
         			new sap.m.Label({ text : "Payment Sum"}), new sap.m.Input({ maxLenght : 20, id : "paymentsum", placeholder: "e.g. 1111.11"})
         		
         			
         			]
         	});
         sap.ui.getCore().byId("Popup").open();

         // Add more code to create the popup, input fields, and other controls

         var oDialog = new Dialog({
            title: "Your Popup Title",
            content: [
               // Add your input fields and other controls here
            ],
            buttons: [
               cancelButton
               // Add more buttons if needed
            ],
            afterClose: function () {
               oDialog.destroy();
            }
         });

         oDialog.open();
      }
   });
});

		
sap.ui.controller("view.App_view",{
	
	
	

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf view.App_view
	*/
//		onInit: function() {
	//
//		},

	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf view.App_view
	*/
//		onBeforeRendering: function() {
	//
//		},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf view.App_view
	*/
//		onAfterRendering: function() {
	//
//		},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf view.App_view
	*/
//		onExit: function() {
	//
//		}

	});