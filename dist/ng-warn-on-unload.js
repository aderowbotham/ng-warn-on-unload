angular.module('adeweb.utils', []).directive('ngWarnOnUnload', ["$window", function($window) {

  return {
    ngWarnOnUnload: '=',
    link: function(scope, elem, attrs) {

      if(!attrs.ngWarnOnUnload){
        throw Error("The ngWarnOnUnload attribute requires a value");
      }

      var warnMessage = attrs.ngWarnOnUnloadMsg ? attrs.ngWarnOnUnloadMsg : "You have unsaved changes.";

      $window.onbeforeunload = function(){
        var warn = scope.$eval(attrs.ngWarnOnUnload);
        if(warn){
          return warnMessage;
        }
      }

    }
  };
}]);
