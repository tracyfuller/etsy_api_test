var myApp = angular.module('myApp', []);


myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){
    $scope.listings;

    //IF DISPLAYLISTINGS WORKS, THIS WON'T BE NEEDED
    //$http.get('/etsy').
    //    success(function(data, status, headers, config) {
    //        console.log("client side: ", data);
    //    }).
    //    error(function(data, status, headers, config) {
    //        // called asynchronously if an error occurs
    //        // or server returns response with an error status.
    //});

    $scope.displayListings = function(){
        return $http.get('/etsy').then(function(response){
            if(response.status !== 200){
                console.log("Response Error, cannot reach data");
            }

            $scope.listings = response.data.results;
            console.log($scope.listings);
            return response.data;
        });

    };

    //TODO: connect button to pagination call on API
    //$scope.addPage = function(){
    //    $http.get('/etsy').
    //        success(function(data){
    //
    //    });
    //}

}]);

//angular stuff will go here



