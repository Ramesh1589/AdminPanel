// (function () {
//  'use strict'
//  //code goes here.
//   angular.module("login").controller("loginCtrl", function ($scope, $state, $rootScope) {
//     $scope.loginUser = function () {
//       if ($scope.userDetails.userName == 'admin' && $scope.userDetails.userPassword == 'admin') {
//        $rootScope.loggedIn = true;
//       } else {
//         alert("Wrong Username And Password");
//       }
//         console.log($scope.userDetails);
//         $rootScope.userName = $scope.userDetails.userName;
//         $rootScope.companyName = "63moons Technologies Pvt. Ltd., Mumbai";
//         //Navigating from one pagr to another page using $state.go()
//         $state.go("dashboard", {
//           userDetails: $scope.userDetails
//         });
//     };
//   });
// })();

(function () {
    function loginCtrl(loginSvc, $scope, $state, $http, $rootScope) {

        var vm = this;

        vm.userDetails = {};

        $scope.dologin = function () {

            console.log(vm.userDetails);

            $http.post("http://172.25.102.115:8086/api/login", {
                email: $scope.userDetails.userName,
                pwd: $scope.userDetails.userPassword

            }).then(function (res) {
                
                $rootScope.userDetails = res.data;
                console.log($rootScope.userDetails);

            }).catch(function (err) {
                console.log(err);
            });
            $rootScope.loggedIn = true;

            $state.go("dashboard", {
                // userDetails: $scope.userDetails
            });
        }
    }
    angular.module("login")
        .controller("loginCtrl", ["loginSvc", "$scope", "$state", "$http", "$rootScope", loginCtrl]);
})();
