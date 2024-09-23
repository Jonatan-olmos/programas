var express = require('express');
const { index, calculadora, clima, reloj, chatgpt, piano, conversorMonedas, xp, pruebas } = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router
.get('/', index) 
.get('/xp', xp) 
.get('/pruebas', pruebas) 

.get('/calculadora',calculadora)
.get('/clima',clima)
.get('/reloj',reloj)
.get('/chatgpt',chatgpt)
.get('/piano',piano)
.get('/conversorMonedas',conversorMonedas)






module.exports = router;
