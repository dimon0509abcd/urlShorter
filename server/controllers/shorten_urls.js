'use strict';
var ShortenURLs = require("../dao/shorten_urls.js");

function createShortURL(req, res) {
    console.log(req.body);
    ShortenURLs.createShortURL(req.body.creator_id, req.body.full, (err, result) => {
        res.status(201).json(result);
        });
}

function removeURL(req, res) {
    console.log(req.body);
    ShortenURLs.removeURL(req.body.short, (err, result) => {
        res.status(200).json(result);
        });
}

function getFullURL(req, res) {
    console.log(req.params);
    ShortenURLs.getFullURL(req.params.short, (err, result) => {
        res.status(200).json({full:result[0].full});
        });
}

function getStatsOfShortURL(req, res) {
    console.log(req.params);
    ShortenURLs.getStatsOfShortURL(req.params.short, (err, result) => {
        console.log(result);
        res.status(200).json({stats:result[0].stats});
        });
}

module.exports = {createShortURL,removeURL,getStatsOfShortURL,getFullURL};