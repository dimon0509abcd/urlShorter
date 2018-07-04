'use strict';

const express = require('express');
const controller = require('../controllers/shorten_urls');

const router = express.Router();

router.get('/:short', controller.getFullURL);
router.post('/', controller.createShortURL);
router.delete('/', controller.removeURL);
router.get('/stats/:short', controller.getStatsOfShortURL);
router.put('/', controller.getAllUrls);


module.exports = router;

