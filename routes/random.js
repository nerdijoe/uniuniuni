var express = require('express');
var router = express.Router();
var randomController = require('../controllers/randomController')

// get random integers
router.get('/', randomController.getRandomNum );

module.exports = router;
