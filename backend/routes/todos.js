var express = require('express');
var router = express.Router();

const todoController = require('../controllers/TodoController');
const {saveTodo} = require("../controllers/TodoController");

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);

router.post('/',todoController.saveTodo);

router.put('/', todoController.updateTodo);

router.delete('/:id',todoController.deleteTodo);

module.exports = router;