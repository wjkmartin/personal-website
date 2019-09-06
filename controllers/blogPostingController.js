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
		console.log('redirecting to stage post');
		res.redirect('stage-post');
	})
	.catch(err => {
		console.log(err);
	});
	
};

exports.getStagePost = (req, res, next) => {
	BlogPost.fetchAll().then(posts => {
		res.render('stage-post', {
			docTitle: 'Will Martin | Verify new blog post',
			path: 'stage-post',
			posts: posts,
		});
	})
	.catch(err => {
		console.log(err);
	});
};

exports.getEditPosts = (req, res, next) => {
	BlogPost.fetchAll().then(posts => {
		res.render('edit-posts', {
			docTitle: 'Will Martin | Edit Blog',
			path: 'edit-posts',
			posts: posts,
			postsToShow: posts.length
		});
	});
};

exports.postBlogDetailAdmin = (req, res, next) => {
	let id = req.body.blogId;
	res.redirect('/admin/blog-detail-admin/' + id);
};

exports.getBlogDetailAdmin = (req, res, next) => {
	let id = req.params.blogId;
	console.log(id);
	BlogPost.fetchById(id).then(post => {
		console.log(post);
		res.render('blog-detail-admin', {
			docTitle: 'Will Martin | Edit a blog post',
			path: 'blog-detail-admin',
			post: post[0],
		});
	});
};


