const  { DataTypes } = require("sequelize");
const { db } = require("../db/conection");


const Todoitem = db.define('Todoitem',{
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
      }
});

module.exports = {
    Todoitem
}