(function () {
    angular.module("header")
        .controller("headerCtrl", ["$scope","$rootScope",  function ($scope, $rootScope) {
          $scope.clientName  = $rootScope.userDetails.clientname; 
          $scope.companyName  = $rootScope.userDetails.companyname;     
         
}]);


})();
