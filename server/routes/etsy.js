var express = require('express');
var router = express.Router();
var GetData = require('../modules/GetData');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var getData = new GetData();

    getData.go(function(data){
        //console.log(data);
        res.json(data);
    });
});

module.exports = router;
