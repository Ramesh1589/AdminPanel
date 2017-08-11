(function(){
    angular.module("dashboard")
    .service("dashboardSvc",["$http", function($http){
        // Http call from service for json to server
        this.getTradeConfInfo=function(){
         return  $http.get("http://172.25.90.45:8088/api/TradeConfInfo");
        };
        //End of http call

        // Http call from service for json to server
        this.getTradeConfCount=function(){
         return  $http.get("http://172.25.90.45:8088/api/TradeConfCount");
        };
        //End of http call
    }]);
})();
