'use strict';
var Accounts = require("../dao/accounts.js");

function createAccount(req, res) {
    console.log(req.body);
    Accounts.createAccount(req.body, (err, result) => {
        res.status(201).json(result);
    });
}

module.exports = {createAccount};