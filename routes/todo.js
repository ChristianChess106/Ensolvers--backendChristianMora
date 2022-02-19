const { Router } = require("express");
const { todosGet,todoPost,todoPut,todoDelete } = require("../controllers/todo");

const router = Router();

router.get('/', todosGet);

router.put('/:id', todoPut);

router.post('/', todoPost);

router.delete('/:id', todoDelete);


module.exports = router;
