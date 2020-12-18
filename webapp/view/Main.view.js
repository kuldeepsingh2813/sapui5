sap.ui.jsview("bunny.view.Main",{
	getControllerName: function(){
		return "bunny.controller.Main";
	},
	createContent: function(oController){
		var oInp = new sap.m.Input("idSpidy",{
		    submit: [oController.enableBtn,oController]
		});
		  //  text: oController.chanze
		  //  press: oController.ch);
		var oBntn = new sap.m.Button("idKd",{
			text: "Click Me"
// 			press: [oController.chanze, oController]
		});
		return [oInp, oBntn];
	}
});