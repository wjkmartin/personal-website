var express = require('express')
var router = express.Router()

const blogPostingController = require('../controllers/blogPostingController');

 router.get('/', function(req, res) {
     res.render('admin', {docTitle: 'Manage site', path: 'admin'});
 });

router.get('/create-post', blogPostingController.getCreatePost);
router.get('/stage-post', blogPostingController.getStagePost);

module.exports = router;