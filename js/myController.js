(function(){
    function mineController($scope, factoryData){
        $scope.name = "user";
        $scope.data = factoryData();
        $scope.click = function(){
            if($scope.data.indexOf($scope.name)<0){
                $scope.data.push($scope.name);
            }
        };
        $scope.remove = function(item){
            if($scope.data.indexOf(item)>-1){
                $scope.data.splice($scope.data.indexOf(item),1);
            }
        };
    }
    angular.module("app").controller("myFirstController", ["$scope","langFactory", mineController]);
})();
