sap.ui.define(["sap/ui/core/mvc/Controller"],
	function(Controller){
		return Controller.extend("bunny.controller.Main",{
			//by default method - hook method
			//its like constructor of a class which gets called automatically
			//when the object of this controller is created in memory
			//we can use it to initialize our variables, some initial code
		    kuldeep:"",
// 			onInit: function(){
// 				alert("Roger!!, the controller object was created");
// 				// this.kuldeep=343;
// 			},
			chanze: function(oEvent){
				// alert("this is my first controller reusable code");
				var sVal = sap.ui.getCore().byId("idSpidy").getValue();
				alert(sVal + " " + this.kuldeep);
				// submit is the event 
			},
			
			enableBtn: function(){
			    //step1 get the button object
			    var oBtn = sap.ui.core.getCore().byId("idKd");
			    oBtn.attachPress(this.chanze);
			 //   this is built-in object which points the current class-controller
			 //   step2: subscribe press event
			}
// 			return chanze(oInp);
		});
	}
);