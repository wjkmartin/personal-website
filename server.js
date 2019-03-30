'use strict';
const app = require('./app')
const path = require('path');
const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, './static')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', publicRoutes);
app.use('/', adminRoutes);

app.use((req, res) => res.status(404).render('404', {url: req.url}));

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
