/*
    Acá definimos los metodos o creamos las funciones de GET, borrar, modificar....  

*/
//declaramos un objeto, recordamos que lo tenemos que pasar a objeto para que entienda el server 
const cartasCtrl = {}; 
const Carta = require('../models/cartasflash');//necesito el modelo de datos para la consulta a la bd
//Creamos los métodos o funciones que se encargan de hacer las consultas a la bd

    //Traer todas las cartas
cartasCtrl.getCartas = async (req, res) =>{
    const cartas = await Carta.find();//buscamos todas las cartas en la bd con .find
    res.json(cartas);
}
    //Traer una carta por ID
cartasCtrl.getCarta = async (req, res) =>{
    const id = req.params.id;
    const cartaId = await Carta.findById(id);
    res.json(cartaId);
}

    //Crear carta
cartasCtrl.createCarta = async (req, res) =>{
    const carta = new Carta({
        palabra: req.body.palabra,
        palabraTrad: req.body.palabraTrad
    });
    await carta.save(); //guardamos los datos y como toma tiempo para hacer la accion usamos el async await
    res.json({
        status: 'empleado guardado'
    });
};
    
    //Editar Carta
cartasCtrl.editCarta = async (req, res) =>{
    const { id } = req.params; //de los datos que me va a pasar con req.params, solo quiero el id
    const cartaNuev = {
        palabra: req.body.palabra,
        palabraTrad: req.body.palabraTrad 
    }
    await Carta.findByIdAndUpdate(id, {$set: cartaNuev}, {new: true});
    res.json({
        status: 'carta actualizada'
    });
};

    //Eliminar Carta
cartasCtrl.deleteCarta = async (req, res) =>{
    await Carta.findByIdAndRemove(req.params.id);
    res.json({status: 'eliminado'});
};


module.exports = cartasCtrl;