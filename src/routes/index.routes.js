var express = require('express');
const { index, calculadora, clima, reloj, chatgpt, piano } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router
.get('/', index) 
.get('/calculadora',calculadora)
.get('/clima',clima)
.get('/reloj',reloj)
.get('/chatgpt',chatgpt)
.get('/piano',piano)





module.exports = router;
