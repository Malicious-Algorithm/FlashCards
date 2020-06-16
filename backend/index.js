//solo codigo para config el server cuando empieza
    //todos los requires
    //Nodemon para no tener que estar guardando
const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./baseDeDatos'); //de baseDeDatos solo quiero la varibale que exportamos, que devuelve la conección, por eso en {}
const cors = require('cors');
const app = express();


    //Configuraciones
        //esto es una variable, nombre 'puerto' y valor
          //process es si un puerto es proporcionado por el SO , sino usa el 3000         
            //esto ayuda cuando depleguemos la app
      app.set('puerto', process.env.PORT || 3000);
     
    
    
      //Middlewares (procesan datos)
        //cada vez que llegue una petición del usuario la muestra en consola
        app.use(morgan('dev'));
        //preparamos para qu el server entienda formatos Json que vengan desde Angular
        app.use(express.json());//antes era bodyParser.json()
        app.use(cors({origin: 'http://localhost:4200'}));

    //Rutas
        //"seteamos" el prefijo para las consultas con /api/cartasflash
            //para que identifiquemos cuando nos pida todas las cartas, o por id ...
    app.use('/api/cartasflash',require('./routes/cartasflash.routes'));


    //Empezando el servidor
    app.listen(app.get('puerto'), () =>{
        console.log('Servidor en puerto', app.get('puerto'));
    });