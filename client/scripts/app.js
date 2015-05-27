var myApp = angular.module('myApp', []);

myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    $http.get('https://openapi.etsy.com/v2/shops/forgelakestudio/listings/active?api_key=f07lri9zll0kl2jfnkfqli8z').
        success(function(data, status, headers, config) {
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

}])

//angular stuff will go here



