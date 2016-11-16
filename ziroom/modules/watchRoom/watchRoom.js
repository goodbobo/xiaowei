app.controller('WatchRoomCtrl',['$scope',function($scope){
    $scope.flag = true;
    $scope.flagTwo = true;

    $scope.applyFor=function(){
    	$scope.flag =!$scope.flag;
    }
    $scope.hback=function(){
    	$scope.flagTwo =!$scope.flagTwo;
    }
}])