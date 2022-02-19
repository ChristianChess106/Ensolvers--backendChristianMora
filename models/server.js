const express = require('express');
let cors = require('cors');
const { createDatabase, db } = require('../db/conection');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        // this.usuariosPath = '/api/usuarios';
        this.todoPath = '/api/todo';

        this.crearDB();
        this.conection();

        //Middlewares
        this.middlewares();

        //Rutas de mi App
        this.routes();

    };

    middlewares(){

        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'));

    };

    routes(){

    //    this.app.use(this.usuariosPath, require('../routes/user'));
       this.app.use(this.todoPath, require('../routes/todo'));
    };

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    };

    async crearDB(){
        await createDatabase();
    };

    async conection(){
        try {
            await db.authenticate();
            console.log('db Online');
        } catch (e) {
            throw new Error(e);
        }
    };


};

module.exports = Server