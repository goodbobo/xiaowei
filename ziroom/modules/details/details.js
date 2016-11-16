app.controller('DetailsCtrl',['$scope',function($scope){
   // 获取存放在localStorage.details的数据
   var rooms = JSON.parse(localStorage.details)
   // console.log(goods);
   // $scope.list_img = goods.
   // 将数据显示在详情页上
   $scope.title = rooms.title
   $scope.list_img = rooms.list_img
   $scope.district_name = rooms.district_name
   $scope.bizcircle_name = rooms.bizcircle_name
   $scope.subway_line_code_first = rooms.subway_line_code_first
   $scope.subway_station_code_first = rooms.subway_station_code_first
   $scope.walking_distance_dt_first = rooms.walking_distance_dt_first
   $scope.sell_price = rooms.sell_price
   $scope.usage_area = rooms.usage_area
}])