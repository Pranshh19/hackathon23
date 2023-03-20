var express = require('express');
var router = express.Router();


router.get('/', function(req, res,next){
    res.render('quotics', { layout:false })
})

module.exports = router;