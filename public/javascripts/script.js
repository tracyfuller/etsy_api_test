$(document).ready(function(){

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://openapi.etsy.com/v2/shops/bitsmonster/listings/active?api_key=f07lri9zll0kl2jfnkfqli8z',
        complete: function(){
            console.log("ajax complete");
        },
        success: function(data){
            console.log(data)
        }
    });


});

