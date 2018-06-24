'use strict';

const express = require('express');
const controller = require('../controllers/accounts');

const router = express.Router();


router.post('/', controller.createAccount);
router.put('/', controller.findAccount);




module.exports = router;

