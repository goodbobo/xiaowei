app.controller('CityCtrl',['$scope',function($scope){
    $scope.city = function($event){
    	var cityClick = angular.element($event.target);
    	localStorage.setItem("city",JSON.stringify(cityClick.html()));
    }
    var city = angular.element(".posi_city_span2")
    city.text(JSON.parse(localStorage.getItem("city")))
    if(city.text()==""){
    	city.text("北京")
    }else{
    	city.text(JSON.parse(localStorage.getItem("city")))
    }
}])