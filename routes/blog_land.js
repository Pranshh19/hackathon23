var express = require('express');
var router = express.Router();


router.get('/', function(req, res,next){
    res.render('blog_land.ejs', { layout: true })
})

router.get('/blog_page', function (req, res, next) {
    res.render('blog_page.ejs',{layout:true})
})

module.exports = router;