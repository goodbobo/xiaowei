var app = angular.module('ziroom',['ui.router','me-lazyload','angularCSS']);
app.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('home');

    $stateProvider
        //首页 
        .state('home',{
            url:'/home',
            templateUrl:'./modules/home/home.html',
            controller:'HomeCtrl',
            css:['./modules/home/home.css','./css/swiper.min.css']
        })
        // 登录
        .state('enter',{
            url:'/enter',
            templateUrl:'./modules/enter/enter.html',
            controller:'EnterCtrl',
            css:'./modules/enter/enter.css'
        })
        //注册
        .state('sgin',{
            url:'/sgin',
            templateUrl:'./modules/sgin/sgin.html',
            controller:'SginCtrl',
            css:'./modules/sgin/sgin.css'
        })
        // 自如找房
        .state('order',{
            url:'/order',
            templateUrl:'./modules/order/order.html',
            controller:'OrderCtrl',
            css:'./modules/order/order.css'
        })
        // 城市选择
        .state('city',{
            url:'/city',
            templateUrl:'./modules/city/city.html',
            controller:'CityCtrl',
            css:'./modules/city/city.css'
        })
        // 输入搜索
        .state('inSearch',{
            url:'/inSearch',
            templateUrl:'./modules/inSearch/inSearch.html',
            controller:'InSearchCtrl',
            css:'./modules/inSearch/inSearch.css'
        })
        // 合租
        .state('joinRent',{
            url:'/joinRent',
            templateUrl:'./modules/joinRent/joinRent.html',
            controller:'JoinRentCtrl',
            css:'./modules/joinRent/joinRent.css'
        })
        // 整租
        .state('holeRent',{
            url:'/holeRent',
            templateUrl:'./modules/holeRent/holeRent.html',
            controller:'HoleRentCtrl',
            css:'./modules/holeRent/holeRent.css'
        })
        // 月租
        .state('mouthRent',{
            url:'/mouthRent',
            templateUrl:'./modules/mouthRent/mouthRent.html',
            controller:'MouthRentCtrl',
            css:'./modules/mouthRent/mouthRent.css'
        })
        // 自如寓
        .state('apartment',{
            url:'/apartment',
            templateUrl:'./modules/apartment/apartment.html',
            controller:'ApartmentCtrl',
            css:['./modules/apartment/apartment.css','./css/swiper.min.css']
        })
        // 自如寓详情
        .state('apartmentDetail',{
            url:'/apartmentDetail',
            templateUrl:'./modules/apartmentDetail/apartmentDetail.html',
            controller:'ApartmentDetailCtrl',
            css:['./modules/apartmentDetail/apartmentDetail.css','./css/swiper.min.css']
        })
        // 自如寓详情-看房入驻
        .state('watchRoom',{
            url:'/watchRoom',
            templateUrl:'./modules/watchRoom/watchRoom.html',
            controller:'WatchRoomCtrl',
            css:'./modules/watchRoom/watchRoom.css'
        })
        // 自如寓详情-房源详情
        .state('checkIn',{
            url:'/checkIn',
            templateUrl:'./modules/checkIn/checkIn.html',
            controller:'CheckInCtrl',
            css:['./modules/checkIn/checkIn.css','./css/swiper.min.css']
        })
        // 业主
        .state('owner',{
            url:'/owner',
            templateUrl:'./modules/owner/owner.html',
            controller:'OwnerCtrl',
            css:'./modules/owner/owner.css'
        })
        // 业主-了解自如
        .state('understandZiroom',{
            url:'/understandZiroom',
            templateUrl:'./modules/understandZiroom/understandZiroom.html',
            controller:'UnderstandZiroomCtrl',
            css:'./modules/understandZiroom/understandZiroom.css'
        })
        // 业主-出租估价
        .state('priceZiroom',{
            url:'/priceZiroom',
            templateUrl:'./modules/priceZiroom/priceZiroom.html',
            controller:'PriceZiroomCtrl',
            css:'./modules/priceZiroom/priceZiroom.css'
        })
        // 业主-配套装修
        .state('ownerDecoration',{
            url:'/ownerDecoration',
            templateUrl:'./modules/ownerDecoration/ownerDecoration.html',
            controller:'OwnerDecorationCtrl',
            css:['./modules/ownerDecoration/ownerDecoration.css','./css/swiper.min.css']
        })
        // 业主-租期服务
        .state('timeService',{
            url:'/timeService',
            templateUrl:'./modules/timeService/timeService.html',
            controller:'TimeServiceCtrl',
            css:'./modules/timeService/timeService.css'
        })
        // 业主-安心租客
        .state('Trust',{
            url:'/Trust',
            templateUrl:'./modules/Trust/Trust.html',
            controller:'TrustCtrl',
            css:'./modules/Trust/Trust.css'
        })
        // 业主-自如生活
        .state('ziroomlife',{
            url:'/ziroomlife',
            templateUrl:'./modules/ziroomlife/ziroomlife.html',
            controller:'ZiroomlifeCtrl',
            css:['./modules/ziroomlife/ziroomlife.css','./css/swiper.min.css']
        })
        
        // 服务
        .state('service',{
            url:'/service',
            templateUrl:'./modules/service/service.html',
            controller:'ServiceCtrl',
            css:['./modules/service/service.css','./css/swiper.min.css']
        })
        // 服务下面的内容
        // 日常保洁
        .state('dailyClear',{
            url:'/dailyClear',
            templateUrl:'./modules/dailyClear/dailyClear.html',
            controller:'dailyClearCtrl',
            css:'./modules/dailyClear/dailyClear.css'
        })
         // 自如小搬
        .state('smallMove',{
            url:'/smallMove',
            templateUrl:'./modules/smallMove/smallMove.html',
            controller:'smallMoveCtrl',
            css:'./modules/smallMove/smallMove.css'
        })
         // 自如家修
        .state('ziruRepair',{
            url:'/ziruRepair',
            templateUrl:'./modules/ziruRepair/ziruRepair.html',
            controller:'ziruRepairCtrl',
            css:'./modules/ziruRepair/ziruRepair.css'
        })
         // 客服咨询
        .state('consult',{
            url:'/consult',
            templateUrl:'./modules/consult/consult.html',
            controller:'consultCtrl',
            css:'./modules/consult/consult.css'
        })
         // 深度清洁
        .state('deepClear',{
            url:'/deepClear',
            templateUrl:'./modules/deepClear/deepClear.html',
            controller:'deepClearCtrl',
            css:'./modules/deepClear/deepClear.css'
        })
         // 开荒保洁
        .state('openClear',{
            url:'/openClear',
            templateUrl:'./modules/openClear/openClear.html',
            controller:'openClearCtrl',
            css:'./modules/openClear/openClear.css'
        })
         //消杀保洁
        .state('killClear',{
            url:'/killClear',
            templateUrl:'./modules/killClear/killClear.html',
            controller:'killClearCtrl',
            css:'./modules/killClear/killClear.css'
        })
         // 开锁换锁
        .state('unlocking',{
            url:'/unlocking',
            templateUrl:'./modules/unlocking/unlocking.html',
            controller:'unlockingCtrl',
            css:'./modules/unlocking/unlocking.css'
        })
         // 水路管件
        .state('waterpipe',{
            url:'/waterpipe',
            templateUrl:'./modules/waterpipe/waterpipe.html',
            controller:'waterpipeCtrl',
            css:'./modules/waterpipe/waterpipe.css'
        })
         // 灯具电路
        .state('lamp',{
            url:'/lamp',
            templateUrl:'./modules/lamp/lamp.html',
            controller:'lampCtrl',
            css:'./modules/lamp/lamp.css'
        })
         // 更多维修
        .state('moreRepair',{
            url:'/moreRepair',
            templateUrl:'./modules/moreRepair/moreRepair.html',
            controller:'moreRepairCtrl',
            css:'./modules/moreRepair/moreRepair.css'
        })

        // 生活
        .state('life',{
            url:'/life',
            templateUrl:'./modules/life/life.html',
            controller:'LifeCtrl',
            css:'./modules/life/life.css'
        })
        // 下载App
        .state('download',{
            url:'/download',
            templateUrl:'./modules/download/download.html',
            controller:'DownloadCtrl',
            css:['./modules/download/download.css','./css/swiper.min.css','./modules/download/bootstrap.min.css']
        })
        // 房间详情
        .state('details',{
            url:'/details',
            templateUrl:'./modules/details/details.html',
            controller:'DetailsCtrl',
            css:'./modules/details/details.css'
        })
        
})
