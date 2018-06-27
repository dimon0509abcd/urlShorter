
var mongoose = require('mongoose');

/**
 * Data Access Layer
 *
 * @constructor
 * @param {Object} config - database config
 */
function DAO(config) {
    mongoose.connect(config,{
        MongoClient:true
    })
        .then(() => console.log('Mongodb has started.....'))
        .catch(e => console.log(e));

}

/**
 * Create database instance and load init data
 * @param {Object} data - init database data
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.init = function (data, callback) {

    //TODO create instance and load data
    callback && callback();
};

/**
 * Clear database
 * @param {Function} callback - two params err, callback result
 * @returns {void}
 */
DAO.prototype.clear = function(callback) {
    //TODO clear database
    callback && callback();
};

var module;
module.exports = DAO;