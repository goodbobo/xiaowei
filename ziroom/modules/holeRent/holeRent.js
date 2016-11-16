app.controller('HoleRentCtrl',['$scope','$http',function($scope,$http){
  // 获取整租数据
    $http.get('data/zhengzu.json').success(function(res){
   		$scope.data = res.data;
   		$scope.arr = res
   	}).error(function(msg){
    	$scope.msg = '失败'
    })
    //实现点击当期信息跳转到详情页
    $scope.click_a = function(){
    	// console.log(this.obj);
      // 将本页数据缓存到details
    	localStorage.setItem('details',JSON.stringify(this.obj))
    }
    $scope.name="room_name"
    $scope.hole1=function(){
      $scope.name="room_name"
    }
    $scope.hole2=function(){
      $scope.name="sell_price"
    }
 }])
