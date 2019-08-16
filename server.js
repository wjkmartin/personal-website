'use strict';
const app = require('./app');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const publicRoutes = require('./routes/public');
const adminRoutes = require('./routes/admin');

const publicController = require('./controllers/publicController');

const mongoConnect = require('./util/database').mongoConnect;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './ckeditor')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', publicRoutes);
app.use('/admin', adminRoutes);

app.use(express.static("./public/img"));

app.use(publicController.get404Page);

var port = process.env.PORT || 3000;
app.set('port', port);
var server = http.createServer(app);

mongoConnect(() => {
    server.listen(port);
});




