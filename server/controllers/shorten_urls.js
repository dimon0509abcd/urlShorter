'use strict';
var ShortenURLs = require("../dao/shorten_urls.js");

function createShortURL(req, res) {
    console.log(req.body);
    ShortenURLs.createShortURL(req.body.creator_id, req.body.full, (err, result) => {
        res.status(201).json(result);
        });
}

function getAllUrls(req,res){
    console.log(req.body);
    ShortenURLs.getAllUrls(req.body.creator_id, (err,result) =>{
        res.status(200).json(result);
    })
}
function removeURL(req, res) {
    ShortenURLs.getStatsOfShortURL(req.params.short, (err, result) => {
        if (req.query.creator_id === result[0].creator_id){
            ShortenURLs.removeURL(req.body.short, (err, result) => {
                res.status(200).json(result);
            });
        }
        else{
            res.status(403).json({err:"access denied"})
        }
    });
}

function getFullURL(req, res) {
    console.log(req.params);
    ShortenURLs.getFullURL(req.params.short, (err, result) => {
        res.status(200).json({full:result[0].full});
        });
}

function getStatsOfShortURL(req, res) {
    console.log(req.query);
    ShortenURLs.getStatsOfShortURL(req.params.short, (err, result) => {
        if (req.query.creator_id === result[0].creator_id){
            res.status(200).json({stats:result[0].stats});
        }
        else{
            res.status(403).json({err:"access denied"})
        }
    });
}

module.exports = {createShortURL,removeURL,getStatsOfShortURL,getFullURL, getAllUrls};