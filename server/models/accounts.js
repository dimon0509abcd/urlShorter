var mongoose = require("mongoose");
var schema =  mongoose.Schema({
    id: 'string',
    login: 'string',
    password: 'string',
    access_level: 'string'
});

var Accounts = mongoose.model('Accounts', schema);
module.exports = Accounts;
