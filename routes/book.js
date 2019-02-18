var express = require('express');
var router = express.Router();
var Names = require('../models/Book.js');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Express RESTful APIsss');
// });

//get names
router.get('/',function(req,res,next){ 
    // Names.find(function(err,allName){
    //     if(err) return next(err);
    //     var data=allName
    //     res.send(data)
    // })
    var data={"name":"Datta"}
    res.send(data)
})

module.exports = router;