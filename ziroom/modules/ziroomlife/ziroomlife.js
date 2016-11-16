app.controller('ZiroomlifeCtrl',['$scope','$timeout','$http',function($scope,$timeout,$http){
    $timeout(function(){
    	 //图片轮播-首页第一部分
		var mySwiper1 = new Swiper('.ziroomLife_header .swiper-container', {
			// direction: 'vertical',图片纵向
			//图片横向
			direction: 'horizontal',
			//循环
			loop: true,
			//实现点击按钮切换图片
			paginationClickable: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
    })

    $http.get('data/ziroomLife1.json').success(function(res){
   		$scope.appmsg_list = res.appmsg_list;
   		// $scope.arr = res
   		// console.log(res.data)
    }).error(function(msg){
    	$scope.msg = '失败'
    })
    $(".ziroomLife_nav li").eq(0).on("click",function(){
    	$http.get('data/ziroomLife1.json').success(function(res){
	   		$scope.appmsg_list = res.appmsg_list;
	   		// $scope.arr = res
	   		// console.log(res.data)
	    }).error(function(msg){
	    	$scope.msg = '失败'
	    })
    })
    $(".ziroomLife_nav li").eq(1).on("click",function(){
    	$http.get('data/ziroomLife2.json').success(function(res){
	   		$scope.appmsg_list = res.appmsg_list;
	   		// $scope.arr = res
	   		// console.log(res.data)
	    }).error(function(msg){
	    	$scope.msg = '失败'
	    })
    })
    $(".ziroomLife_nav li").eq(2).on("click",function(){
    	$http.get('data/ziroomLife5.json').success(function(res){
	   		$scope.appmsg_list = res.appmsg_list;
	   		// $scope.arr = res
	   		// console.log(res.data)
	    }).error(function(msg){
	    	$scope.msg = '失败'
	    })
    })
    $(".ziroomLife_nav li").eq(3).on("click",function(){
    	$http.get('data/ziroomLife6.json').success(function(res){
	   		$scope.appmsg_list = res.appmsg_list;
	   		// $scope.arr = res
	   		// console.log(res.data)
	    }).error(function(msg){
	    	$scope.msg = '失败'
	    })
    })
}])