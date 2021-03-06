sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("ent.metadata.pockpt.metadatacockpit.controller.Main", {
            onInit: function () {
                this.getCompanies();
            },
            formatStatus:function(oStatus){
                if(oStatus){
                    if(oStatus==="Updated"){
                        return "sap-icon://status-completed";
                    }
                    else{
                        return "sap-icon://alert";
                    }
                }
            },
            formatColor:function(oStatus){
                if(oStatus){
                    if(oStatus==="Updated"){
                        return "Positive";
                    }
                    else{
                        return "Critical";
                    }
                }
            },
            onUpdateMetaData:function(oEvent){
                debugger;
                var oPaths=oEvent.getSource().getParent().getParent().getSelectedContextPaths();
                var oSchemas=[];
                for (let index = 0; index < oPaths.length; index++) {
                    const element = oPaths[index];
                    var oData=this.getView().getModel("local").getProperty(element);
                    oSchemas.push(oData.companyName);
                }
                if(oSchemas.length>0){
                    var that=this;
                    var oPayload=JSON.stringify(oSchemas);
			        this.middleWare.callMiddleWare("/UpdateMetadata?Schema="+oPayload, "GET", {})
					.then(function (data, status, xhr) {
						MessageBox.information(data);
                        that.getView().byId("idCompanyTable").removeSelections();
                        that.getCompanies();
					})
					.catch(function (jqXhr, textStatus, errorMessage) {
						that.middleWare.errorHandler(jqXhr,that);
					});
                }
            },
        });
    });
