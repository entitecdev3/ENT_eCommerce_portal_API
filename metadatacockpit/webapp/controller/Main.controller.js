sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
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
            }
        });
    });
