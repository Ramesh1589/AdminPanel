!function(){angular.module("components",[])}(),function(){angular.module("components").filter("rangeFilter",[function(){return function(e,n){var o=[];return n&&n.min&&n.max?(_.each(e,function(e){e.Price>=n.min&&e.Price<n.max&&o.push(e)}),o):e}}])}(),function(){angular.module("header").controller("headerCtrl",["$scope","$translate",function(e,n){e.vehicleCount=0,e.total=0,e.$on("VEHICLE-ADDED",function(n,o){e.total+=o.veh.Price,e.vehicleCount++}),e.$on("VEHICLE-REMOVED",function(n,o){e.total-=o.veh.Price,e.vehicleCount--}),e.changeLagunage=function(e){n.use(e)}}])}(),angular.module("header",[]),angular.module("home",[]),angular.module("login",[]),function(){"use strict";angular.module("register").controller("registerCtrl",function(e,n){e.userDetails={terms:!1},e.countries=[{key:"IN",value:"India"},{key:"US",value:"United States"}];var o=[{countryCode:"IN",key:"TG",value:"Telangana"},{countryCode:"IN",key:"AP",value:"Andhra Pradesh"},{countryCode:"IN",key:"MH",value:"Maharashatra"},{countryCode:"US",key:"TX",value:"Texas"},{countryCode:"US",key:"LA",value:"Losss Angilies"},{countryCode:"US",key:"NY",value:"New York"}];e.states=[{countryCode:"IN",key:"TG",value:"Telangana"},{countryCode:"IN",key:"AP",value:"Andhra Pradesh"},{countryCode:"IN",key:"MH",value:"Maharashatra"},{countryCode:"US",key:"TX",value:"Texas"},{countryCode:"US",key:"LA",value:"Loss Angilie"},{countryCode:"US",key:"NY",value:"New York"}],e.loadStates=function(){console.log(e.selectedCountry),e.stateList=[],angular.forEach(o,function(n){n.countryCode===e.selectedCountry.key&&e.stateList.push(n)}),console.log(e.stateList)},e.registerUser=function(){console.log(e.userDetails),n.go("login",{userDetails:e.userDetails})}})}(),angular.module("register",[]),function(){angular.module("vehicles").controller("vehicleCtrl",["$scope","vehicleSvc","$rootScope",function(e,n,o){n.getVehicles().then(function(n){e.vehicles=n.data.vehicles}).catch(function(n){e.showError=n}),e.changeSort=function(){"Price"==e.sortBy?e.sortBy="=Price":e.sortBy="-Price"},e.filterRange=[{range:"between 100000 to 300000",min:1e5,max:3e5},{range:"between 300000 to 500000",min:3e5,max:5e5},{range:"between 800000 to 1200000",min:8e5,max:12e5},{range:"between 1000000 to 1500000",min:1e6,max:15e5},{range:"between 1000000 to 9900000",min:1e6,max:99e5}],e.selectVehicle=function(e){e.isSelected=!0,o.$broadcast("VEHICLE-ADDED",{veh:e})},e.removeVehicle=function(e){e.isSelected=!1,o.$broadcast("VEHICLE-REMOVED",{veh:e})},e.$watch("searchByModel",function(e,n){console.log("Old Value is: "+n),console.log("New Value is: "+e)}),setTimeout(function(){e.searchByModel="WagonR",e.$apply()},5e3)}])}(),function(){angular.module("vehicles").service("vehicleSvc",["$http",function(e){this.getVehicles=function(){return e.get("app/api/vehicles.json")}}])}(),angular.module("vehicles",[]);