app.controller('DownloadCtrl',['$scope','$timeout','$location',function($scope,$timeout,$location){
     $scope.name = '下载App';
     $timeout(function(){
		$(".demo1").hide();
     	$(".demo2").show();
     	var mySwiper = new Swiper ('.swiper-container', {
			direction: 'vertical',
			// direction: 'horizontal',
			loop: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
		})
     },5000)
}])