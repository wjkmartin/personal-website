var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {docTitle: 'Will Martin\'s Portfolio and Blog', path: 'index'});
});

router.get('/index', function(req, res) {
    res.redirect('/');
})

router.get('/blog', function(req, res) {
    res.render('blog', {docTitle: 'Will Martin | Blog', path: 'blog'});
});

router.get('/portfolio', function(req, res) {
    res.render('portfolio', {docTitle: 'Will Martin | Portfolio', path: 'portfolio'});
});

router.get('/about', function(req, res) {
    res.render('about', {docTitle: 'Will Martin | About', path: 'about'});
});

router.get('/contact', function(req, res) {
    res.render('contact', {docTitle: 'Will Martin | Contact', path: 'contact'});
});

router.get('/login', function(req, res) {
    res.render('login', {docTitle: 'Will Martin | Login'});
});

module.exports = router;

