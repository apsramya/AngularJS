//MODULE and DEFINE THE DEPENDENCIES
var weatherApp = angular.module("weatherApp",["ngRoute","ngResource"]);


//configure ROUTES
weatherApp.config(function($routeProvider){
    
    $routeProvider
    .when("/", {
        
        templateUrl : "Pages/City.html",
        controller : "cityController"
        
    })
    .when("/weather" , {
        templateUrl : "Pages/Weather.html",
        controller :"weatherController"
        
        
    })
     .when("/weather/:days" , {
        templateUrl : "Pages/Weather.html",
        controller :"weatherController"
        
        
    });
    
});


//SERVICES

weatherApp.service('cityService',function(){
    this.city = "New York, NY";
});

//CONTROLLERS

weatherApp.controller("cityController",["$scope","$log","cityService",function($scope,$log,cityService) {
    $scope.city = cityService.city;
    //adding a watch to persist the data from one page to another
    
    $scope.$watch("city",function(){
        
        cityService.city = $scope.city;
        
    });
    
    
    $log.log("cityController");
    
}]);


weatherApp.controller("weatherController",["$scope","$resource","$routeParams","cityService",function($scope,$resource,$routeParams,cityService) {
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2' ;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { get : { method : "JSONP" }});
    $scope.weatherResults = $scope.weatherAPI.get({ q: $scope.city,cnt : $scope.days   ,APPID : '0df0e13ea63f8e98cf261825d0fd0180' });
    
   $scope.convertToFahrenheit = function(degk){
       return Math.round((1.8 * (degk - 273)) + 32);
   };
   
   $scope.convertToDate =  function(dt) {
       return new Date(dt * 1000);
   };
   

    
}]);


