app.controller('JoinRentCtrl',['$scope','$http',function($scope,$http){
  // 获取合租数据
    $http.get('data/hezu.json').success(function(res){
   		$scope.abc = res.data;
   		$scope.arr = res
   		// console.log(res.data)
    }).error(function(msg){
    	$scope.msg = '失败'
    })
    //实现点击当期信息跳转到详情页
    $scope.click_a = function(){
      // console.log(this);
    	// console.log(this.obj);
      // 将本页数据缓存到details
    	localStorage.setItem('details',JSON.stringify(this.obj))
    }
   $scope.name='sell_price';

   $scope.sort1=function(){
     $scope.name='room_name';
   }
   $scope.sort2=function(){
    $scope.name="sell_price"
   }

}])