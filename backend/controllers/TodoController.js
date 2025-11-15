
let todoService = require('../services/TodoService');
const mongoose = require("mongoose");

async function getAllTodos(req,res){
    let todos = await todoService.getAllTodos();

    res.status(200).json({
        message: 'Todos retrieved successfully',
        data: todos,
    });
}

async function getTodoById(req,res){

    const id = req.params.id;
    try{
        const todo = await todoService.getTodoById(id);
        res.status(200).json({
            message : 'Success',
            data: todo
        });
    }catch(err){
        res.status(500).send('something went wrong');
    }
}

async function saveTodo(req,res){

    let todo = req.body;

    try{
        let newTodo = await todoService.saveTodo(todo);
        res.status(201).json({
            message: "success",
            data: newTodo
        });
    }catch(err){
        if(err instanceof mongoose.Error.ValidationError){
            res.status(400).json({
                error: err
            })
        }
        else
        {
            res.status(500).json({
                error: err
            })
        }
    }

}


async function updateTodo(req,res, next){
    const id = req.params.id;
    const todo = req.body;
    try{
        let updatedTodo = await todoService.updateTodo(id,todo);
        res.json({
            message: "Success",
            data: updatedTodo
        })
    }catch(err){
        res.status(404).json(
            {
                message: 'Not Found',
                error: 'Todo ' + id + ' does not exist'
            }
        ).end();
    }
    next();
}

async function deleteTodo(req,res){
    const id = req.params.id;
    try
    {
        let todo = await todoService.deleteTodo(id);
        res.status(200).json({
            message: "Success",
            data: todo
        });
    }
    catch(err){
        res.status(404).json({
            error: err.message
        });
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
}