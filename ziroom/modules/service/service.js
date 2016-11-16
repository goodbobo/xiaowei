app.controller('ServiceCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
     $scope.name = 'chai';

     $http.get('data/serviceLunBo.json').success(function(res){
     	$scope.lunbodata = res.data;
     }).error(function(msg) {
     	$scope.msg = '失败'
     });
     $timeout(function() {
     	var mySwiper = new Swiper('.swiper-container', {
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
     });
}])

// $scope.result = [
// angular.fromJson(data.resultList[0]),
// angular.fromJson(data.resultList[1])
// ];
// alert($scope.result[0].codeName);
