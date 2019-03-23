'use strict';
const assert = require('assert');

const app = (module.exports = require('express').Router());

app.get('/', (req, res) => res.render('login'));

app.post('/', async (req, res, next) => {
    try {
        let user = req.email;
        
        res.redirect('/secret_page');
    } catch (err) {
        next(err);
    }
});