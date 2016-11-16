app.controller('LifeCtrl',['$scope','$http',function($scope,$http){
    $http.get("data/life.json").success(function(res){
    	$scope.left = res.left;
    }).error(function(msg){
    	$scope.msg = "失败"
    })

}])