var myApp = angular.module('myApp', []);


function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}

myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    $http.get('/etsy').
        success(function(data, status, headers, config) {
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

}]);

//angular stuff will go here



