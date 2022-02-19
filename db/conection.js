const { createConnection } = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");


/* Creando la conexion */
const createDatabase = () => {

    const con = createConnection({
        host:'localhost', 
        user:'root',
        password:'root'
    });
    try {
      con.query("CREATE DATABASE IF NOT EXISTS ensolverscamf");
      
    } catch (error) {
      console.log(error);
    }

    
};

/* Instancia la conexion */
const db = new Sequelize('ensolverscamf','root','root',{dialect:'mysql',define:{timestamps:false}});

/* El query Interface instancia el db una unica vez, y a traves de el puedo crear tablas */
 const queryInterface = db.getQueryInterface();

 /* Crear la tabla de todo items  */
queryInterface.createTable('Todoitems', {
    idtodoitem: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    titulo:{
      type:DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
    },
    estado:{
      type:DataTypes.BOOLEAN,
      defaultValue:true,
    }
  });

/* Crear la tabla de folders */
queryInterface.createTable('Folder', {
    idfolder: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
    },
    nombrefolder: {
      type: DataTypes.STRING,
    }
  });

module.exports = {
    createDatabase,
    db
};