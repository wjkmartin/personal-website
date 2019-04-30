const BlogPost = require('../models/blogPostModel');
const QuillDeltaToHtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter;

exports.getCreatePost = (req, res, next) => {
	res.render('create-post', {
		docTitle: 'Will Martin | Create a new blog post',
		path: 'create-post',
	});
};

exports.postCreatePost = (req, res, next) => {
	const postBody = JSON.parse(req.body.postBody);

	const cfg = {};
	const converter = new QuillDeltaToHtmlConverter(postBody.ops, cfg);
	const html = converter.convert();

	const title = req.body.title;
	const imageUrl = 'https://via.placeholder.com/150';
	const body = html;
	const tags = 'wew';
	
	const post = new BlogPost(title, imageUrl, body, tags);

	post.save()
	.then(() => {
		console.log('redirecting to stage post')
		res.redirect('stage-post');
	});
	
};

exports.getStagePost = (req, res, next) => {
	BlogPost.fetchAll().then(posts => {
		res.render('stage-post', {
			docTitle: 'Will Martin | Verify new blog post',
			path: 'stage-post',
			posts: posts,
		});
	});
};
