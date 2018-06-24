'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const DAO = require('./dao');
const accounts = require('./routes/accounts');
const shorten_urls = require('./routes/shorten_urls');

const PORT = 3000;

const app = express();
const dao = new DAO('mongodb://localhost:27017/database');


/**
 * Middleware
 */
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


/**
 * Routes
 */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../web/index.html'));
});
app.use('/api/accounts', accounts);
app.use('/api/shorten_urls', shorten_urls);

/**
 * Init database
 */
dao.init({/*init data*/}, (err, db) => {

    if (err) {
        console.error(err);
    }
    /**
     * Start app
     */
    app.listen(PORT, function () {
        console.log(`App listening on port ${PORT}!`);
    });
});

module.exports = app;
