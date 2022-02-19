const {response, request} = require('express');
const { Todoitem } = require('../models/todoitem');


const todosGet = async(req = request, res = response) => {

    const todoItems = await Todoitem.findAll({
      where:{
        estado:true
      }
    });

    res.json(todoItems);
  };

 const todoPut = async(req = request, res = response) => {

    const id = req.params.id;
    const {body} = req;

    try {
      const todoItem = await Todoitem.findByPk(id);
      if(!todoItem){
        return res.status(404).json({
          msg:`el usuario con id ${id} no existe`
        });
      };

      await todoItem.update(body);
      res.json({
        ok:true,
        todoItem
      });
      
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        msg:'Hable con el administrador'
      });
    }

  };

 const todoPost = async(req = request, res = response) => {

    const {body} = req;
    try {
      const todoItem = Todoitem.build(body);
      await todoItem.save();

      res.json({
        ok:true,
        todoItem
      });
      
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        msg:'error, algo paso'
      });
    }
  };

 const todoDelete = async(req = request, res = response) => {

  const {id} = req.params;
  const todoItem = await Todoitem.findByPk(id);
    if(!todoItem){
      return res.status(404).json({
        msg:`la tarea con id ${id} no existe`
    })
  };

  await todoItem.update({estado:false});
  
    res.status(200).json({
        ok:true,
    });
  };

  module.exports = {
    todosGet,
    todoPost,
    todoPut,
    todoDelete
      
  };