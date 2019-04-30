const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

router.get('/', publicController.getIndex);

router.get('/index', (req, res, next) => {
	res.redirect('/');
});

router.get('/blog', publicController.getBlog);
router.post('/blog', publicController.postViewBlogDetail);

router.get('/portfolio', publicController.getPortfolio);
router.get('/about', publicController.getAbout);
router.get('/contact', publicController.getContact);
router.get('/login', publicController.getLogin);
router.get('/guestbook', publicController.getGuestbook);

module.exports = router;
