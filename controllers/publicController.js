const BlogPost = require('../models/blogPostModel');

exports.getIndex = (req, res, next) => {
	res.render('index', {
		docTitle: "Will Martin's Portfolio and Blog",
		path: 'index',
	});
};

exports.getBlog = (req, res, next) => {
	let postsToShow = 3;
	let renderObject = {
		docTitle: 'Will Martin | Blog',
		path: 'blog',
		postsToShow: postsToShow,
	};

	BlogPost.fetchNNewest(3, posts => {
		setTimeout(function() {
			for (let n = 0; n < postsToShow; n++) {
				renderObject['post' + (n + 1) + 'Title'] = posts[n].title;
				renderObject['post' + (n + 1) + 'Date'] = posts[n].title;
				renderObject['post' + (n + 1) + 'Body'] = posts[n].title;
			}
			console.log(renderObject);
			res.render('blog', renderObject);
		}, 30);
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
