$(function(){
	$(".index_my").on("click",function(){
		$(".index_shade").show();
		$(".shade_li,.index_shade").on("click",function(){
			$(".index_shade").hide();
		})
	})
	//判断如果文本不是“登录”，则取消点击事件
	$(".shade_li1").text('您好，'+JSON.parse(localStorage.getItem("user")).userName)
	
})