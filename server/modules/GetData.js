var https = require('https');

//TODO: maybe change the page number to a function input parameter of the prototype?

var storeName = "bitsmonster";
var page = 0;

function GetData() {
    if (!this instanceof GetData) {
        return new GetData();
    }
}

GetData.prototype.go = function(callback){

    var request = https.request("https://openapi.etsy.com/v2/shops/" + storeName + "/listings/active?&includes=Images:1:0&api_key=f07lri9zll0kl2jfnkfqli8z&limit=25&offset=" + page,
        function (response) {
        jsonObject = '';                                            //define jsonObject as a string so as to not have the data return "[Object, object]"

        //When data returns add it to the object
        response.on('data', function (res) {
            jsonObject += res;
            //console.log("response.on runs");
        });

        //the whole response has been received, so we just print it out here
        response.on('end', function () {
            console.log('At response.end');
            jsonObject = JSON.parse(jsonObject);                    //Here, we take the string and make it a jsonObject
            callback(jsonObject);
        });

    });

    request.end();


};

module.exports = GetData;
