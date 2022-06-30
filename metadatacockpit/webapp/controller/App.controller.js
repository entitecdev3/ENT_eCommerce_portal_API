sap.ui.define(
    [
        "./BaseController"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ent.metadata.pockpt.metadatacockpit.controller.controller.App", {
        onInit() {
          $(document).ajaxStart(function(x,y,z){
            sap.ui.core.BusyIndicator.show();
          });
          $(document).ajaxStop(function(x,y,z){
            sap.ui.core.BusyIndicator.hide();
          });
        }
      });
    }
  );
  