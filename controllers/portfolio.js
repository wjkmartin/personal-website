'use strict';
const app = (module.exports = require('express').Router());

app.get('/', (req, res) => res.render('portfolio'));

