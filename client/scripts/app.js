var myApp = angular.module('myApp', ['wu.masonry']);



myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    $scope.listings = [
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--height2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--height2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: ''
        },
        {
            Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
            class: 'masonry-brick--width2'
        }
    ];

    $scope.item = {};
    $scope.sizedArray = [];

    var max;
    var min;

    var findPopularity = function(elem){
        return (elem.num_favorers * 2) + elem.views;
    };

    var classBuilder = function(elem){
        var origLength = elem.length;
        var arraySmall = [];
        var arrayMed = [];
        var arrayLarge = [];
        var arrayExtraLg = [];
        elem.sort(function (a, b){
            return a.popularity - b.popularity
        });
        console.log("Class Builder: ", elem);
        while (elem.length > (origLength/2)){
            arraySmall.push(elem.shift());
        }
        console.log(arraySmall);
        console.log(elem);
        //for (i=0; i < $scope.sizedArray.length; i++){
        //
        //    $scope.sizedArray[i].test = "class " + i;
        //};
        //console.log($scope.sizedArray);
    };

    var imageSizer = function(){
        for (var i = 0; i < $scope.listings.length; i++){
            $scope.item.id = (i+1);
            $scope.item.image = $scope.listings[i].Images[0].url_570xN;
            $scope.item.popularity = findPopularity($scope.listings[i]);
            $scope.item.url = $scope.listings[i].url;

            $scope.sizedArray.push($scope.item);
            $scope.item = {};

            //console.log("Popularity for item " + (i+1) + ": " + popularity($scope.listings[i]));
        };
        max = Math.max.apply(Math,$scope.sizedArray.map(function(o){return o.popularity;}));
        min = Math.min.apply(Math,$scope.sizedArray.map(function(o){return o.popularity;}));
        classBuilder($scope.sizedArray);

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



