(function(){
    function mineController($scope, factoryData){
        $scope.name = "user";
        $scope.data = factoryData();
        $scope.click = function(){
            for(var i=0;i<$scope.data.length;i++){
                var someItem = $scope.data[i];
                if($scope.name !== someItem){
                } else {
                    alert("Эрорчик")
                }
            }
            $scope.data.push($scope.name);
        };
        $scope.remove = function(item){
            for(var i=0;i<$scope.data.length;i++){
                var someItem = $scope.data[i];
                if(someItem == item){
                    $scope.data.splice($scope.data.indexOf(someItem),1);
                }
            }
        }
    }
    angular.module("app").controller("myFirstController", ["$scope","langFactory", mineController]);
})();
