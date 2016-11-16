app.controller('InSearchCtrl',['$scope','$location',function($scope,$location){
    $scope.RM = function($event){
    	angular.element(".history_div_p").remove();
    	 for(var i in localStorage){
    	     if(i.indexOf('item')!=-1){
    		   delete localStorage[i];
    	   }
         }
    }
    if(!localStorage.num){localStorage.num=0;}

    for(var i in localStorage){
    	if(i.indexOf('item')!=-1){
    		var str1=' <p class="history_div_p"><span class="history_div_p_span1"></span><span class="history_div_p_span2">'+
            localStorage.getItem(i)+'</span></p>';
            angular.element(".inSearch_history_seo_div")[0].innerHTML+=str1;
    	}
    }

    $scope.key = function($event,path){
    	var insear = angular.element($event.target)
    	if($event.keyCode==13){
    		var val=insear.val();
            var str=' <p class="history_div_p"><span class="history_div_p_span1"></span><span class="history_div_p_span2">'+val+'</span></p>';
            angular.element(".inSearch_history_seo_div")[0].innerHTML+=str;
            localStorage.setItem('item'+localStorage.num,val);
   		    localStorage.num=parseInt(localStorage.num)+1;
   		    $location.path(path);
   		    insear.val('');
    	}
    }
    // $(".history_div_p_span2").text(JSON.parse(localStorage.inse))
}])