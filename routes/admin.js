var express = require('express')
var router = express.Router()

 router.get('/admin', function(req, res) {
     res.render('admin');
 });

router.get('/admin/create-post', function(req, res) {
    res.render('create-post');
});

module.exports = router;