const express = require('express')
const cors= require('cors');

class Server{

    constructor (){
            this.app= express();
            this.port=process.env.PORT;
            this.usuariosPath= '/api/usuarios';

            //MIDELWARES
            this.middlewares();

            //RUTAS DE MI APLICACION
             this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //PARSEO Y LECTURA DEL BODY
        this.app.use(express.json() );

        //Directorio Publico
        this.app.use(express.static('public'));
    }


    routes(){
      this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => { 
            console.log('Servidor corriendo en el puerto: ', this.port)
        } );
    }



}




module.exports = Server;