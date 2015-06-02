var myApp = angular.module('myApp', ['wu.masonry']);



myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    $scope.listings = [
        {
            Images: [{ url_170x135: "http://placehold.it/300x300"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/300x300"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/100x100"}]
        },
        {
            Images: [{ url_170x135: "http://placehold.it/200x200"}]
        }
    ];

    var max;
    var min;

    var popularity = function(item){
        return (item.num_favorers * 2) + item.views;
    }

    var imageSizer = function(){
        for (var i = 0; i < $scope.listings.length; i++){
            console.log("Popularity for item " + (i+1) + ": " + popularity($scope.listings[i]));
        }
    };

    $scope.displayListings = function(){
        return $http.get('/etsy').then(function(response){
            if(response.status !== 200){
                console.log("Response Error, cannot reach data");
            }

            $scope.listings = response.data.results;
            console.log($scope.listings);
            imageSizer();
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



