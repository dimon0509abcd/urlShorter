'use strict';

const express = require('express');
const controller = require('../controllers/accounts');

const router = express.Router();


router.post('/', controller.createAccount);




module.exports = router;

