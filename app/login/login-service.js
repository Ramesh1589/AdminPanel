(function(){
  function loginSvc($http,$q){
    this.loginUser = function(userInfo){
    console.log(userInfo)
//      var dfd = $q.defer();
//        $http.post("http://172.25.102.115:8086/api/login", {
//              email: userDetails.userName,
//              pwd: userDetails.userPassword
//    
//        })
//            
//        .then(function(response){
//          dfd.resolve(response);
//        }).catch(function(response){
//          dfd.reject(response);
//      });
//      return dfd.promise;
    };

  }
  angular.module("login")
  .service("loginSvc",["$http","$q",loginSvc]);
})();
