var express = require('express');
const { index, calculadora, clima } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router
.get('/', index) 
.get('/calculadora',calculadora)
.get('/clima',clima)


module.exports = router;
