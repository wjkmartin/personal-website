var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {docTitle: 'Will Martin\'s Portfolio and Blog'});
});

router.get('/index', function(req, res) {
    res.redirect('/');
})

router.get('/blog', function(req, res) {
    res.render('blog', {docTitle: 'Will Martin\'s Blog'});
});

router.get('/portfolio', function(req, res) {
    res.render('portfolio', {docTitle: 'Will Martin\'s Portfolio'});
});

router.get('/login', function(req, res) {
    res.render('login', {docTitle: 'Admin Login'});
});

module.exports = router;

