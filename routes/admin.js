var express = require('express');
var router = express.Router();

const blogPostingController = require('../controllers/blogPostingController');

 router.get('/', function(req, res) {
     res.render('admin', {docTitle: 'Manage site', path: 'admin'});
 });

router.get('/create-post', blogPostingController.getCreatePost);
router.post('/create-post', blogPostingController.postCreatePost);

router.get('/edit-posts', blogPostingController.getEditPosts);
router.post('/edit-posts', blogPostingController.postBlogDetailAdmin);

router.get('/blog-detail-admin/:blogId', blogPostingController.getBlogDetailAdmin);

router.get('/stage-post', blogPostingController.getStagePost);

module.exports = router;