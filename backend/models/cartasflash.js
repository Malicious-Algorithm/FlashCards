/*
    Acá seteamos el modelo que van a tener nuestras cartas
    , es decir, un nombre, id, texto, texto Traducido... 
*/ 
//lo usamos para definir mis ESQUEMAS de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

//asi van a lucir mis datos en la bd
const CartasFlashSchema = new Schema({
    palabra: { type: String, required: true},
    palabraTrad: { type: String, required: true}   
});

//como van a ser guardados en la BD:
    //lo exporto ya que lo voy a usar en otras partes
module.exports = mongoose.model('CartasFlash', CartasFlashSchema);