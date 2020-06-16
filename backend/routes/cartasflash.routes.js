/*
    #Guarda las rutas que va a acceder a las cartas,
    eliminarlas, agregarlas, modificarlas

*/ 
//requerimos express para crear rutas del servidor  
const express = require('express');
const router = express.Router();
//este contiene todas las funciones que vamos a aplicarle a las cartas
const cartCtrl = require('../controllers/cartasflash.controller');


//la vamos a usar para nuestra API_REST, es decir, enviar y recibir objetos en formato Json
router.get('/', cartCtrl.getCartas);
//.post porque me la va a mandar por un Form
router.post('/', cartCtrl.createCarta);
router.get('/:id', cartCtrl.getCarta);
//editar datos
router.put('/:id', cartCtrl.editCarta);
router.delete('/:id', cartCtrl.deleteCarta);

module.exports = router;

