var Accounts = require("../models/accounts.js");
function createAccount(account, callback) {
    Accounts.create(account, (err, result) => {
        callback && callback(err, result);
    });
}
module.exports = {createAccount};