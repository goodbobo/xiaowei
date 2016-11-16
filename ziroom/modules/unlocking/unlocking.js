app.controller('unlockingCtrl',['$scope','$http',function($scope,$http){

     $http.get('data/ziruRepair.json').success(function(res){
        $scope.unlockingData = res.data;
    });


    $(".ziruR_main_left_comLi").eq(2).on("click",function(){
    	$http.get('data/waterpipe.json').success(function(res){
    	$scope.unlockingData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(2).css("visibility","visible")
    	});
	 });
    $(".ziruR_main_left_comLi").eq(1).on("click",function(){
    	$http.get('data/ziruRepair.json').success(function(res){
    	$scope.unlockingData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(1).css("visibility","visible")
    	});
	});
    $(".ziruR_main_left_comLi").eq(0).on("click",function(){
    	$http.get('data/lamp.json').success(function(res){
    	$scope.unlockingData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(0).css("visibility","visible")
        });
    });
    $(".ziruR_main_left_comLi").eq(3).on("click",function(){
    	$http.get('data/moreRepair.json').success(function(res){
    	$scope.unlockingData = res.data;
    	$('.ziruR_left_comLi_point').css("visibility","hidden");
    	$('.ziruR_left_comLi_point').eq(3).css("visibility","visible")
       });
    });
    $http.get('data/ziruRepair.json').success(function(res){
    	$scope.ziruRepairData = res.data;
    })
}])