var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.redirect('/');
})

router.get('/blog', function(req, res) {
    res.render('blog');
});

router.get('/portfolio', function(req, res) {
    res.render('portfolio');
});

router.get('/login', function(req, res) {
    res.render('login');
});

module.exports = router;

