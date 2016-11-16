app.controller('ApartmentDetailCtrl',['$scope','$timeout','$http',function($scope,$timeout,$http){
	 $scope.myVar = true;
	 $scope.show1 = function() {
        $scope.myVar = true;
    };
	$scope.show2 = function() {
        $scope.myVar = false;
    };
     $timeout(function() {
			//图片轮播
			var mySwiper1 = new Swiper('.swiper-container', {
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
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				scrollbar: '.swiper-scrollbar',
			})

		})
}])