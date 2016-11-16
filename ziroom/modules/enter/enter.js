app.controller('EnterCtrl',['$scope',function($scope){
    function uese(){
        //怎么在angular中获得当前dom元素
        //聚焦的时候当前元素下的动画开始，并留下来,当再次聚焦时去掉失焦的样式   
        angular.element(".enter_input_1").next().next().addClass("enter_line").addClass("enter_line_1").removeClass("enter_none");
    }
    function uese1(){
        //当失焦的时候增加线条去掉样式,移除线条所有样式（包括动画样式）
        angular.element(".enter_input_1").next().next().addClass("enter_none").removeClass("enter_line_1").removeClass("enter_line")
    }
    $scope.uese = uese;
    $scope.uese1 = uese1;
    $scope.password = function(){
        //怎么在angular中获得当前dom元素
        //聚焦的时候当前元素下的动画开始，并留下来
        angular.element(".enter_input_2").next().next().addClass("enter_line").addClass("enter_line_1").removeClass("enter_none")
    }
    $scope.password1 = function(){
        //当失焦的时候增加线条去掉样式
        angular.element(".enter_input_2").next().next().addClass("enter_none").removeClass("enter_line_1").removeClass("enter_line")
    }
    //点击眼睛的时候输入框属性变成text
    $scope.eyes = function(){
        //判断眼睛是否打开
        var eyes = angular.element(".enter_eyes")
        if(eyes.attr("class")=="enter_eyes"){
            //如果眼睛打开则密码显示
            angular.element(".enter_input_2").attr("type","text");
        }else{
            //如果眼睛隐藏则密码隐藏
            angular.element(".enter_input_2").attr("type","password");
        }
        //密码切换开关
        eyes.toggleClass("enter_eyes1")
    }
    //判断输入框
    $(".enter_log_yz_c").on("click",function(){
        if($(".enter_input_1").val()!="" && $(".enter_input_2").val()!=""){
            location.href = "index.html";
        }
        // 声明变量缓存数据
        var obj = {
            userName:$(".enter_input_1").val(),
        }
        //获取保存
        localStorage.setItem("user",JSON.stringify(obj))
    })
}])