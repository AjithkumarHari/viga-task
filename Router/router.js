const express = require('express');
const router = express.Router();
const { getDeliveryCost } = require('../Controller/priceController')

router.post('/price', getDeliveryCost);

module.exports = router