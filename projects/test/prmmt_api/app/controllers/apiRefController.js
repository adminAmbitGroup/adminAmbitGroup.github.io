angular.module('app.features.controllers')
.controller("ApiController", ['$scope','$http', function($scope,$http) {   
        $http.get("../json_files/api_list.json")
        .then(function(response){
            $scope.apiReferences = response.data.apiReferences;
        });
        }
    ] );