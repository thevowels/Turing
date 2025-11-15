const Todo = require('../models/Todo')
async  function getAllTodos(){
    return Todo.find();
}
async function getTodoById(id){
    return Todo.findById(id);

}

async function saveTodo(todo)
{
    let newTodo = new Todo({
        ...todo
    });
    return newTodo.save();
}

async function updateTodo(id,todo)
{
    let oldTodo = await Todo.findById(id);
    if(oldTodo){
        return Todo.findByIdAndUpdate(id, todo, {new: true});
    }
    else
    {
        throw new Error( 'Todo ' + id + ' does not exist' );
    }
}

async function deleteTodo(id)
{
    let oldTodo = await Todo.findById(id);
    if(oldTodo){
        return Todo.findByIdAndDelete(id);
    }
    else
    {
        throw new Error('Todo with id : ' + id + ' does not exist');
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo
}