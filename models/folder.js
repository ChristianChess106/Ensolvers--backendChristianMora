import { DataTypes } from "sequelize";
import { db } from "../db/conection";
import Todoitem from "./todoitem";


const Folder = db.define('Folder',{
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

Folder.hasMany(Todoitem,{as:'todoItem'});

export default Folder;