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

	const post = new BlogPost(req.body.title, html);

	post.save();
	res.redirect('stage-post');
};

exports.getStagePost = (req, res, next) => {
	BlogPost.fetchLast(post => {
		res.render('stage-post', {
			docTitle: 'Will Martin | Verify new blog post',
			path: 'stage-post',
			postTitle: post.title,
			postDate: post.date,
			postBody: post.body,
		});
	});
};
