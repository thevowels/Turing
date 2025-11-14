
let todoService = require('../services/TodoService');

async function getAllTodos(req,res){
    let todos = await todoService.getAllTodos();

    res.status(200).json(todos);
}

async function getTodoById(req,res){
    const todo = await todoService.getTodoById(req.params.id);
    res.status(200).json(todo);
}

async function saveTodo(req,res){
    const todo = await todoService.saveTodo(req.body);
    res.status(201).json(todo);
}


async function updateTodo(req,res, next){

    const id = req.params.id;
    const todo = await todoService.updateTodo(id);
    res.status(200).json(todo);
    next();
}

async function deleteTodo(req,res){
    const todo = await todoService.deleteTodo(req.params.id);
    console.log('delete todo ', id);
    res.status(200).json(todo);
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
}