//take in array from listings

//loops through listing items

//pulls image source

//pulls popularity number (use function from main app.js)

//creates decision on what class to give

//array includes the following: image, popularity, classSize, listing url

var popularity = function(item){
    return (item.num_favorers * 2) + item.views;
}

var imageSizer = function(){
    for (var i = 0; i < $scope.listings.length; i++){
        console.log("Popularity for item " + (i+1) + ": " + popularity($scope.listings[i]));
    }
};

var item = {};

var itemParser