var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/blog', function(req, res, next) {
  res.render('blog');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

module.exports = router;