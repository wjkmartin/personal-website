var express = require('express')
var router = express.Router()

 router.get('/', function(req, res) {
     res.render('admin', {docTitle: 'Manage site', path: 'admin'});
 });

router.get('/create-post', function(req, res) {
    res.render('create-post', {docTitle: 'Create a new post', path: 'create-post'});
});

module.exports = router;