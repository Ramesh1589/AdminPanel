(function () {
    'use strict'
    //module initilization
    angular.module("myApp", ["home", "login", "register", "ui.router", "dashboard", "header", "angularUtils.directives.dirPagination", "chart.js", "ngTableToCsv"])
        .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {

            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("login");

            // ChartJsProvider.setOptions({colors:['#803690','#00ADF9','#DCDCDC','#46BFBD','#FDB45C']});

            var basePath = "app/templates/";

            var homeObj = {
                templateUrl: basePath + "home.html",
                url: "/home"

            };

            var dashboardObj = {
                resolve: {
                    "check": function ($state, $rootScope) {
                        if (!$rootScope.loggedIn) {
                            $state.go('login');
                        }
                    }
                },
                templateUrl: basePath + "dashboard.html",
                controller: "dashboardCtrl",
                url: "/dashboard"
            };

            var registerObj = {
                templateUrl: basePath + "register.html",
                controller: "registerCtrl",
                url: "/register"
            };
            var loginObj = {
                templateUrl: basePath + "login.html",
                controller: "loginCtrl",
                url: "/login"
            };
            var costAnalysisObj = {
                templateUrl: basePath + "costanalysis.html",
                controller: "dashboardCtrl"

            };
            var activeCallObj = {
                templateUrl: basePath + "activecall.html",
                controller: "dashboardCtrl"

            };
            var totalCallObj = {
                templateUrl: basePath + "totalcalls.html",
                controller: "dashboardCtrl"

            };
            var acceptedCallObj = {
                templateUrl: basePath + "acceptedcall.html",
                controller: "dashboardCtrl"

            };
            var rejectedCallObj = {
                templateUrl: basePath + "rejectedcalls.html",
                controller: "dashboardCtrl"

            };
            var completeCallObj = {
                templateUrl: basePath + "completecall.html",
                controller: "dashboardCtrl"

            };
            var incompleteCallObj = {
                templateUrl: basePath + "incompletecall.html",
                controller: "dashboardCtrl"

            };


            $stateProvider.state("home", homeObj);
            $stateProvider.state("dashboard", dashboardObj);
            $stateProvider.state("login", loginObj);
            $stateProvider.state("register", registerObj);

            $stateProvider.state("dashboard.costAnalysis", costAnalysisObj);
            $stateProvider.state("dashboard.activeCall", activeCallObj);
            $stateProvider.state("dashboard.totalCall", totalCallObj);
            $stateProvider.state("dashboard.acceptedCall", acceptedCallObj);
            $stateProvider.state("dashboard.rejectedCall", rejectedCallObj);
            $stateProvider.state("dashboard.completeCall", completeCallObj);
            $stateProvider.state("dashboard.incompleteCall", incompleteCallObj);

     }])

})();
