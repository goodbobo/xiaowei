app.controller('HomeCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
	// $scope.name = '自如首页';
	//自如显示隐藏
	// $scope.toggle = function() {
	// 	$scope.myVar = !$scope.myVar;
	// };
	//实现点击变换颜色
	// $scope.toggle = function(){
	// 	$scope.z = this.z
	// }
	//图片轮播部分JSON数据
	$http.get('data/home_lb1.json').success(function(res) {
		$scope.data = res.data
	 }).error(function(msg) {
		$scope.msg = '失败'
	})
	$http.get('data/home_lb2.json').success(function(res) {
		$scope.data1 = res.data1
	 }).error(function(msg) {
		$scope.msg = '失败'
	})
	$http.get('data/home_lb3.json').success(function(res) {
		$scope.data2 = res.data2
	 }).error(function(msg) {
		$scope.msg = '失败'
	})
	$http.get('data/home_lb4.json').success(function(res) {
		$scope.data3 = res.data3
	 }).error(function(msg) {
		$scope.msg = '失败'
	})
	$timeout(function() { 
	  //图片轮播-首页第一部分
		var mySwiper1 = new Swiper('.swipe_all .swiper-container', {
			// direction: 'vertical',图片纵向
			//图片横向
			direction: 'horizontal',
			//图片自动播放
			autoplay: 1000,
			onAutoplayStop: function(swiper) {
				swiper.startAutoplay();
			},
			//循环
			loop: true,
			//实现点击按钮切换图片
			paginationClickable: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
		//图片轮播-首页第二部分
		var mySwiper2 = new Swiper('.firend_img .swiper-container', {
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
		//图片轮播-首页第三部分
		var mySwiper3 = new Swiper('.ziroom_firend_list .swiper-container', {
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
	//把选择的地理位置放到头部
	//jQuery实现方法
	//$(".index_header_span").text(JSON.parse(localStorage.getItem("city")));
	//angular实现方法
	angular.element(".index_header_span").text(JSON.parse(localStorage.getItem("city")));
	//判断头部标签的文本是否为空，为空则显示当前地址，否则则显示本地存储的内容
	if(angular.element(".index_header_span").text()==""){
    	angular.element(".index_header_span").text("北京");
    }else{
    	angular.element(".index_header_span").text(JSON.parse(localStorage.getItem("city")))
    }
}])

