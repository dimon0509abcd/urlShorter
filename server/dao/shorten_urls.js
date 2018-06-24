var Shorten_urls = require("../models/shorten_urls.js");

function getFullURL(short, callback){
    Shorten_urls.find({short:short}, (err, result) => {
        callback && callback(err, result);
    });
}

function createShortURL(creator_id, full, callback) {
    function makeshort() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    Shorten_urls.create({full:full, short:makeshort(), stats:0, creator_id}, (err, result) => {
        callback && callback(err, result);
    });
}

function removeURL(short, callback){
    Shorten_urls.remove({short:short}, (err, result) => {
        callback && callback(err, result);
    });
}


function getStatsOfShortURL(short, callback){
    Shorten_urls.find({short:short},(err, result) => {
        callback && callback(err, result);
    })
}

module.exports = {getFullURL, createShortURL, removeURL, getStatsOfShortURL};