(function(){
    "use strict";
    angular.module("app").factory("langFactory", function(){
        return function() {
            return ["AS3", "JS", "C+"]
        }
    })
})();
