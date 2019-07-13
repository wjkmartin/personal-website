const BlogPost = require('../models/blogPostModel');

exports.getIndex = (req, res, next) => {
	res.render('index', {
		docTitle: "Will Martin's Portfolio and Blog",
		path: 'index',
	});
};

exports.getBlog = (req, res, next) => {
	BlogPost.fetchAll().then(posts => {
		res.render('blog', {
			docTitle: 'Will Martin | Blog',
			path: 'blog',
			posts: posts,
			postsToShow: 1,
		});
	});
};

exports.postViewBlogDetail = (req, res, next) => {
	let id = req.body.blogId;
	res.redirect('/blog/' + id);
};

exports.getBlogDetail = (req, res, next) => {
	let id = req.params.blogId;
	BlogPost.fetchById(id).then(post => {
		res.render('blog-detail', {
			docTitle: 'Will Martin | Verify new blog post',
			path: 'blog',
			post: post[0],
		});
	});
};

exports.getPortfolio = (req, res, next) => {
	res.render('portfolio', {
		docTitle: 'Will Martin | Portfolio',
		path: 'portfolio',
	});
};

exports.getAbout = (req, res, next) => {
	res.render('about', {
		docTitle: 'Will Martin | About',
		path: 'about',
	});
};

exports.getContact = (req, res, next) => {
	res.render('contact', {
		docTitle: 'Will Martin | Contact',
		path: 'contact',
	});
};

exports.getLogin = (req, res, next) => {
	res.render('login', {
		docTitle: 'Will Martin | Login',
		path: 'login',
	});
};

exports.getGuestbook = (req, res, next) => {
	res.render('guestbook', {
		docTitle: 'Will Martin | Guest book',
		path: 'guestbook',
	});
};

exports.get404Page = (req, res, next) => {
	res.status(404).render('404', {
		url: req.url,
		docTitle: '404',
		path: '404',
	});
};
