app.controller('OwnerDecorationCtrl',['$scope','$timeout',function($scope,$timeout){
     // $scope.name = 'xiaowei';
     $timeout(function(){
     	//图片轮播-首页第二部分
		var mySwiper = new Swiper('.decorationLunboMain .swiper-container', {
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
     
}])