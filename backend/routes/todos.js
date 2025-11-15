var express = require('express');
var router = express.Router();

const todoController = require('../controllers/TodoController');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);

router.post('/',todoController.saveTodo);
// router.post('/', (req,res, next) => {
//     res.send(req.body);
//     console.log(req.body);
// });

router.put('/:id', todoController.updateTodo);

router.delete('/:id',todoController.deleteTodo);

module.exports = router;