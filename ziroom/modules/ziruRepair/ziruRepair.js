app.controller('ziruRepairCtrl',['$scope','$http',function($scope,$http){
	// $scope.mychange1 = function(){
	// 	$scope.classA = this.classA;
	// }
 //  	$scope.mychange2 = function(){
	// 	$scope.classB = this.classB;
	// }
	// $scope.mychange3 = function(){
	// 	$scope.classC = this.classC;
	// }
	// $scope.mychange4 = function(){
	// 	$scope.classD = this.classD;
	// }
	$(".ziruR_main_left_comLi").eq(2).on("click",function(){
    	$http.get('data/waterpipe.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(2).css("visibility","visible")
    	});
	 });
    $(".ziruR_main_left_comLi").eq(1).on("click",function(){
    	$http.get('data/ziruRepair.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(1).css("visibility","visible")
    	});
	});
    $(".ziruR_main_left_comLi").eq(0).on("click",function(){
    	$http.get('data/lamp.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(0).css("visibility","visible")
        });
    });
    $(".ziruR_main_left_comLi").eq(3).on("click",function(){
    	$http.get('data/moreRepair.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(3).css("visibility","visible")
       });
    });
    $http.get('data/ziruRepair.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    })
}])