angular.module('app.features.controllers', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
  .when("/getChartFilterData", {
      templateUrl : "views/getChartFilterData.html"
  });
});
