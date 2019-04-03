var express = require('express')
var router = express.Router()

 router.get('/', function(req, res) {
     res.render('admin');
 });

router.get('/create-post', function(req, res) {
    res.render('create-post');
});

module.exports = router;