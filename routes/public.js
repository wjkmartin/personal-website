const express = require('express');
const router = express.Router();

const publicController = require('../controllers/publicController');

router.get('/', publicController.getIndex);

router.get('/index', (req, res, next) => {
	res.redirect('/');
});

router.get('/blog', publicController.getBlog);
router.get('/portfolio', publicController.getPortfolio);
router.get('/about', publicController.getAbout);
router.get('/contact', publicController.getContact);
router.get('/login', publicController.getLogin);
router.get('/guestbook', publicController.getGuestbook);
app.use((req, res) => res.status(404).render('404', {url: req.url, docTitle: '404', path: '404'}));

module.exports = router;
