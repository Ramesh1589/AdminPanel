(function(){
  angular.module("dashboard")
    .controller("dashboardCtrl",["$scope","dashboardSvc","$rootScope",
      function($scope,dashboardSvc, $rootScope){
               

        // Fetching  TradeConfInfo JSON Data
        dashboardSvc.getTradeConfInfo()
        .then(function(response){
          $scope.tradeInfos = response.data;
        })
        .catch(function(response){
          $scope.showError=response;
        });
        // End of TradeConfoInfo function


        // Fetching  TradeConfCount JSON Data
        dashboardSvc.getTradeConfCount()
        .then(function(response){
          $scope.tradeConfCount = response.data[0][0];

          $scope.labels = ['Active Calls','Total Calls','Accepted Calls', 'Rejected Calls','Completed Calls','Incomplete Calls'];
          //$scope.data = [50, 40, 35, 40,15,40];

          // $scope.data = [ response.data[0][0].nActiveCount,response.data[0][0].nTotalCount ,
          //                 response.data[0][0].nAcceptedCount, response.data[0][0].nRejectedCount,
          //                 response.data[0][0].nCompletedCount, response.data[0][0].nInCompletedCount
          //               ];

          // Mixed Type Graph
          $scope.labels = ['Monday', 'Tuesday','Wenseday','Thursday','Frieday','Saturday','Sunday'];
          $scope.series = ['Active Calls','Total Calls','Rejected Calls','Complete Calls',];
          $scope.data = [
            [20,35,36,55,66,77,33,45],
            [20,35,12,22,68,77,83,95],
            [65,55,77,33,44,55,77,88],
            [11,33,22,44,66,55,99,77]

          ];
          $scope.onClick = function (points, evt){
            console.log(points, evt);
          };
          $scope.datasetOverride = [{ yAxisID: 'y-axix-1'}];
          $scope.options = {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
                }
              ]
            }
          };

        })
        .catch(function(response){
          $scope.showError=response;
        });
        // End of TradeConfCount function

        //Get Details Function on Click
        $scope.getDetails = function (data) {
          $scope.detail = {};
          $scope.detail = data;
        };

        //properties for static graph

        // $scope.labels = ['Total Calls','Accepted Calls','Rejected Calls', 'MyCalls'];
        // $scope.data = [50, 40, 35, 40,25];
      // //  $scope.colors =['#00ADF9'];

        // Logic for dynamic graph


        
      }
    ]);
  })
();
