const BlogPost = require('../models/blogPostModel');

exports.getIndex = (req, res, next) => {
	res.render('index', {
		docTitle: "Will Martin's Portfolio and Blog",
		path: 'index',
	});
};

exports.getBlog = {
	getData: async function(req, res, next) {

		res.locals.test = [];
		for (let i = 0; i < 1; i++) {
			BlogPost.fetchNthNewest(i, post => {
				res.locals.test.push(post);
			});
		}
		await new Promise((resolve, reject) => setTimeout(resolve, 300));
		next();

	},
	renderData: function(req, res, next) {
		console.log( res.locals.test[0].title);
		res.render('blog', {
			docTitle: 'Will Martin | Blog',
			path: 'blog',
			blogPost1Title: res.locals.test[0].title,
			blogPost1TimeStamp: 'February 10',
			blogPost1Body: res.locals.test[0].body,
			// blogPost2Title: res.locals.test[1].title,
			// blogPost2TimeStamp: 'February 10',
			// blogPost2Body: res.locals.test[1].body,
			// blogPost3Title: res.locals.test[2].title,
			// blogPost3TimeStamp: 'February 10',
			// blogPost3Body: res.locals.test[2].body
		});
	}
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
