var express = require('express');
var router = express.Router();
var randomController = require('../controllers/randomController')

// list all users
router.get('/', randomController.getRandomNum );

module.exports = router;
