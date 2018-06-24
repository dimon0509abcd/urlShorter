var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    id: 'string',
    creator_id: 'string',
    short: 'string',
    full: 'string',
    stats: 'string'
});

var Shorten_urls = mongoose.model('Shorten_urls', schema);
module.exports = Shorten_urls;
