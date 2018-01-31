(function(){

  "use strict";

  angular.module("ngWarnOnUnload", []).directive("ngWarnOnUnload", ["$window", function($window) {

    return {
      ngWarnOnUnload: "=",
      link: function(scope, elem, attrs) {

        if(!attrs.ngWarnOnUnload){
          throw Error("The ngWarnOnUnload attribute requires a value");
        }

        // @NOTE custom warning messages are no longer possible for security reasons
        // see https://stackoverflow.com/questions/276660/how-can-i-override-the-onbeforeunload-dialog-and-replace-it-with-my-own
        /// for this reason we simply return true if the user is to be warned (previously we returned the value of attribute ng-warn-on-unload-msg)

        $window.onbeforeunload = function(){
          var warn = scope.$eval(attrs.ngWarnOnUnload);
          if(warn){
            return true;
          }
        };

        scope.$on("$destroy", function() {
          $window.onbeforeunload = null;
        });

      }
    };
  }]);


}());
