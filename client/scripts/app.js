var myApp = angular.module('myApp', ['wu.masonry']);


myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    var load = new function() {
        var msnry;
        var container = document.querySelector('#container');

        //initialize Masonry after all images have loaded.
        imagesLoaded(container, function () {
            msnry = new Masonry(container, {
                columnWidth: 200,
                itemSelector: ".item"
            });
        });
    };

    //load();

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



