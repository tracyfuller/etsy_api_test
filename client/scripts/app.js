var myApp = angular.module('myApp', []);



myApp.controller('GetApi', ['$scope', '$http', function($scope, $http){

    //$scope.listings = [
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size3'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size3'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: ''
    //    },
    //    {
    //        Images: [{ url_170x135: "http://www.fillmurray.com/300/300"}],
    //        class: 'size2'
    //    }
    //];

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
        elem.sort(function (a, b){
            return a.popularity - b.popularity
        });

        //separate array into separate sizing categories
        while (elem.length > (origLength/2)){
            arraySmall.push(elem.shift());
        };
        origLength = elem.length;
        while (elem.length > (origLength/2)){
            arrayMed.push(elem.shift());
        };
        origLength = elem.length;
        while (elem.length > (origLength/3)){
            arrayLarge.push(elem.shift());
        };

        // BELOW FUNCTIONS WILL ASSIGN CLASSES BASED ON POPULARITY AS NEEDED
        for (i=0; i<arraySmall.length; i++){
            arraySmall[i].class = "";
        };
        for (i=0; i<arrayMed.length; i++){
            arrayMed[i].class = "size2";
        };
        for (i=0; i<arrayLarge.length; i++){
            arrayLarge[i].class = "size3";
        };
        for (i=0; i<elem.length; i++){
            elem[i].class = "size4";
        };

        // push small arrays back together into main array
        while (arraySmall.length >0){
            elem.push(arraySmall.shift());
        };
        while (arrayMed.length >0){
            elem.push(arrayMed.shift());
        };
        while (arrayLarge.length >0){
            elem.push(arrayLarge.shift());
        };

        // sort main array back to original order
        elem.sort(function (a, b){
            return a.id - b.id
        });
        return elem;
    };

    var imageSizer = function(){
        for (var i = 0; i < $scope.listings.length; i++){
            $scope.item.id = (i+1);
            $scope.item.image = $scope.listings[i].Images[0].url_170x135;
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



