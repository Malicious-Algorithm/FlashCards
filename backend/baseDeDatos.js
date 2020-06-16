//requerimos mongoose porque necesitamos que decirle a express que se conecte a mongoDB
const mongoose = require('mongoose');
const direccionBD = 'mongodb://localhost/mean-mean';
mongoose.connect(direccionBD)
    .then(db => console.log('DB conectada!'))//promesa
    .catch(err => console.error(err)); 
module.exports = mongoose;