'use strict';
var Accounts = require("../dao/accounts.js");

function createAccount(req, res) {
    console.log(req.body);
    Accounts.createAccount(req.body, (err, result) => {
        res.status(201).json(result);
    });
}

function findAccount(req, res) {
    console.log(req.body);
    Accounts.findAccount(req.body, (err, result) => {
        if (result.length === 0) {
            res.status(404).json({ err: "not found" })
        }
        else {
            res.status(200).json({result:result[0]._id})
        }
    });
}
module.exports = {createAccount, findAccount};