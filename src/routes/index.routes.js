var express = require('express');
const { index, calculadora } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router
.get('/', index) 
.get('/calculadora',calculadora)

module.exports = router;
